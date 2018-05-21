import * as express from "express";
import * as request from "request";

const app = express();
const port = 8080;

app.get("/ng5/:tail*", function(req, res) {
    console.log("/ng5", req.params.tail);

    request.get('http://localhost:3001/' + req.params.tail).pipe(res);
});

app.get("*", function(req, res) {
    console.log("*", req.url);

    request.get('http://localhost:3000' + req.url).pipe(res);
});

app.listen(port, function() {
    console.log(`Gateway is running on port ${port}`);
});
