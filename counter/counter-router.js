'use strict'
const router = require("express").Router()

const Counter = require("./counter-model")

// GET the counter number
router.get("/", (req, res) => {
  Counter.find()
    .then((counter) => {
      // console.log(counter)
      res.status(200).json(counter)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

// GET the number, add 1, update the db, return new number
router.get("/update", (req, res) => {
  Counter.update()
    .then((counter) => {
      res.status(200).json(counter)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
}) 

// GET the reset of the number
router.get("/reset", (req, res) => {
  Counter.reset()
    .then((counter) => {
      res.status(200).json(counter)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router