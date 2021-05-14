var express = require('express'),
    routes = express.Router();
var userController = require('./controller/user-con');
var AddCompetitions = require('./controller/AddCompetition');
var passport = require('passport');
var Competitionget = require('./middleware/findCompetition');
var UserAddtoHome = require('./middleware/Usersaddtohome');


routes.get('/', (req, res) => {
    return res.send('Hello, this is the API!');
});

routes.post('/addcompetition', AddCompetitions.AddCompetition);
routes.get('/getCompetition', Competitionget.Competition);
routes.get('/getCompetetionCreate', Competitionget.Create);
routes.get('/getCompetition/:id', Competitionget.Competitionid);
routes.put('/getCompetition/:id', Competitionget.updateCompetition);
routes.delete('/getCompetition/:id', Competitionget.DeleteCompetition);
routes.post('/register', userController.registerUser);
routes.get('/register/:id', UserAddtoHome.USERfindbyID);
routes.put('/registerUpdate/:id', UserAddtoHome.USERaddtoHOME);
routes.post('/login', userController.loginUser);


// for test
routes.get('/special', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ msg: `Hey ${req.user.email}! I open at the close.` });
});



module.exports = routes;