parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
!function(){var l="https://app.10000ft.com/me/tracker";if(window.location.href===l){var e=[{billable:0,unbillable:0},{billable:0,unbillable:0},{billable:0,unbillable:0},{billable:0,unbillable:0},{billable:0,unbillable:0}],a=document.querySelectorAll(".tk-time-tracker-row");for(i=0;i<a.length;++i){var t=a[i].querySelectorAll(".tk-time-tracker-cel");for(j=0;j<t.length;++j)if(!t[j].classList.contains("empty")){var b=parseFloat(t[j].querySelector(".tk-hours").textContent);t[j].classList.contains("grad-purple")&&(e[j].unbillable=Number(parseFloat(e[j].unbillable+b).toFixed(1))),t[j].classList.contains("grad-blue")&&(e[j].billable=Number(parseFloat(e[j].billable+b).toFixed(1)))}}var n="Billable this week: ".concat(function(l){var e=0,a=0;for(i=0;i<l.length;++i)e=Number((e+l[i].billable).toFixed(1)),a=Number((a+(l[i].billable+l[i].unbillable)).toFixed(1));return"".concat(o(e,a),"% (").concat(e," / ").concat(a,")")}(e),"\nMon: ").concat(r(e[0]),"%; Tue: ").concat(r(e[1]),"%; Wed: ").concat(r(e[2]),"%; Thu ").concat(r(e[3]),"%; Fri ").concat(r(e[4]),"%;");alert(n)}else alert("The 10k billable bookmarklet only runs on ".concat(l));function r(l){return o(l.billable,l.billable+l.unbillable)}function o(l,e){return l&&e?(l/e*100).toFixed(0):0}}();
},{}]},{},["Focm"], null)