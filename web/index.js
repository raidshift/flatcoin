const a0_0x4ca4c0=a0_0x5ab8;(function(_0x327605,_0x2e7369){const _0x4d115a=a0_0x5ab8,_0xba191d=_0x327605();while(!![]){try{const _0x2b4d00=parseInt(_0x4d115a(0x202))/0x1+-parseInt(_0x4d115a(0x1ed))/0x2*(-parseInt(_0x4d115a(0x1ad))/0x3)+parseInt(_0x4d115a(0x1dd))/0x4*(parseInt(_0x4d115a(0x203))/0x5)+-parseInt(_0x4d115a(0x1f1))/0x6*(parseInt(_0x4d115a(0x22a))/0x7)+parseInt(_0x4d115a(0x1bf))/0x8*(-parseInt(_0x4d115a(0x24a))/0x9)+parseInt(_0x4d115a(0x23f))/0xa*(-parseInt(_0x4d115a(0x1a9))/0xb)+parseInt(_0x4d115a(0x20e))/0xc;if(_0x2b4d00===_0x2e7369)break;else _0xba191d['push'](_0xba191d['shift']());}catch(_0x41ecde){_0xba191d['push'](_0xba191d['shift']());}}}(a0_0xfdf3,0x9324e));function a0_0x5ab8(_0x4b3877,_0x2172bb){const _0xfdf397=a0_0xfdf3();return a0_0x5ab8=function(_0x5ab89d,_0x53f61b){_0x5ab89d=_0x5ab89d-0x1a6;let _0x391199=_0xfdf397[_0x5ab89d];return _0x391199;},a0_0x5ab8(_0x4b3877,_0x2172bb);}let CONTRACT_LP=a0_0x4ca4c0(0x1a8),CONTRACT_TOKEN=a0_0x4ca4c0(0x232),CONTRACT_STABLE=a0_0x4ca4c0(0x21a);TRONSCAN_URL_PREFIX=a0_0x4ca4c0(0x1b3);let ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=!![],IMG_TOKEN_URL='FLAT_128.png',IMG_STABLE_URL=a0_0x4ca4c0(0x211),NAME_TOKEN='FLAT',NAME_STABLE=a0_0x4ca4c0(0x239),DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY=a0_0x4ca4c0(0x1c5),STABLE_BALANCE_OFFSET=a0_0x4ca4c0(0x1b7),LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)[a0_0x4ca4c0(0x24f)](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+a0_0x4ca4c0(0x1cc)+CONTRACT_LP+a0_0x4ca4c0(0x1ca),TRANSACTION_URL=TRONSCAN_URL_PREFIX+a0_0x4ca4c0(0x1ae),TRC20_TOKEN_APPROVE_OWNER='owner',TRC20_TOKEN_APPROVE_SPENDER=a0_0x4ca4c0(0x1db),TRC20_TOKEN_APPROVE_VALUE='value',TRC20_STABLE_APPROVE_OWNER=a0_0x4ca4c0(0x1ac),TRC20_STABLE_APPROVE_SPENDER='spender',TRC20_STABLE_APPROVE_VALUE=a0_0x4ca4c0(0x1b5),token=null,stable=null,liquidityPool=null,balanceFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null;const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0;cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function shortenString(_0x4fb143){const _0x420d84=a0_0x4ca4c0;let _0x2b9ec0=_0x4fb143;return _0x2b9ec0[_0x420d84(0x1fd)](0x0,0x5)+'...'+_0x2b9ec0[_0x420d84(0x1fd)](_0x2b9ec0[_0x420d84(0x1c7)]-0x5,_0x2b9ec0[_0x420d84(0x1c7)]);}function valueMoveCommaLeft(_0x2caf9f,_0x3391e1){const _0x5b2277=a0_0x4ca4c0;return BigNumber(_0x2caf9f)[_0x5b2277(0x1e7)](0xa**_0x3391e1);}function valueMoveCommaRight(_0x16a6c2,_0x5df1c9){return BigNumber(_0x16a6c2)['times'](0xa**_0x5df1c9);}function adjustDecimals(_0x96fbe4){const _0x1f439d=a0_0x4ca4c0;let _0x387297,_0x208a53=BigNumber(_0x96fbe4);if(_0x208a53[_0x1f439d(0x1bb)](0x1))_0x387297=DECIMALS_6;else _0x208a53[_0x1f439d(0x1bb)](0x2710)?_0x387297=DECIMALS_2:_0x387297=DECIMALS_0;return _0x208a53[_0x1f439d(0x213)](_0x387297)[_0x1f439d(0x24c)](cropZerosRegEx,'$1');}function numberWithCommas(_0x3e1a4f){const _0x5bc6c1=a0_0x4ca4c0;var _0x52dd47=_0x3e1a4f[_0x5bc6c1(0x1b6)]()['split']('.');return _0x52dd47[0x0]=_0x52dd47[0x0][_0x5bc6c1(0x24c)](/\B(?=(\d{3})+(?!\d))/g,','),_0x52dd47[_0x5bc6c1(0x1a6)]('.');}async function getContractData(){const _0xa23194=a0_0x4ca4c0;await new Promise(_0x5a1f9a=>setTimeout(_0x5a1f9a,0x64)),balanceToken=String(await token[_0xa23194(0x1c9)](window[_0xa23194(0x238)]['defaultAddress']['base58'])['call']()),await new Promise(_0x34d084=>setTimeout(_0x34d084,0x64)),balanceStable=String(await stable['balanceOf'](window[_0xa23194(0x238)][_0xa23194(0x218)]['base58'])[_0xa23194(0x1fc)]()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token[_0xa23194(0x1a7)](window[_0xa23194(0x238)][_0xa23194(0x218)]['base58'],CONTRACT_LP)['call']())[_0xa23194(0x1df)]):allowanceToken=String(await token[_0xa23194(0x1a7)](window[_0xa23194(0x238)][_0xa23194(0x218)]['base58'],CONTRACT_LP)[_0xa23194(0x1fc)]()),await new Promise(_0x36d6ed=>setTimeout(_0x36d6ed,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable[_0xa23194(0x1a7)](window[_0xa23194(0x238)]['defaultAddress']['base58'],CONTRACT_LP)[_0xa23194(0x1fc)]())['remaining']):allowanceStable=String(await stable['allowance'](window[_0xa23194(0x238)][_0xa23194(0x218)][_0xa23194(0x22e)],CONTRACT_LP)[_0xa23194(0x1fc)]()),await new Promise(_0x30ed75=>setTimeout(_0x30ed75,0x64)),tokenBalanceContract=String(await liquidityPool[_0xa23194(0x246)]()[_0xa23194(0x1fc)]()),await new Promise(_0x1f2bcb=>setTimeout(_0x1f2bcb,0x64)),stableBalanceContract=String(await liquidityPool[_0xa23194(0x1f4)]()[_0xa23194(0x1fc)]()),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET)[_0xa23194(0x1e7)](tokenBalanceContract)[_0xa23194(0x213)](DECIMALS_6)),$(_0xa23194(0x22d))[_0xa23194(0x1ec)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)[_0xa23194(0x24c)](cropZerosRegEx,'$1')),$('.balanceStable')[_0xa23194(0x1ec)](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)[_0xa23194(0x213)](DECIMALS_6)[_0xa23194(0x24c)](cropZerosRegEx,'$1')),$(_0xa23194(0x1e5))[_0xa23194(0x1ec)](numberWithCommas(valueMoveCommaLeft(tokenBalanceContract,DECIMALS_TOKEN)[_0xa23194(0x213)](DECIMALS_6)['replace'](cropZerosRegEx,'$1'))),$('.stableBalanceContract')['text'](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)[_0xa23194(0x213)](DECIMALS_6)[_0xa23194(0x24c)](cropZerosRegEx,'$1'))),$(_0xa23194(0x24d))[_0xa23194(0x1ec)](numberWithCommas(currentMarketPrice)),$(_0xa23194(0x21e))[_0xa23194(0x1ec)](shortenString(window[_0xa23194(0x238)][_0xa23194(0x218)]['base58'])),enableControls(!![]);}async function startContractDataFeed(){const _0x2f7543=a0_0x4ca4c0;try{balanceFeedInterval==null&&(console['log'](_0x2f7543(0x1b9)),await getContractData(),balanceFeedInterval=setInterval(async function(){await getContractData();},0x2710));}catch(_0x2269f1){}}function stopContractDataFeed(){const _0x48347e=a0_0x4ca4c0;console[_0x48347e(0x1ba)](_0x48347e(0x204)),balanceFeedInterval!=null&&(clearInterval(balanceFeedInterval),balanceFeedInterval=null,console[_0x48347e(0x1ba)](_0x48347e(0x248)));}function showConnectionMsg(_0x259cc8){const _0x35d624=a0_0x4ca4c0;$('.connect-msg')['prop'](_0x35d624(0x20c),!_0x259cc8);}function enableControls(_0x290836){}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![];$(document)[a0_0x4ca4c0(0x221)](async function(){const _0x56fd86=a0_0x4ca4c0;showConnectionMsg(!![]),$(_0x56fd86(0x1fe))[_0x56fd86(0x1b0)]('href',CONTRACT_LP_NETWORK_URL),$(_0x56fd86(0x1f9))[_0x56fd86(0x1ec)](NAME_TOKEN),$(_0x56fd86(0x1fb))[_0x56fd86(0x1ec)](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()['finally'](()=>{LOCK=![];});});async function initialize(){const _0x3c4e7c=a0_0x4ca4c0;console[_0x3c4e7c(0x1ba)](_0x3c4e7c(0x1d1));try{await tronLinkReady(),await getTronWeb(),await startContractDataFeed();}catch(_0x4bffc5){console[_0x3c4e7c(0x1ba)](_0x3c4e7c(0x1d6)+_0x4bffc5),showConnectionMsg(!![]),enableControls(![]),stopContractDataFeed();}}async function getTronWeb(){const _0x20839c=a0_0x4ca4c0;try{const _0x455829=await tronLink[_0x20839c(0x228)]({'method':_0x20839c(0x215)});if(_0x455829[_0x20839c(0x230)]!=0xc8)throw _0x455829;token=await tronWeb['contract']()['at'](CONTRACT_TOKEN),stable=await tronWeb[_0x20839c(0x20b)]()['at'](CONTRACT_STABLE),liquidityPool=await tronWeb[_0x20839c(0x20b)]()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0x164ae5){showConnectionMsg(!![]),enableControls(![]);throw _0x164ae5;}}async function tronLinkReady(){await new Promise(_0x227dd8=>{const _0x1bd763=setInterval(()=>{const _0x9af9cc=a0_0x5ab8;if(window[_0x9af9cc(0x238)]&&window['tronWeb']['defaultAddress'][_0x9af9cc(0x22e)])return clearInterval(_0x1bd763),_0x227dd8();},0x64);});}setInterval(function(){const _0x4c3bbb=a0_0x4ca4c0,_0x25ba74=tronWeb[_0x4c3bbb(0x218)]['base58'];if(!PREV_ACCOUNT&&_0x25ba74)PREV_ACCOUNT=_0x25ba74;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0x25ba74&&window['location'][_0x4c3bbb(0x1c4)]();},0x3e8),window[a0_0x4ca4c0(0x225)](a0_0x4ca4c0(0x20d),async function(_0x335ae9){const _0xe2276b=a0_0x4ca4c0;_0x335ae9['data'][_0xe2276b(0x20d)]&&_0x335ae9[_0xe2276b(0x1ee)][_0xe2276b(0x20d)][_0xe2276b(0x20f)]==_0xe2276b(0x1aa)&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x335ae9['data'][_0xe2276b(0x20d)][_0xe2276b(0x1ee)]['address'],(addr==undefined||addr==null||!addr)&&window[_0xe2276b(0x1e1)][_0xe2276b(0x1c4)](),!INITIALIZED?await initialize():await getTronWeb()[_0xe2276b(0x207)](()=>{})['catch'](_0x12cc9a=>{const _0x37be0d=_0xe2276b;this[_0x37be0d(0x1e9)][_0x37be0d(0x1e1)][_0x37be0d(0x1c4)]();}),LOCK=![]));});function displayPrice(_0x1e54fc,_0x10625a){const _0x2f1958=a0_0x4ca4c0;_0x1e54fc[_0x2f1958(0x205)](0x0)&&_0x10625a[_0x2f1958(0x205)](0x0)&&$('.price')[_0x2f1958(0x1ec)](_0x10625a[_0x2f1958(0x1e7)](_0x1e54fc)['toFixed'](DECIMALS_6));}function setInputFilter(_0x27f26b,_0x4aff06){const _0x4eba0c=a0_0x4ca4c0;['input','keydown',_0x4eba0c(0x23a),_0x4eba0c(0x237),_0x4eba0c(0x1ff),_0x4eba0c(0x1e0),_0x4eba0c(0x1ce),_0x4eba0c(0x249),_0x4eba0c(0x1c2),_0x4eba0c(0x1c6)][_0x4eba0c(0x23e)](function(_0x161562){const _0x6107ca=_0x4eba0c;_0x27f26b[_0x6107ca(0x225)](_0x161562,function(){const _0x19b5ea=_0x6107ca;if(_0x4aff06(this[_0x19b5ea(0x1b5)]))this[_0x19b5ea(0x1eb)]=this['value'],this[_0x19b5ea(0x21f)]=this[_0x19b5ea(0x24e)],this[_0x19b5ea(0x216)]=this[_0x19b5ea(0x245)];else this['hasOwnProperty'](_0x19b5ea(0x1eb))?(this[_0x19b5ea(0x1b5)]=this['oldValue'],this[_0x19b5ea(0x234)](this['oldSelectionStart'],this['oldSelectionEnd'])):this[_0x19b5ea(0x1b5)]='';if(_0x27f26b['id']==_0x19b5ea(0x23d)){console[_0x19b5ea(0x1ba)](_0x161562);if($(_0x19b5ea(0x209))[_0x19b5ea(0x1b0)](_0x19b5ea(0x20c))==!![]){const _0x414bc2=$(_0x19b5ea(0x241))[_0x19b5ea(0x1f5)]();if(!(_0x414bc2==''||_0x414bc2<=0x0||this[_0x19b5ea(0x1b5)]==''||this[_0x19b5ea(0x1b5)]<=0x0)){console[_0x19b5ea(0x1ba)](_0x19b5ea(0x1e6));let _0x4666c0=BigNumber(valueMoveCommaRight($(_0x19b5ea(0x241))[_0x19b5ea(0x1f5)](),DECIMALS_TOKEN)),_0x5be463=BigNumber(tokenBalanceContract),_0xeb2153=BigNumber(stableBalanceContract)[_0x19b5ea(0x1c0)](STABLE_BALANCE_OFFSET),_0x2abbe1=_0x5be463[_0x19b5ea(0x1c0)](_0x4666c0),_0x4538cf=LP_INVARIANT['div'](_0x2abbe1)[_0x19b5ea(0x1c1)](BigNumber['ROUND_FLOOR']),_0x5ceb78=_0xeb2153['minus'](_0x4538cf);_0x2abbe1[_0x19b5ea(0x205)](TOKEN_MAX_SUPPLY)&&(_0x5ceb78=BigNumber(0x0));console[_0x19b5ea(0x1ba)]('DP:\x20tb\x20=\x20'+_0x5be463+_0x19b5ea(0x1e4)+_0xeb2153+_0x19b5ea(0x206)+_0x2abbe1+'\x20|\x20sb_new\x20=\x20'+_0x4538cf+'\x20|\x20tv\x20=\x20'+_0x4666c0+_0x19b5ea(0x219)+_0x5ceb78),$('#swap_to_input')[_0x19b5ea(0x1f5)](valueMoveCommaLeft(_0x5ceb78,DECIMALS_STABLE)[_0x19b5ea(0x213)](DECIMALS_6));if(_0x161562==_0x19b5ea(0x1c2)){let _0x605e4e=_0xeb2153[_0x19b5ea(0x236)](_0x5ceb78),_0x38f1d6=LP_INVARIANT[_0x19b5ea(0x1e7)](_0x605e4e)[_0x19b5ea(0x1c1)](BigNumber[_0x19b5ea(0x1cb)]),_0x1602b6=_0x38f1d6[_0x19b5ea(0x236)](_0x5be463);$('#swap_from_input')['val'](valueMoveCommaLeft(_0x1602b6,DECIMALS_TOKEN)[_0x19b5ea(0x213)](DECIMALS_6));}displayPrice(_0x4666c0,_0x5ceb78);}}else{const _0x356755=$(_0x19b5ea(0x241))[_0x19b5ea(0x1f5)]();console[_0x19b5ea(0x1ba)](_0x19b5ea(0x1c3)+_0x356755);if(!(_0x356755==''||_0x356755<=0x0||this[_0x19b5ea(0x1b5)]==''||this[_0x19b5ea(0x1b5)]<=0x0)){console[_0x19b5ea(0x1ba)]('FROM\x20INPUT:\x20FROM\x20STABLE\x20TO\x20TOKEN');let _0x5e0279=BigNumber(valueMoveCommaRight($('#swap_from_input')[_0x19b5ea(0x1f5)](),DECIMALS_STABLE)),_0x5e5f61=BigNumber(tokenBalanceContract),_0xd2e3cc=BigNumber(stableBalanceContract)[_0x19b5ea(0x1c0)](STABLE_BALANCE_OFFSET),_0x3057f8=_0xd2e3cc[_0x19b5ea(0x1c0)](_0x5e0279),_0x24ef02=LP_INVARIANT[_0x19b5ea(0x1e7)](_0x3057f8)['integerValue'](BigNumber['ROUND_FLOOR']),_0x3910c0=_0x5e5f61[_0x19b5ea(0x236)](_0x24ef02);console['log'](_0x19b5ea(0x212)+_0x5e5f61+_0x19b5ea(0x1e4)+_0xd2e3cc+_0x19b5ea(0x206)+_0x24ef02+_0x19b5ea(0x23b)+_0x3057f8+_0x19b5ea(0x1ef)+_0x3910c0+_0x19b5ea(0x219)+_0x5e0279),$(_0x19b5ea(0x242))[_0x19b5ea(0x1f5)](valueMoveCommaLeft(_0x3910c0,DECIMALS_TOKEN)[_0x19b5ea(0x213)](DECIMALS_6));if(_0x161562==_0x19b5ea(0x1c2)){let _0x29d038=_0x5e5f61['minus'](_0x3910c0),_0x5411cb=LP_INVARIANT[_0x19b5ea(0x1e7)](_0x29d038)[_0x19b5ea(0x1c1)](BigNumber[_0x19b5ea(0x1cb)]),_0x2a3e57=_0x5411cb[_0x19b5ea(0x236)](_0xd2e3cc);$(_0x19b5ea(0x241))[_0x19b5ea(0x1f5)](valueMoveCommaLeft(_0x2a3e57,DECIMALS_STABLE)[_0x19b5ea(0x213)](DECIMALS_6));}displayPrice(_0x3910c0,_0x5e0279);}}}if(_0x27f26b['id']==_0x19b5ea(0x208)){if($(_0x19b5ea(0x209))[_0x19b5ea(0x1b0)](_0x19b5ea(0x20c))==!![]){const _0x2a62a6=$(_0x19b5ea(0x242))[_0x19b5ea(0x1f5)]();if(!(_0x2a62a6==''||_0x2a62a6<=0x0||this[_0x19b5ea(0x1b5)]==''||this[_0x19b5ea(0x1b5)]<=0x0)){console[_0x19b5ea(0x1ba)](_0x19b5ea(0x243));let _0x59ea53=BigNumber(valueMoveCommaRight($(_0x19b5ea(0x242))[_0x19b5ea(0x1f5)](),DECIMALS_STABLE)),_0x396200=BigNumber(tokenBalanceContract),_0x34685e=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x8dddd5=_0x34685e[_0x19b5ea(0x236)](_0x59ea53),_0x24f222=LP_INVARIANT[_0x19b5ea(0x1e7)](_0x8dddd5)[_0x19b5ea(0x1c1)](BigNumber[_0x19b5ea(0x1cb)]),_0x18b29b=_0x24f222[_0x19b5ea(0x236)](_0x396200);(_0x24f222[_0x19b5ea(0x205)](TOKEN_MAX_SUPPLY)||_0x8dddd5<0x0)&&(_0x18b29b=BigNumber(0x0));console[_0x19b5ea(0x1ba)]('DP:\x20tb\x20=\x20'+_0x396200+_0x19b5ea(0x1e4)+_0x34685e+_0x19b5ea(0x206)+_0x24f222+_0x19b5ea(0x23b)+_0x8dddd5+_0x19b5ea(0x1ef)+_0x18b29b+'\x20|\x20sv\x20=\x20'+_0x59ea53),$(_0x19b5ea(0x241))[_0x19b5ea(0x1f5)](valueMoveCommaLeft(_0x18b29b,DECIMALS_TOKEN)[_0x19b5ea(0x213)](DECIMALS_6));if(_0x161562==_0x19b5ea(0x1c2)){let _0x21f8ad=_0x396200[_0x19b5ea(0x1c0)](_0x18b29b),_0x2f7596=LP_INVARIANT['div'](_0x21f8ad)['integerValue'](BigNumber[_0x19b5ea(0x1cb)]),_0x2a54f0=_0x34685e[_0x19b5ea(0x236)](_0x2f7596);$(_0x19b5ea(0x242))[_0x19b5ea(0x1f5)](valueMoveCommaLeft(_0x2a54f0,DECIMALS_STABLE)[_0x19b5ea(0x213)](DECIMALS_6));}displayPrice(_0x18b29b,_0x59ea53);}}else{const _0x4bb00d=$(_0x19b5ea(0x242))[_0x19b5ea(0x1f5)]();if(!(_0x4bb00d==''||_0x4bb00d<=0x0||this[_0x19b5ea(0x1b5)]==''||this[_0x19b5ea(0x1b5)]<=0x0)){console[_0x19b5ea(0x1ba)](_0x19b5ea(0x226));let _0x33aa10=BigNumber(valueMoveCommaRight($(_0x19b5ea(0x242))['val'](),DECIMALS_TOKEN)),_0x21eb06=BigNumber(tokenBalanceContract),_0x5e0b8e=BigNumber(stableBalanceContract)[_0x19b5ea(0x1c0)](STABLE_BALANCE_OFFSET),_0x279029=_0x21eb06['minus'](_0x33aa10),_0x4d4f0e=LP_INVARIANT[_0x19b5ea(0x1e7)](_0x279029)['integerValue'](BigNumber['ROUND_FLOOR']),_0x1e7077=_0x4d4f0e[_0x19b5ea(0x236)](_0x5e0b8e);_0x1e7077[_0x19b5ea(0x1bb)](0x0)&&(_0x1e7077=BigNumber(0x0));console['log']('WD:\x20tb\x20=\x20'+_0x21eb06+_0x19b5ea(0x1e4)+_0x5e0b8e+'\x20|\x20tb_new\x20=\x20'+_0x279029+_0x19b5ea(0x23b)+_0x4d4f0e+_0x19b5ea(0x1ef)+_0x33aa10+_0x19b5ea(0x219)+_0x1e7077),$('#swap_from_input')[_0x19b5ea(0x1f5)](valueMoveCommaLeft(_0x1e7077,DECIMALS_STABLE)[_0x19b5ea(0x213)](DECIMALS_6));if(_0x161562=='blur'){let _0x45b4c4=_0x5e0b8e[_0x19b5ea(0x1c0)](_0x1e7077),_0x4987ec=LP_INVARIANT[_0x19b5ea(0x1e7)](_0x45b4c4)[_0x19b5ea(0x1c1)](BigNumber['ROUND_FLOOR']),_0x3ea4e0=_0x21eb06[_0x19b5ea(0x236)](_0x4987ec);$(_0x19b5ea(0x242))[_0x19b5ea(0x1f5)](valueMoveCommaLeft(_0x3ea4e0,DECIMALS_TOKEN)[_0x19b5ea(0x213)](DECIMALS_6));}displayPrice(_0x33aa10,_0x1e7077);}}}});});}setInputFilter(document[a0_0x4ca4c0(0x1d2)](a0_0x4ca4c0(0x23d)),function(_0x467f75){return/^-?\d*[.]?\d{0,6}$/['test'](_0x467f75);}),setInputFilter(document[a0_0x4ca4c0(0x1d2)]('swap_to_input'),function(_0x1fc14d){return/^-?\d*[.]?\d{0,6}$/['test'](_0x1fc14d);}),$(function(){const _0x28ff4d=a0_0x4ca4c0;$('#switch_btn')[_0x28ff4d(0x231)](function(_0x2de1ed){const _0x35ee37=_0x28ff4d;_0x2de1ed[_0x35ee37(0x1c8)]();if($(_0x35ee37(0x209))[_0x35ee37(0x1b0)](_0x35ee37(0x20c))==!![]){$(_0x35ee37(0x209))[_0x35ee37(0x1b0)](_0x35ee37(0x20c),![]),$(_0x35ee37(0x1bd))[_0x35ee37(0x1b0)]('hidden',!![]),$('#swap_to_stable')[_0x35ee37(0x1b0)](_0x35ee37(0x20c),!![]),$(_0x35ee37(0x1e3))[_0x35ee37(0x1b0)](_0x35ee37(0x20c),![]),$(_0x35ee37(0x1b8))[_0x35ee37(0x1b0)]('src',IMG_STABLE_URL),$(_0x35ee37(0x1f7))[_0x35ee37(0x1b0)]('src',IMG_TOKEN_URL);let _0x4d4c76=$(_0x35ee37(0x241))[_0x35ee37(0x1f5)](),_0x3a30ef=$(_0x35ee37(0x242))[_0x35ee37(0x1f5)]();$(_0x35ee37(0x241))[_0x35ee37(0x1f5)](_0x3a30ef),$(_0x35ee37(0x242))[_0x35ee37(0x1f5)](_0x4d4c76),document[_0x35ee37(0x1d2)](_0x35ee37(0x23d))['focus']();}else{$(_0x35ee37(0x209))[_0x35ee37(0x1b0)]('hidden',!![]),$(_0x35ee37(0x1bd))[_0x35ee37(0x1b0)](_0x35ee37(0x20c),![]),$(_0x35ee37(0x223))[_0x35ee37(0x1b0)](_0x35ee37(0x20c),![]),$(_0x35ee37(0x1e3))[_0x35ee37(0x1b0)](_0x35ee37(0x20c),!![]),$('#swap_from_img')['prop'](_0x35ee37(0x229),IMG_TOKEN_URL),$(_0x35ee37(0x1f7))[_0x35ee37(0x1b0)](_0x35ee37(0x229),IMG_STABLE_URL);let _0x233108=$(_0x35ee37(0x241))[_0x35ee37(0x1f5)](),_0x184b06=$(_0x35ee37(0x242))[_0x35ee37(0x1f5)]();$(_0x35ee37(0x241))['val'](_0x184b06),$(_0x35ee37(0x242))['val'](_0x233108),document['getElementById'](_0x35ee37(0x23d))[_0x35ee37(0x1c6)]();}}),$(_0x28ff4d(0x1d4))[_0x28ff4d(0x231)](function(_0x134b87){const _0x504368=_0x28ff4d;_0x134b87[_0x504368(0x1c8)](),($(_0x504368(0x241))[_0x504368(0x1b0)](_0x504368(0x1be))!=!![]||$('#swap_to_input')[_0x504368(0x1b0)](_0x504368(0x1be))!=!![])&&($('#swap_from_stable')[_0x504368(0x1b0)](_0x504368(0x20c))==!![]?($(_0x504368(0x241))[_0x504368(0x1f5)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x504368(0x213)](DECIMALS_6)),document[_0x504368(0x1d2)]('swap_from_input')[_0x504368(0x1c6)]()):($(_0x504368(0x242))[_0x504368(0x1f5)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document[_0x504368(0x1d2)](_0x504368(0x208))[_0x504368(0x1c6)]()));}),$('#swap_input_balance_stable')['click'](function(_0x11a8a6){const _0x35518d=_0x28ff4d;_0x11a8a6[_0x35518d(0x1c8)](),($(_0x35518d(0x241))['prop']('disabled')!=!![]||$(_0x35518d(0x242))[_0x35518d(0x1b0)](_0x35518d(0x1be))!=!![])&&($('#swap_from_stable')[_0x35518d(0x1b0)](_0x35518d(0x20c))==!![]?($(_0x35518d(0x242))[_0x35518d(0x1f5)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0x35518d(0x213)](DECIMALS_6)),document[_0x35518d(0x1d2)](_0x35518d(0x208))[_0x35518d(0x1c6)]()):($('#swap_from_input')[_0x35518d(0x1f5)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document['getElementById'](_0x35518d(0x23d))[_0x35518d(0x1c6)]()));});});async function sendTransaction(_0x39c570,_0x3bb8b4,_0x1b2e56,_0xe0ed2e){const _0xbd66f6=a0_0x4ca4c0;console['log'](_0xbd66f6(0x1cd)+_0x39c570+_0xbd66f6(0x1f6));let _0x2c93f5=![];$(_0xbd66f6(0x1f3))[_0xbd66f6(0x22b)](_0xbd66f6(0x1f0));try{let _0xc35944=await _0x3bb8b4()[_0xbd66f6(0x1d9)]();console[_0xbd66f6(0x1ba)](_0xbd66f6(0x1cd)+_0x39c570+_0xbd66f6(0x21b));if(_0x1b2e56){$(_0xbd66f6(0x1f3))[_0xbd66f6(0x22b)]('<div\x20class=\x22spinner-border\x20spinner-border-sm\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting...</span></div>\x20<span\x20class=\x22text-warning\x22>Waiting\x20for\x20'+_0x39c570+_0xbd66f6(0x244)+TRANSACTION_URL+_0xc35944+_0xbd66f6(0x22f)+shortenString(_0xc35944)+_0xbd66f6(0x240));let _0x193e19,_0x483a2b=![];try{_0x193e19=await _0x1b2e56()[_0xbd66f6(0x210)]({'filters':_0xe0ed2e},(_0x412208,_0x1569e4)=>{const _0x275143=_0xbd66f6;_0x1569e4&&($(_0x275143(0x1f3))[_0x275143(0x22b)](_0x275143(0x1e2)+_0x39c570+_0x275143(0x244)+TRANSACTION_URL+_0xc35944+_0x275143(0x22f)+shortenString(_0xc35944)+_0x275143(0x224)),_0x193e19[_0x275143(0x20a)](),_0x483a2b=!![],console[_0x275143(0x1ba)]('sendTransaction\x20('+_0x39c570+_0x275143(0x1ea))),_0x412208&&console[_0x275143(0x1ba)](_0x412208);});}catch(_0x19c06f){$(_0xbd66f6(0x1f3))[_0xbd66f6(0x22b)]('<span\x20class=\x22text-danger\x22>'+_0x39c570+_0xbd66f6(0x244)+TRANSACTION_URL+_0xc35944+_0xbd66f6(0x1dc)+shortenString(_0xc35944)+_0xbd66f6(0x22c)),_0x193e19[_0xbd66f6(0x20a)](),_0x483a2b=!![],_0x2c93f5=!![];}setTimeout(function(){const _0x22b156=_0xbd66f6;!_0x483a2b&&($(_0x22b156(0x1f3))['html'](_0x22b156(0x1d5)+_0x39c570+_0x22b156(0x244)+TRANSACTION_URL+_0xc35944+_0x22b156(0x1dc)+shortenString(_0xc35944)+_0x22b156(0x23c)),_0x193e19&&_0x193e19[_0x22b156(0x20a)](),_0x483a2b=!![],_0x2c93f5=!![]);},0x4e20),await new Promise(_0x1a76d8=>{const _0x4e5ac6=setInterval(()=>{_0x483a2b&&(_0x1a76d8(),clearInterval(_0x4e5ac6));;},0x3e8);});}else $(_0xbd66f6(0x1f3))[_0xbd66f6(0x22b)]('<span\x20class=\x22text-warning\x22>'+_0x39c570+_0xbd66f6(0x244)+TRANSACTION_URL+_0xc35944+'\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>'+shortenString(_0xc35944)+_0xbd66f6(0x1f8));}catch(_0x2951cc){let _0x3faef5;return _0x2951cc[_0xbd66f6(0x20d)]?(_0x3faef5=_0x2951cc[_0xbd66f6(0x20d)],_0x3faef5==_0xbd66f6(0x214)&&(_0x3faef5=_0xbd66f6(0x1de))):_0x3faef5=_0x2951cc,$(_0xbd66f6(0x1f3))[_0xbd66f6(0x22b)](_0xbd66f6(0x1d5)+_0x3faef5+_0xbd66f6(0x1d0)),[!![],!![]];}return[![],_0x2c93f5];}$(function(){'use strict';const _0x8c707f=a0_0x4ca4c0;var _0x748672=document[_0x8c707f(0x1b1)](_0x8c707f(0x1fa));Array[_0x8c707f(0x200)][_0x8c707f(0x217)]['call'](_0x748672)[_0x8c707f(0x23e)](function(_0x409519){const _0x5bfbc3=_0x8c707f;_0x409519[_0x5bfbc3(0x225)](_0x5bfbc3(0x1da),async function(_0xe56031){const _0x178ddd=_0x5bfbc3;_0xe56031[_0x178ddd(0x1c8)](),_0xe56031[_0x178ddd(0x222)]();let _0x1f22cc=null,_0x2e13f5=null,_0x45ad10=null;$(_0x178ddd(0x209))[_0x178ddd(0x1b0)](_0x178ddd(0x20c))==!![]?(_0x45ad10=!![],_0x1f22cc=valueMoveCommaRight($(_0x178ddd(0x241))[_0x178ddd(0x1f5)](),DECIMALS_TOKEN),_0x2e13f5=valueMoveCommaRight($(_0x178ddd(0x242))[_0x178ddd(0x1f5)](),DECIMALS_STABLE)):(_0x45ad10=![],_0x1f22cc=valueMoveCommaRight($(_0x178ddd(0x242))['val'](),DECIMALS_TOKEN),_0x2e13f5=valueMoveCommaRight($(_0x178ddd(0x241))[_0x178ddd(0x1f5)](),DECIMALS_STABLE));console[_0x178ddd(0x1ba)]('tokenVal\x20=\x20'+_0x1f22cc+_0x178ddd(0x227)+_0x2e13f5);let _0x25aa34=![],_0x43822f=![];if(_0x1f22cc[_0x178ddd(0x24b)]()||_0x2e13f5[_0x178ddd(0x24b)]()||_0x1f22cc['isLessThanOrEqualTo'](0x0)||_0x2e13f5[_0x178ddd(0x1ab)](0x0))$(_0x178ddd(0x1f3))[_0x178ddd(0x22b)](_0x178ddd(0x247)),_0x25aa34=!![];else{if(_0x45ad10&&_0x1f22cc[_0x178ddd(0x205)](balanceToken))$(_0x178ddd(0x1f3))[_0x178ddd(0x22b)](_0x178ddd(0x220)+NAME_TOKEN+'\x20balance\x20is\x20too\x20low</span>'),_0x25aa34=!![];else!_0x45ad10&&_0x2e13f5[_0x178ddd(0x205)](balanceStable)&&($(_0x178ddd(0x1f3))[_0x178ddd(0x22b)]('<span\x20class=\x22text-danger\x22>Your\x20'+NAME_STABLE+_0x178ddd(0x1bc)),_0x25aa34=!![]);}enableControls(![]),_0x25aa34==![]&&(!_0x45ad10?_0x2e13f5['isGreaterThan'](allowanceStable)&&([_0x25aa34,_0x43822f]=await sendTransaction(_0x178ddd(0x1d7)+NAME_STABLE+')</span>',function(){const _0x5583c2=_0x178ddd;return stable[_0x5583c2(0x1f2)](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');},function(){const _0x2cc84f=_0x178ddd;return stable[_0x2cc84f(0x1d8)]();},{'TRC20_STABLE_APPROVE_OWNER':window['tronWeb']['defaultAddress'][_0x178ddd(0x22e)],'TRC20_STABLE_APPROVE_SPENDER':CONTRACT_LP,'TRC20_STABLE_APPROVE_VALUE':_0x178ddd(0x1e8)})):_0x1f22cc[_0x178ddd(0x205)](allowanceToken)&&([_0x25aa34,_0x43822f]=await sendTransaction(_0x178ddd(0x1d7)+NAME_TOKEN+')</span>',function(){return token['approve'](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');},function(){const _0x40512b=_0x178ddd;return token[_0x40512b(0x1d8)]();},{'TRC20_TOKEN_APPROVE_OWNER':window[_0x178ddd(0x238)][_0x178ddd(0x218)][_0x178ddd(0x22e)],'TRC20_TOKEN_APPROVE_SPENDER':CONTRACT_LP,'TRC20_TOKEN_APPROVE_VALUE':_0x178ddd(0x1e8)}))),_0x25aa34==![]&&_0x43822f==![]&&(!_0x45ad10?[_0x25aa34,_0x43822f]=await sendTransaction(_0x178ddd(0x233)+NAME_STABLE+_0x178ddd(0x201)+NAME_TOKEN+_0x178ddd(0x21d),function(){const _0x1b448d=_0x178ddd;return liquidityPool[_0x1b448d(0x1cf)](_0x1f22cc[_0x1b448d(0x213)](0x0),_0x2e13f5[_0x1b448d(0x1c0)](_0x2e13f5[_0x1b448d(0x1e7)](0x64))[_0x1b448d(0x213)](0x0));}):[_0x25aa34,_0x43822f]=await sendTransaction('<span\x20class=\x22fw-bold\x22>Swap\x20('+NAME_TOKEN+_0x178ddd(0x201)+NAME_STABLE+_0x178ddd(0x21d),function(){const _0x824692=_0x178ddd;return liquidityPool['deposit'](_0x1f22cc['toFixed'](0x0),_0x2e13f5['minus'](_0x2e13f5[_0x824692(0x1e7)](0x64))[_0x824692(0x213)](0x0));})),enableControls(!![]);},![]);});});function a0_0xfdf3(){const _0xee6553=['/#/contract/','sendTransaction\x20(','contextmenu','withdraw','</span>','INITIALIZING','getElementById','.launch_text','#swap_input_balance_token','<span\x20class=\x22text-danger\x22>','INITIALIZING\x20FAILED:','<span\x20class=\x22fw-bold\x22>Approval\x20(','Approval','send','submit','spender','\x22\x20target=\x22_blank\x22\x20class=\x22text-danger\x22>','147772vbyUBm','Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds','remaining','select','location','<span\x20class=\x22text-warning\x22>','#swap_to_token','\x20|\x20sb\x20=\x20','.tokenBalanceContract','FROM\x20INPUT:\x20FROM\x20TOKEN\x20TO\x20STABLE','div','340282366920938463463374607431768211455','window','):\x20CONFIRMED','oldValue','text','154556kfZBLi','data','\x20|\x20tv\x20=\x20','<div\x20class=\x22spinner-border\x20spinner-border-sm\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting...</span></div>\x20<span\x20class=\x22text-warning\x22>Waiting\x20for\x20signature...</span>','4965870RSkFoH','approve','.validationMsg','stableBalance','val','):\x20START','#swap_to_img','</a>\x20submitted</span>','.tokenName','.swap_form','.stableName','call','substr','.contractLPCodeURL','mouseup','prototype','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','1064115otXmHG','140wzVSPT','STOPPING\x20CONTRACT\x20DATA\x20FEED\x20','isGreaterThan','\x20|\x20tb_new\x20=\x20','then','swap_to_input','#swap_from_stable','stop','contract','hidden','message','8726652JOwhtm','action','watch','USDT_128.png','WD:\x20tb\x20=\x20','toFixed','AccountResourceInsufficient\x20error','tron_requestAccounts','oldSelectionEnd','slice','defaultAddress','\x20|\x20sv\x20=\x20','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','):\x20WAITING\x20FOR\x20CONFIRMATION','Launch\x20in\x20',')</span>','.account','oldSelectionStart','<span\x20class=\x22text-danger\x22>Your\x20','ready','stopPropagation','#swap_to_stable','</a>\x20confirmed</span>','addEventListener','TO\x20INPUT:\x20FROM\x20STABLE\x20TO\x20TOKEN',',\x20stableVal\x20=\x20','request','src','7KwOxuy','html','</a>\x20confirmation\x20failed</span>','.balanceToken','base58','\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>','code','click','TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ','<span\x20class=\x22fw-bold\x22>Swap\x20(','setSelectionRange','floor','minus','mousedown','tronWeb','USDT','keyup','\x20|\x20sb_new\x20=\x20','</a>\x20confirmation\x20timeout.\x20Please\x20manually\x20check\x20confirmation\x20status</span>','swap_from_input','forEach','130bSiUoI','</a>\x20to\x20be\x20confirmed...</span>','#swap_from_input','#swap_to_input','TO\x20INPUT:\x20FROM\x20TOKEN\x20TO\x20STABLE','\x20transaction\x20<a\x20href=\x22','selectionEnd','tokenBalance','<span\x20class=\x22text-danger\x22>Please\x20enter\x20valid\x20values</span>','balanceFeedInterval\x20cleared','drop','36IqDAHE','isNaN','replace','.currentMarketPrice','selectionStart','times','join','allowance','TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs','820501bayjAY','setAccount','isLessThanOrEqualTo','owner','27bjFQpO','/#/transaction/','.launch_count_down','prop','querySelectorAll','getTime','https://tronscan.io','Nov\x208,\x202021\x2020:00:0','value','toString','1000000000','#swap_from_img','STARTING\x20CONTRACT\x20DATA\x20FEED\x20','log','isLessThan','\x20balance\x20is\x20too\x20low</span>','#swap_from_token','disabled','2242424twKMzb','plus','integerValue','blur','swapFromStableVal\x20','reload','1000000000000','focus','length','preventDefault','balanceOf','/code','ROUND_FLOOR'];a0_0xfdf3=function(){return _0xee6553;};return a0_0xfdf3();}var countDownDate=new Date(a0_0x4ca4c0(0x1b4))[a0_0x4ca4c0(0x1b2)](),x=setInterval(function(){const _0x2e64e8=a0_0x4ca4c0;var _0xc95153=new Date()[_0x2e64e8(0x1b2)](),_0x457c5e=countDownDate-_0xc95153,_0x2a8ac3=Math[_0x2e64e8(0x235)](_0x457c5e/(0x3e8*0x3c*0x3c*0x18)),_0x2fcc32=Math[_0x2e64e8(0x235)](_0x457c5e%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0x40e0d6=Math[_0x2e64e8(0x235)](_0x457c5e%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x797e24=Math[_0x2e64e8(0x235)](_0x457c5e%(0x3e8*0x3c)/0x3e8);_0x457c5e<0x0?(clearInterval(x),$(_0x2e64e8(0x1af))[_0x2e64e8(0x1b0)](_0x2e64e8(0x20c),!![])):($(_0x2e64e8(0x1af))['prop'](_0x2e64e8(0x20c),![]),$(_0x2e64e8(0x1d3))[_0x2e64e8(0x1ec)](_0x2e64e8(0x21c)+_0x2a8ac3+'d\x20'+_0x2fcc32+'h\x20'+_0x40e0d6+'m\x20'+_0x797e24+'s'));},0x3e8);