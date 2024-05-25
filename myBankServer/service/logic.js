//import model
const db = require('./db')

//Register

register = (acno, uname, psw) => {
    return db.User.findOne({acno}).then(user => {
        if (user) {
            return {
                message: "Already Registered...!!",
                status: false,
                statusCode: 404
            }
        }
        else {
            newUser = new db.User({
                acno: acno,
                uname: uname,
                psw: psw,
                balance: 0,
                transactions: []

            })
            newUser.save()
            return {
                message: "Registered Successfully...!!",
                status: true,
                statusCode: 200
            }
        }
    })

}

login=(acno,psw)=>{
    return db.User.findOne({acno,psw}).then(user=>{
        if(user)
            {
                return {
                    message: "Login Success..!!",
                    status: true,
                    statusCode: 200
                }
                
            }
            else{
                return {
                    message: "Invalid Account number/password",
                    status: false,
                    statusCode: 404
                }
            }
    })
}

module.exports={
    register,login
}