"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[252],{4078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=a(6600),n=(a(9496),a(9613)),r=a(9295);const i={id:"ps-flow",title:"Flow",tags:["proof_service"],sidebar_position:2.5},l="Flow of typical scenario",p={unversionedId:"proof-service/ps-flow",id:"proof-service/ps-flow",title:"Flow",description:"Use this with Glossary",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/proof-service/flow.md",sourceDirName:"proof-service",slug:"/proof-service/ps-flow",permalink:"/zh-Hans/proof-service/ps-flow",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/proof-service/flow.md",tags:[{label:"proof_service",permalink:"/zh-Hans/tags/proof-service"}],version:"current",sidebarPosition:2.5,frontMatter:{id:"ps-flow",title:"Flow",tags:["proof_service"],sidebar_position:2.5}},s={},c=[{value:"Create a Link",id:"create",level:2},{value:"Create an Ethereum Link",id:"ethereum",level:3},{value:"Delete a link",id:"delete-a-link",level:2},{value:"Query",id:"query",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flow-of-typical-scenario"},"Flow of typical scenario"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Use this with ",(0,n.kt)("a",{parentName:"p",href:"ps-glossary"},"Glossary"))),(0,n.kt)("h2",{id:"create"},"Create a ",(0,n.kt)("a",{parentName:"h2",href:"ps-glossary#glossary-link"},"Link")),(0,n.kt)(r.G,{chart:"sequenceDiagram\n    autonumber\n    actor U as User\n    participant A as Application\n    participant PS as ProofService\n    participant P as Platform\n\n    U ->>+ A : Start a binding with platform, identity\n    A ->>+ PS : POST /v1/proof/payload\n    PS --\x3e>- A : sign_payload, post_content\n    A ->>- U : avatar.eth_avatarlSign(sign_payload)\n    U --\x3e> A : Signature Sp\n    A --\x3e> A : Inject Sp into post_content\n    A --\x3e>+ U : Show to user how to do proof post with post_content\n    U ->>+ P : Publish proof post\n    P --\x3e>- U : Link / ID of Proof post\n    U ->>- A : Link / ID of Proof post\n    A ->>+ PS : POST /v1/proof\n    note right of A : With uuid and created_at from \u2462\n    PS ->>+ P : Request for proof post\n    P --\x3e>- PS : Returns content of Proof post\n    PS --\x3e> PS : Validate Proof post content\n    PS --\x3e>- A : Link created successfully\n    A --\x3e> U : Success",mdxType:"Mermaid"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"api#proof-payload"},"POST /v1/proof/payload")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"api#proof-add"},"POST /v1/proof")))),(0,n.kt)("h3",{id:"ethereum"},"Create an Ethereum Link"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This procedure is for ",(0,n.kt)("inlineCode",{parentName:"p"},'platform == "ethereum"'),".")),(0,n.kt)(r.G,{chart:"sequenceDiagram\n    autonumber\n    actor U as User\n    participant W as Wallet\n    participant A as Application\n    participant PS as ProofService\n\n    U ->>+ A : platform: ethereum, identity: 0xWALLET_ADDRESS\n    A ->> PS : POST /v1/proof/payload\n    PS --\x3e> A : sign_payload\n    A ->> U : avatar.eth_avatarlSign(sign_payload)\n    U --\x3e> A : Signature Sp\n    A ->> W : wallet.eth_personalSign(sign_payload)\n    W --\x3e> A : Signature Sw\n    A ->> PS : POST /v1/proof\n    note right of A : extra: Sp and Sw\n    note right of A : With uuid and created_at from \u2462\n    PS --\x3e> PS : Verify Sp and Sw\n    PS --\x3e> A : Link created successfully\n    A --\x3e>- U : Success",mdxType:"Mermaid"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"api#proof-payload"},"POST /v1/proof/payload")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"api#proof-add"},"POST /v1/proof")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"identity")," wallet address matches ",(0,n.kt)("inlineCode",{parentName:"li"},"0x[0-9a-f]{40}"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"No need to publish this sigature somewhere, because:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ability of generating this sig is equals to the ownership of secret key."),(0,n.kt)("li",{parentName:"ul"},"No one can falsify it, except the secret key owner."))))),(0,n.kt)("h2",{id:"delete-a-link"},"Delete a link"),(0,n.kt)("p",null,"Link deletion is also a link."),(0,n.kt)(r.G,{chart:"sequenceDiagram\n    autonumber\n    actor U as User\n    participant A as Application\n    participant PS as ProofService\n\n    U ->> A : Platform and Identity to perform deletion\n    A ->>+ PS : POST /v1/proof/payload\n    note right of A: action: delete\n    PS --\x3e>- A : sign_payload\n    A ->> U : avatar.eth_avatarlSign(sign_payload)\n    U --\x3e> A : Signature Sp\n    A ->>+ PS : POST /v1/proof\n    note right of A: action: delete\n    note right of A: extra: Sp\n    PS --\x3e> PS : Verify Sp\n    PS --\x3e>- A : Success\n    A --\x3e> U : Success\n",mdxType:"Mermaid"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Application can guide user to delete ",(0,n.kt)("a",{parentName:"li",href:"ps-glossary#glossary-proof-post"},"Proof post")," on specific platform (if any) later."))),(0,n.kt)("h2",{id:"query"},"Query"),(0,n.kt)("p",null,"Check ",(0,n.kt)("a",{parentName:"p",href:"api#proof-query"},"GET /v1/proof"),"."))}d.isMDXComponent=!0}}]);