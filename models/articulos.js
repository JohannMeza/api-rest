const { Schema, model } = require("mongoose");

const ArticulosSchema = new Schema({
  Nombre: {
    type: String,
    required: true,
    trim: true
  },
  Precio: {
    type: Number,
    required: true
  },
  Color: {
    type: String,
    required: true
  },
  Stock: {
    type: Number,
    required: true
  },
}, {
  versionKey: false,
  timestamps: true
})

const Articulos = model("Articulos", ArticulosSchema);
module.exports = Articulos;