(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{100:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(98),o=t(96),s=t(47),l=t.n(s),c=37,p=39;n.a=function(e){var n=e.block,t=e.children,s=e.defaultValue,b=e.values,u=e.groupId,d=Object(i.a)(),m=d.tabGroupChoices,O=d.setTabGroupChoices,f=Object(a.useState)(s),j=f[0],h=f[1],g=Object(a.useState)(!1),v=g[0],N=g[1];if(null!=u){var T=m[u];null!=T&&T!==j&&b.some((function(e){return e.value===T}))&&h(T)}var y=function(e){h(e),null!=u&&O(u,e)},E=[],w=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},C=function(){N(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",w),window.addEventListener("mousedown",C)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n})},b.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===n}),style:v?{}:{outline:"none"},key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e),w(e)},onFocus:function(){return y(n)},onClick:function(){y(n),N(!1)},onPointerDown:function(){return N(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===j}))[0]))}},101:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},103:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(2),r=t(6),i=(t(0),t(94)),o=t(100),s=t(101),l=(t(99),{title:"Endpoints"}),c={unversionedId:"operations_endpoints",id:"operations_endpoints",isDocsHomePage:!1,title:"Endpoints",description:"About",source:"@site/docs/operations_endpoints.md",permalink:"/docs/docs/operations_endpoints",editUrl:"https://github.com/Leaf-Agriculture/docs/operations_endpoints.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/operations_overview"},next:{title:"Overview",permalink:"/docs/docs/converters_overview"}},p=[{value:"About",id:"about",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"<code>GET /files</code>",id:"get-files",children:[]},{value:"<code>GET files/{id}</code>",id:"get-filesid",children:[]},{value:"<code>GET /files/{id}/summary</code>",id:"get-filesidsummary",children:[]},{value:"<code>GET /files/{id}/images</code>",id:"get-filesidimages",children:[]},{value:"<code>POST /files</code>",id:"post-files",children:[]},{value:"<code>POST /files/merge</code>",id:"post-filesmerge",children:[]}]}],b={rightToc:p};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about"},"About"),Object(i.b)("p",null,"All HTTP methods should be prepended by this service's endpoint:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://a.agrigate.io/services/operations/api\n")),Object(i.b)("p",null,"This service has the following endpoints available:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"GET    /files\nGET    /files/{id}\nGET    /files/{id}/summary\nGET    /files/{id}/images\nPOST   /files\nPOST   /files/merge\nDELETE /files/{id}\n")),Object(i.b)("h2",{id:"endpoints"},"Endpoints"),Object(i.b)("p",null,"Here we list all the available endpoints from this microservice. For easily\ntesting it, we recommend to see our Postman ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"collection"),"."),Object(i.b)("h3",{id:"get-files"},Object(i.b)("inlineCode",{parentName:"h3"},"GET /files")),Object(i.b)("p",null,"Gets a paged list of files that belong to the current logged in user. It is\npossible to filter the results by passing some query parameters. They are listed\nbelow."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"leafUserId"),", only matches files from this user"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"provider"),", filter by the provider. Currently we support the following providers: ",Object(i.b)("inlineCode",{parentName:"li"},"CNHI"),", ",Object(i.b)("inlineCode",{parentName:"li"},"JohnDeere"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Trimble")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ClimateFieldView")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"status"),"You can match the step of the process by passing one of the following: ",Object(i.b)("inlineCode",{parentName:"li"},"processed"),", ",Object(i.b)("inlineCode",{parentName:"li"},"failed")," or ",Object(i.b)("inlineCode",{parentName:"li"},"processing")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"origin"),", files have differnte origins in our services. You can filter by\nits origin using one of the following: ",Object(i.b)("inlineCode",{parentName:"li"},"provider"),", ",Object(i.b)("inlineCode",{parentName:"li"},"automerged"),", ",Object(i.b)("inlineCode",{parentName:"li"},"merged"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"uploaded")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"organizationId"),", as the provider organizationId (only available for JohnDeere files)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createdTime"),", as ISO 8601 date to filter by the file's creation time"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operationStartTime"),", as ISO 8601 date to filter by the operation's start time"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operationEndTime"),", as ISO 8601 date to filter by the operation's end time")),Object(i.b)("p",null,"You can also pass some parameters used exclusively for paging through results.\nThey are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),", an integer specifying the page being fetched"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"size"),", an integer specifying the size of the page")),Object(i.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://a.agrigate.io/services/operations/api/files'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(s.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://a.agrigate.io/services/operations/api/files'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files'\n")))),Object(i.b)("p",null,"It returns a JSON object like the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": "UUID",\n    "fileName": "filename.zip",\n    "providerName": "CNHI",\n    "originalFile": "S3_URL",\n    "rawGeojson": "S3_URL",\n    "status": "failed",\n    "leafUserId": "UUID",\n    "apiOwnerUsername": "CLIENT",\n    "fileType": "PRESCRIPTION",\n    "createdTime": "2020-04-16T21:14:03.518",\n    "sizeInBytes": 123456789\n  },\n  ...\n]\n')),Object(i.b)("h3",{id:"get-filesid"},Object(i.b)("inlineCode",{parentName:"h3"},"GET files/{id}")),Object(i.b)("p",null,"Gets a single file by its id."),Object(i.b)("p",null,"Returns a single JSON object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "apiOwnerUsername": "string",\n  "createdTime": "2020-04-29T20:13:42.811Z",\n  "operationEndTime": "2020-04-29T20:13:42.811Z",\n  "operationStartTime": "2020-04-29T23:13:42.811Z",\n  "fileFormat": "string",\n  "fileName": "string",\n  "fileType": "string",\n  "id": "UUID",\n  "leafUserId": "UUID",\n  "originalFile": "string",\n  "zippedPNGs": "string",\n  "provider": "string",\n  "rawGeojson": "string",\n  "sizeInBytes": 0,\n  "status": "string",\n  "stdGeojson": "string",\n  "origin": "string"\n}\n')),Object(i.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://a.agrigate.io/services/operations/api/files/{id}'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(s.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://a.agrigate.io/services/operations/api/files/{id}'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files/{id}'\n")))),Object(i.b)("h3",{id:"get-filesidsummary"},Object(i.b)("inlineCode",{parentName:"h3"},"GET /files/{id}/summary")),Object(i.b)("p",null,"Gets the summary, if available, for the file id."),Object(i.b)("p",null,"Returns a single ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7946"}),"GeoJSON")," feature containing the convex hull of all operation\ndata and some statistics calculated from it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'{\n  "type": "Feature",\n  "properties": {\n    # these properties and more\n    "totalDistance": 19194.943013290438,\n    "operationType": "harvested",\n    "totalArea": 131638.75702051684\n  },\n  "geometry": {\n    "type": "MultiPolygon",\n    "coordinates": [...]\n  }\n}\n')),Object(i.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://a.agrigate.io/services/operations/api/files/{id}/summary'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(s.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://a.agrigate.io/services/operations/api/files/{id}/summary'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files/{id}/summary'\n")))),Object(i.b)("h3",{id:"get-filesidimages"},Object(i.b)("inlineCode",{parentName:"h3"},"GET /files/{id}/images")),Object(i.b)("p",null,"Gets a list of PNG images generated from the operation's file properties."),Object(i.b)("p",null,"Returns a JSON list of the following format:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "property": "elevation",\n    "ramp": {\n      "0%":   [200,   0, 0],\n      "35%":  [255,  40, 0],\n      "45%":  [255, 150, 0],\n      "55%":  [255, 240, 0],\n      "65%":  [  0, 230, 0],\n      "75%":  [  0, 190, 0],\n      "100%": [  0, 130, 0],\n      "nv":   [  0,   0, 0, 0]\n    },\n    "url": "string"\n  },\n  ...\n]\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"property")," refers to the property extracted from files' data to generate the\nimage. In the example above, the image would represent the elevation."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ramp")," is the color ramp used to generate the image. The percentages\ncorrespond to the minimun (0%) and maximum (100%) values in the image. The\nlisted values corresponde to RGB values used. The ",Object(i.b)("inlineCode",{parentName:"p"},"nv")," refers to ",Object(i.b)("inlineCode",{parentName:"p"},"no value"),". It\nis used internally to make the image transparent on places without data.\nCurrently, this ramp is the same of all images processed."),Object(i.b)("p",null,"We also generate an auxiliary ",Object(i.b)("inlineCode",{parentName:"p"},"xml")," with geographic information to handle this\nimage on GIS environments. You just need to append the ",Object(i.b)("inlineCode",{parentName:"p"},'".aux.xml"')," string to the png url."),Object(i.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://a.agrigate.io/services/operations/api/files/{id}/images'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(s.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://a.agrigate.io/services/operations/api/files/{id}/images'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://a.agrigate.io/services/operations/api/files/{id}/images'\n")))),Object(i.b)("h3",{id:"post-files"},Object(i.b)("inlineCode",{parentName:"h3"},"POST /files")),Object(i.b)("p",null,"Posts/creates a new file in our server."),Object(i.b)("p",null,"This endpoint receives three query parameters. A ",Object(i.b)("inlineCode",{parentName:"p"},"leafUserId"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fileFormat")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"provider"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"fileFormat")," must be one of the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ADAPTADM\nCN1\nDATCLIMATE\nGEOJSON\nISO11783\nSHAPEFILE\nTRIMBLE\n")),Object(i.b)("p",null,"Provider must be one of the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"ClimateFieldView\nCNHI\nJohnDeere\nLeaf\nTrimble\n")),Object(i.b)("p",null,"Returns a single JSON object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "Your file is being processed and will be available in a few minutes",\n  "id": "id"\n}\n')),Object(i.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://a.agrigate.io/services/operations/api/files'\n\nconst headers = {\n  'Authorization': `Bearer ${TOKEN}`\n  'Content-Type': 'multipart/form-data'\n}\n\nconst params = {\n  fileFormat: 'SHAPEFILE',\n  provider: 'JohnDeere',\n  leafUserId: 'id'\n}\n\nconst form = new FormData()\nform.append('file', 'shapefile.zip')\n\naxios.post(endpoint, form, { headers, params })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(s.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://a.agrigate.io/services/operations/api/files'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nfiles = {'file': open('shapefile.zip')}\nparams = {\n  'fileFormat': 'SHAPEFILE',\n  'provider': 'JohnDeere',\n  'leafUserId': 'id'\n}\n\nresponse = requests.post(endpoint, headers=headers, files=files, params=params)\nprint(response.json())\n"))),Object(i.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X POST \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    -F 'file=shapefile.zip' \\\n    'https://a.agrigate.io/services/operations/api/files?' \\\n    'fileFormat=SHAPEFILE&provider=JohnDeere&leafUserId=id'\n")))),Object(i.b)("h3",{id:"post-filesmerge"},Object(i.b)("inlineCode",{parentName:"h3"},"POST /files/merge")),Object(i.b)("p",null,"Posts a merge operation to our server."),Object(i.b)("p",null,"A merge operation is performed asynchronously. This call will return immediately\nwith the newly created file entry, but at this point the file is not already\nprocessed and available. You will need to make new ",Object(i.b)("inlineCode",{parentName:"p"},"GET /files")," request for the\nnew id and check the status. A status value of ",Object(i.b)("inlineCode",{parentName:"p"},"CONVERTED")," means the file is\ndone merging."),Object(i.b)("p",null,"A merge process has some limitations however. The files passed must belong to\nthe same user, be of the same operation type and have the status as ",Object(i.b)("inlineCode",{parentName:"p"},"CONVERTED"),".\nIf any of those filters fail, the endpoint will result in HTTP 400 error."),Object(i.b)("p",null,"It receives a single JSON object with the ",Object(i.b)("inlineCode",{parentName:"p"},"ids")," entry. Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "ids": [ "id1", "id2", "so on" ]\n}\n')),Object(i.b)("p",null,"Returns a single JSON object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "id",\n  "status": "SENT_TO_MERGE"\n}\n')),Object(i.b)(o.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://a.agrigate.io/services/operations/api/files/merge'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst data = { ids: [ 'id1', 'id2' ] }\n\naxios.post(endpoint, { headers, data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(s.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://a.agrigate.io/services/operations/api/files/merge'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\ndata = {'ids': ['id1', 'id2']}\n\nresponse = requests.post(endpoint, headers=headers, json=data)\nprint(response.json())\n"))),Object(i.b)(s.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -X POST \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    -d '{ \"ids\": [ \"id1\", \"id2\" ] }'\n    'https://a.agrigate.io/services/operations/api/files/merge'\n")))))}u.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return t?r.a.createElement(m,s(s({ref:n},c),{},{components:t})):r.a.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95:function(e,n,t){"use strict";var a=t(0),r=t(20);n.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},96:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},97:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},98:function(e,n,t){"use strict";var a=t(0),r=t(97);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},99:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var a=t(95),r=t(103);function i(){var e=Object(a.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(s)return n+t;var p=!t.startsWith(n)?n+t.replace(/^\//,""):t;return c?e+p:p}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}}}]);