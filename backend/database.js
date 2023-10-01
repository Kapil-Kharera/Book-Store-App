import mongoose from "mongoose";
import  app  from "./index.js";
// import { MONGODB_URL, PORT } from "./config.js";

(async function() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected");

    app.listen(process.env.PORT, () => {
        console.log(`Listening on ${process.env.PORT}`);
    })
})();