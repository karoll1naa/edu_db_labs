(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{487:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,i,o,n,r,s,l,a,c){"boolean"!=typeof s&&(a=l,l=s,s=!1);var d,m="function"==typeof i?i.options:i;if(e&&e.render&&(m.render=e.render,m.staticRenderFns=e.staticRenderFns,m._compiled=!0,n&&(m.functional=!0)),o&&(m._scopeId=o),r?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},m._ssrRegister=d):t&&(d=s?function(){t.call(this,c(this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),d)if(m.functional){var h=m.render;m.render=function(e,t){return d.call(t),h(e,t)}}else{var v=m.beforeCreate;m.beforeCreate=v?[].concat(v,d):[d]}return i},n=o({render:function(){var e=this.$createElement;return(this._self._c||e)("ul",{ref:"timeline",staticClass:"timeline"},[this._t("default")],2)},staticRenderFns:[]},void 0,{name:"Timeline",props:{timelineTheme:{type:String,default:"#dbdde0"},timelineBg:{type:String,default:"#fff"}},mounted:function(){var e=this.$refs.timeline;e.style.setProperty("--timelineTheme",this.timelineTheme),e.style.setProperty("--timelineBg",this.timelineBg)}},void 0,!1,void 0,!1,void 0,void 0,void 0),r=o({},void 0,{name:"TimelineItemBase",props:{bgColor:{type:String,default:""},lineColor:{type:String,default:""},hollow:{type:Boolean,default:!1},iconSize:{type:String,default:""},fontColor:{type:String,default:"#37414a"}},data:function(){return{slotOthers:!1,iconSizeData:{small:{top:".28em",left:"-34px",width:"10px",height:"10px"},medium:{top:"0em",left:"-39.5px",height:"20px",width:"20px"},large:{top:"-0.5em",left:"-44px",height:"30px",width:"30px"}}}},computed:{circleStyle:function(){if(this.bgColor||this.lineColor||this.hollow||this.iconSize){var e={};return this.bgColor&&(e={"border-color":this.bgColor,"background-color":this.bgColor}),this.lineColor&&(e=Object.assign({},e,{"border-color":this.lineColor})),this.iconSizeData[this.iconSize]&&(e=Object.assign({},e,this.iconSizeData[this.iconSize])),e}},itemStyle:function(){return{color:this.fontColor}},slotClass:function(){var e="";return this.slotOthers?e="timeline-others":this.hollow&&(e="hollow"),e}},mounted:function(){this.slotOthers=!!this.$refs.others.innerHTML}},void 0,void 0,void 0,!1,void 0,void 0,void 0),s=o({render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"timeline-item",style:this.itemStyle},[t("div",{ref:"others",staticClass:"timeline-circle",class:this.slotClass,style:this.circleStyle},[this._t("others")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[]},void 0,{extends:r},void 0,!1,void 0,!1,void 0,void 0,void 0),l=o({render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"timeline-title",style:this.itemStyle},[t("div",{ref:"others",staticClass:"timeline-circle timeline-title-circle",class:this.slotClass,style:this.circleStyle},[this._t("others")],2),this._v(" "),this._t("default")],2)},staticRenderFns:[]},void 0,{extends:r},void 0,!1,void 0,!1,void 0,void 0,void 0);"undefined"!=typeof window&&window.Vue&&(window.Vue.component(n.name,n),window.Vue.component(s.name,s),window.Vue.component(l.name,l)),t.Timeline=n,t.TimelineItem=s,t.TimelineTitle=l},504:function(e,t,i){"use strict";i.r(t);var o=i(487),n={name:"sample-timeline",components:{Timeline:o.Timeline,TimelineItem:o.TimelineItem,TimelineTitle:o.TimelineTitle}},r=i(13),s=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("timeline",{attrs:{"timeline-theme":"lightblue"}},[t("timeline-title",{attrs:{"bg-color":"#09FFAA"}},[e._v("Prehistoric hunters cross over into Canada from Asia")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#9dd8e0"}},[e._v("\tLeif Ericsson leads a Viking expedition to the New World")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#9dFFe0"}},[e._v("First Year 1B")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#FFF000"}},[e._v("Accepted Computer Engineering")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#cFe8eF"}},[e._v("The Iroquois Confederacy is formed")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#97Aec8"}},[e._v("John Cabot reaches Newfoundland (or perhaps Cape Breton)")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#5744D4"}},[e._v("Jacques Cartier first explores the St. Lawrence region")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#0F4859"}},[e._v("Second Year 2B")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#094341"}},[e._v("Samuel de Champlain establishes a French colony at Québec City")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#825F03"}},[e._v("Hudson’s Bay Company is formed")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#954F08"}},[e._v("Expulsion of the Acadians")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#A71490"}},[e._v("Battle of the Plains of Abraham: Québec City is captured")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#C084A9"}},[e._v("New France is formally ceded to Britain; Pontiac Rebellion erupts")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#7B71C2"}},[e._v("Loyalist refugees begin arriving after the American Revolution")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#2348B1"}},[e._v("War of 1812: U.S. invades Canada")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#915F15"}},[e._v("Rebellions against British rule in Upper and Lower Canada")]),e._v(" "),t("timeline-item",{attrs:{"bg-color":"#0909FA"}},[e._v("\tResponsible government is won, first in Nova Scotia, then in Canada")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);