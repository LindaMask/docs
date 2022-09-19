"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[3440],{9638:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=a(6600),n=(a(9496),a(9613));a(9295);const o={title:"How does Next.ID work"},r="How does Next.ID work",s={unversionedId:"core-concepts/how-it-works",id:"core-concepts/how-it-works",title:"How does Next.ID work",description:"Next.ID has a simple workflow on the backend. In this page, we go through the core system design concept of Next.ID. This is also a guide to creating your first application with Next.ID.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/core-concepts/how-it-works.md",sourceDirName:"core-concepts",slug:"/core-concepts/how-it-works",permalink:"/zh-Hans/core-concepts/how-it-works",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/core-concepts/how-it-works.md",tags:[],version:"current",frontMatter:{title:"How does Next.ID work"},sidebar:"docs",previous:{title:"Liftoff, Hello Space!",permalink:"/zh-Hans/getting-started/quick-start"},next:{title:"Architecture",permalink:"/zh-Hans/core-concepts/architecture"}},l={},p=[{value:"Avatar in Next.ID",id:"avatar-in-nextid",level:2},{value:"ProofService",id:"proofservice",level:2},{value:"Platform Binding",id:"platform-binding",level:3},{value:"Ethereum Binding",id:"ethereum-binding",level:3},{value:"Revoke Binding",id:"revoke-binding",level:3},{value:"KVService",id:"kvservice",level:2},{value:"Write Data",id:"write-data",level:3}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-does-nextid-work"},"How does Next.ID work"),(0,n.kt)("p",null,"Next.ID has a simple workflow on the backend. In this page, we go through the core system design concept of Next.ID. This is also a guide to creating your first application with Next.ID. "),(0,n.kt)("h2",{id:"avatar-in-nextid"},"Avatar in Next.ID"),(0,n.kt)("p",null,"Avatars can perform actions via Next.ID (eg. sign a follow action) and on-chain & off-chain activities. Next.ID's relation aggregation can map all of these actions:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7726).Z,width:"2422",height:"1715"})),(0,n.kt)("p",null,"How two users' Avatars interact:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(3857).Z,width:"2422",height:"1715"})),(0,n.kt)("h2",{id:"proofservice"},"ProofService"),(0,n.kt)("h3",{id:"platform-binding"},"Platform Binding"),(0,n.kt)("p",null,"In this scenario, User requests Platform Binding on Application, ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," will return ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," and post-content based on the Application\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload"),". "),(0,n.kt)("p",null,"Then, application requests user\u2019s Avatar Private Key to generate a signature based on ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),". After that, user publishes Proof Post on target platforms, the Proof Post link and ID with ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at")," will send to ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," per request and verify from Platforms\u2019 post content. "),(0,n.kt)("p",null,"After ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService"),"validate the Proof Post existence and verify the Private Key, it will return the successful binding notification back to Application and User."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5742).Z,width:"1186",height:"676"})),(0,n.kt)("h3",{id:"ethereum-binding"},"Ethereum Binding"),(0,n.kt)("p",null,"In this scenario, User requests Ethereum Binding on Application with identity ",(0,n.kt)("inlineCode",{parentName:"p"},"0xWALLET_ADDRESS"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," will return the Avatar",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload"),". "),(0,n.kt)("p",null,"Then, application requests user\u2019s Avatar Private Key to generate a signature based on Avatar",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),". After that, application requests user\u2019s Wallet Private Key to generate a signature based on Wallet",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),"."),(0,n.kt)("p",null,"After ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService"),"validate with ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," , then verify the Avatar and Wallet Signature. After all it will return the successful binding notification back to Application and User."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8832).Z,width:"1186",height:"676"})),(0,n.kt)("h3",{id:"revoke-binding"},"Revoke Binding"),(0,n.kt)("p",null,"In this scenario, User requests Revoke Binding on Application, ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService")," will return the Avatar",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload")," as Revoke action. "),(0,n.kt)("p",null,"Then, application requests user\u2019s Avatar Private Key to generate a signature based on ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),". "),(0,n.kt)("p",null,"After ",(0,n.kt)("inlineCode",{parentName:"p"},"ProofService"),"validate with ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," , then verify the Avatar and Wallet Signature for Revoke action. After all it will return the successful Revoke notification back to Application and User. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1996).Z,width:"1186",height:"676"})),(0,n.kt)("h2",{id:"kvservice"},"KVService"),(0,n.kt)("h3",{id:"write-data"},"Write Data"),(0,n.kt)("p",null,"In this scenario, User requests the modification on Application, ",(0,n.kt)("inlineCode",{parentName:"p"},"KVService")," will return the ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s POST/v1/KV/payload. "),(0,n.kt)("p",null,"Then, application requests user\u2019s Avatar Private Key to generate a signature based on ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload"),". "),(0,n.kt)("p",null,"After ",(0,n.kt)("inlineCode",{parentName:"p"},"KVService"),"validate with ",(0,n.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"sign_payload")," , then verify the Avatar Signature for Write Data action. After all it will return the successful notification back to Application and User. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5950).Z,width:"1186",height:"676"})))}c.isMDXComponent=!0},7726:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/avatar-diagram-f7b7012e838c1a5091f915ec0b310308.png"},3857:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/avatar-interaction-aba0ab05aa82eb90e00a55adf9abad8b.png"},8832:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ethereum-binding-6f923b29a476f38b32fa74caf033d85a.png"},5742:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/platform-binding-0331240b6a6400bc2a2f825f72083444.png"},1996:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/revoke-binding-f1008cc1addf99d2a650c3d98901ab6a.png"},5950:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/write-data-a09bcda7990a86b7dd50bc1a0676161d.png"}}]);