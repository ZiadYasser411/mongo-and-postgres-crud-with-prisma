import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/users'
import occupationRoutes from './routes/occupations'
import productRoutes from './routes/products'
import reviewRoutes from './routes/reviews'

const app = express()
app.use(bodyParser.json())

app.use('/users', userRoutes)
app.use('/occupations', occupationRoutes)
app.use('/products', productRoutes)
app.use('/reviews', reviewRoutes)


app.listen(3000, () => console.log('Server running on http://localhost:3000'))