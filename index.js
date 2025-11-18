const jsonServer=require('json-server')

const server =jsonServer.create()
const  middleWare=jsonServer.defaults()

const route=jsonServer.router('db.json')

server.middleWare()
server.use()

const PORT=process.env.PORT ||3000
server.listen(PORT,()=>{
    console.log(PORT)
})