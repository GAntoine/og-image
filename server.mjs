import express from "express";

import api from "./api/dist/index.js";

const app = express()
const port = process.env.PORT || 8000

app.get('/api/:file', (req, res) => {
	api.default(req, res);
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
});
