import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    async function handleSubmit(e) {
             e.preventDefault();

             try {
               const response = await fetch("http://localhost:5000/login", {
                 method: "POST",
                 headers: {
                   "Content-Type": "application/json"
                 },
                 body: JSON.stringify({ email }),

               });

               const data = await response.json();

               if (response.ok) {
                 localStorage.setItem("userId", data.id);
                 navigate("/show-detail");
               } else {
                 setMessage("Erreur : " + data.error);
               }
             } catch (error) {
               console.error(error);
               setMessage("Erreur réseau !");
             }



           }

           return (
             <form onSubmit={handleSubmit}>
               <h1> Se connecter : </h1>
               <input
                 type="email"
                 placeholder="Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <button type="submit">Se connecter</button>
               <p>{message}</p>
             </form>
           );
         }



export default Login;