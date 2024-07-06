
import theatreModel from "../../models/admin/theatremodel.js"


const insertTheatre = async function (req, res) {
    console.log(req.body);
    try {
        var instance = new theatreModel(req.body)
        const response = await instance.save()
        res.status(200).send({ message: "record added" })
    }
    catch (err) {
        res.status(403).send({ message: err.message })
        

    }
}
const updatetheatre = function (req, res) {

}
const selecttheatre = async function (req, res) {
    //    res.render("admin/showtheatre")
    try {
        

        const response = await theatreModel.find()
        res.render("admin/showtheatre" , {data:response})
    }
    catch (err) {
        res.status(403).send({ message: err.message })

    }


}
const deletetheatre = function (req, res) {

}
const addtheatrepage = function (req, res) {
    res.render("admin/addtheatre")
}

export {
    insertTheatre, updatetheatre, selecttheatre, deletetheatre, addtheatrepage
}