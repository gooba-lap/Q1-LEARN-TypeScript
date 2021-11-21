import fastify from 'fastify'

const buildFastifyApp = (options = {}) => {
    const app = fastify(options)
    
    app.get('/', async (request) => {
        const { query } = request

        return {
            status: 'OK',
            query
        }
    })
    
    // app.listen(3000, () => {
    //     console.log('app is listen on port 3000')
    // })

    return app 
 
}


export default buildFastifyApp