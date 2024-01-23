import express from "express";
import cors from "cors"
import fileUpload from "express-fileupload";
import router from "./roures/routes.js";

const app = express()

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use('/api', router)

app.listen(5000, () => console.log(('Запуск был произведен на порту 5000')))