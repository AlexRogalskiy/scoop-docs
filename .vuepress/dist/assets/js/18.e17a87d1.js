(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{403:function(e,t,o){"use strict";o.r(t);var n=o(52),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"the-current-version-alias"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-current-version-alias"}},[e._v("#")]),e._v(' The "Current" Version Alias')]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("current")]),e._v(" directory for apps is a special alias directory which points to the currently installed version of that app.")]),e._v(" "),o("p",[e._v("It allows path references to remain the same across app updates, since paths refer to the "),o("code",[e._v("current")]),e._v(" directory alias rather than a hardcoded version directory.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://raw.githubusercontent.com/lukesampson/scoop/gh-pages/images/Junctions%20Overview.png",alt:"How the 'current' alias works"}})]),e._v(" "),o("p",[e._v("For example, if I run "),o("code",[e._v("ls ~/scoop/apps/git")]),e._v(" now, I see this output:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("$ ls ~/scoop/apps/git\n\n    Directory: C:\\Users\\luke\\scoop\\apps\\git\n\n\nMode                LastWriteTime         Length Name\n----                -------------         ------ ----\nd-----         24/11/16   8:17 am                2.10.2.windows.1\nd-----           3/1/17   9:42 am                2.11.0.windows.1\nd----l           3/1/17   9:42 am                current\n")])])]),o("p",[e._v("The "),o("code",[e._v("2.10.2.windows.1")]),e._v(" and "),o("code",[e._v("2.11.0.windows.1")]),e._v(" directories are the installed versions of Git.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("current")]),e._v(" directory is not an additional directory, but a "),o("strong",[e._v("Directory Junction")]),e._v(", pointing to the 2.11.0.windows.1 directory.")]),e._v(" "),o("p",[e._v("If you're paying close attention, you might notice the extra "),o("code",[e._v("l")]),e._v(" in the "),o("code",[e._v("Mode")]),e._v(" column of the output. But apart from that, you won't see much indication that it's any different from a normal directory.")]),e._v(" "),o("h2",{attrs:{id:"what-are-directory-junctions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-are-directory-junctions"}},[e._v("#")]),e._v(" What are Directory Junctions?")]),e._v(" "),o("p",[e._v("If you're not familiar with directory junctions, you can think of them as similar to symbolic links, or even shortcuts. They are pointers to other locations in the file system. There are some important implementation differences between junctions and symbolic links, which you can read about "),o("a",{attrs:{href:"https://msdn.microsoft.com/en-us/library/windows/desktop/aa365006(v=vs.85).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" if you're interested.")]),e._v(" "),o("p",[e._v("The reason Scoop uses junctions instead of symbolic links is that symbolic links require admin permissions to create (although this "),o("a",{attrs:{href:"https://blogs.windows.com/buildingapps/2016/12/02/symlinks-windows-10/#cpLA6xrKTwb5fOf7.97",target:"_blank",rel:"noopener noreferrer"}},[e._v("looks set to change soon"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("h3",{attrs:{id:"why-use-a-junction-aren-t-shims-enough"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-use-a-junction-aren-t-shims-enough"}},[e._v("#")]),e._v(" Why Use a Junction? Aren't Shims Enough?")]),e._v(" "),o("p",[e._v("The main problem being addressed here is how to keep programs working smoothly between updates, even though the new program is in a different directory to the previous one. Shims do solve some of the problems here, by staying in the same place and updating the version that they point to.")]),e._v(" "),o("p",[e._v("However, some programs need to set environment variables, registry settings or other configuration after installation that point to the actual install path. Before Scoop used "),o("code",[e._v("current")]),e._v(" directory junctions, these variables and settings would be pointing to the old directory after an upgrade, which was not ideal. By using a "),o("code",[e._v("current")]),e._v(" alias directory and updating the alias, the settings would continue to point to the right location.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://raw.githubusercontent.com/lukesampson/scoop/gh-pages/images/Junctions%20Comparison.png",alt:"Why Junctions?"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);