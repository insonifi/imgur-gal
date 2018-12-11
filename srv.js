const serve = require("koa-static");
const route = require("koa-route");
const Koa = require("koa");
const fetch = require("node-fetch");
const path = require("path");
const app = new Koa();
const { clientId, clientSecret } = require("./config.json");

app.use(route.get("/gallery", gallery));
app.use(route.get("/images", images));
app.use(serve(path.join(__dirname, "public")));

const API = "https://api.imgur.com/3";
const PORT = 8080;

app.listen(PORT);
console.log(`listening on port ${PORT}`);

async function gallery(ctx, next) {
  const {
    section = "hot",
    sort = "top",
    page = 0,
    window = "day"
  } = ctx.request.query;
  const uri = new URL([API, "gallery", section, sort, page].join("/"));
  const response = await fetch(uri, {
    headers: {
      Authorization: `Client-ID ${clientId}`
    }
  }).then(res => res.json(), () => Promise.resolve({ error: "Fetch failed" }));

  if (response.error) {
    ctx.response.status = 500;
    ctx.response.body = reponse;

    return;
  }
  ctx.response.body = response;
}
async function images(ctx, next) {
  const q = ctx.request.query;

  console.log(q);
}
