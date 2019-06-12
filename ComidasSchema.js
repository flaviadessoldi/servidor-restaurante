const mongoose = require("mongoose")
//casa Schema equivale a uma collection
const Schema = mongoose.Schema
const ComidasSchema = new Schema ({
    _id:{type: mongoose.Schema.Types.ObjectId, auto: true},
    nome:{type: String, required: true},
    descricao:{type: String},//opcional
    valor:{type:Number}
})

const comidasModel = mongoose.model("comidas", ComidasSchema)

module.exports = comidasModel
