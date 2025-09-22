import { Router } from 'express'
import { pg } from '../prisma'

const router = Router()

router.get('/users/', async (req, res) => {
    const users = await pg.user.findMany()
    res.json(users)
})

router.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const user = await pg.user.findUnique({
        where: { id }
    })
    res.json(user)
})

router.post('/users/', async (req, res) => {
    const { name, email, occupationId } = req.body
    const user = await pg.user.create({
        data: {
            name,
            email,
            occupationId
        }
    })
    res.json(user)
})

router.put('/users/:id', async (req, res) => {
    const { id } = req.params
    const { name, email, occupationId } = req.body
    const user = await pg.user.update({
        where: { id },
        data: {
            name,
            email,
            occupationId
        }
    })
    res.json(user)
})

router.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    const user = await pg.user.delete({
        where: { id }
    })
    res.json(user)
})

export default router