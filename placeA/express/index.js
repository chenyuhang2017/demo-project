const express  = require ("express")
const sdata = require ('./service.json')
const pdata = require('./position.json')
const template = require('art-template');






const  app = express();



app.engine('art', require('art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.get('/abc',function (req,res) {
    res.send({
        code:0,
        data:sdata
    })

})
app.get('/cbd',function (req,res) {
    res.send({
        code:0,
        data:pdata
    })
})


app.use(express.static("public"));


app.listen(3030,()=>{
    console.log("服务器以启动");
});