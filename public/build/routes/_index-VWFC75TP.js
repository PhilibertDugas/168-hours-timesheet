import {
  useOptionalUser
} from "/build/_shared/chunk-S5ZA3BAK.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useSubmit
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

// app/routes/_index.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1692798861807.6304";
}
var meta = () => [{
  title: "168 Hours Online"
}];
var hourBlocks = ["5h00", "5h30", "6h00", "6h30", "7h00", "7h30", "8h00", "8h30", "9h00", "9h30", "10h00", "10h30", "11h00", "11h30", "12h00", "12h30", "13h00", "13h30", "14h00", "14h30", "15h00", "15h30", "16h00", "17h30", "18h00", "18h30", "19h00", "19h30", "20h00", "20h30", "21h00", "21h30", "22h00", "22h30", "23h00", "23h30", "0h00", "0h30", "1h00", "1h30", "2h00", "2h30", "3h00", "3h30", "4h00", "4h30"];
function Index() {
  _s();
  const user = useOptionalUser();
  const form = (0, import_react2.useRef)(null);
  const submit = useSubmit();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "168 Hours Timesheet Tracker" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Track your time. This is an alternative to the 168 hours spreadsheet" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mx-4 -my-2 sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full border-separate border-spacing-0 table-fixed", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8", children: "Hour" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 72,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter", children: "Activity" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 w-1/5 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter", children: "Minutes" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 w-1/5  border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter", children: "Tags" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Save" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 84,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
        hourBlocks.map((block) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap  w-1/5 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8", children: block }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 91,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500 table-cell", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: `activity_${block}`, placeholder: "Activity", form: "time_form", className: "w-full", required: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 95,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 94,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500 table-cell", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: `minutes_${block}`, placeholder: "0", form: "time_form", className: "w-full", required: true }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 98,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 97,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap  w-1/5 px-3 py-4 text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: `tag_${block}`, placeholder: "Tag", form: "time_form", className: "w-full" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 101,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 100,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "relative whitespace-nowrap w-1/5 py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-indigo-600 hover:text-indigo-900", onClick: () => submit(form.current), children: "Save" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 104,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 103,
            columnNumber: 21
          }, this)
        ] }, block, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 90,
          columnNumber: 42
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { ref: form, id: "time_form", method: "post" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 89,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Index, "tamGbJr+NSASLMoNkchHJRBeies=", false, function() {
  return [useOptionalUser, useSubmit];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-VWFC75TP.js.map
