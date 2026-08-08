import express, { json, urlencoded } from 'express';
const app = express();
const port = 3000;
import taskRoutes from "./routes/taskRoutes.js";
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/tasks",taskRoutes);

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



export default app;