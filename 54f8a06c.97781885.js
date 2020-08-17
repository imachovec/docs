(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(98),s=n(96),l=n(47),o=n.n(l),d=37,c=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,b=e.values,p=e.groupId,u=Object(a.a)(),f=u.tabGroupChoices,O=u.setTabGroupChoices,m=Object(i.useState)(l),j=m[0],h=m[1],v=Object(i.useState)(!1),g=v[0],y=v[1];if(null!=p){var N=f[p];null!=N&&N!==j&&b.some((function(e){return e.value===N}))&&h(N)}var T=function(e){h(e),null!=p&&O(p,e)},C=[],w=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},I=function(){y(!1)};return Object(i.useEffect)((function(){window.addEventListener("keydown",w),window.addEventListener("mousedown",I)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case d:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),w(e)},onFocus:function(){return T(t)},onClick:function(){T(t),y(!1)},onPointerDown:function(){return y(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},101:function(e,t,n){"use strict";var i=n(0),r=n.n(i);t.a=function(e){return r.a.createElement("div",null,e.children)}},103:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(2),r=n(6),a=(n(0),n(94)),s=n(100),l=n(101),o=(n(99),{title:"Endpoints"}),d={unversionedId:"field_boundaries_endpoints",id:"field_boundaries_endpoints",isDocsHomePage:!1,title:"Endpoints",description:"About",source:"@site/docs/field_boundaries_endpoints.md",permalink:"/docs/docs/field_boundaries_endpoints",editUrl:"https://github.com/Leaf-Agriculture/docs/field_boundaries_endpoints.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/docs/field_boundaries_overview"},next:{title:"Overview",permalink:"/docs/docs/operations_overview"}},c=[{value:"About",id:"about",children:[]},{value:"Endpoints",id:"endpoints",children:[{value:"<code>GET /fields</code>",id:"get-fields",children:[]},{value:"<code>GET fields/{id}</code>",id:"get-fieldsid",children:[]},{value:"<code>GET /api/fields/between</code>",id:"get-apifieldsbetween",children:[]},{value:"<code>GET /api/fields/before</code>",id:"get-apifieldsbefore",children:[]},{value:"<code>GET /api/fields/after</code>",id:"get-apifieldsafter",children:[]},{value:"<code>DELETE /api/users/{leafUserId}/fields/{id}</code>",id:"delete-apiusersleafuseridfieldsid",children:[]},{value:"<code>POST /api/users/{leafUserId}/fields</code>",id:"post-apiusersleafuseridfields",children:[]},{value:"<code>POST /api/users/{leafUserId}/fields/intersect</code>",id:"post-apiusersleafuseridfieldsintersect",children:[]},{value:"<code>POST /api/fields/query/intersects</code>",id:"post-apifieldsqueryintersects",children:[]},{value:"<code>POST /api/users/{leafUserId}/fields/same</code>",id:"post-apiusersleafuseridfieldssame",children:[]},{value:"<code>POST /api/users/{leafUserId}/fields/disjoint</code>",id:"post-apiusersleafuseridfieldsdisjoint",children:[]},{value:"<code>POST /api/users/{leafUserId}/fields/integration</code>",id:"post-apiusersleafuseridfieldsintegration",children:[]},{value:"<code>GET /users/{userId}/fields/{fieldId}/operations</code>",id:"get-usersuseridfieldsfieldidoperations",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"about"},"About"),Object(a.b)("p",null,"All HTTP methods should be prepended by this service's endpoint:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"https://a.agrigate.io/services/fields/api\n")),Object(a.b)("p",null,"This service has the following endpoints available:"),Object(a.b)("p",null,"Field Resource"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"GET    /fields\nGET    /fields/after\nGET    /fields/before\nGET    /fields/between\nGET    /users/{leafUserId}/fields/{id}\nPOST   /users/{leafUserId}/fields/intersects\nPOST   /users/{leafUserId}/fields/disjoint\nPOST   /users/{leafUserId}/fields/integration\nPOST   /users/{leafUserId}/fields/intersect\nPOST   /users/{leafUserId}/fields/same\nPOST   /users/{leafUserId}/fields/{id}/integration\nDELETE /users/{leafUserId}/fields/{id}\n")),Object(a.b)("p",null,"Operation Resource"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"GET    /users/{leafUserId}/fields/{fieldId}/operations\nGET    /users/{leafUserId}/fields/{fieldId}/operations/{id}\n")),Object(a.b)("p",null,"Farm Resource"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"GET    /farms\nGET    /farms/{id}\nPOST   /farms\nPUT    /farms\nDELETE /farms\n")),Object(a.b)("p",null,"Grower Resource"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"GET    /growers\nGET    /growers/{id}\nPOST   /growers\nPUT    /growers\nDELETE /growers\n")),Object(a.b)("h2",{id:"endpoints"},"Endpoints"),Object(a.b)("p",null,"Here we list all the available endpoints from this microservice. For easily\ntesting it, we recommend to see our Postman ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"collection"),"."),Object(a.b)("h3",{id:"get-fields"},Object(a.b)("inlineCode",{parentName:"h3"},"GET /fields")),Object(a.b)("p",null,"Gets a paged list of Fields. It is possible to filter the results by passing some query parameters.\nThey are listed below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"leafUserId"),", only matches files from this user (string)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operationtype"),", one of the following values: ",Object(a.b)("inlineCode",{parentName:"li"},"harvested"),", ",Object(a.b)("inlineCode",{parentName:"li"},"planted"),", ",Object(a.b)("inlineCode",{parentName:"li"},"applied"),", ",Object(a.b)("inlineCode",{parentName:"li"},"other")," (string)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operationProvider"),", filter by the provider. Currently we support the\nfollowing providers: ",Object(a.b)("inlineCode",{parentName:"li"},"CNHI"),", ",Object(a.b)("inlineCode",{parentName:"li"},"JohnDeere"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Trimble")," and ",Object(a.b)("inlineCode",{parentName:"li"},"ClimateFieldView")," (string)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operationCrop"),", provider's identifier crop id. Requires ",Object(a.b)("inlineCode",{parentName:"li"},"operationProvider")," (string)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operationVariety")," provider's identifier variety name/code. Requires ",Object(a.b)("inlineCode",{parentName:"li"},"operationProvider"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operationStartTime"),", as ISO 8601 date to filter by the operation's start time."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operationEndTime"),", as ISO 8601 date to filter by the operation's end time.")),Object(a.b)("p",null,"If some operation parameter is passed, then the response will include the entry ",Object(a.b)("inlineCode",{parentName:"p"},'"files"'),", otherwise\nsuch entry won't be present."),Object(a.b)("p",null,"You can also pass some parameters used exclusively for paging through results.\nThey are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"page"),", an integer specifying the page being fetched"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"size"),", an integer specifying the size of the page")),Object(a.b)("p",null,"It returns a JSON object like the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "id": "UUID",\n    "providerName": "JohnDeere",\n    "providerId": 2,\n    "providerFieldId": "fbf5c2c6-3e1a-4b0b-9dd9-e5f990f8ea44",\n    "providerBoundaryId": "46d8fd29-18b5-482c-85d9-06bf7aec6ed7",\n    "type": "ORIGINAL",\n    "leafUserId": "8a80ade8-711d-f5c7-0171-210733570007",\n    "organizationId": "462114",\n    "mergedFieldId": ["UUID"],\n    "files": ["8c834678-72b2-4194-acd1-5ea1eae07a77"]\n    "geometry": {\n      "type": "MultiPolygon",\n      "coordinates": [\n        [\n          [\n            [\n              -93.48821327980518,\n              41.77137549568163\n            ],\n            [\n              -93.48817333680519,\n              41.77143534378164\n            ],\n            [\n              -93.48821327390516,\n              41.7606885797798\n            ],\n            [\n              -93.48821327980518,\n              41.77137549568163\n            ]\n          ]\n        ]\n      ]\n    },\n  }\n    ...\n]\n')),Object(a.b)(s.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://a.agrigate.io/services/fields/api/fields'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(a.b)(l.a,{value:"py",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://a.agrigate.io/services/fields/api/fields'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(a.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://a.agrigate.io/services/fields/api/fields'\n")))),Object(a.b)("h3",{id:"get-fieldsid"},Object(a.b)("inlineCode",{parentName:"h3"},"GET fields/{id}")),Object(a.b)("p",null,"Gets a single Field by its id."),Object(a.b)("p",null,"Returns a single JSON object:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "UUID",\n  "geometry": {\n    "type": "MultiPolygon",\n    "coordinates": [...]\n  },\n  "providerName": "JohnDeere",\n  "providerId": 2,\n  "providerFieldId": "fbf5c2c6-3e1a-4b0b-9dd9-e5f990f8ea44",\n  "providerBoundaryId": "46d8fd29-18b5-482c-85d9-06bf7aec6ed7",\n  "type": "ORIGINAL",\n  "leafUserId": "8a80ade8-711d-f5c7-0171-210733570007",\n  "organizationId": "462114",\n  }\n}\n')),Object(a.b)(s.a,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Bash",value:"sh"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"js",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const axios = require('axios')\nconst TOKEN = 'YOUR_TOKEN'\n\nconst endpoint ='https://a.agrigate.io/services/fields/api/fields/{id}'\nconst headers = { 'Authorization': `Bearer ${TOKEN}` }\n\naxios.get(endpoint, { headers })\n    .then(res => console.log(res.data))\n    .catch(console.error)\n"))),Object(a.b)(l.a,{value:"py",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-py"}),"import requests\n\nTOKEN = 'YOUR_TOKEN'\n\nendpoint = 'https://a.agrigate.io/services/fields/api/fields/{id}'\nheaders = {'Authorization': f'Bearer {TOKEN}'}\n\nresponse = requests.get(endpoint, headers=headers)\nprint(response.json())\n"))),Object(a.b)(l.a,{value:"sh",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"curl -X GET \\\n    -H 'Authorization: Bearer YOUR_TOKEN' \\\n    'https://a.agrigate.io/services/fields/api/fields/{id}'\n")))),Object(a.b)("h3",{id:"get-apifieldsbetween"},Object(a.b)("inlineCode",{parentName:"h3"},"GET /api/fields/between")),Object(a.b)("p",null,"Gets a list of all the fields created between the instants given with the\nquery parameters ",Object(a.b)("inlineCode",{parentName:"p"},"start")," and ",Object(a.b)("inlineCode",{parentName:"p"},"end"),". Both in ISO date-time format. They\nrespectively must be in the past and in the past or present."),Object(a.b)("h3",{id:"get-apifieldsbefore"},Object(a.b)("inlineCode",{parentName:"h3"},"GET /api/fields/before")),Object(a.b)("p",null,"Gets a list of all the fields created before the instant given with the\nquery parameter ",Object(a.b)("inlineCode",{parentName:"p"},"instant")," (ISO date-time format).  It must be a time in the\npast."),Object(a.b)("h3",{id:"get-apifieldsafter"},Object(a.b)("inlineCode",{parentName:"h3"},"GET /api/fields/after")),Object(a.b)("p",null,"Gets a list of all the fields created after the instant given with the query\nparameter ",Object(a.b)("inlineCode",{parentName:"p"},"instant")," (ISO date-time format).  It must be a time in the past."),Object(a.b)("h3",{id:"delete-apiusersleafuseridfieldsid"},Object(a.b)("inlineCode",{parentName:"h3"},"DELETE /api/users/{leafUserId}/fields/{id}")),Object(a.b)("p",null,"Deletes the field with the given id."),Object(a.b)("h3",{id:"post-apiusersleafuseridfields"},Object(a.b)("inlineCode",{parentName:"h3"},"POST /api/users/{leafUserId}/fields")),Object(a.b)("p",null,"Creates a field. The ",Object(a.b)("inlineCode",{parentName:"p"},"id")," is optional. ",Object(a.b)("inlineCode",{parentName:"p"},"geometry")," and ",Object(a.b)("inlineCode",{parentName:"p"},"leafUserId")," are\nmandatory. If no ",Object(a.b)("inlineCode",{parentName:"p"},"id")," is provided, then an UUID will be generated. The\nField id CAN NOT be updated."),Object(a.b)("h3",{id:"post-apiusersleafuseridfieldsintersect"},Object(a.b)("inlineCode",{parentName:"h3"},"POST /api/users/{leafUserId}/fields/intersect")),Object(a.b)("p",null,"Gets a GeoJSON MultiPolygon corresponding to the intersection of the fields\nspecified by the given id's.  Such field id's goes in a list, in the request\nbody."),Object(a.b)("h3",{id:"post-apifieldsqueryintersects"},Object(a.b)("inlineCode",{parentName:"h3"},"POST /api/fields/query/intersects")),Object(a.b)("p",null,"Gets a list of fields that intersects with the GeoJSON MultiPolygon sent in\nthe request body."),Object(a.b)("h3",{id:"post-apiusersleafuseridfieldssame"},Object(a.b)("inlineCode",{parentName:"h3"},"POST /api/users/{leafUserId}/fields/same")),Object(a.b)("p",null,"Gets a boolean value answering if the fields specified by a list of field\nid's specified in the request body have the same values for their vertices, in\nexactly the same order."),Object(a.b)("h3",{id:"post-apiusersleafuseridfieldsdisjoint"},Object(a.b)("inlineCode",{parentName:"h3"},"POST /api/users/{leafUserId}/fields/disjoint")),Object(a.b)("p",null,"Gets a boolean value answering if the fields specified by a list of field\nid's in the request body are disjoint."),Object(a.b)("h3",{id:"post-apiusersleafuseridfieldsintegration"},Object(a.b)("inlineCode",{parentName:"h3"},"POST /api/users/{leafUserId}/fields/integration")),Object(a.b)("p",null,"Uploads fields to providers. Currently we only support Climate FieldView.\nHowever new integrations will be added soon."),Object(a.b)("p",null,"Request body format:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fields": ["UUID"],\n  "providers": ["ClimateFieldView"]\n}\n')),Object(a.b)("p",null,"Response format:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "UUID": {\n    "ClimateFieldView": {\n      "id": "0cb726c8-aff0-415a-9de3-a04b627008dd"\n    },\n  },\n}\n')),Object(a.b)("h3",{id:"get-usersuseridfieldsfieldidoperations"},Object(a.b)("inlineCode",{parentName:"h3"},"GET /users/{userId}/fields/{fieldId}/operations")),Object(a.b)("p",null,"Gets a paged list of all operation files of the field specified by the URL\nparameter ",Object(a.b)("inlineCode",{parentName:"p"},"fieldId"),". It is possible to filter the results by passing some query\nparameters.  They are listed below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"operationtype"),", one of the following values: ",Object(a.b)("inlineCode",{parentName:"li"},"harvested"),", ",Object(a.b)("inlineCode",{parentName:"li"},"planted"),", ",Object(a.b)("inlineCode",{parentName:"li"},"applied"),", ",Object(a.b)("inlineCode",{parentName:"li"},"other")," (string)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"provider"),", filter by the provider. Currently we support the following\nproviders: ",Object(a.b)("inlineCode",{parentName:"li"},"CNHI"),", ",Object(a.b)("inlineCode",{parentName:"li"},"JohnDeere"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Trimble")," and ",Object(a.b)("inlineCode",{parentName:"li"},"ClimateFieldView")," (string)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"crop"),", provider's identifier crop id. Requires ",Object(a.b)("inlineCode",{parentName:"li"},"operationProvider")," (string)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"variety")," provider's identifier variety name/code. Requires ",Object(a.b)("inlineCode",{parentName:"li"},"operationProvider"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"startTime"),", as ISO 8601 date to filter by the operation's start time."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"endTime"),", as ISO 8601 date to filter by the operation's end time.")),Object(a.b)("p",null,"You can also pass some parameters used exclusively for paging through results.\nThey are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"page"),", an integer specifying the page being fetched"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"size"),", an integer specifying the size of the page")),Object(a.b)("p",null,"It returns a JSON object like the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'[{\n  "id": "UUID",\n  "operationType": "planted",\n  "startTime": "2020-06-02T10:05:00Z",\n  "endTime": "2020-06-02T18:23:00Z",\n  "crops": ["corn"],\n  "varieties": ["corn variety"],\n  "providerFileId": "string",\n  "provider": "Trimble",\n  "leafUserId": "UUID"\n}, ...\n]\n')))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),b=c(n),u=i,f=b["".concat(s,".").concat(u)]||b[u]||p[u]||a;return n?r.a.createElement(f,l(l({ref:t},d),{},{components:n})):r.a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";var i=n(0),r=n(20);t.a=function(){var e=Object(i.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},96:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},97:function(e,t,n){"use strict";var i=n(0),r=Object(i.createContext)(void 0);t.a=r},98:function(e,t,n){"use strict";var i=n(0),r=n(97);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var i=n(95),r=n(103);function a(){var e=Object(i.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,s=a.forcePrependBaseUrl,l=void 0!==s&&s,o=a.absolute,d=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var c=!n.startsWith(t)?t+n.replace(/^\//,""):n;return d?e+c:c}(a,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}}}]);