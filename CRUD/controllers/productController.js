const fs = require('fs');
const productos = JSON.parse(fs.readFileSync(__dirname + "/../database/productos.json"));

const productController = 
{
crear : function (req, res, next){
    res.render ('crear')
},
store : function (req, res, next){
    productos.push(req.body);
    let productosJSON = JSON.stringify(productos);
    fs.writeFileSync(__dirname + "/../database/productos.json", productosJSON);
    res.redirect ("/productos/lista");

},
editar : function (req, res, next){
    let idProducto = req.params.id;
    let productoEncontrado;
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id == idProducto){
            productoEncontrado = productos[i];
            break;
        }
    }

    if (productoEncontrado) {
        res.render ("editar", {productoEncontrado}) 
    
    } else {
        res.send ("El producto no existe");
    }
},

update : function (req, res, next){
    let idProducto = req.params.id;
    
     let editProducto = productos.map (function (producto) {
         if (productos.id == idProducto) {
             return req.body;
         }
         return producto;
     });
     editProductoJSON = JSON.stringify(editProducto);
     fs.writeFileSync(__dirname + "/../database/productos.json", editProductoJSON);
     res.redirect ("/productos/lista");


    },
    eliminar : function (req,res,next) {
        let idProducto = req.params.id;
        let productosEliminados = productos.filter(function (producto) {;
        return producto.id != idProducto;

    });
    productosEliminadosJSON = JSON.stringify(productosEliminados)
    fs.writeFileSync(__dirname + "/../database/productos.json", productosEliminadosJSON);
    res.redirect ("/productos/lista");

   },

   lista : function (req,res,next) {
       res.render ("lista",{productos});
   }


}

module.exports = productController;