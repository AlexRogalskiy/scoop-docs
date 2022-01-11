(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{421:function(s,e,a){"use strict";a.r(e);var t=a(52),o=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"system-wide-global-installs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-wide-global-installs"}},[s._v("#")]),s._v(" System-wide (global) installs")]),s._v(" "),a("p",[s._v("By default, Scoop installs apps just for your user account. Apps are installed under "),a("code",[s._v("~\\scoop\\apps")]),s._v(", and only your environment variables are modified. This is usually fine, especially in your dev environment.")]),s._v(" "),a("p",[s._v("In some cases you might want to install an app system-wide so that it's accessible to other users, including the local system account. Scoop provides a "),a("code",[s._v("--global")]),s._v(" switch to support this case.")]),s._v(" "),a("p",[s._v("Global installs require admin permissions, because they install to "),a("code",[s._v("%SYSTEMDRIVE%\\ProgramData\\scoop")]),s._v(", and set system environment variables. For this reason, this example uses the "),a("code",[s._v("sudo")]),s._v(" command, which is a rough equivalent of the UNIX command to run a command with superuser privileges. You can install this by running:")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("scoop install sudo\n")])])]),a("p",[s._v("Otherwise, you can just open a normal PowerShell console using Run As Administrator.")]),s._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("p",[s._v("To install an app:")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("sudo scoop install git "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("global\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("If you want the app to be available to the local system account, you will need to restart the system after you install your first app globally. This is because changes made to environment variables don't take affect for the local system account until you restart Windows (see "),a("a",{attrs:{href:"https://support.microsoft.com/kb/821761",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),a("OutboundLink")],1),s._v(").")])]),s._v(" "),a("p",[s._v("You can also use the short form for "),a("code",[s._v("--global")]),s._v(", "),a("code",[s._v("-g")]),s._v(".")]),s._v(" "),a("p",[s._v("E.g. to update a globally installed app using the short form:")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("sudo scoop update git "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);