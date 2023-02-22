"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[439],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},27703:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>o,toc:()=>s,default:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Launch BNB Sidechain",id:"launch-bs"},l="Launch BNB Sidechain",o={unversionedId:"BNBSidechain/develop/BNBSidechainTestnet/launch-bs",id:"BNBSidechain/develop/BNBSidechainTestnet/launch-bs",isDocsHomePage:!1,title:"Launch BNB Sidechain",description:"Prerequisites",source:"@site/docs/BNBSidechain/develop/BNBSidechainTestnet/launch-bs.md",sourceDirName:"BNBSidechain/develop/BNBSidechainTestnet",slug:"/BNBSidechain/develop/BNBSidechainTestnet/launch-bs",permalink:"/docs/BNBSidechain/develop/BNBSidechainTestnet/launch-bs",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/BNBSidechain/develop/BNBSidechainTestnet/launch-bs.md",tags:[],version:"current",frontMatter:{title:"Launch BNB Sidechain",id:"launch-bs"},sidebar:"bscSideBar",previous:{title:"Development Tools",permalink:"/docs/BNBSidechain/develop/BNBSidechainTestnet/development-tools"},next:{title:"Blockchain and EVM Security",permalink:"/docs/BNBSidechain/security/blockchain-and-evm-security"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Config file parameters",id:"config-file-parameters",children:[],level:2},{value:"Launch",id:"launch",children:[{value:"Default option",id:"default-option",children:[],level:3},{value:"Without a balance loader and SSL certificates",id:"without-a-balance-loader-and-ssl-certificates",children:[],level:3}],level:2},{value:"Exposed ports",id:"exposed-ports",children:[],level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"launch-bnb-sidechain"},"Launch BNB Sidechain"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before running command you must do following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure you have a dedicated machine that have at least 8 dedicated CPU core and 32GB RAM, as it needs to run 7 nodes."),(0,i.kt)("li",{parentName:"ul"},"Make sure you have a wildcard domain ",(0,i.kt)("inlineCode",{parentName:"li"},"*.example.com")," set to your machine (use a dedicated machine with a public IP)."),(0,i.kt)("li",{parentName:"ul"},"Modify the ",(0,i.kt)("inlineCode",{parentName:"li"},"config.json")," file to update parameters as you need (you can find all addresses in the keystore folder).")),(0,i.kt)("h2",{id:"config-file-parameters"},"Config file parameters"),(0,i.kt)("p",null,"The config file structure is as such:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainId")," \u2014 identifier of your chain in BNB Sidechain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validators")," \u2014 list of initial validator set (make sure that you have the same list in docker compose file)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"systemTreasury")," \u2014 address of system treasury that accumulates 1/16 of rewards (might be governance).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"consensusParams")," \u2014 parameters for the consensus and staking."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeValidatorsLength")," \u2014 suggested values are (3k+1, where k is honest validators, even better): 7, 13, 19, 25, 31..."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"epochBlockInterval")," \u2014 length of an epoch, specified in blocks; recommended length is 1 day (86400/3=28800, where 3s is block time)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"misdemeanorThreshold")," \u2014 after missing this amount of blocks per day validator losses all daily rewards (penalty)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"felonyThreshold")," \u2014 after missing this amount of blocks per day validator goes in jail for N epochs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validatorJailEpochLength")," \u2014 how many epochs validator should stay in jail (7 epochs = ~7 days)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"undelegatePeriod")," \u2014 allow claiming funds only after 6 epochs (~7 days)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minValidatorStakeAmount")," \u2014 how many tokens validator must stake to create a validator (in ETH)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"minStakingAmount")," \u2014 minimum staking amount for delegators (in ETH)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initialStakes")," \u2014 initial stakes fot the validators (must match with validators list)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"votingPeriod")," \u2014 default voting period for the governance proposals."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"faucet")," \u2014 map with initial balances for faucet and other needs.")),(0,i.kt)("h2",{id:"launch"},"Launch"),(0,i.kt)("p",null,"You have two launching options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Default option"),(0,i.kt)("li",{parentName:"ul"},"Without a balance loader and SSL certificates")),(0,i.kt)("h3",{id:"default-option"},"Default option"),(0,i.kt)("p",null,"You can check the Makefile to choose more interesting commands, but if you just need to set up everything, just run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apt update\napt install build-essential socat\ngit clone https://github.com/bnb-chain/bas-devnet-setup bas --recursive\ncd bas\nDOMAIN_NAME=dev-02.bas.ankr.com make all\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The variable ",(0,i.kt)("inlineCode",{parentName:"p"},"DOMAIN_NAME")," should be set to your domain."))),(0,i.kt)("p",null,"Deployed services can be access though next endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rpc.$%7BDOMAIN_NAME%7D"},"https://rpc.${DOMAIN_NAME}")," (port 8545,9546) - Web3 RPC endpoint"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://explorer.$%7BDOMAIN_NAME%7D"},"https://explorer.${DOMAIN_NAME}")," (port 4000) - Blockchain Explorer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://faucet.$%7BDOMAIN_NAME%7D"},"https://faucet.${DOMAIN_NAME}")," (port 3000) - Faucet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://staking.$%7BDOMAIN_NAME%7D"},"https://staking.${DOMAIN_NAME}")," (port 3001) - Staking UI")),(0,i.kt)("h3",{id:"without-a-balance-loader-and-ssl-certificates"},"Without a balance loader and SSL certificates"),(0,i.kt)("p",null,"If you want to run a node without a load balancer and SSL certificates, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make all-no-balancer\n")),(0,i.kt)("h2",{id:"exposed-ports"},"Exposed ports"),(0,i.kt)("p",null,"Docker Compose files expose next ports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"7432 - Blockscout PostgreSQL database"),(0,i.kt)("li",{parentName:"ul"},"4000 - Blockscout Explorer"),(0,i.kt)("li",{parentName:"ul"},"3000 - Faucet UI"),(0,i.kt)("li",{parentName:"ul"},"3001 - Staking UI"),(0,i.kt)("li",{parentName:"ul"},"8545 - RPC endpoint"),(0,i.kt)("li",{parentName:"ul"},"8546 - WS endpoint"),(0,i.kt)("li",{parentName:"ul"},"30303 - Bootnode")))}d.isMDXComponent=!0}}]);