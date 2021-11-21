import fastify from 'fastify'

interface CreateUserBody {
    username: string
    name: string
    surname: string
    address?: string
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
        const { username, name } = request.body
        return {
            username,
            name
        }
    })

    return app 
 
}


export default buildFastifyApp