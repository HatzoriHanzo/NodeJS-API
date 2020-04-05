const mongoose = require('mongoose');

const Product = mongoose.model('Products');

module.exports = {
    //listar todos
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);

    },
    //detalhar
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    //criar
    async store(req, res) {
        //criação
        const product = await Product.create(req.body);

        return res.json(product);

    },
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(product);
    },
    async destroy(req, res) {
        await Product.findByIdAndDelete(req.params.id)
        return res.send();
    }
};