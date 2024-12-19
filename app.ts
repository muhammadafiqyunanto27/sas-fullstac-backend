import express from "express";
import taskManager from "./routes/task";


const app = express();

// Middleware
app.use(express.json());
app.use("/api/task", taskManager);


// Port Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
