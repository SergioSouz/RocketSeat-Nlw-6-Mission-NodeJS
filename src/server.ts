import express from 'express'
import "reflect-metadata";
import "./database"

const app = express()

// http://localhost:3000
app.listen(3000, () => console.log("SERVER IS RUNNING"))