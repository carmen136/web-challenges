import { server } from "./server.js";

const port = 5000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
