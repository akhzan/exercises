const express = require('express')
const app = express()
const Cart = require('./cart.js')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
    let cart = new Cart()
    cart.addProduct("Baju Merah Mantap", 1)
    cart.addProduct("Baju Merah Mantap", 1);
    cart.addProduct("Bukuku", 3);
    cart.removeProduct("Bukuku");
    cart.addProduct("Singlet Hijau", 1);
    cart.removeProduct("ProdukBohongan");
    cart.showCart();
})