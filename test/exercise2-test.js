var assert = require('assert')
const Cart = require('./../src/cart.js')

function cartTest() {
    let cart = new Cart()
    cart.addProduct("Baju Merah Mantap", 1)
    cart.addProduct("Baju Merah Mantap", 1)
    cart.addProduct("Bukuku", 3)
    cart.removeProduct("Bukuku")
    cart.addProduct("Singlet Hijau", 1)
    cart.removeProduct("ProdukBohongan")
    return cart.showCart()
}

describe('Cart', function () {
    it(`should return Baju Merah Mantap (2)\nSinglet Hijau (1)`, function () {
      assert.equal(`Baju Merah Mantap (2)\nSinglet Hijau (1)`, cartTest());
    });
});
