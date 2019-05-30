const express = require('express')

const comidas = {
    pratosFavoritos: [
{
    "nome": "Paçoquita",
    "descricao":"O melhor doce já inventado!",
    "imagem": "https://http2.mlstatic.com/pacoquita-de-amendoim-caixa-com-20g-cada-pacoca-premium-D_NQ_NP_917716-MLB27126685393_042018-F.jpg"
},

{
    "nome": "Batata Frita",
    "descricao":"O melhor jeito de comer batata!",
    "imagem": "https://portal-amb-imgs.clubedaana.com.br/2018/11/batata-frita-sequinha-crocante.jpeg"
},

{
    "nome": "Lasanha aos Quatro Queijos",
    "descricao":"A melhor comida do mundo!",
    "imagem": "https://abrilmdemulher.files.wordpress.com/2016/10/receita-lasanha-quatro-queijos.jpg?quality=90&strip=info&w=620&h=372&crop=1"
},

{
    "nome": "Chocolate",
    "descricao":"Não precisa nem comentar...",
    "imagem": "http://newspositivas.com/wp-content/uploads/2018/07/naom_5a4f9bdfb0e6b.jpg"
},

{
    "nome": "Falafel",
    "descricao":"Uma deliciosidade do mundo árabe!",
    "imagem": "http://www.delonghi.com/Global/recipes/multifry/195.jpg"
},

{
    "nome": "Hamburguer Vegetariano",
    "descricao":"Animais são amigos, não comida!",
    "imagem": "https://www.mundoboaforma.com.br/wp-content/uploads/2015/11/hamburguer-vegetariano-600x330.jpg"
}

]}

const servidor = express()

servidor.get("/comidas",(request, response)=>{
    response.send("Boa noite, amigas!")
})

servidor.listen(3000)
console.log('servidor rodando na porta 3000')



