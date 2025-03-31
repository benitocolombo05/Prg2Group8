const userController = {
    login: function (req, res) {
        return res.render("login.ejs")
    },
    register: function (req, res) {
        return res.render("register.ejs")
    },
    profile: function (req, res) {
        return res.render("profile.ejs")
    },
    
}

module.exports = userController

