"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[8213],{4606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(6600),a=(n(9496),n(9613)),s=n(9295);const i={id:"rs-system",title:"System Architecture",sidebar_position:2},o=void 0,l={unversionedId:"relation-service/rs-system",id:"relation-service/rs-system",title:"System Architecture",description:"Flow",source:"@site/docs/relation-service/system.md",sourceDirName:"relation-service",slug:"/relation-service/rs-system",permalink:"/zh-Hans/relation-service/rs-system",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/relation-service/system.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"rs-system",title:"System Architecture",sidebar_position:2},sidebar:"docs",previous:{title:"Introduction",permalink:"/zh-Hans/relation-service/rs-intro"},next:{title:"GraphQL",permalink:"/zh-Hans/relation-service/rs-graphql"}},d={},c=[{value:"Flow",id:"flow",level:2},{value:"Processing a query",id:"processing-a-query",level:3},{value:"Fetch data from Upstreams",id:"fetch-data-from-upstreams",level:3},{value:"See also",id:"see-also",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"flow"},"Flow"),(0,a.kt)("h3",{id:"processing-a-query"},"Processing a query"),(0,a.kt)(s.G,{chart:"flowchart TD\n    A[Start a query] --\x3e B{Found target record in DB?}\n    B --\x3e|Yes| C{Is record outdated?}\n    B --\x3e|No| D[Fetch data from Upstreams]\n    C --\x3e|Yes| D\n    C --\x3e|No| E[Yield result in GraphQL way]\n    D --\x3e E",mdxType:"Mermaid"}),(0,a.kt)("h3",{id:"fetch-data-from-upstreams"},"Fetch data from ",(0,a.kt)("a",{parentName:"h3",href:"rs-intro#upstreams"},"Upstream"),"s"),(0,a.kt)("p",null,"When performing a data fetching process, RelationService will"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Iter all available upstreams which can handle this query"),(0,a.kt)("li",{parentName:"ol"},"Request and collect results from each upstream available"),(0,a.kt)("li",{parentName:"ol"},"Newly fetched data will be fed into this circulation again, until no new data is yield.")),(0,a.kt)("p",null,"A psuedo code snippet describing this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},'up_next = [{platform: :platform_to_query, identity: "identity_to_query"}]\nfetched = []\n\nuntil up_next.empty? do\n  processing = up_next.pop()\n  results = fetch_one(processing)\n  fetched.push(processing)\n  results.each do |result|\n    next if up_next.contains?(result) || fetched.contains?(result)\n    up_next.push(result)\n  end\nend\n\n# Query all available upstream for connections of given identity.\ndef fetch_one(identity)\n  all_upstreams.map do |upstream|\n    upstream.can_handle?(identity) ? upstream.perform_query(identity) : []\n  end.flatten()\nend\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Actual code can be found at\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/relation_server/blob/develop/src/upstream/mod.rs"},"src/upstream/mod.rs"),"\n-> ",(0,a.kt)("inlineCode",{parentName:"p"},"pub async fn fetch_all()")," definition")),(0,a.kt)("p",null,'So you may found a "code search" kind of slow in the first time, but\nwhen it is fetched and cached in RelationService DB, second query will\nbecome pretty fast.'),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"rs-graphql"},"GraphQL")," usage")))}p.isMDXComponent=!0}}]);