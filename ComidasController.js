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

const getById = (id) => {
  return comidasModel.findById(id) 
}


 const add = (comida) => {
  const novaComida = new comidasModel({
    nome: comida.nome,
    descricao: comida.descricao,
    imagem: comida.imagem
  
  })
  
  novaComida.save()
}

const remove = async (id)=>{
  //  let comidasRestantes = getAll()
  //  repository.comidas.pratosFavoritos = comidasRestantes.pratosFavoritos.filter((comida)=>{
  //       return comida.id !== id
  //   })
  return comidasModel.findByIdAndDelete(id)
}

const update = (id, comida) => {
  return comidasModel.findByIdAndUpdate(
    id,
    { $set: comida },
    { new: true }, // RETORNAR A COMIDA JA ATUALIZADA NO CALLBACK
  )
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


