const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())


servidor.get("/comidas", async (request, response)=>{
    // response.send(controller.getAll())
    controller.getAll()
    .then(comidas => response.send(comidas))
})

servidor.get("/comidas/:id",(request, response)=>{
  const id = request.params.id
  response.send(controller.getById(id))
})

servidor.post("/comidas", bodyParser.json(), (request, response)=>{
    response.send(200).send(controller.add(request.body))
})

servidor.delete("/comidas/:id",(request, response) =>{
    controller.remove(request.params.id)
    response.sendStatus(204)
})

servidor.patch('/comidas/:id', bodyParser.json(), (request, response) => {
    const id = request.params.id
    const sucesso = controller.update(id, request.body)
    if(sucesso){
      response.sendStatus(204)
    } else {
      response.sendStatus(404)
    }
  })

servidor.put("/comidas/:id",bodyParser.json(), (request, response) =>{
    controller.change(request.params.id, request.body)
    response.sendStatus(200)
})

servidor.listen(3000)
console.log('servidor rodando na porta 3000')




