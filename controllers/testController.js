const { User, data_test } = require('../models')

module.exports = {
    test: async (req, res) => {
        // const data = await User.create({
        //     username: req.body.username,
        //     password: req.body.password,
        //     email: req.body.email,
        // });
        const data = await data_test.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
        });

        return res.json({
            message: "Register berhasil, Silahkan Login",
            data: data
        }, 200)
    }
}