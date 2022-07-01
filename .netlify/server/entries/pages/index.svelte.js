var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1259f1f6 = require("../../chunks/index-1259f1f6.js");
var import_auth = require("firebase/auth");
var import_app = __toESM(require("firebase/compat/app"));
const Container = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"rounded border-2 border-slate-800 mt-4 h-72 bg-slate-800"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Weather = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let weatherpng = "";
  let weatherDayTwoPng = "";
  let weatherDayThreePng = "";
  let temp = 0;
  let tempDayTwo = 0;
  let tempDayThree = 0;
  let date = "";
  let { ort = "" } = $$props;
  let { bundesland = "" } = $$props;
  async function fetchStatus() {
    let res;
    let response;
    try {
      response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=035c03fe0d4f46f7b90105115221806&q=" + ort + "&days=3&aqi=no&alerts=no&hourly=no&hourly_by_zone=no&lang=de&units=m");
      res = await response.json();
      temp = res["current"]["temp_c"];
      weatherpng = res["current"]["condition"]["icon"];
      tempDayTwo = res["forecast"]["forecastday"][1]["day"]["maxtemp_c"];
      weatherDayTwoPng = res["forecast"]["forecastday"][1]["day"]["condition"]["icon"];
      tempDayThree = res["forecast"]["forecastday"][2]["day"]["maxtemp_c"];
      weatherDayThreePng = res["forecast"]["forecastday"][2]["day"]["condition"]["icon"];
      date = res["forecast"]["forecastday"][2]["date"];
    } catch {
      response = await fetch("https://api.weatherapi.com/v1/forecast.json?key=035c03fe0d4f46f7b90105115221806&q=" + ort + "&days=3&aqi=no");
      res = await response.json();
      temp = res["current"]["temp_c"];
      weatherpng = res["current"]["condition"]["icon"];
      tempDayTwo = res["forecast"]["forecastday"][1]["day"]["maxtemp_c"];
      weatherDayTwoPng = res["forecast"]["forecastday"][1]["day"]["condition"]["icon"];
      tempDayThree = res["forecast"]["forecastday"][2]["day"]["maxtemp_c"];
      weatherDayThreePng = res["forecast"]["forecastday"][2]["day"]["condition"]["icon"];
      date = res["forecast"]["forecastday"][2]["date"];
    }
  }
  fetchStatus();
  if ($$props.ort === void 0 && $$bindings.ort && ort !== void 0)
    $$bindings.ort(ort);
  if ($$props.bundesland === void 0 && $$bindings.bundesland && bundesland !== void 0)
    $$bindings.bundesland(bundesland);
  return `${(0, import_index_1259f1f6.v)(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="${"font-bold m-4 text-xl"}">Wetter</h1>
  <p class="${"mt-2 ml-4 mb-4"}"><em>${(0, import_index_1259f1f6.e)(ort + ", " + bundesland)}</em></p>
  <div class="${"float-left bg-gray-600 w-20 ml-4 mt-8 items-center text-center justify-center rounded"}"><p class="${"font-bold"}">Heute</p>
    <img class="${"ml-2"}"${(0, import_index_1259f1f6.a)("src", weatherpng, 0)} alt="${""}">
    <p class="${"font-bold"}">${(0, import_index_1259f1f6.e)(temp)}\xB0C</p></div>
  <div class="${"float-left bg-gray-600 w-20 ml-4 mt-8 items-center text-center justify-center rounded"}"><p class="${"font-bold"}">Morgen</p>
    <img class="${"ml-2"}"${(0, import_index_1259f1f6.a)("src", weatherDayTwoPng, 0)} alt="${""}">
    <p class="${"font-bold"}">${(0, import_index_1259f1f6.e)(tempDayTwo)}\xB0C</p></div>
  <div class="${"float-left bg-gray-600 w-20 ml-4 mt-8 items-center text-center justify-center rounded"}"><p class="${"font-bold"}">${(0, import_index_1259f1f6.e)(date.substring(5).replace(/-/g, "."))}</p>
    <img class="${"ml-2"}"${(0, import_index_1259f1f6.a)("src", weatherDayThreePng, 0)} alt="${""}">
    <p class="${"font-bold"}">${(0, import_index_1259f1f6.e)(tempDayThree)}\xB0C</p></div>`;
    }
  })}`;
});
var Modal_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".modal-background.svelte-1sdqhc1{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.3)}.modal.svelte-1sdqhc1{position:absolute;left:50%;top:50%;width:calc(100vw - 4em);max-width:32em;max-height:calc(100vh - 4em);overflow:auto;transform:translate(-50%,-50%);padding:1em;border-radius:0.2em;background:rgb(30, 41, 59)}")();
const firebaseConfig = {
  apiKey: "AIzaSyDsPspzV35YsWLC8VL2O-YzWPNXuvRvFzs",
  authDomain: "login-cb476.firebaseapp.com",
  projectId: "login-cb476",
  storageBucket: "login-cb476.appspot.com",
  messagingSenderId: "469605613810",
  appId: "1:469605613810:web:2161ebb3121b18aff8506b"
};
const app = import_app.default.initializeApp(firebaseConfig);
new import_auth.GoogleAuthProvider();
(0, import_auth.getAuth)(app);
var Account_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#displayname.svelte-fnbbde{background-color:rgb(2, 1, 1);width:40vh}#email.svelte-fnbbde{background-color:rgb(2, 1, 1);width:40vh}#pb.svelte-fnbbde{width:75px;height:75px}")();
const css$2 = {
  code: "#displayname.svelte-fnbbde{background-color:rgb(2, 1, 1);width:40vh}#email.svelte-fnbbde{background-color:rgb(2, 1, 1);width:40vh}#pb.svelte-fnbbde{width:75px;height:75px}",
  map: null
};
const Account = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"rounded border-2 border-slate-800 mt-4 h-auto bg-slate-800"}"><h1 class="${"font-bold text-xl m-4"}">Account</h1>
    ${`<button class="${"bg-gray-600 ml-4 p-2 mb-4 rounded"}">Login with google</button>`}
</div>`;
});
const Todos = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let todos = [];
  return `<div class="${"rounded border-2 border-slate-800 mt-4 h-auto bg-slate-800"}"><div class="${"flex justify-between"}"><h1 class="${"m-4 font-bold text-xl"}">Todos</h1>
        ${`<button class="${"rounded-lg mr-4 m-2 bg-green-600 hover:cursor-pointer hover:bg-green-700 h-10 p-2 font-bold"}">Add</button>`}</div>
    <div>${``}</div>
    <div><ul class="${"list-reset"}">${(0, import_index_1259f1f6.b)(todos, (todo, index) => {
    return `<li class="${"rounded flex items-center justify-between m-4 bg-gray-600 p-2"}"><span class="${"text-lg"}">${(0, import_index_1259f1f6.e)(todo.title)}</span>
                    <button class="${"rounded-lg mr-4 m-2 bg-red-600 hover:cursor-pointer hover:bg-red-700 h-10 p-2 font-bold "}">Delete</button>
                </li>`;
  })}</ul></div></div>`;
});
var Footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#footer.svelte-z7u04q{background-color:#0a0a0a;transition:background-color 0.3s}")();
const css$1 = {
  code: "#footer.svelte-z7u04q{background-color:#0a0a0a;transition:background-color 0.3s}",
  map: null
};
const Footer = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let links = [
    {
      title: "Wetter API",
      link: "https://www.weatherapi.com"
    },
    {
      title: "Github",
      link: "https://github.com/LionTV/"
    }
  ];
  $$result.css.add(css$1);
  return `


<footer class="${"py-3 w-full mt-4 h-20 text-center svelte-z7u04q"}" id="${"footer"}"><ul>${(0, import_index_1259f1f6.b)(links, (link) => {
    return `<li class="${"inline-block mx-6 my-3"}"><a${(0, import_index_1259f1f6.a)("href", link.link, 0)} target="${"_blank"}">${(0, import_index_1259f1f6.e)(link.title)}</a>
        </li>`;
  })}</ul>
</footer>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "body.light-mode{background-color:#ffffff;color:white;transition:background-color 0.3s}body{background-color:rgb(15, 23, 42);color:white}input.svelte-c3i6gg:checked~.dot.svelte-c3i6gg{transform:translateX(100%);background-color:rgb(49, 46, 129)}#settings.svelte-c3i6gg.svelte-c3i6gg:hover{border-bottom:2px solid rgb(49, 46, 129);transition:border-bottom 0.3s}input.svelte-c3i6gg.svelte-c3i6gg{outline:none}#changecity.svelte-c3i6gg.svelte-c3i6gg{border:1px solid gray;padding:4px;width:100%}#closebutton.svelte-c3i6gg.svelte-c3i6gg{display:block;outline:none;padding:4px}#main.svelte-c3i6gg.svelte-c3i6gg{display:flex;min-height:100vh;flex-direction:column}#content.svelte-c3i6gg.svelte-c3i6gg{flex:1}")();
const css = {
  code: "body.light-mode{background-color:#ffffff;color:white;transition:background-color 0.3s}body{background-color:rgb(15, 23, 42);color:white}input.svelte-c3i6gg:checked~.dot.svelte-c3i6gg{transform:translateX(100%);background-color:rgb(49, 46, 129)}#settings.svelte-c3i6gg.svelte-c3i6gg:hover{border-bottom:2px solid rgb(49, 46, 129);transition:border-bottom 0.3s}input.svelte-c3i6gg.svelte-c3i6gg{outline:none}#changecity.svelte-c3i6gg.svelte-c3i6gg{border:1px solid gray;padding:4px;width:100%}#closebutton.svelte-c3i6gg.svelte-c3i6gg{display:block;outline:none;padding:4px}#main.svelte-c3i6gg.svelte-c3i6gg{display:flex;min-height:100vh;flex-direction:column}#content.svelte-c3i6gg.svelte-c3i6gg{flex:1}",
  map: null
};
const Routes = (0, import_index_1259f1f6.c)(($$result, $$props, $$bindings, slots) => {
  let standort = "Berlin";
  let bundesland = "Brandenburg";
  let timenow = "";
  function time() {
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    timenow = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + " Uhr \n" + date + "." + month + "." + year;
  }
  time();
  setInterval(time, 1e3);
  $$result.css.add(css);
  return `<div id="${"main"}" class="${"svelte-c3i6gg"}"><div class="${"bg-slate-600 flex h-16 rounded"}"><p class="${"my-auto border-b-2 border-indigo-900 mx-4 hover:cursor-pointer hover:text-slate-400"}">Dashboard</p>
      <p class="${"my-auto mx-4 hover:cursor-pointer hover:text-slate-400 hover:opacity-80 svelte-c3i6gg"}" id="${"settings"}">Settings</p>
      <p class="${"my-auto ml-auto mr-2 float-right font-bold"}">${(0, import_index_1259f1f6.e)(timenow)}</p></div>
  <div id="${"content"}" class="${"svelte-c3i6gg"}">${(0, import_index_1259f1f6.v)(Weather, "Weather").$$render($$result, { ort: standort, bundesland }, {}, {})}
    ${(0, import_index_1259f1f6.v)(Todos, "Todos").$$render($$result, {}, {}, {})}
    ${(0, import_index_1259f1f6.v)(Account, "Account").$$render($$result, {}, {}, {})}</div>

  ${(0, import_index_1259f1f6.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</div>


${``}`;
});
