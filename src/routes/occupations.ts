import { Router } from 'express'
import { pg } from '../prisma'

const router = Router()

router.post('/', async (req, res) => {
  const { name } = req.body
  const occupation = await pg.occupation.create({ data: { name } })
  res.json(occupation)
})

router.get('/', async (_, res) => {
  const occupations = await pg.occupation.findMany({ include: { User: true } })
  res.json(occupations)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const occupation = await pg.occupation.findUnique({
    where: { id: Number(id) },
    include: { User: true }
  })
  res.json(occupation)
})
router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const occupation = await pg.occupation.update({
    where: { id: Number(id) },
    data: { name }
  })
  res.json(occupation)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await pg.occupation.delete({ where: { id: Number(id) } })
  res.json({ message: 'Occupation deleted' })
})

export default router
