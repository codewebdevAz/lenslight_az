import  mongoose  from "mongoose";


const  conn = ()=>{
    mongoose
        .connect(process.env.DB_URI,{
            dbName: "lenslight_az"
        })
        .then(()=>{
            console.log("Db connected was succesed.");
        })
        .catch((err)=>{
            console.log(`DB err is : ${err}`)
        });
};

export default conn;
