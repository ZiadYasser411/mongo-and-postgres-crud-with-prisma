import express from 'express'
import userRoutes from './routes/users'
import occupationRoutes from './routes/occupations'
import productRoutes from './routes/products'
import reviewRoutes from './routes/reviews'
import { setupSwagger } from './swagger'

const app = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/occupations', occupationRoutes)
app.use('/products', productRoutes)
app.use('/reviews', reviewRoutes)

setupSwagger(app)

app.listen(3000, () => console.log('Server running on http://localhost:3000'))