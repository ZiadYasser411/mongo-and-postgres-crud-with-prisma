import { Router } from 'express'
import { mongo } from '../prisma'

const router = Router()

router.post('/', async (req, res) => {
  const { comment, productId } = req.body
  const review = await mongo.review.create({
    data: { comment, productId }
  })
  res.json(review)
})

router.get('/', async (_, res) => {
  const reviews = await mongo.review.findMany({ include: { product: true } })
  res.json(reviews)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const review = await mongo.review.findUnique({
    where: { id },
    include: { product: true }
  })
  res.json(review)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { comment } = req.body
  const review = await mongo.review.update({
    where: { id },
    data: { comment }
  })
  res.json(review)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await mongo.review.delete({ where: { id } })
  res.json({ message: 'Review deleted' })
})

export default router
