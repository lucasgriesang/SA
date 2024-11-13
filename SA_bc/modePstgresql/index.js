require("dotenv").config(); //dotenv: biblioteca para gerenciar as variaveis de ambiente de um projeto.

const port = process.env.PORT; //que esteja na variavel de ambiente PORT de onte estamos hospedando.

const express = require("express"); // chamar, requerer o Express para um projeto.

const db = require("./db.js")

const app = express() //cria um aplicativo web atraves do Express.

app.get("/", (req,res) => {
    res.json({ // enviar resposta do JSON.
        menssage: "Bomba!"
    })
})

// definir a rota /SAdb
app.get("/SAdb", async(req,res) => {
    const SAdb = await db.selectCustomers();
    res.json(SAdb);
})

app.listen(port) //escutar as requisições que vem da porta.

console.log("Nem fudendo kkk")