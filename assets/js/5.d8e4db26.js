(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{354:function(t,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"http请求与响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求与响应"}},[t._v("#")]),t._v(" HTTP请求与响应")]),t._v(" "),a("p",[t._v("HTTP作用：指导浏览器与服务器进行沟通\n"),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/16155751-44fc3a6e4ce10711.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("浏览器负责发起请求")]),t._v(" "),a("li",[t._v("服务器在 80 端口接收请求")]),t._v(" "),a("li",[t._v("服务器负责返回内容（响应）")]),t._v(" "),a("li",[t._v("浏览器负责下载响应内容")])]),t._v(" "),a("h4",{attrs:{id:"使用chrome开发工具查看请求与响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用chrome开发工具查看请求与响应"}},[t._v("#")]),t._v(" 使用Chrome开发工具查看请求与响应")]),t._v(" "),a("p",[t._v("①Ctrl + Shift + I / 右键--\x3e检查\n②在 Network 点击，查看 request，点击「view source」")]),t._v(" "),a("h3",{attrs:{id:"_1-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-请求"}},[t._v("#")]),t._v(" 1.请求")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/16155751-10f56832422903b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"请求的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求的格式"}},[t._v("#")]),t._v(" 请求的格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1 动词 路径 协议/版本\n2 Key1: value1\n2 Key2: value2\n2 Key3: value3\n2 Content-Type: application/x-www-form-urlencoded\n2 Host: www.baidu.com\n2 User-Agent: curl/7.54.0\n3 \n4 要上传的数据\n0. 请求最多包含四部分，最少包含三部分。（也就是说第四部分可以为空）\n1. 第三部分永远都是一个回车（\\n）\n2. 动词有 GET POST PUT PATCH DELETE HEAD OPTIONS 等\n3. 这里的路径包括「查询参数」，但不包括「锚点」\n4. 如果你没有写路径，那么路径默认为 /\n5. 第 2 部分中的 Content-Type 标注了第 4 部分的格式\n")])])]),a("p",[t._v("补充："),a("a",{attrs:{href:"https://link.jianshu.com/?t=http://tools.jb51.net/table/http_request_method",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP请求方法对照表"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_2-响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-响应"}},[t._v("#")]),t._v(" 2.响应")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/16155751-4f6f6dc0fb762695.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"响应的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应的格式"}},[t._v("#")]),t._v(" 响应的格式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1 协议/版本号 状态码 状态解释\n2 Key1: value1\n2 Key2: value2\n2 Content-Length: 17931\n2 Content-Type: text/html\n3\n4 要下载的内容\n")])])]),a("ol",[a("li",[t._v("状态码是服务器对浏览器说的话\n"),a("a",{attrs:{href:"https://link.jianshu.com/?t=http://tools.jb51.net/table/http_status_code",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP状态码对照表"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("第 2 部分中的 Content-Type 标注了第 4 部分的格式")]),t._v(" "),a("li",[t._v("第 2 部分中的 Content-Type 遵循 MIME 规范")])]),t._v(" "),a("h4",{attrs:{id:"使用curl查看请求与响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用curl查看请求与响应"}},[t._v("#")]),t._v(" 使用curl查看请求与响应")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/16155751-ff534df05f4129ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v('\ncurl -s -v -- "https://www.baidu.com"\n请求的内容：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> GET / HTTP/1.1\n> Host: www.baidu.com\n> User-Agent: curl/7.55.0\n> Accept: */*\n")])])]),a("p",[t._v("响应的内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> HTTP/1.1 200 Ok\n> Accept-Ranges: bytes\n> Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform\n> Connection: Keep-Alive\n> Content-Length: 2443\n> Content-Type: text/html\n> Date: Thu, 07 Feb 2019 14:41:27 GMT\n> Etag: "588603e6-98b"\n> Last-Modified: Mon, 23 Jan 2017 13:23:50 GMT\n> Pragma: no-cache\n> Server: bfe/1.0.8.18\n> Set-Cookie: BDORZ=27315; max-age=86400; domain=.baidu.com; path=/\n')])])]),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/16155751-1065051c75e3f0a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),a("p",[t._v('curl -X POST -d "123456" -s -v -- "https://www.baidu.com"\n请求的内容：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> POST / HTTP/1.1\n> Host: www.baidu.com\n> User-Agent: curl/7.55.0\n> Accept: */*\n> Content-Length: 6\n> Content-Type: application/x-www-form-urlencoded\n")])])]),a("p",[t._v("响应的内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> HTTP/1.1 302 Found\n> Connection: Keep-Alive\n> Content-Length: 17931\n> Content-Type: text/html\n> Date: Thu, 07 Feb 2019 14:42:57 GMT\n> Etag: "54d97485-460b"\n> Server: bfe/1.0.8.18\n\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);