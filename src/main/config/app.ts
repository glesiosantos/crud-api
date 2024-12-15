import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import routes from '../routes'
import AppError from '../app_error'


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', routes)

// Customizando errors
app.use(
    (error: Error, request: Request, response: Response, next: NextFunction): any => {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }

        return response.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        })
    }
)


export default app
