UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c=n.img,l=n.title,f=void 0===n.spacing?0:n.spacing,s=n.href,p=n.target,v=n.style,g=n.on;void 0!==g&&EACH(g,function(t,n){g[n]=function(n){t(n,e)}}),o=A({style:COMBINE_DATA({origin:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},extend:v}),href:s,target:p,on:g}),void 0!==l&&o.prepend(i=DIV({c:void 0===l?"":l})),void 0!==c&&o.prepend(DIV({style:{marginBottom:void 0!==l?f:0},c:c})),e.setTitle=r=function(t){i.empty(),i.append(t)},e.getImg=d=function(){return c},e.getDom=u=function(){return o},e.tap=a=function(){void 0!==g&&void 0!==g.tap&&g.tap()}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l=n.img,f=n.title,s=void 0===n.spacing?0:n.spacing,p=n.href,v=n.target,g=n.style,y=n.on;void 0!==y&&EACH(y,function(t,n){y[n]=function(n){t(n,e)}}),o=A({style:COMBINE_DATA({origin:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},extend:g}),href:p,target:v,on:y,c:[i=DIV({style:{flt:"left"},c:void 0===f?"":f}),CLEAR_BOTH()]}),void 0!==l&&(l.addStyle({flt:"left"}),void 0===l.getStyle("margin")&&void 0===l.getStyle("marginRight")&&l.addStyle({marginRight:s}),o.prepend(l),r=EVENT({node:l,name:"load"},function(){i.addStyle({marginTop:(l.getHeight()-i.getHeight())/2}),r.remove()})),e.setTitle=d=function(t){i.empty(),i.append(t)},e.getImg=u=function(){return l},e.getDom=a=function(){return o},e.tap=c=function(){void 0!==y&&void 0!==y.tap&&y.tap()}}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s,p,v=n.name,g=n.label,y=n.value,S=n.wrapperStyle,m=n.inputStyle,A=n.on;void 0!==A&&EACH(A,function(t,n){A[n]=function(n){t(n,e)}}),o=DIV({style:{position:"relative"},on:{tap:function(t){i.toggleCheck(),t.stop()}},c:[i=INPUT({style:{flt:"left",marginRight:5},name:v,type:"checkbox",on:COMBINE_DATA({origin:{tap:function(t){t.stop()}},extend:void 0!==A?A:{}}),value:y}),r=SPAN({style:{flt:"left",cursor:"pointer"},c:g}),CLEAR_BOTH()]}),o.isValidWrapper=!0,e.getDom=d=function(){return o},e.getName=u=function(){return v},e.getValue=a=function(){return i.getValue()},e.setValue=c=function(t){i.setValue(t)},e.select=l=function(){i.select()},e.blur=f=function(){i.blur()},e.addWrapperStyle=s=function(t){o.addStyle(t)},void 0!==S&&s(S),e.addInputStyle=p=function(t){i.addStyle(t)},void 0!==m&&p(m)}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s,p,v,g,y,S,m=n.name,A=n.type,E=n.placeholder,C=n.value,h=n.wrapperStyle,D=n.inputStyle,T=n.on,I=n.isHidePlaceholder,U=COMBINE_DATA({origin:{position:"absolute",top:0,color:"#999",cursor:"text"},extend:void 0!==D&&"center"===D.textAlign?{left:0,width:"100%",textAlign:"center"}:{left:void 0===C?0:C.length}});void 0!==T&&EACH(T,function(t,n){T[n]=function(n){t(n,e)}}),i=DIV({style:{padding:5,backgroundColor:"#FFF"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),d=UUI.TEXT_BUTTON({style:U,title:E}),r=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"transparent"},name:m,type:A,value:C,on:{change:function(t){void 0!==u&&u(),void 0!==T&&void 0!==T.change&&T.change(t,e)},keydown:function(t){o=DELAY(function(){u()}),void 0!==T&&void 0!==T.keydown&&T.keydown(t,e)},keyup:function(t){u(),void 0!==T&&void 0!==T.keyup&&T.keyup(t,e)}}})]})}),u=RAR(function(){var t=r.getValue(),e=0,n=r.getStyle("fontSize"),o=void 0===n?12:INTEGER(n);"center"===r.getStyle("textAlign")?(d.addStyle({left:0,width:"100%",textAlign:"center"}),""===t?d.show():d.hide()):I===!0?(d.addStyle({left:0,width:"auto",textAlign:"left"}),""===t?d.show():d.hide()):(REPEAT(t.length,function(n){var o=t.charAt(n);e+=escape(o).length>4?1.8:1}),d.addStyle({left:e*o/1.6+(e>0?5:0),width:"auto",textAlign:"left"}))}),i.addRemoveHandler(function(){void 0!==o&&o.remove()}),i.isValidWrapper=!0,e.getInputDom=a=function(){return r},e.getDom=c=function(){return i},e.getName=l=function(){return m},e.getValue=f=function(){return r.getValue()},e.setValue=s=function(t){r.setValue(t)},e.select=p=function(){r.select()},e.focus=v=function(){r.focus()},e.blur=g=function(){r.blur()},e.addWrapperStyle=y=function(t){i.addStyle(t)},void 0!==h&&y(h),e.addInputStyle=S=function(t){r.addStyle(t),d.addStyle(t),d.addStyle(U)},void 0!==D&&S(D)}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s,p,v=n.name,g=n.value,y=n.options,S=n.wrapperStyle,m=n.selectStyle,A=n.on;void 0!==A&&EACH(A,function(t,n){A[n]=function(n){t(n,e)}}),o=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative"},c:i=SELECT({style:{width:"100%",border:"none"},on:A,name:v})}),o.isValidWrapper=!0,e.getDom=r=function(){return o},e.getName=d=function(){return v},e.getValue=u=function(){return i.getValue()},e.setValue=a=function(t){i.setValue(t)},void 0!==g&&a(g),e.select=c=function(){i.select()},e.blur=l=function(){i.blur()},e.addWrapperStyle=f=function(t){o.addStyle(t)},void 0!==S&&f(S),e.addSelectStyle=s=function(t){i.addStyle(t)},void 0!==m&&s(m),e.addOption=p=function(t){i.append(t)},void 0!==y&&EACH(y,function(t){p(t)})}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r=void 0===n?void 0:n.style,d=void 0===n?void 0:n.value,u=void 0===n?void 0:n.on;void 0!==u&&EACH(u,function(t,n){u[n]=function(n){t(n,e)}}),o=INPUT({type:"submit",style:COMBINE_DATA({origin:{border:"none",width:"100%",padding:"10px 0",cursor:"pointer"},extend:r}),on:u}),void 0!==d&&o.setValue(d),e.getDom=i=function(){return o}}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s,p,v,g=n.name,y=n.placeholder,S=n.value,m=n.wrapperStyle,A=n.textareaStyle,E=n.on;void 0!==E&&EACH(E,function(t,n){E[n]=function(n){t(n,e)}}),o=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative",height:100},c:i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:g,placeholder:y,on:E,value:S})}),o.isValidWrapper=!0,e.getTextareaDom=r=function(){return i},e.getDom=d=function(){return o},e.getName=u=function(){return g},e.getValue=a=function(){return i.getValue()},e.setValue=c=function(t){i.setValue(t)},e.select=l=function(){i.select()},e.focus=f=function(){i.focus()},e.blur=s=function(){i.blur()},e.addWrapperStyle=p=function(t){o.addStyle(t)},void 0!==m&&p(m),e.addTextareaStyle=v=function(t){i.addStyle(t)},void 0!==A&&v(A)}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s,p,v=n.wrapperStyle,g=n.formStyle,y=n.inputStyle,S=n.uploadingStyle,m=n.box,A=n.afterUpload,E=n.on;void 0!==E&&EACH(E,function(t,n){E[n]=function(n){t(n,e)}}),o=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[d=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+e.id}),i=FORM({action:"/"+m.boxName+"/__UPLOAD?"+CONFIG.version,target:"__UPLOAD_FORM_"+e.id,method:"POST",enctype:"multipart/form-data",style:{padding:5},c:[r=INPUT({type:"file",isMultiple:!0,style:{width:"100%",height:"100%",color:"#000",border:"none"},on:E}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]}),u=UUI.PANEL({wrapperStyle:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"},contentStyle:{backgroundColor:"#000",position:"absolute",top:"50%",left:"50%",width:100,marginLeft:-55,marginTop:-13,padding:5,textAlign:"center",borderRadius:10},c:"Uploading..."})]}),i.isValidWrapper=!0,EVENT({node:d,name:"load"},function(){var t=global["__UPLOAD_FORM_"+e.id],n=void 0!==t?t.fileDataSet:void 0,o=void 0!==t?t.errorCode:void 0;(void 0!==n||void 0!==o)&&(EACH(n,function(t,e){n[e]=UNPACK_DATA(t)}),r.setValue(""),A(n,o)),u.hide()}),EVENT({node:r,name:"change"},function(){""!==r.getValue()&&(u.show(),i.submit(!0))}),e.getDom=a=function(){return o},e.select=c=function(){r.select()},e.addWrapperStyle=l=function(t){o.addStyle(t)},void 0!==v&&l(v),e.addFormStyle=f=function(t){i.addStyle(t)},void 0!==g&&f(g),e.addInputStyle=s=function(t){r.addStyle(t)},void 0!==y&&s(y),e.addUploadingStyle=p=function(t){u.addWrapperStyle(t)},void 0!==S&&p(S)}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u=n.img,a=n.href,c=n.target,l=n.style,f=n.on;void 0!==f&&EACH(f,function(t,n){f[n]=function(n){t(n,e)}}),o=A({style:COMBINE_DATA({origin:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},extend:l}),href:a,target:c,on:f,c:u}),e.getImg=i=function(){return u},e.getDom=r=function(){return o},e.tap=d=function(){o.tap()}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f=void 0===n?void 0:n.style,s=void 0===n?void 0:n.c,p=void 0===n?void 0:n.on,v=void 0===n?void 0:n.isRequiringClearBoth,g=[],y={};void 0===i&&(i={}),void 0!==p&&EACH(p,function(t,n){p[n]=function(n){t(n,e)}}),o=UL({style:f,c:s,on:p}),e.getDom=d=function(){return o},e.addItem=u=function(t){var e=t.key,n=t.item,d=t.isFirst;void 0!==i[e]?(n.insertBefore(i[e]),g[FIND_KEY({data:g,value:i[e]})]=n,i[e].remove()):d===!0&&g.length>0?(n.insertBefore(g[0]),g.unshift(n)):(o.append(n),g.push(n)),i[e]=n,v===!0&&(void 0!==r&&r.remove(),r=CLEAR_BOTH().appendTo(o))},void 0!==n&&void 0!==n.items&&EACH(n.items,function(t,e){u({key:e,item:t})}),e.removeItem=a=function(t){var e=i[t],n=y[t];void 0!==e&&e.remove(),void 0!==n&&EACH(n,function(t){t()}),REMOVE({data:g,value:e}),REMOVE_AT({data:i,key:t}),REMOVE_AT({data:y,key:t})},e.addRemoveItemHandler=c=function(t,e){void 0===y[t]&&(y[t]=[]),y[t].push(e)},e.removeAllItems=l=function(){EACH(i,function(t,e){var n=y[e];t.remove(),void 0!==n&&EACH(n,function(t){t()})}),i={},g=[],y={}}}}),UUI.LOADING=CLASS({init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s,p,v=n.wrapperStyle,g=n.contentStyle,y=n.indicator,S=n.msg,m=n.on;o=UUI.MODAL({wrapperStyle:COMBINE_DATA({origin:{textAlign:"center"},extend:v}),contentStyle:g,isCannotClose:!0,c:[void 0===y?"":y,P({style:void 0===y?{}:{marginTop:10},c:S})],on:m}),e.getDom=i=function(){return o.getDom()},e.append=r=function(t){o.append(t)},e.prepend=d=function(t){o.prepend(t)},e.after=u=function(t){o.after(t)},e.before=a=function(t){o.before(t)},e.remove=c=function(){o.remove()},e.empty=l=function(){o.empty()},e.getChildren=f=function(){return o.getChildren()},e.addWrapperStyle=s=function(t){o.addWrapperStyle(t)},e.addContentStyle=p=function(t){o.addContentStyle(t)}}}),UUI.MODAL=CLASS({init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s,p,v,g,y,S,m,A,E=void 0===n?void 0:n.c,C=void 0===n?void 0:n.wrapperStyle,h=void 0===n?void 0:n.contentStyle,D=void 0===n?void 0:n.xStyle,T=void 0===n?void 0:n.xImg,I=void 0===n?void 0:n.isCannotClose,U=void 0===n?void 0:n.on;void 0!==U&&EACH(U,function(t,n){U[n]=function(n){t(n,e)}}),void 0===T&&I!==!0&&(T=IMG({src:UUI.R("x.png")})),o=DIV({c:[i=DIV(),I===!0?"":UUI.IMG_BUTTON({style:COMBINE_DATA({origin:{position:"absolute"},extend:void 0===D?{top:-20,right:-20,padding:10}:D}),img:T,on:{tap:function(){A()},mouseover:function(){S({opacity:.8})},mouseout:function(){S({opacity:1})}}})],on:U}).appendTo(BODY),a=RAR(function(){var t,e=(WIN_WIDTH()-o.getWidth())/2+SCROLL_LEFT(),n=(WIN_HEIGHT()-o.getHeight())/2+SCROLL_TOP();o.addStyle({position:"absolute",left:0>e?0:e,top:0>n?0:n}),(t=function(e){EACH(e,function(e){e.type===IMG&&EVENT({node:e,name:"load"},function(){a()}),void 0!==e.getChildren&&t(e.getChildren())})})(o.getChildren())}),o.addShowHandler(a),r=EVENT({name:"resize"},a),d=EVENT({name:"scroll"},a),u=EVENT({name:"keydown"},function(t){27===t.getKeyCode()&&I!==!0&&A()}),o.addRemoveHandler(function(){r.remove(),d.remove(),u.remove()}),e.getDom=c=function(){return o},e.append=l=function(t){i.append(t),a()},void 0!==E&&EACH(E,function(t){l(t)}),e.prepend=f=function(t){i.prepend(t),a()},e.after=s=function(t){o.after(t),a()},e.before=p=function(t){o.before(t),a()},e.remove=v=function(){o.remove()},e.empty=g=function(){i.empty()},e.getChildren=y=function(){return i.getChildren()},e.addWrapperStyle=S=function(t){o.addStyle(t),a()},void 0!==C&&S(C),e.addContentStyle=m=function(t){i.addStyle(t),a()},void 0!==h&&m(h),e.close=A=function(){void 0!==U&&void 0!==U.close?U.close(e)!==!1&&v():v()}}}),UUI.NOTICE=CLASS({init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s,p,v=n.wrapperStyle,g=n.contentStyle,y=n.isCannotClose,S=n.on,m=n.msg;o=UUI.MODAL({wrapperStyle:COMBINE_DATA({origin:{textAlign:"center"},extend:v}),contentStyle:g,isCannotClose:!0,on:S,c:m}),e.getDom=i=function(){return o.getDom()},e.append=r=function(t){o.append(t)},e.prepend=d=function(t){o.prepend(t)},e.after=u=function(t){o.after(t)},e.before=a=function(t){o.before(t)},e.remove=c=function(){o.remove()},e.empty=l=function(){o.empty()},e.getChildren=f=function(){return o.getChildren()},e.addWrapperStyle=s=function(t){o.addWrapperStyle(t)},e.addContentStyle=p=function(t){o.addContentStyle(t)},y!==!0&&DELAY(2,function(){o.close()})}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s=void 0===n?void 0:n.c,p=void 0===n?void 0:n.wrapperStyle,v=void 0===n?void 0:n.contentStyle,g=void 0===n?void 0:n.on;void 0!==g&&EACH(g,function(t,n){g[n]=function(n){t(n,e)}}),o=DIV({c:i=DIV(),on:g}),e.getDom=r=function(){return o},e.append=d=function(t){i.append(t)},void 0!==s&&EACH(s,function(t){d(t)}),e.prepend=u=function(t){i.prepend(t)},e.empty=a=function(){i.empty()},e.getChildren=c=function(){return i.getChildren()},e.addWrapperStyle=l=function(t){o.addStyle(t)},void 0!==p&&l(p),e.addContentStyle=f=function(t){i.addStyle(t)},void 0!==v&&f(v)}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c=void 0===n?void 0:n.style,l=void 0===n?void 0:n.c,f=void 0===n?void 0:n.trs,s=void 0===n?void 0:n.on,p=[],v={};void 0===f&&(f={}),void 0!==s&&EACH(s,function(t,n){s[n]=function(n){t(n,e)}}),o=TABLE({style:c,c:l,on:s}),e.getDom=i=function(){return o},e.addTR=r=function(t){var e=t.key,n=t.tr,i=t.isFirst;void 0!==f[e]?(n.insertBefore(f[e]),p[FIND_KEY({data:p,value:f[e]})]=n,f[e].remove()):i===!0&&p.length>0?(n.insertBefore(p[0]),p.unshift(n)):(o.append(n),p.push(n)),f[e]=n},EACH(f,function(t){p.push(t),o.append(t)}),e.removeTR=d=function(t){var e=f[t],n=v[t];void 0!==e&&e.remove(),void 0!==n&&EACH(n,function(t){t()}),REMOVE({data:p,value:e}),REMOVE_AT({data:f,key:t}),REMOVE_AT({data:v,key:t})},e.addRemoveTRHandler=u=function(t,e){void 0===v[t]&&(v[t]=[]),v[t].push(e)},e.removeAllTRs=a=function(){EACH(f,function(t,e){var n=v[e];t.remove(),void 0!==n&&EACH(n,function(t){t()})}),f={},p=[],v={}}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a=n.title,c=n.href,l=n.target,f=n.style,s=n.on;void 0!==s&&EACH(s,function(t,n){s[n]=function(n){t(n,e)}}),o=A({style:COMBINE_DATA({origin:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},extend:f}),href:c,target:l,on:s,c:i=SPAN({c:void 0===a?void 0===c?"":c:a})}),e.setTitle=r=function(t){i.empty(),i.append(t)},e.getDom=d=function(){return o},e.tap=u=function(){o.tap()}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l=void 0===n?void 0:n.errorMsgs,f=void 0===n?void 0:n.on,s=void 0===n?void 0:n.c,p=void 0===n?void 0:n.style,v=void 0===n?void 0:n.errorMsgStyle,g=[];void 0!==f&&EACH(f,function(t,n){f[n]=function(n){t(n,e)}}),o=FORM({style:p,c:s,on:f}),o.addRemoveHandler(function(){EACH(g,function(t){t.remove()})}),e.getDom=i=function(){return o},e.getData=r=function(){return o.getData()},e.setData=d=function(t){return o.setData(t)},e.submit=u=function(){o.submit()},e.showErrors=a=function(t){var n=COPY_DATA(t),o=function(t){EACH(t.getChildren(),function(t){var e,i,r,d;void 0!==t.getValue&&void 0!==t.getName&&(e=t.getName(),i=n[e],void 0!==i&&void 0!==l&&(r=l[e][i.type],"function"==typeof r&&(r=r(void 0!==i.validParam?i.validParam:i.validParams)),(t.getParent().getParent().isValidWrapper===!0?t.getParent().getParent():t.getParent().isValidWrapper===!0?t.getParent():t).after(d=P({style:v,c:r})),REMOVE_AT({data:n,key:e}),g.push(DELAY(2,function(t){d.remove(),REMOVE({data:g,value:t})})))),o(t)})};o(e)},e.getErrorMsgs=c=function(t){var n=COPY_DATA(t),o=[],i=function(t){EACH(t.getChildren(),function(t){var e,r,d;void 0!==t.getValue&&void 0!==t.getName&&(e=t.getName(),r=n[e],void 0!==r&&void 0!==l&&(d=l[e][r.type],"function"==typeof d&&(d=d(void 0!==r.validParam?r.validParam:r.validParams)),o.push(d),REMOVE_AT({data:n,key:e}))),i(t)})};return i(e),o}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,s=void 0===n?void 0:n.c,p=void 0===n?void 0:n.wrapperStyle,v=void 0===n?void 0:n.contentStyle,g=void 0===n?void 0:n.on;void 0!==g&&EACH(g,function(t,n){g[n]=function(n){t(n,e)}}),o=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:i=TD({style:{margin:0,padding:0}})}),on:g}),e.getDom=r=function(){return o},e.append=d=function(t){i.append(t)},void 0!==s&&EACH(s,function(t){d(t)}),e.prepend=u=function(t){i.prepend(t)},e.empty=a=function(){i.empty()},e.getChildren=c=function(){return i.getChildren()},e.addWrapperStyle=l=function(t){o.addStyle(t)},void 0!==p&&l(p),e.addContentStyle=f=function(t){i.addStyle(t)},void 0!==v&&f(v)}});