(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213744"],{ad6a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.property?r("FormComponent",{attrs:{type:"view",data:e.property,fields:e.fields,"on-click-delete":e.deleteFunction,"on-click-return":e.returnFunction,"on-click-edit":e.editFunction,title:"Visualizar Propriedade"}}):e._e()],1)},o=[],i=(r("7f7f"),r("96cf"),r("3b8d")),c=r("cebc"),a=r("8477"),u=r("2f62"),s={components:{FormComponent:a["a"]},data:function(){return{property:null,fields:[{name:"Nome",key:"name",type:"text"},{name:"Area Total",key:"total_area",type:"text"},{name:"Cidade",key:"city",type:"text"},{name:"Produtor",key:"growerName",type:"text"}]}},computed:Object(c["a"])({},Object(u["c"])(["getPropertyById","getGrowerById"])),methods:Object(c["a"])({},Object(u["b"])(["fetchProperties","fetchGrowers","deleteProperty"]),{editFunction:function(){this.$router.push("/properties/edit/".concat(this.property.id))},returnFunction:function(){this.$router.push("/properties")},deleteFunction:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteProperty(this.property.id);case 2:this.$router.push("/properties");case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$route.params,e.next=3,this.fetchProperties();case 3:return this.getPropertyById(t.id)||this.$router.push("/growers"),r=this.getPropertyById(t.id),e.next=7,this.fetchGrowers();case 7:n=this.getGrowerById(r.growerId),r.growerName=n.name,this.property=r;case 10:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},p=s,d=r("2877"),h=Object(d["a"])(p,n,o,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d213744.bff5d23c.js.map