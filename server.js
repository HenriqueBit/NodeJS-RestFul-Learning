const express = require('express');
const app = express();
PORT = 3000;
app.use(express.json());


app.get("/clients", (req, res) => {
   res.json(data);
})

app.get("/clients/:id", (req, res) => {
   const { id } = req.params;
   const client = data.find(cli => cli.id == id);
   if (!client) {
      return res.status(204).json();
   }
   res.json(client);
});

app.post("/clients", (req, res) => {
   const { name, email } = req.body;
   
   // salvar

   res.json({ name, email });
});

app.put("/clients/:id", (req, res) => {
   
});

app.delete("/clients/:id", (req, res) => {
   
});


app.listen(PORT, () => {
   console.log("Server is running on port ${PORT}");
})