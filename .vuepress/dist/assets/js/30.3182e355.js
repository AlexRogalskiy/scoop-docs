(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{416:function(s,a,t){"use strict";t.r(a);var e=t(52),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"antivirus-and-anti-malware-problems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#antivirus-and-anti-malware-problems"}},[s._v("#")]),s._v(" Antivirus and Anti Malware Problems")]),s._v(" "),t("p",[s._v("If you are experiencing performance problems during Scoop installs—like high CPU usage, or file access denied errors—it's possible that an anti-malware or anti-virus program is scanning files as they are being extracted and installed.")]),s._v(" "),t("h2",{attrs:{id:"windows-defender"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-defender"}},[s._v("#")]),s._v(" Windows Defender")]),s._v(" "),t("p",[s._v("You can exclude the directories that Scoop uses from realtime scanning by running this command as an administrator:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Add-MpPreference")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ExclusionPath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":programdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v('\\scoop"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":scoop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("p",[s._v("If you want to undo this change and re-enable realtime scanning of these directories:")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Remove-MpPreference")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ExclusionPath "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":programdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v('\\scoop"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(":scoop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("p",[s._v("References:\n"),t("a",{attrs:{href:"https://github.com/lukesampson/scoop/issues/1388",target:"_blank",rel:"noopener noreferrer"}},[s._v("Issue #1388"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);