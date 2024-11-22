import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
  let mongoClient;
  try {
    mongoClient = new MongoClient(stringConexao);
    console.log("Conectando ao cluster do BD");
    await mongoClient.connect();
    console.log("Conectando ao mongodb atlas com sucesso");

    return mongoClient;
  } catch (error) {
    console.log("faljha na conexao");
    process.exit();
  }
}
