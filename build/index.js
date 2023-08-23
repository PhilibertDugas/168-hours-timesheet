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
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
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
    secure: !1
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
var tailwind_default = "/build/_assets/tailwind-O3RPWCFW.css";

// app/components/Navigation.tsx
var import_react2 = require("react"), import_react3 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), navigation = [
  { name: "Timesheet", href: "#", icon: import_outline.HomeIcon, current: !0 },
  { name: "Calendar", href: "#", icon: import_outline.CalendarIcon, current: !1 },
  { name: "Stats", href: "#", icon: import_outline.ChartPieIcon, current: !1 }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navigation({ children }) {
  let [sidebarOpen, setSidebarOpen] = (0, import_react2.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Transition.Root, { show: sidebarOpen, as: import_react2.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react3.Dialog,
      {
        as: "div",
        className: "relative z-50 lg:hidden",
        onClose: setSidebarOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.Transition.Child,
            {
              as: import_react2.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900/80" }, void 0, !1, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 45,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 36,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            import_react3.Transition.Child,
            {
              as: import_react2.Fragment,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Dialog.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  import_react3.Transition.Child,
                  {
                    as: import_react2.Fragment,
                    enter: "ease-in-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "-m-2.5 p-2.5",
                        onClick: () => setSidebarOpen(!1),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close sidebar" }, void 0, !1, {
                            fileName: "app/components/Navigation.tsx",
                            lineNumber: 74,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                            import_outline.XMarkIcon,
                            {
                              className: "h-6 w-6 text-white",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/Navigation.tsx",
                              lineNumber: 75,
                              columnNumber: 25
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/components/Navigation.tsx",
                        lineNumber: 69,
                        columnNumber: 23
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/components/Navigation.tsx",
                      lineNumber: 68,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Navigation.tsx",
                    lineNumber: 59,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "img",
                    {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/mark.svg?color=white",
                      alt: "Your Company"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Navigation.tsx",
                      lineNumber: 85,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/Navigation.tsx",
                    lineNumber: 84,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "a",
                    {
                      href: item.href,
                      className: classNames(
                        item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      ),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                          item.icon,
                          {
                            className: classNames(
                              item.current ? "text-white" : "text-indigo-200 group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            ),
                            "aria-hidden": "true"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/components/Navigation.tsx",
                            lineNumber: 106,
                            columnNumber: 35
                          },
                          this
                        ),
                        item.name
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/Navigation.tsx",
                      lineNumber: 97,
                      columnNumber: 33
                    },
                    this
                  ) }, item.name, !1, {
                    fileName: "app/components/Navigation.tsx",
                    lineNumber: 96,
                    columnNumber: 31
                  }, this)) }, void 0, !1, {
                    fileName: "app/components/Navigation.tsx",
                    lineNumber: 94,
                    columnNumber: 27
                  }, this) }, void 0, !1, {
                    fileName: "app/components/Navigation.tsx",
                    lineNumber: 93,
                    columnNumber: 25
                  }, this) }, void 0, !1, {
                    fileName: "app/components/Navigation.tsx",
                    lineNumber: 92,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/components/Navigation.tsx",
                    lineNumber: 91,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/Navigation.tsx",
                  lineNumber: 83,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 58,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 49,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 48,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 31,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          className: "h-8 w-auto",
          src: "https://tailwindui.com/img/logos/mark.svg?color=white",
          alt: "Your Company"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 135,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: item.href,
            className: classNames(
              item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                item.icon,
                {
                  className: classNames(
                    item.current ? "text-white" : "text-indigo-200 group-hover:text-white",
                    "h-6 w-6 shrink-0"
                  ),
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Navigation.tsx",
                  lineNumber: 156,
                  columnNumber: 27
                },
                this
              ),
              item.name
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 147,
            columnNumber: 25
          },
          this
        ) }, item.name, !1, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 146,
          columnNumber: 23
        }, this)) }, void 0, !1, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 144,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 143,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "-mx-6 mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: "#",
            className: "flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "img",
                {
                  className: "h-8 w-8 rounded-full bg-indigo-700",
                  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  alt: ""
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Navigation.tsx",
                  lineNumber: 177,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Your profile" }, void 0, !1, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 182,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "philibert.dugas@gmail.com" }, void 0, !1, {
                fileName: "app/components/Navigation.tsx",
                lineNumber: 183,
                columnNumber: 21
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 173,
            columnNumber: 19
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 172,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 142,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 141,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 133,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 131,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          type: "button",
          className: "-m-2.5 p-2.5 text-indigo-200 lg:hidden",
          onClick: () => setSidebarOpen(!0),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 197,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_outline.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 198,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 192,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 text-sm font-semibold leading-6 text-white", children: "Dashboard" }, void 0, !1, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Your profile" }, void 0, !1, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "img",
          {
            className: "h-8 w-8 rounded-full bg-indigo-700",
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            alt: ""
          },
          void 0,
          !1,
          {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 205,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 191,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "py-10 lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 214,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 213,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : []
], loader = async ({ request }) => (0, import_node3.json)({ user: await getUser(request) });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", className: "h-full bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navigation, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
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
  meta: () => meta
});
var import_node4 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_react8 = require("react");

// app/utils.ts
var import_react5 = require("@remix-run/react"), import_react6 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react5.useMatches)(), route = (0, import_react6.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  );
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user == "object" && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/routes/_index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta = () => [{ title: "168 Hours Online" }], hourBlocks = [
  "5h00",
  "5h30",
  "6h00",
  "6h30",
  "7h00",
  "7h30",
  "8h00",
  "8h30",
  "9h00",
  "9h30",
  "10h00",
  "10h30",
  "11h00",
  "11h30",
  "12h00",
  "12h30",
  "13h00",
  "13h30",
  "14h00",
  "14h30",
  "15h00",
  "15h30",
  "16h00",
  "17h30",
  "18h00",
  "18h30",
  "19h00",
  "19h30",
  "20h00",
  "20h30",
  "21h00",
  "21h30",
  "22h00",
  "22h30",
  "23h00",
  "23h30",
  "0h00",
  "0h30",
  "1h00",
  "1h30",
  "2h00",
  "2h30",
  "3h00",
  "3h30",
  "4h00",
  "4h30"
], action = async ({ request }) => {
  let data = await request.formData(), hoursMap = {};
  return hourBlocks.forEach((block) => {
    let activity = data.get(`activity_${block}`), minutes = data.get(`minutes_${block}`), tag = data.get(`tag_${block}`);
    activity !== "" && +minutes != 0 && (hoursMap[block] = { activity, minutes: +minutes, tag });
  }), console.log(hoursMap), (0, import_node4.redirect)("/");
};
function Index() {
  let user = useOptionalUser(), form = (0, import_react8.useRef)(null), submit = (0, import_react7.useSubmit)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:flex-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "168 Hours Timesheet Tracker" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Track your time. This is an alternative to the 168 hours spreadsheet" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "-mx-4 -my-2 sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("table", { className: "w-full border-separate border-spacing-0 table-fixed", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8",
            children: "Hour"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 113,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter",
            children: "Activity"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 119,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter",
            children: "Minutes"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 125,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 w-1/5  border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter",
            children: "Tags"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 131,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "th",
          {
            scope: "col",
            className: "sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Save" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 141,
              columnNumber: 21
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 137,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 112,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 111,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tbody", { children: [
        hourBlocks.map((block) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "whitespace-nowrap  w-1/5 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: block }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 148,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500 table-cell", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "text",
              name: `activity_${block}`,
              placeholder: "Activity",
              form: "time_form",
              className: "w-full",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 152,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500 table-cell", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "number",
              name: `minutes_${block}`,
              placeholder: "0",
              form: "time_form",
              className: "w-full",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 162,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 161,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "text",
              name: `tag_${block}`,
              placeholder: "Tag",
              form: "time_form",
              className: "w-full"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 172,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 171,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "relative whitespace-nowrap w-1/5 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "text-indigo-600 hover:text-indigo-900",
              onClick: () => submit(form.current),
              children: "Save"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 181,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 180,
            columnNumber: 21
          }, this)
        ] }, block, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 147,
          columnNumber: 19
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Form, { ref: form, id: "time_form", method: "post" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 191,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 145,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 110,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node");
var action2 = async ({ request }) => logout(request), loader3 = async () => (0, import_node5.redirect)("/");

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => LoginPage,
  loader: () => loader4,
  meta: () => meta2
});
var import_node6 = require("@remix-run/node"), import_react9 = require("@remix-run/react"), import_react10 = require("react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => await getUserId(request) ? (0, import_node6.redirect)("/") : (0, import_node6.json)({}), action3 = async ({ request }) => {
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
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react9.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 83,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 90,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 111,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 118,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Log in"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 137,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 145,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: "Remember me"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 151,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          import_react9.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 160,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 143,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 81,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action4,
  default: () => Join,
  loader: () => loader5,
  meta: () => meta3
});
var import_node7 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_react12 = require("react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), loader5 = async ({ request }) => await getUserId(request) ? (0, import_node7.redirect)("/") : (0, import_node7.json)({}), action4 = async ({ request }) => {
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
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 88,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 95,
            columnNumber: 15
          },
          this
        ),
        (_b = actionData == null ? void 0 : actionData.errors) != null && _b.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 116,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ),
        (_d = actionData == null ? void 0 : actionData.errors) != null && _d.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/join.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        import_react11.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 151,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 86,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 85,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-KVJQ2OUY.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-EXHFPPGT.js", "/build/_shared/chunk-LQYNMWED.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EAFHP3VZ.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-VWFC75TP.js", imports: ["/build/_shared/chunk-S5ZA3BAK.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-UKIBAX2W.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-HZN7QXXU.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-S5ZA3BAK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-4ZQXTDKL.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-S5ZA3BAK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "542f9393", hmr: { runtime: "/build/_shared/chunk-LQYNMWED.js", timestamp: 1692798862278 }, url: "/build/manifest-542F9393.js" };

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
//# sourceMappingURL=index.js.map
