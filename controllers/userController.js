const userController = {
    login: (req, res) => res.render('login'),
    register: (req, res) => res.render('register'),
    profile: (req, res) => res.render('profile'),
    buscar: (req, res) => res.render('search-results'),
}

module.exports = userController

