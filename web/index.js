const a0_0x360f72=a0_0x37d9;(function(_0x17f810,_0x40f401){const _0x14f5d7=a0_0x37d9,_0x3e5993=_0x17f810();while(!![]){try{const _0x3e33c9=parseInt(_0x14f5d7(0x232))/0x1+parseInt(_0x14f5d7(0x23f))/0x2*(parseInt(_0x14f5d7(0x203))/0x3)+-parseInt(_0x14f5d7(0x23d))/0x4*(-parseInt(_0x14f5d7(0x1db))/0x5)+-parseInt(_0x14f5d7(0x24b))/0x6+parseInt(_0x14f5d7(0x236))/0x7*(-parseInt(_0x14f5d7(0x244))/0x8)+parseInt(_0x14f5d7(0x1ff))/0x9*(parseInt(_0x14f5d7(0x25d))/0xa)+parseInt(_0x14f5d7(0x218))/0xb*(parseInt(_0x14f5d7(0x1f3))/0xc);if(_0x3e33c9===_0x40f401)break;else _0x3e5993['push'](_0x3e5993['shift']());}catch(_0x4ee8f7){_0x3e5993['push'](_0x3e5993['shift']());}}}(a0_0x58e4,0xbd582));let CONTRACT_LP=a0_0x360f72(0x239),CONTRACT_LP_HEX=a0_0x360f72(0x1d1),CONTRACT_TOKEN=a0_0x360f72(0x252),CONTRACT_STABLE=a0_0x360f72(0x20c),TRONSCAN_URL_PREFIX=a0_0x360f72(0x212),TRONGRID_URL_PREFIX=a0_0x360f72(0x1e2),ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=!![],IMG_TOKEN_URL=a0_0x360f72(0x20f),IMG_STABLE_URL=a0_0x360f72(0x1f2),NAME_TOKEN=a0_0x360f72(0x1d0),NAME_STABLE=a0_0x360f72(0x1e6),DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY=a0_0x360f72(0x1fe),STABLE_BALANCE_OFFSET=a0_0x360f72(0x1f7),LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)[a0_0x360f72(0x230)](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+a0_0x360f72(0x211)+CONTRACT_LP+a0_0x360f72(0x20b),TRANSACTION_URL=TRONSCAN_URL_PREFIX+a0_0x360f72(0x22a),TRC20_TOKEN_APPROVE_OWNER=a0_0x360f72(0x1d6),TRC20_TOKEN_APPROVE_SPENDER=a0_0x360f72(0x1ce),TRC20_TOKEN_APPROVE_VALUE=a0_0x360f72(0x242),TRC20_STABLE_APPROVE_OWNER=a0_0x360f72(0x1d6),TRC20_STABLE_APPROVE_SPENDER=a0_0x360f72(0x1ce),TRC20_STABLE_APPROVE_VALUE='value',token=null,stable=null,liquidityPool=null,tronWebFeedInterval=null,tronGridFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null;const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0;cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function shortenString(_0x2eaa32){const _0x629efe=a0_0x360f72;let _0x1784e5=_0x2eaa32;return _0x1784e5[_0x629efe(0x1cf)](0x0,0x5)+'...'+_0x1784e5[_0x629efe(0x1cf)](_0x1784e5[_0x629efe(0x200)]-0x5,_0x1784e5[_0x629efe(0x200)]);}function valueMoveCommaLeft(_0x2730ac,_0x315a4e){const _0x34fa94=a0_0x360f72;return BigNumber(_0x2730ac)[_0x34fa94(0x1f5)](0xa**_0x315a4e);}function valueMoveCommaRight(_0x17cae3,_0x5d18b5){const _0x3d6b8a=a0_0x360f72;return BigNumber(_0x17cae3)[_0x3d6b8a(0x230)](0xa**_0x5d18b5);}function adjustDecimals(_0x1a13cc){const _0xa304da=a0_0x360f72;let _0x43e7ce,_0xcbc093=BigNumber(_0x1a13cc);if(_0xcbc093[_0xa304da(0x22d)](0x1))_0x43e7ce=DECIMALS_6;else _0xcbc093[_0xa304da(0x22d)](0x2710)?_0x43e7ce=DECIMALS_2:_0x43e7ce=DECIMALS_0;return _0xcbc093[_0xa304da(0x237)](_0x43e7ce)[_0xa304da(0x1df)](cropZerosRegEx,'$1');}function numberWithCommas(_0xf8186c){const _0x49e810=a0_0x360f72;var _0x12c95a=_0xf8186c[_0x49e810(0x204)]()[_0x49e810(0x1da)]('.');return _0x12c95a[0x0]=_0x12c95a[0x0][_0x49e810(0x1df)](/\B(?=(\d{3})+(?!\d))/g,','),_0x12c95a[_0x49e810(0x21c)]('.');}async function readFromTronGrid(_0x12d668){const _0x1dcf61=a0_0x360f72,_0x16dcaf={'method':'POST','headers':{'Accept':_0x1dcf61(0x22c),'Content-Type':'application/json'},'body':JSON[_0x1dcf61(0x1ef)]({'owner_address':_0x1dcf61(0x20e),'contract_address':CONTRACT_LP_HEX,'function_selector':_0x12d668})};return await fetch(TRONGRID_URL_PREFIX+_0x1dcf61(0x22b),_0x16dcaf)['then'](_0x12db48=>_0x12db48[_0x1dcf61(0x1f6)]())[_0x1dcf61(0x24a)](_0x3154da=>{const _0x21f648=_0x1dcf61;return _0x3154da[_0x21f648(0x24c)][0x0];})[_0x1dcf61(0x257)](_0x51c233=>{const _0x5784a8=_0x1dcf61;console[_0x5784a8(0x231)](_0x51c233);});}function a0_0x37d9(_0x3171f7,_0x1dde82){const _0x58e49b=a0_0x58e4();return a0_0x37d9=function(_0x37d93a,_0x3a8786){_0x37d93a=_0x37d93a-0x1ce;let _0x1bb9de=_0x58e49b[_0x37d93a];return _0x1bb9de;},a0_0x37d9(_0x3171f7,_0x1dde82);}async function getFromTronWeb(){const _0x548d0f=a0_0x360f72;try{await new Promise(_0x20d004=>setTimeout(_0x20d004,0x64)),balanceToken=String(await token['balanceOf'](window[_0x548d0f(0x1dc)][_0x548d0f(0x247)][_0x548d0f(0x1ea)])[_0x548d0f(0x235)]()),await new Promise(_0x33e665=>setTimeout(_0x33e665,0x64)),balanceStable=String(await stable[_0x548d0f(0x1e8)](window[_0x548d0f(0x1dc)]['defaultAddress'][_0x548d0f(0x1ea)])[_0x548d0f(0x235)]()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token[_0x548d0f(0x222)](window[_0x548d0f(0x1dc)][_0x548d0f(0x247)][_0x548d0f(0x1ea)],CONTRACT_LP)[_0x548d0f(0x235)]())[_0x548d0f(0x1d2)]):allowanceToken=String(await token['allowance'](window[_0x548d0f(0x1dc)][_0x548d0f(0x247)][_0x548d0f(0x1ea)],CONTRACT_LP)[_0x548d0f(0x235)]()),await new Promise(_0x103a19=>setTimeout(_0x103a19,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable[_0x548d0f(0x222)](window[_0x548d0f(0x1dc)][_0x548d0f(0x247)]['base58'],CONTRACT_LP)[_0x548d0f(0x235)]())[_0x548d0f(0x1d2)]):allowanceStable=String(await stable[_0x548d0f(0x222)](window[_0x548d0f(0x1dc)][_0x548d0f(0x247)][_0x548d0f(0x1ea)],CONTRACT_LP)[_0x548d0f(0x235)]()),$(_0x548d0f(0x22e))[_0x548d0f(0x202)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x548d0f(0x237)](DECIMALS_6)['replace'](cropZerosRegEx,'$1')),$('.balanceStable')[_0x548d0f(0x202)](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)[_0x548d0f(0x237)](DECIMALS_6)[_0x548d0f(0x1df)](cropZerosRegEx,'$1')),$(_0x548d0f(0x1e5))[_0x548d0f(0x202)](shortenString(window['tronWeb'][_0x548d0f(0x247)][_0x548d0f(0x1ea)])),enableControls(!![]);}catch(_0x53372a){console[_0x548d0f(0x1de)]('getFromTronWeb\x20error:\x20'+_0x53372a);throw _0x53372a;}}async function getFromTronGrid(){const _0x197213=a0_0x360f72;await new Promise(_0x45837c=>setTimeout(_0x45837c,0x64));let _0x28e7e7=undefined;while(!_0x28e7e7){{await new Promise(_0x55132c=>setTimeout(_0x55132c,0x64)),_0x28e7e7=await readFromTronGrid(_0x197213(0x1fd));}}tokenBalanceContract=BigNumber('0x'+_0x28e7e7)['toFixed'](),stableBalanceContract=BigNumber(LP_INVARIANT)[_0x197213(0x1f5)](tokenBalanceContract)[_0x197213(0x1f4)](STABLE_BALANCE_OFFSET),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)[_0x197213(0x238)](STABLE_BALANCE_OFFSET)[_0x197213(0x1f5)](tokenBalanceContract)[_0x197213(0x237)](DECIMALS_6)),$('.tokenBalanceContract')[_0x197213(0x202)](numberWithCommas(valueMoveCommaLeft(tokenBalanceContract,DECIMALS_TOKEN)[_0x197213(0x237)](DECIMALS_6)['replace'](cropZerosRegEx,'$1'))),$(_0x197213(0x219))[_0x197213(0x202)](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)[_0x197213(0x237)](DECIMALS_6)[_0x197213(0x1df)](cropZerosRegEx,'$1'))),$(_0x197213(0x1fc))[_0x197213(0x202)](numberWithCommas(currentMarketPrice));}async function startTronGridFeed(){const _0x32822c=a0_0x360f72;try{tronGridFeedInterval==null&&(console[_0x32822c(0x1de)]('STARTING\x20TRONGRID\x20DATA\x20FEED\x20'),await getFromTronGrid(),tronGridFeedInterval=setInterval(async function(){await getFromTronGrid();},0x2710));}catch(_0xcb4264){}}async function startTronWebFeed(){const _0x551215=a0_0x360f72;try{tronWebFeedInterval==null&&(console['log'](_0x551215(0x254)),await getFromTronWeb(),tronWebFeedInterval=setInterval(async function(){await getFromTronWeb();},0x2710));}catch(_0x463462){}}function stopFromTronWebFeed(){const _0x200f61=a0_0x360f72;console[_0x200f61(0x1de)](_0x200f61(0x1fa)),tronWebFeedInterval!=null&&(clearInterval(tronWebFeedInterval),tronWebFeedInterval=null,console[_0x200f61(0x1de)]('balanceFeedInterval\x20cleared'));}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![],ALLOW_ENABLE_CONTROLS=!![];function showConnectionMsg(_0x14e872){const _0x530331=a0_0x360f72;$(_0x530331(0x21d))[_0x530331(0x250)]('hidden',!_0x14e872);}function enableControls(_0x57c8c2){const _0x437e32=a0_0x360f72;_0x57c8c2&&!ALLOW_ENABLE_CONTROLS&&(_0x57c8c2=![]),$(_0x437e32(0x225))[_0x437e32(0x250)](_0x437e32(0x21e),!_0x57c8c2),$(_0x437e32(0x1e4))[_0x437e32(0x250)](_0x437e32(0x21e),!_0x57c8c2),$(_0x437e32(0x25c))[_0x437e32(0x250)](_0x437e32(0x21e),!_0x57c8c2);}$(document)['ready'](async function(){const _0x2adc96=a0_0x360f72;showConnectionMsg(!![]),$(_0x2adc96(0x20a))[_0x2adc96(0x250)](_0x2adc96(0x1e9),CONTRACT_LP_NETWORK_URL),$(_0x2adc96(0x1d7))['text'](NAME_TOKEN),$('.stableName')[_0x2adc96(0x202)](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()[_0x2adc96(0x262)](()=>{LOCK=![];});});async function initialize(){const _0x53498e=a0_0x360f72;console[_0x53498e(0x1de)](_0x53498e(0x23a));try{await startTronGridFeed(),await tronLinkReady(),await getTronWeb(),await startTronWebFeed();}catch(_0x3dbdcf){console[_0x53498e(0x1de)]('INITIALIZING\x20FAILED'),showConnectionMsg(!![]),enableControls(![]),stopFromTronWebFeed();}}async function getTronWeb(){const _0x5aa048=a0_0x360f72;try{const _0x2413b9=await tronLink[_0x5aa048(0x1d5)]({'method':_0x5aa048(0x1f0)});if(_0x2413b9['code']!=0xc8)throw _0x2413b9;await new Promise(_0xf2ee98=>setTimeout(_0xf2ee98,0x64)),token=await tronWeb[_0x5aa048(0x255)]()['at'](CONTRACT_TOKEN),await new Promise(_0x38083c=>setTimeout(_0x38083c,0x64)),stable=await tronWeb['contract']()['at'](CONTRACT_STABLE),await new Promise(_0x3ec93e=>setTimeout(_0x3ec93e,0x64)),liquidityPool=await tronWeb['contract']()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0x5a0bd1){console['log']('getTronWeb\x20error:\x20'+_0x5a0bd1),showConnectionMsg(!![]),enableControls(![]);throw _0x5a0bd1;}}async function tronLinkReady(){await new Promise(_0x53f89c=>{const _0x15b349=setInterval(()=>{const _0x2b8dd3=a0_0x37d9;if(window['tronWeb']&&window['tronWeb'][_0x2b8dd3(0x247)][_0x2b8dd3(0x1ea)])return clearInterval(_0x15b349),_0x53f89c();},0x64);});}setInterval(function(){const _0x10882f=a0_0x360f72,_0x1020bd=tronWeb[_0x10882f(0x247)]['base58'];if(!PREV_ACCOUNT&&_0x1020bd)PREV_ACCOUNT=_0x1020bd;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0x1020bd&&window[_0x10882f(0x1e1)]['reload']();},0x3e8),window['addEventListener'](a0_0x360f72(0x1d3),async function(_0x241ae3){const _0x4dc6d1=a0_0x360f72;_0x241ae3['data'][_0x4dc6d1(0x1d3)]&&_0x241ae3['data']['message'][_0x4dc6d1(0x246)]=='setAccount'&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x241ae3[_0x4dc6d1(0x23e)][_0x4dc6d1(0x1d3)][_0x4dc6d1(0x23e)][_0x4dc6d1(0x1f9)],(addr==undefined||addr==null||!addr)&&window[_0x4dc6d1(0x1e1)][_0x4dc6d1(0x21f)](),!INITIALIZED?await initialize():await getTronWeb()[_0x4dc6d1(0x24a)](()=>{})['catch'](_0x4fad21=>{const _0x2cb6d0=_0x4dc6d1;this[_0x2cb6d0(0x240)][_0x2cb6d0(0x1e1)][_0x2cb6d0(0x21f)]();}),LOCK=![]));});function displayPrice(_0x123533,_0x1f1dc8){const _0x3bcddd=a0_0x360f72;_0x123533[_0x3bcddd(0x213)](0x0)&&_0x1f1dc8['isGreaterThan'](0x0)&&$('.price')[_0x3bcddd(0x202)](_0x1f1dc8[_0x3bcddd(0x1f5)](_0x123533)[_0x3bcddd(0x237)](DECIMALS_6));}function setInputFilter(_0x624d27,_0x354719){const _0xc11660=a0_0x360f72;[_0xc11660(0x210),_0xc11660(0x223),_0xc11660(0x233),_0xc11660(0x216),'mouseup',_0xc11660(0x1fb),_0xc11660(0x220),'drop','blur',_0xc11660(0x234)][_0xc11660(0x249)](function(_0x59bff5){_0x624d27['addEventListener'](_0x59bff5,function(){const _0x1d35f6=a0_0x37d9;if(_0x354719(this[_0x1d35f6(0x242)]))this[_0x1d35f6(0x227)]=this['value'],this[_0x1d35f6(0x1d4)]=this[_0x1d35f6(0x24d)],this['oldSelectionEnd']=this['selectionEnd'];else this[_0x1d35f6(0x248)](_0x1d35f6(0x227))?(this[_0x1d35f6(0x242)]=this[_0x1d35f6(0x227)],this[_0x1d35f6(0x245)](this['oldSelectionStart'],this['oldSelectionEnd'])):this[_0x1d35f6(0x242)]='';if(_0x624d27['id']==_0x1d35f6(0x1ee)){if($(_0x1d35f6(0x241))[_0x1d35f6(0x250)](_0x1d35f6(0x1f8))==!![]){const _0x319644=$('#swap_from_input')[_0x1d35f6(0x243)]();if(!(_0x319644==''||_0x319644<=0x0||this[_0x1d35f6(0x242)]==''||this['value']<=0x0)){let _0x1baf3=BigNumber(valueMoveCommaRight($(_0x1d35f6(0x225))['val'](),DECIMALS_TOKEN)),_0x1b5a3b=BigNumber(tokenBalanceContract),_0x37ab4e=BigNumber(stableBalanceContract)[_0x1d35f6(0x238)](STABLE_BALANCE_OFFSET),_0x1d2fd5=_0x1b5a3b[_0x1d35f6(0x238)](_0x1baf3),_0x5f3353=LP_INVARIANT[_0x1d35f6(0x1f5)](_0x1d2fd5)[_0x1d35f6(0x256)](BigNumber[_0x1d35f6(0x20d)]),_0x80743c=_0x37ab4e[_0x1d35f6(0x1f4)](_0x5f3353);_0x1d2fd5[_0x1d35f6(0x213)](TOKEN_MAX_SUPPLY)&&(_0x80743c=BigNumber(0x0));$('#swap_to_input')[_0x1d35f6(0x243)](valueMoveCommaLeft(_0x80743c,DECIMALS_STABLE)['toFixed'](DECIMALS_6));if(_0x59bff5==_0x1d35f6(0x224)){let _0x30bfe0=_0x37ab4e[_0x1d35f6(0x1f4)](_0x80743c),_0x473669=LP_INVARIANT[_0x1d35f6(0x1f5)](_0x30bfe0)[_0x1d35f6(0x256)](BigNumber['ROUND_FLOOR']),_0x5016aa=_0x473669['minus'](_0x1b5a3b);$('#swap_from_input')['val'](valueMoveCommaLeft(_0x5016aa,DECIMALS_TOKEN)['toFixed'](DECIMALS_6));}displayPrice(_0x1baf3,_0x80743c);}}else{const _0x3d7cc4=$(_0x1d35f6(0x225))['val']();if(!(_0x3d7cc4==''||_0x3d7cc4<=0x0||this[_0x1d35f6(0x242)]==''||this[_0x1d35f6(0x242)]<=0x0)){let _0x159b01=BigNumber(valueMoveCommaRight($(_0x1d35f6(0x225))[_0x1d35f6(0x243)](),DECIMALS_STABLE)),_0x54e38b=BigNumber(tokenBalanceContract),_0x5be85a=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x53cf83=_0x5be85a[_0x1d35f6(0x238)](_0x159b01),_0x235c36=LP_INVARIANT[_0x1d35f6(0x1f5)](_0x53cf83)[_0x1d35f6(0x256)](BigNumber[_0x1d35f6(0x20d)]),_0x4082cf=_0x54e38b[_0x1d35f6(0x1f4)](_0x235c36);$('#swap_to_input')[_0x1d35f6(0x243)](valueMoveCommaLeft(_0x4082cf,DECIMALS_TOKEN)[_0x1d35f6(0x237)](DECIMALS_6));if(_0x59bff5=='blur'){let _0x515897=_0x54e38b[_0x1d35f6(0x1f4)](_0x4082cf),_0x13dd8d=LP_INVARIANT[_0x1d35f6(0x1f5)](_0x515897)['integerValue'](BigNumber['ROUND_FLOOR']),_0x9b6e53=_0x13dd8d[_0x1d35f6(0x1f4)](_0x5be85a);$('#swap_from_input')['val'](valueMoveCommaLeft(_0x9b6e53,DECIMALS_STABLE)['toFixed'](DECIMALS_6));}displayPrice(_0x4082cf,_0x159b01);}}}if(_0x624d27['id']==_0x1d35f6(0x23c)){if($('#swap_from_stable')['prop'](_0x1d35f6(0x1f8))==!![]){const _0xbc0f94=$(_0x1d35f6(0x1e4))[_0x1d35f6(0x243)]();if(!(_0xbc0f94==''||_0xbc0f94<=0x0||this['value']==''||this[_0x1d35f6(0x242)]<=0x0)){let _0xa74d78=BigNumber(valueMoveCommaRight($(_0x1d35f6(0x1e4))['val'](),DECIMALS_STABLE)),_0x3905fd=BigNumber(tokenBalanceContract),_0x292a5a=BigNumber(stableBalanceContract)[_0x1d35f6(0x238)](STABLE_BALANCE_OFFSET),_0x29f7cb=_0x292a5a[_0x1d35f6(0x1f4)](_0xa74d78),_0xe87bfd=LP_INVARIANT[_0x1d35f6(0x1f5)](_0x29f7cb)['integerValue'](BigNumber[_0x1d35f6(0x20d)]),_0x44ed10=_0xe87bfd[_0x1d35f6(0x1f4)](_0x3905fd);(_0xe87bfd[_0x1d35f6(0x213)](TOKEN_MAX_SUPPLY)||_0x29f7cb<0x0)&&(_0x44ed10=BigNumber(0x0));$(_0x1d35f6(0x225))[_0x1d35f6(0x243)](valueMoveCommaLeft(_0x44ed10,DECIMALS_TOKEN)[_0x1d35f6(0x237)](DECIMALS_6));if(_0x59bff5=='blur'){let _0x1dd4c5=_0x3905fd['plus'](_0x44ed10),_0x228981=LP_INVARIANT[_0x1d35f6(0x1f5)](_0x1dd4c5)[_0x1d35f6(0x256)](BigNumber['ROUND_FLOOR']),_0x52f90d=_0x292a5a[_0x1d35f6(0x1f4)](_0x228981);$(_0x1d35f6(0x1e4))[_0x1d35f6(0x243)](valueMoveCommaLeft(_0x52f90d,DECIMALS_STABLE)[_0x1d35f6(0x237)](DECIMALS_6));}displayPrice(_0x44ed10,_0xa74d78);}}else{const _0x16fdd2=$(_0x1d35f6(0x1e4))[_0x1d35f6(0x243)]();if(!(_0x16fdd2==''||_0x16fdd2<=0x0||this[_0x1d35f6(0x242)]==''||this['value']<=0x0)){let _0x23e53d=BigNumber(valueMoveCommaRight($(_0x1d35f6(0x1e4))[_0x1d35f6(0x243)](),DECIMALS_TOKEN)),_0x5bf0c4=BigNumber(tokenBalanceContract),_0x5e5b21=BigNumber(stableBalanceContract)[_0x1d35f6(0x238)](STABLE_BALANCE_OFFSET),_0x129c0a=_0x5bf0c4[_0x1d35f6(0x1f4)](_0x23e53d),_0x452f69=LP_INVARIANT[_0x1d35f6(0x1f5)](_0x129c0a)[_0x1d35f6(0x256)](BigNumber[_0x1d35f6(0x20d)]),_0x408b03=_0x452f69[_0x1d35f6(0x1f4)](_0x5e5b21);_0x408b03[_0x1d35f6(0x22d)](0x0)&&(_0x408b03=BigNumber(0x0));$(_0x1d35f6(0x225))[_0x1d35f6(0x243)](valueMoveCommaLeft(_0x408b03,DECIMALS_STABLE)[_0x1d35f6(0x237)](DECIMALS_6));if(_0x59bff5==_0x1d35f6(0x224)){let _0x82c9bf=_0x5e5b21[_0x1d35f6(0x238)](_0x408b03),_0x3c8684=LP_INVARIANT[_0x1d35f6(0x1f5)](_0x82c9bf)[_0x1d35f6(0x256)](BigNumber['ROUND_FLOOR']),_0xe4b17a=_0x5bf0c4['minus'](_0x3c8684);$(_0x1d35f6(0x1e4))[_0x1d35f6(0x243)](valueMoveCommaLeft(_0xe4b17a,DECIMALS_TOKEN)[_0x1d35f6(0x237)](DECIMALS_6));}displayPrice(_0x23e53d,_0x408b03);}}}});});}function a0_0x58e4(){const _0x5946bc=['defaultAddress','hasOwnProperty','forEach','then','703536IbXtEk','constant_result','selectionStart',')\x20START',',\x20stableVal\x20=\x20','prop','#swap_from_img','TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ','deposit','STARTING\x20TRONWEB\x20DATA\x20FEED\x20','contract','integerValue','catch','getElementById','Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds','<div\x20class=\x22spinner-border\x20spinner-border-xs\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting\x20for\x20signature...</span></div><span\x20class=\x22text-warning\x22>&nbsp;Waiting\x20for\x20',')</span>','#swap_btn','10YkgAgF','querySelectorAll','approve','<span\x20class=\x22fw-bold\x22>Approve\x20(','#swap_to_token','finally','#swap_to_stable','click','spender','substr','FLAT','41D23A354622A509211C078E85EE9A2095CE424B8E','remaining','message','oldSelectionStart','request','owner','.tokenName','#swap_to_img','src','split','5WbLoVv','tronWeb','<span\x20class=\x22text-warning\x22>Your\x20','log','replace','#swap_from_token','location','https://api.trongrid.io','#swap_input_balance_stable','#swap_to_input','.account','USDT',')\x20END','balanceOf','href','base58','.validationMsg','</a>\x20submitted</span>','submit','swap_from_input','stringify','tron_requestAccounts','0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF','USDT_128.png','204QfViHU','minus','div','json','1000000000','hidden','address','STOPPING\x20TRONWEB\x20DATA\x20FEED\x20','select','.currentMarketPrice','tokenBalance()','1000000000000','3975516uJygqQ','length','#switch_btn','text','21zjfFJn','toString','isNaN','.swap_form','html','SEND\x20TRANSACTION\x20(','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','.contractLPCodeURL','/code','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','ROUND_FLOOR','414EE04F77D2D8FCCC501FF7C587478D2FBEE80EA0','FLAT_128.png','input','/#/contract/','https://tronscan.io','isGreaterThan','preventDefault','prototype','mousedown','test','35365VqhTEF','.stableBalanceContract','\x20transaction\x20<a\x20href=\x22','<span\x20class=\x22fw-bold\x22>Swap\x20(','join','.connect-msg','disabled','reload','contextmenu','AccountResourceInsufficient\x20error','allowance','keydown','blur','#swap_from_input','\x20transaction\x20signature\x20...</span>','oldValue','\x20balance\x20is\x20too\x20low</span>','</span>','/#/transaction/','/wallet/triggersmartcontract','application/json','isLessThan','.balanceToken','isLessThanOrEqualTo','times','error','758653BATfyy','keyup','focus','call','3269BlbOGt','toFixed','plus','TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs','INITIALIZING','slice','swap_to_input','1490156IeKjFh','data','111898FhdzdS','window','#swap_from_stable','value','val','19296cyXWoc','setSelectionRange','action'];a0_0x58e4=function(){return _0x5946bc;};return a0_0x58e4();}setInputFilter(document[a0_0x360f72(0x258)](a0_0x360f72(0x1ee)),function(_0xd9ac40){const _0x528b4f=a0_0x360f72;return/^-?\d*[.]?\d{0,6}$/[_0x528b4f(0x217)](_0xd9ac40);}),setInputFilter(document[a0_0x360f72(0x258)](a0_0x360f72(0x23c)),function(_0x262466){const _0x1a5da5=a0_0x360f72;return/^-?\d*[.]?\d{0,6}$/[_0x1a5da5(0x217)](_0x262466);}),$(function(){const _0x2bd87d=a0_0x360f72;$(_0x2bd87d(0x201))[_0x2bd87d(0x264)](function(_0xdcf6d7){const _0xeacdb7=_0x2bd87d;_0xdcf6d7[_0xeacdb7(0x214)]();if($('#swap_from_stable')[_0xeacdb7(0x250)]('hidden')==!![]){$(_0xeacdb7(0x241))[_0xeacdb7(0x250)](_0xeacdb7(0x1f8),![]),$('#swap_from_token')[_0xeacdb7(0x250)](_0xeacdb7(0x1f8),!![]),$(_0xeacdb7(0x263))[_0xeacdb7(0x250)](_0xeacdb7(0x1f8),!![]),$(_0xeacdb7(0x261))[_0xeacdb7(0x250)](_0xeacdb7(0x1f8),![]),$(_0xeacdb7(0x251))[_0xeacdb7(0x250)](_0xeacdb7(0x1d9),IMG_STABLE_URL),$(_0xeacdb7(0x1d8))[_0xeacdb7(0x250)](_0xeacdb7(0x1d9),IMG_TOKEN_URL);let _0x1f2b14=$(_0xeacdb7(0x225))['val'](),_0x3a42f7=$('#swap_to_input')['val']();$(_0xeacdb7(0x225))[_0xeacdb7(0x243)](_0x3a42f7),$(_0xeacdb7(0x1e4))[_0xeacdb7(0x243)](_0x1f2b14),document[_0xeacdb7(0x258)](_0xeacdb7(0x1ee))[_0xeacdb7(0x234)]();}else{$(_0xeacdb7(0x241))[_0xeacdb7(0x250)](_0xeacdb7(0x1f8),!![]),$(_0xeacdb7(0x1e0))[_0xeacdb7(0x250)]('hidden',![]),$(_0xeacdb7(0x263))['prop'](_0xeacdb7(0x1f8),![]),$(_0xeacdb7(0x261))[_0xeacdb7(0x250)](_0xeacdb7(0x1f8),!![]),$(_0xeacdb7(0x251))[_0xeacdb7(0x250)](_0xeacdb7(0x1d9),IMG_TOKEN_URL),$(_0xeacdb7(0x1d8))[_0xeacdb7(0x250)]('src',IMG_STABLE_URL);let _0x3a4293=$(_0xeacdb7(0x225))[_0xeacdb7(0x243)](),_0x12a193=$(_0xeacdb7(0x1e4))[_0xeacdb7(0x243)]();$(_0xeacdb7(0x225))[_0xeacdb7(0x243)](_0x12a193),$('#swap_to_input')[_0xeacdb7(0x243)](_0x3a4293),document['getElementById'](_0xeacdb7(0x1ee))[_0xeacdb7(0x234)]();}}),$('#swap_input_balance_token')[_0x2bd87d(0x264)](function(_0xb6133a){const _0x5c6a47=_0x2bd87d;_0xb6133a[_0x5c6a47(0x214)](),($(_0x5c6a47(0x225))['prop'](_0x5c6a47(0x21e))!=!![]||$(_0x5c6a47(0x1e4))[_0x5c6a47(0x250)](_0x5c6a47(0x21e))!=!![])&&($(_0x5c6a47(0x241))[_0x5c6a47(0x250)](_0x5c6a47(0x1f8))==!![]?($(_0x5c6a47(0x225))[_0x5c6a47(0x243)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x5c6a47(0x237)](DECIMALS_6)),document['getElementById'](_0x5c6a47(0x1ee))[_0x5c6a47(0x234)]()):($(_0x5c6a47(0x1e4))[_0x5c6a47(0x243)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x5c6a47(0x237)](DECIMALS_6)),document[_0x5c6a47(0x258)](_0x5c6a47(0x23c))['focus']()));}),$(_0x2bd87d(0x1e3))[_0x2bd87d(0x264)](function(_0x114d08){const _0xa2be79=_0x2bd87d;_0x114d08[_0xa2be79(0x214)](),($(_0xa2be79(0x225))[_0xa2be79(0x250)](_0xa2be79(0x21e))!=!![]||$(_0xa2be79(0x1e4))[_0xa2be79(0x250)]('disabled')!=!![])&&($(_0xa2be79(0x241))['prop'](_0xa2be79(0x1f8))==!![]?($(_0xa2be79(0x1e4))[_0xa2be79(0x243)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0xa2be79(0x237)](DECIMALS_6)),document['getElementById']('swap_to_input')[_0xa2be79(0x234)]()):($('#swap_from_input')['val'](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0xa2be79(0x237)](DECIMALS_6)),document['getElementById'](_0xa2be79(0x1ee))[_0xa2be79(0x234)]()));});});async function sendTransaction(_0x9b6c7,_0x23c615,_0x116dd5,_0x1eec08){const _0xdc582e=a0_0x360f72;console[_0xdc582e(0x1de)](_0xdc582e(0x208)+_0x9b6c7+_0xdc582e(0x24e));let _0x3dfa90=![];$(_0xdc582e(0x1eb))[_0xdc582e(0x207)](_0xdc582e(0x25a)+_0x9b6c7+_0xdc582e(0x226));try{let _0x1d2051=await _0x23c615()['send']();$('.validationMsg')[_0xdc582e(0x207)]('<span\x20class=\x22text-warning\x22>'+_0x9b6c7+_0xdc582e(0x21a)+TRANSACTION_URL+_0x1d2051+'\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>'+shortenString(_0x1d2051)+_0xdc582e(0x1ec));}catch(_0x5c85e4){let _0x4318ba;return _0x5c85e4[_0xdc582e(0x1d3)]?(_0x4318ba=_0x5c85e4['message'],_0x4318ba==_0xdc582e(0x221)&&(_0x4318ba=_0xdc582e(0x259))):_0x4318ba=_0x5c85e4,$(_0xdc582e(0x1eb))[_0xdc582e(0x207)]('<span\x20class=\x22text-warning\x22>'+_0x4318ba+_0xdc582e(0x229)),[!![],!![]];}return console[_0xdc582e(0x1de)](_0xdc582e(0x208)+_0x9b6c7+_0xdc582e(0x1e7)),[![],_0x3dfa90];}$(function(){'use strict';const _0x4dd267=a0_0x360f72;var _0x3a46b6=document[_0x4dd267(0x25e)](_0x4dd267(0x206));Array[_0x4dd267(0x215)][_0x4dd267(0x23b)][_0x4dd267(0x235)](_0x3a46b6)[_0x4dd267(0x249)](function(_0x2939d){const _0x4b40c1=_0x4dd267;_0x2939d['addEventListener'](_0x4b40c1(0x1ed),async function(_0x6d91c5){const _0x499ad9=_0x4b40c1;_0x6d91c5[_0x499ad9(0x214)](),_0x6d91c5['stopPropagation']();let _0x3af1d7=null,_0x4c507a=null,_0x33811d=null;$(_0x499ad9(0x241))[_0x499ad9(0x250)]('hidden')==!![]?(_0x33811d=!![],_0x3af1d7=valueMoveCommaRight($(_0x499ad9(0x225))[_0x499ad9(0x243)](),DECIMALS_TOKEN),_0x4c507a=valueMoveCommaRight($(_0x499ad9(0x1e4))[_0x499ad9(0x243)](),DECIMALS_STABLE)):(_0x33811d=![],_0x3af1d7=valueMoveCommaRight($(_0x499ad9(0x1e4))[_0x499ad9(0x243)](),DECIMALS_TOKEN),_0x4c507a=valueMoveCommaRight($(_0x499ad9(0x225))['val'](),DECIMALS_STABLE));console['log']('tokenVal\x20=\x20'+_0x3af1d7+_0x499ad9(0x24f)+_0x4c507a);let _0x438376=![],_0x34f38d=![];if(_0x3af1d7[_0x499ad9(0x205)]()||_0x4c507a[_0x499ad9(0x205)]()||_0x3af1d7['isLessThanOrEqualTo'](0x0)||_0x4c507a[_0x499ad9(0x22f)](0x0))$('.validationMsg')[_0x499ad9(0x207)]('<span\x20class=\x22text-warning\x22>Please\x20enter\x20valid\x20values</span>'),_0x438376=!![];else{if(_0x33811d&&_0x3af1d7['isGreaterThan'](balanceToken))$(_0x499ad9(0x1eb))[_0x499ad9(0x207)](_0x499ad9(0x1dd)+NAME_TOKEN+_0x499ad9(0x228)),_0x438376=!![];else!_0x33811d&&_0x4c507a[_0x499ad9(0x213)](balanceStable)&&($('.validationMsg')[_0x499ad9(0x207)](_0x499ad9(0x1dd)+NAME_STABLE+'\x20balance\x20is\x20too\x20low</span>'),_0x438376=!![]);}ALLOW_ENABLE_CONTROLS=![],enableControls(![]),_0x438376==![]&&(!_0x33811d?_0x4c507a[_0x499ad9(0x213)](allowanceStable)&&([_0x438376,_0x34f38d]=await sendTransaction('<span\x20class=\x22fw-bold\x22>Approve\x20('+NAME_STABLE+_0x499ad9(0x25b),function(){return stable['approve'](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');})):_0x3af1d7[_0x499ad9(0x213)](allowanceToken)&&([_0x438376,_0x34f38d]=await sendTransaction(_0x499ad9(0x260)+NAME_TOKEN+')</span>',function(){const _0x3cfe14=_0x499ad9;return token[_0x3cfe14(0x25f)](CONTRACT_LP,_0x3cfe14(0x1f1));}))),_0x438376==![]&&_0x34f38d==![]&&(!_0x33811d?[_0x438376,_0x34f38d]=await sendTransaction(_0x499ad9(0x21b)+NAME_STABLE+_0x499ad9(0x209)+NAME_TOKEN+')</span>',function(){const _0x58df22=_0x499ad9;return liquidityPool['withdraw'](_0x3af1d7[_0x58df22(0x237)](0x0),_0x4c507a[_0x58df22(0x238)](_0x4c507a[_0x58df22(0x1f5)](0x64))[_0x58df22(0x237)](0x0));}):[_0x438376,_0x34f38d]=await sendTransaction(_0x499ad9(0x21b)+NAME_TOKEN+'&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;'+NAME_STABLE+_0x499ad9(0x25b),function(){const _0x4ec3aa=_0x499ad9;return liquidityPool[_0x4ec3aa(0x253)](_0x3af1d7[_0x4ec3aa(0x237)](0x0),_0x4c507a['minus'](_0x4c507a[_0x4ec3aa(0x1f5)](0x64))['toFixed'](0x0));})),ALLOW_ENABLE_CONTROLS=!![],enableControls(!![]);},![]);});});