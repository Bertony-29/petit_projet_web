import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook pour naviguer

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Inscription réussie !");
      } else {
        setMessage("Erreur : " + data.error);
      }
    } catch (error) {
      console.error(error);
      setMessage("Erreur réseau !");
    }
  }

  // Fonction pour aller à la page connexion
  function Login() {
    navigate("/login"); // Remplace "/login" par le chemin de ta page de connexion
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue !</h1>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">S’inscrire</button>
      <p>{message}</p>
      <h3>Se connecter :</h3>
      <button type="button" onClick={Login}>
        Connexion
      </button>
    </form>
  );
}

export default Register;
