const mongoose  =  require("mongoose")
require('dotenv').config()

const DB='mongodb+srv://Mohit:mohit@cluster0.45yts.mongodb.net/mernstack?retryWrites=true&w=majority'
module.exports =  connect = async ()=>{
    try{
        const response = await mongoose.connect(DB,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false});
        console.log("connection created..")
    }catch(error){
        console.log(error)
    }
    

    
    
}
