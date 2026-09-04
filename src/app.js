import express from 'express';
import { connectDb } from'./config/database.js';
import { UserModel } from './models/user.js';

const app = express();
const port = 3000;
app.use(express.json());

app.post("/signup",async(req,res)=>{
  console.log(req.body);// say for example i have commented all code and provided this console. and from the postman i have send one request from body . it will throw undefined .thats why we need middlewire to convert our data to raw . so we have to use app.use as middle wire 
  // const user={
  //   firstName:"Virat".toLowerCase(),
  //   lastName:"saha".toLowerCase(),
  //   emailId:"virat@gmail.com",
  //   password:"virat@123"
  // }

  const usermodel=new UserModel(req.body);  // creating a new instance of the userModel
  try{
    await usermodel.save();
  // very important response.send
  res.send("user added successfully");
  }catch(error){
    res.status(400).send("there is an error",error.message)
  }
  
})
// getting one user 
app.get("/user",async(req,res)=>{
  try{
      const userEmail = req.body.emailId;
      const user= await UserModel.find({emailId:userEmail})
      // console.log(user);
      if(user.length){
        console.log(user);
        res.send(user);
      }else{
        res.status(404).send("user not found")
      }
      
  }catch(error){
      res.status(400).send("there is an error",error.message)
  }
   

})
// app.get("/feed",(req,res)=>{
  
// })

connectDb().then(()=>{
     console.log("database has been connected");
     app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
});
}).catch(err=>{
     console.error("database is not connected:", err.message);
})


