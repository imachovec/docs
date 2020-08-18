(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{100:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},101:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var n=a(99),r=a(107);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,b=void 0!==c&&c,o=i.absolute,l=void 0!==o&&o;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(b)return t+a;var f=!a.startsWith(t)?t+a.replace(/^\//,""):a;return l?e+f:f}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},102:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},103:function(e,t,a){"use strict";var n=a(0),r=a(102);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},104:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(103),c=a(100),b=a(47),o=a.n(b),l=37,f=39;t.a=function(e){var t=e.block,a=e.children,b=e.defaultValue,u=e.values,s=e.groupId,d=Object(i.a)(),p=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(n.useState)(b),m=j[0],g=j[1],v=Object(n.useState)(!1),N=v[0],y=v[1];if(null!=s){var h=p[s];null!=h&&h!==m&&u.some((function(e){return e.value===h}))&&g(h)}var w=function(e){g(e),null!=s&&O(s,e)},E=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},C=function(){y(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",C)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":m===t}),style:N?{}:{outline:"none"},key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case f:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e),x(e)},onFocus:function(){return w(t)},onClick:function(){w(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===m}))[0]))}},105:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},107:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(98)),c=(a(104),a(105),a(101)),b={title:"Overview"},o={unversionedId:"satellite_overview",id:"satellite_overview",isDocsHomePage:!1,title:"Overview",description:"About",source:"@site/docs/satellite_overview.md",permalink:"/docs/docs/satellite_overview",editUrl:"https://github.com/Leaf-Agriculture/docs/satellite_overview.md",sidebar:"docs",previous:{title:"Endpoints",permalink:"/docs/docs/operations_endpoints"},next:{title:"Endpoints",permalink:"/docs/docs/satellite_endpoints"}},l=[{value:"About",id:"about",children:[]}],f={rightToc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about"},"About"),Object(i.b)("p",null,"Using Leaf's Satellite service you will be able to easily implement a satellite imagery program and compare the field health evolution over time.\nLeaf's service uses Sentinel-2 data which has the highest resolution publicly available and revisits each field every 3 to 5 days."),Object(i.b)("img",{alt:"Field example",src:Object(c.a)("img/fieldovertime.png")}),Object(i.b)("p",null,"This API accepts field boundary polygons and returns processed, cropped, and color-corrected RGB and NDVI images every time there is a new image available.\nWe also provide information like percent cloud coverage of the field and the Sentinel tile source for each image."),Object(i.b)("p",null,"We generate a total of 17 images for each intersected field: A GeoTiff for each band from Sentinel and processed RGB and NDVI images.\nThe following table shows all the images with its resolutions and types:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Resolution"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B01.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"60 meters"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B02.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B03.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B04.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B05.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B06.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B07.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B08.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B09.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"60"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B10.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"60"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B11.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"B12.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NDVI.png"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NULL"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"png")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NDVI.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ndvi")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NDVI_color.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif_colorized")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RGB.png"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"NULL"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"png")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"RGB.tif"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"tif_colorized")))),Object(i.b)("p",null,"PNG files do not have resolution because they are scaled up by 800%."),Object(i.b)("p",null,"We generate a colorized ",Object(i.b)("inlineCode",{parentName:"p"},"NDVI_color.tif")," using a custom built color ramp. See\nthe image below. If you prefer to use your own ramp, we recommend using ",Object(i.b)("inlineCode",{parentName:"p"},"NDVI.tif"),",\nwhich is a pre calculated NDVI file. You can import it into any GIS software,\nlike ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qgis.org/en/site/"}),"QGis"),", and use it as you please."),Object(i.b)("img",{alt:"NDVI example",src:Object(c.a)("img/ndviexample.png")}),Object(i.b)("p",null,"Currently, our Satellite service runs without a relationship between our Field Services and the User Management Services. However, we are working to integrate it into the ",Object(i.b)("inlineCode",{parentName:"p"},"leafUser")," hierarchy and the Fields Service."),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/docs/satellite_endpoints"}),"Satellite API Reference")," for more information."))}u.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),f=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=f(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=f(a),d=n,p=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return a?r.a.createElement(p,b(b({ref:t},l),{},{components:a})):r.a.createElement(p,b({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";var n=a(0),r=a(20);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);