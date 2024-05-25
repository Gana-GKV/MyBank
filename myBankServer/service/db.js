//import mongoose

const mong = require("mongoose")
mong.connect('mongodb://localhost:27017/bank_db')

//model for collection

const User = mong.model('User', {
    acno: Number,
    uname: String,
    psw: String,
    balance: Number,
    transactions: []
})

module.exports={
    User
}