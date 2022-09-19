"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[9502],{1401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(6600),i=(n(9496),n(9613));n(9295);const a={title:"TypeScript"},s=void 0,o={unversionedId:"developer-guide/typescript",id:"developer-guide/typescript",title:"TypeScript",description:"Proof Service",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/typescript.md",sourceDirName:"developer-guide",slug:"/developer-guide/typescript",permalink:"/zh-Hans/developer-guide/typescript",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/developer-guide/typescript.md",tags:[],version:"current",frontMatter:{title:"TypeScript"},sidebar:"docs",previous:{title:"Rust",permalink:"/zh-Hans/developer-guide/rust"},next:{title:"Glossary",permalink:"/zh-Hans/glossary"}},c={},d=[{value:"Proof Service",id:"proof-service",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"proof-service"},"Proof Service"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You could git clone and run this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/Signature-Generating-Sample/tree/main/typescript"},"TypeScript open demo")," as a help")),(0,i.kt)("p",null,"The core example of codes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json"',title:'"package.json"'},'{\n  "dependencies": {\n    "ethereumjs-util": "^7.1.4"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import { ecsign, toRpcSig, keccakFromString, BN } from \'ethereumjs-util\';\n\nasync function personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {\n    const messageHash = keccakFromString(`\\x19Ethereum Signed Message:\\n${message.length}${message}`, 256)\n    const signature = ecsign(messageHash, privateKey)\n    return Buffer.from(toRpcSig(signature.v, signature.r, signature.s).slice(2), \'hex\')\n}\n\nasync function main() {\n    // this message come from the return attribute "sign_payload" of everytime calling API: v1/proof/payload\n    const message = Buffer.from(\'{\\"action\\":\\"create\\",\\"created_at\\":\\"1656843378\\",\\"identity\\":\\"your_twitter_handle\\",\\"platform\\":\\"twitter\\",\\"prev\\":\\"KNyNFtvhlRVJh/oU6RryK2n+C2dja9aLQPjlv5VHMsQErZROojEmMAgmeEQVC094EOuHIYcv3lCYXf8d3zqDCQE=\\",\\"uuid\\":\\"353449e6-3a6f-4ac8-ae65-ba14bf466baf\\"}\', \'utf8\');\n    // ATTENTION! We intently replaced the last three digit of private key to be xxx.\n    // Private key is everything and NEVER expose it to others or publicly\n    const secretKey = Buffer.from(\'43c25fecc20e6b2a0d86c81a0202d125c0181deb9975d1170d80378c7e05bxxx\', \'hex\');\n    const signature = await personalSign(message, secretKey);\n\n    console.log(`Signature: 0x${signature.toString(\'hex\')}`);\n    // For demo ONLY\n    // Signature: 0xf72fe6b00be411bd70ffe1b9bf322f18529ea10e9559dd26ba10387544849fc86d712709dfb709efc3dcc0a01b6f6b9ca98bd48fe780d58921f4926c6f2c0b871b\n\n    console.log(`Signature(base64): ${signature.toString(\'base64\')}`);\n    // For demo ONLY\n    // Signature(base64): 9y/msAvkEb1w/+G5vzIvGFKeoQ6VWd0muhA4dUSEn8htcScJ37cJ78PcwKAbb2ucqYvUj+eA1Ykh9JJsbywLhxs=\n}\n\nmain();\n')))}u.isMDXComponent=!0}}]);