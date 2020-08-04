(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(89)),o={title:"Operations"},l={unversionedId:"301-operations-guide",id:"301-operations-guide",isDocsHomePage:!1,title:"Operations",description:"Overview",source:"@site/docs/301-operations-guide.md",permalink:"/docs/docs/301-operations-guide",editUrl:"https://github.com/Leaf-Agriculture/docs/docs/301-operations-guide.md",sidebar:"docs",previous:{title:"Authentication",permalink:"/docs/docs/001-authentication"},next:{title:"Converters",permalink:"/docs/docs/500-converter"}},c=[{value:"Overview",id:"overview",children:[{value:"Roadmap",id:"roadmap",children:[]},{value:"John Deere",id:"john-deere",children:[]},{value:"Climate Field View",id:"climate-field-view",children:[]},{value:"Leaf User",id:"leaf-user",children:[]},{value:"Query Operations by Field",id:"query-operations-by-field",children:[]},{value:"Merge Operation Files",id:"merge-operation-files",children:[]}]}],s={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Leaf's Operation Data API returns aggregated, cleaned, and standardized data\nfrom all major machine data brands in a simple JSON response. This tutorial will\nwalk through how to create a Leaf user, securely authenticate with their chosen\nplatforms, and receive auto-updating data from all of them with a single request."),Object(r.b)("p",null,"We also provide a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"quickstart")," Postman collection so you can follow\nalong easily."),Object(r.b)("p",null,"To make calls to Leaf's API, you will need a Leaf account. If you don't have one\nyet, please create your Leaf account and get your token."),Object(r.b)("p",null,"You can integrate with many different companies, and you only have to do it once\nfor each user. To connect, you just choose the company you wish to connect to\nand follow these 3 steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Get the authentication URL of company you want to connect to"),Object(r.b)("li",{parentName:"ol"},"Get yours and your user's tokens"),Object(r.b)("li",{parentName:"ol"},"Add credentials to Leaf")),Object(r.b)("p",null,"Now you can opt to connect to more companies or Create a Leaf User and attach\nthese credentials, so that Leaf can represent your user internally and you can\nquery specifically for them and their data."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"All set!")),Object(r.b)("p",null,'Leaf automatically detects and starts processing new files. You can access in\n"Get Operation Files".'),Object(r.b)("h3",{id:"roadmap"},"Roadmap"),Object(r.b)("p",null,"Today, you can to connect to these companies:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"John Deere (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/leaf-agriculture/how-to-use-leafs-api-to-retrieve-machinery-data-from-john-deere-fb1ba331d089"}),"Medium"),")"),Object(r.b)("li",{parentName:"ul"},"Climate FieldView (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/leaf-agriculture/how-to-use-leafs-api-to-retrieve-machinery-data-from-climate-fieldview-dda921f40291"}),"Medium"),")"),Object(r.b)("li",{parentName:"ul"},"CNHi"),Object(r.b)("li",{parentName:"ul"},"Trimble")),Object(r.b)("p",null,"Coming in the third quarter of 2020:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Raven"),Object(r.b)("li",{parentName:"ul"},"AGCO")),Object(r.b)("p",null,"Coming in the fourth quarter of 2020:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"AgLeader"),Object(r.b)("li",{parentName:"ul"},"Stara")),Object(r.b)("h3",{id:"john-deere"},"John Deere"),Object(r.b)("p",null,"This section will show you how you can integrate Leaf's API with you John Deere\naccount and start using our operations service. Grab our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"quickstart"),"\nPostman collection and follow along!"),Object(r.b)("h4",{id:"1-get-john-deere-auth-url"},"1. Get John Deere auth URL"),Object(r.b)("p",null,"In Step 1 we will be generating tokens from John Deere. The goal In step 2 is we\nwill get our John Deere ",Object(r.b)("inlineCode",{parentName:"p"},"token_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"token_secret"),"."),Object(r.b)("h5",{id:"token-verifier"},"Token Verifier"),Object(r.b)("p",null,'In step 1 we will get a temporary "token verifier" from John Deere that confirms\nan user\u2019s authentication of your application to access their John Deere data and\ngenerate credentials. We get that verifier by going through their authentication\nflow (',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.oauth.com/"}),"OAuth2"),"). Before generating the authentication URL, please:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Update current value of ",Object(r.b)("inlineCode",{parentName:"li"},"jd_client_key")," to your app's client key on John Deere"),Object(r.b)("li",{parentName:"ul"},"Update current value of ",Object(r.b)("inlineCode",{parentName:"li"},"jd_client_secret")," to your app's client secret on John\nDeere"),Object(r.b)("li",{parentName:"ul"},"Update current value of ",Object(r.b)("inlineCode",{parentName:"li"},"jd_callback_url")," to your app's callback_url on John\nDeere")),Object(r.b)("p",null,"Then, to generate the authentication URL your application will send to your user\nso they can authorize access to their account files you can use the included\nstep 2 in the Postman Collection. Change ",Object(r.b)("inlineCode",{parentName:"p"},"client_key")," and ",Object(r.b)("inlineCode",{parentName:"p"},"client_ secret"),"\nvariables to yours received from John Deere when you created an app on your\ndeveloper account with them and ",Object(r.b)("inlineCode",{parentName:"p"},"redirect_uri"),' to a uri the "token verifier"\nwill be sent after the user authorizes your application. Hit ',Object(r.b)("em",{parentName:"p"},"Send"),"."),Object(r.b)("p",null,"Redirect your user to the url included in the response."),Object(r.b)("p",null,"They will authenticate and be redirected to the ",Object(r.b)("inlineCode",{parentName:"p"},"redirect_url"),"."),Object(r.b)("p",null,"Copy the entire url you were redirected to. It looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"https://leafagriculture.com.br/?oauth_token=TOKEN&oauth_verifier=CODE\n")),Object(r.b)("p",null,"Paste it in the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"jd_response_url"),"."),Object(r.b)("h4",{id:"2-get-john-deere-tokens"},"2. Get John Deere Tokens"),Object(r.b)("p",null,"After updating the ",Object(r.b)("inlineCode",{parentName:"p"},"jd_response_url")," in Postman you can submit your credentials\nand receive your tokens."),Object(r.b)("p",null,"Hit ",Object(r.b)("em",{parentName:"p"},"Send")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"token_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"token_secret_key")," will be automatically transferred to\n",Object(r.b)("inlineCode",{parentName:"p"},"jd_token_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"jd_token_secret")," environment variables and will be used in\nthe next step."),Object(r.b)("h4",{id:"3-add-john-deere-credentials"},"3. Add John Deere credentials"),Object(r.b)("p",null,"Now we can create a Developer-User pair credentials ID that will allow you to\naccess your user\u2019s John Deere data. We first add the John Deere credentials to\nLeaf API."),Object(r.b)("p",null,"Hit ",Object(r.b)("em",{parentName:"p"},"Send")),Object(r.b)("p",null,"All the info needed has already been filled automatically in Step 2."),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"id")," for the credentials you just created will be returned. This ",Object(r.b)("inlineCode",{parentName:"p"},"id")," will\nbe automatically transferred to the value of ",Object(r.b)("inlineCode",{parentName:"p"},"jd_credentials_id")," to be used in\nthe next step."),Object(r.b)("h3",{id:"climate-field-view"},"Climate Field View"),Object(r.b)("p",null,"Grab our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection"}),"quickstart")," Postman collection and follow along!"),Object(r.b)("h4",{id:"1-get-climate-field-view-auth-url"},"1. Get Climate Field View auth URL"),Object(r.b)("p",null,"We will be generating a url to redirect your user to authenticate with Climate."),Object(r.b)("p",null,"Update environment variables ",Object(r.b)("inlineCode",{parentName:"p"},"cfv_client_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"cfv_client_secret")," to your\nClimate Field View developer account credentials."),Object(r.b)("p",null,"Update environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"cfv_redirect_url")," to your application's backend"),Object(r.b)("p",null,"Redirect your user to the script's output url."),Object(r.b)("p",null,"They will authenticate and be redirected to the ",Object(r.b)("inlineCode",{parentName:"p"},"redirect_uri"),"."),Object(r.b)("p",null,"A code will be sent to that ",Object(r.b)("inlineCode",{parentName:"p"},"cfv_redirect_url"),". We will need this code Step 2."),Object(r.b)("p",null,"Copy the code value."),Object(r.b)("p",null,"note: this code expires after 1 minute."),Object(r.b)("p",null,"Paste code value to environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"cfv_code")),Object(r.b)("h4",{id:"2-get-climate-field-view-tokens"},"2. Get Climate Field View tokens"),Object(r.b)("p",null,'Hit "Send"'),Object(r.b)("p",null,"A lot of information will be returned. The important ones are ",Object(r.b)("inlineCode",{parentName:"p"},"access_token"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"refresh_token"),". These will be automatically transferred to\n",Object(r.b)("inlineCode",{parentName:"p"},"cfv_access_token")," and ",Object(r.b)("inlineCode",{parentName:"p"},"cfv_refresh_token")," environment variables and will be\nused in the next step."),Object(r.b)("h4",{id:"3-add-climate-field-view-credentials"},"3. Add Climate Field View credentials"),Object(r.b)("p",null,'Now we can create a Developer-User pair credentials ID that will allow you to\naccess your user\u2019s Climate data. We first add the Climate credentials to Leaf\nAPI, to do that: Hit "Send"'),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"id")," for the credentials you just created will be returned. This ",Object(r.b)("inlineCode",{parentName:"p"},"id")," will\nbe automatically transferred to the value of ",Object(r.b)("inlineCode",{parentName:"p"},"cfv_credentials_id")," to be used in\nthe next step."),Object(r.b)("h3",{id:"leaf-user"},"Leaf User"),Object(r.b)("h4",{id:"create-leaf-user"},"Create Leaf User"),Object(r.b)("p",null,"Now we have to attach credentials to a Leaf User. To do so, we can create a\nLeaf user and attach our John Deere and/or Climate Field View credentials via\nthe credentials id. We can also attach credentials from other companies to this\nsame user to query all available data by Grower/Farm/Field regardless of brand."),Object(r.b)("p",null,'Update (optional) fields "address", "email", "name" and "phone" with your\nuser\'s information.'),Object(r.b)("p",null,"We have automatically included our ",Object(r.b)("inlineCode",{parentName:"p"},"jd_credentials_id")," to this call and\nattached it to this user."),Object(r.b)("p",null,'Hit "Send"'),Object(r.b)("p",null,'Along with other information returned, there is an "id". This "id" is the\n',Object(r.b)("inlineCode",{parentName:"p"},"leaf_user_id")," that will be used in the next (final) Step to query and access\nfiles."),Object(r.b)("h4",{id:"update-leaf-user"},"Update Leaf User"),Object(r.b)("p",null,"To update a Leaf User, let's say to add another provider credentials or change\nthe user's address, we can use this PUT request. Since this method overwrites,\nremember to send all the user's information along with the information you want\nto add or update. For example, if you want to add John Deere credentials to a\nuser that already has ClimateFieldView credentials, remember to specify both\ncredentials ids."),Object(r.b)("h4",{id:"get-specific-leaf-user"},"Get specific Leaf User"),Object(r.b)("p",null,"Get specific Leaf User With this endpoint you can query all information on a\nspecific Leaf User, such as their address, email, credentials, etc. To do so,\nupdate the value of the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"leaf_user_id")," to the Leaf User id\nyou want to query."),Object(r.b)("h4",{id:"gel-all-leaf-users"},"Gel all Leaf Users"),Object(r.b)("p",null,"Get all Leaf Users With this endpoint you can query all information on all your\nLeaf Users, such as their address, email, credentials, etc. Just hit 'send'."),Object(r.b)("h3",{id:"query-operations-by-field"},"Query Operations by Field"),Object(r.b)("p",null,"To query all operations that happened in a specific field (step 2), we first\nneed to create that field (step 1). Then, Leaf will automatically detect\noperations of that field based on the operations' and on the field's\ncoordinates. This process usually takes about 30 minutes."),Object(r.b)("h4",{id:"1-create-field"},"1. Create Field"),Object(r.b)("p",null,"Here we need to specify a leafUserId (that will be the Leaf User owner of that\nfield), a externalId (that will be the name we give to the field) and the\ngeojson geometry of the field (location). After creating the field we can query\nit (step 2)"),Object(r.b)("h4",{id:"2-get-operations-ids-by-field"},"2. Get operations' ids by Field"),Object(r.b)("p",null,"To query all operations that happened in a specific field, just update the\nenvironment variable ",Object(r.b)("inlineCode",{parentName:"p"},"field_external_id")," to the field id you want to query\nfiles."),Object(r.b)("h3",{id:"merge-operation-files"},"Merge Operation Files"),Object(r.b)("h4",{id:"1-merge-files"},"1. Merge files"),Object(r.b)("p",null,"Merging files with Leaf is a very simple process. You just have to list, in the\nrequest json body, the ids of the files you want to merge. Make sure the\noperations are of the same type (",Object(r.b)("inlineCode",{parentName:"p"},"APPLIED")," or ",Object(r.b)("inlineCode",{parentName:"p"},"HARVESTED")," or ",Object(r.b)("inlineCode",{parentName:"p"},"PLANTED"),"), so the\nresults are consistent."),Object(r.b)("p",null,'After that, just hit "send" and an id for that merged file will be returned.\nYou can query that file as any other. It will be listed when you query for all\nfiles and can also be queried specifically by its id'),Object(r.b)("h4",{id:"2-query--access-specific-file"},"2. Query & access specific file"),Object(r.b)("p",null,'You can query a merged file as any other. It will be listed when you query for\nall files and can also be queried specifically by its id. So this request is\nthe same as seen on "Get Operation Files". You just have to update the\nenvironment variable "id" to the id of the merged file.'),Object(r.b)("p",null,"Keep in mind that merging files is processing-heavy and may take about 20\nminutes to finish."))}d.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,h=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);