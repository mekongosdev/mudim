/*----------------------------------------------------------------------------
 CHIM - CHuoi's Input Method
----------------------------------------------------------------------------
 copyright         : (C) 2005, 2006, 2007 by Dao Hai Lam
 http:/xvnkb.sf.net/chim
 email             : daohailam<at>yahoo<dot>com
 last modify       : Thu, 05 Jul 2007 23:07:22 +0700
 version           : 0.9.3
----------------------------------------------------------------------------
 Mudim - Mudzot's Input Method
 (c)2008 by Mudzot
 http:/code.google.com/p/mudim
 email: mudzot<at>gmail.com
 version: 0.6
 date: 14.05.08
----------------------------------------------------------------------------
 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.
-------------------------------------------------------------------------------
 Packed with Dean Edwards' Packer ported to Python by Florian Schulze
----------------------------------------------------------------------------*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c]);return p}('C=M(){K 4c};F=M(){K 4c};J 3i=[\'18-15\',\'18-5N\',\'18-5M\',\'18-5L\',\'18-5K\'];J 5u=\'18-5J\';J 5t=\'18-5I\';C.4t=\'A\';C.4u=\'a\';C.5Y=\'E\';C.5Z=\'e\';C.62=\'U\';C.63=\'u\';C.4w=\'G\';C.4x=\'g\';C.1I=\'Q\';C.1J=\'q\';C.60=\'y\';C.61=\'Y\';C.7E=\'i\';C.7D=\'I\';C.3r=5k.5j(9Y);C.1T="7L";C.1A=" !@#$%^&*()7K+=-{}[]|\\\\:\\";\'<>?,./~`\\r\\n\\t";C.15=0;C.1d=[];C.1M=14;C.2u=M(u){J n,2i=C.2i;u=u.1f(0);1e(n=0;2i[n]!=0&&2i[n]!=u;n++){}K 2i[n]!=0?n:-1};C.4v=M(u){J n,O=C.O;u=u.1f(0);1e(n=0;O[n]!=0&&O[n]!=u;n++){}K O[n]!=0?n:-1};C.64=M(7N,7M){J 1u=C.1u;J n,i=-1,j=-1,u;1e(n=0,u=7N.1f(0);1u[n]!=0&&1u[n]!=u;n++){}D(1u[n]!=0){i=n}1e(n=0,u=7M.1f(0);1u[n]!=0&&1u[n]!=u;n++){}D(1u[n]){j=n}K i-j};C.2t=M(n,c){C.1d[n]=5k.5j(c)};C.P=M(){K 4c};C.P.1G=11;C.P.1l=0;C.P.X=0;C.P.1T=[];C.P.5x=[];C.P.2m=M(){C.P.1G=!C.P.1G;F.1P()};C.P.4h=M(1l,V){C.P.1T[C.P.X]=C.P.1l;C.P.5x[C.P.X++]=V;C.P.1l=1l};C.P.5v=M(){C.P.1l=-1;C.P.X=0};C.P.7H=M(){K C.P.5x[C.P.X-1]};J 9X=\'9W\';C.3j=M(X,1k,V){J 7F="9V";J 7J="7L|9U|\'`~?.^*+=";J 7G="|9T|9S|9R|9Q|9P|9O|9N|9M|9L|9K|9J|9I|9H|9G|9F|9E|9D|9C|9B|9A|9z|";J 7I="9y";J 1A="!@#$%^&*()7K+=-{}[]|\\\\:\\";\'<>?,./~`";D(1A.1c(V)>=0){C.1z();K}D(C.P.1G&&!C.15){J 1v=7J.1c(V);D(!X){D(7I.1c(V)>=0){C.15=-1}Z D(1v>=0&&1v<12){C.P.4h(0,V)}Z D(1v==12||1v>37){K}Z{C.P.5v()}}Z D(1v==12||1v>37){C.1z();K}Z D(1v>12){C.15=X}Z D(1v>=0){D(C.P.1l<0){J 5w;D((1k==C.1J||1k==C.1I)&&((5w=C.2u(V))<0||5w>=24)){C.15=1}Z D((V==\'e\'||V==\'E\'||V==\'i\'||V==\'I\')&&1k!=\'h\'&&1k!=\'H\'){C.15=1}Z{C.P.4h(X,V)}}Z D(X-C.P.1l>1){C.15=X}Z{J w="|"+C.P.7H().3s()+V.3s()+"|";D(7G.1c(w)<0){C.15=X}Z{C.P.4h(X,V)}}}Z{1R(V){W\'h\':W\'H\':D(1k>=C.3r||"9x".1c(1k)<0){C.15=X}17;W\'g\':W\'G\':D(1k!=\'n\'&&1k!=\'N\'){C.15=X}17;W\'r\':W\'R\':D(1k!=\'t\'&&1k!=\'T\'){C.15=X}17;66:D(7F.1c(1k)>=0){C.15=X}17}}}C.1d.7C(V);K F.4p(C.1s[F.1b-1][2][0])};C.7b=M(V){J p=-1;J i,j=-1;J b,c=0,9w,l;J X=C.1d.S;J m=C.1s[F.1b-1],n;J v=1g;D(!X||C.15!=0){K C.3j(0,0,V)}b=C.1d;c=b[p=X-1];n=V.3s();1e(l=1;l<m.S;l++)D(m[l].1c(n)>=0){17}D(l>=m.S){K C.3j(X,c,V)}D((p=F.4o(n))<0){K C.3j(X,c,V)}c=b[p];J x=c.1f(0);J 3k=14;D(l==1){m=m[0];1e(i=0;!3k&&i<m.S;i++){J k=m[i];D(k[0]==n){1e(i=1;i<k.S;i++){v=C.6v[k[i]];F.4p(n);x=b[p].1f(0);D(F.1H(n,1)==3){p=0;c=b[p];x=c.1f(0)}D(F.1t(p,x,1,v,n,11)){D(p>0&&F.1H(n,1)==1&&p<X-1&&C.4v(b[p])>=0&&C.2u(b[p-1])>=0&&b[p+1]!=C.7E&&b[p+1]!=C.7D){F.1t(p-1,b[p-1].1f(0),1,C.1Q,n,14)}3k=11;17}}17}}}Z{1e(i=0;i<C.2s.S;i++){v=C.2s[i];D(F.1t(p,x,2,v,n,11)){3k=11;17}}}D(!3k){K C.3j(X,c,V)}D(C.15!=0){C.1d.7C(V)}K p>=0};J 9v=\'9u\';C.7v=M(){J X=C.1d.S;D(F.2l[0]==X-1)F.3q();D(X<=0){C.1M=11}Z{--X;C.1d.9t();D(X==C.P.1l){C.P.1l=C.P.1T[--C.P.X]}D((C.15<0&&!X)||(X<=C.15)){C.15=0}}};C.1z=M(){C.15=0;F.w=0;C.1d=[];C.P.5v();F.3q()};C.2q=M(){D(4e(3i)!="4d"&&F.1b<3i.S){J r;1e(J i=0;i<4;i++){r=16.4g(3i[i]);D(r){r.4f=14}}r=16.4g(3i[F.1b]);D(r){r.4f=11}}D(4e(5u)!="4d"){J r=16.4g(5u);D(r){r.4f=C.P.1G}}D(4e(5t)!="4d"){J r=16.4g(5t);D(r){r.4f=F.1D}}};C.9s=M(){C.1z();F.1b=(++F.1b%5);C.2q();F.1P()};C.1w=M(m){C.1z();F.1b=m;C.2q();F.1P()};C.2m=M(){J p;D(!(p=F.1E)){F.4m()}D(F.1b==0){C.1w(F.4i)}Z{F.4i=F.1b;C.1w(0)}F.1P()};C.5f=M(e){J r;D(e==1g){e=1i.5g}D(e==1g){K 1g}D(e.7B!=1g){r=e.7B}Z{r=e.L;1x(r&&r.9r!=1)r=r.4b}D(r.1U==\'9q\'){r=r.4b}C.5e=r.1U==\'4B\'||r.1p==\'9p\'||r.1p==\'1r\';K r};C.4A=M(L){D(L==1g||L.1h==1g||L.1h.S==0){K-1}D(4e(L.3h)!=\'4d\'){D(L.3h<0||L.3h>L.S||L.5s<0||L.5s>L.S||L.5s<L.3h){K-1}K L.3h}D(16.1m){J 1m=16.1m.5o();J 1O=L.5p();D(1O==1g||1m==1g||((1m.1r!="")&&1O.9o(1m)==14)){K-1}D(1m.1r==""){J 1j=1;D(L.1U=="9n"){J 5r=1O.1r;1x(1j<5r.S){1O.9m(5r.2v(1j));D(1O.7A==1m.7A){17}1j++}}Z D(L.1U=="9l"){J 5q=16.1m.5o().9k();1j=L.1h.S+1;1x(5q.9j()==L&&5q.9i("1N",1)==1){--1j;D(L.1h.1f(1j)==10){1j-=1}}D(1j==L.1h.S+1){1j=-1}}K 1j}K 1O.1r.1c(1m.1r)}};C.6b=M(L,p){D(p<0){K}D(L.7z){L.7z(p,p)}Z D(L.5p){J 1a=L.5p();1a.9h(11);1a.7h(\'1N\',p);1a.49(\'1N\',p);1a.9g()}};C.7c=M(L){C.1z();D(L.1U!=\'4B\'){J 1A=C.1A;J c=C.4A(L)-1;D(c>0){1x(c>=0&&1A.1c(L.1h.3g(c))<0){C.1d.9f(L.1h.3g(c));c=c-1}}}Z{C.1d=C.1y.7i(L).4n(\'\')}C.1M=14};C.7y=9;C.7x=8;C.5i=13;C.7u=46;C.5h=32;C.7d=9e;C.7t=37;C.7s=39;C.7r=36;C.7q=35;C.7p=33;C.7o=34;C.7n=38;C.7m=40;C.7k=9d;C.7j=4N;C.7l=9c;C.5c=M(19,7w){1R(19){W C.7y:W C.5i:C.1z();17;W C.7x:D(!7w){C.7v()}17;W C.7u:W C.7t:W C.7s:W C.7r:W C.7q:W C.7p:W C.7o:W C.7n:W C.7m:C.1M=11;17}};C.77=M(e,k){D(k==C.7l){F.4k();K 11}Z D(k==C.7k||k==C.7j){C.2m();K 11}K 14};C.1y=M(){K 4c};C.1y.5m=M(L){D(!L.4b.3e){K}J 5n=L.4b.3e.5b;K(!1i.1C&&16.1B)?5n.16.1m.5o():5n.9b().9a(0)};C.1y.7i=M(L){J 1a=C.1y.5m(L);D(!1a){K\'\'}D(!1i.1C&&16.1B){1x(1a.49(\'1N\',-1)==-1){D(C.1A.1c(1a.1r.3g(0))>=0){1a.49(\'1N\',1);17}}K 1a.1r}J 4a=\'\';J s;D(!(s=1a.7g.48)){K\'\'}J c=1a.7f-1;D(c>0){1x(c>=0&&C.1A.1c(s.3g(c))<0&&s.1f(c)!=99){4a=s.3g(c)+4a;c=c-1}}K 4a};C.1y.6c=M(L,l){J 1a=C.1y.5m(L);J b=C.1d;D(!1i.1C&&16.1B){J x=-l;1a.49(\'1N\',x);1a.7h(\'1N\',x+b.S);1a.98(b.4z().4y(/,/g,\'\'));K}J 2k=1a.7g;J 3f=1a.7f;J 5l=3f-l;2k.48=2k.48.2v(0,5l)+b.4z().4y(/,/g,\'\')+2k.48.2v(5l+l);D(l<b.S){3f++}1a.96(2k,3f);1a.95(2k,3f)};C.5d=M(L){J 47=5y;D(47.S>0){1e(J i=0;i<47.S;i++){D(L.1q==47[i]){K 11}}}K 14};C.43=M(e){D(e==1g){e=1i.5g}D(e.7e==11){K}e.7e=11;J 19=e.19;D(19==0){19=e.45}D(19==0){19=e.72}D(!F.1b){K}J L=1g;D(!(L=C.5f(e))||!C.5e||C.5d(L)){K}D(e.76||e.75||e.74){K}D(e.45==1g||e.45!=0){J V=5k.5j(19);D(19==C.5h||19==C.5i){C.1z()}Z D(19>C.5h&&19<C.7d){D(C.1M){C.7c(L)}J l=C.1d.S;D(C.7b(V)){D(e.7a){e.7a()}D(e.78){e.78()}e.94=11;e.93=14;F.6d(L,l)}}Z{C.1M=11}}Z{C.5c(19,11)}};C.44=M(e){J L=1g;D(e==1g){e=1i.5g}D(C.77(e,e.19)){K}D(e.76||e.75||e.92||e.91||e.74||e.90||e.8Z){K}D(!(L=C.5f(e))||!C.5e||C.5d(L)){K}J 19=e.19;D(19==0){19=e.45}D(19==0){19=e.72}C.5c(19,14)};C.42=M(e){C.3l();C.1M=11};C.41=M(e,r){D(!e){K}D(!e.6Y){D(!r){D(!1i.1C&&16.1B){e.3n(\'71\',C.44);e.3n(\'70\',C.43);e.3n(\'6Z\',C.42)}Z{e.3m(\'8Y\',C.44,14);e.3m(\'8X\',C.43,14);e.3m(\'8W\',C.42,14)}}Z{e.71=C.44;e.70=C.43;e.6Z=C.42}e.6Y=11}J f=e.6X(\'3e\');1e(J i=0;i<f.S;i++){J 2j=(!1i.1C&&16.1B)?f[i].5b.16:f[i].6W;6V{2j.3e=f[i];C.41(2j,14)}6U(e){}}J f=e.6X(\'8V\');1e(J i=0;i<f.S;i++){J 2j=(!1i.1C&&16.1B)?f[i].5b.16:f[i].6W;6V{2j.3e=f[i];C.41(2j,14)}6U(e){}}};C.3l=M(){F.4m();C.41(16,11);C.2q()};C.6T=[65,3Y,3W,3U,3S,3Q];C.6S=[97,3Z,3X,3V,3T,3R];C.6R=[3c,3a,30,2Y,2W,2U];C.6Q=[3d,3b,31,2Z,2X,2V];C.6P=[2S,2Q,2O,2M,2K,2I];C.6O=[2T,2R,2P,2N,2L,2J];C.6N=[79,2F,2D,2B,2z,2x];C.6M=[2H,2G,2E,2C,2A,2y];C.6L=[2g,2e,2w,2b,29,27];C.6K=[2h,2f,2d,2c,2a,28];C.6J=[25,22,1L,1Z,1X,1V];C.6I=[26,23,21,20,1Y,1W];C.6H=[85,3N,3L,3J,3H,3F];C.6G=[3P,3O,3M,3K,3I,3G];C.6F=[3D,3B,3z,3x,3v,3t];C.6E=[3E,3C,3A,3y,3w,3u];C.6D=[69,58,56,54,52,50];C.6C=[5a,59,57,55,53,51];C.6B=[4Y,4W,4U,4S,4Q,4O];C.6A=[4Z,4X,4V,4T,4R,4P];C.6z=[73,4K,4I,4G,4E,4C];C.6y=[4M,4L,4J,4H,4F,4D];C.6x=[89,6o,6m,6k,6i,6g];C.6w=[4N,6p,6n,6l,6j,6h];C.2s=[C.6T,C.6S,C.6R,C.6Q,C.6P,C.6O,C.6N,C.6M,C.6L,C.6K,C.6J,C.6I,C.6H,C.6G,C.6F,C.6E,C.6D,C.6C,C.6B,C.6A,C.6z,C.6y,C.6x,C.6w];C.6u=[65,3c,3Y,3a,3W,30,3U,2Y,3S,2W,3Q,2U,2S,3c,2Q,3a,2O,30,2M,2Y,2K,2W,2I,2U,97,3d,3Z,3b,3X,31,3V,2Z,3T,2X,3R,2V,2T,3d,2R,3b,2P,31,2N,2Z,2L,2X,2J,2V];C.6r=[65,2S,3Y,2Q,3W,2O,3U,2M,3S,2K,3Q,2I,3c,2S,3a,2Q,30,2O,2Y,2M,2W,2K,2U,2I,97,2T,3Z,2R,3X,2P,3V,2N,3T,2L,3R,2J,3d,2T,3b,2R,31,2P,2Z,2N,2X,2L,2V,2J];C.6s=[79,2g,2F,2e,2D,2w,2B,2b,2z,29,2x,27,25,2g,22,2e,1L,1L,1Z,2b,1X,29,1V,27,2H,2h,2G,2f,2E,2d,2C,2c,2A,2a,2y,28,26,2h,23,2f,21,2d,20,2c,1Y,2a,1W,28];C.3p=[79,25,2F,22,2D,1L,2B,1Z,2z,1X,2x,1V,2g,25,2e,22,2w,1L,2b,1Z,29,1X,27,1V,2H,26,2G,23,2E,21,2C,20,2A,1Y,2y,1W,2h,26,2f,23,2d,21,2c,20,2a,1Y,28,1W];C.1Q=[85,3D,3N,3B,3L,3z,3J,3x,3H,3v,3F,3t,3P,3E,3O,3C,3M,3A,3K,3y,3I,3w,3G,3u];C.6t=[69,4Y,58,4W,56,4U,54,4S,52,4Q,50,4O,5a,4Z,59,4X,57,4V,55,4T,53,4R,51,4P];C.6q=[68,6e,4l,6f];C.6v=[C.6u,C.6t,C.6s,C.6r,C.3p,C.1Q,C.6q];C.1s=[[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6]],\'8U\',\'8T\'],[[[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6]],\'8S\',\'8R\'],[[[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'^+(d\',"=\'`?~."],[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6],[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6],[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'8Q^+(d\',"8P=\'`?~."]];C.2i=[85,3N,3L,3J,3H,3F,3P,3O,3M,3K,3I,3G,3D,3B,3z,3x,3v,3t,3E,3C,3A,3y,3w,3u,73,4K,4I,4G,4E,4C,4M,4L,4J,4H,4F,4D,0];C.O=[79,2F,2D,2B,2z,2x,2H,2G,2E,2C,2A,2y,2g,2e,2w,2b,29,27,2h,2f,2d,2c,2a,28,25,22,1L,1Z,1X,1V,26,23,21,20,1Y,1W,0];C.1u=[97,65,3Z,3Y,3X,3W,3V,3U,3T,3S,3R,3Q,3d,3c,3b,3a,31,30,2Z,2Y,2X,2W,2V,2U,2T,2S,2R,2Q,2P,2O,2N,2M,2L,2K,2J,2I,5a,69,59,58,57,56,55,54,53,52,51,50,4Z,4Y,4X,4W,4V,4U,4T,4S,4R,4Q,4P,4O,2H,79,2G,2F,2E,2D,2C,2B,2A,2z,2y,2x,2h,2g,2f,2e,2d,2w,2c,2b,2a,29,28,27,26,25,23,22,21,1L,20,1Z,1Y,1X,1W,1V,4N,89,6p,6o,6n,6m,6l,6k,6j,6i,6h,6g,3P,85,3O,3N,3M,3L,3K,3J,3I,3H,3G,3F,3E,3D,3C,3B,3A,3z,3y,3x,3w,3v,3u,3t,4M,73,4L,4K,4J,4I,4H,4G,4F,4E,4D,4C,6f,6e,0];F.6d=M(L,l){J b=C.1d;D(L.1U==\'4B\'){C.1y.6c(L,l);D(l<C.1d.S){K}K 14}J c=C.4A(L)-1;D(c>=0){J t=L.6a;J r=c-l+1;L.1h=L.1h.2v(0,r)+b.4z().4y(/,/g,\'\')+L.1h.2v(r+l);C.6b(L,c+(l<b.S?2:1));L.6a=t}};F.4o=M(67){J k=67.3s();J m=C.1s[F.1b-1];J b=C.1d;J 1S=b.S;J i,j,l,p,c;D(!1S||C.15!=0){K-1}1e(i=1;i<m.S;i++)D(m[i].1c(k)>=0){17}p=1S-1;1R(l=i){W 1:D(m[1].1c(k)==3){17}W 2:66:i=p;1x(i>=0&&b[i]<C.3r&&C.1T.1c(b[i])<0)i--;D(i<0){K-1}1x(i-1>=0&&(C.1T.1c(b[i-1])>=0||b[i-1]>C.3r)&&C.64(b[i-1],b[i])<0)i--;D(i==1S-1&&i-1>=0&&(j=C.2u(b[i-1]))>0){1R(b[i]){W C.4u:W C.4t:D((i-2<0||(j<24&&b[i-2]!=C.1J&&b[i-2]!=C.1I)||(j>=24&&b[i-2]!=C.4x&&b[i-2]!=C.4w))&&(l==2||(l==1&&F.1H(k,1)==1)))i--;17;W C.63:W C.62:D(i-2<0||(b[i-2]!=C.4x&&b[i-2]!=C.4w))i--;17;W C.61:W C.60:D((!F.1D)&&i-2>=0&&b[i-2]!=C.1J&&b[i-2]!=C.1I){i--}17}}D(i==1S-1&&i-1>=0&&C.4v(b[i-1])>0){1R(b[i]){W C.4u:W C.4t:D(!F.1D)i--;17;W C.5Z:W C.5Y:D(!F.1D)i--;17}}D(i==1S-2&&i-1>=0){J 4s=C.2u(b[i]);D(4s>=0&&4s<24&(b[i-1]==C.1J||b[i-1]==C.1I)){i++}}p=i;17};D(F.1H(k,1)==3&&b[0]==\'d\'){K 0}K p};8O=\'8N\';F.1t=M(1K,5X,2r,4r,V,4q){J v=4r;1e(J i=0;i<v.S;i++){D(v[i]==5X){1R(2r){W 1:D(F.1H(V,1)==1){F.w++}D(i%2==0){C.2t(1K,v[i+1])}Z{C.2t(1K,v[i-1]);D(4q){C.15=C.1d.S+1}}i=4r.S;17;W 2:J j=F.1H(V,2);D(j>=0){D(j!=i){C.2t(1K,v[j]);F.2l=[1K,(C.1d[1K]).1f(0),v,V]}Z{C.2t(1K,v[0]);F.3q();D(4q){C.15=C.1d.S+1}}}}K 11}}K 14};F.3q=M(){F.2l=[-1,0,1g,\'z\']};F.4p=M(5W){D(C.15!=0){K 14}J p=F.4o(5W);J a=F.2l;J b=C.1d;J v,i,j;D(p<b.S-1&&p>0&&(i=C.3p.1c(b[p].1f(0)))>=0&&C.1Q.1c(b[p-1].1f(0))>=0){D(F.w==1){D(i%2==0){F.1t(p,b[p].1f(0),1,C.3p,C.1s[F.1b-1][1][1],14);D(b[0]==C.1J||b[0]==C.1I){F.1t(p-1,b[p-1].1f(0),1,C.1Q,C.1s[F.1b-1][1][1],14)}}Z{D(b[0]!=C.1J&&b[0]!=C.1I){F.1t(p-1,b[p-1].1f(0),1,C.1Q,C.1s[F.1b-1][1][1],14)}}K 11}}D(a[0]>=0&&p>0&&a[0]!=p){F.1t(a[0],a[1],2,a[2],a[3],14);1e(i=0;i<C.2s.S;i++){v=C.2s[i];D(F.1t(p,b[p].1f(0),2,v,a[3],11)){17}}K 11}K 14};F.1H=M(V,2r){J m=C.1s[F.1b-1];D(F.1b!=4){K m[2r].1c(V)}Z{J j=-1;1e(J i=0;i<4;i++){j=C.1s[i][2r].1c(V);D(j>=0){K j}}K j}};F.1P=M(){J d=8M 8L();d.8K(d.8J()+8I);J 5V=\';8H=\'+d.8G()+\';8F=/\';J 1h=C.P.1G?F.1b+8:F.1b;16.5U=\'|18-5T=\'+1h+5V};F.5C=M(){J c=16.5U.4n(\';\');1e(J i=0;i<c.S&&c[i].1c(\'|18-5T\')<0;i++);D(i==c.S){C.2q();F.5S()}Z{J 1h=8E(c[i].4n(\'=\')[1],10);F.1b=1h&7;C.P.1G=(1h&8)?11:14;F.5R()}};F.5G=M(){F.1D=!F.1D};F.4k=M(){F.1E.2p.3o=(F.1E.2p.3o==\'\')?\'5Q\':\'\';F.1P()};F.5S=M(){F.1E.2p.3o=\'\'};F.5R=M(){F.1E.2p.3o=\'5Q\'};F.4m=M(){D(!F.1E){J f=16.8D(\'4j\');f.8C=\'<4j 1q="8B" 2p="8A-8z: 8y 8x 8w; 8v: 8u; 8t: \'+5A+\'; 8s:\'+5B+\'; z-1j:4l; 8r:8q(5P=80); 5P:.80; 1l: 8p; 8o: 0; 8n: 0; 8m: 4l%; 1r-8l: 8k; 8j-8i: 8h;"><5O 8g="8f\\\'s 8e 8d - 8c://8b.8a.88/p/18">F</5O> 87.6 : <1F 2o="18" 1q="18-15" 1o="C.1w(0);" 1p="2n">\'+1n[0]+\'<1F 2o="18" 1q="18-5N" 1o="C.1w(1);" 1p="2n"> \'+1n[1]+\' <1F 2o="18" 1q="18-5M" 1o="C.1w(2);" 1p="2n"> \'+1n[2]+\' <1F 2o="18" 1q="18-5L" 1o="C.1w(3);" 1p="2n"> \'+1n[3]+\' <1F 2o="18" 1q="18-5K" 1o="C.1w(4);" 1p="2n"> \'+1n[4]+\' <1F 1q="18-5J" 1o="5H:C.P.2m();" 1p="5F">\'+1n[5]+\'<1F 1q="18-5I" 1o="5H:F.5G();" 1p="5F">\'+1n[6]+\' [&86;<a 5E="#" 1o="C.2m()">\'+1n[7]+\'</a> (84) <a 5E="#" 1o="F.4k()">\'+1n[8]+\'</a> (83) ]</4j>\';16.5D.82(f,16.5D.81);F.1E=f;F.5C()}};F.1b=0;F.1D=11;F.4i=4;F.2l=[-1,0,1g,-1];F.w=0;5B=\'7Z\';5A=\'7Y\';1n=[\'Tắt\',\'7X\',\'7W\',\'7V\',\'Tự độ5z\',\'7Uí7T tả\',\'Bỏ dấu 7Sểu mới\',\'Bật/Tắt\',\'Ẩn/7Rện bả5z điều 7Qển\'];5y=[];D(!1i.1C&&16.1B){1i.3n("7P",C.3l)}Z{1i.3m("7O",C.3l,14)}',62,619,'||||||||||||||||||||||||||||||||||||||CHIM|if||Mudim||||var|return|target|function|||Speller|||length|||key|case|count||else||true|||false|off|document|break|mudim|keyCode|range|method|indexOf|buffer|for|charCodeAt|null|value|window|index|lastkey|position|selection|LANG|onclick|type|id|text|modes|PutMark|VN|kp|SetMethod|while|HTMLEditor|ClearBuffer|separators|all|opera|newAccentRule|Panel|input|enabled|GetMarkTypeID|CHAR_Q|CHAR_q|pos|7900|dirty|character|textRange|SetPreference|vn_UW|switch|len|vowels|tagName|7906|7907|7904|7905|7902|7903|7901|7898|7899||416|417|7896|7897|7894|7895|7892|7893|7891|7888|7889|212|244|UI|doc|container|accent|Toggle|radio|name|style|SetDisplay|group|vncode_2|SetCharAt|CharIsUI|substring|7890|7884|7885|213|245|7886|7887|210|242|211|243|111|7862|7863|7860|7861|7858|7859|7856|7857|7854|7855|258|259|7852|7853|7850|7851|7848|7849|7846|7847|||||||||7844|7845|194|226|iframe|offset|charAt|selectionStart|DISPLAY_ID|Append|found|Activate|addEventListener|attachEvent|display|vn_OW|ResetAccentInfo|CHAR_0x80|toLowerCase|7920|7921|7918|7919|7916|7917|7914|7915|7912|7913|431|432|7908|7909|360|361|7910|7911|217|249|218|250|117|7840|7841|195|227|7842|7843|192|224|193|225||Attach|MouseDown|KeyHandler|KeyDown|charCode||ign|nodeValue|moveStart|word|parentNode|this|undefined|typeof|checked|getElementById|Set|oldMethod|div|TogglePanel|100|InitPanel|split|FindAccentPos|AdjustAccent|checkDouble|subsTab|uipos|CHAR_A|CHAR_a|CharIsO|CHAR_G|CHAR_g|replace|toString|GetCursorPosition|HTML|7882|7883|296|297|7880|7881|204|236|205|237|105|121|7878|7879|7876|7877|7874|7875|7872|7873|7870|7871|202|234|7864|7865|7868|7869|7866|7867|200|232|201|233|101|contentWindow|ProcessControlKey|Freeze|peckable|GetTarget|event|VK_SPACE|VK_ENTER|fromCharCode|String|start|GetRange|win|createRange|createTextRange|caret|contents|selectionEnd|ACCENTRULE_ID|SPELLCHECK_ID|Clear|up|lasts|IGNORE_ID|ng|PANEL_BACKGROUND|COLOR|GetPreference|body|href|checkbox|ToggleAccentRule|javascript|accentrule|checkspell|auto|viqr|telex|vni|acronym|opacity|None|HidePanel|ShowPanel|settings|cookie|tail|vk|charCodeAtPos|CHAR_E|CHAR_e|CHAR_y|CHAR_Y|CHAR_U|CHAR_u|CharPriorityCompare||default|nKey|||scrollTop|SetCursorPosition|Process|UpdateUI|272|273|7924|7925|7928|7929|7926|7927|7922|7923|221|253|vn_DD|vn_AW|vn_OO|vn_EE|vn_AA|vncode_1|vn_y0|vn_Y0|vn_i0|vn_I0|vn_e6|vn_E6|vn_e0|vn_E0|vn_u7|vn_U7|vn_u0|vn_U0|vn_o7|vn_O7|vn_o6|vn_O6|vn_o0|vn_O0|vn_a8|vn_A8|vn_a6|vn_A6|vn_a0|vn_A0|catch|try|contentDocument|getElementsByTagName|chim|onmousedown|onkeypress|onkeydown|which||metaKey|ctrlLeft|ctrlKey|IsHotkey|preventDefault||stopPropagation|AddKey|UpdateBuffer|VK_LIMIT|isHandled|startOffset|startContainer|moveEnd|GetCurrentWord|VK_ONOFF2|VK_ONOFF|VK_PANELTOGGLE|VK_DOWN_ARROW|VK_UP_ARROW|VK_PAGE_DOWN|VK_PAGE_UP|VK_END|VK_HOME|VK_RIGHT_ARROW|VK_LEFT_ARROW|VK_DELETE|BackSpace|release|VK_BACKSPACE|VK_TAB|setSelectionRange|boundingLeft|srcElement|push|CHAR_I|CHAR_i|consonants|vwchk|Last|nvchk|spchk|_|AIUEOYaiueoy|u2|u1|load|onload|khi|Hi|ki|nh|Ch|Viqr|Telex|VNI|lightYellow|Black||firstChild|insertBefore|F8|F9||nbsp|v0|com||google|code|http|Method|Input|Mudzot|title|10pt|size|font|center|align|width|right|top|fixed|alpha|filter|color|background|3px|padding|black|solid|1px|bottom|border|mudimPanel|innerHTML|createElement|parseInt|path|toGMTString|expire|604800000|getTime|setTime|Date|new|ot|is|0123456zsfrxj|6789ewoda|zsfrxj|ewoda|0123456|6789|frame|mousedown|keypress|keydown|shiftLetf|shiftKey|altLeft|altKey|returnValue|cancelBubble|setStart|setEnd||pasteHTML|160|getRangeAt|getSelection|119|120|128|unshift|select|collapse|move|parentElement|duplicate|TEXTAREA|findText|INPUT|inRange|textarea|BODY|nodeType|SwitchMethod|pop|dz|lord|cc|CGKNPTcgknpt|FfJjWwZz|io|ou|uu|uy|ay|eo|uo|ao|ye|oe|ue|ie|eu|iu|au|oi|ui|ai|oa|ua|ia|BDFJKLQSVWXZbdfjklqsvwxz|BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz|mu|my|0x80'.split('|'),0,{}))
COLOR='Black';
PANEL_BACKGROUND='lightYellow';
LANG=['Tắt','VNI','Telex','Viqr','Tự động','Chính tả','Bỏ dấu kiểu mới','Bật/Tắt','Ẩn/Hiện bảng điều khiển'];
IGNORE_ID = [];