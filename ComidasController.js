const repository = require('./ComidasRepository')

const getAll = ()=>{
    return repository.comidas.pratosFavoritos
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    getAll().push(comida)
}

const remove = (id)=>{
   let comidasRestantes = getAll()

   repository.comidas.pratosFavoritos = comidasRestantes.pratosFavoritos.filter((comida)=>{
        return comida.id !== id
    })
}

const update = (id, comida)=>{
    let comidaCadastrada = getAll().find(comida =>{
        return comida.id ===id
    })

    console.log(comida)
    if(comida.nome !== undefined){
    comidaCadastrada.nome = comida.nome
    }

    if(comida.descricao !== undefined){
    comidaCadastrada.descricao = comida.descricao
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

module.exports = {getAll, add, remove, change, update}


