import { Router } from 'express'
import { mongo } from '../prisma'

const router = Router()

router.post('/', async (req, res) => {
  const { name } = req.body
  const product = await mongo.product.create({ data: { name } })
  res.json(product)
})

router.get('/', async (_, res) => {
  const products = await mongo.product.findMany({ include: { reviews: true } })
  res.json(products)
})

router.post('/:id/reviews', async (req, res) => {
  const { id } = req.params
  const { comment } = req.body
  const review = await mongo.review.create({
    data: { comment, productId: id }
  })
  res.json(review)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await mongo.product.delete({ where: { id } })
  res.json({ message: 'Product deleted' })
})

export default router
