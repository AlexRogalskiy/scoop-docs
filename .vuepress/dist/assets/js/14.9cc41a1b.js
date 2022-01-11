(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{400:function(t,a,e){"use strict";e.r(a);var s=e(52),o=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"creating-an-app-manifest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-app-manifest"}},[t._v("#")]),t._v(" Creating an App Manifest")]),t._v(" "),e("p",[t._v("If you want to install a program that's not included in Scoop, it's easy to create an "),e("RouterLink",{attrs:{to:"/docs/concepts/App-Manifests.html"}},[t._v("app manifest")]),t._v(" yourself.")],1),t._v(" "),e("h2",{attrs:{id:"a-basic-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-basic-example"}},[t._v("#")]),t._v(" A basic example")]),t._v(" "),e("p",[t._v("Here's how to create and install a manifest for an app that says hello, in just a few lines of PowerShell.")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# write an app manifest to `hello.json`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ "version": "1.0", "url": "https://gist.github.com/lukesampson/6446238/raw/hello.ps1", "bin": "hello.ps1" }\'')]),t._v(" > hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install the app")]),t._v("\nscoop install hello\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# did it work?")]),t._v("\nhello "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> should output 'Hello, <your-username>!'")]),t._v("\n")])])]),e("h2",{attrs:{id:"sharing-your-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sharing-your-app"}},[t._v("#")]),t._v(" Sharing your app")]),t._v(" "),e("h3",{attrs:{id:"share-on-your-network"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#share-on-your-network"}},[t._v("#")]),t._v(" Share on your network")]),t._v(" "),e("p",[t._v("If you want others on your network to be able to install from your app manifest, you could just put it on a network share location, e.g. "),e("code",[t._v("/shared/files/scoop/hello.json")]),t._v(". Then, for others to install your app, you can tell them to run:")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[t._v("scoop install "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("shared/files/scoop/hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n")])])]),e("h3",{attrs:{id:"share-with-the-world"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#share-with-the-world"}},[t._v("#")]),t._v(" Share with the world")]),t._v(" "),e("p",[t._v("If you make your app manifest publicly available on the web, anyone can install it once they know the URL. For example, I've made a GitHub gist for "),e("code",[t._v("hello.json")]),t._v(" "),e("a",{attrs:{href:"https://gist.github.com/lukesampson/6446567",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(". Now anyone can install it:")]),t._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[t._v("scoop install https:"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("gist"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("github"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com/lukesampson/6446567/raw/hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n")])])]),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),e("p",[t._v('If you ran some of these examples, you probably noticed a warning saying "no hash in manifest". For reference information on specifying file hashes and much more in your manifests, see the '),e("RouterLink",{attrs:{to:"/docs/concepts/App-Manifests.html"}},[t._v("App Manifests reference")]),t._v(".")],1),t._v(" "),e("p",[t._v("If you want to maintain a collection of apps, see the page on "),e("RouterLink",{attrs:{to:"/docs/concepts/Buckets.html"}},[t._v("Buckets")]),t._v(" for more information.")],1)])}),[],!1,null,null,null);a.default=o.exports}}]);