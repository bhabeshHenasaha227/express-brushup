import express from 'express';
import {connectDb} from'./config/database.js';
import { UserModel } from './models/user.js';

const app = express();
const port = 3000;

app.post("/signup",async(req,res)=>{
  const user={
    firstName:"Virat".toLowerCase(),
    lastName:"saha".toLowerCase(),
    emailId:"virat@gmail.com",
    password:"virat@123"
  }
  // creating a new instance of the userModel
  const usermodel=new UserModel(user);
  try{
    await usermodel.save();
  // very important response.send
  res.send("user added successfully");
  }catch(error){
    res.status(400).send("there is an error",error.message)
  }
  
})

connectDb().then(()=>{
     console.log("database has been connected");
     app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
});
}).catch(err=>{
     console.error("database is not connected:", err.message);
})


