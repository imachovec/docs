(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(98),o=a(96),s=a(47),l=a.n(s),c=37,p=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,u=e.values,d=e.groupId,m=Object(i.a)(),f=m.tabGroupChoices,b=m.setTabGroupChoices,g=Object(n.useState)(s),h=g[0],O=g[1],v=Object(n.useState)(!1),j=v[0],y=v[1];if(null!=d){var w=f[d];null!=w&&w!==h&&u.some((function(e){return e.value===w}))&&O(w)}var N=function(e){O(e),null!=d&&b(d,e)},T=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},k=function(){y(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",k)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),E(e)},onFocus:function(){return N(t)},onClick:function(){N(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===h}))[0]))}},101:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),i=(a(0),a(94)),o=a(100),s=a(101),l={title:"Getting Started"},c={unversionedId:"getting_started",id:"getting_started",isDocsHomePage:!0,title:"Getting Started",description:"Overview",source:"@site/docs/getting_started.md",permalink:"/docs/docs/",editUrl:"https://github.com/Leaf-Agriculture/docs/getting_started.md",sidebar:"docs",next:{title:"Introduction",permalink:"/docs/docs/introduction"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Get sample LeafUser",id:"get-sample-leafuser",children:[]},{value:"Get sample operations files",id:"get-sample-operations-files",children:[]},{value:"Get sample operation file",id:"get-sample-operation-file",children:[]},{value:"Get sample operation file summary",id:"get-sample-operation-file-summary",children:[]},{value:"Get sample operation file image",id:"get-sample-operation-file-image",children:[]},{value:"Get sample auto-merged operation file",id:"get-sample-auto-merged-operation-file",children:[]}],u={rightToc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Welcome to Leaf's Documentation!"),Object(i.b)("p",null,"Food and Agriculture developers use Leaf's API to access clean, standardized,\nand aggregated Farm data from all major sources. Use the  getting started\nsection below  to help you access sample farm data quickly, easily, and securely.\nWe have implementation examples in cURL, NodeJS and Python!"),Object(i.b)("p",null,"Getting Started"),Object(i.b)("p",null,"Leaf's API abstracts and standardizes across agricultural data sources to make\nthings easy for you. There are just a few concepts that you need to get started\nand we provide sample data within new Leaf accounts to help you learn quickly."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Below you'll find instructions using curl and python, but you may also follow\nalong using our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"Leaf Postman collection"),"\nif you're familiar."))),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"After creating and confirming your account, the first step is to authenticate with your email and password to retrieve an API token. This token is what we'll use in subsequent steps to talk to the API. Be sure to keep a copy of this token for the remaining steps."),Object(i.b)(o.a,{defaultValue:"py",values:[{label:"Bash",value:"sh"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nurl = \"https://a.agrigate.io/api/authenticate\"\n\ndata = {'username':'your email', 'password':'your password', 'rememberMe':'true'}\n\nheaders = {'Content-Type': 'application/json'}\n\nresponse = requests.request(\"POST\", url, headers=headers, json=data)\n"))),Object(i.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n   -H \'Content-Type: application/json\' \\\n   -d \'{ "username":"username", "password":"password", "rememberMe":"true" }\' \\\n   \'https://a.agrigate.io/api/authenticate\'\n')))),Object(i.b)("h2",{id:"get-sample-leafuser"},"Get sample LeafUser"),Object(i.b)("p",null,"Inside your account, we've created a sample LeafUser and populated it with data. Let's take a look at the fields endpoint to see the sample field:"),Object(i.b)("p",null,"[copied from fields page]","\ncurl -X GET \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://a.agrigate.io/services/satellite/api/fields'"}),"https://a.agrigate.io/services/satellite/api/fields'"),"\n","[copied from fields page]"),Object(i.b)("h2",{id:"get-sample-operations-files"},"Get sample operations files"),Object(i.b)("p",null,"Next, let's look at operations data. 'Operations' refers to the data collected when a machine and any implements performed an operation on a farm. This command will list operations files available across your whole account:"),Object(i.b)("p",null,"[Copied from operations page]","\ncurl -X GET \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://a.agrigate.io/services/operations/api/files'"}),"https://a.agrigate.io/services/operations/api/files'"),"\n","[Copied from operations page]"),Object(i.b)("h2",{id:"get-sample-operation-file"},"Get sample operation file"),Object(i.b)("p",null,"Now that you have a file ID, you can query for the operations data itself and a summary as well."),Object(i.b)("p",null,"[Copied from operations page]","\ncurl -X GET \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://a.agrigate.io/services/operations/api/files/%7Bid%7D'"}),"https://a.agrigate.io/services/operations/api/files/{id}'")),Object(i.b)("h2",{id:"get-sample-operation-file-summary"},"Get sample operation file summary"),Object(i.b)("p",null,"curl -X GET \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://a.agrigate.io/services/operations/api/files/%7Bid%7D/summary'"}),"https://a.agrigate.io/services/operations/api/files/{id}/summary'"),"\n","[Copied from operations page]"),Object(i.b)("h2",{id:"get-sample-operation-file-image"},"Get sample operation file image"),Object(i.b)("p",null,"You may have already noticed that we're seeing a lot of operations files for this one field and the timestamps span just a few days. This is because we're looking at multiple files output from a machine that effectively represent one large operation - a harvest. Before we talk about merging these pieces into a single operation, let's look at an image from one of the pieces:"),Object(i.b)("p",null,"[Copied from operations page]"),Object(i.b)("p",null,"curl -X GET \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://a.agrigate.io/services/operations/api/files/%7Bid%7D/images'"}),"https://a.agrigate.io/services/operations/api/files/{id}/images'"),"\n","[Copied from operations page]"),Object(i.b)("h2",{id:"get-sample-auto-merged-operation-file"},"Get sample auto-merged operation file"),Object(i.b)("p",null,"A single strip appears in that image which is no mistake. It's also not as useful as seeing the whole operation across the whole field! To solve this, we automatically merge data and produce images for data of the same type and timeframe."),Object(i.b)("p",null,"Let's take a look at the automatically merged harvesting image which is colored to indicate the range of wet mass collected. To find the auto-merged files, just add a parameter to filter to origin=automerged:"),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"review"))),Object(i.b)("p",null,"[Made this one myself, not sure I got it right]","\ncurl -X GET \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://a.agrigate.io/services/operations/api/files/%7Bid%7D?origin=automerged'"}),"https://a.agrigate.io/services/operations/api/files/{id}?origin=automerged'")),Object(i.b)("p",null,"And finally, use that file ID to retrieve the image:"),Object(i.b)("p",null,"[Copied from operations page]","\ncurl -X GET \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://a.agrigate.io/services/operations/api/files/%7Bid%7D/images'"}),"https://a.agrigate.io/services/operations/api/files/{id}/images'"),"\n","[Copied from operations page]"))}d.isMDXComponent=!0},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return a?r.a.createElement(f,s(s({ref:t},c),{},{components:a})):r.a.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},97:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},98:function(e,t,a){"use strict";var n=a(0),r=a(97);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);