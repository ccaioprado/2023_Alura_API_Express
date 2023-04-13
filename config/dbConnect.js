import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ccaioryan:Ethyamet12@alura-node.xaptixv.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection

export default db