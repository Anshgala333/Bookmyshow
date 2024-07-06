// console.log($);
// console.log(jQuery);
const API = "http://localhost:3000"

$(document).ready(function () {
    $("#theatreform").submit(function (ev) {
        ev.preventDefault();
        $("#para").removeClass("alert alert-success ")
        if ($("#txtbox").val() != "") {
            var formData = $("#theatreform").serialize()
            // console.log(formData);
            $.ajax({
                type: "POST",
                data: formData,
                url: API + "/theatre",
                success: function (res) {
                    console.log(res);
                    $("#para").addClass("alert alert-success").text("record added")
                    $("#txtbox").val("")
                },

                err: function (err) {
                    console.log(err);
                }
            })
        }
        else {
            $("#para").addClass("alert alert-danger").text("name requires")
            $("#txtbox").val('')
        }


    })

    // --------------------------------

    $("#signupform").submit(function (ev) {
        ev.preventDefault();


        var formData = $("#signupform").serialize()
        // console.log(formData);
        console.log($("#signupform"))
        $.ajax({
            type: "POST",
            data: formData,
            url: API + "/client/signup",
            success: function (res) {
                console.log(res);

            },

            err: function (err) {
                console.log(err);
            }
        })



    })
    //  ------------------------------------------------------------------------

    $("#loginform").submit(function (ev) {
        ev.preventDefault();


        var formData = $("#loginform").serialize()
        // console.log(formData);
        $.ajax({
            type: "POST",
            data: formData,
            url: API + "/client/login",

            success: function (res) {
                console.log(res);
                $("#para").html(res["message"]);
                localStorage.setItem("tokenvalue", res["tokenvalue"]);

            },


            err: function (err) {
                console.log(err);
            }
        })



    })



})
