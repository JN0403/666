/*
 *
 *
脚本功能：加藤视频vip解锁,付费视频,漫画,下载,会员线路,去广告+
软件版本：3.1.3
下载地址：
脚本作者：**
更新时间：2024-9.2
电报频道：https://t.me/GieGie777
问题反馈：ps：小部分视频有bug无法播放
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 加藤视频vip解锁,付费视频解锁,下载,会员线路,去广告++
^https?:\/\/.+\/shorter\/(video\/longvideoinfo|resource\/adInfoPageList\?adSpaceId|user\/getUser|resource\/getWindowNotice|tabIconConfigView|user\/getVipPvg|video\/home\/list|video\/search).*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/jtsp.js
#^https?:\/\/.+\/shorter\/(anime\/tbookchapter0\/info\?bookId|video\/longvideoinfo) url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/jttk.js
^https?:\/\/.+\/shorter\/resource\/getAdInfoBySpaceId\?ad url reject-dict

[mitm] 
hostname = zqlhcn.kl9117.xyz,hkg2zx.stejnu.xyz,zvqldx.xv8gvn.xyz,kuhikr.1t3vwf.xyz,s4788x.taqndh.xyz,xkewutdekf873sr.chairsr.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,hkg2zx.stejnu.xyz,zvqldx.xv8gvn.xyz,kuhikr.1t3vwf.xyz,s4788x.taqndh.xyz,xkewutdekf873sr.chairsr.com,103.85.254.233,omfnmh.x2b3w6.xyz,sgwitxgwit231sr.xunwxc.com,zqlhcn.kl9117.xyz,ssgwew231s.uzqew4qi.info,ykofye.qklmoq.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,lieeys42jdi2kd.cx4c5mv7.info,fjboni.jn6588.xyz,rylzit.wqws5z.xyz,riwnkx.sw05uv.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,lieeys42jdi2kd.cx4c5mv7.info,fjboni.jn6588.xyz,rylzit.wqws5z.xyz,riwnkx.sw05uv.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,rylzit.wqws5z.xyz,riwnkx.sw05uv.xyz,bsxqtd.xk8q7w.xyz,grvgdq.81fbg2.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,zqlhcn.kl9117.xyz,rylzit.wqws5z.xyz,riwnkx.sw05uv.xyz,bsxqtd.xk8q7w.xyz,grvgdq.81fbg2.xyz,pmmqls.gregdoro.com,103.85.254.233,omfnmh.x2b3w6.xyz,rdxijq.vo9ugl.xyz,bpitbu.ouxf9g.live,tjactb.xk2nsy.live,us6tp7.dkr9cv.live,qsukip.9jts57.live,wkqyx6.qdokqj.live,fqohbx.bkljtx.live,zihjyv.jajrc1.live,y7uyqg.hl8dbl.live,qrdure.youngnoble.cn,kpoe2e.x8w7t3.live,*jttv*,kpoe2e.x8w7t3.live,zihjyv.jajrc1.live,fceyeg.johjxe.com,*.vo9ugl.xyz,zqlhcn.kl9117.xyz,bsxqtd.xk8q7w.xyz,grvgdq.81fbg2.xyz,vcryyw.uc86fy.xyz,xospby.mldo9k.xyz,pmmqls.gregdoro.com,103.85.254.233,roa6fi.lyr6if.live,gp1wpm.xcg3zr.xyz,nfmq0v.lknlqz.xyz


*
*
*/




;var encode_version = 'jsjiami.com.v5', afssg = '__0x11d500',  __0x11d500=['aMO5HsO0w4E=','bMO4UhzDkEBI','w7cNw7gs','wrtfd8KKJMOjIg==','w6bDmMKsw4zCjsKFwowrw6s=','NcKww5zCrno=','w57CjcKNw5PDsQ==','w6DDg8OmGcO7','WW0YcMOg','w4Bowqhfw68=','A8Kzw7p1Ew==','VzQKZ8Oc','C8KRw7/CnVo=','MMK8w5DCsn0=','w5A5w5U+Xw==','wrjDhsOEw70P','c0dmw7zDmw==','w7DDhcOzMMO7','GsK8RgzDpQ==','worDu8O8w5UY','NMOhTBxH','U0BVw4nDkA==','KAAhwpoD','wrVaw5zCj8K9','McKBUB/DoA==','G8KySyDDqw==','wrvDocOsF2U=','WzsSUMOG','wpV+YA==','X8OHKg==','wo0dXBnCog==','B8KBaQ8Y','w5Vww51Vdg==','w4zCoCLDgHk=','DsKQw4E=','w6VMwqU=','w5LCkMKAw7rDmg==','CcKHw6LCtFY=','OMKxw5Qbw7w=','AsKhaxUJ','IsKmdyfDmg==','wpPDksK9','eMOCHA==','wrEGUQ==','wprCoMOp','w4bCj8ODGzY7aWPDkMOMwqls','C8O9VwRBF8Krw5XDtyAew5zCmw==','worCq8O7woY9wo1YFgjDpg==','PcKgCEnDp1NzHw==','dFbDog==','wpRew7bCkMKnw64=','LDgo','DsOraRZHHA==','w7zDpEhgwpA=','QcOVbiHDiw==','YnlQwprDgw==','cy4xRsOH','wpzDj8KPwoIc','ZxM5w63Dpg==','woXDv8KkwoPCnQ==','KcOlXRRY','OMKZw5F2CQ==','w5wLBsKwwrk=','J8Kww6fCv0gfw5PDqHfDhErDpSMowrYF','FQXDocOYEMKAwoNgbQHCosKOwoV8w4Vjw79lEMKGIsKwbH1EUAkbc8OQT23DucO4AsOVHMOaw5UmY1JEQMONw4VBw6fDtsKzwobDvCZ9cCZ5w4cTw4/CtcKe','CsK/cg0=','wpzCsMO/wp0F','IMKjLQ/Drg==','w7McOMKZwr4=','UBgDX8OM','f8OfO8OnwoM=','LsKlMwzDlA==','ecOuH8Ov','eHrDpiwH','IF7DssK1UQ==','w5TCihTDgA==','B8KIGQDDsA==','c3BZw7vDjw==','w7PClQ3Dv1E=','MxTCmcK+AA==','wpLCssOn','wr7DhMKGwqAB','c2nDgsKjw4I=','DsKEPQ3DpA==','O8KcOFbDmA==','w4hOw5paaw==','w6/DhE9uwq8=','wqHDh8KVwpPCpw==','w7/DkmptwpE=','wrXDq8KswrrCng==','LgMYwqs1','TkJ4w6jDkQ==','wrrDgcOTw5Eo','CsKfUQw2','RsOiEMOswrk=','wrTDqcKhwqLCig==','w68UNsKNwqk=','w7nDh8K9w6HChA==','w69Yw7VL','wrLDo8KfwofCjyjDgg==','OsO/RR12','YDsxRsOfwoNO','YBQgw4LDrg==','M8Kgw7nCsF0Vw5k=','IcO9YCta','ADbCnMK6CcONwpk=','w4J2wqddw5U=','w6p6w6tWdA==','w5DCksOGCw==','NsKkaw==','w7ANw7gxw7Q=','w7Udw4c4YQ==','O8ODN8Oxwp9ww4IGS8Oyw6dFNMOjw4JSwp4OLGLDgg==','bsKkw63ClVIQw5PDljbCiXPCgWpxwp4=','wp3CjsOKHSgqfj/CksKJwrUww6fDqcOMCEPDgnsAQxUMTMOTw7dNbgNAPw5c','TcO8YgJcAcKxw5fDoWpbwoPDnhlNwrnDpcKVw6/CsCLCm3zDsjc=','w4LDisO3GsOsbcOeahTCoynDlTLDr8KJOC1SwpoDNiI=','ZMK8H0nDuilmFjLDsD1IwowZOw==','SnzDiBkLwo5Sw7gzwqLCj0AjP8Kfw7jCo253V2LCrRk=','w7tew7VXd0FBwqTDvSQ2w7c=','T1XDlcKWw5h9w5M=','w67DrcKuByzCsT/DnsK/','ZsK7M8OMwoo=','w6lWw6VT','U0jDlMKBw7Zbw4U=','QlrDhcKS','w6zCjcKJwq1zwpfDuGbCpRXCsg==','SlokXw==','w5fDtGBjwo1aHMKZ','w5HDqXd4wpABXsOTwqzDqsKcw4XCvsOiVMKgE2nDuWnCmXI=','ASfCnsK/BsOJwpXCjcOV','byI+w4Q=','IcKQCXDDvcOSwr/Dq8KDcQ==','P8KPLMKfOlE=','w5LDisOhMg==','DMK2w7Yqw5LCoW3Cm3hF','L8KhPB0=','UmpUw73Dm8OPWQ==','MhQMwrYTw7E=','X2VEw7k=','w4nCnCPDkW8dIik=','cMORK8O/','MMKidSLDjSzDs8K/fQ==','MsK4KjjDvjRu','w6XCiMKow60=','eSY6w4nDtcO7CA==','wpMuWTHCvHPDj8K1wrzCtsOYwow=','IcKPMsKUL1oB','a1XDucOewp3Dj0zDrDcLJ1V2','NsKlYjnDtSLDqsO7Plk=','EMOrdx1SF8Km','wrbDr8KLwo7CgR7DlXo=','w5DDs2dtwpt0Fw==','w6BmwoLDog==','JMKNC0nDpcOSwprDpMKJ','fcOeO8O7wpVLw4E=','acOqGMO6','w4rDqWJ8wpZI','w7rCgcKLwq1vwpXDtVTCtQ==','IMKjOR/DogHDiw==','WlJywoTDgcKELQsJYQ==','wos5Vj/CpH4=','OhAWwrA=','w7JuwobDk8OdIQPDkVXDkg==','MRjDjGc=','w4XDn8OnOsOhZcOZTwI=','J8K3cyo=','wrsWbFA=','w50Vw7wuZWs=','w6fDgcK7w4g=','w5rDgsOmJw==','w69Cw6h2fQJXwrXDuQ==','w646GMKB','w6wFw7k2','wrXDtcKKwpnCuCLDlw==','P8K3Ojw=','N8K/PSk=','wr4MT1FlVT3DrErDnA==','EMKlaRAeMMO9wppq','wpbCtsO6wpETwqtO','F8KTw79y','Y8O+Txs=','LcKgw6fCu0ge','V21Dw6w=','wrjDpMOlP3nCoWvDlsOp','MxXDmWE=','PF3DmMKBZsODw5s=','VX3DlB8=','dE/DjcOOwoDDrlHDtA==','dj81Sw==','wqzDr8Kcwp8=','w6rDk8Kfw5zCjMKSwo0lw7bCug==','SHBCw7HDjcOnVktB','cMKqMDfCkzfCq8KlNhR9f8K9w7Is','LsK4KjjDoBJmwoVf','w54Sw7gscnc=','wrEKcUdjXzrDow==','JcOMasOiw514wpUIUMO7wqJcdQ==','w7DCusKa','QHTDpQ==','w6zCh8KN','wrJDc8KQKsOiLsK1w6l9w5PDi8O+Ow==','fsOdNA==','TFE3','54mD5p2v5Y69776pw77Dq+S9t+WujeaeiuW+v+eonO+/uei9i+isi+aVguaPkeaKr+S4pOeZgOW2keS9gg==','5Yiv6Zuz54m05p2D5Y2I77ygR8OE5L6Q5a6H5p6b5b2p56iY','w7HCtMOWAD4=','EcO+axhH','b8Kfw4Y=','EMOBdQV/','a1hNwp3DoQ==','eMOZLMOq','RE7DiMK3w4Vew5DCr8Oi','w4zChhTDgA==','IsKKHFLDncOcwoM=','MhgRwqU=','BsOvcxA=','D8K4aA0=','ey0RX8OMwoNDw6JJwpA=','BMKmw79ZNA==','HMKqw6gZw5DCr07CnCsbWk44SMKrPw==','wqPDs8OCw59Lw44ACwjCiEnDjMKAw4V8DxzDjW8gw7XDjQvCuVLDqHFKD8ODAsOdw5/CgsKKJMO0X0MIw75VTD7CgXDCnMKwZ1vDjMKoB8OEOsKRCsO1wpbCiMOxWQ==','UmpZw6w=','YU7DiMOCwoE=','KsK4dz7Dlw==','w7nCoyY=','X8KsNQ==','w6vCgsKiw7PDg8O0','wrIbezzCmw==','IMKGw4rCk3Q=','ecO6eiXDiw==','XHPDpcKyw4k=','wpNPw7fCjQ==','O8KMw6sTw5w=','e0PDrMOqwpc=','w4UVw6E9','Yj8Fa8On','I8K+DkjDkA==','w7wBIcKGwq8=','PsKUGRbDjQ==','Y8OpG8Oywro=','w4cdw5QDZQ==','w6QNw74j','ey0FT8OSwoVfw6Y=','w53DvHdp','w4gRO8K0wrQ=','AsKDw5jCtnI=','ZX3DoMKZw64=','w6huwoxfw7c=','w4DCtMKtwoJD','w4h8wpt8w70=','w5A4OMKBwrg=','bcOYayfDsw==','wp3Dh8OsFVs=','w58ULsK4wqY=','wq/DnsOtw7Q1','w67CosK2wr1F','w7XDkcOD','ZhEMw4jDkw==','w67CksKVwp12','S1xuwo3DgA==','w4XCpsKKwoJ0','FjLCmMK3','wqzDo8KBwozCmiM=','w63ClMKNwqU=','O8KQClQ=','d8K+JsOhwpsEw5bCvMKX','w6YyH8KU','w7F0wpPDscO9Lz8=','XXXDkwo=','SlLDgsKH','wpFDw6DCnMKmw4vCsMOL','L8K/dD8=','w5/DmMOFJsO9YcOYSAjCqA==','fMOjTgbDkUtEw5HDsw==','woXCl8OEwqM9','HB3CvcKxHg==','RMKcJsOowoQ=','M8KTIlTDpw==','IsKGDyrDqw==','DsKGw4zCvWY=','MsKZLVvDpQ==','VGFMwqzDmA==','w5HCksOMATUyfg==','w5Ifw7w6fm/Dqw==','w5AgCSTDo2rCj8Onw6nDucKbw4gVwpYgw57CtQ==','w6HCmcOPGQI=','eDMmw4zDoA==','w7fDksKuw4rCmw==','bknDjg==','SF5gwqHDkA==','JMKLMMKW','wqXDvsKMwo7Cnj/DjnnDqg==','woIuSjfCog==','w5gew7Qm','IBnCvsKMAw==','OsK9MRPDrg==','cTEvWcORwoxO','w6FYw7Y=','WnvDiRgQwodF','wrFef8KW','NMKWF1PDpMOZwpY=','WkkxXcOw','w6rCmsKXwrduwp7DuQ=='];(function(_0xb9bd08,_0x588ee2){var _0x3f4277=function(_0x582eea){while(--_0x582eea){_0xb9bd08['push'](_0xb9bd08['shift']());}};var _0x50ea23=function(){var _0x58d106={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x21b85f,_0x3e18fd,_0x2e0e51,_0x44f991){_0x44f991=_0x44f991||{};var _0xc39829=_0x3e18fd+'='+_0x2e0e51;var _0x2637f0=0x0;for(var _0x2637f0=0x0,_0x3ad135=_0x21b85f['length'];_0x2637f0<_0x3ad135;_0x2637f0++){var _0x173784=_0x21b85f[_0x2637f0];_0xc39829+=';\x20'+_0x173784;var _0x351036=_0x21b85f[_0x173784];_0x21b85f['push'](_0x351036);_0x3ad135=_0x21b85f['length'];if(_0x351036!==!![]){_0xc39829+='='+_0x351036;}}_0x44f991['cookie']=_0xc39829;},'removeCookie':function(){return'dev';},'getCookie':function(_0x36ea9c,_0x3ef6e1){_0x36ea9c=_0x36ea9c||function(_0x2b7ad8){return _0x2b7ad8;};var _0x5c714d=_0x36ea9c(new RegExp('(?:^|;\x20)'+_0x3ef6e1['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x433563=function(_0x1016e0,_0x479208){_0x1016e0(++_0x479208);};_0x433563(_0x3f4277,_0x588ee2);return _0x5c714d?decodeURIComponent(_0x5c714d[0x1]):undefined;}};var _0xdd1aab=function(){var _0x3a3d6c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3a3d6c['test'](_0x58d106['removeCookie']['toString']());};_0x58d106['updateCookie']=_0xdd1aab;var _0x408e01='';var _0x119612=_0x58d106['updateCookie']();if(!_0x119612){_0x58d106['setCookie'](['*'],'counter',0x1);}else if(_0x119612){_0x408e01=_0x58d106['getCookie'](null,'counter');}else{_0x58d106['removeCookie']();}};_0x50ea23();}(__0x11d500,0x19c));var _0x5e51=function(_0x434d99,_0xf4a9f0){_0x434d99=_0x434d99-0x0;var _0x490d49=__0x11d500[_0x434d99];if(_0x5e51['initialized']===undefined){(function(){var _0x417f3d=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x380cbb='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x417f3d['atob']||(_0x417f3d['atob']=function(_0x3bedb4){var _0x32c2c0=String(_0x3bedb4)['replace'](/=+$/,'');for(var _0x437da9=0x0,_0x30698d,_0x1dd838,_0xa77bbc=0x0,_0x433eb3='';_0x1dd838=_0x32c2c0['charAt'](_0xa77bbc++);~_0x1dd838&&(_0x30698d=_0x437da9%0x4?_0x30698d*0x40+_0x1dd838:_0x1dd838,_0x437da9++%0x4)?_0x433eb3+=String['fromCharCode'](0xff&_0x30698d>>(-0x2*_0x437da9&0x6)):0x0){_0x1dd838=_0x380cbb['indexOf'](_0x1dd838);}return _0x433eb3;});}());var _0x58d28d=function(_0x47c79e,_0x2f23e3){var _0x5159fc=[],_0x5f3151=0x0,_0x46b9d,_0x599392='',_0x3b51aa='';_0x47c79e=atob(_0x47c79e);for(var _0x3af775=0x0,_0x50775f=_0x47c79e['length'];_0x3af775<_0x50775f;_0x3af775++){_0x3b51aa+='%'+('00'+_0x47c79e['charCodeAt'](_0x3af775)['toString'](0x10))['slice'](-0x2);}_0x47c79e=decodeURIComponent(_0x3b51aa);for(var _0x5c3285=0x0;_0x5c3285<0x100;_0x5c3285++){_0x5159fc[_0x5c3285]=_0x5c3285;}for(_0x5c3285=0x0;_0x5c3285<0x100;_0x5c3285++){_0x5f3151=(_0x5f3151+_0x5159fc[_0x5c3285]+_0x2f23e3['charCodeAt'](_0x5c3285%_0x2f23e3['length']))%0x100;_0x46b9d=_0x5159fc[_0x5c3285];_0x5159fc[_0x5c3285]=_0x5159fc[_0x5f3151];_0x5159fc[_0x5f3151]=_0x46b9d;}_0x5c3285=0x0;_0x5f3151=0x0;for(var _0x402763=0x0;_0x402763<_0x47c79e['length'];_0x402763++){_0x5c3285=(_0x5c3285+0x1)%0x100;_0x5f3151=(_0x5f3151+_0x5159fc[_0x5c3285])%0x100;_0x46b9d=_0x5159fc[_0x5c3285];_0x5159fc[_0x5c3285]=_0x5159fc[_0x5f3151];_0x5159fc[_0x5f3151]=_0x46b9d;_0x599392+=String['fromCharCode'](_0x47c79e['charCodeAt'](_0x402763)^_0x5159fc[(_0x5159fc[_0x5c3285]+_0x5159fc[_0x5f3151])%0x100]);}return _0x599392;};_0x5e51['rc4']=_0x58d28d;_0x5e51['data']={};_0x5e51['initialized']=!![];}var _0x401a09=_0x5e51['data'][_0x434d99];if(_0x401a09===undefined){if(_0x5e51['once']===undefined){var _0x3b4058=function(_0x2826d4){this['rc4Bytes']=_0x2826d4;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3b4058['prototype']['checkState']=function(){var _0x49e321=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x49e321['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x3b4058['prototype']['runState']=function(_0x7aa1f5){if(!Boolean(~_0x7aa1f5)){return _0x7aa1f5;}return this['getState'](this['rc4Bytes']);};_0x3b4058['prototype']['getState']=function(_0x148775){for(var _0x1c0ed4=0x0,_0x42864a=this['states']['length'];_0x1c0ed4<_0x42864a;_0x1c0ed4++){this['states']['push'](Math['round'](Math['random']()));_0x42864a=this['states']['length'];}return _0x148775(this['states'][0x0]);};new _0x3b4058(_0x5e51)['checkState']();_0x5e51['once']=!![];}_0x490d49=_0x5e51['rc4'](_0x490d49,_0xf4a9f0);_0x5e51['data'][_0x434d99]=_0x490d49;}else{_0x490d49=_0x401a09;}return _0x490d49;};var _0x5c77dc=$response[_0x5e51('0x0','hsvz')];var _0x119099=$request[_0x5e51('0x1','J^Ct')];var _0x217993=JSON[_0x5e51('0x2','YG[f')](_0x5c77dc);setInterval(function(){var _0x1686de={'DmUqp':function _0x2c00b0(_0x406f2e){return _0x406f2e();}};_0x1686de[_0x5e51('0x3','pZxT')](_0xa1b785);},0xfa0);const _0x128d54=_0x5e51('0x4','DEr6');const _0x2ad650=_0x5e51('0x5','1rA7');const _0x4e36a4=_0x5e51('0x6','hsvz');const _0x384b68=_0x5e51('0x7','i0hU');const _0x54952b=_0x5e51('0x8','HlHs');const _0x35f517=_0x5e51('0x9','&NFg');const _0x590bc3=_0x5e51('0xa','bBia');const _0x3ed992=_0x5e51('0xb','vW!M');if(_0x119099[_0x5e51('0xc','iqmD')](_0x128d54)!=-0x1){var _0x335ca0=_0x5e51('0xd','wcuG')[_0x5e51('0xe','[Je5')]('|'),_0x3dd84a=0x0;while(!![]){switch(_0x335ca0[_0x3dd84a++]){case'0':_0x217993[_0x5e51('0xf','vW!M')][_0x5e51('0x10','iqmD')]=0x2;continue;case'1':_0x217993[_0x5e51('0x11','iqmD')][_0x5e51('0x12','nMJ!')]=0x0;continue;case'2':_0x217993[_0x5e51('0x13','T]@8')][_0x5e51('0x14','heGT')]=_0x5e51('0x15','heGT');continue;case'3':_0x5c77dc=JSON[_0x5e51('0x16','23F(')](_0x217993);continue;case'4':for(var _0x2ff872=0x0;_0x2ff872<_0x217993[_0x5e51('0x17','LavY')][_0x5e51('0x18','*OKs')][_0x5e51('0x19',')V!f')];_0x2ff872++){_0x217993[_0x5e51('0x1a','HlHs')][_0x5e51('0x1b','xpn3')][_0x2ff872][_0x5e51('0x1c','5uU8')]=0x1;}continue;}break;}}if(_0x119099[_0x5e51('0x1d','vQwq')](_0x2ad650)!=-0x1){for(var _0x1c8a3d=0x0;_0x1c8a3d<_0x217993[_0x5e51('0x11','iqmD')][_0x5e51('0x1e','!yv#')];_0x1c8a3d++){_0x217993[_0x5e51('0x1f','vQwq')][_0x1c8a3d][_0x5e51('0x20','9!iU')]=0x1;delete _0x217993[_0x5e51('0x21','DEr6')][_0x1c8a3d];}_0x5c77dc=JSON[_0x5e51('0x22','J^Ct')](_0x217993);}if(_0x119099[_0x5e51('0x23','*B$4')](_0x4e36a4)!=-0x1){var _0x5c77dc=$response[_0x5e51('0x24','ctQ[')][_0x5e51('0x25','LavY')](/try.m3u8/g,_0x5e51('0x26','uM3K'))[_0x5e51('0x27',')V!f')](/isPurchase":\d/g,_0x5e51('0x28','39ee'))[_0x5e51('0x27',')V!f')](/userVip":\d/g,_0x5e51('0x29','J^Ct'))[_0x5e51('0x2a','i0hU')](/tryVideoUrl/g,_0x5e51('0x2b','(e4t'));}if(_0x119099[_0x5e51('0x2c','heGT')](_0x384b68)!=-0x1){delete _0x217993[_0x5e51('0x2d','PPCN')];_0x5c77dc=JSON[_0x5e51('0x2e','*OKs')](_0x217993);}if(_0x119099[_0x5e51('0x2f','DEr6')](_0x54952b)!=-0x1){_0x217993[_0x5e51('0x30','K@p^')][0x3][_0x5e51('0x31','heGT')]=0x0;_0x5c77dc=JSON[_0x5e51('0x32','nMJ!')](_0x217993);}if(_0x119099[_0x5e51('0x33','5uU8')](_0x35f517)!=-0x1){for(var _0x1c8a3d=0x0;_0x1c8a3d<_0x217993[_0x5e51('0x1f','vQwq')][_0x5e51('0x34','uG%8')][_0x5e51('0x35','uM3K')];_0x1c8a3d++){_0x217993[_0x5e51('0x36','!yv#')][_0x5e51('0x37','PPCN')][_0x1c8a3d][_0x5e51('0x38','qMIX')]=0x1;}_0x5c77dc=JSON[_0x5e51('0x39','HlHs')](_0x217993);}if(_0x119099[_0x5e51('0x1d','vQwq')](_0x590bc3)!=-0x1){for(var _0x1c8a3d=0x0;_0x1c8a3d<_0x217993[_0x5e51('0x3a','J^Ct')][_0x5e51('0x3b','%$(S')][_0x5e51('0x3c','pZxT')];_0x1c8a3d++){_0x217993[_0x5e51('0x3d','%K9!')][_0x5e51('0x3e','HlHs')][_0x1c8a3d][_0x5e51('0x3f','vW!M')]=0x1;_0x217993[_0x5e51('0x40','1NNI')][_0x5e51('0x41','YG[f')][_0x1c8a3d][_0x5e51('0x42','(e4t')]=0x1;_0x217993[_0x5e51('0x43','*B$4')][_0x5e51('0x44','*B$4')][_0x1c8a3d][_0x5e51('0x45','%$(S')]=0x1;}_0x5c77dc=JSON[_0x5e51('0x46','xhin')](_0x217993);}if(_0x119099[_0x5e51('0x47','92jZ')](_0x3ed992)!=-0x1){for(var _0x1c8a3d=0x0;_0x1c8a3d<_0x217993[_0x5e51('0x48','l(Hl')][_0x5e51('0x49','@rpu')][_0x5e51('0x4a','1rA7')];_0x1c8a3d++){_0x217993[_0x5e51('0x2d','PPCN')][_0x5e51('0x4b','vQwq')][_0x1c8a3d][_0x5e51('0x4c','wcuG')]=0x1;_0x217993[_0x5e51('0x4d','qMIX')][_0x5e51('0x3e','HlHs')][_0x1c8a3d][_0x5e51('0x4e','HaHi')]=0x1;_0x217993[_0x5e51('0x48','l(Hl')][_0x5e51('0x4f','bBia')][_0x1c8a3d][_0x5e51('0x50','39ee')]=null;_0x217993[_0x5e51('0x51','gKG!')][_0x5e51('0x52','(e4t')][_0x1c8a3d][_0x5e51('0x53','%K9!')]=0x1;}_0x5c77dc=JSON[_0x5e51('0x54','vQwq')](_0x217993);}$done({'body':_0x5c77dc});;(function(_0x36f40e,_0x1a34d9,_0x1bbeba){var _0x225ae2={'CItrd':_0x5e51('0x55','J^Ct'),'gWOyD':function _0x17d913(_0x56e210,_0x9b2c5f,_0x1f05ea){return _0x56e210(_0x9b2c5f,_0x1f05ea);},'tuUrF':function _0x473124(_0x4e8f94,_0x553f27){return _0x4e8f94!==_0x553f27;},'YjAGF':_0x5e51('0x56','*B$4'),'VhsJt':function _0xd53914(_0x37f9fe,_0x38edd9){return _0x37f9fe===_0x38edd9;},'wVHNu':_0x5e51('0x57','pZxT'),'DUaMT':function _0x5d275f(_0x374be8,_0x5db91f){return _0x374be8===_0x5db91f;},'pAqfq':_0x5e51('0x58','%$(S'),'EjKMb':_0x5e51('0x59','DEr6'),'JTvAf':function _0x8a04c0(_0x47dee2){return _0x47dee2();},'qyYnA':function _0x482814(_0x57fcd8,_0x526663){return _0x57fcd8!==_0x526663;},'aIGwN':_0x5e51('0x5a','nMJ!'),'vhYeC':_0x5e51('0x5b','iqmD'),'HCVdx':_0x5e51('0x5c','nMJ!'),'Fnfct':function _0x344cef(_0x4b1f0e,_0x2ac47b){return _0x4b1f0e!==_0x2ac47b;},'VoKmt':_0x5e51('0x5d','qC]2'),'hDeQs':function _0x2d9659(_0x23a0f7,_0x4cb186){return _0x23a0f7!==_0x4cb186;},'vqCKd':_0x5e51('0x5e','DEr6'),'RpXvt':_0x5e51('0x5f','T]@8'),'rWWTC':function _0x4153c1(_0x1a3270,_0x5b77a1){return _0x1a3270+_0x5b77a1;},'XdLkH':_0x5e51('0x60','LavY'),'IeSzx':_0x5e51('0x61','@rpu')};var _0x45c140=_0x225ae2[_0x5e51('0x62','hsvz')][_0x5e51('0x63','i0hU')]('|'),_0x99e718=0x0;while(!![]){switch(_0x45c140[_0x99e718++]){case'0':(function(){var _0x530b2f={'rOrtL':function _0x502651(_0x4f3d83,_0x523c5a){return _0x4f3d83!==_0x523c5a;},'GcOIV':_0x5e51('0x64','bVYx'),'wTtJV':function _0x36f330(_0x194e36,_0x52a3b6,_0x2400c7){return _0x194e36(_0x52a3b6,_0x2400c7);}};if(_0x530b2f[_0x5e51('0x65','i0hU')](_0x530b2f[_0x5e51('0x66','uG%8')],_0x530b2f[_0x5e51('0x66','uG%8')])){_0x217993[_0x5e51('0xf','vW!M')][_0x5e51('0x67','DEr6')][_0x1c8a3d][_0x5e51('0x68','iqmD')]=0x1;_0x217993[_0x5e51('0x2d','PPCN')][_0x5e51('0x69','9!iU')][_0x1c8a3d][_0x5e51('0x6a','*OKs')]=0x1;_0x217993[_0x5e51('0x48','l(Hl')][_0x5e51('0x6b','!yv#')][_0x1c8a3d][_0x5e51('0x50','39ee')]=null;_0x217993[_0x5e51('0x6c','i0hU')][_0x5e51('0x6d','xhin')][_0x1c8a3d][_0x5e51('0x6e','gKG!')]=0x1;}else{_0x530b2f[_0x5e51('0x6f','l(Hl')](_0x4923d7,this,function(){var _0x5402c5={'UGCdK':_0x5e51('0x70','xpn3'),'aCCOH':_0x5e51('0x71','92jZ'),'vmFJt':function _0x453b64(_0x33fc28,_0x540d67){return _0x33fc28(_0x540d67);},'zHTAi':_0x5e51('0x72','vQwq'),'ASmix':function _0x1e93f7(_0x21da88,_0x5d6ea3){return _0x21da88+_0x5d6ea3;},'yeEAx':_0x5e51('0x73','39ee'),'paDAY':function _0x28346b(_0xa44a,_0x5cb549){return _0xa44a+_0x5cb549;},'hwbdX':_0x5e51('0x74','J^Ct'),'vZMfb':function _0xa3a64e(_0x258bdc,_0x3406c5){return _0x258bdc===_0x3406c5;},'wYDlW':_0x5e51('0x75','9!iU'),'BJWTy':function _0xf6b9d4(_0x50a508,_0x5e5700){return _0x50a508===_0x5e5700;},'CFQjN':_0x5e51('0x76','[Je5'),'lSEML':function _0x21fd8d(_0x230727){return _0x230727();},'IATFB':function _0x22ea57(_0x44c536,_0x9afb61){return _0x44c536!==_0x9afb61;},'LARnF':function _0x23c552(_0x3476ca,_0x4da46c){return _0x3476ca+_0x4da46c;},'ZcTau':function _0x3d9a67(_0x14de8d,_0x25ceac){return _0x14de8d/_0x25ceac;},'bOWHL':_0x5e51('0x77','ctQ['),'GVpnG':function _0x246fff(_0x196813,_0x2bc6fa){return _0x196813===_0x2bc6fa;},'UOBXk':function _0x343c4a(_0x53a55a,_0x10f9cd){return _0x53a55a%_0x10f9cd;}};var _0x24971a=new RegExp(_0x5402c5[_0x5e51('0x78','uM3K')]);var _0x529ba4=new RegExp(_0x5402c5[_0x5e51('0x79','1rA7')],'i');var _0x16b3e6=_0x5402c5[_0x5e51('0x7a','@rpu')](_0xa1b785,_0x5402c5[_0x5e51('0x7b','iqmD')]);if(!_0x24971a[_0x5e51('0x7c','$1z7')](_0x5402c5[_0x5e51('0x7d','xpn3')](_0x16b3e6,_0x5402c5[_0x5e51('0x7e','39ee')]))||!_0x529ba4[_0x5e51('0x7f','pZxT')](_0x5402c5[_0x5e51('0x80','gKG!')](_0x16b3e6,_0x5402c5[_0x5e51('0x81','&NFg')]))){if(_0x5402c5[_0x5e51('0x82','1NNI')](_0x5402c5[_0x5e51('0x83','5uU8')],_0x5402c5[_0x5e51('0x84','DEr6')])){_0x5402c5[_0x5e51('0x85','pZxT')](_0x16b3e6,'0');}else{_0x217993[_0x5e51('0x86','YG[f')][_0x1c8a3d][_0x5e51('0x87','gKG!')]=0x1;delete _0x217993[_0x5e51('0x88','heGT')][_0x1c8a3d];}}else{if(_0x5402c5[_0x5e51('0x89','1NNI')](_0x5402c5[_0x5e51('0x8a','1rA7')],_0x5402c5[_0x5e51('0x8b','iqmD')])){_0x5402c5[_0x5e51('0x8c','IiGA')](_0xa1b785);}else{if(_0x5402c5[_0x5e51('0x8d','nMJ!')](_0x5402c5[_0x5e51('0x8e','IiGA')]('',_0x5402c5[_0x5e51('0x8f','1NNI')](counter,counter))[_0x5402c5[_0x5e51('0x90','@rpu')]],0x1)||_0x5402c5[_0x5e51('0x91','wcuG')](_0x5402c5[_0x5e51('0x92','1NNI')](counter,0x14),0x0)){debugger;}else{debugger;}}}})();}}());continue;case'1':var _0x572b68=function(){var _0x5e0445=!![];return function(_0x12dcde,_0x5fc088){var _0x5f126d=_0x5e0445?function(){if(_0x5fc088){var _0x514cc1=_0x5fc088[_0x5e51('0x93','p2Cm')](_0x12dcde,arguments);_0x5fc088=null;return _0x514cc1;}}:function(){};_0x5e0445=![];return _0x5f126d;};}();continue;case'2':var _0x1f98cc=_0x225ae2[_0x5e51('0x94','nMJ!')](_0x572b68,this,function(){var _0xdc43ec=function(){var _0x243bad={'mRFmG':function _0x20cb08(_0x498124,_0x271d92){return _0x498124===_0x271d92;},'gglYw':_0x5e51('0x95','HlHs'),'LSsFu':function _0x121b1f(_0x2f6f5b,_0x7ea784){return _0x2f6f5b<_0x7ea784;}};if(_0x243bad[_0x5e51('0x96','LavY')](_0x243bad[_0x5e51('0x97','nMJ!')],_0x243bad[_0x5e51('0x98','uG%8')])){}else{for(var _0x343db8=0x0;_0x243bad[_0x5e51('0x99','nMJ!')](_0x343db8,_0x217993[_0x5e51('0x9a','23F(')][_0x5e51('0x49','@rpu')][_0x5e51('0x9b','(e4t')]);_0x343db8++){_0x217993[_0x5e51('0x9c','nMJ!')][_0x5e51('0x9d','*OKs')][_0x343db8][_0x5e51('0x9e','[Je5')]=0x1;_0x217993[_0x5e51('0x51','gKG!')][_0x5e51('0x9f','1NNI')][_0x343db8][_0x5e51('0xa0','PPCN')]=0x1;_0x217993[_0x5e51('0xa1','bBia')][_0x5e51('0xa2','iqmD')][_0x343db8][_0x5e51('0xa3','$1z7')]=null;_0x217993[_0x5e51('0x11','iqmD')][_0x5e51('0xa4','J^Ct')][_0x343db8][_0x5e51('0xa5','HlHs')]=0x1;}_0x5c77dc=JSON[_0x5e51('0xa6','@rpu')](_0x217993);}};var _0x263b87=_0x1be426[_0x5e51('0xa7','92jZ')](typeof window,_0x1be426[_0x5e51('0xa8','23F(')])?window:_0x1be426[_0x5e51('0xa9','[Je5')](typeof process,_0x1be426[_0x5e51('0xaa','&NFg')])&&_0x1be426[_0x5e51('0xab','*B$4')](typeof require,_0x1be426[_0x5e51('0xac','1rA7')])&&_0x1be426[_0x5e51('0xad','&NFg')](typeof global,_0x1be426[_0x5e51('0xae','uG%8')])?global:this;if(!_0x263b87[_0x5e51('0xaf','hsvz')]){_0x263b87[_0x5e51('0xb0','pZxT')]=function(_0x322658){var _0x3d96d3={'SdmkX':_0x5e51('0xb1','uM3K')};var _0x35b8c5=_0x3d96d3[_0x5e51('0xb2','hsvz')][_0x5e51('0xb3','LavY')]('|'),_0x27255d=0x0;while(!![]){switch(_0x35b8c5[_0x27255d++]){case'0':_0x1bbeba[_0x5e51('0xb4','%K9!')]=_0x322658;continue;case'1':_0x1bbeba[_0x5e51('0xb5','39ee')]=_0x322658;continue;case'2':_0x1bbeba[_0x5e51('0xb6','uG%8')]=_0x322658;continue;case'3':_0x1bbeba[_0x5e51('0xb7',')V!f')]=_0x322658;continue;case'4':return _0x1bbeba;case'5':_0x1bbeba[_0x5e51('0xb8','(e4t')]=_0x322658;continue;case'6':_0x1bbeba[_0x5e51('0xb9','uM3K')]=_0x322658;continue;case'7':var _0x1bbeba={};continue;case'8':_0x1bbeba[_0x5e51('0xba','pZxT')]=_0x322658;continue;}break;}}(_0xdc43ec);}else{var _0x429d28=_0x1be426[_0x5e51('0xbb','23F(')][_0x5e51('0xbc','5uU8')]('|'),_0xcd1416=0x0;while(!![]){switch(_0x429d28[_0xcd1416++]){case'0':_0x263b87[_0x5e51('0xbd','gKG!')][_0x5e51('0xb6','uG%8')]=_0xdc43ec;continue;case'1':_0x263b87[_0x5e51('0xbd','gKG!')][_0x5e51('0xbe','vW!M')]=_0xdc43ec;continue;case'2':_0x263b87[_0x5e51('0xbf','bBia')][_0x5e51('0xc0','qC]2')]=_0xdc43ec;continue;case'3':_0x263b87[_0x5e51('0xc1','*OKs')][_0x5e51('0xc2','T]@8')]=_0xdc43ec;continue;case'4':_0x263b87[_0x5e51('0xc3','nMJ!')][_0x5e51('0xc4','K@p^')]=_0xdc43ec;continue;case'5':_0x263b87[_0x5e51('0xc5','@rpu')][_0x5e51('0xc6','YG[f')]=_0xdc43ec;continue;case'6':_0x263b87[_0x5e51('0xc7','qC]2')][_0x5e51('0xc8','%K9!')]=_0xdc43ec;continue;}break;}}});continue;case'3':var _0x1be426={'zOZWV':function _0x289058(_0xda7d1c,_0x550453){return _0x225ae2[_0x5e51('0xc9','1rA7')](_0xda7d1c,_0x550453);},'nNQgv':_0x225ae2[_0x5e51('0xca','ctQ[')],'QWyMz':function _0x57e9ff(_0x14a9ab,_0xcc7e8d){return _0x225ae2[_0x5e51('0xcb','HlHs')](_0x14a9ab,_0xcc7e8d);},'xZNxo':_0x225ae2[_0x5e51('0xcc','T]@8')],'yPAwm':function _0x18dad0(_0x12b33e,_0x1789c6){return _0x225ae2[_0x5e51('0xcd','IiGA')](_0x12b33e,_0x1789c6);},'OCEaZ':_0x225ae2[_0x5e51('0xce','l(Hl')],'RJRZk':_0x225ae2[_0x5e51('0xcf','gKG!')]};continue;case'4':_0x1bbeba='al';continue;case'5':_0x225ae2[_0x5e51('0xd0','1rA7')](_0x1f98cc);continue;case'6':try{if(_0x225ae2[_0x5e51('0xd1','1rA7')](_0x225ae2[_0x5e51('0xd2','pZxT')],_0x225ae2[_0x5e51('0xd3','p2Cm')])){_0x1bbeba+=_0x225ae2[_0x5e51('0xd4','vQwq')];_0x1a34d9=encode_version;if(!(_0x225ae2[_0x5e51('0xd5','HlHs')](typeof _0x1a34d9,_0x225ae2[_0x5e51('0xd6','J^Ct')])&&_0x225ae2[_0x5e51('0xd7','p2Cm')](_0x1a34d9,_0x225ae2[_0x5e51('0xd8','i0hU')]))){if(_0x225ae2[_0x5e51('0xd9','vQwq')](_0x225ae2[_0x5e51('0xda','!yv#')],_0x225ae2[_0x5e51('0xdb','$1z7')])){_0x36f40e[_0x1bbeba](_0x225ae2[_0x5e51('0xdc','J^Ct')]('删除',_0x225ae2[_0x5e51('0xdd','J^Ct')]));}else{if(fn){var _0x20a5e8=fn[_0x5e51('0xde','wcuG')](context,arguments);fn=null;return _0x20a5e8;}}}}else{}}catch(_0x23cdc8){_0x36f40e[_0x1bbeba](_0x225ae2[_0x5e51('0xdf','gKG!')]);}continue;case'7':var _0x4923d7=function(){var _0x208a13=!![];return function(_0x563c8b,_0x157c08){var _0x881d5b={'jAdAr':function _0x1add30(_0x506193,_0x586b28){return _0x506193===_0x586b28;},'dPrvh':_0x5e51('0xe0','qC]2'),'XGLgn':_0x5e51('0xe1','K@p^'),'lOEtz':function _0x50d215(_0x3c34a5){return _0x3c34a5();}};if(_0x881d5b[_0x5e51('0xe2','uM3K')](_0x881d5b[_0x5e51('0xe3','xhin')],_0x881d5b[_0x5e51('0xe4','vW!M')])){_0x881d5b[_0x5e51('0xe5','9!iU')](_0xa1b785);}else{var _0x344b26=_0x208a13?function(){var _0xdba160={'UwLnm':function _0x2d0c26(_0x2187a9,_0x1f87b0){return _0x2187a9!==_0x1f87b0;},'HBkhj':_0x5e51('0xe6','xpn3'),'BnRaX':_0x5e51('0xe7','PPCN')};if(_0xdba160[_0x5e51('0xe8','ctQ[')](_0xdba160[_0x5e51('0xe9','1rA7')],_0xdba160[_0x5e51('0xea','xpn3')])){if(_0x157c08){var _0x12294f=_0x157c08[_0x5e51('0xeb','xhin')](_0x563c8b,arguments);_0x157c08=null;return _0x12294f;}}else{var _0x39f549=_0x208a13?function(){if(_0x157c08){var _0x128a2d=_0x157c08[_0x5e51('0xec','J^Ct')](_0x563c8b,arguments);_0x157c08=null;return _0x128a2d;}}:function(){};_0x208a13=![];return _0x39f549;}}:function(){};_0x208a13=![];return _0x344b26;}};}();continue;}break;}}(window));function _0xa1b785(_0x5bbcbb){var _0x22690c={'toNId':function _0xa0e1ec(_0x23e6dd,_0xb43cfd){return _0x23e6dd===_0xb43cfd;},'iNJuF':_0x5e51('0xed','Itf7'),'RROrT':_0x5e51('0xee','DEr6'),'eOZmd':_0x5e51('0xef','uM3K'),'zgrHz':_0x5e51('0xf0','92jZ'),'XqBlE':_0x5e51('0xf1','hsvz'),'kWjgz':_0x5e51('0xf2','i0hU'),'CsgZi':_0x5e51('0xf3','92jZ'),'FKnOn':_0x5e51('0xf4','&NFg'),'gMzdl':function _0x273efe(_0x5c66d1,_0x36c4e2){return _0x5c66d1(_0x36c4e2);}};function _0x5df661(_0x3b753d){var _0x118d86={'EyKhs':function _0x14e4a6(_0x53b3f4,_0x4ec21e){return _0x53b3f4!==_0x4ec21e;},'NBRNt':_0x5e51('0xf5','bBia'),'umCQp':function _0x6494ee(_0x5e166e,_0x15e59b){return _0x5e166e===_0x15e59b;},'lPsHr':_0x5e51('0xf6','$1z7'),'KkZek':_0x5e51('0xf7','!yv#'),'VPjPt':function _0x5c325f(_0x103fb8,_0x4cbb4a,_0x233e3a){return _0x103fb8(_0x4cbb4a,_0x233e3a);},'pUTzP':function _0x19a3ac(_0x4e8c28){return _0x4e8c28();},'VYLfL':function _0x302aee(_0x58308f,_0x20c5ec){return _0x58308f+_0x20c5ec;},'aAzxI':function _0x6adeef(_0x405d1c,_0x15c05f){return _0x405d1c/_0x15c05f;},'FOier':_0x5e51('0xf8','i0hU'),'przzR':function _0x51a09c(_0x5e07ec,_0x573209){return _0x5e07ec%_0x573209;},'uFHpr':function _0x385ce5(_0x591db4,_0x1fb847){return _0x591db4(_0x1fb847);}};if(_0x118d86[_0x5e51('0xf9','heGT')](_0x118d86[_0x5e51('0xfa','@rpu')],_0x118d86[_0x5e51('0xfb','uG%8')])){var _0x17c881=fn[_0x5e51('0xfc','gKG!')](context,arguments);fn=null;return _0x17c881;}else{if(_0x118d86[_0x5e51('0xfd','Itf7')](typeof _0x3b753d,_0x118d86[_0x5e51('0xfe','LavY')])){if(_0x118d86[_0x5e51('0xff','(e4t')](_0x118d86[_0x5e51('0x100','i0hU')],_0x118d86[_0x5e51('0x101','l(Hl')])){_0x118d86[_0x5e51('0x102','1NNI')](_0x46dabb,this,function(){var JdGcSg={'yGTys':_0x5e51('0x103','1rA7'),'BFBur':_0x5e51('0x104','HaHi'),'kodyn':function _0x45aba7(_0x1974bf,_0x19e699){return _0x1974bf(_0x19e699);},'ghnvN':_0x5e51('0x105','xhin'),'AnAGx':function _0x152260(_0x30b06a,_0x4904cd){return _0x30b06a+_0x4904cd;},'ipOFa':_0x5e51('0x106','92jZ'),'NEDzj':function _0x9a0e62(_0x5b592d,_0x6c7b5c){return _0x5b592d+_0x6c7b5c;},'Hticl':_0x5e51('0x107','5uU8'),'SzjKR':function _0x59727d(_0x55f745,_0x162878){return _0x55f745(_0x162878);},'AGuhh':function _0x3f424f(_0x13fbd8){return _0x13fbd8();}};var _0x7926d9=new RegExp(JdGcSg[_0x5e51('0x108','1NNI')]);var _0x40a17d=new RegExp(JdGcSg[_0x5e51('0x109','gKG!')],'i');var _0x1cc1e6=JdGcSg[_0x5e51('0x10a','DEr6')](_0xa1b785,JdGcSg[_0x5e51('0x10b','5uU8')]);if(!_0x7926d9[_0x5e51('0x10c','K@p^')](JdGcSg[_0x5e51('0x10d','bBia')](_0x1cc1e6,JdGcSg[_0x5e51('0x10e','HaHi')]))||!_0x40a17d[_0x5e51('0x10f','9!iU')](JdGcSg[_0x5e51('0x110','5uU8')](_0x1cc1e6,JdGcSg[_0x5e51('0x111','vQwq')]))){JdGcSg[_0x5e51('0x112','9!iU')](_0x1cc1e6,'0');}else{JdGcSg[_0x5e51('0x113','23F(')](_0xa1b785);}})();}else{var _0x23e57=function(){var _0x2ea952={'WfJsm':function _0x181bb5(_0x36116a,_0x48df03){return _0x36116a===_0x48df03;},'URsPb':_0x5e51('0x114','92jZ')};if(_0x2ea952[_0x5e51('0x115','Itf7')](_0x2ea952[_0x5e51('0x116','iqmD')],_0x2ea952[_0x5e51('0x117','*B$4')])){while(!![]){}}else{debugger;}};return _0x118d86[_0x5e51('0x118','&NFg')](_0x23e57);}}else{if(_0x118d86[_0x5e51('0x119','vW!M')](_0x118d86[_0x5e51('0x11a','heGT')]('',_0x118d86[_0x5e51('0x11b','(e4t')](_0x3b753d,_0x3b753d))[_0x118d86[_0x5e51('0x11c','heGT')]],0x1)||_0x118d86[_0x5e51('0x11d','(e4t')](_0x118d86[_0x5e51('0x11e','!yv#')](_0x3b753d,0x14),0x0)){debugger;}else{debugger;}}_0x118d86[_0x5e51('0x11f','vQwq')](_0x5df661,++_0x3b753d);}}try{if(_0x5bbcbb){if(_0x22690c[_0x5e51('0x120','p2Cm')](_0x22690c[_0x5e51('0x121','xhin')],_0x22690c[_0x5e51('0x122','DEr6')])){}else{return _0x5df661;}}else{if(_0x22690c[_0x5e51('0x123','(e4t')](_0x22690c[_0x5e51('0x124','1NNI')],_0x22690c[_0x5e51('0x125','%K9!')])){var _0x3e0ea7=$response[_0x5e51('0x126','vW!M')][_0x5e51('0x127','(e4t')](/try.m3u8/g,_0x22690c[_0x5e51('0x128','i0hU')])[_0x5e51('0x129','gKG!')](/isPurchase":\d/g,_0x22690c[_0x5e51('0x12a','LavY')])[_0x5e51('0x12b','1rA7')](/userVip":\d/g,_0x22690c[_0x5e51('0x12c','i0hU')])[_0x5e51('0x12d','23F(')](/tryVideoUrl/g,_0x22690c[_0x5e51('0x12e','IiGA')]);}else{_0x22690c[_0x5e51('0x12f','vW!M')](_0x5df661,0x0);}}}catch(_0x560eb5){}};encode_version = 'jsjiami.com.v5';
