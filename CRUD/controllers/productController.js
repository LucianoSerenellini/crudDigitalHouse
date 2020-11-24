const fs = require('fs');
var productos = JSON.parse(fs.readFileSync(__dirname + "/../database/productos.json"));

const productController = {
crear : function (req, res, next){
    res.render ('crear')
},
store : function (req, res, next){
    productos.push(req.body);
    productosJSON = JSON.stringify(productos);
    fs.writeFileSync(__dirname + "/../database/productos.json", productosJSON);
    res.send ("Producto creado");

},

}

module.exports = productController;