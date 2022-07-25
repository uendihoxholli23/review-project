import { PrismaClient } from '@prisma/client'; // ORM to communicate with the database
import express from 'express'; // server side framework
import validationMiddleware from './middlewares/validationMiddleware.js';
import userValidation from './validations/userValidation.js';


// start database (only 1 instance)
const prisma = new PrismaClient()

const app = express()
const port = 3000

app.use(express.json())

// routes (such as /reviews, /users, /users/1234)
// methods (such as GET, POST, DELETE, PATCH)
app.get('/', async(req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

app.post('/', validationMiddleware(userValidation), async(req, res) => {
    // get the data from postman using the req object
    const data = req.body

    // add the data to the database using prisma
    const resp = await prisma.user.create({ data })

    // return the data that comes from prisma after adding it to postman 
    res.json(resp)
})

app.put('/:id', async(req, res) => {
    const data = req.body
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: Number(req.params.id),
            },
            data: data
        })
        return res.json({
            message: 'User updated successfully!',
            data: updatedUser
        });
    } catch (error) {
        return res.json({
            message: error.meta.cause,
            error
        });
    }

})

app.delete('/:id', async(req, res) => {
    const userId = req.params.id

    // learn try and catch with async await
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: Number(req.params.id), // all the params are String so in this case id is a number and we cast it 
            },
        })
        return res.json({
            message: 'User deleted successfully!',
            data: deletedUser
        });
    } catch (error) {
        return res.json({
            message: error.meta.cause,
            error
        });
    }


})


// start server
app.listen(port, () => {
    console.log(`Review app listening on port ${port}`)
})