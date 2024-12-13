import {Router} from 'express'
import { request } from 'http'

const routes = Router()

routes.get('/',(request, response): any  => {
    return response.json({ message: 'Hello World'})
})

export default routes
