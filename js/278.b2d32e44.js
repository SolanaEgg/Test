"use strict";(self["webpackChunkdegen_market_check"]=self["webpackChunkdegen_market_check"]||[]).push([[278],{7370:function(e,r,n){n.d(r,{H_:function(){return i},_u:function(){return u},nA:function(){return o}});var t=n(6057);const i=new t.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),o=new t.PublicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"),u=new t.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");new t.PublicKey("So11111111111111111111111111111111111111112"),new t.PublicKey("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP")},1278:function(e,r,n){n.d(r,{Am:function(){return M}});var t=n(6838),i=n(2321);const o=e=>{const r=e.decode.bind(e),n=e.encode.bind(e);return{decode:r,encode:n}};var u=n(2433)["Buffer"];const s=e=>r=>{const n=(0,t.Ik)(e,r),{encode:s,decode:c}=o(n),f=n;return f.decode=(e,r)=>{const n=c(e,r);return(0,i.oU)(u.from(n))},f.encode=(r,n,t)=>{const o=(0,i.k$)(r,e);return s(o,n,t)},f},c=e=>r=>{const n=(0,t.Ik)(e,r),{encode:s,decode:c}=o(n),f=n;return f.decode=(e,r)=>{const n=c(e,r);return(0,i.Q5)(u.from(n))},f.encode=(r,n,t)=>{const o=(0,i.zP)(r,e);return s(o,n,t)},f},f=s(8);c(8),s(16),c(16),s(24),c(24),s(32),c(32);n(7658),n(3767),n(8585),n(8696);var l=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,a=Math.ceil,h=Math.floor,g="[BigNumber Error] ",p=g+"Number primitive has more than 15 significant digits: ",d=1e14,w=14,m=9007199254740991,v=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],b=1e7,y=1e9;function N(e){var r,n,t,i=U.prototype={constructor:U,toString:null,valueOf:null},o=new U(1),u=20,s=4,c=-7,f=21,S=-1e7,L=1e7,C=!1,x=1,D=0,T={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},I="0123456789abcdefghijklmnopqrstuvwxyz",R=!0;function U(e,r){var i,o,c,f,a,g,d,v,b=this;if(!(b instanceof U))return new U(e,r);if(null==r){if(e&&!0===e._isBigNumber)return b.s=e.s,void(!e.c||e.e>L?b.c=b.e=null:e.e<S?b.c=[b.e=0]:(b.e=e.e,b.c=e.c.slice()));if((g="number"==typeof e)&&0*e==0){if(b.s=1/e<0?(e=-e,-1):1,e===~~e){for(f=0,a=e;a>=10;a/=10,f++);return void(f>L?b.c=b.e=null:(b.e=f,b.c=[e]))}v=String(e)}else{if(!l.test(v=String(e)))return t(b,v,g);b.s=45==v.charCodeAt(0)?(v=v.slice(1),-1):1}(f=v.indexOf("."))>-1&&(v=v.replace(".","")),(a=v.search(/e/i))>0?(f<0&&(f=a),f+=+v.slice(a+1),v=v.substring(0,a)):f<0&&(f=v.length)}else{if(P(r,2,I.length,"Base"),10==r&&R)return b=new U(e),F(b,u+b.e+1,s);if(v=String(e),g="number"==typeof e){if(0*e!=0)return t(b,v,g,r);if(b.s=1/e<0?(v=v.slice(1),-1):1,U.DEBUG&&v.replace(/^0\.0*|\./,"").length>15)throw Error(p+e)}else b.s=45===v.charCodeAt(0)?(v=v.slice(1),-1):1;for(i=I.slice(0,r),f=a=0,d=v.length;a<d;a++)if(i.indexOf(o=v.charAt(a))<0){if("."==o){if(a>f){f=d;continue}}else if(!c&&(v==v.toUpperCase()&&(v=v.toLowerCase())||v==v.toLowerCase()&&(v=v.toUpperCase()))){c=!0,a=-1,f=0;continue}return t(b,String(e),g,r)}g=!1,v=n(v,r,10,b.s),(f=v.indexOf("."))>-1?v=v.replace(".",""):f=v.length}for(a=0;48===v.charCodeAt(a);a++);for(d=v.length;48===v.charCodeAt(--d););if(v=v.slice(a,++d)){if(d-=a,g&&U.DEBUG&&d>15&&(e>m||e!==h(e)))throw Error(p+b.s*e);if((f=f-a-1)>L)b.c=b.e=null;else if(f<S)b.c=[b.e=0];else{if(b.e=f,b.c=[],a=(f+1)%w,f<0&&(a+=w),a<d){for(a&&b.c.push(+v.slice(0,a)),d-=w;a<d;)b.c.push(+v.slice(a,a+=w));a=w-(v=v.slice(a)).length}else a-=d;for(;a--;v+="0");b.c.push(+v)}}else b.c=[b.e=0]}function M(e,r,n,t){var i,o,u,l,a;if(null==n?n=s:P(n,0,8),!e.c)return e.toString();if(i=e.c[0],u=e.e,null==r)a=E(e.c),a=1==t||2==t&&(u<=c||u>=f)?_(a,u):k(a,u,"0");else if(e=F(new U(e),r,n),o=e.e,a=E(e.c),l=a.length,1==t||2==t&&(r<=o||o<=c)){for(;l<r;a+="0",l++);a=_(a,o)}else if(r-=u,a=k(a,o,"0"),o+1>l){if(--r>0)for(a+=".";r--;a+="0");}else if(r+=o-l,r>0)for(o+1==l&&(a+=".");r--;a+="0");return e.s<0&&i?"-"+a:a}function G(e,r){for(var n,t=1,i=new U(e[0]);t<e.length;t++){if(n=new U(e[t]),!n.s){i=n;break}r.call(i,n)&&(i=n)}return i}function q(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*w-1)>L?e.c=e.e=null:n<S?e.c=[e.e=0]:(e.e=n,e.c=r),e}function F(e,r,n,t){var i,o,u,s,c,f,l,g=e.c,p=v;if(g){e:{for(i=1,s=g[0];s>=10;s/=10,i++);if(o=r-i,o<0)o+=w,u=r,c=g[f=0],l=c/p[i-u-1]%10|0;else if(f=a((o+1)/w),f>=g.length){if(!t)break e;for(;g.length<=f;g.push(0));c=l=0,i=1,o%=w,u=o-w+1}else{for(c=s=g[f],i=1;s>=10;s/=10,i++);o%=w,u=o-w+i,l=u<0?0:c/p[i-u-1]%10|0}if(t=t||r<0||null!=g[f+1]||(u<0?c:c%p[i-u-1]),t=n<4?(l||t)&&(0==n||n==(e.s<0?3:2)):l>5||5==l&&(4==n||t||6==n&&(o>0?u>0?c/p[i-u]:0:g[f-1])%10&1||n==(e.s<0?8:7)),r<1||!g[0])return g.length=0,t?(r-=e.e+1,g[0]=p[(w-r%w)%w],e.e=-r||0):g[0]=e.e=0,e;if(0==o?(g.length=f,s=1,f--):(g.length=f+1,s=p[w-o],g[f]=u>0?h(c/p[i-u]%p[u])*s:0),t)for(;;){if(0==f){for(o=1,u=g[0];u>=10;u/=10,o++);for(u=g[0]+=s,s=1;u>=10;u/=10,s++);o!=s&&(e.e++,g[0]==d&&(g[0]=1));break}if(g[f]+=s,g[f]!=d)break;g[f--]=0,s=1}for(o=g.length;0===g[--o];g.pop());}e.e>L?e.c=e.e=null:e.e<S&&(e.c=[e.e=0])}return e}function z(e){var r,n=e.e;return null===n?e.toString():(r=E(e.c),r=n<=c||n>=f?_(r,n):k(r,n,"0"),e.s<0?"-"+r:r)}return U.clone=N,U.ROUND_UP=0,U.ROUND_DOWN=1,U.ROUND_CEIL=2,U.ROUND_FLOOR=3,U.ROUND_HALF_UP=4,U.ROUND_HALF_DOWN=5,U.ROUND_HALF_EVEN=6,U.ROUND_HALF_CEIL=7,U.ROUND_HALF_FLOOR=8,U.EUCLID=9,U.config=U.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(g+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],P(n,0,y,r),u=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],P(n,0,8,r),s=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],n&&n.pop?(P(n[0],-y,0,r),P(n[1],0,y,r),c=n[0],f=n[1]):(P(n,-y,y,r),c=-(f=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],n&&n.pop)P(n[0],-y,-1,r),P(n[1],1,y,r),S=n[0],L=n[1];else{if(P(n,-y,y,r),!n)throw Error(g+r+" cannot be zero: "+n);S=-(L=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if(n=e[r],n!==!!n)throw Error(g+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw C=!n,Error(g+"crypto unavailable");C=n}else C=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],P(n,0,9,r),x=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],P(n,0,y,r),D=n),e.hasOwnProperty(r="FORMAT")){if(n=e[r],"object"!=typeof n)throw Error(g+r+" not an object: "+n);T=n}if(e.hasOwnProperty(r="ALPHABET")){if(n=e[r],"string"!=typeof n||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(g+r+" invalid: "+n);R="0123456789"==n.slice(0,10),I=n}}return{DECIMAL_PLACES:u,ROUNDING_MODE:s,EXPONENTIAL_AT:[c,f],RANGE:[S,L],CRYPTO:C,MODULO_MODE:x,POW_PRECISION:D,FORMAT:T,ALPHABET:I}},U.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!U.DEBUG)return!0;var r,n,t=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===o||-1===o)&&i>=-y&&i<=y&&i===h(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if(r=(i+1)%w,r<1&&(r+=w),String(t[0]).length==r){for(r=0;r<t.length;r++)if(n=t[r],n<0||n>=d||n!==h(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(g+"Invalid BigNumber: "+e)},U.maximum=U.max=function(){return G(arguments,i.lt)},U.minimum=U.min=function(){return G(arguments,i.gt)},U.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return h(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,i,s,c,f=0,l=[],p=new U(o);if(null==e?e=u:P(e,0,y),s=a(e/w),C)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(s*=2));f<s;)c=131072*n[f]+(n[f+1]>>>11),c>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[f]=t[0],n[f+1]=t[1]):(l.push(c%1e14),f+=2);f=s/2}else{if(!crypto.randomBytes)throw C=!1,Error(g+"crypto unavailable");for(n=crypto.randomBytes(s*=7);f<s;)c=281474976710656*(31&n[f])+1099511627776*n[f+1]+4294967296*n[f+2]+16777216*n[f+3]+(n[f+4]<<16)+(n[f+5]<<8)+n[f+6],c>=9e15?crypto.randomBytes(7).copy(n,f):(l.push(c%1e14),f+=7);f=s/7}if(!C)for(;f<s;)c=r(),c<9e15&&(l[f++]=c%1e14);for(s=l[--f],e%=w,s&&e&&(c=v[w-e],l[f]=h(s/c)*c);0===l[f];l.pop(),f--);if(f<0)l=[i=0];else{for(i=-1;0===l[0];l.splice(0,1),i-=w);for(f=1,c=l[0];c>=10;c/=10,f++);f<w&&(i-=w-f)}return p.e=i,p.c=l,p}}(),U.sum=function(){for(var e=1,r=arguments,n=new U(r[0]);e<r.length;)n=n.plus(r[e++]);return n},n=function(){var e="0123456789";function n(e,r,n,t){for(var i,o,u=[0],s=0,c=e.length;s<c;){for(o=u.length;o--;u[o]*=r);for(u[0]+=t.indexOf(e.charAt(s++)),i=0;i<u.length;i++)u[i]>n-1&&(null==u[i+1]&&(u[i+1]=0),u[i+1]+=u[i]/n|0,u[i]%=n)}return u.reverse()}return function(t,i,o,c,f){var l,a,h,g,p,d,w,m,v=t.indexOf("."),b=u,y=s;for(v>=0&&(g=D,D=0,t=t.replace(".",""),m=new U(i),d=m.pow(t.length-v),D=g,m.c=n(k(E(d.c),d.e,"0"),10,o,e),m.e=m.c.length),w=n(t,i,o,f?(l=I,e):(l=e,I)),h=g=w.length;0==w[--g];w.pop());if(!w[0])return l.charAt(0);if(v<0?--h:(d.c=w,d.e=h,d.s=c,d=r(d,m,b,y,o),w=d.c,p=d.r,h=d.e),a=h+b+1,v=w[a],g=o/2,p=p||a<0||null!=w[a+1],p=y<4?(null!=v||p)&&(0==y||y==(d.s<0?3:2)):v>g||v==g&&(4==y||p||6==y&&1&w[a-1]||y==(d.s<0?8:7)),a<1||!w[0])t=p?k(l.charAt(1),-b,l.charAt(0)):l.charAt(0);else{if(w.length=a,p)for(--o;++w[--a]>o;)w[a]=0,a||(++h,w=[1].concat(w));for(g=w.length;!w[--g];);for(v=0,t="";v<=g;t+=l.charAt(w[v++]));t=k(t,h,l.charAt(0))}return t}}(),r=function(){function e(e,r,n){var t,i,o,u,s=0,c=e.length,f=r%b,l=r/b|0;for(e=e.slice();c--;)o=e[c]%b,u=e[c]/b|0,t=l*o+u*f,i=f*o+t%b*b+s,s=(i/n|0)+(t/b|0)+l*u,e[c]=i%n;return s&&(e=[s].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,i,o,u,s){var c,f,l,a,g,p,m,v,b,y,N,E,A,P,B,_,k,S=t.s==i.s?1:-1,L=t.c,C=i.c;if(!L||!L[0]||!C||!C[0])return new U(t.s&&i.s&&(L?!C||L[0]!=C[0]:C)?L&&0==L[0]||!C?0*S:S/0:NaN);for(v=new U(S),b=v.c=[],f=t.e-i.e,S=o+f+1,s||(s=d,f=O(t.e/w)-O(i.e/w),S=S/w|0),l=0;C[l]==(L[l]||0);l++);if(C[l]>(L[l]||0)&&f--,S<0)b.push(1),a=!0;else{for(P=L.length,_=C.length,l=0,S+=2,g=h(s/(C[0]+1)),g>1&&(C=e(C,g,s),L=e(L,g,s),_=C.length,P=L.length),A=_,y=L.slice(0,_),N=y.length;N<_;y[N++]=0);k=C.slice(),k=[0].concat(k),B=C[0],C[1]>=s/2&&B++;do{if(g=0,c=r(C,y,_,N),c<0){if(E=y[0],_!=N&&(E=E*s+(y[1]||0)),g=h(E/B),g>1){g>=s&&(g=s-1),p=e(C,g,s),m=p.length,N=y.length;while(1==r(p,y,m,N))g--,n(p,_<m?k:C,m,s),m=p.length,c=1}else 0==g&&(c=g=1),p=C.slice(),m=p.length;if(m<N&&(p=[0].concat(p)),n(y,p,N,s),N=y.length,-1==c)while(r(C,y,_,N)<1)g++,n(y,_<N?k:C,N,s),N=y.length}else 0===c&&(g++,y=[0]);b[l++]=g,y[0]?y[N++]=L[A]||0:(y=[L[A]],N=1)}while((A++<P||null!=y[0])&&S--);a=null!=y[0],b[0]||b.splice(0,1)}if(s==d){for(l=1,S=b[0];S>=10;S/=10,l++);F(v,o+(v.e=l+f*w-1)+1,u,a)}else v.e=f,v.r=+a;return v}}(),t=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,u,s,c){var f,l=s?u:u.replace(i,"");if(t.test(l))o.s=isNaN(l)?null:l<0?-1:1;else{if(!s&&(l=l.replace(e,(function(e,r,n){return f="x"==(n=n.toLowerCase())?16:"b"==n?2:8,c&&c!=f?e:r})),c&&(f=c,l=l.replace(r,"$1").replace(n,"0.$1")),u!=l))return new U(l,f);if(U.DEBUG)throw Error(g+"Not a"+(c?" base "+c:"")+" number: "+u);o.s=null}o.c=o.e=null}}(),i.absoluteValue=i.abs=function(){var e=new U(this);return e.s<0&&(e.s=1),e},i.comparedTo=function(e,r){return A(this,new U(e,r))},i.decimalPlaces=i.dp=function(e,r){var n,t,i,o=this;if(null!=e)return P(e,0,y),null==r?r=s:P(r,0,8),F(new U(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-O(this.e/w))*w,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},i.dividedBy=i.div=function(e,n){return r(this,new U(e,n),u,s)},i.dividedToIntegerBy=i.idiv=function(e,n){return r(this,new U(e,n),0,1)},i.exponentiatedBy=i.pow=function(e,r){var n,t,i,u,c,f,l,p,d,m=this;if(e=new U(e),e.c&&!e.isInteger())throw Error(g+"Exponent not an integer: "+z(e));if(null!=r&&(r=new U(r)),f=e.e>14,!m.c||!m.c[0]||1==m.c[0]&&!m.e&&1==m.c.length||!e.c||!e.c[0])return d=new U(Math.pow(+z(m),f?e.s*(2-B(e)):+z(e))),r?d.mod(r):d;if(l=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new U(NaN);t=!l&&m.isInteger()&&r.isInteger(),t&&(m=m.mod(r))}else{if(e.e>9&&(m.e>0||m.e<-1||(0==m.e?m.c[0]>1||f&&m.c[1]>=24e7:m.c[0]<8e13||f&&m.c[0]<=9999975e7)))return u=m.s<0&&B(e)?-0:0,m.e>-1&&(u=1/u),new U(l?1/u:u);D&&(u=a(D/w+2))}for(f?(n=new U(.5),l&&(e.s=1),p=B(e)):(i=Math.abs(+z(e)),p=i%2),d=new U(o);;){if(p){if(d=d.times(m),!d.c)break;u?d.c.length>u&&(d.c.length=u):t&&(d=d.mod(r))}if(i){if(i=h(i/2),0===i)break;p=i%2}else if(e=e.times(n),F(e,e.e+1,1),e.e>14)p=B(e);else{if(i=+z(e),0===i)break;p=i%2}m=m.times(m),u?m.c&&m.c.length>u&&(m.c.length=u):t&&(m=m.mod(r))}return t?d:(l&&(d=o.div(d)),r?d.mod(r):u?F(d,D,s,c):d)},i.integerValue=function(e){var r=new U(this);return null==e?e=s:P(e,0,8),F(r,r.e+1,e)},i.isEqualTo=i.eq=function(e,r){return 0===A(this,new U(e,r))},i.isFinite=function(){return!!this.c},i.isGreaterThan=i.gt=function(e,r){return A(this,new U(e,r))>0},i.isGreaterThanOrEqualTo=i.gte=function(e,r){return 1===(r=A(this,new U(e,r)))||0===r},i.isInteger=function(){return!!this.c&&O(this.e/w)>this.c.length-2},i.isLessThan=i.lt=function(e,r){return A(this,new U(e,r))<0},i.isLessThanOrEqualTo=i.lte=function(e,r){return-1===(r=A(this,new U(e,r)))||0===r},i.isNaN=function(){return!this.s},i.isNegative=function(){return this.s<0},i.isPositive=function(){return this.s>0},i.isZero=function(){return!!this.c&&0==this.c[0]},i.minus=function(e,r){var n,t,i,o,u=this,c=u.s;if(e=new U(e,r),r=e.s,!c||!r)return new U(NaN);if(c!=r)return e.s=-r,u.plus(e);var f=u.e/w,l=e.e/w,a=u.c,h=e.c;if(!f||!l){if(!a||!h)return a?(e.s=-r,e):new U(h?u:NaN);if(!a[0]||!h[0])return h[0]?(e.s=-r,e):new U(a[0]?u:3==s?-0:0)}if(f=O(f),l=O(l),a=a.slice(),c=f-l){for((o=c<0)?(c=-c,i=a):(l=f,i=h),i.reverse(),r=c;r--;i.push(0));i.reverse()}else for(t=(o=(c=a.length)<(r=h.length))?c:r,c=r=0;r<t;r++)if(a[r]!=h[r]){o=a[r]<h[r];break}if(o&&(i=a,a=h,h=i,e.s=-e.s),r=(t=h.length)-(n=a.length),r>0)for(;r--;a[n++]=0);for(r=d-1;t>c;){if(a[--t]<h[t]){for(n=t;n&&!a[--n];a[n]=r);--a[n],a[t]+=d}a[t]-=h[t]}for(;0==a[0];a.splice(0,1),--l);return a[0]?q(e,a,l):(e.s=3==s?-1:1,e.c=[e.e=0],e)},i.modulo=i.mod=function(e,n){var t,i,o=this;return e=new U(e,n),!o.c||!e.s||e.c&&!e.c[0]?new U(NaN):!e.c||o.c&&!o.c[0]?new U(o):(9==x?(i=e.s,e.s=1,t=r(o,e,0,3),e.s=i,t.s*=i):t=r(o,e,0,x),e=o.minus(t.times(e)),e.c[0]||1!=x||(e.s=o.s),e)},i.multipliedBy=i.times=function(e,r){var n,t,i,o,u,s,c,f,l,a,h,g,p,m,v,y=this,N=y.c,E=(e=new U(e,r)).c;if(!N||!E||!N[0]||!E[0])return!y.s||!e.s||N&&!N[0]&&!E||E&&!E[0]&&!N?e.c=e.e=e.s=null:(e.s*=y.s,N&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=O(y.e/w)+O(e.e/w),e.s*=y.s,c=N.length,a=E.length,c<a&&(p=N,N=E,E=p,i=c,c=a,a=i),i=c+a,p=[];i--;p.push(0));for(m=d,v=b,i=a;--i>=0;){for(n=0,h=E[i]%v,g=E[i]/v|0,u=c,o=i+u;o>i;)f=N[--u]%v,l=N[u]/v|0,s=g*f+l*h,f=h*f+s%v*v+p[o]+n,n=(f/m|0)+(s/v|0)+g*l,p[o--]=f%m;p[o]=n}return n?++t:p.splice(0,1),q(e,p,t)},i.negated=function(){var e=new U(this);return e.s=-e.s||null,e},i.plus=function(e,r){var n,t=this,i=t.s;if(e=new U(e,r),r=e.s,!i||!r)return new U(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/w,u=e.e/w,s=t.c,c=e.c;if(!o||!u){if(!s||!c)return new U(i/0);if(!s[0]||!c[0])return c[0]?e:new U(s[0]?t:0*i)}if(o=O(o),u=O(u),s=s.slice(),i=o-u){for(i>0?(u=o,n=c):(i=-i,n=s),n.reverse();i--;n.push(0));n.reverse()}for(i=s.length,r=c.length,i-r<0&&(n=c,c=s,s=n,r=i),i=0;r;)i=(s[--r]=s[r]+c[r]+i)/d|0,s[r]=d===s[r]?0:s[r]%d;return i&&(s=[i].concat(s),++u),q(e,s,u)},i.precision=i.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return P(e,1,y),null==r?r=s:P(r,0,8),F(new U(o),e,r);if(!(n=o.c))return null;if(i=n.length-1,t=i*w+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},i.shiftedBy=function(e){return P(e,-m,m),this.times("1e"+e)},i.squareRoot=i.sqrt=function(){var e,n,t,i,o,c=this,f=c.c,l=c.s,a=c.e,h=u+4,g=new U("0.5");if(1!==l||!f||!f[0])return new U(!l||l<0&&(!f||f[0])?NaN:f?c:1/0);if(l=Math.sqrt(+z(c)),0==l||l==1/0?(n=E(f),(n.length+a)%2==0&&(n+="0"),l=Math.sqrt(+n),a=O((a+1)/2)-(a<0||a%2),l==1/0?n="5e"+a:(n=l.toExponential(),n=n.slice(0,n.indexOf("e")+1)+a),t=new U(n)):t=new U(l+""),t.c[0])for(a=t.e,l=a+h,l<3&&(l=0);;)if(o=t,t=g.times(o.plus(r(c,o,h,1))),E(o.c).slice(0,l)===(n=E(t.c)).slice(0,l)){if(t.e<a&&--l,n=n.slice(l-3,l+1),"9999"!=n&&(i||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(F(t,t.e+u+2,1),e=!t.times(t).eq(c));break}if(!i&&(F(o,o.e+u+2,0),o.times(o).eq(c))){t=o;break}h+=4,l+=4,i=1}return F(t,t.e+u+1,s,e)},i.toExponential=function(e,r){return null!=e&&(P(e,0,y),e++),M(this,e,r,1)},i.toFixed=function(e,r){return null!=e&&(P(e,0,y),e=e+this.e+1),M(this,e,r)},i.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=T;else if("object"!=typeof n)throw Error(g+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var o,u=t.split("."),s=+n.groupSize,c=+n.secondaryGroupSize,f=n.groupSeparator||"",l=u[0],a=u[1],h=i.s<0,p=h?l.slice(1):l,d=p.length;if(c&&(o=s,s=c,c=o,d-=o),s>0&&d>0){for(o=d%s||s,l=p.substr(0,o);o<d;o+=s)l+=f+p.substr(o,s);c>0&&(l+=f+p.slice(o)),h&&(l="-"+l)}t=a?l+(n.decimalSeparator||"")+((c=+n.fractionGroupSize)?a.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):a):l}return(n.prefix||"")+t+(n.suffix||"")},i.toFraction=function(e){var n,t,i,u,c,f,l,a,h,p,d,m,b=this,y=b.c;if(null!=e&&(l=new U(e),!l.isInteger()&&(l.c||1!==l.s)||l.lt(o)))throw Error(g+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+z(l));if(!y)return new U(b);for(n=new U(o),h=t=new U(o),i=a=new U(o),m=E(y),c=n.e=m.length-b.e-1,n.c[0]=v[(f=c%w)<0?w+f:f],e=!e||l.comparedTo(n)>0?c>0?n:h:l,f=L,L=1/0,l=new U(m),a.c[0]=0;;){if(p=r(l,n,0,1),u=t.plus(p.times(i)),1==u.comparedTo(e))break;t=i,i=u,h=a.plus(p.times(u=h)),a=u,n=l.minus(p.times(u=n)),l=u}return u=r(e.minus(t),i,0,1),a=a.plus(u.times(h)),t=t.plus(u.times(i)),a.s=h.s=b.s,c*=2,d=r(h,i,c,s).minus(b).abs().comparedTo(r(a,t,c,s).minus(b).abs())<1?[h,i]:[a,t],L=f,d},i.toNumber=function(){return+z(this)},i.toPrecision=function(e,r){return null!=e&&P(e,1,y),M(this,e,r,2)},i.toString=function(e){var r,t=this,i=t.s,o=t.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=c||o>=f?_(E(t.c),o):k(E(t.c),o,"0"):10===e&&R?(t=F(new U(t),u+o+1,s),r=k(E(t.c),t.e,"0")):(P(e,2,I.length,"Base"),r=n(k(E(t.c),o,"0"),10,e,i,!0)),i<0&&t.c[0]&&(r="-"+r)),r},i.valueOf=i.toJSON=function(){return z(this)},i._isBigNumber=!0,i[Symbol.toStringTag]="BigNumber",i[Symbol.for("nodejs.util.inspect.custom")]=i.valueOf,null!=e&&U.set(e),U}function O(e){var r=0|e;return e>0||e===r?r:r-1}function E(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=w-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function A(e,r){var n,t,i=e.c,o=r.c,u=e.s,s=r.s,c=e.e,f=r.e;if(!u||!s)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-s:u;if(u!=s)return u;if(n=u<0,t=c==f,!i||!o)return t?0:!i^n?1:-1;if(!t)return c>f^n?1:-1;for(s=(c=i.length)<(f=o.length)?c:f,u=0;u<s;u++)if(i[u]!=o[u])return i[u]>o[u]^n?1:-1;return c==f?0:c>f^n?1:-1}function P(e,r,n,t){if(e<r||e>n||e!==h(e))throw Error(g+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function B(e){var r=e.c.length-1;return O(e.e/w)==r&&e.c[r]%2!=0}function _(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function k(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(t=e.length,++r>t){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}var S=N(),L=S;new L("1e+18");const C=e=>{const r=(0,t.u8)(e),{encode:n,decode:i}=o(r),u=r;return u.decode=(e,r)=>{const n=i(e,r);return!!n},u.encode=(e,r,t)=>{const i=Number(e);return n(i,r,t)},u};var x=n(6057);const D=e=>{const r=(0,t.Ik)(32,e),{encode:n,decode:i}=o(r),u=r;return u.decode=(e,r)=>{const n=i(e,r);return new x.PublicKey(n)},u.encode=(e,r,t)=>{const i=e.toBuffer();return n(i,r,t)},u};var T=n(7370);class I extends Error{constructor(e){super(e)}}class R extends I{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}n(2433)["Buffer"];const U=(0,t.n_)([(0,t.Jq)("mintAuthorityOption"),D("mintAuthority"),f("supply"),(0,t.u8)("decimals"),C("isInitialized"),(0,t.Jq)("freezeAuthorityOption"),D("freezeAuthority")]);U.span;async function M(e,r,n=!1,t=T.H_,i=T._u){if(!n&&!x.PublicKey.isOnCurve(r.toBuffer()))throw new R;const[o]=await x.PublicKey.findProgramAddress([r.toBuffer(),t.toBuffer(),e.toBuffer()],i);return o}}}]);
//# sourceMappingURL=278.b2d32e44.js.map