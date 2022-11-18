"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[8326],{7715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(6600),r=(a(9496),a(9613));a(9295);const i={id:"as-intro",title:"Introduction",sidebar_position:1},o=void 0,s={unversionedId:"auth-service/as-intro",id:"auth-service/as-intro",title:"Introduction",description:"AuthService is a self-hosted service that provides authentication and authorization for web app/dApp.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/auth-service/intro.md",sourceDirName:"auth-service",slug:"/auth-service/as-intro",permalink:"/zh-Hans/auth-service/as-intro",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/auth-service/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"as-intro",title:"Introduction",sidebar_position:1},sidebar:"docs",previous:{title:"FAQ",permalink:"/zh-Hans/relation-service/rs-faq"},next:{title:"Workflow",permalink:"/zh-Hans/auth-service/as-workflow"}},u={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Subkey",id:"subkey",level:3},{value:"OAuth Apps",id:"oauth-apps",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Deployment",id:"deployment",level:3}],l={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AuthService")," is a self-hosted service that provides authentication and authorization for web app/dApp."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-requisites"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"#subkey"},"subkey")," signed by your Avatar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#oauth-apps"},"OAuth Apps")," applied for your Auth Service to verify your identity."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"server")," that your devices could access. Note that you don't really need a VPS, but an ",(0,r.kt)("inlineCode",{parentName:"li"},"IP:PORT")," that browsers could redirect you to.")),(0,r.kt)("p",null,"We're using Docker to simplify deployment. You can also run it without Docker, but you'll need to compile the binary yourself."),(0,r.kt)("h3",{id:"subkey"},"Subkey"),(0,r.kt)("p",null,"Subkey is a key pair signed by your Avatar. It is meant to be used for authentication purposes without saving your primary Avatar key pair on server, which is a dangerous action. Now we support ",(0,r.kt)("strong",{parentName:"p"},"Secp256k1")," key pair ",(0,r.kt)("em",{parentName:"p"},"only"),", but more curves will be supported in the future."),(0,r.kt)("p",null,"Run the following command with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/auth_server/blob/develop/build/generate_subkey.py"},"generate_subkey.py")," to generate a new subkey and sign it with your Avatar private key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install base58 eth_keys # skip if installed\npython ./build/generate_subkey.py\n")),(0,r.kt)("p",null,"Subkey is randomly generated so that you can regenerate and use a new subkey at any time."),(0,r.kt)("h3",{id:"oauth-apps"},"OAuth Apps"),(0,r.kt)("p",null,"Currently supported OAuth apps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/"},"Discord")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.twitter.com/en/portal/dashboard"},"Twitter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/developers"},"GitHub"))),(0,r.kt)("p",null,"Take ",(0,r.kt)("strong",{parentName:"p"},"Discord")," as an example, you need to apply for an OAuth App to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CLIENT_SECRET"),". You can find the guide ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/oauth2"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Callback URL"),"/",(0,r.kt)("strong",{parentName:"p"},"Redirect URL")," is the URL that your browser will be redirected to in order to continue AuthService authentication process. It should be your AuthServer's address, suffixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"/signin-${platform}"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:5050/signin-discord"),"."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Once you have your subkey signed and OAuth applications, you can start to configure your AuthServer."),(0,r.kt)("p",null,"Configure ",(0,r.kt)("inlineCode",{parentName:"p"},"appsettings.Production.json")," with your secrets as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "Avatars": [\n    {\n      "Avatar": "0x1145141919810...",\n      "Subkey": {\n        "PrivateKey": "0xbadbadbad...",\n        "CertificationSignature": "aBcDEFGHij123456..."\n      }\n    }\n  ],\n  "Discord": {\n    "ClientID": "123456789012345678",\n    "ClientSecret": "123456789012345678"\n  },\n  "Twitter": {\n    "ClientID": "aBcDEFG...",\n    "ClientSecret": "Hij123456..."\n  }\n  // ...\n}\n')),(0,r.kt)("p",null,"Note that AuthServer supports multiple Avatars, so you can add more Avatars to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatars")," array."),(0,r.kt)("h3",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Firstly, you need to build the Docker image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t authserver -f ./src/AuthServer.Server/Dockerfile .\n")),(0,r.kt)("p",null,"Run the following command to run it once, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/appsettings.Production.json")," with your own configuration file path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -p 80:80 -v /path/to/appsettings.Production.json:/app/appsettings.Production.json authserver\n")))}d.isMDXComponent=!0}}]);