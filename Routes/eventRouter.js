const express = require('express')
const moment = require('moment')

const Event = require('../Models/eventModel.js')
const {dateTimeParseString} = require('../config.js')

const router = express.Router()

/* Retrieves all events */
router.get('/', (req, res) => Event.find({}, (err, events) => {
    if (err) {
        res.status(500).send()
    }
    if (!events) {
        res.status(404).send()
    }
    res.status(200).send(events)
}))

/* Inserts event into database */
router.post('/', (req, res) => {
    let {name, time, place} = req.body
    Event.create({
        name: name,
        time: {
            start: moment(time.start, dateTimeParseString).toDate(), // parse into date object
            end: moment(time.end, dateTimeParseString).toDate()
        },
        place: {
            name: place.name,
            latitude: place.latitude,
            longitude: place.longitude
        },
        link: req.body.link || "",
        details: req.body.details || ""
    }, (err, newEvent) => {
        if (err) {
            res.status(500).send()
        }
        if (!newEvent) {
            res.status(404).send()
        }
        res.status(200).send(newEvent)
    })
})
module.exports = router