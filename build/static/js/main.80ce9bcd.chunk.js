(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n(7),o=n.n(r),s=(n(14),n(2)),i=n(3),u=n(5),d=n(4),l=(n(15),function(t){var e=t.children;return Object(c.jsx)("div",{className:"Layout",children:e})}),b=n(8),j=(n(16),function(t){t.options;var e=t.onLeaveFeedback;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Please leave feedback"}),Object(c.jsx)("button",{type:"button",onClick:function(){return e("good")},children:"Good"}),Object(c.jsx)("button",{type:"button",onClick:function(){return e("neutral")},children:"Neutral"}),Object(c.jsx)("button",{type:"button",onClick:function(){return e("bad")},children:"Bad"})]})}),h=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={good:t.props.good,neutral:t.props.neutral,bad:t.props.bad,total:t.props.total,positivePercentage:t.props.positivePercentage},t.update=function(e){t.setState((function(t){return Object(b.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.countPositiveFeedbackPercentage=function(){var e=Math.round(100*t.state.good/t.countTotalFeedback());return e>0?e:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositiveFeedbackPercentage();return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{options:this.props,onLeaveFeedback:this.update}),Object(c.jsx)("h2",{children:"Statictics"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good: ",Object(c.jsx)("span",{children:this.state.good})]}),Object(c.jsxs)("li",{children:["Neutral: ",Object(c.jsx)("span",{children:this.state.neutral})]}),Object(c.jsxs)("li",{children:["Bad: ",Object(c.jsx)("span",{children:this.state.bad})]})]}),Object(c.jsxs)("p",{className:"total",children:["Total: ",t]}),Object(c.jsxs)("p",{className:"total",children:["Positive feedback: ",e,"%"]})]})}}]),n}(a.Component);h.defaultProps={};var p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(c.jsx)(l,{children:Object(c.jsx)(h,{good:0,neutral:0,bad:0,total:0,positivePercentage:0})})}}]),n}(a.Component);o.a.render(Object(c.jsx)(p,{}),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.80ce9bcd.chunk.js.map