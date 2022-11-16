import express, { Express } from "express";
import { router as userRouter } from "./routes/user.route";
import { router as profileRouter } from "./routes/profile.route";
import { router as meetingRouter } from "./routes/meeting.route";

const app: Express = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/profiles", profileRouter);
app.use("/meetings", meetingRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
