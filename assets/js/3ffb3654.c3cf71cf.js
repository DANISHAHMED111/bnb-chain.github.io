"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4117],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>y});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(n),u=o,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(y,l(l({ref:e},s),{},{components:n})):a.createElement(y,l({ref:e},s))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[m]="string"==typeof t?t:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3004:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"Verify Proxy Contracts",hide_table_of_contents:!1,sidebar_position:2},l="How to Verify Proxy Contract",i={unversionedId:"verify-proxy",id:"verify-proxy",title:"How to Verify Proxy Contract",description:"In this section, we provide a quick guide on how to verify a deployed BEP20 proxy contract.",source:"@site/docs/verify-proxy.md",sourceDirName:".",slug:"/verify-proxy",permalink:"/docs/verify-proxy",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/verify-proxy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Verify Proxy Contracts",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Upgradable BEP20 Contracts on BSC",permalink:"/docs/proxy"},next:{title:"Full Stack Hello World dApp",permalink:"/docs/dapp-dev/Hello-World"}},c={},p=[{value:"Flatten your contract",id:"flatten-your-contract",level:2},{value:"Install flattener",id:"install-flattener",level:3},{value:"Compile and deploy your contract with Remix",id:"compile-and-deploy-your-contract-with-remix",level:2},{value:"Compile Implementation contract",id:"compile-implementation-contract",level:3},{value:"Deploy the implementation contract",id:"deploy-the-implementation-contract",level:3},{value:"Compile Proxy Contract",id:"compile-proxy-contract",level:2},{value:"Deploy the proxy contract",id:"deploy-the-proxy-contract",level:3},{value:"Verify Proxy Contract on BscScan",id:"verify-proxy-contract-on-bscscan",level:2},{value:"Link these two contracts",id:"link-these-two-contracts",level:2}],s={toc:p},m="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-verify-proxy-contract"},"How to Verify Proxy Contract"),(0,o.kt)("p",null,"In this section, we provide a quick guide on how to verify a deployed BEP20 proxy contract."),(0,o.kt)("h2",{id:"flatten-your-contract"},"Flatten your contract"),(0,o.kt)("h3",{id:"install-flattener"},"Install flattener"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install truffle-flattener -g\n")),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ truffle-flattener BEP20TokenImplementation.sol > BEP20TokenImplementationFlattened.sol\n$ truffle-flattener BEP20UpgradeableProxy.sol > BEP20UpgradeableProxyFlattened.sol"\n')),(0,o.kt)("h2",{id:"compile-and-deploy-your-contract-with-remix"},"Compile and deploy your contract with Remix"),(0,o.kt)("h3",{id:"compile-implementation-contract"},"Compile Implementation contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open Remix IDE: ",(0,o.kt)("a",{parentName:"li",href:"https://remix.ethereum.org/"},"https://remix.ethereum.org")),(0,o.kt)("li",{parentName:"ul"},"Select solidity language"),(0,o.kt)("li",{parentName:"ul"},"Create new contract ",(0,o.kt)("inlineCode",{parentName:"li"},"BEP20Token.sol")," and copy contract code from flattened ",(0,o.kt)("inlineCode",{parentName:"li"},"BEP20TokenImplementationFlattened.sol")),(0,o.kt)("li",{parentName:"ul"},"Compile the implementation contract"),(0,o.kt)("li",{parentName:"ul"},"Click on this button to switch to the compile page",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select \u201cBEP20TokenImplementation\u201d contract"),(0,o.kt)("li",{parentName:"ul"},"Enable \u201cAuto compile\u201d and \u201coptimization\u201d"),(0,o.kt)("li",{parentName:"ul"},"Click \u201cABI\u201d to copy the contract abi and save it.")))),(0,o.kt)("h3",{id:"deploy-the-implementation-contract"},"Deploy the implementation contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select \u201cInjected Web3\u201d"),(0,o.kt)("li",{parentName:"ul"},"Select \u201cBEP20TokenImplementation\u201d contract"),(0,o.kt)("li",{parentName:"ul"},"Click the \u201cDeploy\u201d button and Metamask will pop up"),(0,o.kt)("li",{parentName:"ul"},"Click the \u201cconfirm\u201d button to sign and broadcast the transaction to BSC."),(0,o.kt)("li",{parentName:"ul"},"Then, you need to initialize the token: fill in all the parameters and click on \u201ctransact\u201d")),(0,o.kt)("img",{src:"../static/img/deployImplementation.png",alt:"drawing",width:"300"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"Owner")," should be the address who send the deploy transaction before.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the \u201cCopy\u201d icon to save the initializatioin data: Like the following: ```")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0xef3ebcb800000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000fc41d5571120442d1bb82cea0884966e543cb78b000000000000000000000000000000000000000000000000000000000000000548656c6c6f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000548454c4c4f000000000000000000000000000000000000000000000000000000\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Confirm your transaction in MetaMask")),(0,o.kt)("img",{src:"../static/img/confirmTxn.png",alt:"drawing",width:"300"}),(0,o.kt)("h2",{id:"compile-proxy-contract"},"Compile Proxy Contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create new contract proxy.sol and copy contract code from flattened ",(0,o.kt)("inlineCode",{parentName:"li"},"BEP20UpgradeableProxyFlattened.sol "),".  Here is and ",(0,o.kt)("a",{parentName:"li",href:"https://bscscan.com/address/0xA6Ec2Fe4F6040b188A926048f44c9A59Fca189d4#code"},"example")),(0,o.kt)("li",{parentName:"ul"},"Compile the proxy contractClick on this button to switch to the compile page",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select \u201cBEP20UpgradeableProxy\u201d contract"),(0,o.kt)("li",{parentName:"ul"},"Enable \u201cAuto compile\u201d and \u201coptimization\u201dClick \u201cABI\u201d to copy the contract abi and save it.")))),(0,o.kt)("h3",{id:"deploy-the-proxy-contract"},"Deploy the proxy contract"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select \u201cInjected Web3\u201dSelect \u201cBEP20UpgradeableProxy.sol\u201d contract"),(0,o.kt)("li",{parentName:"ul"},"Fill in the parameters")),(0,o.kt)("img",{src:"../static/img/deployUpgradeableProxy.png",alt:"drawing",width:"300"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Logic"),": The address of ",(0,o.kt)("inlineCode",{parentName:"p"},"BEP20Implementation")," contract\n",(0,o.kt)("strong",{parentName:"p"},"Admin"),": admin cannot be BEP20 token owner\n",(0,o.kt)("strong",{parentName:"p"},"Data"),": use the initialization data you saved before"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the \u201cDeploy\u201d button and Metamask will pop up"),(0,o.kt)("li",{parentName:"ul"},"Click the \u201cconfirm\u201d button to sign and broadcast transaction to BSC.")),(0,o.kt)("h2",{id:"verify-proxy-contract-on-bscscan"},"Verify Proxy Contract on BscScan"),(0,o.kt)("p",null,"Note: The way to verify the BEP20TokenImplementation contract is the same as before."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to your contact page and click on \u201cVerify and Publish\u201d")),(0,o.kt)("img",{src:"../static/img/verifyAndPublish.png",alt:"drawing",width:"300"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select Single file")),(0,o.kt)("img",{src:"../static/img/selectSingleFile.png",alt:"drawing",width:"300"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy your contract code below and check \u201cOptimization\u201d if it\u2019s enabled"),(0,o.kt)("li",{parentName:"ul"},"Contractor Data: Please use this site for getting the correct constructor data: ",(0,o.kt)("a",{parentName:"li",href:"https://abi.hashex.org/#"},"https://abi.hashex.org/#"))),(0,o.kt)("p",null,"First, you need to copy ABI json of \u201cBEP20UpgradeableProxy.sol\u201d contractThen, click on \u201cParse\u201d"),(0,o.kt)("img",{src:"../static/img/copyProxyABIJson.png",alt:"drawing",width:"300"}),(0,o.kt)("p",null,"Add all those 3 parameters as indicated. Then copy/paste the result."),(0,o.kt)("p",null,"That\u2019s it! You have verified your proxy contract."),(0,o.kt)("img",{src:"../static/img/verifiedProxy.png",alt:"drawing",width:"300"}),(0,o.kt)("h2",{id:"link-these-two-contracts"},"Link these two contracts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on \u201cMore Options\u201d and choose \u201cis this a proxy\u201d.")),(0,o.kt)("img",{src:"../static/img/isThisAProxy.png",alt:"drawing",width:"300"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify your proxy address")),(0,o.kt)("img",{src:"../static/img/selectProxy.png",alt:"drawing",width:"300"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Confirm the implementation address.")),(0,o.kt)("img",{src:"../static/img/confirmImplementation.png",alt:"drawing",width:"300"}),(0,o.kt)("p",null,"If you go back to the contract page and you can see two more buttons \u201cRead as Proxy\u201d and \u201cWrite as Proxy\u201d"),(0,o.kt)("img",{src:"../static/img/twoNewButtons.png",alt:"drawing",width:"300"}))}d.isMDXComponent=!0}}]);