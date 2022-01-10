(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{420:function(e,o,t){"use strict";t.r(o);var s=t(52),r=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"powershell-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powershell-modules"}},[e._v("#")]),e._v(" PowerShell modules")]),e._v(" "),t("p",[e._v("PowerShell modules are installed like other apps, but they are also linked under "),t("code",[e._v("~\\scoop\\modules")]),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("~\\scoop\\modules")]),e._v(" directory will be added to your "),t("code",[e._v("$env:PSModulePath")]),e._v(" environment variable, and PowerShell should automatically detect the modules you install here using Scoop.")]),e._v(" "),t("p",[e._v("The directories under "),t("code",[e._v("~\\scoop\\modules")]),e._v(" aren't normal directories. Each is a "),t("strong",[e._v("directory junction")]),e._v(" which points to the currently installed version of the app/module, which is itself a directory junction pointing to the actual versioned directory. So for a module named "),t("code",[e._v("MyPSModule")]),e._v(" you might have something like this:")]),e._v(" "),t("p",[t("code",[e._v("~\\scoop\\modules\\MyPSModule")]),t("br"),e._v("\n  → "),t("em",[e._v("points to")]),e._v(" "),t("code",[e._v("~\\scoop\\apps\\mypsmodule\\current")]),t("br"),e._v("\n    → "),t("em",[e._v("points to")]),e._v(" "),t("code",[e._v("~\\scoop\\apps\\mypsmodule\\1.16.0.rc2")])]),e._v(" "),t("p",[e._v("The key part of the "),t("RouterLink",{attrs:{to:"/docs/concepts/App-Manifests.html"}},[e._v("Scoop manifest")]),e._v(" for a PowerShell module is this:")],1),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"psmodule"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"NameOfTheModule"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("The "),t("code",[e._v("name")]),e._v(" property is required if you use "),t("code",[e._v("psmodule")]),e._v(", and it should match the name of the "),t("code",[e._v(".psd1")]),e._v(' manifest for the PowerShell module for PowerShell to consider it "well-formed" and automatically detect the module (see '),t("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/dd878350(v=vs.85).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for more.)")])])}),[],!1,null,null,null);o.default=r.exports}}]);