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

servidor.get("/comidas/:id", async (request, response)=>{
  const id = request.params.id
  controller.getById(id)
  .then(comida=> response.send(comida))
})

servidor.post('/comidas', (request, response) => {
  response.status(200).send(controller.add(request.body))
})

servidor.delete('/comidas/:id', async (request, response) => {
  controller.remove(request.params.id)
    .then(comida => response.sendStatus(204))
})

servidor.patch('/comidas/:id', async (request, response) => {
  const id = request.params.id
  controller.update(id, request.body)
    .then(response.sendStatus(204))
})

servidor.put("/comidas/:id", (request, response) =>{
    controller.change(request.params.id, request.body)
    response.sendStatus(200)
})

servidor.listen(3000)
console.log('servidor rodando na porta 3000')




