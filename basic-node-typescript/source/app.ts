import fastify from 'fastify'
import { minusNumbers } from './helpers'

interface CreateUserBody {
    username: string 
    name: string
    surname: string 
    address: string 
    age: number
}

interface CalculateMinusNumbers {
    number1: number
    number2: number
}

const buildFastifyApp = (options = {}) => {
    const app = fastify(options)
    
    app.get('/', async (request) => {
        const { query } = request

        return {
            status: 'OK',
            query
        }
    })
    
    app.post<{ Body: CreateUserBody }>('/users', async (request) => {
        const { username, name, age } = request.body
        return {
            username,
            name,
            age
        }
    })

    app.post<{ Body: CalculateMinusNumbers }>('/calculate/minus', async (request) => {
        const { number1, number2 } = request.body
        const { result } = minusNumbers(number1, number2)
         
        return {
            result
        }
    })

    return app 
 
}


export default buildFastifyApp