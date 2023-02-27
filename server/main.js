import express from "express";
const app = express();

app.use(express.json());
//Viteによって出力されたディレクトリの配信
app.use(express.static("dist"));

const messages = [];

app.get("/messages", (request, response) => {
    response.json(messages);
});     //messagesをjsonデータとしてリクエストする

app.post("/send", (request, response) => {
    messages.push(request.body.message);
    response.send();
});     //messageにレスポンスされたものを突っ込む

app.listen(3000);