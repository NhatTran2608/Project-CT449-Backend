const Course = require('../models/Song');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [POST] /me/music/store
    add(req, res) {
        try {
            let data = req.body
            Course.create(data)
        } catch (e) {
            console.log("Not data!!!", e)
        }
    }
    // [GET] /music/:slug
    show(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // course
                res.send(
                    { courses: mongooseToObject(course) }
                )
            })
            .catch(next);
    }

    // [GET] /music/:id
    showId(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((course) =>
                res.send(
                    { courses: mongooseToObject(course) }
                ),
            )
            .catch(next);
    }

    // [GET] /music/create
    create(req, res, next) {
        res.send('music/create');
    }

    // [POST] /music/store
    store(req, res, next) {

        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.send('/me/stored/music'))
            .catch((error) => { '' });
    }

    // [GET] /music/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.send(
                    { courses: mongooseToObject(course) }
                ),
            )
            .catch(next);
    }

    // [PUT] /music/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.send('/me/stored/music'))
            .catch(next);
    }

    // [DELETE] /music/:id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.send('back'))
            .catch(next);
    }

}

module.exports = new CourseController();
