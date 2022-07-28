import { PrismaClient } from '@prisma/client'; // ORM to communicate with the database
import express from 'express'; // server side framework
import userValidation, { idValidationSchema } from './validations/userValidation.js';


// start database (only 1 instance)
const prisma = new PrismaClient()

const app = express()
const port = 3000

app.use(express.json())

// routes (such as /reviews, /users, /users/1234)
// methods (such as GET, POST, DELETE, PUT)
app.get('/', async(req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

app.post('/', async(req, res) => {
    const data = req.body

    try {
        await userValidation.validate(data)
    } catch (error) {
        return res.json({ error })
    }

    try {
        // add the data to the database using prisma
        const createdUser = await prisma.user.create({
            data: data
        })
        return res.json({
            message: 'User created successfully',
            data: createdUser
        });
    } catch (error) {
        return res.json({
            message: error.meta.cause,
            error
        })
    }
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
    const userId = Number(req.params.id)

    try {
        await idValidationSchema.validate(userId)
    } catch (error) {
        return res.json({ error })
    }
    // learn try and catch with async await
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: userId, // all the params are String so in this case id is a number and we cast it 
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