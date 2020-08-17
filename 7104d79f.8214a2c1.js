(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(98),l=n(96),s=n(47),i=n.n(s),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,p=e.groupId,d=Object(o.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,h=Object(a.useState)(s),j=h[0],m=h[1],v=Object(a.useState)(!1),g=v[0],y=v[1];if(null!=p){var T=f[p];null!=T&&T!==j&&b.some((function(e){return e.value===T}))&&m(T)}var N=function(e){m(e),null!=p&&O(p,e)},w=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},x=function(){y(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",x)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),E(e)},onFocus:function(){return N(t)},onClick:function(){N(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},101:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},103:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(94)),l=n(100),s=n(101),i=(n(99),{title:"Endpoints"}),c={unversionedId:"converters_endpoints",id:"converters_endpoints",isDocsHomePage:!1,title:"Endpoints",description:"File Conversion",source:"@site/docs/converters_endpoints.md",permalink:"/docs/docs/converters_endpoints",editUrl:"https://github.com/Leaf-Agriculture/docs/converters_endpoints.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/converters_overview"}},u=[{value:"File Conversion",id:"file-conversion",children:[{value:"Shapefile -&gt; ISOXML",id:"shapefile---isoxml",children:[]},{value:"CNHI -&gt; GeoJSON",id:"cnhi---geojson",children:[]},{value:"Trimble -&gt; GeoJSON",id:"trimble---geojson",children:[]},{value:"Shapefile -&gt; GeoJSON",id:"shapefile---geojson",children:[]},{value:"GeoJSON -&gt; Shapefile",id:"geojson---shapefile",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"file-conversion"},"File Conversion"),Object(o.b)("p",null,"If you want to allow users to upload machine files directly to your dashboard\nor to convert recommendations to a machine-readable format or have another use\nthat requires file conversion, these converters will help."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Roadmap")),Object(o.b)("p",null,"Today, you have the option to use these converters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#shapefile-gt-isoxml"}),"Shapefile -> ISOXML")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#cnhi-gt-geojson"}),"CNHI -> GeoJSON")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#trimble-gt-geojson"}),"Trimble -> GeoJSON")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#shapefile-gt-geojson"}),"Shapefile -> GeoJSON")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#geojson-gt-shapefile"}),"GeoJSON -> Shapefile"))),Object(o.b)("h3",{id:"shapefile---isoxml"},"Shapefile -> ISOXML"),Object(o.b)("p",null,"Send this along with your zipped shapefile"),Object(o.b)(l.a,{defaultValue:"js",values:[{label:"Python",value:"py"},{label:"Bash",value:"sh"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests as req\n\nurl = 'https://a.agrigate.io/quickstart/api/files/shapefile/isoxml'\nheaders = {\n    'Authorization': 'Bearer YOUR_TOKEN'\n}\nfiles = {'file': open('PATH/YOUR_FILE_NAME.zip','rb')}\n\nr = req.post(url, headers=headers, files=files)\nprint(r.text)\n"))),Object(o.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl \\\n-F 'file=@PATH/YOUR_FILE_NAME.zip' \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'https://a.agrigate.io/quickstart/api/files/shapefile/isoxml'\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript--nodejs"}),"var request = require('request');\n\nvar headers = {\n    'Authorization': 'Bearer YOUR_TOKEN'\n};\n\nvar options = {\n    url: 'https://a.agrigate.io/quickstart/api/files/shapefile/isoxml',\n    method: 'POST',\n    headers: headers\n};\n\nfunction callback(error, response, body) {\n    if (!error && response.statusCode == 200) {\n        console.log(body);\n    }\n}\n\nrequest(options, callback);\n")))),Object(o.b)("p",null,"Returns status 200 and a TEXT link where you can download your converted file from"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "uri": "https://leaf-isoxml.s3-us-west-2.amazonaws.com/output/3e1291e4-3026-4357-8bff-0e24feb79602.xml"\n}\n')),Object(o.b)("p",null,"This endpoint will convert a shapefile to ISOXML to be read by a wide variety of machines.\nThis is commonly used for converting VRT prescription files to a machine readable format."),Object(o.b)("p",null,"Note that the return is plain text, not json."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"cnhi---geojson"},"CNHI -> GeoJSON"),Object(o.b)("p",null,"Send this along with your zipped file"),Object(o.b)(l.a,{defaultValue:"js",values:[{label:"Python",value:"py"},{label:"Bash",value:"sh"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests as req\n\nurl = 'https://a.agrigate.io/quickstart/api/files/cnhi'\nheaders = {\n'Authorization': 'Bearer YOUR_TOKEN'\n}\nfiles = {'file': open('PATH/YOUR_FILE_NAME.cn1.zip','rb')}\n\nr = req.post(url, headers=headers, files=files)\nprint(r.text)\n"))),Object(o.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl \\\n-F 'file=@PATH/YOUR_FILE_NAME.cn1.zip' \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'https://a.agrigate.io/quickstart/api/files/cnhi'\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript--nodejs"}),"var request = require('request');\n\nvar headers = {\n    'Authorization': 'Bearer YOUR_TOKEN'\n};\n\nvar options = {\n    url: 'https://a.agrigate.io/quickstart/api/files/cnhi',\n    method: 'POST',\n    headers: headers\n};\n\nfunction callback(error, response, body) {\n    if (!error && response.statusCode == 200) {\n        console.log(body);\n    }\n}\n\nrequest(options, callback);\n")))),Object(o.b)("p",null,"Returns status 200 and a link where you can download your converted file from"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "uri": "https://cnhi-adapt-dev.s3-us-west-2.amazonaws.com/output/3190d2c5-1948-4621-92c5-6bb5c5d36ad1.json.gz"\n}\n')),Object(o.b)("p",null,"  This endpoint will convert a CNHi .CN1 file to Leaf's geojson data model.\nTo use, simply upload a zipped .CN1 folder."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"trimble---geojson"},"Trimble -> GeoJSON"),Object(o.b)("p",null,"Send this along with your zipped file"),Object(o.b)(l.a,{defaultValue:"js",values:[{label:"Python",value:"py"},{label:"Bash",value:"sh"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests as req\n\nurl = 'https://a.agrigate.io/quickstart/api/files/trimble'\nheaders = {\n'Authorization': 'Bearer YOUR_TOKEN'\n}\nfiles = {'file': open('PATH/YOUR_FILE_NAME.cn1.zip','rb')}\n\nr = req.post(url, headers=headers, files=files)\nprint(r.text)\n"))),Object(o.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl \\\n-F 'file=@PATH/YOUR_FILE_NAME.zip' \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'https://a.agrigate.io/quickstart/api/files/trimble'\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript--nodejs"}),"var request = require('request');\n\nvar headers = {\n    'Authorization': 'Bearer YOUR_TOKEN'\n};\n\nvar options = {\n    url: 'https://a.agrigate.io/quickstart/api/files/trimble',\n    method: 'POST',\n    headers: headers\n};\n\nfunction callback(error, response, body) {\n    if (!error && response.statusCode == 200) {\n        console.log(body);\n    }\n}\n\nrequest(options, callback);\n")))),Object(o.b)("p",null,"Returns status 200 and a link where you can download your converted file from"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "uri": "https://trimble-adapt-dev.s3-us-west-2.amazonaws.com/output/7fc72a96-86f6-4568-b730-a581f883509a.json.gz"\n}\n')),Object(o.b)("p",null,"This endpoint will convert a Trimble file to Leaf's geojson data model.\nTo use, simply upload a zipped Trimble folder."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"shapefile---geojson"},"Shapefile -> GeoJSON"),Object(o.b)("p",null,"Send this along with your zipped file"),Object(o.b)(l.a,{defaultValue:"js",values:[{label:"Python",value:"py"},{label:"Bash",value:"sh"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests as req\n\nurl = 'https://a.agrigate.io/quickstart/api/converters/shapefile/geojson'\nheaders = {\n    'Authorization': 'Bearer YOUR_TOKEN'\n}\nfiles = {'file': open('PATH/YOUR_FILE_NAME.zip','rb')}\n\nr = req.post(url, headers=headers, files=files)\nprint(r.text)\n"))),Object(o.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl \\\n-F 'file=@PATH/YOUR_FILE_NAME.zip' \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'https://a.agrigate.io/quickstart/api/converters/shapefile/geojson'\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript--nodejs"}),"var request = require('request');\n\nvar headers = {\n    'Authorization': 'Bearer YOUR_TOKEN'\n};\n\nvar options = {\n    url: 'https://a.agrigate.io/quickstart/api/converters/shapefile/geojson',\n    method: 'POST',\n    headers: headers\n};\n\nfunction callback(error, response, body) {\n    if (!error && response.statusCode == 200) {\n        console.log(body);\n    }\n}\n\nrequest(options, callback);\n")))),Object(o.b)("p",null,"Returns status 200 and a TEXT link where you can download your converted (json) file from"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "uri":\n"https://converter-prod-conversionsbucket-somerandomstring.s3-us-west-2.amazonaws.com/somerandomstring.json"\n}\n')),Object(o.b)("p",null,"The input file must be a zip file.\nThat is done because shapefile is a multi file standard.\nIt is usually a set of 4 files: .dbf, .prj, .shp and .shx."),Object(o.b)("p",null,"The output file will be a GeoJSON file."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"geojson---shapefile"},"GeoJSON -> Shapefile"),Object(o.b)("p",null,"Send this along with your (Geo)JSON"),Object(o.b)(l.a,{defaultValue:"js",values:[{label:"Python",value:"py"},{label:"Bash",value:"sh"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests as req\n\nurl = 'https://a.agrigate.io/quickstart/api/converters/geojson/shapefile/'\nheaders = {\n    'Authorization': 'Bearer YOUR_TOKEN'\n}\nfiles = {'file': open('PATH/YOUR_FILE_NAME.json','rb')}\n\nr = req.post(url, headers=headers, files=files)\nprint(r.text)\n"))),Object(o.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl \\\n-F 'file=@PATH/YOUR_FILE_NAME.json' \\\n-H 'Authorization: Bearer YOUR_TOKEN' \\\n'https://a.agrigate.io/quickstart/api/converters/geojson/shapefile/'\n"))),Object(o.b)(s.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript--nodejs"}),"var request = require('request');\n\nvar headers = {\n    'Authorization': 'Bearer YOUR_TOKEN'\n};\n\nvar options = {\n    url: 'https://a.agrigate.io/quickstart/api/converters/geojson/shapefile/',\n    method: 'POST',\n    headers: headers\n};\n\nfunction callback(error, response, body) {\n    if (!error && response.statusCode == 200) {\n        console.log(body);\n    }\n}\n\nrequest(options, callback);\n")))),Object(o.b)("p",null,"Returns status 200 and a TEXT link where you can download your converted file from"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "uri":\n"https://converter-prod-conversionsbucket-somerandomstring.s3-us-west-2.amazonaws.com/somerandomstring.zip"\n}\n')),Object(o.b)("p",null,"The input file must be a .json GeoJSON file"),Object(o.b)("p",null,"The output file will be a zipped file."),Object(o.b)("hr",null))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(l,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(f,s(s({ref:t},c),{},{components:n})):r.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},96:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},97:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},98:function(e,t,n){"use strict";var a=n(0),r=n(97);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var a=n(95),r=n(103);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,l=o.forcePrependBaseUrl,s=void 0!==l&&l,i=o.absolute,c=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+u:u}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}}}]);