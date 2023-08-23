import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-2LTVY2GU.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-EXHFPPGT.js";
import {
  createHotContext
} from "/build/_shared/chunk-LQYNMWED.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// css-bundle-update-plugin-ns:/Users/philibertdugas/src/168-hours-timesheet/node_modules/@remix-run/css-bundle/dist/esm/index.js
var cssBundleHref = false ? void 0 : void 0;

// app/root.tsx
var import_node = __toESM(require_node());
var import_session = __toESM(require_session());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-R6KYUE7Z.css";

// app/components/Navigation.tsx
var import_react27 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t15, e4, n6) => e4 in t15 ? i(t15, e4, { enumerable: true, configurable: true, writable: true, value: n6 }) : t15[e4] = n6;
var r = (t15, e4, n6) => (d(t15, typeof e4 != "symbol" ? e4 + "" : e4, n6), n6);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e4) {
    this.current !== e4 && (this.handoffState = "pending", this.currentId = 0, this.current = e4);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e4, f9) => {
  s.isServer ? (0, import_react.useEffect)(e4, f9) : (0, import_react.useLayoutEffect)(e4, f9);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e4) {
  let r7 = (0, import_react2.useRef)(e4);
  return l(() => {
    r7.current = e4;
  }, [e4]), r7;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o7) => setTimeout(() => {
    throw o7;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n6 = [], r7 = { addEventListener(e4, t15, s13, a9) {
    return e4.addEventListener(t15, s13, a9), r7.add(() => e4.removeEventListener(t15, s13, a9));
  }, requestAnimationFrame(...e4) {
    let t15 = requestAnimationFrame(...e4);
    return r7.add(() => cancelAnimationFrame(t15));
  }, nextFrame(...e4) {
    return r7.requestAnimationFrame(() => r7.requestAnimationFrame(...e4));
  }, setTimeout(...e4) {
    let t15 = setTimeout(...e4);
    return r7.add(() => clearTimeout(t15));
  }, microTask(...e4) {
    let t15 = { current: true };
    return t3(() => {
      t15.current && e4[0]();
    }), r7.add(() => {
      t15.current = false;
    });
  }, style(e4, t15, s13) {
    let a9 = e4.style.getPropertyValue(t15);
    return Object.assign(e4.style, { [t15]: s13 }), this.add(() => {
      Object.assign(e4.style, { [t15]: a9 });
    });
  }, group(e4) {
    let t15 = o2();
    return e4(t15), this.add(() => t15.dispose());
  }, add(e4) {
    return n6.push(e4), () => {
      let t15 = n6.indexOf(e4);
      if (t15 >= 0)
        for (let s13 of n6.splice(t15, 1))
          s13();
    };
  }, dispose() {
    for (let e4 of n6.splice(0))
      e4();
  } };
  return r7;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e4] = (0, import_react3.useState)(o2);
  return (0, import_react3.useEffect)(() => () => e4.dispose(), [e4]), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);
var o4 = function(t15) {
  let e4 = s2(t15);
  return import_react4.default.useCallback((...r7) => e4.current(...r7), [e4]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t4 = __toESM(require_react(), 1);
function s4() {
  let r7 = typeof document == "undefined";
  return "useSyncExternalStore" in t4 ? ((o7) => o7.useSyncExternalStore)(t4)(() => () => {
  }, () => false, () => !r7) : false;
}
function l2() {
  let r7 = s4(), [e4, n6] = t4.useState(s.isHandoffComplete);
  return e4 && s.isHandoffComplete === false && n6(false), t4.useEffect(() => {
    e4 !== true && n6(true);
  }, [e4]), t4.useEffect(() => s.handoff(), []), r7 ? false : e4;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o5;
var I = (o5 = import_react5.default.useId) != null ? o5 : function() {
  let n6 = l2(), [e4, u8] = import_react5.default.useState(n6 ? () => s.nextId() : null);
  return l(() => {
    e4 === null && u8(s.nextId());
  }, [e4]), e4 != null ? "" + e4 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r7, n6, ...a9) {
  if (r7 in n6) {
    let e4 = n6[r7];
    return typeof e4 == "function" ? e4(...a9) : e4;
  }
  let t15 = new Error(`Tried to handle "${r7}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t15, u), t15;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r7) {
  return s.isServer ? null : r7 instanceof Node ? r7.ownerDocument : r7 != null && r7.hasOwnProperty("current") && r7.current instanceof Node ? r7.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var M = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M || {});
var N = ((o7) => (o7[o7.Error = 0] = "Error", o7[o7.Overflow = 1] = "Overflow", o7[o7.Success = 2] = "Success", o7[o7.Underflow = 3] = "Underflow", o7))(N || {});
var F = ((t15) => (t15[t15.Previous = -1] = "Previous", t15[t15.Next = 1] = "Next", t15))(F || {});
function f(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(c2)).sort((r7, t15) => Math.sign((r7.tabIndex || Number.MAX_SAFE_INTEGER) - (t15.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t15) => (t15[t15.Strict = 0] = "Strict", t15[t15.Loose = 1] = "Loose", t15))(T || {});
function h(e4, r7 = 0) {
  var t15;
  return e4 === ((t15 = e(e4)) == null ? void 0 : t15.body) ? false : u(r7, { [0]() {
    return e4.matches(c2);
  }, [1]() {
    let l10 = e4;
    for (; l10 !== null; ) {
      if (l10.matches(c2))
        return true;
      l10 = l10.parentElement;
    }
    return false;
  } });
}
var w = ((t15) => (t15[t15.Keyboard = 0] = "Keyboard", t15[t15.Mouse = 1] = "Mouse", t15))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e4) => {
  e4.metaKey || e4.altKey || e4.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e4) => {
  e4.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e4.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e4) {
  e4 == null || e4.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e4) {
  var r7, t15;
  return (t15 = (r7 = e4 == null ? void 0 : e4.matches) == null ? void 0 : r7.call(e4, S)) != null ? t15 : false;
}
function I2(e4, r7 = (t15) => t15) {
  return e4.slice().sort((t15, l10) => {
    let o7 = r7(t15), i5 = r7(l10);
    if (o7 === null || i5 === null)
      return 0;
    let n6 = o7.compareDocumentPosition(i5);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O(e4, r7, { sorted: t15 = true, relativeTo: l10 = null, skipElements: o7 = [] } = {}) {
  let i5 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4.ownerDocument, n6 = Array.isArray(e4) ? t15 ? I2(e4) : e4 : f(e4);
  o7.length > 0 && n6.length > 1 && (n6 = n6.filter((s13) => !o7.includes(s13))), l10 = l10 != null ? l10 : i5.activeElement;
  let E6 = (() => {
    if (r7 & 5)
      return 1;
    if (r7 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x3 = (() => {
    if (r7 & 1)
      return 0;
    if (r7 & 2)
      return Math.max(0, n6.indexOf(l10)) - 1;
    if (r7 & 4)
      return Math.max(0, n6.indexOf(l10)) + 1;
    if (r7 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p6 = r7 & 32 ? { preventScroll: true } : {}, d11 = 0, a9 = n6.length, u8;
  do {
    if (d11 >= a9 || d11 + a9 <= 0)
      return 0;
    let s13 = x3 + d11;
    if (r7 & 16)
      s13 = (s13 + a9) % a9;
    else {
      if (s13 < 0)
        return 3;
      if (s13 >= a9)
        return 1;
    }
    u8 = n6[s13], u8 == null || u8.focus(p6), d11 += E6;
  } while (u8 !== i5.activeElement);
  return r7 & 6 && H(u8) && u8.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react6 = __toESM(require_react(), 1);
function d2(e4, r7, n6) {
  let o7 = s2(r7);
  (0, import_react6.useEffect)(() => {
    function t15(u8) {
      o7.current(u8);
    }
    return document.addEventListener(e4, t15, n6), () => document.removeEventListener(e4, t15, n6);
  }, [e4, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react7 = __toESM(require_react(), 1);
function s5(e4, r7, n6) {
  let o7 = s2(r7);
  (0, import_react7.useEffect)(() => {
    function t15(i5) {
      o7.current(i5);
    }
    return window.addEventListener(e4, t15, n6), () => window.removeEventListener(e4, t15, n6);
  }, [e4, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function h2(s13, m9, a9 = true) {
  let i5 = (0, import_react8.useRef)(false);
  (0, import_react8.useEffect)(() => {
    requestAnimationFrame(() => {
      i5.current = a9;
    });
  }, [a9]);
  function c12(e4, r7) {
    if (!i5.current || e4.defaultPrevented)
      return;
    let t15 = r7(e4);
    if (t15 === null || !t15.getRootNode().contains(t15) || !t15.isConnected)
      return;
    let E6 = function u8(n6) {
      return typeof n6 == "function" ? u8(n6()) : Array.isArray(n6) || n6 instanceof Set ? n6 : [n6];
    }(s13);
    for (let u8 of E6) {
      if (u8 === null)
        continue;
      let n6 = u8 instanceof HTMLElement ? u8 : u8.current;
      if (n6 != null && n6.contains(t15) || e4.composed && e4.composedPath().includes(n6))
        return;
    }
    return !h(t15, T.Loose) && t15.tabIndex !== -1 && e4.preventDefault(), m9(e4, t15);
  }
  let o7 = (0, import_react8.useRef)(null);
  d2("pointerdown", (e4) => {
    var r7, t15;
    i5.current && (o7.current = ((t15 = (r7 = e4.composedPath) == null ? void 0 : r7.call(e4)) == null ? void 0 : t15[0]) || e4.target);
  }, true), d2("mousedown", (e4) => {
    var r7, t15;
    i5.current && (o7.current = ((t15 = (r7 = e4.composedPath) == null ? void 0 : r7.call(e4)) == null ? void 0 : t15[0]) || e4.target);
  }, true), d2("click", (e4) => {
    o7.current && (c12(e4, () => o7.current), o7.current = null);
  }, true), d2("touchend", (e4) => c12(e4, () => e4.target instanceof HTMLElement ? e4.target : null), true), s5("blur", (e4) => c12(e4, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react9 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t15, n6 = true) {
  return Object.assign(t15, { [u2]: n6 });
}
function y2(...t15) {
  let n6 = (0, import_react9.useRef)(t15);
  (0, import_react9.useEffect)(() => {
    n6.current = t15;
  }, [t15]);
  let c12 = o4((e4) => {
    for (let o7 of n6.current)
      o7 != null && (typeof o7 == "function" ? o7(e4) : o7.current = e4);
  });
  return t15.every((e4) => e4 == null || (e4 == null ? void 0 : e4[u2])) ? void 0 : c12;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t6(...r7) {
  return Array.from(new Set(r7.flatMap((n6) => typeof n6 == "string" ? n6.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a9) => (a9[a9.None = 0] = "None", a9[a9.RenderStrategy = 1] = "RenderStrategy", a9[a9.Static = 2] = "Static", a9))(S2 || {});
var j = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(j || {});
function X({ ourProps: r7, theirProps: t15, slot: e4, defaultTag: a9, features: s13, visible: n6 = true, name: f9 }) {
  let o7 = N2(t15, r7);
  if (n6)
    return c3(o7, e4, a9, f9);
  let u8 = s13 != null ? s13 : 0;
  if (u8 & 2) {
    let { static: l10 = false, ...p6 } = o7;
    if (l10)
      return c3(p6, e4, a9, f9);
  }
  if (u8 & 1) {
    let { unmount: l10 = true, ...p6 } = o7;
    return u(l10 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c3({ ...p6, hidden: true, style: { display: "none" } }, e4, a9, f9);
    } });
  }
  return c3(o7, e4, a9, f9);
}
function c3(r7, t15 = {}, e4, a9) {
  let { as: s13 = e4, children: n6, refName: f9 = "ref", ...o7 } = g(r7, ["unmount", "static"]), u8 = r7.ref !== void 0 ? { [f9]: r7.ref } : {}, l10 = typeof n6 == "function" ? n6(t15) : n6;
  "className" in o7 && o7.className && typeof o7.className == "function" && (o7.className = o7.className(t15));
  let p6 = {};
  if (t15) {
    let i5 = false, m9 = [];
    for (let [y6, d11] of Object.entries(t15))
      typeof d11 == "boolean" && (i5 = true), d11 === true && m9.push(y6);
    i5 && (p6["data-headlessui-state"] = m9.join(" "));
  }
  if (s13 === import_react10.Fragment && Object.keys(R(o7)).length > 0) {
    if (!(0, import_react10.isValidElement)(l10) || Array.isArray(l10) && l10.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a9} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o7).map((d11) => `  - ${d11}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d11) => `  - ${d11}`).join(`
`)].join(`
`));
    let i5 = l10.props, m9 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...d11) => t6(i5 == null ? void 0 : i5.className(...d11), o7.className) : t6(i5 == null ? void 0 : i5.className, o7.className), y6 = m9 ? { className: m9 } : {};
    return (0, import_react10.cloneElement)(l10, Object.assign({}, N2(l10.props, R(g(o7, ["ref"]))), p6, u8, w2(l10.ref, u8.ref), y6));
  }
  return (0, import_react10.createElement)(s13, Object.assign({}, g(o7, ["ref"]), s13 !== import_react10.Fragment && u8, s13 !== import_react10.Fragment && p6), l10);
}
function w2(...r7) {
  return { ref: r7.every((t15) => t15 == null) ? void 0 : (t15) => {
    for (let e4 of r7)
      e4 != null && (typeof e4 == "function" ? e4(t15) : e4.current = t15);
  } };
}
function N2(...r7) {
  var a9;
  if (r7.length === 0)
    return {};
  if (r7.length === 1)
    return r7[0];
  let t15 = {}, e4 = {};
  for (let s13 of r7)
    for (let n6 in s13)
      n6.startsWith("on") && typeof s13[n6] == "function" ? ((a9 = e4[n6]) != null || (e4[n6] = []), e4[n6].push(s13[n6])) : t15[n6] = s13[n6];
  if (t15.disabled || t15["aria-disabled"])
    return Object.assign(t15, Object.fromEntries(Object.keys(e4).map((s13) => [s13, void 0])));
  for (let s13 in e4)
    Object.assign(t15, { [s13](n6, ...f9) {
      let o7 = e4[s13];
      for (let u8 of o7) {
        if ((n6 instanceof Event || (n6 == null ? void 0 : n6.nativeEvent) instanceof Event) && n6.defaultPrevented)
          return;
        u8(n6, ...f9);
      }
    } });
  return t15;
}
function D(r7) {
  var t15;
  return Object.assign((0, import_react10.forwardRef)(r7), { displayName: (t15 = r7.displayName) != null ? t15 : r7.name });
}
function R(r7) {
  let t15 = Object.assign({}, r7);
  for (let e4 in t15)
    t15[e4] === void 0 && delete t15[e4];
  return t15;
}
function g(r7, t15 = []) {
  let e4 = Object.assign({}, r7);
  for (let a9 of t15)
    a9 in e4 && delete e4[a9];
  return e4;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r2(n6) {
  let e4 = n6.parentElement, l10 = null;
  for (; e4 && !(e4 instanceof HTMLFieldSetElement); )
    e4 instanceof HTMLLegendElement && (l10 = e4), e4 = e4.parentElement;
  let t15 = (e4 == null ? void 0 : e4.getAttribute("disabled")) === "";
  return t15 && i3(l10) ? false : t15;
}
function i3(n6) {
  if (!n6)
    return false;
  let e4 = n6.previousElementSibling;
  for (; e4 !== null; ) {
    if (e4 instanceof HTMLLegendElement)
      return false;
    e4 = e4.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a2 = "div";
var p2 = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(p2 || {});
function s6(t15, o7) {
  let { features: n6 = 1, ...e4 } = t15, d11 = { ref: o7, "aria-hidden": (n6 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n6 & 4) === 4 && (n6 & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d11, theirProps: e4, slot: {}, defaultTag: a2, name: "Hidden" });
}
var c4 = D(s6);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react11 = __toESM(require_react(), 1);
var n = (0, import_react11.createContext)(null);
n.displayName = "OpenClosedContext";
var d5 = ((e4) => (e4[e4.Open = 1] = "Open", e4[e4.Closed = 2] = "Closed", e4[e4.Closing = 4] = "Closing", e4[e4.Opening = 8] = "Opening", e4))(d5 || {});
function C() {
  return (0, import_react11.useContext)(n);
}
function c5({ value: o7, children: r7 }) {
  return import_react11.default.createElement(n.Provider, { value: o7 }, r7);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o6 = ((r7) => (r7.Space = " ", r7.Enter = "Enter", r7.Escape = "Escape", r7.Backspace = "Backspace", r7.Delete = "Delete", r7.ArrowLeft = "ArrowLeft", r7.ArrowUp = "ArrowUp", r7.ArrowRight = "ArrowRight", r7.ArrowDown = "ArrowDown", r7.Home = "Home", r7.End = "End", r7.PageUp = "PageUp", r7.PageDown = "PageDown", r7.Tab = "Tab", r7))(o6 || {});

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react12 = __toESM(require_react(), 1);
function m2(u8, t15) {
  let e4 = (0, import_react12.useRef)([]), r7 = o4(u8);
  (0, import_react12.useEffect)(() => {
    let o7 = [...e4.current];
    for (let [n6, a9] of t15.entries())
      if (e4.current[n6] !== a9) {
        let l10 = r7(t15, o7);
        return e4.current = t15, l10;
      }
  }, [r7, ...t15]);
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t8() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react13 = __toESM(require_react(), 1);
function n2(...e4) {
  return (0, import_react13.useMemo)(() => e(...e4), [...e4]);
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react18 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react14 = __toESM(require_react(), 1);
var s8 = ((r7) => (r7[r7.Forwards = 0] = "Forwards", r7[r7.Backwards = 1] = "Backwards", r7))(s8 || {});
function n3() {
  let e4 = (0, import_react14.useRef)(0);
  return s5("keydown", (o7) => {
    o7.key === "Tab" && (e4.current = o7.shiftKey ? 1 : 0);
  }, true), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react15 = __toESM(require_react(), 1);
function f4() {
  let e4 = (0, import_react15.useRef)(false);
  return l(() => (e4.current = true, () => {
    e4.current = false;
  }), []), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react16 = __toESM(require_react(), 1);
function E2(n6, e4, a9, t15) {
  let i5 = s2(a9);
  (0, import_react16.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r7(o7) {
      i5.current(o7);
    }
    return n6.addEventListener(e4, r7, t15), () => n6.removeEventListener(e4, r7, t15);
  }, [n6, e4, t15]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t11(n6) {
  function e4() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e4));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e4), e4());
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react17 = __toESM(require_react(), 1);
function c6(t15) {
  let r7 = o4(t15), e4 = (0, import_react17.useRef)(false);
  (0, import_react17.useEffect)(() => (e4.current = false, () => {
    e4.current = true, t3(() => {
      e4.current && r7();
    });
  }), [r7]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t15) {
  if (!t15)
    return /* @__PURE__ */ new Set();
  if (typeof t15 == "function")
    return new Set(t15());
  let r7 = /* @__PURE__ */ new Set();
  for (let e4 of t15.current)
    e4.current instanceof HTMLElement && r7.add(e4.current);
  return r7;
}
var J = "div";
var h4 = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(h4 || {});
function X2(t15, r7) {
  let e4 = (0, import_react18.useRef)(null), o7 = y2(e4, r7), { initialFocus: u8, containers: i5, features: n6 = 30, ...l10 } = t15;
  l2() || (n6 = 1);
  let m9 = n2(e4);
  Y({ ownerDocument: m9 }, Boolean(n6 & 16));
  let c12 = Z({ ownerDocument: m9, container: e4, initialFocus: u8 }, Boolean(n6 & 2));
  $({ ownerDocument: m9, container: e4, containers: i5, previousActiveElement: c12 }, Boolean(n6 & 8));
  let v3 = n3(), y6 = o4((s13) => {
    let T7 = e4.current;
    if (!T7)
      return;
    ((B2) => B2())(() => {
      u(v3.current, { [s8.Forwards]: () => {
        O(T7, M.First, { skipElements: [s13.relatedTarget] });
      }, [s8.Backwards]: () => {
        O(T7, M.Last, { skipElements: [s13.relatedTarget] });
      } });
    });
  }), _2 = p(), b5 = (0, import_react18.useRef)(false), j5 = { ref: o7, onKeyDown(s13) {
    s13.key == "Tab" && (b5.current = true, _2.requestAnimationFrame(() => {
      b5.current = false;
    }));
  }, onBlur(s13) {
    let T7 = P(i5);
    e4.current instanceof HTMLElement && T7.add(e4.current);
    let d11 = s13.relatedTarget;
    d11 instanceof HTMLElement && d11.dataset.headlessuiFocusGuard !== "true" && (S3(T7, d11) || (b5.current ? O(e4.current, u(v3.current, { [s8.Forwards]: () => M.Next, [s8.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: s13.target }) : s13.target instanceof HTMLElement && y(s13.target)));
  } };
  return import_react18.default.createElement(import_react18.default.Fragment, null, Boolean(n6 & 4) && import_react18.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }), X({ ourProps: j5, theirProps: l10, defaultTag: J, name: "FocusTrap" }), Boolean(n6 & 4) && import_react18.default.createElement(c4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: y6, features: p2.Focusable }));
}
var z = D(X2);
var ge = Object.assign(z, { features: h4 });
var a3 = [];
t11(() => {
  function t15(r7) {
    r7.target instanceof HTMLElement && r7.target !== document.body && a3[0] !== r7.target && (a3.unshift(r7.target), a3 = a3.filter((e4) => e4 != null && e4.isConnected), a3.splice(10));
  }
  window.addEventListener("click", t15, { capture: true }), window.addEventListener("mousedown", t15, { capture: true }), window.addEventListener("focus", t15, { capture: true }), document.body.addEventListener("click", t15, { capture: true }), document.body.addEventListener("mousedown", t15, { capture: true }), document.body.addEventListener("focus", t15, { capture: true });
});
function Q(t15 = true) {
  let r7 = (0, import_react18.useRef)(a3.slice());
  return m2(([e4], [o7]) => {
    o7 === true && e4 === false && t3(() => {
      r7.current.splice(0);
    }), o7 === false && e4 === true && (r7.current = a3.slice());
  }, [t15, a3, r7]), o4(() => {
    var e4;
    return (e4 = r7.current.find((o7) => o7 != null && o7.isConnected)) != null ? e4 : null;
  });
}
function Y({ ownerDocument: t15 }, r7) {
  let e4 = Q(r7);
  m2(() => {
    r7 || (t15 == null ? void 0 : t15.activeElement) === (t15 == null ? void 0 : t15.body) && y(e4());
  }, [r7]), c6(() => {
    r7 && y(e4());
  });
}
function Z({ ownerDocument: t15, container: r7, initialFocus: e4 }, o7) {
  let u8 = (0, import_react18.useRef)(null), i5 = f4();
  return m2(() => {
    if (!o7)
      return;
    let n6 = r7.current;
    n6 && t3(() => {
      if (!i5.current)
        return;
      let l10 = t15 == null ? void 0 : t15.activeElement;
      if (e4 != null && e4.current) {
        if ((e4 == null ? void 0 : e4.current) === l10) {
          u8.current = l10;
          return;
        }
      } else if (n6.contains(l10)) {
        u8.current = l10;
        return;
      }
      e4 != null && e4.current ? y(e4.current) : O(n6, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u8.current = t15 == null ? void 0 : t15.activeElement;
    });
  }, [o7]), u8;
}
function $({ ownerDocument: t15, container: r7, containers: e4, previousActiveElement: o7 }, u8) {
  let i5 = f4();
  E2(t15 == null ? void 0 : t15.defaultView, "focus", (n6) => {
    if (!u8 || !i5.current)
      return;
    let l10 = P(e4);
    r7.current instanceof HTMLElement && l10.add(r7.current);
    let m9 = o7.current;
    if (!m9)
      return;
    let c12 = n6.target;
    c12 && c12 instanceof HTMLElement ? S3(l10, c12) ? (o7.current = c12, y(c12)) : (n6.preventDefault(), n6.stopPropagation(), y(m9)) : y(o7.current);
  }, true);
}
function S3(t15, r7) {
  for (let e4 of t15)
    if (e4.contains(r7))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react20 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react19 = __toESM(require_react(), 1);
var e2 = (0, import_react19.createContext)(false);
function l5() {
  return (0, import_react19.useContext)(e2);
}
function P2(o7) {
  return import_react19.default.createElement(e2.Provider, { value: o7.force }, o7.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F2(p6) {
  let l10 = l5(), n6 = (0, import_react20.useContext)(v), e4 = n2(p6), [a9, o7] = (0, import_react20.useState)(() => {
    if (!l10 && n6 !== null || s.isServer)
      return null;
    let t15 = e4 == null ? void 0 : e4.getElementById("headlessui-portal-root");
    if (t15)
      return t15;
    if (e4 === null)
      return null;
    let r7 = e4.createElement("div");
    return r7.setAttribute("id", "headlessui-portal-root"), e4.body.appendChild(r7);
  });
  return (0, import_react20.useEffect)(() => {
    a9 !== null && (e4 != null && e4.body.contains(a9) || e4 == null || e4.body.appendChild(a9));
  }, [a9, e4]), (0, import_react20.useEffect)(() => {
    l10 || n6 !== null && o7(n6.current);
  }, [n6, o7, l10]), a9;
}
var U = import_react20.Fragment;
function N3(p6, l10) {
  let n6 = p6, e4 = (0, import_react20.useRef)(null), a9 = y2(T2((u8) => {
    e4.current = u8;
  }), l10), o7 = n2(e4), t15 = F2(e4), [r7] = (0, import_react20.useState)(() => {
    var u8;
    return s.isServer ? null : (u8 = o7 == null ? void 0 : o7.createElement("div")) != null ? u8 : null;
  }), i5 = (0, import_react20.useContext)(f5), C3 = l2();
  return l(() => {
    !t15 || !r7 || t15.contains(r7) || (r7.setAttribute("data-headlessui-portal", ""), t15.appendChild(r7));
  }, [t15, r7]), l(() => {
    if (r7 && i5)
      return i5.register(r7);
  }, [i5, r7]), c6(() => {
    var u8;
    !t15 || !r7 || (r7 instanceof Node && t15.contains(r7) && t15.removeChild(r7), t15.childNodes.length <= 0 && ((u8 = t15.parentElement) == null || u8.removeChild(t15)));
  }), C3 ? !t15 || !r7 ? null : (0, import_react_dom.createPortal)(X({ ourProps: { ref: a9 }, theirProps: n6, defaultTag: U, name: "Portal" }), r7) : null;
}
var S4 = import_react20.Fragment;
var v = (0, import_react20.createContext)(null);
function j2(p6, l10) {
  let { target: n6, ...e4 } = p6, o7 = { ref: y2(l10) };
  return import_react20.default.createElement(v.Provider, { value: n6 }, X({ ourProps: o7, theirProps: e4, defaultTag: S4, name: "Popover.Group" }));
}
var f5 = (0, import_react20.createContext)(null);
function ae() {
  let p6 = (0, import_react20.useContext)(f5), l10 = (0, import_react20.useRef)([]), n6 = o4((o7) => (l10.current.push(o7), p6 && p6.register(o7), () => e4(o7))), e4 = o4((o7) => {
    let t15 = l10.current.indexOf(o7);
    t15 !== -1 && l10.current.splice(t15, 1), p6 && p6.unregister(o7);
  }), a9 = (0, import_react20.useMemo)(() => ({ register: n6, unregister: e4, portals: l10 }), [n6, e4, l10]);
  return [l10, (0, import_react20.useMemo)(() => function({ children: t15 }) {
    return import_react20.default.createElement(f5.Provider, { value: a9 }, t15);
  }, [a9])];
}
var D2 = D(N3);
var I3 = D(j2);
var pe = Object.assign(D2, { Group: I3 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react21 = __toESM(require_react(), 1);
var d8 = (0, import_react21.createContext)(null);
function f6() {
  let r7 = (0, import_react21.useContext)(d8);
  if (r7 === null) {
    let t15 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t15, f6), t15;
  }
  return r7;
}
function M2() {
  let [r7, t15] = (0, import_react21.useState)([]);
  return [r7.length > 0 ? r7.join(" ") : void 0, (0, import_react21.useMemo)(() => function(e4) {
    let i5 = o4((s13) => (t15((o7) => [...o7, s13]), () => t15((o7) => {
      let p6 = o7.slice(), c12 = p6.indexOf(s13);
      return c12 !== -1 && p6.splice(c12, 1), p6;
    }))), n6 = (0, import_react21.useMemo)(() => ({ register: i5, slot: e4.slot, name: e4.name, props: e4.props }), [i5, e4.slot, e4.name, e4.props]);
    return import_react21.default.createElement(d8.Provider, { value: n6 }, e4.children);
  }, [t15])];
}
var S5 = "p";
function h5(r7, t15) {
  let a9 = I(), { id: e4 = `headlessui-description-${a9}`, ...i5 } = r7, n6 = f6(), s13 = y2(t15);
  l(() => n6.register(e4), [e4, n6.register]);
  let o7 = { ref: s13, ...n6.props, id: e4 };
  return X({ ourProps: o7, theirProps: i5, slot: n6.slot || {}, defaultTag: S5, name: n6.name || "Description" });
}
var y3 = D(h5);
var b2 = Object.assign(y3, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react22 = __toESM(require_react(), 1);
var a4 = (0, import_react22.createContext)(() => {
});
a4.displayName = "StackContext";
var s10 = ((e4) => (e4[e4.Add = 0] = "Add", e4[e4.Remove = 1] = "Remove", e4))(s10 || {});
function x2() {
  return (0, import_react22.useContext)(a4);
}
function M3({ children: i5, onUpdate: r7, type: e4, element: n6, enabled: u8 }) {
  let l10 = x2(), o7 = o4((...t15) => {
    r7 == null || r7(...t15), l10(...t15);
  });
  return l(() => {
    let t15 = u8 === void 0 || u8 === true;
    return t15 && o7(0, e4, n6), () => {
      t15 && o7(1, e4, n6);
    };
  }, [o7, e4, n6, u8]), import_react22.default.createElement(a4.Provider, { value: o7 }, i5);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i4(e4, t15) {
  return e4 === t15 && (e4 !== 0 || 1 / e4 === 1 / t15) || e4 !== e4 && t15 !== t15;
}
var d10 = typeof Object.is == "function" ? Object.is : i4;
var { useState: u5, useEffect: h6, useLayoutEffect: f7, useDebugValue: p4 } = l7;
function y4(e4, t15, c12) {
  const a9 = t15(), [{ inst: n6 }, o7] = u5({ inst: { value: a9, getSnapshot: t15 } });
  return f7(() => {
    n6.value = a9, n6.getSnapshot = t15, r5(n6) && o7({ inst: n6 });
  }, [e4, a9, t15]), h6(() => (r5(n6) && o7({ inst: n6 }), e4(() => {
    r5(n6) && o7({ inst: n6 });
  })), [e4]), p4(a9), a9;
}
function r5(e4) {
  const t15 = e4.getSnapshot, c12 = e4.value;
  try {
    const a9 = t15();
    return !d10(c12, a9);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t13(r7, e4, n6) {
  return e4();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r6 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s11 = !r6;
var c9 = s11 ? t13 : y4;
var a5 = "useSyncExternalStore" in e3 ? ((n6) => n6.useSyncExternalStore)(e3) : c9;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S6(t15) {
  return a5(t15.subscribe, t15.getSnapshot, t15.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a6(o7, r7) {
  let t15 = o7(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t15;
  }, subscribe(e4) {
    return n6.add(e4), () => n6.delete(e4);
  }, dispatch(e4, ...s13) {
    let i5 = r7[e4].call(t15, ...s13);
    i5 && (t15 = i5, n6.forEach((c12) => c12()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c10() {
  let o7;
  return { before({ doc: e4 }) {
    var l10;
    let n6 = e4.documentElement;
    o7 = ((l10 = e4.defaultView) != null ? l10 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e4, d: n6 }) {
    let t15 = e4.documentElement, l10 = t15.clientWidth - t15.offsetWidth, r7 = o7 - l10;
    n6.style(t15, "paddingRight", `${r7}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function T6() {
  if (!t8())
    return {};
  let l10;
  return { before() {
    l10 = window.pageYOffset;
  }, after({ doc: o7, d: t15, meta: s13 }) {
    function i5(n6) {
      return s13.containers.flatMap((e4) => e4()).some((e4) => e4.contains(n6));
    }
    t15.microTask(() => {
      if (window.getComputedStyle(o7.documentElement).scrollBehavior !== "auto") {
        let e4 = o2();
        e4.style(o7.documentElement, "scroll-behavior", "auto"), t15.add(() => t15.microTask(() => e4.dispose()));
      }
      t15.style(o7.body, "marginTop", `-${l10}px`), window.scrollTo(0, 0);
      let n6 = null;
      t15.addEventListener(o7, "click", (e4) => {
        if (e4.target instanceof HTMLElement)
          try {
            let r7 = e4.target.closest("a");
            if (!r7)
              return;
            let { hash: c12 } = new URL(r7.href), a9 = o7.querySelector(c12);
            a9 && !i5(a9) && (n6 = a9);
          } catch {
          }
      }, true), t15.addEventListener(o7, "touchmove", (e4) => {
        e4.target instanceof HTMLElement && !i5(e4.target) && e4.preventDefault();
      }, { passive: false }), t15.add(() => {
        window.scrollTo(0, window.pageYOffset + l10), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
      });
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e4, d: o7 }) {
    o7.style(e4.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m6(e4) {
  let n6 = {};
  for (let t15 of e4)
    Object.assign(n6, t15(n6));
  return n6;
}
var a7 = a6(() => /* @__PURE__ */ new Map(), { PUSH(e4, n6) {
  var o7;
  let t15 = (o7 = this.get(e4)) != null ? o7 : { doc: e4, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t15.count++, t15.meta.add(n6), this.set(e4, t15), this;
}, POP(e4, n6) {
  let t15 = this.get(e4);
  return t15 && (t15.count--, t15.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e4, d: n6, meta: t15 }) {
  let o7 = { doc: e4, d: n6, meta: m6(t15) }, c12 = [T6(), c10(), l8()];
  c12.forEach(({ before: r7 }) => r7 == null ? void 0 : r7(o7)), c12.forEach(({ after: r7 }) => r7 == null ? void 0 : r7(o7));
}, SCROLL_ALLOW({ d: e4 }) {
  e4.dispose();
}, TEARDOWN({ doc: e4 }) {
  this.delete(e4);
} });
a7.subscribe(() => {
  let e4 = a7.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t15] of e4)
    n6.set(t15, t15.documentElement.style.overflow);
  for (let t15 of e4.values()) {
    let o7 = n6.get(t15.doc) === "hidden", c12 = t15.count !== 0;
    (c12 && !o7 || !c12 && o7) && a7.dispatch(t15.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t15), t15.count === 0 && a7.dispatch("TEARDOWN", t15);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p5(e4, r7, n6) {
  let f9 = S6(a7), o7 = e4 ? f9.get(e4) : void 0, i5 = o7 ? o7.count > 0 : false;
  return l(() => {
    if (!(!e4 || !r7))
      return a7.dispatch("PUSH", e4, n6), () => a7.dispatch("POP", e4, n6);
  }, [r7, e4]), i5;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u6 = /* @__PURE__ */ new Map();
var t14 = /* @__PURE__ */ new Map();
function h7(r7, l10 = true) {
  l(() => {
    var o7;
    if (!l10)
      return;
    let e4 = typeof r7 == "function" ? r7() : r7.current;
    if (!e4)
      return;
    function a9() {
      var d11;
      if (!e4)
        return;
      let i5 = (d11 = t14.get(e4)) != null ? d11 : 1;
      if (i5 === 1 ? t14.delete(e4) : t14.set(e4, i5 - 1), i5 !== 1)
        return;
      let n6 = u6.get(e4);
      n6 && (n6["aria-hidden"] === null ? e4.removeAttribute("aria-hidden") : e4.setAttribute("aria-hidden", n6["aria-hidden"]), e4.inert = n6.inert, u6.delete(e4));
    }
    let f9 = (o7 = t14.get(e4)) != null ? o7 : 0;
    return t14.set(e4, f9 + 1), f9 !== 0 || (u6.set(e4, { "aria-hidden": e4.getAttribute("aria-hidden"), inert: e4.inert }), e4.setAttribute("aria-hidden", "true"), e4.inert = true), a9;
  }, [r7, l10]);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react23 = __toESM(require_react(), 1);
function j3({ defaultContainers: t15 = [], portals: r7, mainTreeNodeRef: u8 } = {}) {
  var c12;
  let o7 = (0, import_react23.useRef)((c12 = u8 == null ? void 0 : u8.current) != null ? c12 : null), l10 = n2(o7), f9 = o4(() => {
    var i5;
    let n6 = [];
    for (let e4 of t15)
      e4 !== null && (e4 instanceof HTMLElement ? n6.push(e4) : "current" in e4 && e4.current instanceof HTMLElement && n6.push(e4.current));
    if (r7 != null && r7.current)
      for (let e4 of r7.current)
        n6.push(e4);
    for (let e4 of (i5 = l10 == null ? void 0 : l10.querySelectorAll("html > *, body > *")) != null ? i5 : [])
      e4 !== document.body && e4 !== document.head && e4 instanceof HTMLElement && e4.id !== "headlessui-portal-root" && (e4.contains(o7.current) || n6.some((T7) => e4.contains(T7)) || n6.push(e4));
    return n6;
  });
  return { resolveContainers: f9, contains: o4((n6) => f9().some((i5) => i5.contains(n6))), mainTreeNodeRef: o7, MainTreeNode: (0, import_react23.useMemo)(() => function() {
    return u8 != null ? null : import_react23.default.createElement(c4, { features: p2.Hidden, ref: o7 });
  }, [o7, u8]) };
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e = ((o7) => (o7[o7.Open = 0] = "Open", o7[o7.Closed = 1] = "Closed", o7))(_e || {});
var Ie = ((e4) => (e4[e4.SetTitleId = 0] = "SetTitleId", e4))(Ie || {});
var Me = { [0](t15, e4) {
  return t15.titleId === e4.id ? t15 : { ...t15, titleId: e4.id };
} };
var I4 = (0, import_react24.createContext)(null);
I4.displayName = "DialogContext";
function b3(t15) {
  let e4 = (0, import_react24.useContext)(I4);
  if (e4 === null) {
    let o7 = new Error(`<${t15} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o7, b3), o7;
  }
  return e4;
}
function we(t15, e4, o7 = () => [document.body]) {
  p5(t15, e4, (i5) => {
    var n6;
    return { containers: [...(n6 = i5.containers) != null ? n6 : [], o7] };
  });
}
function Be(t15, e4) {
  return u(e4.type, Me, t15, e4);
}
var He = "div";
var Ge = S2.RenderStrategy | S2.Static;
function Ne(t15, e4) {
  var X3;
  let o7 = I(), { id: i5 = `headlessui-dialog-${o7}`, open: n6, onClose: l10, initialFocus: s13, __demoMode: g4 = false, ...T7 } = t15, [m9, h8] = (0, import_react24.useState)(0), a9 = C();
  n6 === void 0 && a9 !== null && (n6 = (a9 & d5.Open) === d5.Open);
  let D4 = (0, import_react24.useRef)(null), Q2 = y2(D4, e4), f9 = n2(D4), N4 = t15.hasOwnProperty("open") || a9 !== null, U3 = t15.hasOwnProperty("onClose");
  if (!N4 && !U3)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!N4)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!U3)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l10 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l10}`);
  let p6 = n6 ? 0 : 1, [S8, Z3] = (0, import_react24.useReducer)(Be, { titleId: null, descriptionId: null, panelRef: (0, import_react24.createRef)() }), P4 = o4(() => l10(false)), W2 = o4((r7) => Z3({ type: 0, id: r7 })), L2 = l2() ? g4 ? false : p6 === 0 : false, F4 = m9 > 1, Y3 = (0, import_react24.useContext)(I4) !== null, [ee, te] = ae(), { resolveContainers: M6, mainTreeNodeRef: k, MainTreeNode: oe2 } = j3({ portals: ee, defaultContainers: [(X3 = S8.panelRef.current) != null ? X3 : D4.current] }), re = F4 ? "parent" : "leaf", $3 = a9 !== null ? (a9 & d5.Closing) === d5.Closing : false, ne = (() => Y3 || $3 ? false : L2)(), le2 = (0, import_react24.useCallback)(() => {
    var r7, c12;
    return (c12 = Array.from((r7 = f9 == null ? void 0 : f9.querySelectorAll("body > *")) != null ? r7 : []).find((d11) => d11.id === "headlessui-portal-root" ? false : d11.contains(k.current) && d11 instanceof HTMLElement)) != null ? c12 : null;
  }, [k]);
  h7(le2, ne);
  let ae3 = (() => F4 ? true : L2)(), ie = (0, import_react24.useCallback)(() => {
    var r7, c12;
    return (c12 = Array.from((r7 = f9 == null ? void 0 : f9.querySelectorAll("[data-headlessui-portal]")) != null ? r7 : []).find((d11) => d11.contains(k.current) && d11 instanceof HTMLElement)) != null ? c12 : null;
  }, [k]);
  h7(ie, ae3);
  let se2 = (() => !(!L2 || F4))();
  h2(M6, P4, se2);
  let pe2 = (() => !(F4 || p6 !== 0))();
  E2(f9 == null ? void 0 : f9.defaultView, "keydown", (r7) => {
    pe2 && (r7.defaultPrevented || r7.key === o6.Escape && (r7.preventDefault(), r7.stopPropagation(), P4()));
  });
  let de = (() => !($3 || p6 !== 0 || Y3))();
  we(f9, de, M6), (0, import_react24.useEffect)(() => {
    if (p6 !== 0 || !D4.current)
      return;
    let r7 = new ResizeObserver((c12) => {
      for (let d11 of c12) {
        let x3 = d11.target.getBoundingClientRect();
        x3.x === 0 && x3.y === 0 && x3.width === 0 && x3.height === 0 && P4();
      }
    });
    return r7.observe(D4.current), () => r7.disconnect();
  }, [p6, D4, P4]);
  let [ue, fe] = M2(), ge2 = (0, import_react24.useMemo)(() => [{ dialogState: p6, close: P4, setTitleId: W2 }, S8], [p6, S8, P4, W2]), J3 = (0, import_react24.useMemo)(() => ({ open: p6 === 0 }), [p6]), Te = { ref: Q2, id: i5, role: "dialog", "aria-modal": p6 === 0 ? true : void 0, "aria-labelledby": S8.titleId, "aria-describedby": ue };
  return import_react24.default.createElement(M3, { type: "Dialog", enabled: p6 === 0, element: D4, onUpdate: o4((r7, c12) => {
    c12 === "Dialog" && u(r7, { [s10.Add]: () => h8((d11) => d11 + 1), [s10.Remove]: () => h8((d11) => d11 - 1) });
  }) }, import_react24.default.createElement(P2, { force: true }, import_react24.default.createElement(pe, null, import_react24.default.createElement(I4.Provider, { value: ge2 }, import_react24.default.createElement(pe.Group, { target: D4 }, import_react24.default.createElement(P2, { force: false }, import_react24.default.createElement(fe, { slot: J3, name: "Dialog.Description" }, import_react24.default.createElement(ge, { initialFocus: s13, containers: M6, features: L2 ? u(re, { parent: ge.features.RestoreFocus, leaf: ge.features.All & ~ge.features.FocusLock }) : ge.features.None }, import_react24.default.createElement(te, null, X({ ourProps: Te, theirProps: T7, slot: J3, defaultTag: He, features: Ge, visible: p6 === 0, name: "Dialog" }))))))))), import_react24.default.createElement(oe2, null));
}
var Ue = "div";
function We(t15, e4) {
  let o7 = I(), { id: i5 = `headlessui-dialog-overlay-${o7}`, ...n6 } = t15, [{ dialogState: l10, close: s13 }] = b3("Dialog.Overlay"), g4 = y2(e4), T7 = o4((a9) => {
    if (a9.target === a9.currentTarget) {
      if (r2(a9.currentTarget))
        return a9.preventDefault();
      a9.preventDefault(), a9.stopPropagation(), s13();
    }
  }), m9 = (0, import_react24.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return X({ ourProps: { ref: g4, id: i5, "aria-hidden": true, onClick: T7 }, theirProps: n6, slot: m9, defaultTag: Ue, name: "Dialog.Overlay" });
}
var Ye = "div";
function $e(t15, e4) {
  let o7 = I(), { id: i5 = `headlessui-dialog-backdrop-${o7}`, ...n6 } = t15, [{ dialogState: l10 }, s13] = b3("Dialog.Backdrop"), g4 = y2(e4);
  (0, import_react24.useEffect)(() => {
    if (s13.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s13.panelRef]);
  let T7 = (0, import_react24.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return import_react24.default.createElement(P2, { force: true }, import_react24.default.createElement(pe, null, X({ ourProps: { ref: g4, id: i5, "aria-hidden": true }, theirProps: n6, slot: T7, defaultTag: Ye, name: "Dialog.Backdrop" })));
}
var Je = "div";
function Xe(t15, e4) {
  let o7 = I(), { id: i5 = `headlessui-dialog-panel-${o7}`, ...n6 } = t15, [{ dialogState: l10 }, s13] = b3("Dialog.Panel"), g4 = y2(e4, s13.panelRef), T7 = (0, import_react24.useMemo)(() => ({ open: l10 === 0 }), [l10]), m9 = o4((a9) => {
    a9.stopPropagation();
  });
  return X({ ourProps: { ref: g4, id: i5, onClick: m9 }, theirProps: n6, slot: T7, defaultTag: Je, name: "Dialog.Panel" });
}
var je = "h2";
function Ke(t15, e4) {
  let o7 = I(), { id: i5 = `headlessui-dialog-title-${o7}`, ...n6 } = t15, [{ dialogState: l10, setTitleId: s13 }] = b3("Dialog.Title"), g4 = y2(e4);
  (0, import_react24.useEffect)(() => (s13(i5), () => s13(null)), [i5, s13]);
  let T7 = (0, import_react24.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return X({ ourProps: { ref: g4, id: i5 }, theirProps: n6, slot: T7, defaultTag: je, name: "Dialog.Title" });
}
var Ve = D(Ne);
var qe = D($e);
var ze = D(Xe);
var Qe = D(We);
var Ze = D(Ke);
var _t = Object.assign(Ve, { Backdrop: qe, Panel: ze, Overlay: Qe, Title: Ze, Description: b2 });

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react25 = __toESM(require_react(), 1);
function c11(a9 = 0) {
  let [l10, r7] = (0, import_react25.useState)(a9), t15 = f4(), o7 = (0, import_react25.useCallback)((e4) => {
    t15.current && r7((u8) => u8 | e4);
  }, [l10, t15]), m9 = (0, import_react25.useCallback)((e4) => Boolean(l10 & e4), [l10]), s13 = (0, import_react25.useCallback)((e4) => {
    t15.current && r7((u8) => u8 & ~e4);
  }, [r7, t15]), g4 = (0, import_react25.useCallback)((e4) => {
    t15.current && r7((u8) => u8 ^ e4);
  }, [r7]);
  return { flags: l10, addFlag: o7, hasFlag: m9, removeFlag: s13, toggleFlag: g4 };
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react26 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l9(r7) {
  let e4 = { called: false };
  return (...t15) => {
    if (!e4.called)
      return e4.called = true, r7(...t15);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g3(t15, ...e4) {
  t15 && e4.length > 0 && t15.classList.add(...e4);
}
function v2(t15, ...e4) {
  t15 && e4.length > 0 && t15.classList.remove(...e4);
}
function b4(t15, e4) {
  let n6 = o2();
  if (!t15)
    return n6.dispose;
  let { transitionDuration: m9, transitionDelay: a9 } = getComputedStyle(t15), [u8, p6] = [m9, a9].map((l10) => {
    let [r7 = 0] = l10.split(",").filter(Boolean).map((i5) => i5.includes("ms") ? parseFloat(i5) : parseFloat(i5) * 1e3).sort((i5, T7) => T7 - i5);
    return r7;
  }), o7 = u8 + p6;
  if (o7 !== 0) {
    n6.group((r7) => {
      r7.setTimeout(() => {
        e4(), r7.dispose();
      }, o7), r7.addEventListener(t15, "transitionrun", (i5) => {
        i5.target === i5.currentTarget && r7.dispose();
      });
    });
    let l10 = n6.addEventListener(t15, "transitionend", (r7) => {
      r7.target === r7.currentTarget && (e4(), l10());
    });
  } else
    e4();
  return n6.add(() => e4()), n6.dispose;
}
function M4(t15, e4, n6, m9) {
  let a9 = n6 ? "enter" : "leave", u8 = o2(), p6 = m9 !== void 0 ? l9(m9) : () => {
  };
  a9 === "enter" && (t15.removeAttribute("hidden"), t15.style.display = "");
  let o7 = u(a9, { enter: () => e4.enter, leave: () => e4.leave }), l10 = u(a9, { enter: () => e4.enterTo, leave: () => e4.leaveTo }), r7 = u(a9, { enter: () => e4.enterFrom, leave: () => e4.leaveFrom });
  return v2(t15, ...e4.base, ...e4.enter, ...e4.enterTo, ...e4.enterFrom, ...e4.leave, ...e4.leaveFrom, ...e4.leaveTo, ...e4.entered), g3(t15, ...e4.base, ...o7, ...r7), u8.nextFrame(() => {
    v2(t15, ...e4.base, ...o7, ...r7), g3(t15, ...e4.base, ...o7, ...l10), b4(t15, () => (v2(t15, ...e4.base, ...o7), g3(t15, ...e4.base, ...e4.entered), p6()));
  }), u8.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function E5({ immediate: t15, container: s13, direction: n6, classes: u8, onStart: a9, onStop: c12 }) {
  let l10 = f4(), d11 = p(), e4 = s2(n6);
  l(() => {
    t15 && (e4.current = "enter");
  }, [t15]), l(() => {
    let r7 = o2();
    d11.add(r7.dispose);
    let i5 = s13.current;
    if (i5 && e4.current !== "idle" && l10.current)
      return r7.dispose(), a9.current(e4.current), r7.add(M4(i5, u8.current, e4.current === "enter", () => {
        r7.dispose(), c12.current(e4.current);
      })), r7.dispose;
  }, [n6]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S7(t15 = "") {
  return t15.split(" ").filter((n6) => n6.trim().length > 1);
}
var _ = (0, import_react26.createContext)(null);
_.displayName = "TransitionContext";
var be = ((r7) => (r7.Visible = "visible", r7.Hidden = "hidden", r7))(be || {});
function Se() {
  let t15 = (0, import_react26.useContext)(_);
  if (t15 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t15;
}
function Ne2() {
  let t15 = (0, import_react26.useContext)(M5);
  if (t15 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t15;
}
var M5 = (0, import_react26.createContext)(null);
M5.displayName = "NestingContext";
function U2(t15) {
  return "children" in t15 ? U2(t15.children) : t15.current.filter(({ el: n6 }) => n6.current !== null).filter(({ state: n6 }) => n6 === "visible").length > 0;
}
function oe(t15, n6) {
  let r7 = s2(t15), s13 = (0, import_react26.useRef)([]), y6 = f4(), D4 = p(), c12 = o4((i5, e4 = j.Hidden) => {
    let a9 = s13.current.findIndex(({ el: o7 }) => o7 === i5);
    a9 !== -1 && (u(e4, { [j.Unmount]() {
      s13.current.splice(a9, 1);
    }, [j.Hidden]() {
      s13.current[a9].state = "hidden";
    } }), D4.microTask(() => {
      var o7;
      !U2(s13) && y6.current && ((o7 = r7.current) == null || o7.call(r7));
    }));
  }), x3 = o4((i5) => {
    let e4 = s13.current.find(({ el: a9 }) => a9 === i5);
    return e4 ? e4.state !== "visible" && (e4.state = "visible") : s13.current.push({ el: i5, state: "visible" }), () => c12(i5, j.Unmount);
  }), p6 = (0, import_react26.useRef)([]), h8 = (0, import_react26.useRef)(Promise.resolve()), u8 = (0, import_react26.useRef)({ enter: [], leave: [], idle: [] }), v3 = o4((i5, e4, a9) => {
    p6.current.splice(0), n6 && (n6.chains.current[e4] = n6.chains.current[e4].filter(([o7]) => o7 !== i5)), n6 == null || n6.chains.current[e4].push([i5, new Promise((o7) => {
      p6.current.push(o7);
    })]), n6 == null || n6.chains.current[e4].push([i5, new Promise((o7) => {
      Promise.all(u8.current[e4].map(([f9, P4]) => P4)).then(() => o7());
    })]), e4 === "enter" ? h8.current = h8.current.then(() => n6 == null ? void 0 : n6.wait.current).then(() => a9(e4)) : a9(e4);
  }), d11 = o4((i5, e4, a9) => {
    Promise.all(u8.current[e4].splice(0).map(([o7, f9]) => f9)).then(() => {
      var o7;
      (o7 = p6.current.shift()) == null || o7();
    }).then(() => a9(e4));
  });
  return (0, import_react26.useMemo)(() => ({ children: s13, register: x3, unregister: c12, onStart: v3, onStop: d11, wait: h8, chains: u8 }), [x3, c12, s13, v3, d11, u8, h8]);
}
function xe() {
}
var Pe2 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function se(t15) {
  var r7;
  let n6 = {};
  for (let s13 of Pe2)
    n6[s13] = (r7 = t15[s13]) != null ? r7 : xe;
  return n6;
}
function Re(t15) {
  let n6 = (0, import_react26.useRef)(se(t15));
  return (0, import_react26.useEffect)(() => {
    n6.current = se(t15);
  }, [t15]), n6;
}
var ye2 = "div";
var ae2 = S2.RenderStrategy;
function De2(t15, n6) {
  var K2, Q2;
  let { beforeEnter: r7, afterEnter: s13, beforeLeave: y6, afterLeave: D4, enter: c12, enterFrom: x3, enterTo: p6, entered: h8, leave: u8, leaveFrom: v3, leaveTo: d11, ...i5 } = t15, e4 = (0, import_react26.useRef)(null), a9 = y2(e4, n6), o7 = (K2 = i5.unmount) == null || K2 ? j.Unmount : j.Hidden, { show: f9, appear: P4, initial: T7 } = Se(), [l10, j5] = (0, import_react26.useState)(f9 ? "visible" : "hidden"), q = Ne2(), { register: O2, unregister: V } = q;
  (0, import_react26.useEffect)(() => O2(e4), [O2, e4]), (0, import_react26.useEffect)(() => {
    if (o7 === j.Hidden && e4.current) {
      if (f9 && l10 !== "visible") {
        j5("visible");
        return;
      }
      return u(l10, { ["hidden"]: () => V(e4), ["visible"]: () => O2(e4) });
    }
  }, [l10, e4, O2, V, f9, o7]);
  let k = s2({ base: S7(i5.className), enter: S7(c12), enterFrom: S7(x3), enterTo: S7(p6), entered: S7(h8), leave: S7(u8), leaveFrom: S7(v3), leaveTo: S7(d11) }), w4 = Re({ beforeEnter: r7, afterEnter: s13, beforeLeave: y6, afterLeave: D4 }), G = l2();
  (0, import_react26.useEffect)(() => {
    if (G && l10 === "visible" && e4.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e4, l10, G]);
  let ue = T7 && !P4, z2 = P4 && f9 && T7, Te = (() => !G || ue ? "idle" : f9 ? "enter" : "leave")(), H3 = c11(0), de = o4((g4) => u(g4, { enter: () => {
    H3.addFlag(d5.Opening), w4.current.beforeEnter();
  }, leave: () => {
    H3.addFlag(d5.Closing), w4.current.beforeLeave();
  }, idle: () => {
  } })), fe = o4((g4) => u(g4, { enter: () => {
    H3.removeFlag(d5.Opening), w4.current.afterEnter();
  }, leave: () => {
    H3.removeFlag(d5.Closing), w4.current.afterLeave();
  }, idle: () => {
  } })), A = oe(() => {
    j5("hidden"), V(e4);
  }, q);
  E5({ immediate: z2, container: e4, classes: k, direction: Te, onStart: s2((g4) => {
    A.onStart(e4, g4, de);
  }), onStop: s2((g4) => {
    A.onStop(e4, g4, fe), g4 === "leave" && !U2(A) && (j5("hidden"), V(e4));
  }) });
  let R3 = i5, me2 = { ref: a9 };
  return z2 ? R3 = { ...R3, className: t6(i5.className, ...k.current.enter, ...k.current.enterFrom) } : (R3.className = t6(i5.className, (Q2 = e4.current) == null ? void 0 : Q2.className), R3.className === "" && delete R3.className), import_react26.default.createElement(M5.Provider, { value: A }, import_react26.default.createElement(c5, { value: u(l10, { ["visible"]: d5.Open, ["hidden"]: d5.Closed }) | H3.flags }, X({ ourProps: me2, theirProps: R3, defaultTag: ye2, features: ae2, visible: l10 === "visible", name: "Transition.Child" })));
}
function He2(t15, n6) {
  let { show: r7, appear: s13 = false, unmount: y6 = true, ...D4 } = t15, c12 = (0, import_react26.useRef)(null), x3 = y2(c12, n6);
  l2();
  let p6 = C();
  if (r7 === void 0 && p6 !== null && (r7 = (p6 & d5.Open) === d5.Open), ![true, false].includes(r7))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h8, u8] = (0, import_react26.useState)(r7 ? "visible" : "hidden"), v3 = oe(() => {
    u8("hidden");
  }), [d11, i5] = (0, import_react26.useState)(true), e4 = (0, import_react26.useRef)([r7]);
  l(() => {
    d11 !== false && e4.current[e4.current.length - 1] !== r7 && (e4.current.push(r7), i5(false));
  }, [e4, r7]);
  let a9 = (0, import_react26.useMemo)(() => ({ show: r7, appear: s13, initial: d11 }), [r7, s13, d11]);
  (0, import_react26.useEffect)(() => {
    if (r7)
      u8("visible");
    else if (!U2(v3))
      u8("hidden");
    else {
      let T7 = c12.current;
      if (!T7)
        return;
      let l10 = T7.getBoundingClientRect();
      l10.x === 0 && l10.y === 0 && l10.width === 0 && l10.height === 0 && u8("hidden");
    }
  }, [r7, v3]);
  let o7 = { unmount: y6 }, f9 = o4(() => {
    var T7;
    d11 && i5(false), (T7 = t15.beforeEnter) == null || T7.call(t15);
  }), P4 = o4(() => {
    var T7;
    d11 && i5(false), (T7 = t15.beforeLeave) == null || T7.call(t15);
  });
  return import_react26.default.createElement(M5.Provider, { value: v3 }, import_react26.default.createElement(_.Provider, { value: a9 }, X({ ourProps: { ...o7, as: import_react26.Fragment, children: import_react26.default.createElement(le, { ref: x3, ...o7, ...D4, beforeEnter: f9, beforeLeave: P4 }) }, theirProps: {}, defaultTag: import_react26.Fragment, features: ae2, visible: h8 === "visible", name: "Transition" })));
}
function Fe(t15, n6) {
  let r7 = (0, import_react26.useContext)(_) !== null, s13 = C() !== null;
  return import_react26.default.createElement(import_react26.default.Fragment, null, !r7 && s13 ? import_react26.default.createElement(W, { ref: n6, ...t15 }) : import_react26.default.createElement(le, { ref: n6, ...t15 }));
}
var W = D(He2);
var le = D(De2);
var Le = D(Fe);
var tt = Object.assign(W, { Child: Le, Root: W });

// node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var React = __toESM(require_react(), 1);
function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
var ForwardRef = React.forwardRef(Bars3Icon);
var Bars3Icon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var React2 = __toESM(require_react(), 1);
function CalendarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
  }));
}
var ForwardRef2 = React2.forwardRef(CalendarIcon);
var CalendarIcon_default = ForwardRef2;

// node_modules/@heroicons/react/24/outline/esm/ChartPieIcon.js
var React3 = __toESM(require_react(), 1);
function ChartPieIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
  }), /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
  }));
}
var ForwardRef3 = React3.forwardRef(ChartPieIcon);
var ChartPieIcon_default = ForwardRef3;

// node_modules/@heroicons/react/24/outline/esm/HomeIcon.js
var React4 = __toESM(require_react(), 1);
function HomeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
  }));
}
var ForwardRef4 = React4.forwardRef(HomeIcon);
var HomeIcon_default = ForwardRef4;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var React5 = __toESM(require_react(), 1);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React5.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React5.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React5.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
var ForwardRef5 = React5.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef5;

// app/components/Navigation.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navigation.tsx"
  );
  import.meta.hot.lastModified = "1692796681490.2224";
}
var navigation = [{
  name: "Timesheet",
  href: "#",
  icon: HomeIcon_default,
  current: true
}, {
  name: "Calendar",
  href: "#",
  icon: CalendarIcon_default,
  current: false
}, {
  name: "Stats",
  href: "#",
  icon: ChartPieIcon_default,
  current: false
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navigation({
  children
}) {
  _s();
  const [sidebarOpen, setSidebarOpen] = (0, import_react27.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt.Root, { show: sidebarOpen, as: import_react27.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-50 lg:hidden", onClose: setSidebarOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt.Child, { as: import_react27.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900/80" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt.Child, { as: import_react27.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tt.Child, { as: import_react27.Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5", onClick: () => setSidebarOpen(false), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close sidebar" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 63,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 64,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 62,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=white", alt: "Your Company" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 71,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 70,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: classNames(item.current ? "text-white" : "text-indigo-200 group-hover:text-white", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, false, {
              fileName: "app/components/Navigation.tsx",
              lineNumber: 79,
              columnNumber: 35
            }, this),
            item.name
          ] }, void 0, true, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 78,
            columnNumber: 33
          }, this) }, item.name, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 77,
            columnNumber: 53
          }, this)) }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 76,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 75,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 74,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 73,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 69,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=white", alt: "Your Company" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: classNames(item.current ? "text-white" : "text-indigo-200 group-hover:text-white", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 107,
            columnNumber: 27
          }, this),
          item.name
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 106,
          columnNumber: 25
        }, this) }, item.name, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 105,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 104,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "-mx-6 mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-8 rounded-full bg-indigo-700", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 116,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Your profile" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 117,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "philibert.dugas@gmail.com" }, void 0, false, {
            fileName: "app/components/Navigation.tsx",
            lineNumber: 118,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 115,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 97,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5 text-indigo-200 lg:hidden", onClick: () => setSidebarOpen(true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 text-sm font-semibold leading-6 text-white", children: "Dashboard" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Your profile" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-8 rounded-full bg-indigo-700", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 134,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-10 lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(Navigation, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");
_c = Navigation;
var _c;
$RefreshReg$(_c, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, ...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navigation, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
/*! Bundled license information:

@remix-run/css-bundle/dist/esm/index.js:
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
//# sourceMappingURL=/build/root-XEKTE5KM.js.map
