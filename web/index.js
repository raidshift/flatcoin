const a0_0x5c41f2=a0_0x4c87;(function(_0x187e71,_0x22aee5){const _0xe11a98=a0_0x4c87,_0x3f9534=_0x187e71();while(!![]){try{const _0x3f35ca=-parseInt(_0xe11a98(0x157))/0x1*(-parseInt(_0xe11a98(0x10a))/0x2)+parseInt(_0xe11a98(0x13b))/0x3*(parseInt(_0xe11a98(0x133))/0x4)+parseInt(_0xe11a98(0x16d))/0x5*(-parseInt(_0xe11a98(0x141))/0x6)+-parseInt(_0xe11a98(0x11d))/0x7*(parseInt(_0xe11a98(0x137))/0x8)+parseInt(_0xe11a98(0x161))/0x9+parseInt(_0xe11a98(0x15f))/0xa*(-parseInt(_0xe11a98(0x16a))/0xb)+parseInt(_0xe11a98(0x110))/0xc;if(_0x3f35ca===_0x22aee5)break;else _0x3f9534['push'](_0x3f9534['shift']());}catch(_0x1683e6){_0x3f9534['push'](_0x3f9534['shift']());}}}(a0_0x4e4f,0xc42b3));let CONTRACT_LP=a0_0x5c41f2(0x118),CONTRACT_LP_HEX='41D23A354622A509211C078E85EE9A2095CE424B8E',CONTRACT_TOKEN=a0_0x5c41f2(0x174),CONTRACT_STABLE=a0_0x5c41f2(0x10f),TRONSCAN_URL_PREFIX='https://tronscan.io',TRONGRID_URL_PREFIX=a0_0x5c41f2(0x116),ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=!![],IMG_TOKEN_URL=a0_0x5c41f2(0x12a),IMG_STABLE_URL=a0_0x5c41f2(0x11a),NAME_TOKEN=a0_0x5c41f2(0x180),NAME_STABLE=a0_0x5c41f2(0xfd),DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY=a0_0x5c41f2(0x144),STABLE_BALANCE_OFFSET=a0_0x5c41f2(0x10d),LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)[a0_0x5c41f2(0x176)](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+'/#/contract/'+CONTRACT_LP+a0_0x5c41f2(0x12e),TRANSACTION_URL=TRONSCAN_URL_PREFIX+a0_0x5c41f2(0x13f),TRC20_TOKEN_APPROVE_OWNER=a0_0x5c41f2(0x186),TRC20_TOKEN_APPROVE_SPENDER=a0_0x5c41f2(0x123),TRC20_TOKEN_APPROVE_VALUE=a0_0x5c41f2(0x100),TRC20_STABLE_APPROVE_OWNER=a0_0x5c41f2(0x186),TRC20_STABLE_APPROVE_SPENDER=a0_0x5c41f2(0x123),TRC20_STABLE_APPROVE_VALUE='value',token=null,stable=null,liquidityPool=null,tronWebFeedInterval=null,tronGridFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null;const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0;cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function shortenString(_0x23630b){const _0x51decb=a0_0x5c41f2;let _0x3f62aa=_0x23630b;return _0x3f62aa['substr'](0x0,0x5)+_0x51decb(0x101)+_0x3f62aa[_0x51decb(0x120)](_0x3f62aa[_0x51decb(0x124)]-0x5,_0x3f62aa[_0x51decb(0x124)]);}function valueMoveCommaLeft(_0xc004e6,_0x3e8b39){const _0x54bee6=a0_0x5c41f2;return BigNumber(_0xc004e6)[_0x54bee6(0x11c)](0xa**_0x3e8b39);}function valueMoveCommaRight(_0x6333c9,_0x301920){return BigNumber(_0x6333c9)['times'](0xa**_0x301920);}function adjustDecimals(_0x525e29){const _0x5dab29=a0_0x5c41f2;let _0x2ed7a7,_0x5edd0c=BigNumber(_0x525e29);if(_0x5edd0c['isLessThan'](0x1))_0x2ed7a7=DECIMALS_6;else _0x5edd0c[_0x5dab29(0x14e)](0x2710)?_0x2ed7a7=DECIMALS_2:_0x2ed7a7=DECIMALS_0;return _0x5edd0c['toFixed'](_0x2ed7a7)[_0x5dab29(0x156)](cropZerosRegEx,'$1');}function numberWithCommas(_0x4c82d3){const _0x85e2b4=a0_0x5c41f2;var _0x11e0d0=_0x4c82d3[_0x85e2b4(0x130)]()[_0x85e2b4(0xfa)]('.');return _0x11e0d0[0x0]=_0x11e0d0[0x0][_0x85e2b4(0x156)](/\B(?=(\d{3})+(?!\d))/g,','),_0x11e0d0['join']('.');}async function readFromTronGrid(_0x2fd8ab){const _0x5de90b=a0_0x5c41f2,_0x521820={'method':_0x5de90b(0x14c),'headers':{'Accept':_0x5de90b(0x14a),'Content-Type':_0x5de90b(0x14a)},'body':JSON['stringify']({'owner_address':_0x5de90b(0x159),'contract_address':CONTRACT_LP_HEX,'function_selector':_0x2fd8ab})};return await fetch(TRONGRID_URL_PREFIX+_0x5de90b(0xfc),_0x521820)[_0x5de90b(0x154)](_0x12fa66=>_0x12fa66[_0x5de90b(0x145)]())[_0x5de90b(0x154)](_0x3bf29c=>{const _0x402bea=_0x5de90b;return _0x3bf29c[_0x402bea(0x169)][0x0];})[_0x5de90b(0x167)](_0x347d66=>console[_0x5de90b(0x16f)](_0x347d66));}async function getFromTronWeb(){const _0x282c51=a0_0x5c41f2;try{await new Promise(_0x518213=>setTimeout(_0x518213,0x64)),balanceToken=String(await token[_0x282c51(0x15a)](window['tronWeb'][_0x282c51(0x105)][_0x282c51(0xff)])[_0x282c51(0x132)]()),await new Promise(_0xe49862=>setTimeout(_0xe49862,0x64)),balanceStable=String(await stable[_0x282c51(0x15a)](window['tronWeb'][_0x282c51(0x105)][_0x282c51(0xff)])[_0x282c51(0x132)]()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token[_0x282c51(0x185)](window[_0x282c51(0x112)][_0x282c51(0x105)][_0x282c51(0xff)],CONTRACT_LP)[_0x282c51(0x132)]())[_0x282c51(0x148)]):allowanceToken=String(await token[_0x282c51(0x185)](window[_0x282c51(0x112)][_0x282c51(0x105)][_0x282c51(0xff)],CONTRACT_LP)[_0x282c51(0x132)]()),await new Promise(_0x565029=>setTimeout(_0x565029,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable['allowance'](window[_0x282c51(0x112)]['defaultAddress'][_0x282c51(0xff)],CONTRACT_LP)[_0x282c51(0x132)]())[_0x282c51(0x148)]):allowanceStable=String(await stable[_0x282c51(0x185)](window[_0x282c51(0x112)][_0x282c51(0x105)][_0x282c51(0xff)],CONTRACT_LP)[_0x282c51(0x132)]()),$('.balanceToken')[_0x282c51(0x113)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x282c51(0x183)](DECIMALS_6)[_0x282c51(0x156)](cropZerosRegEx,'$1')),$(_0x282c51(0x14b))[_0x282c51(0x113)](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)[_0x282c51(0x183)](DECIMALS_6)[_0x282c51(0x156)](cropZerosRegEx,'$1')),$(_0x282c51(0x119))['text'](shortenString(window['tronWeb'][_0x282c51(0x105)][_0x282c51(0xff)])),enableControls(!![]);}catch(_0x61248e){console[_0x282c51(0x166)](_0x282c51(0x140)+_0x61248e);throw _0x61248e;}}function a0_0x4c87(_0x516677,_0x225eac){const _0x4e4f11=a0_0x4e4f();return a0_0x4c87=function(_0x4c8709,_0x2eed86){_0x4c8709=_0x4c8709-0xf5;let _0x16f2e0=_0x4e4f11[_0x4c8709];return _0x16f2e0;},a0_0x4c87(_0x516677,_0x225eac);}async function getFromTronGrid(){const _0x26c66a=a0_0x5c41f2;await new Promise(_0x4f839f=>setTimeout(_0x4f839f,0x64)),tokenBalanceContract=BigNumber('0x'+await readFromTronGrid('tokenBalance()'))[_0x26c66a(0x183)](),await new Promise(_0x2db971=>setTimeout(_0x2db971,0x64)),stableBalanceContract=BigNumber('0x'+await readFromTronGrid('stableBalance()'))['toFixed'](),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)[_0x26c66a(0x135)](STABLE_BALANCE_OFFSET)['div'](tokenBalanceContract)[_0x26c66a(0x183)](DECIMALS_6)),$(_0x26c66a(0x102))[_0x26c66a(0x113)](numberWithCommas(valueMoveCommaLeft(tokenBalanceContract,DECIMALS_TOKEN)[_0x26c66a(0x183)](DECIMALS_6)[_0x26c66a(0x156)](cropZerosRegEx,'$1'))),$('.stableBalanceContract')[_0x26c66a(0x113)](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)[_0x26c66a(0x183)](DECIMALS_6)[_0x26c66a(0x156)](cropZerosRegEx,'$1'))),$(_0x26c66a(0x170))[_0x26c66a(0x113)](numberWithCommas(currentMarketPrice));}async function startTronGridFeed(){const _0x232d8c=a0_0x5c41f2;try{tronGridFeedInterval==null&&(console[_0x232d8c(0x166)](_0x232d8c(0x138)),await getFromTronGrid(),tronGridFeedInterval=setInterval(async function(){await getFromTronGrid();},0x2710));}catch(_0x1b2446){}}async function startTronWebFeed(){const _0x1e5c7c=a0_0x5c41f2;try{tronWebFeedInterval==null&&(console[_0x1e5c7c(0x166)](_0x1e5c7c(0x15c)),await getFromTronWeb(),tronWebFeedInterval=setInterval(async function(){await getFromTronWeb();},0x2710));}catch(_0x392dcf){}}function stopFromTronWebFeed(){const _0x5c6bfc=a0_0x5c41f2;console[_0x5c6bfc(0x166)](_0x5c6bfc(0xfb)),tronWebFeedInterval!=null&&(clearInterval(tronWebFeedInterval),tronWebFeedInterval=null,console[_0x5c6bfc(0x166)]('balanceFeedInterval\x20cleared'));}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![],ALLOW_ENABLE_CONTROLS=!![];function showConnectionMsg(_0x16ad71){const _0x2ccb82=a0_0x5c41f2;$(_0x2ccb82(0x10e))[_0x2ccb82(0x13d)](_0x2ccb82(0x181),!_0x16ad71);}function enableControls(_0x28bbbd){const _0x124df9=a0_0x5c41f2;_0x28bbbd&&!ALLOW_ENABLE_CONTROLS&&(_0x28bbbd=![]),$(_0x124df9(0x12c))['prop'](_0x124df9(0x134),!_0x28bbbd),$(_0x124df9(0x14f))[_0x124df9(0x13d)]('disabled',!_0x28bbbd),$('#swap_btn')[_0x124df9(0x13d)](_0x124df9(0x134),!_0x28bbbd);}$(document)['ready'](async function(){const _0x524a42=a0_0x5c41f2;showConnectionMsg(!![]),$(_0x524a42(0x146))['prop'](_0x524a42(0x136),CONTRACT_LP_NETWORK_URL),$('.tokenName')[_0x524a42(0x113)](NAME_TOKEN),$('.stableName')[_0x524a42(0x113)](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()['finally'](()=>{LOCK=![];});});async function initialize(){const _0x2d1c1f=a0_0x5c41f2;console[_0x2d1c1f(0x166)](_0x2d1c1f(0x125));try{await startTronGridFeed(),await tronLinkReady(),await getTronWeb(),await startTronWebFeed();}catch(_0x304bec){console['log'](_0x2d1c1f(0x103)),showConnectionMsg(!![]),enableControls(![]),stopFromTronWebFeed();}}async function getTronWeb(){const _0x50496f=a0_0x5c41f2;try{const _0x12be64=await tronLink[_0x50496f(0x147)]({'method':_0x50496f(0x17a)});if(_0x12be64[_0x50496f(0x12f)]!=0xc8)throw _0x12be64;await new Promise(_0x193ae5=>setTimeout(_0x193ae5,0x64)),token=await tronWeb[_0x50496f(0x164)]()['at'](CONTRACT_TOKEN),await new Promise(_0x1644e6=>setTimeout(_0x1644e6,0x64)),stable=await tronWeb[_0x50496f(0x164)]()['at'](CONTRACT_STABLE),await new Promise(_0x45e597=>setTimeout(_0x45e597,0x64)),liquidityPool=await tronWeb[_0x50496f(0x164)]()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0x54003f){console[_0x50496f(0x166)]('getTronWeb\x20error:\x20'+_0x54003f),showConnectionMsg(!![]),enableControls(![]);throw _0x54003f;}}async function tronLinkReady(){await new Promise(_0x269ae8=>{const _0x1bcb19=setInterval(()=>{const _0x10d0a8=a0_0x4c87;if(window['tronWeb']&&window['tronWeb'][_0x10d0a8(0x105)][_0x10d0a8(0xff)])return clearInterval(_0x1bcb19),_0x269ae8();},0x64);});}setInterval(function(){const _0x31bb8e=a0_0x5c41f2,_0x372f66=tronWeb[_0x31bb8e(0x105)][_0x31bb8e(0xff)];if(!PREV_ACCOUNT&&_0x372f66)PREV_ACCOUNT=_0x372f66;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0x372f66&&window['location'][_0x31bb8e(0x129)]();},0x3e8),window[a0_0x5c41f2(0x15b)](a0_0x5c41f2(0x153),async function(_0x296eea){const _0x44766a=a0_0x5c41f2;_0x296eea[_0x44766a(0x10c)][_0x44766a(0x153)]&&_0x296eea[_0x44766a(0x10c)][_0x44766a(0x153)][_0x44766a(0x189)]==_0x44766a(0x165)&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x296eea['data'][_0x44766a(0x153)]['data'][_0x44766a(0x13a)],(addr==undefined||addr==null||!addr)&&window[_0x44766a(0x127)][_0x44766a(0x129)](),!INITIALIZED?await initialize():await getTronWeb()[_0x44766a(0x154)](()=>{})['catch'](_0x2eeb14=>{const _0x30e47f=_0x44766a;this['window'][_0x30e47f(0x127)][_0x30e47f(0x129)]();}),LOCK=![]));});function displayPrice(_0xee2c03,_0x3056cb){const _0x2da5e0=a0_0x5c41f2;_0xee2c03[_0x2da5e0(0x182)](0x0)&&_0x3056cb[_0x2da5e0(0x182)](0x0)&&$(_0x2da5e0(0x171))[_0x2da5e0(0x113)](_0x3056cb[_0x2da5e0(0x11c)](_0xee2c03)[_0x2da5e0(0x183)](DECIMALS_6));}function a0_0x4e4f(){const _0x53d927=['TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs','.account','USDT_128.png','stopPropagation','div','1400007fihcZF','#swap_from_img','oldValue','substr','input','click','spender','length','INITIALIZING','mousedown','location','src','reload','FLAT_128.png','#swap_from_stable','#swap_from_input','blur','/code','code','toString','mouseup','call','843572uwijxS','disabled','plus','href','24HIExGr','STARTING\x20TRONGRID\x20DATA\x20FEED\x20',')</span>','address','9FUnCAg','submit','prop','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','/#/transaction/','getFromTronWeb\x20error:\x20','150PPPbUq','selectionStart','Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds','1000000000000','json','.contractLPCodeURL','request','remaining','<span\x20class=\x22text-warning\x22>Your\x20','application/json','.balanceStable','POST','#switch_btn','isLessThan','#swap_to_input','</a>\x20submitted</span>','integerValue','setSelectionRange','message','then','select','replace','17gCIWRz','preventDefault','414EE04F77D2D8FCCC501FF7C587478D2FBEE80EA0','balanceOf','addEventListener','STARTING\x20TRONWEB\x20DATA\x20FEED\x20','.validationMsg','<span\x20class=\x22fw-bold\x22>Approve\x20(','40TVSaYA','prototype','430992VTAMAi','isNaN','selectionEnd','contract','setAccount','log','catch','<span\x20class=\x22text-warning\x22>Please\x20enter\x20valid\x20values</span>','constant_result','2495383pcBFVj','\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>','<span\x20class=\x22text-warning\x22>','304435qVanJT','\x20balance\x20is\x20too\x20low</span>','error','.currentMarketPrice','.price','swap_from_input','send','TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ','#swap_to_token','times','ROUND_FLOOR','isLessThanOrEqualTo','oldSelectionEnd','tron_requestAccounts','val','<span\x20class=\x22fw-bold\x22>Swap\x20(','#swap_from_token','#swap_to_stable','<div\x20class=\x22spinner-border\x20spinner-border-xs\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting\x20for\x20signature...</span></div><span\x20class=\x22text-warning\x22>&nbsp;Waiting\x20for\x20','FLAT','hidden','isGreaterThan','toFixed','swap_to_input','allowance','owner','slice','drop','action','minus','html','hasOwnProperty','focus','forEach','split','STOPPING\x20TRONWEB\x20DATA\x20FEED\x20','/wallet/triggersmartcontract','USDT','getElementById','base58','value','...','.tokenBalanceContract','INITIALIZING\x20FAILED','#swap_input_balance_stable','defaultAddress',')\x20START','deposit','#swap_to_img','keydown','54444yjjoTP','oldSelectionStart','data','1000000000','.connect-msg','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','32277072Vpysqd','approve','tronWeb','text','withdraw','test','https://api.trongrid.io','.swap_form'];a0_0x4e4f=function(){return _0x53d927;};return a0_0x4e4f();}function setInputFilter(_0x39938e,_0x3dc726){const _0x49d730=a0_0x5c41f2;[_0x49d730(0x121),_0x49d730(0x109),'keyup',_0x49d730(0x126),_0x49d730(0x131),_0x49d730(0x155),'contextmenu',_0x49d730(0x188),_0x49d730(0x12d),_0x49d730(0xf8)]['forEach'](function(_0x4b3351){const _0x5858e1=_0x49d730;_0x39938e[_0x5858e1(0x15b)](_0x4b3351,function(){const _0x69d838=_0x5858e1;if(_0x3dc726(this[_0x69d838(0x100)]))this[_0x69d838(0x11f)]=this[_0x69d838(0x100)],this['oldSelectionStart']=this[_0x69d838(0x142)],this[_0x69d838(0x179)]=this[_0x69d838(0x163)];else this[_0x69d838(0xf7)](_0x69d838(0x11f))?(this[_0x69d838(0x100)]=this['oldValue'],this[_0x69d838(0x152)](this[_0x69d838(0x10b)],this[_0x69d838(0x179)])):this[_0x69d838(0x100)]='';if(_0x39938e['id']==_0x69d838(0x172)){if($(_0x69d838(0x12b))['prop'](_0x69d838(0x181))==!![]){const _0xcb8ddc=$(_0x69d838(0x12c))[_0x69d838(0x17b)]();if(!(_0xcb8ddc==''||_0xcb8ddc<=0x0||this[_0x69d838(0x100)]==''||this[_0x69d838(0x100)]<=0x0)){let _0x55e91e=BigNumber(valueMoveCommaRight($('#swap_from_input')[_0x69d838(0x17b)](),DECIMALS_TOKEN)),_0x378a1c=BigNumber(tokenBalanceContract),_0x23a4de=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x1b6c8f=_0x378a1c[_0x69d838(0x135)](_0x55e91e),_0x5f3a13=LP_INVARIANT[_0x69d838(0x11c)](_0x1b6c8f)['integerValue'](BigNumber[_0x69d838(0x177)]),_0x5c30ea=_0x23a4de['minus'](_0x5f3a13);_0x1b6c8f['isGreaterThan'](TOKEN_MAX_SUPPLY)&&(_0x5c30ea=BigNumber(0x0));$('#swap_to_input')['val'](valueMoveCommaLeft(_0x5c30ea,DECIMALS_STABLE)[_0x69d838(0x183)](DECIMALS_6));if(_0x4b3351==_0x69d838(0x12d)){let _0x2d80c5=_0x23a4de[_0x69d838(0xf5)](_0x5c30ea),_0x57a035=LP_INVARIANT[_0x69d838(0x11c)](_0x2d80c5)[_0x69d838(0x151)](BigNumber[_0x69d838(0x177)]),_0x368dcc=_0x57a035[_0x69d838(0xf5)](_0x378a1c);$('#swap_from_input')[_0x69d838(0x17b)](valueMoveCommaLeft(_0x368dcc,DECIMALS_TOKEN)[_0x69d838(0x183)](DECIMALS_6));}displayPrice(_0x55e91e,_0x5c30ea);}}else{const _0x3b9843=$('#swap_from_input')[_0x69d838(0x17b)]();if(!(_0x3b9843==''||_0x3b9843<=0x0||this[_0x69d838(0x100)]==''||this[_0x69d838(0x100)]<=0x0)){let _0x7bad47=BigNumber(valueMoveCommaRight($(_0x69d838(0x12c))[_0x69d838(0x17b)](),DECIMALS_STABLE)),_0x43bf88=BigNumber(tokenBalanceContract),_0x46c8e9=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x425237=_0x46c8e9[_0x69d838(0x135)](_0x7bad47),_0x2421da=LP_INVARIANT[_0x69d838(0x11c)](_0x425237)[_0x69d838(0x151)](BigNumber['ROUND_FLOOR']),_0x12dea6=_0x43bf88[_0x69d838(0xf5)](_0x2421da);$(_0x69d838(0x14f))[_0x69d838(0x17b)](valueMoveCommaLeft(_0x12dea6,DECIMALS_TOKEN)[_0x69d838(0x183)](DECIMALS_6));if(_0x4b3351=='blur'){let _0x23590c=_0x43bf88[_0x69d838(0xf5)](_0x12dea6),_0x28bbec=LP_INVARIANT[_0x69d838(0x11c)](_0x23590c)[_0x69d838(0x151)](BigNumber[_0x69d838(0x177)]),_0x322947=_0x28bbec[_0x69d838(0xf5)](_0x46c8e9);$(_0x69d838(0x12c))[_0x69d838(0x17b)](valueMoveCommaLeft(_0x322947,DECIMALS_STABLE)[_0x69d838(0x183)](DECIMALS_6));}displayPrice(_0x12dea6,_0x7bad47);}}}if(_0x39938e['id']==_0x69d838(0x184)){if($(_0x69d838(0x12b))[_0x69d838(0x13d)](_0x69d838(0x181))==!![]){const _0x4607ec=$(_0x69d838(0x14f))[_0x69d838(0x17b)]();if(!(_0x4607ec==''||_0x4607ec<=0x0||this[_0x69d838(0x100)]==''||this[_0x69d838(0x100)]<=0x0)){let _0x44fae1=BigNumber(valueMoveCommaRight($('#swap_to_input')[_0x69d838(0x17b)](),DECIMALS_STABLE)),_0x158fac=BigNumber(tokenBalanceContract),_0x30eac4=BigNumber(stableBalanceContract)[_0x69d838(0x135)](STABLE_BALANCE_OFFSET),_0x424331=_0x30eac4['minus'](_0x44fae1),_0xa63950=LP_INVARIANT[_0x69d838(0x11c)](_0x424331)[_0x69d838(0x151)](BigNumber[_0x69d838(0x177)]),_0x403583=_0xa63950[_0x69d838(0xf5)](_0x158fac);(_0xa63950[_0x69d838(0x182)](TOKEN_MAX_SUPPLY)||_0x424331<0x0)&&(_0x403583=BigNumber(0x0));$('#swap_from_input')[_0x69d838(0x17b)](valueMoveCommaLeft(_0x403583,DECIMALS_TOKEN)[_0x69d838(0x183)](DECIMALS_6));if(_0x4b3351==_0x69d838(0x12d)){let _0x28c7b3=_0x158fac[_0x69d838(0x135)](_0x403583),_0x2f5898=LP_INVARIANT[_0x69d838(0x11c)](_0x28c7b3)['integerValue'](BigNumber['ROUND_FLOOR']),_0x269a76=_0x30eac4[_0x69d838(0xf5)](_0x2f5898);$(_0x69d838(0x14f))['val'](valueMoveCommaLeft(_0x269a76,DECIMALS_STABLE)[_0x69d838(0x183)](DECIMALS_6));}displayPrice(_0x403583,_0x44fae1);}}else{const _0x5f135a=$(_0x69d838(0x14f))[_0x69d838(0x17b)]();if(!(_0x5f135a==''||_0x5f135a<=0x0||this[_0x69d838(0x100)]==''||this['value']<=0x0)){let _0x3d388e=BigNumber(valueMoveCommaRight($(_0x69d838(0x14f))[_0x69d838(0x17b)](),DECIMALS_TOKEN)),_0x4b0544=BigNumber(tokenBalanceContract),_0x2c146d=BigNumber(stableBalanceContract)[_0x69d838(0x135)](STABLE_BALANCE_OFFSET),_0x14f793=_0x4b0544['minus'](_0x3d388e),_0x5fede9=LP_INVARIANT['div'](_0x14f793)[_0x69d838(0x151)](BigNumber['ROUND_FLOOR']),_0x2d2f53=_0x5fede9[_0x69d838(0xf5)](_0x2c146d);_0x2d2f53['isLessThan'](0x0)&&(_0x2d2f53=BigNumber(0x0));$(_0x69d838(0x12c))[_0x69d838(0x17b)](valueMoveCommaLeft(_0x2d2f53,DECIMALS_STABLE)['toFixed'](DECIMALS_6));if(_0x4b3351==_0x69d838(0x12d)){let _0x3f046b=_0x2c146d[_0x69d838(0x135)](_0x2d2f53),_0x2629f9=LP_INVARIANT['div'](_0x3f046b)[_0x69d838(0x151)](BigNumber[_0x69d838(0x177)]),_0x5361d3=_0x4b0544[_0x69d838(0xf5)](_0x2629f9);$('#swap_to_input')['val'](valueMoveCommaLeft(_0x5361d3,DECIMALS_TOKEN)[_0x69d838(0x183)](DECIMALS_6));}displayPrice(_0x3d388e,_0x2d2f53);}}}});});}setInputFilter(document[a0_0x5c41f2(0xfe)]('swap_from_input'),function(_0x44acb5){return/^-?\d*[.]?\d{0,6}$/['test'](_0x44acb5);}),setInputFilter(document['getElementById']('swap_to_input'),function(_0x29a16a){const _0x3885a5=a0_0x5c41f2;return/^-?\d*[.]?\d{0,6}$/[_0x3885a5(0x115)](_0x29a16a);}),$(function(){const _0x33a565=a0_0x5c41f2;$(_0x33a565(0x14d))[_0x33a565(0x122)](function(_0x1148ce){const _0x2533fd=_0x33a565;_0x1148ce[_0x2533fd(0x158)]();if($(_0x2533fd(0x12b))[_0x2533fd(0x13d)](_0x2533fd(0x181))==!![]){$(_0x2533fd(0x12b))[_0x2533fd(0x13d)](_0x2533fd(0x181),![]),$(_0x2533fd(0x17d))[_0x2533fd(0x13d)](_0x2533fd(0x181),!![]),$(_0x2533fd(0x17e))[_0x2533fd(0x13d)]('hidden',!![]),$(_0x2533fd(0x175))[_0x2533fd(0x13d)]('hidden',![]),$(_0x2533fd(0x11e))[_0x2533fd(0x13d)](_0x2533fd(0x128),IMG_STABLE_URL),$(_0x2533fd(0x108))['prop'](_0x2533fd(0x128),IMG_TOKEN_URL);let _0x8749ef=$(_0x2533fd(0x12c))[_0x2533fd(0x17b)](),_0x5cbdb8=$(_0x2533fd(0x14f))[_0x2533fd(0x17b)]();$(_0x2533fd(0x12c))[_0x2533fd(0x17b)](_0x5cbdb8),$(_0x2533fd(0x14f))['val'](_0x8749ef),document['getElementById'](_0x2533fd(0x172))[_0x2533fd(0xf8)]();}else{$(_0x2533fd(0x12b))[_0x2533fd(0x13d)](_0x2533fd(0x181),!![]),$(_0x2533fd(0x17d))[_0x2533fd(0x13d)](_0x2533fd(0x181),![]),$(_0x2533fd(0x17e))[_0x2533fd(0x13d)](_0x2533fd(0x181),![]),$(_0x2533fd(0x175))[_0x2533fd(0x13d)](_0x2533fd(0x181),!![]),$('#swap_from_img')[_0x2533fd(0x13d)](_0x2533fd(0x128),IMG_TOKEN_URL),$('#swap_to_img')[_0x2533fd(0x13d)](_0x2533fd(0x128),IMG_STABLE_URL);let _0x1fc7ab=$(_0x2533fd(0x12c))[_0x2533fd(0x17b)](),_0x2f720a=$(_0x2533fd(0x14f))['val']();$(_0x2533fd(0x12c))['val'](_0x2f720a),$('#swap_to_input')[_0x2533fd(0x17b)](_0x1fc7ab),document[_0x2533fd(0xfe)](_0x2533fd(0x172))[_0x2533fd(0xf8)]();}}),$('#swap_input_balance_token')[_0x33a565(0x122)](function(_0x61ccb0){const _0x2d2e3a=_0x33a565;_0x61ccb0['preventDefault'](),($(_0x2d2e3a(0x12c))[_0x2d2e3a(0x13d)](_0x2d2e3a(0x134))!=!![]||$(_0x2d2e3a(0x14f))[_0x2d2e3a(0x13d)](_0x2d2e3a(0x134))!=!![])&&($(_0x2d2e3a(0x12b))[_0x2d2e3a(0x13d)](_0x2d2e3a(0x181))==!![]?($(_0x2d2e3a(0x12c))['val'](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x2d2e3a(0x183)](DECIMALS_6)),document[_0x2d2e3a(0xfe)](_0x2d2e3a(0x172))[_0x2d2e3a(0xf8)]()):($(_0x2d2e3a(0x14f))[_0x2d2e3a(0x17b)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x2d2e3a(0x183)](DECIMALS_6)),document[_0x2d2e3a(0xfe)](_0x2d2e3a(0x184))[_0x2d2e3a(0xf8)]()));}),$(_0x33a565(0x104))[_0x33a565(0x122)](function(_0x5da698){const _0x1b3302=_0x33a565;_0x5da698[_0x1b3302(0x158)](),($(_0x1b3302(0x12c))['prop']('disabled')!=!![]||$(_0x1b3302(0x14f))[_0x1b3302(0x13d)](_0x1b3302(0x134))!=!![])&&($(_0x1b3302(0x12b))[_0x1b3302(0x13d)](_0x1b3302(0x181))==!![]?($(_0x1b3302(0x14f))[_0x1b3302(0x17b)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0x1b3302(0x183)](DECIMALS_6)),document[_0x1b3302(0xfe)]('swap_to_input')[_0x1b3302(0xf8)]()):($('#swap_from_input')[_0x1b3302(0x17b)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0x1b3302(0x183)](DECIMALS_6)),document['getElementById']('swap_from_input')['focus']()));});});async function sendTransaction(_0x5b4330,_0x2adab8,_0x41940a,_0x4bd4e1){const _0x2f95a4=a0_0x5c41f2;console[_0x2f95a4(0x166)]('SEND\x20TRANSACTION\x20('+_0x5b4330+_0x2f95a4(0x106));let _0x12ddc9=![];$(_0x2f95a4(0x15d))[_0x2f95a4(0xf6)](_0x2f95a4(0x17f)+_0x5b4330+'\x20transaction\x20signature\x20...</span>');try{let _0x3be143=await _0x2adab8()[_0x2f95a4(0x173)]();$('.validationMsg')['html'](_0x2f95a4(0x16c)+_0x5b4330+'\x20transaction\x20<a\x20href=\x22'+TRANSACTION_URL+_0x3be143+_0x2f95a4(0x16b)+shortenString(_0x3be143)+_0x2f95a4(0x150));}catch(_0x22305f){let _0x2e7c60;return _0x22305f['message']?(_0x2e7c60=_0x22305f[_0x2f95a4(0x153)],_0x2e7c60=='AccountResourceInsufficient\x20error'&&(_0x2e7c60=_0x2f95a4(0x143))):_0x2e7c60=_0x22305f,$(_0x2f95a4(0x15d))[_0x2f95a4(0xf6)](_0x2f95a4(0x16c)+_0x2e7c60+'</span>'),[!![],!![]];}return console[_0x2f95a4(0x166)]('SEND\x20TRANSACTION\x20('+_0x5b4330+')\x20END'),[![],_0x12ddc9];}$(function(){'use strict';const _0x547682=a0_0x5c41f2;var _0x8c90b=document['querySelectorAll'](_0x547682(0x117));Array[_0x547682(0x160)][_0x547682(0x187)][_0x547682(0x132)](_0x8c90b)[_0x547682(0xf9)](function(_0x4fea43){const _0x187a0e=_0x547682;_0x4fea43[_0x187a0e(0x15b)](_0x187a0e(0x13c),async function(_0x4b0ded){const _0xcc0041=_0x187a0e;_0x4b0ded[_0xcc0041(0x158)](),_0x4b0ded[_0xcc0041(0x11b)]();let _0x1160be=null,_0x5e5c63=null,_0x522bb4=null;$(_0xcc0041(0x12b))[_0xcc0041(0x13d)](_0xcc0041(0x181))==!![]?(_0x522bb4=!![],_0x1160be=valueMoveCommaRight($(_0xcc0041(0x12c))[_0xcc0041(0x17b)](),DECIMALS_TOKEN),_0x5e5c63=valueMoveCommaRight($(_0xcc0041(0x14f))[_0xcc0041(0x17b)](),DECIMALS_STABLE)):(_0x522bb4=![],_0x1160be=valueMoveCommaRight($(_0xcc0041(0x14f))[_0xcc0041(0x17b)](),DECIMALS_TOKEN),_0x5e5c63=valueMoveCommaRight($(_0xcc0041(0x12c))['val'](),DECIMALS_STABLE));console[_0xcc0041(0x166)]('tokenVal\x20=\x20'+_0x1160be+',\x20stableVal\x20=\x20'+_0x5e5c63);let _0x49a977=![],_0x1d5beb=![];if(_0x1160be['isNaN']()||_0x5e5c63[_0xcc0041(0x162)]()||_0x1160be[_0xcc0041(0x178)](0x0)||_0x5e5c63[_0xcc0041(0x178)](0x0))$(_0xcc0041(0x15d))[_0xcc0041(0xf6)](_0xcc0041(0x168)),_0x49a977=!![];else{if(_0x522bb4&&_0x1160be['isGreaterThan'](balanceToken))$(_0xcc0041(0x15d))[_0xcc0041(0xf6)](_0xcc0041(0x149)+NAME_TOKEN+_0xcc0041(0x16e)),_0x49a977=!![];else!_0x522bb4&&_0x5e5c63[_0xcc0041(0x182)](balanceStable)&&($(_0xcc0041(0x15d))[_0xcc0041(0xf6)](_0xcc0041(0x149)+NAME_STABLE+_0xcc0041(0x16e)),_0x49a977=!![]);}ALLOW_ENABLE_CONTROLS=![],enableControls(![]),_0x49a977==![]&&(!_0x522bb4?_0x5e5c63[_0xcc0041(0x182)](allowanceStable)&&([_0x49a977,_0x1d5beb]=await sendTransaction(_0xcc0041(0x15e)+NAME_STABLE+')</span>',function(){const _0x149977=_0xcc0041;return stable[_0x149977(0x111)](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');})):_0x1160be[_0xcc0041(0x182)](allowanceToken)&&([_0x49a977,_0x1d5beb]=await sendTransaction(_0xcc0041(0x15e)+NAME_TOKEN+')</span>',function(){const _0x3dadf0=_0xcc0041;return token[_0x3dadf0(0x111)](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');}))),_0x49a977==![]&&_0x1d5beb==![]&&(!_0x522bb4?[_0x49a977,_0x1d5beb]=await sendTransaction(_0xcc0041(0x17c)+NAME_STABLE+'&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;'+NAME_TOKEN+')</span>',function(){const _0x3a84f3=_0xcc0041;return liquidityPool[_0x3a84f3(0x114)](_0x1160be['toFixed'](0x0),_0x5e5c63[_0x3a84f3(0x135)](_0x5e5c63[_0x3a84f3(0x11c)](0x64))['toFixed'](0x0));}):[_0x49a977,_0x1d5beb]=await sendTransaction('<span\x20class=\x22fw-bold\x22>Swap\x20('+NAME_TOKEN+_0xcc0041(0x13e)+NAME_STABLE+_0xcc0041(0x139),function(){const _0x55507b=_0xcc0041;return liquidityPool[_0x55507b(0x107)](_0x1160be[_0x55507b(0x183)](0x0),_0x5e5c63[_0x55507b(0xf5)](_0x5e5c63[_0x55507b(0x11c)](0x64))[_0x55507b(0x183)](0x0));})),ALLOW_ENABLE_CONTROLS=!![],enableControls(!![]);},![]);});});