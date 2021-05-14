var Compete = require('../models/competition');

exports.Create = (req, res) => {
    Compete.create(req.body, (err, user) => {
        if (err) {
            res.status(400).send({ msg: err })
        } else {
            res.json(user);
            console.log('user created');
        }

    })
}



exports.Competition = (req, res) => {




    Compete.find({},
        (err, profile) => {

            if (err) {
                return res.json({
                    "success": false,
                    "msg": err
                })

            }
            res.status(200).send({
                success: true,
                result: profile
            })
        });


}

exports.Competitionid = (req, res) => {

    Compete.findById(req.params.id, (_err, _result) => {
        if (!_err) {

            res.send((_result));
        }
        else { res.status(400).json({ 'msg': err }); }
    })


}

exports.updateCompetition = (req, res) => {


    var AdminCompete = {
        Title: req.body.Title,
        Description: req.body.Description,
        AuthorName: req.body.AuthorName

    };
    Compete.findByIdAndUpdate(req.params.id, { $set: AdminCompete }, { new: true }, (err, comp) => {
        if (!err) { res.send(comp); }
        else {

            res.status(400).json({ 'msg': err });
        }
    });
}

exports.DeleteCompetition = (req, res) => {

    Compete.findByIdAndRemove(req.params.id, (err, document) => {

        if (!err) {
            res.send(document);
        }
        else {
            res.status(400).json({ 'msg': err });
        }
    });
}