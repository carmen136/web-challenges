import { server } from "./server.js";

const port = 7000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
