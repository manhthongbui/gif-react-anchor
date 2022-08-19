(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{107:function(e,t){},121:function(e,t){},122:function(e,t){},140:function(e,t){},142:function(e,t){},146:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var c=n(21),r=n.n(c),a=n(80),s=n.n(a),i=(n(90),n(0)),o=n(2),u=n(10),l=n(9),b=n(26),f=(n(146),n(43)),p=n(84),d=n(15),m=b.c.SystemProgram,g=(b.c.Keypair,Object.values(p._keypair.secretKey)),j=new Uint8Array(g),h=b.c.Keypair.fromSecretKey(j),y=new l.PublicKey(f.metadata.address),O=Object(l.clusterApiUrl)("devnet"),v="processed",x=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),p=s[0],g=s[1],j=Object(c.useState)([]),x=Object(u.a)(j,2),w=x[0],S=x[1],k=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),r(c.publicKey.toString());case 10:e.next=13;break;case 12:alert("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),r(c.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=I(),n=new b.b(f,y,t),console.log("ping"),e.next=6,n.rpc.startStuffOff({accounts:{baseAccount:h.publicKey,user:t.wallet.publicKey,systemProgram:m.programId},signers:[h]});case 6:return console.log("Created a new BaseAccount w/ address:",h.publicKey.toString()),e.next=9,E();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error creating BaseAccount account:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==p.length){e.next=3;break}return console.log("No gif link given!"),e.abrupt("return");case 3:return g(""),console.log("Gif link:",p),e.prev=5,t=I(),n=new b.b(f,y,t),e.next=10,n.rpc.addGif(p,{accounts:{baseAccount:h.publicKey,user:t.wallet.publicKey}});case 10:return console.log("GIF successfully sent to program",p),e.next=13,E();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log("Error sending GIF:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(){return e.apply(this,arguments)}}(),G=function(e){var t=e.target.value;g(t)},I=function(){var e=new l.Connection(O,v);return new b.a(e,window.solana,v)},E=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,n,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=I(),n=new b.b(f,y,t),e.next=5,n.account.baseAccount.fetch(h.publicKey);case 5:c=e.sent,console.log("Got the account",c),S(c.gifList),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in getGifList: ",e.t0),S(null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return window.addEventListener("load",k),function(){return window.removeEventListener("load",k)}}),[]),Object(c.useEffect)((function(){n&&(console.log("Fetching GIF list..."),E())}),[n]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:n?"authed-container":"container",children:Object(d.jsxs)("div",{className:"header-container",children:[Object(d.jsx)("p",{className:"header",children:"\ud83d\uddbc Vote your GIF - Up to Earn"}),Object(d.jsx)("p",{className:"sub-text",children:"Upload your GIF collection in the metaverse \u2728"}),!n&&Object(d.jsx)("button",{className:"cta-button connect-wallet-button",onClick:K,children:"Connect to Wallet"}),n&&(null===w?Object(d.jsx)("div",{className:"connected-container",children:Object(d.jsx)("button",{className:"cta-button submit-gif-button",onClick:A,children:"Do One-Time Initialization For GIF Program Account"})}):Object(d.jsxs)("div",{className:"connected-container",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N()},children:[Object(d.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:p,onChange:G}),Object(d.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(d.jsx)("div",{className:"gif-grid",children:w.map((function(e,t){return Object(d.jsxs)("div",{className:"gif-item",children:[Object(d.jsx)("img",{src:e.gifLink}),Object(d.jsx)("div",{style:{fontWeight:"bold",fontSize:21,color:"white"},children:"Owner"}),Object(d.jsxs)("span",{style:{color:"white"},children:[e.userAddress.toString()," (",e.vote.toString(),")"]})]},t)}))})]}))]})})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},43:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"mygif","instructions":[{"name":"startStuffOff","accounts":[{"name":"baseAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"addGif","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]},{"name":"upVote","accounts":[{"name":"baseAccount","isMut":true,"isSigner":false},{"name":"user","isMut":true,"isSigner":true}],"args":[{"name":"gifLink","type":"string"}]}],"accounts":[{"name":"BaseAccount","type":{"kind":"struct","fields":[{"name":"totalGifs","type":"u64"},{"name":"gifList","type":{"vec":{"defined":"ItemStruct"}}}]}}],"types":[{"name":"ItemStruct","type":{"kind":"struct","fields":[{"name":"gifLink","type":"string"},{"name":"userAddress","type":"publicKey"},{"name":"vote","type":"u64"}]}}],"metadata":{"address":"Ho9h78o7sZRrYuoFd9j8DFYUnwAcjYWVY2iJyDXxHpDX"}}')},84:function(e){e.exports=JSON.parse('{"_keypair":{"publicKey":{"0":162,"1":36,"2":68,"3":139,"4":40,"5":145,"6":173,"7":72,"8":4,"9":248,"10":60,"11":39,"12":58,"13":23,"14":107,"15":23,"16":130,"17":69,"18":31,"19":139,"20":128,"21":30,"22":38,"23":125,"24":156,"25":33,"26":232,"27":7,"28":86,"29":122,"30":61,"31":162},"secretKey":{"0":59,"1":101,"2":79,"3":211,"4":21,"5":164,"6":50,"7":145,"8":42,"9":180,"10":118,"11":157,"12":9,"13":212,"14":12,"15":135,"16":55,"17":255,"18":222,"19":41,"20":168,"21":224,"22":148,"23":184,"24":112,"25":146,"26":246,"27":120,"28":77,"29":244,"30":191,"31":171,"32":162,"33":36,"34":68,"35":139,"36":40,"37":145,"38":173,"39":72,"40":4,"41":248,"42":60,"43":39,"44":58,"45":23,"46":107,"47":23,"48":130,"49":69,"50":31,"51":139,"52":128,"53":30,"54":38,"55":125,"56":156,"57":33,"58":232,"59":7,"60":86,"61":122,"62":61,"63":162}}}')},90:function(e,t,n){},91:function(e,t){},94:function(e,t){}},[[148,1,2]]]);
//# sourceMappingURL=main.20da7a6d.chunk.js.map