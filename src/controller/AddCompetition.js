var Competition = require('../models/competition');

exports.AddCompetition = (req, res) => {


    if (!req.body.Title || !req.body.Description || !req.body.AuthorName) {
        return res.status(400).json({
            'msg': 'You need to enter each of credentials'
        });
    }



    let CompeteUser = Competition(req.body);
    CompeteUser.save((err, competitionuser) => {
        if (err) {
            return res.status(400).json({ 'msg': error });
        }
        else {
            return res.status(201).json({ usersCompete: competitionuser });
        }


    });





}





