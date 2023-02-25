import app from './app'
import {userRouter} from "./routers/userRouter"

app.use("/", userRouter);
const PORT = process.env.PORT || 8089 as number
app.listen(PORT, () => console.log(`Acesse no endpoint: http://localhost:${PORT}`))
