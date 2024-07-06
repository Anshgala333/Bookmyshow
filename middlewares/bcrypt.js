import bcrypt from "bcryptjs"

var salt = bcrypt.genSaltSync(10);

function generatepassword(userdata){
    return bcrypt.hashSync(userdata , salt)
}

function comparepassword(userdata , hash){
    return bcrypt.compareSync(userdata, hash); 

}

export { generatepassword, comparepassword}