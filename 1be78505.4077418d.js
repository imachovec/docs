(window.webpackJsonp=window.webpackJsonp||[]).push([[7,37],{105:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(102),l=t.n(r),i=t(101),o=t(92);a.a=function(e){var a=Object(n.useRef)(!1),r=Object(n.useRef)(null),s=Object(i.useHistory)(),u=Object(o.a)().siteConfig,m=(void 0===u?{}:u).baseUrl,d=function(){a.current||(Promise.all([fetch(m+"search-doc.json").then((function(e){return e.json()})),fetch(m+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(36),t.e(38)]).then(t.bind(null,108)),t.e(25).then(t.t.bind(null,107,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=m+t.url;document.createElement("a").href=n,s.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},b=Object(n.useCallback)((function(a){r.current.contains(a.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:b,onBlur:b,ref:r}))}},117:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(104);a.default=function(){return c.a.createElement(r.a,{title:"Page Not Found"},c.a.createElement("div",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},"Page Not Found"),c.a.createElement("p",null,"We could not find what you were looking for."),c.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},88:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(91),l=t(92),i=t(23),o=t(104),s=t(2),u=t(6),m=t(93),d=t(96),b=t(120),h=t(121),f=t(122),p=t(119),v=t(99),E=t(100),k=t(57),j=t.n(k);var O=function e(a,t){return"link"===a.type?(n=a.href,c=t,(r=function(e){return e.endsWith("/")?e:e+"/"})(n)===r(c)):"category"===a.type&&a.items.some((function(a){return e(a,t)}));var n,c,r};function _(e){var a,t,r,l=e.item,i=e.onItemClick,o=e.collapsible,d=e.activePath,b=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=l.items,f=l.label,p=O(l,d),v=(t=p,r=Object(n.useRef)(t),Object(n.useEffect)((function(){r.current=t}),[t]),r.current),E=Object(n.useState)((function(){return!!o&&(!p&&l.collapsed)})),k=E[0],_=E[1];Object(n.useEffect)((function(){p&&!v&&k&&_(!1)}),[p,v,k]);var g=Object(n.useCallback)((function(e){e.preventDefault(),_((function(e){return!e}))}),[_]);return 0===h.length?null:c.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":k}),key:f},c.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(a={"menu__link--sublist":o,"menu__link--active":o&&p},a[j.a.menuLinkText]=!o,a)),onClick:o?g:void 0,href:o?"#!":void 0},b),f),c.a.createElement("ul",{className:"menu__list"},h.map((function(e){return c.a.createElement(C,{tabIndex:k?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:o,activePath:d})}))))}function g(e){var a=e.item,t=e.onItemClick,n=e.activePath,r=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=a.href,i=a.label,o=O(a,n);return c.a.createElement("li",{className:"menu__list-item",key:i},c.a.createElement(v.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":o}),to:l},Object(E.a)(l)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},r),i))}function C(e){switch(e.item.type){case"category":return c.a.createElement(_,e);case"link":default:return c.a.createElement(g,e)}}var N=function(e){var a,t,r=e.path,i=e.sidebar,o=e.sidebarCollapsible,u=void 0===o||o,E=Object(n.useState)(!1),k=E[0],O=E[1],_=Object(l.a)(),g=_.siteConfig,N=(g=void 0===g?{}:g).themeConfig,w=(N=void 0===N?{}:N).navbar,y=(w=void 0===w?{}:w).title,x=void 0===y?"":y,M=w.hideOnScroll,S=void 0!==M&&M,I=_.isClient,P=Object(f.a)(),B=P.logoLink,L=P.logoLinkProps,R=P.logoImageUrl,D=P.logoAlt,W=Object(d.a)().isAnnouncementBarClosed,A=Object(p.a)().scrollY;Object(b.a)(k);var F=Object(h.a)();return Object(n.useEffect)((function(){F===h.b.desktop&&O(!1)}),[F]),c.a.createElement("div",{className:Object(m.a)(j.a.sidebar,(a={},a[j.a.sidebarWithHideableNavbar]=S,a))},S&&c.a.createElement(v.a,Object(s.a)({tabIndex:"-1",className:j.a.sidebarLogo,to:B},L),null!=R&&c.a.createElement("img",{key:I,src:R,alt:D}),null!=x&&c.a.createElement("strong",null,x)),c.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",j.a.menu,(t={"menu--show":k},t[j.a.menuWithAnnouncementBar]=!W&&0===A,t))},c.a.createElement("button",{"aria-label":k?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){O(!k)}},k?c.a.createElement("span",{className:Object(m.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):c.a.createElement("svg",{"aria-label":"Menu",className:j.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement("ul",{className:"menu__list"},i.map((function(e){return c.a.createElement(C,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),O(!1)},collapsible:u,activePath:r})})))))},w=t(111),y=t(117),x=t(101),M=t(62),S=t.n(M);function I(e){var a,t,n=e.currentDocRoute,i=e.docsMetadata,s=e.children,u=Object(l.a)(),m=u.siteConfig,d=u.isClient,b=i.permalinkToSidebar,h=i.docsSidebars,f=i.version,p=h[b[n.path]];return c.a.createElement(o.a,{version:f,key:d},c.a.createElement("div",{className:S.a.docPage},p&&c.a.createElement("div",{className:S.a.docSidebarContainer,role:"complementary"},c.a.createElement(N,{sidebar:p,path:n.path,sidebarCollapsible:null===(a=null===(t=m.themeConfig)||void 0===t?void 0:t.sidebarCollapsible)||void 0===a||a})),c.a.createElement("main",{className:S.a.docMainContainer},c.a.createElement(r.a,{components:w.a},s))))}a.default=function(e){var a=e.route.routes,t=e.docsMetadata,n=e.location,r=a.find((function(e){return Object(x.matchPath)(n.pathname,e)}));return r?c.a.createElement(I,{currentDocRoute:r,docsMetadata:t},Object(i.a)(a)):c.a.createElement(y.default,e)}}}]);