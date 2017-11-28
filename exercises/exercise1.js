const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => {
    mainApp()
})

function mainApp() {
    let inputValue = 4
    let outputValue = ''
    for(let i=inputValue; i >= 0; i--) {
        outputValue += `${iterateMe(i, i+1)}\n`
    }
    console.log(outputValue)
}

function iterateMe(mainNum, rep) {
    let returnValue = `${mainNum}${mainNum}`
    for(let i=0; i<rep; i++){
        returnValue = `${returnValue}${mainNum+2}`
    }
    return returnValue
}