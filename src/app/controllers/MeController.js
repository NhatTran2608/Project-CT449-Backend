const Course = require('../models/Song');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/music
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses]) =>
                res.send(
                   {courses: mutipleMongooseToObject(courses)}
                ),
            )
            .catch(next);
    }
}

module.exports = new MeController();
