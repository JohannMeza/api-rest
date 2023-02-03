const Articulos = require("../models/articulos");

const index = async (req, res) => {
  try {
    const data = await Articulos.find();

    return res.status(200).json({
      error: false,
      status: 200,
      statusText: "Request Succesfully",
      data: data
    })
  } catch (err) {
    res.status(500).json({ err })
  }
}

const show = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Articulos.findById({ _id: id });

    return res.status(200).json({
      error: false,
      status: 200,
      statusText: "Request Succesfully",
      data: data
    })
  } catch (err) {
    res.status(500).json({ err })
  }
}

const store = async (req, res) => {
  try {
    const { Nombre, Precio, Color, Stock } = req.body;
    const data = new Articulos({ Nombre, Precio, Color, Stock })
    await data.save();

    return res.status(200).json({
      error: false,
      status: 200,
      statusText: "Se agrego con éxito"
    })
  } catch (err) {
    console.log(err)

    res.status(500).json({ err })
  }
}

module.exports = {
  index,
  show,
  store
}