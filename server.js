import express from 'express'
import routes from './src/config/routes/postRoutes.js';






const posts = [
    {
        id: 1,
        descricao: "Uma foto de um cachorro",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 2,
        descricao: "Uma paisagem montanhosa",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 3,
        descricao: "Comida deliciosa",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id: 4,
        descricao: "Uma cidade à noite",
        imagem: "https://placecats.com/millie/300/150"
      }

];

const app = express();
routes(app)

app.listen(3000,() =>{
    console.log("Servidor escutando");
});



