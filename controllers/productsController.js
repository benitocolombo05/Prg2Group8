const productsController = {
    index: (req, res) => res.render("products.ejs"),
    add: (req, res) => res.render("product-add.ejs"),


};


module.exports = productsController;

