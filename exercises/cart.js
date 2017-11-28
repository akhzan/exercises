module.exports = class Cart {
    constructor() {
        this.products = []
    }
    addProduct(productCode, quantity) {
        !this.products.find(x => x.productCode === productCode) ?
            this.products.push({
                productCode: productCode,
                quantity: quantity
            }) : 
            this.products[this.products.findIndex(x => x.productCode === productCode)].quantity += quantity
    }
    
    removeProduct(productCode) {
        if(this.products.find(x => x.productCode === productCode)) {
            this.products.splice( this.products.findIndex(x => x.productCode === productCode), 1)
        }
    }
    
    showCart() {
        let returnValue = this.products.map(x => (`${x.productCode} (${x.quantity})`)).join('\n')
        console.log(returnValue)
        return returnValue
    }
}