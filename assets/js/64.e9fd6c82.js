(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{411:function(a,e,s){"use strict";s.r(e);var t=s(42),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h4",{attrs:{id:"项目搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目搭建"}},[a._v("#")]),a._v(" 项目搭建")]),a._v(" "),s("h5",{attrs:{id:"安装-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-node-js"}},[a._v("#")]),a._v(" 安装 Node.js")]),a._v(" "),s("blockquote",[s("p",[a._v("安装目录可以改，一定不要在路径中出现中文和空格")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("https://nodejs.org/zh-cn/download/\n\nhttps://nodejs.org/dist/   //node.js历史版本\n\nnode --version 查看Node版本\nnpm -v 查看npm版本\n\n\n// 重装 Node.js 后，以前用 npm 或 yarn 全局安装的命令可能消失不见，如果需要，可以需要重新全局安装命令\nnpm install -g nrm --registry=https://registry.npm.taobao.org\nnrm use taobao\n")])])]),s("h5",{attrs:{id:"安装-vue-cli-4-1-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-vue-cli-4-1-2"}},[a._v("#")]),a._v(" 安装 @vue/cli@4.1.2")]),a._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[a._v("vue --version  # 如果这个命令打印出一个版本号，而版本号又不是 4.1.2 就说明你需要卸载\nyarn global remove @vue/cli\nyarn global add @vue/cli@4.1.2\nvue --version  # 版本号应该是 4.1.2\n")])])]),s("h4",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[a._v("vue create morney\ncd morney\nyarn serve \n")])])]),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/16155751-8819c247f4dd8a91.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"目录结构组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构组成"}},[a._v("#")]),a._v(" 目录结构组成")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/16155751-edc586186f6d3da4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),s("h4",{attrs:{id:"import-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-alias"}},[a._v("#")]),a._v(" import alias")]),a._v(" "),s("ul",[s("li",[a._v("TS/JS 通过 @/目录名引入文件")])]),a._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[a._v("// @ is an alias to /src\nimport HelloWorld from '@/components/HelloWorld.vue'\n")])])]),s("ul",[s("li",[a._v("CSS/SASS 通过 ~@/目录名引入文件\n"),s("code",[a._v("settings --\x3e webpack --\x3e morney --\x3e node_modules --\x3e @vue --\x3e cli-service --\x3e webpack.config.js")])])]),a._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[a._v('@import "~@/assets/styles/test.scss"\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);