﻿
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
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c]);return p}('D=P(){L 4d};J=P(){L 4d};K 3k=[\'19-16\',\'19-5O\',\'19-5N\',\'19-5M\',\'19-5L\'];K 5v=\'19-5K\';K 5u=\'19-5J\';D.4u=\'A\';D.4v=\'a\';D.5Z=\'E\';D.60=\'e\';D.63=\'U\';D.64=\'u\';D.4x=\'G\';D.4y=\'g\';D.1K=\'Q\';D.1L=\'q\';D.61=\'y\';D.62=\'Y\';D.7F=\'i\';D.7E=\'I\';D.3s=5l.5k(9Z);D.1U="7M";D.1C=" !@#$%^&*()7L+=-{}[]|\\\\:\\";\'<>?,./~`\\r\\n\\t";D.16=0;D.1b=[];D.1O=14;D.2w=P(u){K n,2j=D.2j;u=u.1g(0);1f(n=0;2j[n]!=0&&2j[n]!=u;n++){}L 2j[n]!=0?n:-1};D.4w=P(u){K n,O=D.O;u=u.1g(0);1f(n=0;O[n]!=0&&O[n]!=u;n++){}L O[n]!=0?n:-1};D.66=P(7O,7N){K 1v=D.1v;K n,i=-1,j=-1,u;1f(n=0,u=7O.1g(0);1v[n]!=0&&1v[n]!=u;n++){}F(1v[n]!=0){i=n}1f(n=0,u=7N.1g(0);1v[n]!=0&&1v[n]!=u;n++){}F(1v[n]){j=n}L i-j};D.2v=P(n,c){D.1b[n]=5l.5k(c)};D.S=P(){L 4d};D.S.1I=15;D.S.1m=0;D.S.11=0;D.S.1U=[];D.S.5y=[];D.S.2n=P(){D.S.1I=!D.S.1I;J.1R()};D.S.4i=P(1m,W){D.S.1U[D.S.11]=D.S.1m;D.S.5y[D.S.11++]=W;D.S.1m=1m};D.S.5w=P(){D.S.1m=-1;D.S.11=0};D.S.7I=P(){L D.S.5y[D.S.11-1]};K 9Y=\'9X\';D.3l=P(11,1j,W){K 7G="9W";K 7K="7M|9V|\'`~?.^*+=";K 7H="|9U|9T|9S|9R|9Q|9P|9O|9N|9M|9L|9K|9J|9I|9H|9G|9F|9E|9D|9C|9B|9A|9z|";K 7J="9y";K 1C="!@#$%^&*()7L+=-{}[]|\\\\:\\";\'<>?,./~`";F(1C.1e(W)>=0){D.1B();L}F(D.S.1I&&!D.16){K 1w=7K.1e(W);F(!11){F(7J.1e(W)>=0){D.16=-1}X F(1w>=0&&1w<12){D.S.4i(0,W)}X F(1w==12||1w>37){L}X{D.S.5w()}}X F(1w==12||1w>37){D.1B();L}X F(1w>12){D.16=11}X F(1w>=0){F(D.S.1m<0){K 5x;F((1j==D.1L||1j==D.1K)&&((5x=D.2w(W))<0||5x>=24)){D.16=1}X F(W==\'e\'||W==\'i\'||W==\'E\'||W==\'I\'){F(D.1b.V>1&&(1j==\'g\'||1j==\'G\')){D.16=1}F(1j==\'c\'||1j==\'C\'){D.16=1}}X{D.S.4i(11,W)}}X F(11-D.S.1m>1){D.16=11}X{K w="|"+D.S.7I().3t()+W.3t()+"|";F(7H.1e(w)<0){D.16=11}X{D.S.4i(11,W)}}}X{1S(W){Z\'h\':Z\'H\':F(1j>=D.3s||"9x".1e(1j)<0){D.16=11}18;Z\'g\':Z\'G\':F(1j!=\'n\'&&1j!=\'N\'){D.16=11}18;Z\'r\':Z\'R\':F(1j!=\'t\'&&1j!=\'T\'){D.16=11}18;67:F(7G.1e(1j)>=0){D.16=11}18}}}D.1b.7D(W);K s=[\'1\',\'s\',"\'",\'s\'];L J.4q(s[J.1d-1])};D.7c=P(W){K p=-1;K i,j=-1;K b,c=0,9w,l;K 11=D.1b.V;K m=D.1y[J.1d-1],n;K v=1h;F(!11||D.16!=0){L D.3l(0,0,W)}b=D.1b;c=b[p=11-1];n=W.3t();1f(l=1;l<m.V;l++)F(m[l].1e(n)>=0){18}F(l>=m.V){L D.3l(11,c,W)}F((p=J.4p(n))<0){L D.3l(11,c,W)}c=b[p];K x=c.1g(0);K 3m=14;F(l==1){m=m[0];1f(i=0;!3m&&i<m.V;i++){K k=m[i];F(k[0]==n){1f(i=1;i<k.V;i++){v=D.6w[k[i]];J.4q(n);x=b[p].1g(0);F(J.1z(n,1)==3){p=0;c=b[p];x=c.1g(0)}F(J.1u(p,x,1,v,n,15)){F(p>0&&J.1z(n,1)==1&&p<11-1&&D.4w(b[p])>=0&&D.2w(b[p-1])>=0&&b[p+1]!=D.7F&&b[p+1]!=D.7E){J.1u(p-1,b[p-1].1g(0),1,D.1J,n,14)}3m=15;18}}18}}}X{1f(i=0;i<D.2t.V;i++){v=D.2t[i];F(J.1u(p,x,2,v,n,15)){3m=15;18}}}F(!3m){L D.3l(11,c,W)}F(D.16!=0){D.1b.7D(W)}L p>=0};K 9v=\'9u\';D.7w=P(){K 11=D.1b.V;F(J.2m[0]==11-1)J.3r();F(11<=0){D.1O=15}X{--11;D.1b.9t();F(11==D.S.1m){D.S.1m=D.S.1U[--D.S.11]}F((D.16<0&&!11)||(11<=D.16)){D.16=0}}};D.1B=P(){D.16=0;J.w=0;D.1b=[];D.S.5w();J.3r()};D.2r=P(){F(4f(3k)!="4e"&&J.1d<3k.V){K r;1f(K i=0;i<4;i++){r=17.4h(3k[i]);F(r){r.4g=14}}r=17.4h(3k[J.1d]);F(r){r.4g=15}}F(4f(5v)!="4e"){K r=17.4h(5v);F(r){r.4g=D.S.1I}}F(4f(5u)!="4e"){K r=17.4h(5u);F(r){r.4g=J.1F}}};D.9s=P(){D.1B();J.1d=(++J.1d%5);D.2r();J.1R()};D.1x=P(m){D.1B();J.1d=m;D.2r();J.1R()};D.2n=P(){K p;F(!(p=J.1G)){J.4n()}F(J.1d==0){D.1x(J.4j)}X{J.4j=J.1d;D.1x(0)}J.1R()};D.5g=P(e){K r;F(e==1h){e=1k.5h}F(e==1h){L 1h}F(e.7C!=1h){r=e.7C}X{r=e.M;1p(r&&r.9r!=1)r=r.4c}F(r.1V==\'9q\'){r=r.4c}D.5f=r.1V==\'4C\'||r.1r==\'9p\'||r.1r==\'1t\';L r};D.4B=P(M){F(M==1h||M.1i==1h||M.1i.V==0){L-1}F(4f(M.3j)!=\'4e\'){F(M.3j<0||M.3j>M.V||M.5t<0||M.5t>M.V||M.5t<M.3j){L-1}L M.3j}F(17.1n){K 1n=17.1n.5p();K 1Q=M.5q();F(1Q==1h||1n==1h||((1n.1t!="")&&1Q.9o(1n)==14)){L-1}F(1n.1t==""){K 1l=1;F(M.1V=="9n"){K 5s=1Q.1t;1p(1l<5s.V){1Q.9m(5s.2x(1l));F(1Q.7B==1n.7B){18}1l++}}X F(M.1V=="9l"){K 5r=17.1n.5p().9k();1l=M.1i.V+1;1p(5r.9j()==M&&5r.9i("1P",1)==1){--1l;F(M.1i.1g(1l)==10){1l-=1}}F(1l==M.1i.V+1){1l=-1}}L 1l}L 1Q.1t.1e(1n.1t)}};D.6c=P(M,p){F(p<0){L}F(M.7A){M.7A(p,p)}X F(M.5q){K 1c=M.5q();1c.9h(15);1c.7i(\'1P\',p);1c.4a(\'1P\',p);1c.9g()}};D.7d=P(M){D.1B();F(M.1V!=\'4C\'){K 1C=D.1C;K c=D.4B(M)-1;F(c>0){1p(c>=0&&1C.1e(M.1i.3i(c))<0){D.1b.9f(M.1i.3i(c));c=c-1}}}X{D.1b=D.1A.7j(M).4o(\'\')}D.1O=14};D.7z=9;D.7y=8;D.5j=13;D.7v=46;D.5i=32;D.7e=9e;D.7u=37;D.7t=39;D.7s=36;D.7r=35;D.7q=33;D.7p=34;D.7o=38;D.7n=40;D.7l=9d;D.7k=4O;D.7m=9c;D.5d=P(1a,7x){1S(1a){Z D.7z:Z D.5j:D.1B();18;Z D.7y:F(!7x){D.7w()}18;Z D.7v:Z D.7u:Z D.7t:Z D.7s:Z D.7r:Z D.7q:Z D.7p:Z D.7o:Z D.7n:D.1O=15;18}};D.78=P(e,k){F(k==D.7m){J.4l();L 15}X F(k==D.7l||k==D.7k){D.2n();L 15}L 14};D.1A=P(){L 4d};D.1A.5n=P(M){F(!M.4c.3g){L}K 5o=M.4c.3g.5c;L(!1k.1E&&17.1D)?5o.17.1n.5p():5o.9b().9a(0)};D.1A.7j=P(M){K 1c=D.1A.5n(M);F(!1c){L\'\'}F(!1k.1E&&17.1D){1p(1c.4a(\'1P\',-1)==-1){F(D.1C.1e(1c.1t.3i(0))>=0){1c.4a(\'1P\',1);18}}L 1c.1t}K 4b=\'\';K s;F(!(s=1c.7h.49)){L\'\'}K c=1c.7g-1;F(c>0){1p(c>=0&&D.1C.1e(s.3i(c))<0&&s.1g(c)!=99){4b=s.3i(c)+4b;c=c-1}}L 4b};D.1A.6d=P(M,l){K 1c=D.1A.5n(M);K b=D.1b;F(!1k.1E&&17.1D){K x=-l;1c.4a(\'1P\',x);1c.7i(\'1P\',x+b.V);1c.98(b.4A().4z(/,/g,\'\'));L}K 2l=1c.7h;K 3h=1c.7g;K 5m=3h-l;2l.49=2l.49.2x(0,5m)+b.4A().4z(/,/g,\'\')+2l.49.2x(5m+l);F(l<b.V){3h++}1c.96(2l,3h);1c.95(2l,3h)};D.5e=P(M){K 48=5z;F(48.V>0){1f(K i=0;i<48.V;i++){F(M.1s==48[i]){L 15}}}L 14};D.44=P(e){F(e==1h){e=1k.5h}F(e.7f==15){L}e.7f=15;K 1a=e.1a;F(1a==0){1a=e.47}F(1a==0){1a=e.74}F(!J.1d){L}K M=1h;F(!(M=D.5g(e))||!D.5f||D.5e(M)){L}F(e.77||e.76||e.75){L}F(e.47==1h||e.47!=0){K W=5l.5k(1a);F(1a==D.5i||1a==D.5j){D.1B()}X F(1a>D.5i&&1a<D.7e){F(D.1O){D.7d(M)}K l=D.1b.V;F(D.7c(W)){F(e.7b){e.7b()}F(e.7a){e.7a()}e.94=15;e.93=14;J.6e(M,l)}}X{D.1O=15}}X{D.5d(1a,15)}};D.45=P(e){K M=1h;F(e==1h){e=1k.5h}F(D.78(e,e.1a)){L}F(e.77||e.76||e.92||e.91||e.75||e.90||e.8Z){L}F(!(M=D.5g(e))||!D.5f||D.5e(M)){L}K 1a=e.1a;F(1a==0){1a=e.47}F(1a==0){1a=e.74}D.5d(1a,14)};D.43=P(e){D.3n();D.1O=15};D.42=P(e,r){F(!e){L}F(!e.6Z){F(!r){F(!1k.1E&&17.1D){e.3p(\'72\',D.45);e.3p(\'71\',D.44);e.3p(\'70\',D.43)}X{e.3o(\'8Y\',D.45,14);e.3o(\'8X\',D.44,14);e.3o(\'8W\',D.43,14)}}X{e.72=D.45;e.71=D.44;e.70=D.43}e.6Z=15}K f=e.6Y(\'3g\');1f(K i=0;i<f.V;i++){K 2k=(!1k.1E&&17.1D)?f[i].5c.17:f[i].6X;6W{2k.3g=f[i];D.42(2k,14)}6V(e){}}K f=e.6Y(\'8V\');1f(K i=0;i<f.V;i++){K 2k=(!1k.1E&&17.1D)?f[i].5c.17:f[i].6X;6W{2k.3g=f[i];D.42(2k,14)}6V(e){}}};D.3n=P(){J.4n();D.42(17,15);D.2r()};D.6U=[65,3Z,3X,3V,3T,3R];D.6T=[97,41,3Y,3W,3U,3S];D.6S=[3e,3c,3a,30,2Y,2W];D.6R=[3f,3d,3b,31,2Z,2X];D.6Q=[2U,2S,2Q,2O,2M,2K];D.6P=[2V,2T,2R,2P,2N,2L];D.6O=[79,2H,2F,2D,2B,2z];D.6N=[2J,2I,2G,2E,2C,2A];D.6M=[2h,2f,2y,2c,2a,28];D.6L=[2i,2g,2e,2d,2b,29];D.6K=[26,23,1N,20,1Y,1W];D.6J=[27,25,22,21,1Z,1X];D.6I=[85,3O,3M,3K,3I,3G];D.6H=[3Q,3P,3N,3L,3J,3H];D.6G=[3E,3C,3A,3y,3w,3u];D.6F=[3F,3D,3B,3z,3x,3v];D.6E=[69,59,57,55,53,51];D.6D=[5b,5a,58,56,54,52];D.6C=[4Z,4X,4V,4T,4R,4P];D.6B=[50,4Y,4W,4U,4S,4Q];D.6A=[73,4L,4J,4H,4F,4D];D.6z=[4N,4M,4K,4I,4G,4E];D.6y=[89,6p,6n,6l,6j,6h];D.6x=[4O,6q,6o,6m,6k,6i];D.2t=[D.6U,D.6T,D.6S,D.6R,D.6Q,D.6P,D.6O,D.6N,D.6M,D.6L,D.6K,D.6J,D.6I,D.6H,D.6G,D.6F,D.6E,D.6D,D.6C,D.6B,D.6A,D.6z,D.6y,D.6x];D.6v=[65,3e,3Z,3c,3X,3a,3V,30,3T,2Y,3R,2W,2U,3e,2S,3c,2Q,3a,2O,30,2M,2Y,2K,2W,97,3f,41,3d,3Y,3b,3W,31,3U,2Z,3S,2X,2V,3f,2T,3d,2R,3b,2P,31,2N,2Z,2L,2X];D.6s=[65,2U,3Z,2S,3X,2Q,3V,2O,3T,2M,3R,2K,3e,2U,3c,2S,3a,2Q,30,2O,2Y,2M,2W,2K,97,2V,41,2T,3Y,2R,3W,2P,3U,2N,3S,2L,3f,2V,3d,2T,3b,2R,31,2P,2Z,2N,2X,2L];D.6t=[79,2h,2H,2f,2F,2y,2D,2c,2B,2a,2z,28,26,2h,23,2f,1N,1N,20,2c,1Y,2a,1W,28,2J,2i,2I,2g,2G,2e,2E,2d,2C,2b,2A,29,27,2i,25,2g,22,2e,21,2d,1Z,2b,1X,29];D.2u=[79,26,2H,23,2F,1N,2D,20,2B,1Y,2z,1W,2h,26,2f,23,2y,1N,2c,20,2a,1Y,28,1W,2J,27,2I,25,2G,22,2E,21,2C,1Z,2A,1X,2i,27,2g,25,2e,22,2d,21,2b,1Z,29,1X];D.1J=[85,3E,3O,3C,3M,3A,3K,3y,3I,3w,3G,3u,3Q,3F,3P,3D,3N,3B,3L,3z,3J,3x,3H,3v];D.6u=[69,4Z,59,4X,57,4V,55,4T,53,4R,51,4P,5b,50,5a,4Y,58,4W,56,4U,54,4S,52,4Q];D.6r=[68,6f,4m,6g];D.6w=[D.6v,D.6u,D.6t,D.6s,D.2u,D.1J,D.6r];D.1y=[[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6]],\'8U\',\'8T\'],[[[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6]],\'8S\',\'8R\'],[[[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'^+(d\',"=\'`?~."],[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6],[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6],[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'8Q^+(d\',"8P=\'`?~."]];D.2j=[85,3O,3M,3K,3I,3G,3Q,3P,3N,3L,3J,3H,3E,3C,3A,3y,3w,3u,3F,3D,3B,3z,3x,3v,73,4L,4J,4H,4F,4D,4N,4M,4K,4I,4G,4E,0];D.O=[79,2H,2F,2D,2B,2z,2J,2I,2G,2E,2C,2A,2h,2f,2y,2c,2a,28,2i,2g,2e,2d,2b,29,26,23,1N,20,1Y,1W,27,25,22,21,1Z,1X,0];D.1v=[97,65,41,3Z,3Y,3X,3W,3V,3U,3T,3S,3R,3f,3e,3d,3c,3b,3a,31,30,2Z,2Y,2X,2W,2V,2U,2T,2S,2R,2Q,2P,2O,2N,2M,2L,2K,5b,69,5a,59,58,57,56,55,54,53,52,51,50,4Z,4Y,4X,4W,4V,4U,4T,4S,4R,4Q,4P,2J,79,2I,2H,2G,2F,2E,2D,2C,2B,2A,2z,2i,2h,2g,2f,2e,2y,2d,2c,2b,2a,29,28,27,26,25,23,22,1N,21,20,1Z,1Y,1X,1W,4O,89,6q,6p,6o,6n,6m,6l,6k,6j,6i,6h,3Q,85,3P,3O,3N,3M,3L,3K,3J,3I,3H,3G,3F,3E,3D,3C,3B,3A,3z,3y,3x,3w,3v,3u,4N,73,4M,4L,4K,4J,4I,4H,4G,4F,4E,4D,6g,6f,0];J.6e=P(M,l){K b=D.1b;F(M.1V==\'4C\'){D.1A.6d(M,l);F(l<D.1b.V){L}L 14}K c=D.4B(M)-1;F(c>=0){K t=M.6b;K r=c-l+1;M.1i=M.1i.2x(0,r)+b.4A().4z(/,/g,\'\')+M.1i.2x(r+l);D.6c(M,c+(l<b.V?2:1));M.6b=t}};J.4p=P(6a){K k=6a.3t();K m=D.1y[J.1d-1];K b=D.1b;K 1T=b.V;K i,j,l,p,c;F(!1T||D.16!=0){L-1}1f(i=1;i<m.V;i++)F(m[i].1e(k)>=0){18}p=1T-1;1S(l=i){Z 1:F(J.1z(k,1)==3){18}Z 2:67:i=p;1p(i>=0&&b[i]<D.3s&&D.1U.1e(b[i])<0)i--;F(i<0){L-1}1p(i-1>=0&&(D.1U.1e(b[i-1])>=0||b[i-1]>D.3s)&&D.66(b[i-1],b[i])<0)i--;F(i==1T-1&&i-1>=0&&(j=D.2w(b[i-1]))>0){1S(b[i]){Z D.4v:Z D.4u:F((i-2<0||(j<24&&b[i-2]!=D.1L&&b[i-2]!=D.1K)||(j>=24&&b[i-2]!=D.4y&&b[i-2]!=D.4x))&&(l==2||(l==1&&J.1z(k,1)==1)))i--;18;Z D.64:Z D.63:F(i-2<0||(b[i-2]!=D.4y&&b[i-2]!=D.4x))i--;18;Z D.62:Z D.61:F((!J.1F)&&i-2>=0&&b[i-2]!=D.1L&&b[i-2]!=D.1K){i--}18}}F(i==1T-1&&i-1>=0&&D.4w(b[i-1])>0){1S(b[i]){Z D.4v:Z D.4u:F(!J.1F)i--;18;Z D.60:Z D.5Z:F(!J.1F)i--;18}}F(i==1T-2&&i-1>=0){K 4t=D.2w(b[i]);F(4t>=0&&4t<24&(b[i-1]==D.1L||b[i-1]==D.1K)){i++}}p=i;18};F(J.1z(k,1)==3&&b[0]==\'d\'){L 0}L p};8O=\'8N\';J.1u=P(1M,5Y,2s,4s,W,4r){K v=4s;1f(K i=0;i<v.V;i++){F(v[i]==5Y){1S(2s){Z 1:F(J.1z(W,1)==1){J.w++}F(i%2==0){D.2v(1M,v[i+1])}X{D.2v(1M,v[i-1]);F(4r){D.16=D.1b.V+1}}i=4s.V;18;Z 2:K j=J.1z(W,2);F(j>=0){F(j!=i){D.2v(1M,v[j]);J.2m=[1M,(D.1b[1M]).1g(0),v,W]}X{D.2v(1M,v[0]);J.3r();F(4r){D.16=D.1b.V+1}}}}L 15}}L 14};J.3r=P(){J.2m=[-1,0,1h,\'z\']};J.4q=P(5X){F(D.16!=0){L 14}K p=J.4p(5X);K a=J.2m;K b=D.1b;K v,i,j,c;F(p<0){L 14}i=D.2u.V-1;c=b[p].1g(0);1p(i>=0&&D.2u[i]!=c){i--}j=D.1J.V-1;F(p>0){c=b[p-1].1g(0);1p(j>=0&&D.1J[j]!=c){j--}}X{j=-1}F(p<b.V-1&&p>0&&i>=0&&j>=0){F(J.w==1){F(i%2==0){J.1u(p,b[p].1g(0),1,D.2u,D.1y[J.1d-1][1][1],14);F(b[0]==D.1L||b[0]==D.1K){J.1u(p-1,b[p-1].1g(0),1,D.1J,D.1y[J.1d-1][1][1],14)}}X{F(b[0]!=D.1L&&b[0]!=D.1K){J.1u(p-1,b[p-1].1g(0),1,D.1J,D.1y[J.1d-1][1][1],14)}}L 15}}F(a[0]>=0&&p>0&&a[0]!=p){J.1u(a[0],a[1],2,a[2],a[3],14);1f(i=0;i<D.2t.V;i++){v=D.2t[i];F(J.1u(p,b[p].1g(0),2,v,a[3],15)){18}}L 15}L 14};J.1z=P(W,2s){K m=D.1y[J.1d-1];F(J.1d!=4){L m[2s].1e(W)}X{K j=-1;1f(K i=0;i<4;i++){j=D.1y[i][2s].1e(W);F(j>=0){L j}}L j}};J.1R=P(){K d=8M 8L();d.8K(d.8J()+8I);K 5W=\';8H=\'+d.8G()+\';8F=/\';K 1i=D.S.1I?J.1d+8:J.1d;17.5V=\'|19-5U=\'+1i+5W};J.5D=P(){K c=17.5V.4o(\';\');1f(K i=0;i<c.V&&c[i].1e(\'|19-5U\')<0;i++);F(i==c.V){D.2r();J.5T()}X{K 1i=8E(c[i].4o(\'=\')[1],10);J.1d=1i&7;D.S.1I=(1i&8)?15:14;J.5S()}};J.5H=P(){J.1F=!J.1F};J.4l=P(){J.1G.2q.3q=(J.1G.2q.3q==\'\')?\'5R\':\'\';J.1R()};J.5T=P(){J.1G.2q.3q=\'\'};J.5S=P(){J.1G.2q.3q=\'5R\'};J.4n=P(){F(!J.1G){K f=17.8D(\'4k\');f.8C=\'<4k 1s="8B" 2q="8A-8z: 8y 8x 8w; 8v: 8u; 8t: \'+5B+\'; 8s:\'+5C+\'; z-1l:4m; 8r:8q(5Q=80); 5Q:.80; 1m: 8p; 8o: 0; 8n: 0; 8m: 4m%; 1t-8l: 8k; 8j-8i: 8h;"><5P 8g="8f\\\'s 8e 8d - 8c://19.8b.8a">J</5P> 88.6 : <1H 2p="19" 1s="19-16" 1q="D.1x(0);" 1r="2o">\'+1o[0]+\'<1H 2p="19" 1s="19-5O" 1q="D.1x(1);" 1r="2o"> \'+1o[1]+\' <1H 2p="19" 1s="19-5N" 1q="D.1x(2);" 1r="2o"> \'+1o[2]+\' <1H 2p="19" 1s="19-5M" 1q="D.1x(3);" 1r="2o"> \'+1o[3]+\' <1H 2p="19" 1s="19-5L" 1q="D.1x(4);" 1r="2o"> \'+1o[4]+\' <1H 1s="19-5K" 1q="5I:D.S.2n();" 1r="5G">\'+1o[5]+\'<1H 1s="19-5J" 1q="5I:J.5H();" 1r="5G">\'+1o[6]+\' [&87;<a 5F="#" 1q="D.2n()">\'+1o[7]+\'</a> (86) <a 5F="#" 1q="J.4l()">\'+1o[8]+\'</a> (84) ]</4k>\';17.5E.83(f,17.5E.82);J.1G=f;J.5D()}};J.1d=0;J.1F=15;J.4j=4;J.2m=[-1,0,1h,-1];J.w=0;5C=\'81\';5B=\'7Z\';1o=[\'Tắt\',\'7Y\',\'7X\',\'7W\',\'Tự độ5A\',\'7Ví7U tả\',\'Bỏ dấu 7Tểu mới\',\'Bật/Tắt\',\'Ẩn/7Sện bả5A điều 7Rển\'];5z=[];F(!1k.1E&&17.1D){1k.3p("7Q",D.3n)}X{1k.3o("7P",D.3n,14)}',62,620,'|||||||||||||||||||||||||||||||||||||||CHIM||if||||Mudim|var|return|target|||function|||Speller|||length|key|else||case||count|||false|true|off|document|break|mudim|keyCode|buffer|range|method|indexOf|for|charCodeAt|null|value|lastkey|window|index|position|selection|LANG|while|onclick|type|id|text|PutMark|VN|kp|SetMethod|modes|GetMarkTypeID|HTMLEditor|ClearBuffer|separators|all|opera|newAccentRule|Panel|input|enabled|vn_UW|CHAR_Q|CHAR_q|pos|7900|dirty|character|textRange|SetPreference|switch|len|vowels|tagName|7906|7907|7904|7905|7902|7903|7901|7898||7899|416|417|7896|7897|7894|7895|7892|7893|7891|7888|7889|212|244|UI|doc|container|accent|Toggle|radio|name|style|SetDisplay|group|vncode_2|vn_OW|SetCharAt|CharIsUI|substring|7890|7884|7885|213|245|7886|7887|210|242|211|243|111|7862|7863|7860|7861|7858|7859|7856|7857|7854|7855|258|259|7852|7853|7850|7851|7848|7849|||||||||7846|7847|7844|7845|194|226|iframe|offset|charAt|selectionStart|DISPLAY_ID|Append|found|Activate|addEventListener|attachEvent|display|ResetAccentInfo|CHAR_0x80|toLowerCase|7920|7921|7918|7919|7916|7917|7914|7915|7912|7913|431|432|7908|7909|360|361|7910|7911|217|249|218|250|117|7840|7841|195|227|7842|7843|192|224|193||225|Attach|MouseDown|KeyHandler|KeyDown||charCode|ign|nodeValue|moveStart|word|parentNode|this|undefined|typeof|checked|getElementById|Set|oldMethod|div|TogglePanel|100|InitPanel|split|FindAccentPos|AdjustAccent|checkDouble|subsTab|uipos|CHAR_A|CHAR_a|CharIsO|CHAR_G|CHAR_g|replace|toString|GetCursorPosition|HTML|7882|7883|296|297|7880|7881|204|236|205|237|105|121|7878|7879|7876|7877|7874|7875|7872|7873|7870|7871|202|234|7864|7865|7868|7869|7866|7867|200|232|201|233|101|contentWindow|ProcessControlKey|Freeze|peckable|GetTarget|event|VK_SPACE|VK_ENTER|fromCharCode|String|start|GetRange|win|createRange|createTextRange|caret|contents|selectionEnd|ACCENTRULE_ID|SPELLCHECK_ID|Clear|up|lasts|IGNORE_ID|ng|PANEL_BACKGROUND|COLOR|GetPreference|body|href|checkbox|ToggleAccentRule|javascript|accentrule|checkspell|auto|viqr|telex|vni|acronym|opacity|None|HidePanel|ShowPanel|settings|cookie|tail|vk|charCodeAtPos|CHAR_E|CHAR_e|CHAR_y|CHAR_Y|CHAR_U|CHAR_u||CharPriorityCompare|default|||nKey|scrollTop|SetCursorPosition|Process|UpdateUI|272|273|7924|7925|7928|7929|7926|7927|7922|7923|221|253|vn_DD|vn_AW|vn_OO|vn_EE|vn_AA|vncode_1|vn_y0|vn_Y0|vn_i0|vn_I0|vn_e6|vn_E6|vn_e0|vn_E0|vn_u7|vn_U7|vn_u0|vn_U0|vn_o7|vn_O7|vn_o6|vn_O6|vn_o0|vn_O0|vn_a8|vn_A8|vn_a6|vn_A6|vn_a0|vn_A0|catch|try|contentDocument|getElementsByTagName|chim|onmousedown|onkeypress|onkeydown||which|metaKey|ctrlLeft|ctrlKey|IsHotkey||preventDefault|stopPropagation|AddKey|UpdateBuffer|VK_LIMIT|isHandled|startOffset|startContainer|moveEnd|GetCurrentWord|VK_ONOFF2|VK_ONOFF|VK_PANELTOGGLE|VK_DOWN_ARROW|VK_UP_ARROW|VK_PAGE_DOWN|VK_PAGE_UP|VK_END|VK_HOME|VK_RIGHT_ARROW|VK_LEFT_ARROW|VK_DELETE|BackSpace|release|VK_BACKSPACE|VK_TAB|setSelectionRange|boundingLeft|srcElement|push|CHAR_I|CHAR_i|consonants|vwchk|Last|nvchk|spchk|_|AIUEOYaiueoy|u2|u1|load|onload|khi|Hi|ki|nh|Ch|Viqr|Telex|VNI|lightYellow||Black|firstChild|insertBefore|F8||F9|nbsp|v0||com|googlecode|http|Method|Input|Mudzot|title|10pt|size|font|center|align|width|right|top|fixed|alpha|filter|color|background|3px|padding|black|solid|1px|bottom|border|mudimPanel|innerHTML|createElement|parseInt|path|toGMTString|expire|604800000|getTime|setTime|Date|new|ot|is|0123456zsfrxj|6789ewoda|zsfrxj|ewoda|0123456|6789|frame|mousedown|keypress|keydown|shiftLetf|shiftKey|altLeft|altKey|returnValue|cancelBubble|setStart|setEnd||pasteHTML|160|getRangeAt|getSelection|119|120|128|unshift|select|collapse|move|parentElement|duplicate|TEXTAREA|findText|INPUT|inRange|textarea|BODY|nodeType|SwitchMethod|pop|dz|lord|cc|CGKNPTcgknpt|FfJjWwZz|yu|io|ou|uu|uy|ay|eo|uo|ao|ye|oe|ue|ie|eu|iu|au|oi|ui|ai|oa|ua|ia|BDFJKLQSVWXZbdfjklqsvwxz|BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz|mu|my|0x80'.split('|'),0,{}))
COLOR='Black';
PANEL_BACKGROUND='lightYellow';
LANG=['Tắt','VNI','Telex','Viqr','Tự động','Chính tả','Bỏ dấu kiểu mới','Bật/Tắt','Ẩn/Hiện bảng điều khiển'];
IGNORE_ID = [];
