import  mongoose from "mongoose"



export const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Database is connected ${conn.connection.host}`)
        
    } catch (error) {
        console.log("Error connecting to databasse")
        process.exit(1)
        
    }
    
}