var Users = require('../models/user');
exports.USERaddtoHOME =
    (req, res) => {
        var UserAd = {

            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        }
        Users.findByIdAndUpdate(req.params.id, { $set: UserAd }, { new: true }, (err, users) => {
            if (!err) {

                res.send(users);
            }
            else {
                res.send({ msg: err });
            }

        });





    }
exports.USERfindbyID = (req, res) => {

    Users.findById(req.params.id, (error, user) => {
        if (!error) {
            res.status(400).send({ msg: error });

        }
        else {
            res.send(user);
        }
    })
}

