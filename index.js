import process from "process"
import express from "express"

console.log("starting")

const api = express()
api.use(express.json())
api.get("/", async (req, res) => res.json({}))
api.listen(8888, "::", () => {
  console.log("GET http://localhost:8888/")
})

setTimeout(() => {
  console.log("exiting")
  process.exit(-1)
}, 5000)
