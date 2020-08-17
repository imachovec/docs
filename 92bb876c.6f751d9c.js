(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(98),s=t(96),o=t(47),l=t.n(o),c=37,u=39;a.a=function(e){var a=e.block,t=e.children,o=e.defaultValue,p=e.values,b=e.groupId,d=Object(i.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,f=Object(n.useState)(o),O=f[0],g=f[1],j=Object(n.useState)(!1),v=j[0],y=j[1];if(null!=b){var T=m[b];null!=T&&T!==O&&p.some((function(e){return e.value===T}))&&g(T)}var w=function(e){g(e),null!=b&&h(b,e)},N=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},x=function(){y(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",x)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a})},p.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===a}),style:v?{}:{outline:"none"},key:a,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case u:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case c:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(N,e.target,e),E(e)},onFocus:function(){return w(a)},onClick:function(){w(a),y(!1)},onPointerDown:function(){return y(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))}},101:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}},80:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return u})),t.d(a,"default",(function(){return b}));var n=t(2),r=t(6),i=(t(0),t(94)),s=t(100),o=t(101),l={title:"Getting Started"},c={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Overview",source:"@site/docs/getting_started.md",permalink:"/docs/docs/getting_started",editUrl:"https://github.com/Leaf-Agriculture/docs/getting_started.md",sidebar:"docs",next:{title:"Introduction",permalink:"/docs/docs/"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Get sample Field",id:"get-sample-field",children:[]},{value:"Get all sample operation files",id:"get-all-sample-operation-files",children:[]},{value:"Get specific sample operation file",id:"get-specific-sample-operation-file",children:[]},{value:"Get sample operation file summary",id:"get-sample-operation-file-summary",children:[]},{value:"Get sample operation file image",id:"get-sample-operation-file-image",children:[]},{value:"Get sample auto-merged operation file",id:"get-sample-auto-merged-operation-file",children:[]}],p={rightToc:u};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Welcome to Leaf's Documentation!"),Object(i.b)("p",null,"Food and Agriculture developers use Leaf's API to access clean, standardized,\nand aggregated Farm data from all major sources. Use the  getting started\nsection below  to help you access sample farm data quickly, easily, and securely.\nWe have implementation examples in cURL, NodeJS and Python!"),Object(i.b)("p",null,"Getting Started"),Object(i.b)("p",null,"Leaf's API abstracts and standardizes across agricultural data sources to make\nthings easy for you. There are just a few concepts that you need to get started\nand we provide sample data within new Leaf accounts to help you learn quickly."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Below you'll find instructions using curl and python, but you may also follow\nalong using our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"Leaf Postman collection"),"\nif you're familiar."))),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"After creating and confirming your account, the first step is to authenticate with your email and password to retrieve an API token. This token is what we'll use in subsequent steps to talk to the API. Be sure to keep a copy of this token for the remaining steps."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/api/authenticate\"\n\ndata = {'username':'your email', 'password':'your password', 'rememberMe':'true'}\n\nheaders = {'Content-Type': 'application/json'}\n\nresponse = requests.request(\"POST\", url, headers=headers, json=data)\n"))),Object(i.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n   -H \'Content-Type: application/json\' \\\n   -d \'{ "username":"username", "password":"password", "rememberMe":"true" }\' \\\n   \'https://a.agrigate.io/api/authenticate\'\n')))),Object(i.b)("h2",{id:"get-sample-field"},"Get sample Field"),Object(i.b)("p",null,"Inside your account, we've created a sample LeafUser and populated it with data.\nLet's take a look at the fields endpoint to see the sample field:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://a.agrigate.io/services/satellite/api/fields'\n"))),Object(i.b)(o.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/services/fields/api/fields\"\nheaders = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-all-sample-operation-files"},"Get all sample operation files"),Object(i.b)("p",null,"Next, let's look at operations data. 'Operations' refers to the data collected\nwhen a machine and any implements performed an operation on a farm. This command\nwill list operations files available across your whole account:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files'\n"))),Object(i.b)(o.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/services/operations/api/files\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-specific-sample-operation-file"},"Get specific sample operation file"),Object(i.b)("p",null,"Now that you have a file ID, you can query for the operations data itself and a\nsummary as well."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files/{id}'\n"))),Object(i.b)(o.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/services/operations/api/files/{file_id}\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-sample-operation-file-summary"},"Get sample operation file summary"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files/{id}/summary'\n"))),Object(i.b)(o.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/services/operations/api/files/{file_id}/summary\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-sample-operation-file-image"},"Get sample operation file image"),Object(i.b)("p",null,"You may have already noticed that we're seeing a lot of operations files for\nthis one field and the timestamps span just a few days. This is because we're\nlooking at multiple files output from a machine that effectively represent one\nlarge operation - a harvest. Before we talk about merging these pieces into a\nsingle operation, let's look at an image from one of the pieces:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files/{id}/images'\n"))),Object(i.b)(o.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/services/operations/api/files/{file_id}/images\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))),Object(i.b)("h2",{id:"get-sample-auto-merged-operation-file"},"Get sample auto-merged operation file"),Object(i.b)("p",null,"A single strip appears in that image which is no mistake. It's also not as\nuseful as seeing the whole operation across the whole field! To solve this,\nwe automatically merge data and produce images for data of the same type and\ntimeframe."),Object(i.b)("p",null,"Let's take a look at the automatically merged harvesting image which is colored\nto indicate the range of wet mass collected. To find the auto-merged files, just\nadd a parameter to filter to origin=automerged:"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"review"))),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files?origin=automerged'\n"))),Object(i.b)(o.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/services/operations/api/files?origin=automerged\"\n\npayload = {}\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers, data = payload)\n")))),Object(i.b)("p",null,"And finally, use that file ID to retrieve the image:"),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files/{id}/images'\n"))),Object(i.b)(o.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/services/operations/api/files/{file_id}/images\"\n\nheaders = {\n  'Content-Type': 'application/json',\n  'Authorization': 'Bearer YOUR_LEAF_TOKEN'\n}\n\nresponse = requests.request(\"GET\", url, headers=headers)\n")))))}b.isMDXComponent=!0},94:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=u(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return t?r.a.createElement(m,o(o({ref:a},c),{},{components:t})):r.a.createElement(m,o({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},97:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},98:function(e,a,t){"use strict";var n=t(0),r=t(97);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);