import { PrismaClient } from '@prisma/client' // ORM to communicate with the database
import express from 'express' // server side framework

// start database (only 1 instance)
const prisma = new PrismaClient()

const app = express()
const port = 3000

// midlewares (are executed in between request <-> response)
// such as midddlware to check user permissions or middleware to log the data in the console

// we are using JSON as a data format to return the data to the client (client can be POSTMAN, browser, REACT, VueJS)
// alternatives to JSON can be XML, GRAPHQL
app.use(express.json())


// routes (such as /reviews, /users, /users/1234)
// methods (such as GET, POST, DELETE, PATCH)
app.get('/', async(req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

// async-await is used to managed the asynchronious behaviour of javascript, 
// other alternatives are promises and callbacks

// a process is synchronious when the it is executed directly such as for loops, printing in console log
// a process is async when the result can come at any point in the future such as saving a file, reading a file
// saving some data in the database using prisma

// an async process has a lot of benefits because it doesnt stop the execution of the program and meanwhile you 
// can do other things
app.post('/', async(req, res) => {
    // get the data from postman using the req object
    const data = req.body

    // add the data to the database using prisma
    const resp = await prisma.user.create({ data })

    // return the data that comes from prisma after adding it to postman 
    res.json(resp)
})

// start server
app.listen(port, () => {
    console.log(`Review app listening on port ${port}`)
})