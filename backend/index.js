const express = require("express")
const port = 5000
const { PrismaClient } = require('./generated/prisma');
const prisma = new PrismaClient();
const cors = require("cors");
const app = express();



app.use(express.json());
app.use(cors());
app.get("/", (req,res) => {
    res.send("Ah oui oui, c carré")
})

app.listen(port,() => {
    console.log("Le serveur est en ligne");
})

app.post("/register", async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'inscription" });
  }
});


app.post("/login", async (req,res) => {
    const {email} = req.body;

    try {
        const user = await prisma.user.findUnique({
        where: { email: email}
        });
    if(!user){
        return res.status(404).json({error: "Utilisateur non trouvé"})};

    res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({error : "Erreur lors de la connexion"});
       }
});

app.post("/show-detail", async (req,res) => {
    const { name, email, userId } = req.body;

      try {
        const detail = await prisma.detail.create({
          data: {
            name,
            email,
            user: { connect: { id: userId } }, // Relie à l'utilisateur existant
          },
        });

        res.status(201).json(detail);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'ajout de détails" });
      }
});


app.get('/api/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});







