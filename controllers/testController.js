const { User } = require('../models')

module.exports = {
    test: async (req, res) => {
        const data = await User.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });

        return res.json({
            message: "Register berhasil, Silahkan Login",
            data: data
        }, 200)
    }
}