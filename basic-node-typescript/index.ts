// const test = 'Here is test for nodemon!!!'
// console.log(test)

import buildFastifyApp from './source/app'

const appOptions = {
    logger: true
}

const app = buildFastifyApp(appOptions)

app.listen(3000)