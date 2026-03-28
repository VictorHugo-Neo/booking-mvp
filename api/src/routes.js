const {Router} = require('express')
const routes = Router()

routes.get('/health', (req,res) =>{
    return res.json({
        status: 'ok',
        message: 'O BackEnd tá rodando, thaiuk pode descansar'
    })
})

module.exports = routes