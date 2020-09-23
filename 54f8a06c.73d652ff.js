(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},102:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return r}))},68:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),i=(t(0),t(93)),s=t(99),l=t(100),o=(t(96),{title:"Endpoints"}),d={unversionedId:"field_boundaries_endpoints",id:"field_boundaries_endpoints",isDocsHomePage:!1,title:"Endpoints",description:"About",source:"@site/docs/field_boundaries_endpoints.md",permalink:"/docs/docs/field_boundaries_endpoints",editUrl:"https://github.com/Leaf-Agriculture/docs/tree/master/docs/field_boundaries_endpoints.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/field_boundaries_overview"},next:{title:"Overview",permalink:"/docs/docs/operations_overview"}},c=[{value:"About",id:"about",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"<code>GET /fields</code>",id:"get-fields",children:[]},{value:"<code>GET /users/{leafUserId}/fields/{id}</code>",id:"get-usersleafuseridfieldsid",children:[]},{value:"<code>DELETE /users/{leafUserId}/fields/{id}</code>",id:"delete-usersleafuseridfieldsid",children:[]},{value:"<code>POST /users/{leafUserId}/fields</code>",id:"post-usersleafuseridfields",children:[]},{value:"<code>POST /users/{leafUserId}/fields/intersect</code>",id:"post-usersleafuseridfieldsintersect",children:[]},{value:"<code>POST /fields/query/intersects</code>",id:"post-fieldsqueryintersects",children:[]},{value:"<code>GET /users/{leafUserId}/fields/{fieldId}/operations</code>",id:"get-usersleafuseridfieldsfieldidoperations",children:[]},{value:"<code>GET /users/{leafUserId}/fields/{fieldId}/operations/{id}</code>",id:"get-usersleafuseridfieldsfieldidoperationsid",children:[]}]}],p={rightToc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about"},"About"),Object(i.b)("p",null,"All HTTP methods should be prepended by this service's endpoint:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://api.withleaf.io/services/fields/api\n")),Object(i.b)("p",null,"See below the REST resources and their endpoints available in this service."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Common endpoints:\nGET    /fields\nGET    /users/{leafUserId}/fields/{id}\nPOST   /users/{leafUserId}/fields\nDELETE /users/{leafUserId}/fields/{id}\n\nQuery operations by field:\nGET /users/{leafUserId}/fields/{fieldId}/operations\nGET /users/{leafUserId}/fields/{fieldId}/operations/{id}\n\nGeometric queries:\nPOST   /fields/query/intersects\nPOST   /users/{leafUserId}/fields/intersect\n")),Object(i.b)("h2",{id:"endpoints"},"Endpoints"),Object(i.b)("p",null,"Here we list all the available endpoints from Fields API. For easily\ntesting it, we recommend using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"Leaf's Postman collection"),"."),Object(i.b)("h3",{id:"get-fields"},Object(i.b)("inlineCode",{parentName:"h3"},"GET /fields")),Object(i.b)("p",null,"Gets a paged list of Fields. It is possible to filter the results by passing\nsome query parameters."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"leafUserId"),", only matches files from this user (string)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),", an integer specifying the page being fetched"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"size"),", an integer specifying the size of the page")),Object(i.b)("p",null,"These last two parameters are used exclusively for paging through results."),Object(i.b)("h4",{id:"response"},"Response"),Object(i.b)("p",null,"A JSON array containing Fields."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"},{label:"JSON Response",value:"res"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/fields'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/fields'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/fields'\n"))),Object(i.b)(l.a,{value:"res",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": "3031c20d-4331-4a24-bac0-c27087fc901f",\n    "name": "str",\n    "leafUserId": "5db46916-54a0-4b38-a9b1-d8e00673db63",\n    "geometry": {\n      "type": "MultiPolygon",\n      "coordinates": [\n        [\n          [\n            [\n                -48.62195051987687,\n                -27.35030179570155\n            ],\n            [\n                -48.62099028904954,\n                -27.351783623790567\n            ],\n            [\n                -48.61883379300156,\n                -27.349906320545184\n            ],\n            [\n                -48.619777930574806,\n                -27.34842446734229\n            ],\n            [\n                -48.62195051987687,\n                -27.35030179570155\n            ]\n          ]\n        ]\n      ]\n    },\n    "providerName": "JohnDeere",\n    "providerId": 2,\n    "providerFieldId": "48926e0d-9bb7-4618-9214-3c2bf50d9ac2",\n    "providerBoundaryId": "5bfab976-df1b-44c7-ab83-ee5befdd45af",\n    "organizationId": "469039",\n    "type": "ORIGINAL",\n    "farmId": 1530952\n  }\n]\n')))),Object(i.b)("h3",{id:"get-usersleafuseridfieldsid"},Object(i.b)("inlineCode",{parentName:"h3"},"GET /users/{leafUserId}/fields/{id}")),Object(i.b)("p",null,"Gets a single Field by its id."),Object(i.b)("h4",{id:"response-1"},"Response"),Object(i.b)("p",null,"A single Field as a JSON object."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\n")))),Object(i.b)("h3",{id:"delete-usersleafuseridfieldsid"},Object(i.b)("inlineCode",{parentName:"h3"},"DELETE /users/{leafUserId}/fields/{id}")),Object(i.b)("p",null,"Deletes the field with the given id."),Object(i.b)("h3",{id:"post-usersleafuseridfields"},Object(i.b)("inlineCode",{parentName:"h3"},"POST /users/{leafUserId}/fields")),Object(i.b)("p",null,"Creates a Field for the user ",Object(i.b)("inlineCode",{parentName:"p"},"leafUserId"),". A resquest body must be provided\ncontaining the an entry ",Object(i.b)("inlineCode",{parentName:"p"},'"geometry"'),", which represents the boundaries of the\nField being created as a GeoJSON geometry (it must be a ",Object(i.b)("inlineCode",{parentName:"p"},'"MultiPolygon"'),").\nThe entry ",Object(i.b)("inlineCode",{parentName:"p"},'"id"')," is optional. If no id is provided, an UUID will be generated.\nThe Field id CAN NOT be updated."),Object(i.b)("p",null,"Request body example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "geometry": {\n    "type": "MultiPolygon",\n    "coordinates": [\n      [\n        [\n          [-93.48821327980518, 41.77137549568163],\n          [-93.48817333680519, 41.77143534378164],\n          [-93.48821327390516, 41.76068857977987],\n          [-93.48821327980518, 41.77137549568163]\n        ]\n      ]\n    ]\n  }\n}\n')),Object(i.b)("h4",{id:"response-2"},"Response"),Object(i.b)("p",null,"A Field as a JSON object."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst data = {\n  geometry: {\n    type: \"MultiPolygon\",\n    coordinates: [...]\n  }\n}\n\naxios.post(endpoint, { headers, data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{id}'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\ndata = {\n  'geometry': {\n    'type': \"MultiPolygon\",\n    'coordinates': [...]\n  }\n}\n\nresponse = requests.post(endpoint, headers=headers, json=data)\nprint(response.json())\n"))),Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n    -H \'Authorization: Bearer YOUR_TOKEN\' \\\n    -d \'{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }\'\n    \'https://api.withleaf.io/services/fields/api/fields/users/{leafUserId}/{id}\'\n')))),Object(i.b)("h3",{id:"post-usersleafuseridfieldsintersect"},Object(i.b)("inlineCode",{parentName:"h3"},"POST /users/{leafUserId}/fields/intersect")),Object(i.b)("p",null,"Gets a GeoJSON MultiPolygon corresponding to the intersection of the Fields\nspecified by the given id's. Such Field id's goes in a list, in the request\nbody."),Object(i.b)("h4",{id:"response-3"},"Response"),Object(i.b)("p",null,"A JSON in the format of a GeoJSON geometry."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"},{label:"JSON sample response",value:"json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var axios = require('axios');\nvar data = JSON.stringify([\"id1\",\"id2\"]);\n\nvar config = {\n  method: 'post',\n  url: 'https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect',\n  headers: {\n    'Authorization': 'Bearer YOUR_LEAF_TOKEN',\n    'Content-Type': 'application/json'\n  },\n  data : data\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'import requests\n\nurl = "https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect"\n\npayload = "[\\"id1\\", \\"id2\\"]"\nheaders = {\n  \'Authorization\': \'Bearer YOUR_LEAF_TOKEN\',\n  \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.request("POST", url, headers=headers, data = payload)\n'))),Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl --location --request \\\nPOST 'https://api.withleaf.io/services/fields/api/users/{id}/fields/intersect' \\\n--header 'Authorization: Bearer YOUR_LEAF_TOKEN' \\\n--header 'Content-Type: application/json' \\\n--data-raw '[\"id1\", \"id2\"]'\n"))),Object(i.b)(l.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "type": "MultiPolygon",\n    "coordinates": [\n        [\n            [\n                [-89.84388470649719,39.71943436012731],\n                [-89.84392762184143,39.72439389620628],\n                [-89.83936786651611,39.725392361998416],\n                [-89.83928203582764,39.71951688444436],\n                [-89.84388470649719,39.71943436012731]\n            ]\n        ]\n    ]\n}\n')))),Object(i.b)("h3",{id:"post-fieldsqueryintersects"},Object(i.b)("inlineCode",{parentName:"h3"},"POST /fields/query/intersects")),Object(i.b)("p",null,"Gets a list of fields that intersect with the GeoJSON MultiPolygon sent in\nthe request body."),Object(i.b)("h4",{id:"response-4"},"Response"),Object(i.b)("p",null,"A JSON list of Fields."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"},{label:"JSON sample response",value:"json"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/fields/query/intersects'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\nconst data = {\n  geometry: {\n    type: \"MultiPolygon\",\n    coordinates: [...]\n  }\n}\n\naxios.post(endpoint, { headers, data })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/query/intersects'\nheaders = {'Authorization': 'Bearer YOUR_LEAF_TOKEN'}\n\ndata = {\n  'geometry': {\n    'type': \"MultiPolygon\",\n    'coordinates': [...]\n  }\n}\n\nresponse = requests.post(endpoint, headers=headers, json=data)\nprint(response.json())\n"))),Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -X POST \\\n    -H \'Authorization: Bearer YOUR_TOKEN\' \\\n    -d \'{ "geometry": { "type: "MultiPolygon", "geometry": [...] } }\'\n    \'https://api.withleaf.io/services/fields/api/fields/query/intersects\'\n'))),Object(i.b)(l.a,{value:"json",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'[\n  {\n    "id": "id",\n    "leafUserId": "uuid",\n    "geometry": {\n      "type": "MultiPolygon",\n      "coordinates": [\n        [\n          [\n            [-89.84388470649719,39.71943436012731],\n            [-89.84392762184143,39.72439389620628],\n            [-89.83936786651611,39.725392361998416],\n            [-89.83928203582764,39.71951688444436],\n            [-89.84388470649719,39.71943436012731]\n          ]\n        ]\n      ]\n    },\n    "type": "MERGED",\n    "sources": []\n  }\n]\n')))),Object(i.b)("h3",{id:"get-usersleafuseridfieldsfieldidoperations"},Object(i.b)("inlineCode",{parentName:"h3"},"GET /users/{leafUserId}/fields/{fieldId}/operations")),Object(i.b)("p",null,"Gets a paged list of all operation files of the Field specified by the URL\nparameter ",Object(i.b)("inlineCode",{parentName:"p"},"fieldId"),". It is possible to filter the results by passing some query\nparameters. They are listed below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"operationtype"),", one of the following values: ",Object(i.b)("inlineCode",{parentName:"li"},"harvested"),", ",Object(i.b)("inlineCode",{parentName:"li"},"planted"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"applied"),", ",Object(i.b)("inlineCode",{parentName:"li"},"other")," (string)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"provider"),", filter by the provider. Currently we support the following\nproviders: ",Object(i.b)("inlineCode",{parentName:"li"},"CNHI"),", ",Object(i.b)("inlineCode",{parentName:"li"},"JohnDeere"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Trimble")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ClimateFieldView")," (string)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"crop"),", provider's identifier crop id. Requires ",Object(i.b)("inlineCode",{parentName:"li"},"operationProvider")," (string)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"variety")," provider's identifier variety name/code. Requires\n",Object(i.b)("inlineCode",{parentName:"li"},"operationProvider"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startTime"),", as ISO 8601 date to filter by the operation's start time."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"endTime"),", as ISO 8601 date to filter by the operation's end time.")),Object(i.b)("p",null,"You can also pass some parameters used exclusively for paging through results.\nThey are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),", an integer specifying the page being fetched"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"size"),", an integer specifying the size of the page")),Object(i.b)("h4",{id:"response-5"},"Response"),Object(i.b)("p",null,"A JSON array of Files."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"cURL",value:"sh"},{label:"Python",value:"py"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations'\n")))),Object(i.b)("h3",{id:"get-usersleafuseridfieldsfieldidoperationsid"},Object(i.b)("inlineCode",{parentName:"h3"},"GET /users/{leafUserId}/fields/{fieldId}/operations/{id}")),Object(i.b)("p",null,"Gets a single Operation File of a field by its id."),Object(i.b)("h4",{id:"response-6"},"Response"),Object(i.b)("p",null,"A single Operation File."),Object(i.b)(s.a,{defaultValue:"sh",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"cURL",value:"sh"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(i.b)(l.a,{value:"py",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(i.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://api.withleaf.io/services/fields/api/users/{leafUserId}/fields/{fieldId}/operations/{id}'\n")))))}b.isMDXComponent=!0},93:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),c=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,f=p["".concat(s,".").concat(u)]||p[u]||b[u]||i;return t?r.a.createElement(f,l(l({ref:n},d),{},{components:t})):r.a.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=t[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94:function(e,n,t){"use strict";var a=t(0),r=t(20);n.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},95:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},96:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var a=t(94),r=t(102);function i(){var e=Object(a.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var i=void 0===a?{}:a,s=i.forcePrependBaseUrl,l=void 0!==s&&s,o=i.absolute,d=void 0!==o&&o;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(l)return n+t;var c=!t.startsWith(n)?n+t.replace(/^\//,""):t;return d?e+c:c}(i,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},97:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},98:function(e,n,t){"use strict";var a=t(0),r=t(97);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},99:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(98),s=t(95),l=t(48),o=t.n(l),d=37,c=39;n.a=function(e){var n=e.block,t=e.children,l=e.defaultValue,p=e.values,b=e.groupId,u=Object(i.a)(),f=u.tabGroupChoices,O=u.setTabGroupChoices,h=Object(a.useState)(l),j=h[0],m=h[1],y=Object(a.useState)(!1),v=y[0],g=y[1];if(null!=b){var N=f[b];null!=N&&N!==j&&p.some((function(e){return e.value===N}))&&m(N)}var T=function(e){m(e),null!=b&&O(b,e)},E=[],I=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},w=function(){g(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",I),window.addEventListener("mousedown",w)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===n}),style:v?{}:{outline:"none"},key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case c:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case d:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e),I(e)},onFocus:function(){return T(n)},onClick:function(){T(n),g(!1)},onPointerDown:function(){return g(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===j}))[0]))}}}]);