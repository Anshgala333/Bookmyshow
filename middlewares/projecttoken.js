import jwt from "jsonwebtoken"

function generatetoken(payload) {
    var token = jwt.sign({data: payload}, process.env.SECRETKEY, { expiresIn: 3600 });
    console.log(token);
    return token;
}
function verifytoken() {

}

export { generatetoken, verifytoken }
