import conectarAoBanco from "../config/dbConfig.js"


const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPost(){
    const db = conexao.db('Imersao')
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}