(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{406:function(t,s,a){"use strict";a.r(s);var e=a(52),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apache-with-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-with-php"}},[t._v("#")]),t._v(" Apache with PHP")]),t._v(" "),a("p",[t._v("Install PHP and Apache:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("scoop install php apache\n")])])]),a("p",[t._v("Register the PHP handler with Apache:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iex")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new-object")]),t._v(" net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webclient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("downloadstring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://gist.githubusercontent.com/nilkesede/c98a275b80b6d373131df82eaba96c63/raw/apache-php-init.ps1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("To start Apache on the command line")]),t._v(", run:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("httpd\n")])])]),a("p",[t._v("Apache will continue running until you press "),a("code",[t._v("Ctrl-C")]),t._v(" to terminate it.")]),t._v(" "),a("p",[t._v("If you open "),a("code",[t._v("http://localhost")]),t._v(" in your browser, you should see a page saying that “It works!”.")]),t._v(" "),a("h2",{attrs:{id:"the-document-root-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-document-root-directory"}},[t._v("#")]),t._v(" The document root directory")]),t._v(" "),a("p",[t._v("Scoop configures Apache to serve web pages from the "),a("code",[t._v("htdocs")]),t._v(" directory inside the Scoop install directory.")]),t._v(" "),a("p",[t._v("You can get to this directory by running:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\'),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scoop which httpd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v('\\..\\htdocs"')]),t._v("\n")])])]),a("p",[t._v("If you would like to serve documents from somewhere else, you need to change the DocumentRoot inside the "),a("code",[t._v("conf/httpd.conf")]),t._v(" file. You can find "),a("code",[t._v("httpd.conf")]),t._v(" at")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scoop which httpd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v('\\..\\conf\\httpd.conf"')]),t._v("\n")])])]),a("h2",{attrs:{id:"installing-apache-as-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-apache-as-a-service"}},[t._v("#")]),t._v(" Installing Apache as a service")]),t._v(" "),a("p",[t._v("Run:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("sudo httpd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("k install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n apache\nsudo net "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" apache\n")])])]),a("p",[t._v("If you don't have "),a("code",[t._v("sudo")]),t._v(", you can install it with "),a("code",[t._v("scoop install sudo")]),t._v(".")]),t._v(" "),a("p",[t._v("To uninstall the Apache service")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("sudo net stop apache\nsudo httpd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("k uninstall "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("n apache\n")])])]),a("p",[t._v("For more information, see "),a("a",{attrs:{href:"https://httpd.apache.org/docs/current/platform/windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Apache HTTP Server on Windows"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);