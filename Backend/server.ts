import * as Koa from "koa";
import * as Router from "koa-router";
import cors from "@koa/cors";
import axios from "axios";

const app: Koa = new Koa();
const router: Router = new Router();
const port = 3011;
app.use(cors({ origin: "*" }));

router.get("/", (ctx) => {
  ctx.body = "hello!";
  ctx.status = 200;
});

router.get("/peachpay/dogs", async (ctx) => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    ctx.body = response.data;
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e.message;
  }
});

router.get("/peachpay/dog/:breed/images", async (ctx) => {
  var breedName = ctx.params.breed;
  try {
    const response = await axios.get(
      "https://dog.ceo/api/breed/" + breedName + "/images"
    );
    ctx.body = response.data;
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e.message;
  }
});

router.get("/peachpay/dog/:breed/:subbreed/images", async (ctx) => {
  var breedName = ctx.params.breed;
  var subbreed = ctx.params.subbreed;
  try {
    const response = await axios.get(
      "https://dog.ceo/api/breed/" + breedName + "/" + subbreed + "/images"
    );
    ctx.body = response.data;
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e.message;
  }
});

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
