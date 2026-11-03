"use strict";var d=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var _=d(function(Z,A){
var R=require('@stdlib/strided-base-reinterpret-complex64/dist'),K=require('@stdlib/strided-base-reinterpret-boolean/dist');function L(r,e,a,q,t,y,n,x,o,p,v,b,h){var E,l,w,u,g,k,z,j,s,c,i,m;if(r<=0)return v;for(E=K(e,0),l=R(t,0),w=R(x,0),u=R(v,0),j=q,s=n*2,c=p*2,i=h*2,g=y*2,k=o*2,z=b*2,m=0;m<r;m++)E[j]?(u[i]=l[s],u[i+1]=l[s+1]):(u[i]=w[c],u[i+1]=w[c+1]),j+=a,s+=g,c+=k,i+=z;return v}A.exports=L
});var F=d(function($,D){
var f=require('@stdlib/strided-base-stride2offset/dist'),M=_();function O(r,e,a,q,t,y,n,x,o){var p=f(r,a),v=f(r,t),b=f(r,n),h=f(r,o);return M(r,e,a,p,q,t,v,y,n,b,x,o,h)}D.exports=O
});var I=d(function(C,H){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=F(),Q=_();P(G,"ndarray",Q);H.exports=G
});var S=require("path").join,T=require('@stdlib/utils-try-require/dist'),U=require('@stdlib/assert-is-error/dist'),V=I(),B,J=T(S(__dirname,"./native.js"));U(J)?B=V:B=J;module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
