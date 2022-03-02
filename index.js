const express=require('express');
const bodyParser=require('body-parser');



const app=express();



app.use(bodyParser.urlencoded({extended: true})); 
  

app.use(bodyParser.json()); 




app.get("/", (req,res) => {
    res.json({
        Message:"hello wolrd"
    })
})


app.listen(4000, () => console.log('server Stared at port 4000'));