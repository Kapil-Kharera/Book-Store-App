import mongoose from "mongoose";
import  app  from "./index.js";
import { MONGODB_URL, PORT } from "./config.js";

(async function() {
    await mongoose.connect(MONGODB_URL);
    console.log("DB Connected");

    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    })
})();