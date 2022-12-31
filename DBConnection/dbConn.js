const mysql=require('mysql2')
const mysql2= mysql.createConnection({
   

    host:'localhost',
    user:'root',
    password:'root',
    database:'student'

})
mysql2.connect((err)=>
{
    if(err) throw err;
    else{
        console.log("connected");

    }
})
module.exports=mysql2