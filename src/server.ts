import express from 'express'
import cors from 'cors'
import routes from './main/routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', routes)

app.listen(3000, () => console.log('Running server ...'))
