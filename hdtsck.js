/*
 *
 *
脚本功能：忙豆听书 解锁付费听书购买下载⏬
软件版本：
下载地址：
脚本作者：**
更新时间：2024-4.24
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 红豆听书 解锁付费听书购买
^https?:\/\/md.liaoliaoy.com\/listen\/api\/getUserInfo url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/hdts.js
^https?:\/\/md.liaoliaoy.com\/listen\/api\/(buyBookInit|buyCard|batchBuyChapter|bookChapter|getNextChapter).*$ url script-request-body https://raw.githubusercontent.com/WeiGiegie/666/main/hdtsck.js
# > 去广告
^https?://case-cdn\.oceanplayable\.com url reject
^https?://ios\.bugly\.qq\.com url reject
^https?://ulogs\.um.*\.com url reject
^https?://token\.safebrowsing\.apple url reject
^https?://toblog\.ctobsnssdk\.com url reject

[mitm] 
hostname = md.liaoliaoy.com,www.yueliangfm.com,ios.bugly.qq.com,ulogs.umeng.com,ulogs.umengcloud.com,*toutiao.com,toblog.ctobsnssdk.com,token.safebrowsing.apple,toblog.ctobsnssdk.com


*
*
*/


function _0x96fb50(_0x3f4663,_0x17d9b0,_0x3abdd4,_0x41ea86,_0x54da41){return _0x486f(_0x3abdd4-0x2e0,_0x17d9b0);}(function(_0x93ba57,_0x5d9b3d){function _0x4da6b8(_0x1d72fb,_0x11ad7d,_0x37ca05,_0x3f8316,_0x4b4661){return _0x486f(_0x3f8316- -0x34b,_0x11ad7d);}function _0x2349c4(_0x4af428,_0x1d617e,_0x46f43f,_0x845156,_0x3b55c3){return _0xfe52(_0x845156- -0x286,_0x1d617e);}function _0x291319(_0x7253eb,_0x57976a,_0x3f8b40,_0x360171,_0x3144db){return _0x486f(_0x3144db- -0xe4,_0x360171);}function _0x10281a(_0x1dcc48,_0x1c0dc6,_0x58dda7,_0x14cc73,_0x52439f){return _0xfe52(_0x1c0dc6- -0x1af,_0x58dda7);}function _0x54baaa(_0x214f8b,_0x5aa965,_0x14e24f,_0x37eea4,_0x229561){return _0x486f(_0x37eea4- -0x158,_0x5aa965);}function _0x5ba241(_0x3ce8c0,_0x1bd247,_0x454cf3,_0xe4f6b5,_0x432ca7){return _0xfe52(_0x1bd247- -0x28,_0x454cf3);}var _0x9d7516=_0x93ba57();function _0xc03689(_0x316383,_0x5188fc,_0x29f9ed,_0x396323,_0x2f3916){return _0x486f(_0x5188fc-0x2ae,_0x2f3916);}function _0x398ad0(_0x24c473,_0x3da052,_0x3a9336,_0x3c8d19,_0x4e0718){return _0xfe52(_0x4e0718- -0x242,_0x3a9336);}function _0x435ed3(_0x4a4917,_0x38ebd6,_0x24041b,_0x2858be,_0x2424c9){return _0xfe52(_0x38ebd6- -0x368,_0x2424c9);}function _0x2fa115(_0x17920b,_0x40f829,_0x5129a,_0x339733,_0x45aabb){return _0x486f(_0x40f829-0x3b0,_0x5129a);}while(!![]){try{var _0x560b52=parseInt(_0x435ed3(-0x2cb,-0x2ff,-0x336,-0x2d3,-0x2e0))/0x1*(-parseInt(_0x54baaa(-0x161,"[mCN".split("").reverse().join(""),-0x123,-0x154,-0x16e))/0x2)+parseInt(_0x435ed3(-0x369,-0x347,-0x347,-0x349,-0x38a))/0x3+parseInt(_0xc03689(0x366,0x322,0x2e6,0x315,"\u004c\u0045\u0065\u0025"))/0x4*(parseInt(_0xc03689(0x33b,0x305,0x337,0x322,"U#ld".split("").reverse().join("")))/0x5)+parseInt(_0x2fa115(0x405,0x3e7,"\u0035\u0045\u0053\u0024",0x415,0x42b))/0x6+-parseInt(_0x54baaa(-0x168,"IRE2".split("").reverse().join(""),-0x182,-0x14b,-0x114))/0x7*(parseInt(_0x2349c4(-0x1c2,-0x23d,-0x1f2,-0x200,-0x232))/0x8)+parseInt(_0x435ed3(-0x2e1,-0x30c,-0x350,-0x2f4,-0x2f0))/0x9*(-parseInt(_0x4da6b8(-0x35f,"j4#e".split("").reverse().join(""),-0x352,-0x328,-0x354))/0xa)+parseInt(_0x2fa115(0x3b4,0x3b7,"%eEL".split("").reverse().join(""),0x3c0,0x3c5))/0xb*(parseInt(_0x2349c4(-0x2b0,-0x29a,-0x23f,-0x27e,-0x240))/0xc);if(_0x560b52===_0x5d9b3d){break;}else{_0x9d7516["\u0070\u0075\u0073\u0068"](_0x9d7516["\u0073\u0068\u0069\u0066\u0074"]());}}catch(_0x582f75){_0x9d7516["\u0070\u0075\u0073\u0068"](_0x9d7516['shift']());}}})(_0x395a,0x1dc99);var _0x1bc5cf=function(){function _0x38b521(_0x3ec761,_0x33dc24,_0x5d2619,_0x184419,_0x320a16){return _0xfe52(_0x5d2619- -0x304,_0x184419);}var _0x1c2126={'JWDqB':_0x38b521(-0x2ca,-0x26a,-0x296,-0x29d,-0x2ad)};var _0x222ed1=!![];return function(_0x5173ca,_0x165aa2){function _0x108598(_0xc32821,_0x50ef70,_0x22d842,_0x44b5cc,_0x448d61){return _0xfe52(_0x22d842-0x3ac,_0xc32821);}function _0x23c59e(_0x2953d2,_0x502954,_0x197503,_0x4fab0f,_0x3438ac){return _0x486f(_0x502954-0x33e,_0x2953d2);}if(_0x23c59e("IGW5".split("").reverse().join(""),0x37b,0x3a2,0x378,0x34b)!==_0x108598(0x3fb,0x434,0x42f,0x46d,0x470)){return!![];}else{var _0xc6d5d8=_0x222ed1?function(){function _0x27ac77(_0x8cbd83,_0x256f0e,_0x7529e,_0x390014,_0x5c8228){return _0xfe52(_0x390014- -0x271,_0x7529e);}if(_0x27ac77(-0x1ef,-0x1d1,-0x234,-0x203,-0x23d)===_0x1c2126['JWDqB']){if(_0x165aa2){var _0x2be6cd=_0x165aa2['apply'](_0x5173ca,arguments);_0x165aa2=null;return _0x2be6cd;}}else{_0x4289e2(0x0);}}:function(){};_0x222ed1=![];return _0xc6d5d8;}};}();(function(){function _0x110932(_0x18f0a8,_0x36c457,_0x1d0a5b,_0x436101,_0x93c204){return _0xfe52(_0x36c457-0x28d,_0x18f0a8);}function _0x5cd2c1(_0x24b722,_0x30b34b,_0xf585f6,_0xe95e1d,_0x30d626){return _0xfe52(_0xe95e1d- -0x41,_0xf585f6);}function _0x1356a2(_0x516257,_0x1c5bd0,_0x722331,_0x2176f6,_0x5dd079){return _0xfe52(_0x2176f6-0x312,_0x516257);}function _0xf532eb(_0x4c31cb,_0x50f3ec,_0x208e2f,_0x5266ea,_0x384204){return _0x486f(_0x50f3ec- -0x12f,_0x4c31cb);}var _0x699515={'KkEFj':_0x5cd2c1(-0x15,0xa,-0x19,-0x12,-0x12),'ZaXiv':function(_0x1aeba9,_0x114c5c){return _0x1aeba9+_0x114c5c;},"\u0072\u007a\u004e\u004b\u0050":function(_0x476da4){return _0x476da4();},"\u0070\u0069\u004e\u0046\u005a":_0x5cd2c1(-0x1,0x25,0x6,0x19,-0xe),'tSImA':_0x5566ea("Kb2c".split("").reverse().join(""),0x322,0x2d3,0x306,0x2e0),"\u0061\u004e\u0065\u0050\u0073":_0x5566ea("j4#e".split("").reverse().join(""),0x2b3,0x27d,0x291,0x265),'aucMR':function(_0x5c9fb6,_0xe5b580){return _0x5c9fb6(_0xe5b580);},'vIwgj':function(_0x18c981,_0xd486f4){return _0x18c981!==_0xd486f4;},"\u0075\u0046\u0067\u0053\u0072":_0x5cd2c1(-0x64,-0x5f,-0x7,-0x28,-0xc)};function _0x5566ea(_0x111931,_0x4130d3,_0x11bd2e,_0x1194e6,_0x25d24a){return _0x486f(_0x1194e6-0x28e,_0x111931);}_0x1bc5cf(this,function(){function _0x596163(_0x3349c7,_0x9eb30d,_0x20a788,_0x2b3b17,_0x2bdcf1){return _0xfe52(_0x2b3b17-0xb6,_0x3349c7);}function _0xff8cf4(_0x21bebe,_0x5c275b,_0x59a086,_0x11a8e3,_0x5df31e){return _0x486f(_0x5c275b-0xe8,_0x21bebe);}function _0x504c66(_0xb4374d,_0x54eb64,_0x294e9b,_0x33dc67,_0x444b34){return _0xfe52(_0x444b34-0x338,_0x54eb64);}function _0xecb2aa(_0x139e49,_0x168df7,_0xa11d39,_0x494f64,_0x5cc4ea){return _0x486f(_0x139e49- -0x16d,_0x168df7);}function _0x42e714(_0x17be57,_0x2ed301,_0x12f3ff,_0x4ebf7f,_0x2fb221){return _0x486f(_0x12f3ff- -0x34a,_0x2ed301);}function _0x18ea82(_0x2ace59,_0x473faa,_0x211292,_0x4bfdac,_0x316091){return _0x486f(_0x316091-0x2e6,_0x4bfdac);}function _0x1e044f(_0x1bec5d,_0x45f141,_0x431527,_0x56a83e,_0x1bf8aa){return _0x486f(_0x431527- -0x22b,_0x45f141);}if(_0x699515["\u0070\u0069\u004e\u0046\u005a"]!==_0xecb2aa(-0x131,"\u004c\u0045\u0065\u0025",-0x12a,-0x171,-0xfd)){if(_0x6879a9){var _0x1b7bed=_0x4745d4["\u0061\u0070\u0070\u006c\u0079"](_0x590fcf,arguments);_0x1cc66e=null;return _0x1b7bed;}}else{var _0x3dc9b6=new RegExp(_0x699515["\u004b\u006b\u0045\u0046\u006a"]);var _0xb3b383=new RegExp(_0x699515['tSImA'],"\u0069");var _0x1b5c60=_0x28e5bc(_0x699515["\u0061\u004e\u0065\u0050\u0073"]);if(!_0x3dc9b6["\u0074\u0065\u0073\u0074"](_0x1b5c60+_0x504c66(0x37c,0x387,0x397,0x3ca,0x3b9))||!_0xb3b383['test'](_0x1b5c60+_0x596163(0x105,0x10b,0x12c,0x135,0x100))){_0x699515["\u0061\u0075\u0063\u004d\u0052"](_0x1b5c60,"\u0030");}else{if(_0x699515["\u0076\u0049\u0077\u0067\u006a"](_0x699515["\u0075\u0046\u0067\u0053\u0072"],_0x699515['uFgSr'])){var _0x31aa0e=new _0x57061e(_0x699515["\u004b\u006b\u0045\u0046\u006a"]);var _0x458ef6=new _0x2bf0ea(_0xff8cf4("\u0053\u0065\u0024\u0029",0x150,0x193,0x15c,0x182),'i');var _0x13c130=_0x900c5a(_0xff8cf4("QlVD".split("").reverse().join(""),0xee,0xcc,0x12c,0x12a));if(!_0x31aa0e['test'](_0x699515["\u005a\u0061\u0058\u0069\u0076"](_0x13c130,_0x42e714(-0x305,"Q4j[".split("").reverse().join(""),-0x2c8,-0x2e6,-0x300)))||!_0x458ef6['test'](_0x13c130+_0x18ea82(0x339,0x33f,0x365,"xZXZ".split("").reverse().join(""),0x355))){_0x13c130('0');}else{_0x699515['rzNKP'](_0x58ee81);}}else{_0x28e5bc();}}}})();})();var _0x2a6202=function(){function _0x2acf59(_0x3f384c,_0x1df313,_0x4eb28c,_0x560b77,_0x2487b8){return _0xfe52(_0x2487b8- -0x48,_0x1df313);}var _0x4c2cab={'QEQyv':_0x2acf59(-0x55,-0x78,-0x78,-0x4e,-0x34)};var _0x59ca33=!![];return function(_0x4c4703,_0x2c7bfc){function _0x4b96c7(_0x58f7a4,_0x21d4bb,_0x5d0b56,_0x21414b,_0x541195){return _0xfe52(_0x5d0b56- -0x26e,_0x58f7a4);}var _0x34491c={'eXFlE':function(_0x3fe4eb,_0x1bd786){return _0x3fe4eb(_0x1bd786);},'ubpVM':function(_0x5f44d,_0x141dd4){return _0x5f44d+_0x141dd4;},'GtLcY':_0x4c2cab['QEQyv']};function _0x2a1519(_0x552773,_0x494cef,_0x4f377b,_0x6c013a,_0x152c03){return _0x486f(_0x4f377b-0x222,_0x494cef);}function _0x11d152(_0x5a01c4,_0x381c44,_0x2f2827,_0x2792a6,_0x11bc8d){return _0xfe52(_0x2f2827- -0x2db,_0x11bc8d);}if(_0x11d152(-0x2e0,-0x27c,-0x2a8,-0x26a,-0x2b4)===_0x11d152(-0x2b7,-0x29e,-0x2a8,-0x2ae,-0x2ad)){var _0x53f270=_0x59ca33?function(){function _0x6de2dd(_0x498cbc,_0x532673,_0x17a3bf,_0xd6c66c,_0xec7919){return _0x486f(_0x498cbc-0x380,_0x532673);}function _0x48ac1d(_0x3eceec,_0x1b21e6,_0x17b18a,_0x7e89e3,_0x415231){return _0x486f(_0x7e89e3- -0x200,_0x415231);}if(_0x2c7bfc){if(_0x48ac1d(-0x1e8,-0x1d5,-0x193,-0x1b9,'3ZnB')===_0x48ac1d(-0x1e1,-0x177,-0x1c8,-0x19f,"6*#r".split("").reverse().join(""))){return![];}else{var _0x40b87f=_0x2c7bfc["\u0061\u0070\u0070\u006c\u0079"](_0x4c4703,arguments);_0x2c7bfc=null;return _0x40b87f;}}}:function(){};_0x59ca33=![];return _0x53f270;}else{_0x49d110=_0x34491c['eXFlE'](_0x1a9694,_0x34491c['ubpVM'](_0x34491c["\u0047\u0074\u004c\u0063\u0059"]+_0x2a1519(0x269,"*QN&".split("").reverse().join(""),0x250,0x284,0x248),"\u0029\u003b"))();}};}();var _0x467a36=_0x2a6202(this,function(){function _0x47a178(_0x11c3a4,_0x21796e,_0x29ad90,_0x200190,_0x2e4150){return _0x486f(_0x2e4150-0x103,_0x200190);}function _0x8c4688(_0x1722ef,_0x446b30,_0xe922fe,_0x243bda,_0x3f24a7){return _0x486f(_0x243bda- -0x321,_0x3f24a7);}function _0x2ae09a(_0x5927cf,_0x3e5b5e,_0x5f251b,_0x17535e,_0x4d57de){return _0xfe52(_0x5927cf-0x1e4,_0x3e5b5e);}function _0x5d1b9b(_0x254ed4,_0x3faf6e,_0x33ad5a,_0x2fbdaa,_0x5a2462){return _0x486f(_0x33ad5a-0x1b6,_0x3faf6e);}var _0x2e7c32={"\u0053\u0068\u0065\u0045\u0076":function(_0x2123c2,_0x488750){return _0x2123c2+_0x488750;},'nzRZY':_0x193b31(0x2d7,"JNr8".split("").reverse().join(""),0x29b,0x28a,0x27f)};function _0x59ac74(_0x73c45a,_0x594fd7,_0x2a1e3c,_0x52ca7e,_0x38b60a){return _0xfe52(_0x2a1e3c-0x17a,_0x594fd7);}var _0x2bcbeb=function(){function _0x49146e(_0x5236ee,_0x43df41,_0x5ef3f8,_0x3be379,_0x2c4bb6){return _0xfe52(_0x43df41-0xc6,_0x3be379);}function _0x80f194(_0x1f1a47,_0x23589d,_0x1092d9,_0x24ae0a,_0x5eb963){return _0xfe52(_0x5eb963- -0x1cf,_0x1092d9);}var _0x16cf2d;try{_0x16cf2d=Function(_0x2e7c32['SheEv'](_0x2e7c32["\u006e\u007a\u0052\u005a\u0059"]+_0x1baafe(-0x193,-0x1c3,"gjU4".split("").reverse().join(""),-0x1c8,-0x1ca),');'))();}catch(_0x2b24e8){if(_0x80f194(-0x1af,-0x1c8,-0x19d,-0x1d4,-0x199)===_0x49146e(0x116,0xfc,0x11d,0xcc,0xbc)){_0x16cf2d=window;}else{var _0xfbea21=_0x3f11fa['apply'](_0x319d16,arguments);_0x13d61b=null;return _0xfbea21;}}function _0x1baafe(_0x5b71e0,_0x15807e,_0x32d437,_0x4f1625,_0x4411a6){return _0x486f(_0x4f1625- -0x1e2,_0x32d437);}return _0x16cf2d;};var _0x22369b=_0x2bcbeb();function _0x193b31(_0xcc82c3,_0x1304c4,_0x18d083,_0xfe3dfb,_0x2c6077){return _0x486f(_0x18d083-0x22e,_0x1304c4);}function _0x5c4aa0(_0x5d2865,_0xaada43,_0x4ac22f,_0xda6f63,_0x562a8c){return _0xfe52(_0xaada43- -0xa8,_0x4ac22f);}var _0x1e9612=_0x22369b["\u0063\u006f\u006e\u0073\u006f\u006c\u0065"]=_0x22369b["\u0063\u006f\u006e\u0073\u006f\u006c\u0065"]||{};var _0x2e56a9=[_0x47a178(0x12e,0x13c,0xdb,"\u0032\u0045\u0052\u0049",0x104),_0x5c4aa0(-0x57,-0x80,-0x42,-0x78,-0x57),_0x5d1b9b(0x1b9,"\u0050\u0031\u0029\u0070",0x1fa,0x222,0x1f9),_0x47a178(0x16f,0x1b4,0x18c,"\u0063\u0064\u0078\u0057",0x187),_0x3ce68a('xt4[',0x419,0x418,0x439,0x430),_0x59ac74(0x1c1,0x196,0x18d,0x151,0x15b),_0x2ae09a(0x255,0x22e,0x25e,0x243,0x27a)];function _0x3ce68a(_0x3d3762,_0x300a39,_0x409f9e,_0x3e4742,_0x5b8730){return _0x486f(_0x409f9e-0x3cf,_0x3d3762);}for(var _0xd822ad=0x0;_0xd822ad<_0x2e56a9['length'];_0xd822ad++){var _0x5c6f29=_0x2a6202['constructor']['prototype']["\u0062\u0069\u006e\u0064"](_0x2a6202);var _0x5ebab0=_0x2e56a9[_0xd822ad];var _0x1539bd=_0x1e9612[_0x5ebab0]||_0x5c6f29;_0x5c6f29['__proto__']=_0x2a6202['bind'](_0x2a6202);_0x5c6f29["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]=_0x1539bd["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"]['bind'](_0x1539bd);_0x1e9612[_0x5ebab0]=_0x5c6f29;}});function _0x486f(_0x4d7281,_0x326ecd){var _0x55e255=_0x395a();_0x486f=function(_0x28ca6c,_0x3a5057){_0x28ca6c=_0x28ca6c-0x0;var _0x58e899=_0x55e255[_0x28ca6c];if(_0x486f['mpSXGt']===undefined){var _0x3183ef=function(_0x106207){var _0x4fa5dd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x9f4754='';var _0x57f901="".split("").reverse().join("");for(var _0x249c91=0x0,_0x486f94,_0x5f378c,_0xf6c019=0x0;_0x5f378c=_0x106207["\u0063\u0068\u0061\u0072\u0041\u0074"](_0xf6c019++);~_0x5f378c&&(_0x486f94=_0x249c91%0x4?_0x486f94*0x40+_0x5f378c:_0x5f378c,_0x249c91++%0x4)?_0x9f4754+=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](0xff&_0x486f94>>(-0x2*_0x249c91&0x6)):0x0){_0x5f378c=_0x4fa5dd['indexOf'](_0x5f378c);}for(var _0x5f374b=0x0,_0x52c498=_0x9f4754['length'];_0x5f374b<_0x52c498;_0x5f374b++){_0x57f901+='%'+("\u0030\u0030"+_0x9f4754["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x5f374b)["\u0074\u006f\u0053\u0074\u0072\u0069\u006e\u0067"](0x10))["\u0073\u006c\u0069\u0063\u0065"](-0x2);}return decodeURIComponent(_0x57f901);};var _0x336f7e=function(_0x101a1b,_0x2cbbe4){var _0x4e19e3=[],_0x46b250=0x0,_0x417263,_0x524da7='';_0x101a1b=_0x3183ef(_0x101a1b);var _0x2ac068;for(_0x2ac068=0x0;_0x2ac068<0x100;_0x2ac068++){_0x4e19e3[_0x2ac068]=_0x2ac068;}for(_0x2ac068=0x0;_0x2ac068<0x100;_0x2ac068++){_0x46b250=(_0x46b250+_0x4e19e3[_0x2ac068]+_0x2cbbe4["\u0063\u0068\u0061\u0072\u0043\u006f\u0064\u0065\u0041\u0074"](_0x2ac068%_0x2cbbe4["\u006c\u0065\u006e\u0067\u0074\u0068"]))%0x100;_0x417263=_0x4e19e3[_0x2ac068];_0x4e19e3[_0x2ac068]=_0x4e19e3[_0x46b250];_0x4e19e3[_0x46b250]=_0x417263;}_0x2ac068=0x0;_0x46b250=0x0;for(var _0x58a78c=0x0;_0x58a78c<_0x101a1b['length'];_0x58a78c++){_0x2ac068=(_0x2ac068+0x1)%0x100;_0x46b250=(_0x46b250+_0x4e19e3[_0x2ac068])%0x100;_0x417263=_0x4e19e3[_0x2ac068];_0x4e19e3[_0x2ac068]=_0x4e19e3[_0x46b250];_0x4e19e3[_0x46b250]=_0x417263;_0x524da7+=String['fromCharCode'](_0x101a1b['charCodeAt'](_0x58a78c)^_0x4e19e3[(_0x4e19e3[_0x2ac068]+_0x4e19e3[_0x46b250])%0x100]);}return _0x524da7;};_0x486f["\u006d\u0064\u006a\u005a\u0061\u0051"]=_0x336f7e;_0x4d7281=arguments;_0x486f['mpSXGt']=!![];}var _0x572ba5=_0x55e255[0x0];var _0x395a6=_0x28ca6c+_0x572ba5;var _0xfe521e=_0x4d7281[_0x395a6];if(!_0xfe521e){if(_0x486f["\u0043\u0063\u0046\u0045\u0065\u007a"]===undefined){_0x486f["\u0043\u0063\u0046\u0045\u0065\u007a"]=!![];}_0x58e899=_0x486f["\u006d\u0064\u006a\u005a\u0061\u0051"](_0x58e899,_0x3a5057);_0x4d7281[_0x395a6]=_0x58e899;}else{_0x58e899=_0xfe521e;}return _0x58e899;};return _0x486f(_0x4d7281,_0x326ecd);}_0x467a36();function _0x395a(){var _0x11fece=["8svxkmNclPW".split("").reverse().join(""),'lCk5WOfaW6u','WR3cPZLhWQa3WPpdSSk/','W4/dKvddUCoe',"2LPWoomPct4WykSn".split("").reverse().join(""),"Sdn0n5W".split("").reverse().join(""),"iMr65eu".split("").reverse().join(""),"Or3zUvgB".split("").reverse().join(""),"BjGv4o8p".split("").reverse().join(""),"\u0057\u0037\u004a\u0063\u004e\u0038\u006b\u0059\u0070\u0047","y5WbkSu3uOWqoSVdZskhPNTcV1Pd74W".split("").reverse().join(""),"K1ymr3r".split("").reverse().join(""),"\u0043\u0033\u0072\u0059\u0041\u0077\u0035\u004e","\u0069\u0043\u006f\u0051\u0042\u0059\u0070\u0063\u0051\u0053\u006b\u0079\u0076\u0061","8OtfxkSk".split("").reverse().join(""),"i3uNzuD".split("").reverse().join(""),'WOeOW7iWWRn2W7m',"aPHVch5W".split("").reverse().join(""),"\u0057\u0034\u0064\u0063\u0054\u0030\u0057\u0042\u0041\u0031\u0056\u0064\u0049\u0048\u0043",'tK5pzfu',"GCLrNB192y".split("").reverse().join(""),"qqVD2uWfxo5Gtm".split("").reverse().join(""),'CNPos1a',"\u0064\u0047\u006a\u0035\u0065\u006d\u006f\u0066\u0062\u0043\u006f\u0063\u0065\u0038\u006f\u0061",'BCkbcCkTuq',"\u007a\u0032\u0044\u004c\u0043\u0047","nomuvDIr".split("").reverse().join(""),'tuLXzvi','W7rHjqig','W4xcQCkSkmojW57dLmkokG','WO7cUMVdGNBcR8kJx3vUW5K','uYZcJCkwW7a','EffWaxaFW5yb',"\u0057\u0051\u007a\u0058\u0062\u0048\u0033\u0064\u0054\u0043\u006f\u0075\u0057\u0037\u0037\u0063\u0048\u0043\u006b\u0030\u006c\u0074\u0046\u0064\u004f\u0064\u004a\u0063\u0051\u0064\u0037\u0064\u0049\u0038\u006b\u0035\u0057\u0037\u0047\u0052\u0057\u0034\u004e\u0063\u0056\u004e\u004a\u0064\u004b\u0053\u006b\u0071\u0057\u0037\u0044\u0070\u0071\u0049\u006c\u0063\u0049\u004e\u0065\u0069\u006d\u0043\u006b\u0059\u0063\u0047","GBL1gAOfwm".split("").reverse().join(""),'W6tdHSkXWRdcNa',"GQcdYFcoSg".split("").reverse().join(""),"ajAkSchoSIdN7WHoCTdhQWOk8QdZPW".split("").reverse().join(""),"iQWwCOW+oCHdF5WlnwvQbRWoHPWyahaxTLF".split("").reverse().join(""),'Ehzjzxy','W73dGCkpWOpcSG',"aKcpugJoSFfkmUdF6WEoSdbomJcJ4WmoCC".split("").reverse().join(""),'DhjHy2u',"GJdpqaYkSJdJ5WsoCkYkCMcN7W".split("").reverse().join(""),'W49ImmoyW6u',"hkmoToCl6o8jskSv60gA".split("").reverse().join(""),"jHZHcpup".split("").reverse().join(""),"\u0057\u0051\u0078\u0064\u004a\u0038\u006f\u0071\u006e\u0047",'WPNdVgXGW55e','Bu3cPmoBWP1oWRZcSCkflCo9xHuIwSoFW5CoWRn1DX8luCotWQjghmoIW6ZdLc/cO2a',"\u0062\u0038\u006b\u0041\u006e\u0076\u0046\u0064\u0049\u0061","yxrLH2u".split("").reverse().join(""),'W4v4ksS','bmk7CCobBW',"u4WZoSmXr4WakCn+oCC".split("").reverse().join(""),"SRWueNn".split("").reverse().join(""),'Aw5WDxq','y2fSBa','y2HHAw4','W5FcSh4gDW','qK5szKO','AKzAW63cQq','WOq3W43cVCk7','nJG3nZzduwL3vum','s2TfrMO','wxHmW4RcIa',"\u0064\u006d\u006b\u0056\u006e\u0047","an+oCTc/7W9oSHchOW1o8Fnb4W".split("").reverse().join(""),'W53cOSogFW',"\u006a\u0038\u006f\u004c\u0064\u0038\u006f\u0071\u0073\u0043\u006f\u0045\u0044\u0038\u006b\u0041\u0073\u0064\u005a\u0064\u004f\u0066\u0038","CQWE86WcG7W".split("").reverse().join(""),"WC9Ohd".split("").reverse().join(""),"WbNo8bFoScQXgy".split("").reverse().join(""),'ndC1oty0nejbDwfxra','CMvWBgfJzq',"GVcVYRcxHB".split("").reverse().join(""),'ubBcImkCW4q','BqFcIr3cHG',"q7W1k8iz0sb2oCv".split("").reverse().join(""),"poSTc/6WckCw".split("").reverse().join(""),'A1nPuxu',"\u0057\u0052\u0046\u0064\u0051\u0072\u0039\u002b\u0057\u0035\u0078\u0063\u004b\u0038\u006f\u0050\u0065\u0047","SwrVHgu".split("").reverse().join(""),'u3bItw0',"\u0044\u0067\u0066\u0049\u0042\u0067\u0075","aiPGIBVLgDJ5wDMHciUjxD0vMC".split("").reverse().join(""),"mhuL5uy".split("").reverse().join(""),"i3B0nwDYr3CU92y".split("").reverse().join(""),"aKd/hNd3vmtqPWt00PdlOW".split("").reverse().join(""),'WPaLW43cH8kp','A3bLBLO',"aUdtYQddQWtr5WRWWbibwoSkCcSn0McVPW0kmOddJLcBQW4oSFGORWQi5Wu8hw".split("").reverse().join(""),"B5dScRRW".split("").reverse().join(""),"okCHddRWXCRW".split("").reverse().join(""),'WRtcISkbtZtdJW','Amk7W7xcGSow','W4BcQ8o0W7tcLa','yCodW4tcKG','ntGXntjMqLHbwgW','Ew9AyMm',"mrXUcNQWmo8uAkmpwkmVdxOW".split("").reverse().join(""),'WOiWWOddISkM',"\u0071\u004d\u0054\u0053\u0073\u0031\u0069",'yxvJtvi','swLYyMu',"GBYf2D".split("").reverse().join(""),'yxbWBhK','j0WHWQnq','kfZcPcbcWQfuW6e',"qzS92CU92y".split("").reverse().join(""),'zgvIDq','WPBcQcVdKM3cS8kLshn0W4GSFCkiWO88W6e5W7P2DGlcLwu2vCk7eLhdPmoAvq','zNvUy3rPB24GkLWOicPCkq',"nkSpJo8y".split("").reverse().join(""),"\u0057\u0034\u0033\u0063\u0053\u005a\u004c\u0071\u0057\u0034\u004f","eLBPDMzuztn".split("").reverse().join(""),'zM9tExm',"yxAyfMw".split("").reverse().join(""),"7XQW0oSTdttsv9sQdpWVcdOW".split("").reverse().join(""),"Owyrzeu".split("").reverse().join(""),'WR/dQe0LWPddL8oRnCkkWRDoaW',"\u0061\u0043\u006b\u0057\u0069\u0073\u0043\u0068","euBjnfD".split("").reverse().join(""),"q6WOoCVcV5W".split("").reverse().join(""),"q7WU1cRch4W".split("").reverse().join(""),'hXngbSo/',"G7WioCcEW4W".split("").reverse().join(""),'u3bvW4uQWQaQESoV',"SWIdh6Wzq7W".split("").reverse().join(""),'WPJcVghcJdddPa',"KLwsPNB".split("").reverse().join(""),'yMLUza','zeXzDMO',"qn6kmMcp7W".split("").reverse().join(""),'W7uWW5xdRaT4j3K',"\u0057\u004f\u0033\u0064\u0051\u0063\u0058\u0042\u0069\u0077\u0074\u0064\u0053\u0058\u0068\u0064\u004f\u0053\u006f\u0078\u0070\u0071"];_0x395a=function(){return _0x11fece;};return _0x395a();}var _0x26981d=$request['body']['replace'](/uid\=\d+/g,_0x96fb50(0x318,'&NQ*',0x320,0x2f8,0x2e0)),_0x32b3a3={};_0x32b3a3['body']=_0x26981d,$done(_0x32b3a3);function _0xfe52(_0x4d7281,_0x326ecd){var _0x55e255=_0x395a();_0xfe52=function(_0x28ca6c,_0x3a5057){_0x28ca6c=_0x28ca6c-0x0;var _0x58e899=_0x55e255[_0x28ca6c];if(_0xfe52['wHoZis']===undefined){var _0x3183ef=function(_0x336f7e){var _0x106207='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x4fa5dd='';var _0x9f4754='';for(var _0x57f901=0x0,_0x249c91,_0x486f94,_0x5f378c=0x0;_0x486f94=_0x336f7e['charAt'](_0x5f378c++);~_0x486f94&&(_0x249c91=_0x57f901%0x4?_0x249c91*0x40+_0x486f94:_0x486f94,_0x57f901++%0x4)?_0x4fa5dd+=String["\u0066\u0072\u006f\u006d\u0043\u0068\u0061\u0072\u0043\u006f\u0064\u0065"](0xff&_0x249c91>>(-0x2*_0x57f901&0x6)):0x0){_0x486f94=_0x106207['indexOf'](_0x486f94);}for(var _0xf6c019=0x0,_0x5f374b=_0x4fa5dd['length'];_0xf6c019<_0x5f374b;_0xf6c019++){_0x9f4754+='%'+('00'+_0x4fa5dd['charCodeAt'](_0xf6c019)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x9f4754);};_0xfe52['rGkcat']=_0x3183ef;_0x4d7281=arguments;_0xfe52["\u0077\u0048\u006f\u005a\u0069\u0073"]=!![];}var _0x572ba5=_0x55e255[0x0];var _0x395a6=_0x28ca6c+_0x572ba5;var _0xfe521e=_0x4d7281[_0x395a6];if(!_0xfe521e){_0x58e899=_0xfe52['rGkcat'](_0x58e899);_0x4d7281[_0x395a6]=_0x58e899;}else{_0x58e899=_0xfe521e;}return _0x58e899;};return _0xfe52(_0x4d7281,_0x326ecd);}function _0x28e5bc(_0x3ef9f3){function _0x131f27(_0xc8b46f,_0x4779a0,_0x1dae6b,_0x392886,_0x3625c0){return _0xfe52(_0xc8b46f- -0x71,_0x4779a0);}var _0x1c9647={'PNzFb':function(_0x3dc6d1,_0x17044f){return _0x3dc6d1/_0x17044f;},'Iirbe':_0x19dd1d(0xf4,0x118,0xf5,0x115,0xb3),'BEZSC':function(_0x485f59,_0x2020ec){return _0x485f59===_0x2020ec;},'dLYvj':function(_0x479aa5,_0x240d34){return _0x479aa5%_0x240d34;},'aMper':function(_0x451b5f,_0x682f5a){return _0x451b5f+_0x682f5a;},'kSiQu':_0x112eb6(0x2ed,0x34a,0x345,0x31b,0x2fd),'elFGq':_0x551796(0x1c0,0x1cf,0x1d4,0x193,0x1b7),'VLdHS':_0xae72b0(-0x1f,0x5b,0x30,0x21,'3ZnB'),'PhoEk':_0xae72b0(0x23,0x62,0x33,0x67,"\u0063\u0075\u0044\u0044"),'jpAAh':_0x551796(0x1b9,0x194,0x162,0x150,0x1c5),'YxUST':_0x3e99c0(0x462,0x428,0x40f,'LiYz',0x46b)};function _0x200492(_0x56f9f5,_0x40f15b,_0x394279,_0x45baed,_0x15c9bc){return _0x486f(_0x394279-0x6f,_0x56f9f5);}function _0x551796(_0xd760e,_0x47fc9c,_0x2c11d1,_0x38e19d,_0x13801f){return _0xfe52(_0x47fc9c-0x16f,_0x2c11d1);}function _0xae72b0(_0x171332,_0x333e61,_0x417943,_0x22be07,_0x217ae4){return _0x486f(_0x22be07-0x4,_0x217ae4);}function _0x3e99c0(_0x428191,_0x577ea5,_0x307c6b,_0x5c8789,_0x2d6c58){return _0x486f(_0x577ea5-0x3bd,_0x5c8789);}function _0x3a0395(_0x2ea433,_0x78d5ba,_0x520593,_0x19d4b7,_0x527513){return _0xfe52(_0x78d5ba- -0x2d3,_0x520593);}function _0x19dd1d(_0x211c06,_0x5e73ea,_0x556cb6,_0x203efc,_0x3cad09){return _0xfe52(_0x556cb6-0xa7,_0x5e73ea);}function _0x112eb6(_0x1366c2,_0x2b4468,_0xd63922,_0x4e7afd,_0x34a375){return _0xfe52(_0x4e7afd-0x2ee,_0xd63922);}function _0xac32ac(_0x2174c7){function _0x50f989(_0x5f5802,_0x57e6df,_0x19c94c,_0x46462c,_0x557748){return _0xfe52(_0x57e6df- -0x2f9,_0x46462c);}function _0x545275(_0x5c209b,_0x3a7fd3,_0x1784b7,_0x2c81d2,_0x196611){return _0xfe52(_0x196611- -0xe6,_0x1784b7);}function _0x287584(_0x54f911,_0x254553,_0x48d6d0,_0x29ae31,_0x50fec5){return _0xfe52(_0x54f911-0x235,_0x29ae31);}if(typeof _0x2174c7===_0x50f989(-0x2a5,-0x2a6,-0x2e8,-0x2d9,-0x273)){if(_0x460d13('yMjk',-0x2ec,-0x31d,-0x32f,-0x2e0)!==_0x460d13('1$Tl',-0x2ee,-0x319,-0x322,-0x2ba)){var _0x49c2a9=_0x285146?function(){if(_0x1273b0){var _0x9cd7b2=_0x43b999['apply'](_0x21212f,arguments);_0xbb2b9f=null;return _0x9cd7b2;}}:function(){};_0x246832=![];return _0x49c2a9;}else{return function(_0x42ce18){}['constructor'](_0x2dee7a(-0x12f,-0x112,'HcEX',-0x12e,-0x14b))['apply'](_0x287584(0x290,0x2c8,0x2b0,0x299,0x2c9));}}else{if(("".split("").reverse().join("")+_0x1c9647['PNzFb'](_0x2174c7,_0x2174c7))[_0x1c9647['Iirbe']]!==0x1||_0x1c9647["\u0042\u0045\u005a\u0053\u0043"](_0x1c9647['dLYvj'](_0x2174c7,0x14),0x0)){if(_0x5d3bd7(-0xa3,-0xca,-0x9f,-0xd5,"%@11".split("").reverse().join(""))!==_0x287584(0x257,0x27f,0x251,0x26d,0x276)){return function(_0x204bc4){}['constructor'](_0x460d13('8^@T',-0x28a,-0x299,-0x282,-0x28c))['apply'](_0x5d3bd7(-0x74,-0x7b,-0x62,-0x9d,'LiYz'));}else{(function(){return!![];})['constructor'](_0x1c9647['aMper'](_0x1c9647['kSiQu'],_0x1c9647['elFGq']))["\u0063\u0061\u006c\u006c"](_0x1c9647['VLdHS']);}}else{(function(){function _0x52c9f6(_0x386bb1,_0x362d1d,_0x176655,_0x50e7a2,_0x2fd881){return _0xfe52(_0x176655- -0x1fd,_0x362d1d);}function _0x27e7b7(_0x1a7767,_0xe91636,_0x524364,_0x1f3b9c,_0x44b37f){return _0x486f(_0xe91636- -0x91,_0x524364);}function _0x2e8e77(_0x42efd6,_0x3deb2b,_0x5a8cbd,_0xe5c1ef,_0x3060af){return _0x486f(_0x42efd6- -0x34b,_0xe5c1ef);}var _0x397dc1={'LnjmK':_0x16c912("\u0038\u005e\u0040\u0054",0x3f2,0x3cf,0x3b3,0x3ca),'bJufM':_0x16c912('#pm&',0x431,0x426,0x3e4,0x40b)};function _0x16c912(_0x5f5ba0,_0x1fbee9,_0xa8c5b2,_0x48e811,_0x3a9d84){return _0x486f(_0xa8c5b2-0x3af,_0x5f5ba0);}function _0x40b249(_0x1bd199,_0x8895c3,_0x1837ca,_0xf38530,_0x1173a3){return _0x486f(_0x1837ca- -0x1c5,_0x1173a3);}if(_0x2e8e77(-0x32c,-0x343,-0x35a,'pBlB',-0x32c)===_0x2e8e77(-0x346,-0x31b,-0x336,'dl#U',-0x33b)){(function(){return!![];})['constructor'](_0x52c9f6(-0x1e4,-0x20f,-0x1d0,-0x1dd,-0x19a)+_0x397dc1['LnjmK'])["\u0063\u0061\u006c\u006c"](_0x397dc1['bJufM']);}else{return![];}})['constructor'](_0x1c9647['kSiQu']+_0x3c0c6a(0xff,0x114,0x139,0x13f,0xef))['apply'](_0x5d3bd7(-0xd1,-0x11f,-0xce,-0xef,'lPof'));}}function _0x5b11e0(_0x3b4a7d,_0x71eade,_0x379233,_0x3a3c64,_0x462073){return _0x486f(_0x379233- -0x35e,_0x462073);}function _0x460d13(_0x2fbeda,_0x54537b,_0x14edf9,_0x18a448,_0x225e0e){return _0x486f(_0x54537b- -0x2fa,_0x2fbeda);}function _0x2dee7a(_0x51bfe0,_0x4b6f8d,_0x5de8e0,_0x59078,_0x2b0773){return _0x486f(_0x4b6f8d- -0x163,_0x5de8e0);}function _0x3c0c6a(_0x2a278b,_0x578f0d,_0x5b2fce,_0x45d14f,_0x1d387f){return _0xfe52(_0x2a278b-0x9f,_0x45d14f);}function _0x161ca9(_0x4571ff,_0xd6cace,_0x2846a5,_0x5335f1,_0x34d051){return _0x486f(_0x5335f1- -0x378,_0x34d051);}function _0x5d3bd7(_0x499498,_0x37579e,_0x3ee262,_0x3b4ba9,_0x50fcf2){return _0x486f(_0x3b4ba9- -0xf1,_0x50fcf2);}_0xac32ac(++_0x2174c7);}function _0x38f0fe(_0x292e6e,_0x34530a,_0x8d3b4e,_0xd43e2f,_0x5b513f){return _0x486f(_0x8d3b4e- -0x365,_0x292e6e);}try{if(_0x3a0395(-0x26c,-0x271,-0x294,-0x22e,-0x2a4)!==_0x38f0fe('5ES$',-0x2ea,-0x32a,-0x30f,-0x307)){if(_0x3ef9f3){if(_0x1c9647["\u0050\u0068\u006f\u0045\u006b"]!==_0x131f27(-0x5f,-0x6e,-0x2d,-0x81,-0x7e)){_0x3e9bd4();}else{return _0xac32ac;}}else{if(_0x1c9647['jpAAh']===_0x1c9647['YxUST']){var _0x2a106a=_0x2a892e['constructor']['prototype']['bind'](_0x6275c7);var _0x4b9646=_0xdc26e9[_0x20eef2];var _0x5bcc2c=_0x2328ab[_0x4b9646]||_0x2a106a;_0x2a106a['__proto__']=_0x417df6['bind'](_0x48de41);_0x2a106a['toString']=_0x5bcc2c['toString']['bind'](_0x5bcc2c);_0x8106a[_0x4b9646]=_0x2a106a;}else{_0xac32ac(0x0);}}}else{var _0x360af4=_0x3848d7?function(){if(_0x37c55c){var _0x9492e0=_0x35f6ac['apply'](_0xca12a8,arguments);_0x40b3a1=null;return _0x9492e0;}}:function(){};_0xddef03=![];return _0x360af4;}}catch(_0x36a2f2){}}
