// Servidor
const express = require('express')
const server = express()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./src/pages')

// config nunjucks (template engine)
// onde estão meus arquivos html
// enviar o objeto com algumas opções (server express)
// cache é guardar em memória algo para que as coisas fiquem mais rápidas
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {  
    express: server, 
    noCache: true, 

})

// Início e configuração do servidor
server
// receber os dados do reqbody
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start server in port 5500
.listen(5500)

