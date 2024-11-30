(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{4688:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return a(6503)}])},6503:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var s=a(4246),r=a(7378),n=a(3662),i=a(8579),c=a.n(i),l=a(2696),o=a(6256),u=e=>{let{items:t,cartId:a}=e,r=async()=>{let e={...t,quantity:t.quantity+1};await i(e)},n=async()=>{if(t.quantity>1){let e={...t,quantity:t.quantity-1};await i(e)}else await u()},i=async e=>{let s=(0,l.JU)(o.fs,"carts",a),r=(await (0,l.QT)(s)).data();if(!r){console.error("Cart data is undefined");return}let n=r.items.map(a=>a.menuItemId===t.menuItemId?e:a);await (0,l.r7)(s,{items:n.filter(Boolean)})},u=async()=>{let e=(0,l.JU)(o.fs,"carts",a),s=(await (0,l.QT)(e)).data();if(!s){console.error("Cart data is undefined");return}let r=s.items.filter(e=>e.menuItemId!==t.menuItemId);await (0,l.r7)(e,{items:r.filter(Boolean)})};return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mt-5",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-16 h-16 bg-foreground rounded-lg relative",children:(0,s.jsx)(c(),{src:t.imageURL,alt:t.name,layout:"fill",objectFit:"cover",className:"rounded-lg"})}),(0,s.jsxs)("div",{className:"ml-5",children:[(0,s.jsx)("h2",{className:"text-lg font-semibold",children:t.name}),(0,s.jsx)("p",{className:"text-sm",children:"Rice, anchovies, peanuts, egg, cucumber, sambal"}),(0,s.jsxs)("p",{className:"text-sm",children:["x",t.quantity]})]})]}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("p",{className:"text-lg font-semibold",children:["₱",t.price*t.quantity,".00"]}),(0,s.jsx)("button",{onClick:n,className:"ml-5 bg-foreground text-white px-2 py-1 rounded-lg",children:"-"}),(0,s.jsx)("button",{onClick:r,className:"ml-2 bg-foreground text-white px-2 py-1 rounded-lg",children:"+"})]})]}),(0,s.jsx)("hr",{className:"my-5"})]})},d=a(5332),m=a(6562),f=a(4895),g=a(886),x=()=>{let e=(0,n.useRouter)(),[t,a]=(0,r.useState)("dinein"),[i,c]=(0,r.useState)([]),[x,h]=(0,r.useState)(null),[p,b]=(0,r.useState)(""),[w,y]=(0,r.useState)(0);(0,r.useEffect)(()=>{let e=localStorage.getItem("tableNumber"),t=localStorage.getItem("method");y(Number(e)),a(t);let s=(0,m.Aj)(o.I8,e=>h(e));return()=>s()},[]),(0,r.useEffect)(()=>{let e=()=>{};if(!x)return;let t=(0,l.hJ)(o.fs,"carts"),a=(0,l.IO)(t,(0,l.ar)("customerId","==",x.uid));return e=(0,l.cf)(a,e=>{if(e.empty)c([]);else{let t=e.docs[0];b(t.id),c(t.data().items.map((e,t)=>({id:t,name:e.name,price:e.price,menuItemId:e.menuItemId,quantity:e.quantity,imageURL:e.imageURL||""})))}},e=>{console.error("Error fetching cart item count: ",e)}),()=>e()},[x,e]);let N=async e=>{e.preventDefault(),d.ZP.dismiss();let a=e.currentTarget;if(a.disabled=!0,"dine in"===t&&0!==w){var s;let e=(0,l.JU)(o.fs,"tables","table_".concat(w));if((null===(s=(await (0,l.QT)(e)).data())||void 0===s?void 0:s.status)==="occupied"){d.ZP.error("Table is already occupied");return}await (0,l.pl)(e,{tableNumber:w,status:"occupied"})}if(x){if(0===i.length){d.ZP.dismiss(),d.ZP.error("No items in cart"),a.disabled=!1;return}try{let e=i.map(async e=>{var t;let a=(0,l.JU)(o.fs,"menu",e.menuItemId),s=await (0,l.QT)(a);if(!s.exists())throw Error("Item ".concat(e.name," does not exist"));let r=(null===(t=s.data())||void 0===t?void 0:t.stock)||0;if(r<e.quantity)throw Error("Available stock for ".concat(e.name," is ").concat(r));await (0,l.r7)(a,{stock:r-e.quantity})});await Promise.all(e),await (0,l.i3)(o.fs,async e=>{let a;let s=(0,l.JU)(o.fs,"counters","checkoutCounter"),r=await e.get(s);r.exists()?(a=r.data().count+1,e.update(s,{count:(0,l.nP)(1)})):(a=1e3,e.set(s,{count:1e3}));let n=(0,l.hJ)(o.fs,"checkouts"),c=(0,f.Z)(a);await (0,l.ET)(n,{customerId:x.uid,items:i,status:"approved",tableNumber:w,transactionNumber:c,dineInOrTakeout:t,createdAt:new Date,orderNumber:a});let u=(0,l.JU)(o.fs,"carts",p);e.update(u,{items:[]}),d.ZP.success("Checkout successful!");let m=localStorage.getItem("cashier");(0,g.Z)(i,c,w,t,a,m)})}catch(e){d.ZP.error("Checkout failed. Please try again. "+e.message)}finally{d.ZP.success("Checkout successful!"),a.disabled=!1}}};return(0,s.jsxs)("div",{className:"py-5 px-40",children:[(0,s.jsx)("h2",{className:"text-lg lg:text-3xl font-bold uppercase",children:"My Order"}),i.length>0?i.map((e,t)=>(0,s.jsx)(u,{items:e,cartId:p},t)):(0,s.jsx)("p",{className:"text-center mt-5 text-lg",children:"No items in cart"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between mt-5",children:[(0,s.jsx)("h2",{className:"text-lg lg:text-3xl font-bold uppercase",children:"Total"}),(0,s.jsxs)("h2",{className:"text-lg lg:text-3xl font-bold uppercase",children:["₱",i.reduce((e,t)=>e+t.price*t.quantity,0),".00"]})]}),(0,s.jsx)("button",{onClick:e=>N(e),className:"bg-foreground border border-foreground hover:bg-foreground/20 hover:text-foreground text-white px-5 py-2 rounded-lg w-full mt-5",children:"Checkout"})]})]})}},4895:function(e,t){"use strict";t.Z=e=>{let t=new Date,a=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),n=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),c=String(t.getSeconds()).padStart(2,"0"),l=String(e).padStart(4,"0");return"TX".concat(a).concat(s).concat(r,"-").concat(n).concat(i).concat(c,"-").concat(l)}},886:function(e,t){"use strict";let a=async(e,t,a,s,r,n)=>{window.ipc.send("print-receipt",{items:e,transactionNumber:t,tableNumber:a,dineInOrTakeout:s,newOrderNumber:r,cashierName:n})};t.Z=a}},function(e){e.O(0,[888,774,179],function(){return e(e.s=4688)}),_N_E=e.O()}]);