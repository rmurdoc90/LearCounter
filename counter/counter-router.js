'use strict'
const router = require("express").Router()

const Counter = require("./counter-model")

// GET the counter number
router.get("/", (req, res) => {
  Counter.find()
    .then((counter) => {
      res.status(200).json(counter)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

// GET the number, add 1, update the db, return new number
router.get("/update", (req, res) => {
  let count = Counter.find()
  count ++
  Counter.update(count)
    .then((updatedCount) => {
      res.status(200).json(updatedCount)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
}) 