const repository = require('./ComidasRepository')

const getAll = ()=>{
    return repository.comidas
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    getAll().pratosFavoritos.push(comida)
}

const remove = (id)=>{
   let comidasRestantes = getAll()

   getAll().pratosFavoritos = comidasRestantes.pratosFavoritos.filter((comida)=>{
        return comida.id !== id

    })
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

module.exports = {getAll, add, remove, change}


