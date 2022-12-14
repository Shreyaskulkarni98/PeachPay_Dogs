"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
exports.__esModule = true;
var Koa = require("koa");
var Router = require("koa-router");
var cors_1 = require("@koa/cors");
var axios_1 = require("axios");
var app = new Koa();
var router = new Router();
var port = 3011;
app.use((0, cors_1)({ origin: "*" }));
router.get("/", function (ctx) {
  ctx.body = "hello!";
  ctx.status = 200;
});
router.get("/peachpay/dogs", function (ctx) {
  return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2, , 3]);
          return [
            4 /*yield*/,
            axios_1["default"].get("https://dog.ceo/api/breeds/list/all"),
          ];
        case 1:
          response = _a.sent();
          ctx.body = response.data;
          ctx.status = 200;
          return [3 /*break*/, 3];
        case 2:
          e_1 = _a.sent();
          ctx.status = 500;
          ctx.body = e_1.message;
          return [3 /*break*/, 3];
        case 3:
          return [2 /*return*/];
      }
    });
  });
});
router.get("/peachpay/dog/:breed/images", function (ctx) {
  return __awaiter(void 0, void 0, void 0, function () {
    var breedName, response, e_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          breedName = ctx.params.breed;
          _a.label = 1;
        case 1:
          _a.trys.push([1, 3, , 4]);
          return [
            4 /*yield*/,
            axios_1["default"].get(
              "https://dog.ceo/api/breed/" + breedName + "/images"
            ),
          ];
        case 2:
          response = _a.sent();
          ctx.body = response.data;
          ctx.status = 200;
          return [3 /*break*/, 4];
        case 3:
          e_2 = _a.sent();
          ctx.status = 500;
          ctx.body = e_2.message;
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
});
router.get("/peachpay/dog/:breed/:subbreed/images", function (ctx) {
  return __awaiter(void 0, void 0, void 0, function () {
    var breedName, subbreed, response, e_3;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          breedName = ctx.params.breed;
          subbreed = ctx.params.subbreed;
          _a.label = 1;
        case 1:
          _a.trys.push([1, 3, , 4]);
          return [
            4 /*yield*/,
            axios_1["default"].get(
              "https://dog.ceo/api/breed/" +
                breedName +
                "/" +
                subbreed +
                "/images"
            ),
          ];
        case 2:
          response = _a.sent();
          ctx.body = response.data;
          ctx.status = 200;
          return [3 /*break*/, 4];
        case 3:
          e_3 = _a.sent();
          ctx.status = 500;
          ctx.body = e_3.message;
          return [3 /*break*/, 4];
        case 4:
          return [2 /*return*/];
      }
    });
  });
});
app.use(function (ctx, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var rt;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, next()];
        case 1:
          _a.sent();
          rt = ctx.response.get("X-Response-Time");
          console.log(
            "".concat(ctx.method, " ").concat(ctx.url, " - ").concat(rt)
          );
          return [2 /*return*/];
      }
    });
  });
});
app.use(function (ctx, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var start, ms;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          start = Date.now();
          return [4 /*yield*/, next()];
        case 1:
          _a.sent();
          ms = Date.now() - start;
          ctx.set("X-Response-Time", "".concat(ms, "ms"));
          return [2 /*return*/];
      }
    });
  });
});
app.use(router.routes());
app.listen(port, function () {
  console.log("Server running on http://localhost:".concat(port));
});
