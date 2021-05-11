var moongose = require('mongoose');
const schema = moongose.Schema
var CompetitionSchema = new schema({

    Title: {
        type: String,

        required: true
    },
    Description: {
        type: String,
        required: true

    },
    AuthorName: {
        type: String,
        required: true
    }

},
    { collection: 'adminus' },
    { timestamps: true });



const Competition = moongose.model('AdminCompetition', CompetitionSchema);
module.exports = Competition;