const express=require('express')
const Router=express.Router()

// this is the entry point of all the api named url's
Router.get('/',(req,response)=>{
    response.send('<h1>hello</h1>')
})
console.log("i m in")
Router.use('/api',require('./api/index'));

module.exports=Router