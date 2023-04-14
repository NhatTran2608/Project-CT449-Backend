const Song = require('../models/Song');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Song.find({})
            .then((courses) => {
                res.send({ courses: mutipleMongooseToObject(courses)});
            })
            .catch(next);
    }
}

module.exports = new SiteController();
