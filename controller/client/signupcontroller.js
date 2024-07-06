
import usermodel from "../../models/client/signupmodel.js"
import { comparepassword, generatepassword } from "../../middlewares/bcrypt.js"
import { generatetoken  } from "../../middlewares/projecttoken.js"

const signupform = function (req, res) {
    res.render("client/signup")
}
const loginform = function (req, res) {
    res.render("client/login")
}
const signupaction = async function (req, res) {
    //   res.render("login")
    // console.log(req.body);
    try {
        var result = await usermodel.findOne({ useremail: req.body.useremail })
        console.log(result);
        if (result === null) {
            req.body.userpassword = generatepassword(req.body.userpassword)
            delete req.body.userconfirm
            var instance = new usermodel(req.body)
            var answer = await instance.save()
            res.status(200).send({ message: "user added" })

        }
        else {
            res.status(200).send({ message: "user exist" })
        }


    }
    catch (err) {

    }


}
const loginaction = async function (req, res) {
    //   res.render("login")
    // console.log(req.body);
    try {
        var { useremail, userpassword } = req.body
        var ansemail = await usermodel.findOne({ useremail: useremail })
        console.log(ansemail);

        if (ansemail === null) {
            res.send({ message: "invalid email-id or password" })
        }
        else {
            var result = comparepassword(userpassword , ansemail.userpassword)
            console.log(result);
            if(result){
                
                var payload = {
                    username : ansemail.username,
                    useremail : ansemail.useremail,
                    usermobile : ansemail.usermobile
                }
                var token = generatetoken(payload)
                // console.log(payload);

                // console.log(process.env.SECRETKEY);
                // console.log(process.env.TOKENTIME);
                res.send({ message: "sucess" , tokenvalue: token})
            }
            else{
                res.send({ message: "invalid email-id or password" })
            }

        }
    }
    catch (err) {

    }
}

export { signupaction, loginaction, signupform, loginform }