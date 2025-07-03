import React, { useState, useEffect } from 'react';

function ShowDetail() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log("userId récupéré :", userId);

    if (!userId) {
      setError("Utilisateur non connecté");
      return;
    }

    fetch(`http://localhost:5000/api/users/${userId}`)
      .then(response => {
        console.log("Status réponse fetch :", response.status);
        if (!response.ok) {
          throw new Error('Erreur réseau : ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log("Données reçues :", data);
        setUser(data);
      })
      .catch(error => {
        console.error('Erreur:', error);
        setError("Impossible de récupérer les données utilisateur.");
      });
  }, []);

  if (error) {
    return <div style={{color: 'red'}}>{error}</div>;
  }

  if (!user) {
    return <div>Chargement des données...</div>;
  }

  return (
    <div>
      <h2>Bienvenue {user.name} !</h2>
      <p>Email : {user.email}</p>
      <p>ID utilisateur : {user.id}</p>
    </div>
  );
}

export default ShowDetail;
