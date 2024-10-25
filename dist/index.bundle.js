/*! For license information please see index.bundle.js.LICENSE.txt */
(()=>{"use strict";var t,e={515:(t,e,n)=>{n.r(e),n.d(e,{default:()=>P});const o="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function r(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent&&t.attachEvent("on".concat(e),n)}function i(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent&&t.detachEvent("on".concat(e),n)}function a(t,e){const n=e.slice(0,e.length-1);for(let e=0;e<n.length;e++)n[e]=t[n[e].toLowerCase()];return n}function c(t){"string"!=typeof t&&(t="");const e=(t=t.replace(/\s/g,"")).split(",");let n=e.lastIndexOf("");for(;n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}const s={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":o?173:189,"=":o?61:187,";":o?59:186,"'":222,"[":219,"]":221,"\\":220},l={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},u={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},f={16:!1,18:!1,17:!1,91:!1},p={};for(let t=1;t<20;t++)s["f".concat(t)]=111+t;let d=[],h=null,y="all";const _=new Map,g=t=>s[t.toLowerCase()]||l[t.toLowerCase()]||t.toUpperCase().charCodeAt(0);function m(t){y=t||"all"}function v(){return y||"all"}function w(t){let e=t.keyCode||t.which||t.charCode;const n=d.indexOf(e);if(n>=0&&d.splice(n,1),t.key&&"meta"===t.key.toLowerCase()&&d.splice(0,d.length),93!==e&&224!==e||(e=91),e in f){f[e]=!1;for(const t in l)l[t]===e&&(P[t]=!1)}}function O(t){if(void 0===t)Object.keys(p).forEach((t=>{Array.isArray(p[t])&&p[t].forEach((t=>C(t))),delete p[t]})),E(null);else if(Array.isArray(t))t.forEach((t=>{t.key&&C(t)}));else if("object"==typeof t)t.key&&C(t);else if("string"==typeof t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];let[r,i]=n;"function"==typeof r&&(i=r,r=""),C({key:t,scope:r,method:i,splitKey:"+"})}}const C=t=>{let{key:e,scope:n,method:o,splitKey:r="+"}=t;c(e).forEach((t=>{const e=t.split(r),i=e.length,c=e[i-1],s="*"===c?"*":g(c);if(!p[s])return;n||(n=v());const u=i>1?a(l,e):[],f=[];p[s]=p[s].filter((t=>{const e=(!o||t.method===o)&&t.scope===n&&function(t,e){const n=t.length>=e.length?t:e,o=t.length>=e.length?e:t;let r=!0;for(let t=0;t<n.length;t++)-1===o.indexOf(n[t])&&(r=!1);return r}(t.mods,u);return e&&f.push(t.element),!e})),f.forEach((t=>E(t)))}))};function b(t,e,n,o){if(e.element!==o)return;let r;if(e.scope===n||"all"===e.scope){r=e.mods.length>0;for(const t in f)Object.prototype.hasOwnProperty.call(f,t)&&(!f[t]&&e.mods.indexOf(+t)>-1||f[t]&&-1===e.mods.indexOf(+t))&&(r=!1);(0!==e.mods.length||f[16]||f[18]||f[17]||f[91])&&!r&&"*"!==e.shortcut||(e.keys=[],e.keys=e.keys.concat(d),!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0)))}}function k(t,e){const n=p["*"];let o=t.keyCode||t.which||t.charCode;if(!P.filter.call(this,t))return;if(93!==o&&224!==o||(o=91),-1===d.indexOf(o)&&229!==o&&d.push(o),["ctrlKey","altKey","shiftKey","metaKey"].forEach((e=>{const n=u[e];t[e]&&-1===d.indexOf(n)?d.push(n):!t[e]&&d.indexOf(n)>-1?d.splice(d.indexOf(n),1):"metaKey"===e&&t[e]&&3===d.length&&(t.ctrlKey||t.shiftKey||t.altKey||(d=d.slice(d.indexOf(n))))})),o in f){f[o]=!0;for(const t in l)l[t]===o&&(P[t]=!0);if(!n)return}for(const e in f)Object.prototype.hasOwnProperty.call(f,e)&&(f[e]=t[u[e]]);t.getModifierState&&(!t.altKey||t.ctrlKey)&&t.getModifierState("AltGraph")&&(-1===d.indexOf(17)&&d.push(17),-1===d.indexOf(18)&&d.push(18),f[17]=!0,f[18]=!0);const r=v();if(n)for(let o=0;o<n.length;o++)n[o].scope===r&&("keydown"===t.type&&n[o].keydown||"keyup"===t.type&&n[o].keyup)&&b(t,n[o],r,e);if(!(o in p))return;const i=p[o],a=i.length;for(let n=0;n<a;n++)if(("keydown"===t.type&&i[n].keydown||"keyup"===t.type&&i[n].keyup)&&i[n].key){const o=i[n],{splitKey:a}=o,c=o.key.split(a),s=[];for(let t=0;t<c.length;t++)s.push(g(c[t]));s.sort().join("")===d.sort().join("")&&b(t,o,r,e)}}function P(t,e,n){d=[];const o=c(t);let i=[],s="all",u=document,f=0,y=!1,m=!0,v="+",C=!1,b=!1;for(void 0===n&&"function"==typeof e&&(n=e),"[object Object]"===Object.prototype.toString.call(e)&&(e.scope&&(s=e.scope),e.element&&(u=e.element),e.keyup&&(y=e.keyup),void 0!==e.keydown&&(m=e.keydown),void 0!==e.capture&&(C=e.capture),"string"==typeof e.splitKey&&(v=e.splitKey),!0===e.single&&(b=!0)),"string"==typeof e&&(s=e),b&&O(t,s);f<o.length;f++)i=[],(t=o[f].split(v)).length>1&&(i=a(l,t)),(t="*"===(t=t[t.length-1])?"*":g(t))in p||(p[t]=[]),p[t].push({keyup:y,keydown:m,scope:s,mods:i,shortcut:o[f],method:n,key:o[f],splitKey:v,element:u});if(void 0!==u&&window){if(!_.has(u)){const t=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;return k(t,u)},e=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;k(t,u),w(t)};_.set(u,{keydownListener:t,keyupListenr:e,capture:C}),r(u,"keydown",t,C),r(u,"keyup",e,C)}if(!h){const t=()=>{d=[]};h={listener:t,capture:C},r(window,"focus",t,C)}}}function E(t){const e=Object.values(p).flat();if(e.findIndex((e=>{let{element:n}=e;return n===t}))<0){const{keydownListener:e,keyupListenr:n,capture:o}=_.get(t)||{};e&&n&&(i(t,"keyup",n,o),i(t,"keydown",e,o),_.delete(t))}if((e.length<=0||_.size<=0)&&(Object.keys(_).forEach((t=>{const{keydownListener:e,keyupListenr:n,capture:o}=_.get(t)||{};e&&n&&(i(t,"keyup",n,o),i(t,"keydown",e,o),_.delete(t))})),_.clear(),Object.keys(p).forEach((t=>delete p[t])),h)){const{listener:t,capture:e}=h;i(window,"focus",t,e),h=null}}const j={getPressedKeyString:function(){return d.map((t=>{return e=t,Object.keys(s).find((t=>s[t]===e))||(t=>Object.keys(l).find((e=>l[e]===t)))(t)||String.fromCharCode(t);var e}))},setScope:m,getScope:v,deleteScope:function(t,e){let n,o;t||(t=v());for(const e in p)if(Object.prototype.hasOwnProperty.call(p,e))for(n=p[e],o=0;o<n.length;)n[o].scope===t?n.splice(o,1).forEach((t=>{let{element:e}=t;return E(e)})):o++;v()===t&&m(e||"all")},getPressedKeyCodes:function(){return d.slice(0)},getAllKeyCodes:function(){const t=[];return Object.keys(p).forEach((e=>{p[e].forEach((e=>{let{key:n,scope:o,mods:r,shortcut:i}=e;t.push({scope:o,shortcut:i,mods:r,keys:n.split("+").map((t=>g(t)))})}))})),t},isPressed:function(t){return"string"==typeof t&&(t=g(t)),-1!==d.indexOf(t)},filter:function(t){const e=t.target||t.srcElement,{tagName:n}=e;let o=!0;const r="INPUT"===n&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(e.type);return(e.isContentEditable||(r||"TEXTAREA"===n||"SELECT"===n)&&!e.readOnly)&&(o=!1),o},trigger:function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(p).forEach((n=>{p[n].filter((n=>n.scope===e&&n.shortcut===t)).forEach((t=>{t&&t.method&&t.method()}))}))},unbind:O,keyMap:s,modifier:l,modifierMap:u};for(const t in j)Object.prototype.hasOwnProperty.call(j,t)&&(P[t]=j[t]);if("undefined"!=typeof window){const t=window.hotkeys;P.noConflict=e=>(e&&window.hotkeys===P&&(window.hotkeys=t),P),window.hotkeys=P}},198:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(n){var o=t.call(this,n)||this;return e.NAME="game"+e.COUNT++,o.view.style.width="100%",document.body.prepend(o.view),o}return o(e,t),Object.defineProperty(e.prototype,"stageWidth",{get:function(){return this.screen.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stageHeight",{get:function(){return this.screen.height},enumerable:!1,configurable:!0}),e.NAME="SNAKE",e.COUNT=0,e}(PIXI.Application);e.default=r},738:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.Facade,a=n(198),c=n(414),s=n(312),l=function(t){function e(e){var n=t.call(this,e)||this;return n._game=null,n}return r(e,t),e.getInstance=function(t){return null==t?null:(null==i.instanceMap[t]&&(i.instanceMap[t]=new e(t)),i.instanceMap[t])},e.prototype.initializeModel=function(){t.prototype.initializeModel.call(this)},e.prototype.initializeView=function(){t.prototype.initializeView.call(this)},e.prototype.initializeController=function(){t.prototype.initializeController.call(this),this.registerCommand(e.STARTUP,s.default)},e.prototype.startup=function(){var t=document.documentElement.clientWidth||document.body.clientWidth,n=document.documentElement.clientHeight||document.body.clientHeight,o=n>t?n/t*640:t/n*640;this.game=new a.default({width:640,height:o,backgroundColor:1087931}),this.sendNotification(e.STARTUP,this.game),this.removeCommand(e.STARTUP),this.sendNotification(c.default.TO_LOADING,{from:null})},e.prototype.destory=function(){this.game&&(this.game.destroy(!0),this.game=null),window.TweenMax.killAll()},Object.defineProperty(e.prototype,"game",{get:function(){return this._game},set:function(t){this._game=t},enumerable:!1,configurable:!0}),e.STARTUP="startup",e.instance=null,e}(i);e.default=l},25:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(330),c=n(515),s=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(t){console.log("SceneCommand notification:",t);var n=t.getName(),o=t.getBody(),r=this.facade.retrieveProxy(a.default.NAME);switch(n){case e.GAME_START:r.resetGameData(),setInterval((function(){r.pause||(r.move(),r.check())}),200),(0,c.default)("up,down,left,right,space",(function(t,e){switch(e.key){case"up":r.current_direction=a.Direction.Up;break;case"down":r.current_direction=a.Direction.Down;break;case"left":r.current_direction=a.Direction.Left;break;case"right":r.current_direction=a.Direction.Right;break;case"space":r.pause=!r.pause}}));break;case e.CHANGE_DIRECTION:r.current_direction!==o&&(r.current_direction=o);case e.GAME_OVER:}},e.GAME_START="game_start",e.GAME_OVER="game_over",e.CHANGE_DIRECTION="change_angle",e}(i);e.default=s},414:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(158),c=n(141),s=n(977),l=n(330),u=n(25),f=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(t){console.log("SceneCommand notification:",t);var n=this.facade.game,o=t.getName(),r=t.getBody().from;switch(r&&r instanceof a.default&&(r.destroy(),r.removeAllChildren(),r.removeThis()),o){case e.TO_LOADING:var i=this.facade.retrieveMediator(c.default.NAME).loadingScene;n.stage.addChild(i),i.init();break;case e.TO_GAME:var f=this.facade.retrieveProxy(l.default.NAME),p=this.facade.retrieveMediator(s.default.NAME).gameScene;n.stage.addChild(p),p.init(f),this.sendNotification(u.default.GAME_START)}},e.TO_LOADING="to_loading",e.TO_GAME="to_game",e}(i);e.default=f},61:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(414),c=n(25),s=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(){this.facade.registerCommand(a.default.TO_LOADING,a.default),this.facade.registerCommand(a.default.TO_GAME,a.default),this.facade.registerCommand(c.default.GAME_START,c.default),this.facade.registerCommand(c.default.GAME_OVER,c.default),this.facade.registerCommand(c.default.CHANGE_DIRECTION,c.default)},e}(i);e.default=s},377:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(330),c=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(t){var e=t.getBody();this.facade.registerProxy(new a.default(e))},e}(i);e.default=c},312:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.MacroCommand,a=n(377),c=n(778),s=n(61),l=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.initializeMacroCommand=function(){this.addSubCommand(a.default),this.addSubCommand(c.default),this.addSubCommand(s.default)},e}(i);e.default=l},778:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.SimpleCommand,a=n(189),c=n(141),s=n(400),l=n(977),u=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.execute=function(t){var e=t.getBody(),n=new a.default(e);this.facade.registerMediator(new c.default(n));var o=new s.default(e);this.facade.registerMediator(new l.default(o))},e}(i);e.default=u},977:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.Mediator,a=n(330),c=n(25),s=function(t){function e(n){var o=t.call(this,e.NAME,n)||this;return o.gameScene.on(c.default.CHANGE_DIRECTION,(function(t){return o.sendNotification(c.default.CHANGE_DIRECTION,t)})),o}return r(e,t),e.prototype.listNotificationInterests=function(){return[a.default.ADD_BEAN,a.default.UPDATE_LOCATION,a.default.HIT]},e.prototype.handleNotification=function(t){var e=t.getName(),n=t.getBody();switch(t.getType(),e){case a.default.UPDATE_LOCATION:this.gameScene.renderSnake(n);break;case a.default.HIT:this.gameScene.removeBean(n);break;case a.default.ADD_BEAN:this.gameScene.addBean(n)}},Object.defineProperty(e.prototype,"gameScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="game_scene_mediator",e}(i);e.default=s},141:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=puremvc.Mediator,a=n(414),c=function(t){function e(n){var o=t.call(this,e.NAME,n)||this;return o.loadingScene.on("init_complete",o.initComplete,o),o}return r(e,t),e.prototype.initComplete=function(){var t=this,e=new PIXI.Loader;e.add(["./resources/images/animal1.png","./resources/images/animal2.png","./resources/images/animal3.png","./resources/images/animal4.png","./resources/images/animal5.png","./resources/images/animal6.png","./resources/images/animal7.png","./resources/images/animal8.png","./resources/images/snake-body1.png","./resources/images/snake-body2.png","./resources/images/snake-head.png","./resources/images/sp_game_background.jpg"]),e.once("complete",(function(){setTimeout((function(){t.sendNotification(a.default.TO_GAME,{from:t.loadingScene})}),500)})),e.on("progress",(function(e){console.log("加载百分比"+e.progress+"%"),t.loadingScene.setProgress(e.progress)})),e.load(),PIXI.sound.add({click:"./resources/music/click.mp3"})},Object.defineProperty(e.prototype,"loadingScene",{get:function(){return this.viewComponent},enumerable:!1,configurable:!0}),e.NAME="load_scene_mediator",e}(i);e.default=c},69:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=PIXI.Container,i=PIXI.Text,a=PIXI.Graphics,c=function(t){function e(e,n){void 0===e&&(e=""),void 0===n&&(n={fontSize:32,color:16777215,bgColor:4423155});var o=t.call(this)||this,r=new a;o.addChild(r);var c=n.fontSize||32,s=n.color||16777215,l=new i(e,{fill:s,fontSize:c});l.anchor.set(.5,.5),o.addChild(l);var u=l.width+40,f=l.height+20,p=n.bgColor||16711680;return r.beginFill(p),r.drawRoundedRect(-u/2,-f/2,u,f,8),r.endFill(),o.interactive=!0,o.on("pointerdown",(function(){PIXI.sound.play("click")})),o}return o(e,t),e}(r);e.default=c},158:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e){var n=t.call(this)||this;return n.game=null,n.stageWidth=0,n.stageHeight=0,n.game=e,n.stageWidth=e.stageWidth,n.stageHeight=e.stageHeight,n}return o(e,t),e.prototype.init=function(t){},e.prototype.destroy=function(){},e.prototype.removeAllChildren=function(t){void 0===t&&(t=this);var e=t.children;if(e&&e.length>0)for(var n=e.length-1;n>=0;n--){var o=e[n];this.removeAllChildren(o),o.parent&&o.parent.removeChild(o)}},e.prototype.removeThis=function(){this.parent&&this.parent.removeChild(this)},e}(PIXI.Container);e.default=r},852:function(t,e){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var r=PIXI.Container,i=PIXI.Sprite,a=function(t){function e(e,n,o){var r=t.call(this)||this;r.id=null,r.id=o;var a="./resources/images/animal".concat(parseInt(String(7*Math.random()+2)),".png"),c=i.from(a);return c.anchor.set(.5,.5),c.scale.set(.5,.5),c.x=e,c.y=n,c.name=o,r.addChild(c),r}return o(e,t),e}(r);e.default=a},400:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=PIXI.Container,a=PIXI.Sprite,c=n(158),s=n(331),l=n(852),u=n(108),f=n(263),p=function(t){function e(e){var n=t.call(this,e)||this;return n.snakeContainer=null,n.animalContainer=null,n}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this.addChild(a.from("./resources/images/sp_game_background.jpg"));var n=new i;this.addChild(n),this.animalContainer=n,this.initRenderGrid(),this.initRenderRocker()},e.prototype.initRenderGrid=function(){u.MapConfig.rows,u.MapConfig.cols,u.MapConfig.gridWidth,u.MapConfig.gridHeight;for(var t=u.MapConfig.mapData,e=0;e<t.length;e++)for(var n=t[e],o=0;o<n.length;o++){var r=n[o],i=new f.default(e,o,r);this.animalContainer.addChild(i)}},e.prototype.initRenderRocker=function(){var t=new s.default;this.addChild(t),t.x=40,t.y=this.stageHeight-50},e.prototype.renderSnake=function(t){this.snakeContainer&&this.snakeContainer.parent&&this.snakeContainer.parent.removeChild(this.snakeContainer),this.snakeContainer=new i,this.addChild(this.snakeContainer);for(var e=t.length-1;e>=0;e--){var n=t[e],o=n.row,r=n.col*u.MapConfig.gridHeight+u.MapConfig.gridHeight/2,c=o*u.MapConfig.gridWidth+u.MapConfig.gridWidth/2,s="./resources/images/snake-".concat(0===e?"head":e%2==0?"body2":"body1",".png"),l=a.from(s);l.scale.set(.5,.5),l.anchor.set(.5,.5),l.x=r,l.y=c,this.snakeContainer.addChild(l)}},e.prototype.addBean=function(t){var e=t.x,n=t.y,o=t.id,r=new l.default(e,n,o);this.addChild(r)},e.prototype.removeBean=function(t){for(var e=0;e<this.children.length;e++){var n=this.children[e];n instanceof l.default&&n.id===t&&this.removeChild(n)}},e.NAME="game_scene",e}(c.default);e.default=p},263:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=PIXI.Container,a=PIXI.Graphics,c=n(108),s=function(t){function e(e,n,o){var r=t.call(this)||this,i=c.MapConfig.gridColor[o],s=new a;s.lineStyle(2,16706423,1),s.beginFill(i),s.drawRect(0,0,c.MapConfig.gridWidth,c.MapConfig.gridHeight),s.endFill(),r.addChild(s);var l=n*c.MapConfig.gridWidth,u=e*c.MapConfig.gridHeight;return r.x=l,r.y=u,r}return r(e,t),e}(i);e.default=s},331:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=PIXI.Container,a=n(69),c=n(330),s=n(25),l=function(t){function e(){var e=t.call(this)||this,n=new a.default("左",{bgColor:16711680});n.x=100,e.addChild(n),n.interactive=!0,n.on("pointerdown",(function(){return e.parent.emit(s.default.CHANGE_DIRECTION,c.Direction.Left)}));var o=new a.default("右",{bgColor:16711680});o.x=220,e.addChild(o),o.interactive=!0,o.on("pointerdown",(function(){return e.parent.emit(s.default.CHANGE_DIRECTION,c.Direction.Right)}));var r=new a.default("上",{bgColor:16711680});r.x=460,e.addChild(r),r.interactive=!0,r.on("pointerdown",(function(){return e.parent.emit(s.default.CHANGE_DIRECTION,c.Direction.Up)}));var i=new a.default("下",{bgColor:16711680});return i.x=340,e.addChild(i),i.interactive=!0,i.on("pointerdown",(function(){return e.parent.emit(s.default.CHANGE_DIRECTION,c.Direction.Down)})),e}return r(e,t),e}(i);e.default=l},189:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(158),a=PIXI.Text,c=PIXI.Container,s=PIXI.Graphics,l=function(t){function e(e){var n=t.call(this,e)||this;return n._text=null,n._loading=null,n}return r(e,t),e.prototype.init=function(){var t=new s;t.beginFill(3308539),t.drawRect(0,0,this.stageWidth,this.stageHeight),t.endFill(),t.x=0,t.y=0,this.addChild(t);var e=new c;this.addChild(e),e.x=(this.stageWidth-300)/2,e.y=this.stageHeight-300;var n=new s;n.lineStyle(2,16777215,1),n.beginFill(3308539,0),n.drawRoundedRect(0,0,300,16,8),n.endFill(),e.addChild(n);var o=new PIXI.filters.GlowFilter({distance:16,outerStrength:2,innerStrength:0,color:16777215,quality:.1,knockout:!1});n.filters=[o];var r=new s;r.beginFill(16777215,1),r.drawRect(0,0,300,16),r.endFill(),e.addChild(r),r.x=-300,r.y=0;var i=new s;i.beginFill(16711680,1),i.drawRoundedRect(0,0,300,16,8),i.endFill(),e.addChild(i),r.mask=i,this._loading=r;var l=new a("加载中...",{fill:"#FFFFFF"});e.addChild(l),l.anchor.set(.5,.5),l.x=150,l.y=-30,this._text=l,this.emit("init_complete")},e.prototype.setProgress=function(t){window.TweenMax.to(this._loading,.3,{x:t/100*300-300}),this._text.text="".concat(parseInt(t),"%")},e.NAME="loading_scene",e}(i.default);e.default=l},108:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MapConfig=void 0,e.MapConfig={rows:20,cols:20,gridWidth:32,gridHeight:32,mapData:[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],gridColor:{0:"0xffffff",1:"0xe75166",2:"0xab5a2a",3:"0xeecb37",4:"0x8bc830",5:"0xd0d3d4",6:"0x7a6c6c",7:"0xf98d94",8:"0x4d27b0"}}},330:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Direction=void 0;var i,a=puremvc.Proxy,c=n(108),s=c.MapConfig.rows,l=c.MapConfig.cols,u=c.MapConfig.gridWidth,f=c.MapConfig.gridHeight;c.MapConfig.mapData,c.MapConfig.gridColor,function(t){t[t.Up=0]="Up",t[t.Right=1]="Right",t[t.Down=2]="Down",t[t.Left=3]="Left"}(i=e.Direction||(e.Direction={}));var p=[[-1,0],[0,1],[1,0],[0,-1]],d=function(t){function e(n){var o=t.call(this,e.NAME)||this;return o.beans=[],o.snake=[],o.speed=20,o.pause=!1,o.game=null,o.current_direction=i.Right,o.game=n,setTimeout((function(){o.sendNotification(e.UPDATE_LOCATION,o.snake)}),1e3),o}return r(e,t),e.prototype.resetGameData=function(){this.snake=[{row:1,col:4},{row:1,col:3},{row:1,col:2},{row:1,col:1}];for(var t=0;t<30;t++)this.addBean()},e.prototype.move=function(){var t=p[this.current_direction],n=t[0],o=t[1],r=this.snake[0].row,i=this.snake[0].col;this.snake[0].row=r+n,this.snake[0].col=i+o;for(var a=1;a<this.snake.length;a++){var c=this.snake[a].row,s=this.snake[a].col;this.snake[a].row=r,this.snake[a].col=i,r=c,i=s}this.sendNotification(e.UPDATE_LOCATION,this.snake)},e.prototype.check=function(){for(var t=this.snake[0],n=t.row,o=t.col,r=0;r<this.beans.length;r++){var i=this.beans[r],a=i.row,c=i.col,s=i.id;if(n===a&&o===c)return this.beans.splice(r,1),console.log("吃到了！",s),this.sendNotification(e.HIT,s),this.addSnakeBody(),void this.addBean()}},e.prototype.addSnakeBody=function(){this.snake.push({row:-1,col:-1})},e.prototype.addBean=function(){var t=parseInt(String(1e5*Math.random())),n=this.getBeanCoordinate(),o={row:n[0],col:n[1],x:n[2],y:n[3],id:t};this.beans.push(o),this.sendNotification(e.ADD_BEAN,o)},e.prototype.getBeanCoordinate=function(){var t=Math.floor(Math.random()*s),e=Math.floor(Math.random()*l),n=c.MapConfig.mapData[t][e]>0,o=this.beans.some((function(n){return n.row===t&&n.col===e}));return n||o?this.getBeanCoordinate():[t,e,e*f+f/2,t*u+u/2]},e.NAME="game_proxy",e.UPDATE_LOCATION="update_location",e.HIT="hit",e.ADD_BEAN="add_bean",e}(a);e.default=d}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=o(198),o(738).default.getInstance(t.default.NAME).startup()})();