"use strict";(self.webpackChunktech_doc_samples=self.webpackChunktech_doc_samples||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Markdown reference guide for Zendesk users",sidebar_label:"Markdown reference",sidebar_position:30},o="Getting Started with Markdown in Zendesk: A Quick Reference Guide",l={unversionedId:"doc-samples/markdown",id:"doc-samples/markdown",title:"Markdown reference guide for Zendesk users",description:"Introduction",source:"@site/docs/doc-samples/30-markdown.mdx",sourceDirName:"doc-samples",slug:"/doc-samples/markdown",permalink:"/tech-doc-samples/docs/doc-samples/markdown",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/doc-samples/30-markdown.mdx",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Markdown reference guide for Zendesk users",sidebar_label:"Markdown reference",sidebar_position:30},sidebar:"samplesSidebar",previous:{title:"DevOps intro",permalink:"/tech-doc-samples/docs/doc-samples/devops-intro"},next:{title:"Git 101",permalink:"/tech-doc-samples/docs/doc-samples/sample-3"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Headings",id:"headings",level:2},{value:"Text Formatting",id:"text-formatting",level:2},{value:"Lists",id:"lists",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Inline code",id:"inline-code",level:2},{value:"Code Blocks",id:"code-blocks",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-markdown-in-zendesk-a-quick-reference-guide"},"Getting Started with Markdown in Zendesk: A Quick Reference Guide"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This document is written for Customer Support Representative as a quick reference guide for using Markdown syntax in Zendesk. Markdown is a markup language that allows you to format and style text in a simple and intuitive way."),(0,a.kt)("p",null,"For a more detailed reference guide visit: ",(0,a.kt)("a",{parentName:"p",href:"https://support.zendesk.com/hc/en-us/articles/4408846544922-Formatting-text-with-Markdown#topic_xqx_mvc_43__row_lhh_xln_1n"},"Formatting text with Markdown \u2013 Zendesk help")),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#headings"},"Headings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#text-formatting"},"Text Formatting")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#lists"},"Lists")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#links"},"Links")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#images"},"Images")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#inline-code"},"Inline code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-blocks"},"Code Blocks"))),(0,a.kt)("h2",{id:"headings"},"Headings"),(0,a.kt)("p",null,"You can create headings using the '#' symbol, followed by a space and the heading text. The number of '#' symbols determines the level of the heading. The lower the number, the higher the priority/importance."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Heading 1\n## Heading 2\n## Heading 3\n")),(0,a.kt)("h2",{id:"text-formatting"},"Text Formatting"),(0,a.kt)("p",null,"You can apply basic text formatting (bold, italics, strikethrough) using the following Markdown syntax:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bold"),": Enclose the text within double asterisks (","*","*","text","*","*",") or double underscores (","_","_","text","_","_",")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Italics"),": Enclose the text within single asterisks (","*","text","*",") or single underscores (","_","text","_",")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"Strikethrough"),": Enclose the text within double tildes (","~","~","text","~","~",").")),(0,a.kt)("h2",{id:"lists"},"Lists"),(0,a.kt)("p",null,"To create ordered lists, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," symbol at the beginning of each line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- Item 1\n- Item 2\n- Item 3\n")),(0,a.kt)("p",null,"To create ordered lists, use a number followed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"."),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. Item 1\n2. Item 2\n3. Item 3\n")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("p",null,"You can create hyperlinks by placing the link text in square brackets and the URL in parentheses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[Mauro's Technical Documentation source code](https://github.com/maurom88/tech-doc-samples)\n")),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,"To add images: place the alt text in square brackets and the image URL in parentheses."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"![A placeholder image](https://picsum.photos/200)\n")),(0,a.kt)("h2",{id:"inline-code"},"Inline code"),(0,a.kt)("p",null,"You can highlight a piece of code in line by enclosing the code within (","`","):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"This is how you would write some `inline code`.\n")),(0,a.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,a.kt)("p",null,"You can highlight code snippets or blocks by enclosing the code within triple backticks (","`","`","`","). In the following example, remove the backslashes (",(0,a.kt)("inlineCode",{parentName:"p"},"\\"),") to properly use the codeblock:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\\```\nprint("Hello, world!")\n\\```\n')))}u.isMDXComponent=!0}}]);