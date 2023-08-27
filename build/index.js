var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/philibertdugas/src/168-hours-timesheet/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/philibertdugas/src/168-hours-timesheet/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_css_bundle = __toESM(require_dist()), import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client");

// app/singleton.server.ts
var singleton = (name, valueFactory) => {
  var _a;
  let g = global;
  return g.__singletons ?? (g.__singletons = {}), (_a = g.__singletons)[name] ?? (_a[name] = valueFactory()), g.__singletons[name];
};

// app/db.server.ts
var prisma = singleton("prisma", () => new import_client.PrismaClient());
prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !0
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function requireUser(request) {
  let userId = await requireUserId(request), user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KJK74P3S.css";

// app/components/Navigation.tsx
var import_react2 = require("react"), import_react3 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_jsx_runtime2 = require("react/jsx-runtime"), navigation = [
  { name: "Timesheet", href: "#", icon: import_outline.HomeIcon, current: !0 },
  { name: "Calendar", href: "#", icon: import_outline.CalendarIcon, current: !1 },
  { name: "Stats", href: "#", icon: import_outline.ChartPieIcon, current: !1 }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navigation({ children, user }) {
  let [sidebarOpen, setSidebarOpen] = (0, import_react2.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.Transition.Root, { show: sidebarOpen, as: import_react2.Fragment, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_react3.Dialog,
      {
        as: "div",
        className: "relative z-50 lg:hidden",
        onClose: setSidebarOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_react3.Transition.Child,
            {
              as: import_react2.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "fixed inset-0 bg-gray-900/80" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            import_react3.Transition.Child,
            {
              as: import_react2.Fragment,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react3.Dialog.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  import_react3.Transition.Child,
                  {
                    as: import_react2.Fragment,
                    enter: "ease-in-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: "-m-2.5 p-2.5",
                        onClick: () => setSidebarOpen(!1),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sr-only", children: "Close sidebar" }),
                          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                            import_outline.XMarkIcon,
                            {
                              className: "h-6 w-6 text-white",
                              "aria-hidden": "true"
                            }
                          )
                        ]
                      }
                    ) })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "img",
                    {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/mark.svg?color=white",
                      alt: "Your Company"
                    }
                  ) }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                    "a",
                    {
                      href: item.href,
                      className: classNames(
                        item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                          item.icon,
                          {
                            className: classNames(
                              item.current ? "text-white" : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            ),
                            "aria-hidden": "true"
                          }
                        ),
                        item.name
                      ]
                    }
                  ) }, item.name)) }) }) }) })
                ] })
              ] })
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "img",
        {
          className: "h-8 w-auto",
          src: "https://tailwindui.com/img/logos/mark.svg?color=white",
          alt: "Your Company"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "a",
          {
            href: item.href,
            className: classNames(
              item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                item.icon,
                {
                  className: classNames(
                    item.current ? "text-white" : "text-indigo-200 group-hover:text-white",
                    "h-6 w-6 shrink-0"
                  ),
                  "aria-hidden": "true"
                }
              ),
              item.name
            ]
          }
        ) }, item.name)) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "-mx-6 mt-auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "a",
          {
            href: "#",
            className: "flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "img",
                {
                  className: "h-8 w-8 rounded-full bg-indigo-700",
                  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  alt: ""
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sr-only", children: "Your profile" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", children: user == null ? void 0 : user.email })
            ]
          }
        ) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          className: "-m-2.5 p-2.5 text-indigo-200 lg:hidden",
          onClick: () => setSidebarOpen(!0),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sr-only", children: "Open sidebar" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_outline.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex-1 text-sm font-semibold leading-6 text-white", children: "Dashboard" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", { href: "#", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sr-only", children: "Your profile" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "img",
          {
            className: "h-8 w-8 rounded-full bg-indigo-700",
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            alt: ""
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("main", { className: "py-10 lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "px-4 sm:px-6 lg:px-8", children }) })
  ] }) });
}

// app/root.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = async ({ request }) => (0, import_node3.json)({ user: await getUser(request) });
function App() {
  let { user } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { lang: "en", className: "h-full bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Navigation, { user, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Outlet, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.LiveReload, {})
    ] })
  ] });
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader2
});
var loader2 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader3,
  meta: () => meta
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_react6 = require("react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/dailyEntry.server.ts
var minutesIncrements = 15, minutesInADay = 1440, hourBlocksLength = minutesInADay / minutesIncrements, hourBlockData = [
  ...Array(Math.floor(hourBlocksLength) + 1).keys()
].map((i) => i * minutesIncrements), createDailyEntry = async (userId) => {
  let dailyEntry = await prisma.dailyEntry.create({
    data: {
      userId
    },
    include: { hourBlocks: !0 }
  });
  return hourBlockData.forEach(async (blockNumber) => {
    await prisma.hourBlock.create({
      data: {
        blockNumber,
        dailyEntryId: dailyEntry.id
      }
    });
  }), dailyEntry;
}, getHourBlock = async (blockNumber, userId) => {
  let today = /* @__PURE__ */ new Date();
  return await prisma.hourBlock.findFirst({
    where: {
      blockNumber,
      dailyEntry: {
        userId,
        createdAt: {
          gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
          lt: new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1
          )
        }
      }
    }
  });
}, getDailyEntry = async (userId) => {
  let today = /* @__PURE__ */ new Date();
  return await prisma.dailyEntry.findFirst({
    where: {
      userId,
      createdAt: {
        gte: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
        lt: new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + 1
        )
      }
    },
    include: {
      hourBlocks: !0
    }
  });
};
var updateHourBlock = async (id, hourBlocks) => await prisma.hourBlock.update({
  where: { id },
  data: hourBlocks
});

// app/routes/_index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), meta = () => [{ title: "168 Hours Online" }], loader3 = async ({ request }) => {
  let user = await requireUser(request), dailyEntry = await getDailyEntry(user.id);
  return dailyEntry || (dailyEntry = await createDailyEntry(user.id)), (0, import_node4.json)({ dailyEntry });
}, action = async ({ request }) => {
  let data = await request.formData(), user = await requireUser(request), hoursMap = {};
  return hourBlockData.forEach(async (blockNumber) => {
    let activityName = data.get(`activity_${blockNumber}`), tags = data.get(`tag_${blockNumber}`);
    if (activityName !== "") {
      let block = await getHourBlock(blockNumber, user.id), hourBlock = { activityName, tags, blockNumber };
      (0, import_tiny_invariant2.default)(block, "Block not found"), await updateHourBlock(block.id, hourBlock);
    }
  }), console.log(hoursMap), (0, import_node4.redirect)("/");
};
function Index() {
  let { dailyEntry } = (0, import_react5.useLoaderData)(), form = (0, import_react6.useRef)(null), submit = (0, import_react5.useSubmit)(), submitForm = () => {
    submit(form.current);
  }, fiveAm = 300, fiveAmIndex = dailyEntry.hourBlocks.findIndex(
    (block) => block.blockNumber === fiveAm
  ), hoursPastFiveAm = dailyEntry.hourBlocks.slice(fiveAmIndex), hoursBeforeFiveAm = dailyEntry.hourBlocks.slice(0, fiveAmIndex - 1), sortedHours = [...hoursPastFiveAm, ...hoursBeforeFiveAm];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "sm:flex-auto", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "168 Hours Timesheet Tracker" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "mt-2 text-sm text-gray-700", children: "Track your time. This is an alternative to the 168 hours spreadsheet" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "-mx-4 -my-2 sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("table", { className: "w-full border-separate border-spacing-0 table-fixed", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8",
            children: "Hour"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter",
            children: "Activity"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 w-1/5  border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter",
            children: "Tags"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8",
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "button",
              {
                type: "submit",
                className: "text-indigo-600 hover:text-indigo-900",
                onClick: () => submitForm(),
                children: "Save"
              }
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tbody", { children: [
        sortedHours.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { className: "whitespace-nowrap  w-1/5 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: `${Math.floor(block.blockNumber / 60)}h${block.blockNumber % 60 > 0 ? block.blockNumber % 60 : ""}` }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { className: "whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500 table-cell", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              type: "text",
              name: `activity_${block.blockNumber}`,
              placeholder: "Activity",
              form: "time_form",
              className: "w-full",
              defaultValue: block.activityName || "",
              required: !0
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { className: "whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              type: "text",
              name: `tag_${block.blockNumber}`,
              placeholder: "Tag",
              form: "time_form",
              className: "w-full",
              defaultValue: block.tags || ""
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { className: "relative whitespace-nowrap w-1/5 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8" })
        ] }, block.id)),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Form, { ref: form, id: "time_form", method: "post" })
      ] })
    ] }) }) }) })
  ] });
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node");
var action2 = async ({ request }) => logout(request), loader4 = async () => (0, import_node5.redirect)("/");

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => LoginPage,
  loader: () => loader5,
  meta: () => meta2
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_react10 = require("react");

// app/utils.ts
var import_react7 = require("@remix-run/react"), import_react8 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/login.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), loader5 = async ({ request }) => await getUserId(request) ? (0, import_node6.redirect)("/") : (0, import_node6.json)({}), action3 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node6.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node6.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node6.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node6.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}, meta2 = () => [{ title: "Login" }];
function LoginPage() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react9.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react9.useActionData)(), emailRef = (0, import_react10.useRef)(null), passwordRef = (0, import_react10.useRef)(null);
  return (0, import_react10.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react9.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Log in"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: "Remember me"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_react9.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Sign up"
          }
        )
      ] })
    ] })
  ] }) }) });
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action4,
  default: () => Join,
  loader: () => loader6,
  meta: () => meta3
});
var import_node7 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_react12 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime"), loader6 = async ({ request }) => await getUserId(request) ? (0, import_node7.redirect)("/") : (0, import_node7.json)({}), action4 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node7.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node7.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node7.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node7.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta3 = () => [{ title: "Sign Up" }];
function Join() {
  var _a, _b, _c, _d;
  let [searchParams] = (0, import_react11.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react11.useActionData)(), emailRef = (0, import_react12.useRef)(null), passwordRef = (0, import_react12.useRef)(null);
  return (0, import_react12.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.email ? (_b2 = emailRef.current) == null || _b2.focus() : (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react11.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": (_a = actionData == null ? void 0 : actionData.errors) != null && _a.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": (_c = actionData == null ? void 0 : actionData.errors) != null && _c.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          }
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { type: "hidden", name: "redirectTo", value: redirectTo }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react11.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        }
      )
    ] }) })
  ] }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OYIY2LIY.js", imports: ["/build/_shared/chunk-AYTP5SZN.js", "/build/_shared/chunk-PJQVCOF2.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RZFRI4RH.js", imports: ["/build/_shared/chunk-MQENXIM2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-YNYVZTM4.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-BQ2SXEZN.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-XXKPWTTB.js", imports: ["/build/_shared/chunk-JA76ZJ7B.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-6QLBRKIK.js", imports: ["/build/_shared/chunk-JA76ZJ7B.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GPTXG6BX.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "e9fb9424", hmr: void 0, url: "/build/manifest-E9FB9424.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
