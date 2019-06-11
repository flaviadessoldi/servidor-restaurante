const {connect} = require('./ComidasRepository')
const comidasModel = require('./ComidasSchema')
connect()

const getAll = async ()=>{
    return comidasModel.find((error, comidas)=>{
        if(error){
            console.error(error)
        }
        return comidas
    })
}

const getById= (id)=>{
    return comidasModel.findById(
        id,
        (error, comida)=>{
            return comida
        }
    )
 }

const add = (comida) => {
   const novaComida = new comidasModel({
       nome: comida.nome,
       descricao: comida.descricao
   })
   novaComida.save()
}

const remove = (id)=>{
   let comidasRestantes = getAll()

   repository.comidas.pratosFavoritos = comidasRestantes.pratosFavoritos.filter((comida)=>{
        return comida.id !== id
    })
}

const update = (id, comida) => {
    let comidaCadastrada = getAll().find(comida => {
      return comida.id === id
    })
  
    if(comidaCadastrada === undefined){ // nao encontrou a comida
      return false
    }
    else {
      if(comida.nome !== undefined) {
        comidaCadastrada.nome = comida.nome
      }
      if(comida.descricao !== undefined) {
        comidaCadastrada.descricao = comida.descricao
      }
  
      return true
    }
  }

const change = (id, altercao)=>{
    let pratoExistente = getAll().comidas

    pratoExistente.filter((comida)=>{
        if (comida.id === id){
            let nome = () => {comida.nome = altercao.nome}
            let descricao = ()=> {comida.descricao = alteracao.descricao}
            let imagem = ()=> {comida.imagem = altercao.imagem}

            return nome(), descricao(), imagem()
        }
    })
}

module.exports = {getAll, add, remove, change, update, getById}


