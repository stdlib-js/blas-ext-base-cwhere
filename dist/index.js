"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var _=d(function(Z,A){
var R=require('@stdlib/strided-base-reinterpret-complex64/dist'),K=require('@stdlib/strided-base-reinterpret-boolean/dist');function L(r,e,u,q,t,y,n,x,o,p,i,b,h){var E,l,w,v,g,k,z,j,s,c,a,m;if(r<=0)return i;for(E=K(e,0),l=R(t,0),w=R(x,0),v=R(i,0),j=q,s=n*2,c=p*2,a=h*2,g=y*2,k=o*2,z=b*2,m=0;m<r;m++)E[j]?(v[a]=l[s],v[a+1]=l[s+1]):(v[a]=w[c],v[a+1]=w[c+1]),j+=u,s+=g,c+=k,a+=z;return i}A.exports=L
});var F=d(function($,D){
var f=require('@stdlib/strided-base-stride2offset/dist'),M=_();function O(r,e,u,q,t,y,n,x,o){var p=f(r,u),i=f(r,t),b=f(r,n),h=f(r,o);return M(r,e,u,p,q,t,i,y,n,b,x,o,h)}D.exports=O
});var I=d(function(C,H){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=F(),Q=_();P(G,"ndarray",Q);H.exports=G
});var S=require("path").join,T=require('@stdlib/utils-try-require/dist'),U=require('@stdlib/assert-is-error/dist'),V=I(),B,J=T(S(__dirname,"./native.js"));U(J)?B=V:B=J;module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
