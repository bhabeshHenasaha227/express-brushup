import dns from "node:dns";
import mongoose from "mongoose";
import { fileURLToPath } from "node:url";
import path from "node:path";
import dotenv from "dotenv";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const currentFile=fileURLToPath(import.meta.url);
const currentDirectory=path.dirname(currentFile);
dotenv.config({
    path:path.join(currentDirectory,'../../.env'),
    override:true
})
const URI=process.env.MONGO_URI;

if (!URI) {
    throw new Error("MONGO_URI is missing from the .env file");
}

export const connectDb=async()=>{
    await mongoose.connect(URI);
}


