(this["webpackJsonpeaster-code"]=this["webpackJsonpeaster-code"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/zelda.4e28f3e7.mp3"},function(e,t,a){e.exports=a.p+"static/media/animalCrossing.796b643a.ttf"},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),o=a.n(c),r=(a(12),a(13),a(14),a(3)),i=a(4),u=a(5),l=a(6),d=(a(15),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={code:e.code,guessed:"",incorrect:!1,correct:!1},n}return Object(i.a)(a,[{key:"guessSection",value:function(){for(var e=this.state.guessed.length,t="",a=0;a<this.state.code.length;a++)t+=a<e?this.state.guessed[a]:"-";var n=this.state.incorrect?"guess incorrect":this.state.correct?"guess correct":"guess";return s.a.createElement("p",{className:n},t)}},{key:"guess",value:function(e){if(this.state.guessed.length<this.state.code.length){var t=this.state.guessed+""+e;this.setState({guessed:t})}}},{key:"checkCode",value:function(){var e=this;this.state.guessed==this.state.code?(this.setState({correct:!0}),setTimeout((function(){e.setState({correct:!1,guessed:""})}),500),document.body.classList.add("correct"),document.getElementsByClassName("audio-element")[0].play()):(this.setState({incorrect:!0}),setTimeout((function(){e.setState({incorrect:!1,guessed:""})}),500))}},{key:"numberPad",value:function(){for(var e=this,t=[],a=function(a){t.push(s.a.createElement("button",{onClick:function(){return e.guess(a+1)},key:"button_"+a},a+1))},n=0;n<9;n++)a(n);return s.a.createElement("div",{className:"numberPad"},t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"numberPadContainer"},this.guessSection(),this.numberPad(),s.a.createElement("button",{className:"checkCode",onClick:function(){return e.checkCode()}},"Check"),s.a.createElement("audio",{className:"audio-element"},s.a.createElement("source",{src:"./zelda.mp3"})))}}]),a}(n.Component));var m=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("p",{className:"info"},"Ben and Charlie, for your final clue you must enter the correct pass code."),s.a.createElement(d,{code:"1985"}),s.a.createElement("div",{className:"hidden"},s.a.createElement("h1",null,"WELL DONE!"),s.a.createElement("p",null,"Now to get your final prize, find a place where you can see your eyes."),s.a.createElement("p",null,"HAPPY BUNNY DAY!!!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4c3dc544.chunk.js.map