import express from 'express'

const app = express()

/**
 * 
 * ============TIPOS DE METODOS =================
 * 
 * GET     =>  Buscar
 * POST    =>  Inserir
 * DELETE  =>  Remover
 * PUT     =>  Alterar
 * PUTCH   =>  Alterar dado espercifico 
 * 
 * ==============================================
 */



/**
 * 
 * Req => response => entrando 
 * Res => resposta => saindo
 * 
 */


app.get("/test", (req,res)=>{
    return res.send("Primeira rota get")
})


app.post("/test-post", (req,res)=>{
    return res.send("Primeira rota post")
})


// http://localhost:3000
app.listen(3000, () => console.log("SERVER IS RUNNING"))