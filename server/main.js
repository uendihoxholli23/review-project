import { PrismaClient } from '@prisma/client'; // ORM to communicate with the database
import express from 'express'; // server side framework

// start database (only 1 instance)
const prisma = new PrismaClient()

const app = express()
const port = 3000

const validation = require('./middlewares/validationMiddleware')
const userSchema = require('./validations/userValidation')

app.use(express.json())

// routes (such as /reviews, /users, /users/1234)
// methods (such as GET, POST, DELETE, PATCH)
app.get('/', async(req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

app.post('/', validation(userSchema), async(req, res) => {
    // get the data from postman using the req object
    const data = req.body

    // add the data to the database using prisma
    const resp = await prisma.user.create({ data })

    // return the data that comes from prisma after adding it to postman 
    res.json(resp)
})

// app.put('/', async(req, res) => {
//     const data = req.body
//     const resp = await prisma.user.updateMany({ data })

//     res.json(resp)
// })

app.delete('/deleted/:id', async(req, res) => {
    return res.json({ body: req.body, id: req.params.id });
})


// start server
app.listen(port, () => {
    console.log(`Review app listening on port ${port}`)
})