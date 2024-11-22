import express from "express";
import { listarPosts } from "../../controllers/postControler.js";

 const routes = (app) => {
  app.use(express.json());
  /* todos */
  app.get("/peu", listarPosts);
};

// function buscarID (id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// }
// /* escolher por ID */
// app.get('/peu/:id', (req,res) =>{
//     const index = buscarID(req.params.id)
//     res.status(200).json(posts[index]);
// });

export default routes;