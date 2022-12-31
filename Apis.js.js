const express = require('express') 
const app = express();    
const cors=require('cors')

const mysql2=require('./DBConnection/dbConn')
// NOTE:- to recieve the data into Nodejs,we should use Middleware to convert the data into JSON format HOw?

app.use(cors())
app.use(express.json()); // it is used to  get the body from request.

app.get('/get',(req,resp)=>
{
    mysql2.query('select*from first',(err,result)=>
    {

        if(err)
        {
           throw err;
        }
        else{
            resp.send(result)
        }
    })
})

app.post('/post', async (req, resp) => {
   
    const schema={stuName:req.body.stuName,stuEmail:req.body.stuEmail,stuCity:req.body.stuCity,stuId:req.body.stuId};

    mysql2.query('insert into  first set ?',schema,(err,result,fields)=>
    {
        if(err)
        {
            
            throw err;
        }
        else{
            resp.send("Inserted.."+result)
           
        }
    })
    
})


app.delete('/delete',(req,resp)=>
{
    const data=[req.body.stuId]
    // console.log(req.body.stuId)
   mysql2.query('delete from first where StuId=?' ,data,(err,result)=>
    {
        resp.send(result)
    })
    //   resp.send('okk')

 

})

app.put('/update/:name',(req,resp)=>
{

    const data=[req.body.stuName,req.body.stuEmail,req.params.name]

  mysql2.query('update first set StuName= ?,StuEmail=? where stuId=?' ,data,(err,result)=>
    {
        resp.send(result)
    })


  

})


app.listen(4500, () => {
    console.log("Running on Port:8200")
})