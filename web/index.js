const a0_0x1a5825=a0_0x29e2;(function(_0xbaea80,_0x23fd4a){const _0x1df379=a0_0x29e2,_0x265492=_0xbaea80();while(!![]){try{const _0x39491a=-parseInt(_0x1df379(0x83))/0x1+-parseInt(_0x1df379(0xfb))/0x2*(parseInt(_0x1df379(0xa4))/0x3)+parseInt(_0x1df379(0x9c))/0x4+parseInt(_0x1df379(0x7f))/0x5+-parseInt(_0x1df379(0xf6))/0x6*(-parseInt(_0x1df379(0xe2))/0x7)+parseInt(_0x1df379(0xe8))/0x8*(-parseInt(_0x1df379(0xae))/0x9)+-parseInt(_0x1df379(0xa1))/0xa*(parseInt(_0x1df379(0xe3))/0xb);if(_0x39491a===_0x23fd4a)break;else _0x265492['push'](_0x265492['shift']());}catch(_0x1e4eea){_0x265492['push'](_0x265492['shift']());}}}(a0_0x6bd8,0x47a09));let CONTRACT_LP='TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs',CONTRACT_TOKEN=a0_0x1a5825(0x93),CONTRACT_STABLE=a0_0x1a5825(0xa3);TRONSCAN_URL_PREFIX='https://tronscan.io';let ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=!![],IMG_TOKEN_URL=a0_0x1a5825(0xc8),IMG_STABLE_URL=a0_0x1a5825(0xf7),NAME_TOKEN='FLAT',NAME_STABLE='USDT',DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY=a0_0x1a5825(0xd8),STABLE_BALANCE_OFFSET=a0_0x1a5825(0x96),LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)['times'](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+'/#/contract/'+CONTRACT_LP+'/code',TRANSACTION_URL=TRONSCAN_URL_PREFIX+'/#/transaction/',TRC20_TOKEN_APPROVE_OWNER='owner',TRC20_TOKEN_APPROVE_SPENDER=a0_0x1a5825(0xcb),TRC20_TOKEN_APPROVE_VALUE=a0_0x1a5825(0xc5),TRC20_STABLE_APPROVE_OWNER=a0_0x1a5825(0x8f),TRC20_STABLE_APPROVE_SPENDER='spender',TRC20_STABLE_APPROVE_VALUE=a0_0x1a5825(0xc5),token=null,stable=null,liquidityPool=null,balanceFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null;const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0;cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function shortenString(_0x799716){const _0x5d8bee=a0_0x1a5825;let _0x54eaea=_0x799716;return _0x54eaea[_0x5d8bee(0x106)](0x0,0x5)+_0x5d8bee(0x81)+_0x54eaea['substr'](_0x54eaea['length']-0x5,_0x54eaea['length']);}function a0_0x6bd8(){const _0x2690f9=['prop','toString','</a>\x20confirmation\x20failed</span>','119HEArSD','913twIsoJ','selectionEnd','querySelectorAll','href','STOPPING\x20CONTRACT\x20DATA\x20FEED\x20','116624CcaKDA','#swap_input_balance_stable','oldValue','#swap_input_balance_token','minus','WD:\x20tb\x20=\x20','\x20|\x20tv\x20=\x20','div','<span\x20class=\x22fw-bold\x22>Swap\x20(','html','tron_requestAccounts','finally','remaining','withdraw','56226IwOIlu','USDT_128.png','#swap_from_token','replace','tokenVal\x20=\x20','2pjiynq','text','location','isGreaterThan','\x20|\x20tb_new\x20=\x20','getTime','balanceOf','<span\x20class=\x22text-warning\x22>','\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>','slice','disabled','substr','stop','\x20transaction\x20<a\x20href=\x22','ROUND_FLOOR','call','send','toFixed','plus','#swap_to_input','#swap_to_token','stableBalance','.launch_text','tronWeb','#swap_from_img','\x20|\x20sb\x20=\x20','</a>\x20submitted</span>','\x20|\x20sv\x20=\x20','addEventListener','TO\x20INPUT:\x20FROM\x20TOKEN\x20TO\x20STABLE','src','preventDefault','hasOwnProperty','join','isLessThan','oldSelectionStart','stopPropagation','getElementById','340282366920938463463374607431768211455','.balanceToken','2728930FOiFOv','mouseup','...','Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds','282073rURHtB','forEach','\x20balance\x20is\x20too\x20low</span>','.connect-msg','.account','<span\x20class=\x22text-danger\x22>Please\x20enter\x20valid\x20values</span>','.stableName','.stableBalanceContract','tokenBalance','<div\x20class=\x22spinner-border\x20spinner-border-sm\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting...</span></div>\x20<span\x20class=\x22text-warning\x22>Waiting\x20for\x20signature...</span>','<div\x20class=\x22spinner-border\x20spinner-border-sm\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting...</span></div>\x20<span\x20class=\x22text-warning\x22>Waiting\x20for\x20','swap_from_input','owner','integerValue','log','catch','TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ','<span\x20class=\x22text-danger\x22>','keyup','1000000000','#swap_to_stable','swapFromStableVal\x20','request','setAccount','):\x20CONFIRMED','2149548BAtOMV','allowance','.tokenBalanceContract','message','):\x20WAITING\x20FOR\x20CONFIRMATION','15060KWwQvE','base58','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','1057530PnOJBl','window','reload','test','#swap_from_input','input','times','sendTransaction\x20(','submit','Approval','117YhjfMz','.currentMarketPrice','hidden','0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF','split','blur','approve','focus','\x22\x20target=\x22_blank\x22\x20class=\x22text-danger\x22>','data','click','isNaN','drop','code','defaultAddress','mousedown','.balanceStable','FROM\x20INPUT:\x20FROM\x20TOKEN\x20TO\x20STABLE','then','#switch_btn','\x20|\x20sb_new\x20=\x20','prototype','INITIALIZING\x20FAILED:','value','TO\x20INPUT:\x20FROM\x20STABLE\x20TO\x20TOKEN','DP:\x20tb\x20=\x20','FLAT_128.png','INITIALIZING','<span\x20class=\x22fw-bold\x22>Approval\x20(','spender','oldSelectionEnd','address','contract','setSelectionRange','#swap_from_stable','deposit','isLessThanOrEqualTo','watch','.launch_count_down',')</span>','Launch\x20in\x20','#swap_to_img','1000000000000','val','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','.validationMsg','swap_to_input','floor','action'];a0_0x6bd8=function(){return _0x2690f9;};return a0_0x6bd8();}function valueMoveCommaLeft(_0x2e0f61,_0x3453a7){return BigNumber(_0x2e0f61)['div'](0xa**_0x3453a7);}function valueMoveCommaRight(_0x1b4dcc,_0x9d1795){const _0x766ea=a0_0x1a5825;return BigNumber(_0x1b4dcc)[_0x766ea(0xaa)](0xa**_0x9d1795);}function adjustDecimals(_0x29d335){const _0x311928=a0_0x1a5825;let _0x46b1d0,_0x22e44f=BigNumber(_0x29d335);if(_0x22e44f[_0x311928(0x79)](0x1))_0x46b1d0=DECIMALS_6;else _0x22e44f['isLessThan'](0x2710)?_0x46b1d0=DECIMALS_2:_0x46b1d0=DECIMALS_0;return _0x22e44f[_0x311928(0x10c)](_0x46b1d0)['replace'](cropZerosRegEx,'$1');}function numberWithCommas(_0x590f6a){const _0x5587a1=a0_0x1a5825;var _0x389781=_0x590f6a[_0x5587a1(0xe0)]()[_0x5587a1(0xb2)]('.');return _0x389781[0x0]=_0x389781[0x0][_0x5587a1(0xf9)](/\B(?=(\d{3})+(?!\d))/g,','),_0x389781[_0x5587a1(0x78)]('.');}async function getContractData(){const _0x5d75b3=a0_0x1a5825;await new Promise(_0x4d8053=>setTimeout(_0x4d8053,0x64)),balanceToken=String(await token[_0x5d75b3(0x101)](window[_0x5d75b3(0x6e)]['defaultAddress']['base58'])[_0x5d75b3(0x10a)]()),await new Promise(_0x332a5d=>setTimeout(_0x332a5d,0x64)),balanceStable=String(await stable[_0x5d75b3(0x101)](window[_0x5d75b3(0x6e)][_0x5d75b3(0xbc)][_0x5d75b3(0xa2)])[_0x5d75b3(0x10a)]()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token['allowance'](window['tronWeb'][_0x5d75b3(0xbc)][_0x5d75b3(0xa2)],CONTRACT_LP)['call']())['remaining']):allowanceToken=String(await token[_0x5d75b3(0x9d)](window[_0x5d75b3(0x6e)]['defaultAddress']['base58'],CONTRACT_LP)[_0x5d75b3(0x10a)]()),await new Promise(_0x9ce6de=>setTimeout(_0x9ce6de,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable['allowance'](window['tronWeb']['defaultAddress']['base58'],CONTRACT_LP)[_0x5d75b3(0x10a)]())[_0x5d75b3(0xf4)]):allowanceStable=String(await stable[_0x5d75b3(0x9d)](window[_0x5d75b3(0x6e)][_0x5d75b3(0xbc)][_0x5d75b3(0xa2)],CONTRACT_LP)[_0x5d75b3(0x10a)]()),await new Promise(_0x32f68e=>setTimeout(_0x32f68e,0x64)),tokenBalanceContract=String(await liquidityPool[_0x5d75b3(0x8b)]()[_0x5d75b3(0x10a)]()),await new Promise(_0x3ecf03=>setTimeout(_0x3ecf03,0x64)),stableBalanceContract=String(await liquidityPool[_0x5d75b3(0x6c)]()[_0x5d75b3(0x10a)]()),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)[_0x5d75b3(0x69)](STABLE_BALANCE_OFFSET)[_0x5d75b3(0xef)](tokenBalanceContract)[_0x5d75b3(0x10c)](DECIMALS_6)),$(_0x5d75b3(0x7e))[_0x5d75b3(0xfc)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x5d75b3(0x10c)](DECIMALS_6)[_0x5d75b3(0xf9)](cropZerosRegEx,'$1')),$(_0x5d75b3(0xbe))['text'](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)[_0x5d75b3(0x10c)](DECIMALS_6)[_0x5d75b3(0xf9)](cropZerosRegEx,'$1')),$(_0x5d75b3(0x9e))[_0x5d75b3(0xfc)](numberWithCommas(valueMoveCommaLeft(tokenBalanceContract,DECIMALS_TOKEN)[_0x5d75b3(0x10c)](DECIMALS_6)['replace'](cropZerosRegEx,'$1'))),$(_0x5d75b3(0x8a))[_0x5d75b3(0xfc)](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)[_0x5d75b3(0x10c)](DECIMALS_6)['replace'](cropZerosRegEx,'$1'))),$(_0x5d75b3(0xaf))['text'](numberWithCommas(currentMarketPrice)),$(_0x5d75b3(0x87))[_0x5d75b3(0xfc)](shortenString(window['tronWeb'][_0x5d75b3(0xbc)][_0x5d75b3(0xa2)])),enableControls(!![]);}async function startContractDataFeed(){try{balanceFeedInterval==null&&(console['log']('STARTING\x20CONTRACT\x20DATA\x20FEED\x20'),await getContractData(),balanceFeedInterval=setInterval(async function(){await getContractData();},0x2710));}catch(_0x36632e){}}function stopContractDataFeed(){const _0x387835=a0_0x1a5825;console['log'](_0x387835(0xe7)),balanceFeedInterval!=null&&(clearInterval(balanceFeedInterval),balanceFeedInterval=null,console[_0x387835(0x91)]('balanceFeedInterval\x20cleared'));}function showConnectionMsg(_0x5a7f20){const _0x37f613=a0_0x1a5825;$(_0x37f613(0x86))[_0x37f613(0xdf)](_0x37f613(0xb0),!_0x5a7f20);}function enableControls(_0x2f9b27){}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![];$(document)['ready'](async function(){const _0x35e47a=a0_0x1a5825;showConnectionMsg(!![]),$('.contractLPCodeURL')[_0x35e47a(0xdf)](_0x35e47a(0xe6),CONTRACT_LP_NETWORK_URL),$('.tokenName')[_0x35e47a(0xfc)](NAME_TOKEN),$(_0x35e47a(0x89))['text'](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()[_0x35e47a(0xf3)](()=>{LOCK=![];});});async function initialize(){const _0x42209d=a0_0x1a5825;console[_0x42209d(0x91)](_0x42209d(0xc9));try{await tronLinkReady(),await getTronWeb(),await startContractDataFeed();}catch(_0x5962a9){console[_0x42209d(0x91)](_0x42209d(0xc4)+_0x5962a9),showConnectionMsg(!![]),enableControls(![]),stopContractDataFeed();}}async function getTronWeb(){const _0x196853=a0_0x1a5825;try{const _0x7bd1a2=await tronLink[_0x196853(0x99)]({'method':_0x196853(0xf2)});if(_0x7bd1a2[_0x196853(0xbb)]!=0xc8)throw _0x7bd1a2;token=await tronWeb['contract']()['at'](CONTRACT_TOKEN),stable=await tronWeb['contract']()['at'](CONTRACT_STABLE),liquidityPool=await tronWeb[_0x196853(0xce)]()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0x5c638f){showConnectionMsg(!![]),enableControls(![]);throw _0x5c638f;}}function a0_0x29e2(_0x1ecbd2,_0x2758dd){const _0x6bd843=a0_0x6bd8();return a0_0x29e2=function(_0x29e222,_0x49813e){_0x29e222=_0x29e222-0x69;let _0x2c294e=_0x6bd843[_0x29e222];return _0x2c294e;},a0_0x29e2(_0x1ecbd2,_0x2758dd);}async function tronLinkReady(){await new Promise(_0x11553b=>{const _0x1faf7a=setInterval(()=>{const _0x1d0aad=a0_0x29e2;if(window[_0x1d0aad(0x6e)]&&window[_0x1d0aad(0x6e)][_0x1d0aad(0xbc)]['base58'])return clearInterval(_0x1faf7a),_0x11553b();},0x64);});}setInterval(function(){const _0xe86dea=a0_0x1a5825,_0x533359=tronWeb['defaultAddress']['base58'];if(!PREV_ACCOUNT&&_0x533359)PREV_ACCOUNT=_0x533359;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0x533359&&window[_0xe86dea(0xfd)][_0xe86dea(0xa6)]();},0x3e8),window[a0_0x1a5825(0x73)](a0_0x1a5825(0x9f),async function(_0x52feba){const _0x28b24d=a0_0x1a5825;_0x52feba['data'][_0x28b24d(0x9f)]&&_0x52feba[_0x28b24d(0xb7)][_0x28b24d(0x9f)][_0x28b24d(0xde)]==_0x28b24d(0x9a)&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x52feba[_0x28b24d(0xb7)][_0x28b24d(0x9f)][_0x28b24d(0xb7)][_0x28b24d(0xcd)],(addr==undefined||addr==null||!addr)&&window[_0x28b24d(0xfd)][_0x28b24d(0xa6)](),!INITIALIZED?await initialize():await getTronWeb()[_0x28b24d(0xc0)](()=>{})[_0x28b24d(0x92)](_0x160f70=>{const _0x20a3c7=_0x28b24d;this[_0x20a3c7(0xa5)]['location'][_0x20a3c7(0xa6)]();}),LOCK=![]));});function displayPrice(_0xc9f522,_0xd59a5c){const _0x330fbd=a0_0x1a5825;_0xc9f522['isGreaterThan'](0x0)&&_0xd59a5c[_0x330fbd(0xfe)](0x0)&&$('.price')[_0x330fbd(0xfc)](_0xd59a5c[_0x330fbd(0xef)](_0xc9f522)[_0x330fbd(0x10c)](DECIMALS_6));}function setInputFilter(_0x56a68c,_0x4eaddc){const _0x39565b=a0_0x1a5825;[_0x39565b(0xa9),'keydown',_0x39565b(0x95),_0x39565b(0xbd),_0x39565b(0x80),'select','contextmenu',_0x39565b(0xba),_0x39565b(0xb3),_0x39565b(0xb5)][_0x39565b(0x84)](function(_0x232f79){const _0x2e295b=_0x39565b;_0x56a68c[_0x2e295b(0x73)](_0x232f79,function(){const _0x52677e=_0x2e295b;if(_0x4eaddc(this['value']))this[_0x52677e(0xea)]=this[_0x52677e(0xc5)],this[_0x52677e(0x7a)]=this['selectionStart'],this[_0x52677e(0xcc)]=this[_0x52677e(0xe4)];else this[_0x52677e(0x77)]('oldValue')?(this['value']=this[_0x52677e(0xea)],this[_0x52677e(0xcf)](this['oldSelectionStart'],this['oldSelectionEnd'])):this[_0x52677e(0xc5)]='';if(_0x56a68c['id']=='swap_from_input'){console[_0x52677e(0x91)](_0x232f79);if($(_0x52677e(0xd0))['prop']('hidden')==!![]){const _0x5b7a39=$(_0x52677e(0xa8))[_0x52677e(0xd9)]();if(!(_0x5b7a39==''||_0x5b7a39<=0x0||this['value']==''||this[_0x52677e(0xc5)]<=0x0)){console[_0x52677e(0x91)](_0x52677e(0xbf));let _0x15bd67=BigNumber(valueMoveCommaRight($(_0x52677e(0xa8))[_0x52677e(0xd9)](),DECIMALS_TOKEN)),_0x177349=BigNumber(tokenBalanceContract),_0x46af85=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x395e71=_0x177349[_0x52677e(0x69)](_0x15bd67),_0x3bd9af=LP_INVARIANT[_0x52677e(0xef)](_0x395e71)[_0x52677e(0x90)](BigNumber[_0x52677e(0x109)]),_0x22644d=_0x46af85[_0x52677e(0xec)](_0x3bd9af);_0x395e71['isGreaterThan'](TOKEN_MAX_SUPPLY)&&(_0x22644d=BigNumber(0x0));console['log']('DP:\x20tb\x20=\x20'+_0x177349+_0x52677e(0x70)+_0x46af85+'\x20|\x20tb_new\x20=\x20'+_0x395e71+'\x20|\x20sb_new\x20=\x20'+_0x3bd9af+_0x52677e(0xee)+_0x15bd67+_0x52677e(0x72)+_0x22644d),$(_0x52677e(0x6a))[_0x52677e(0xd9)](valueMoveCommaLeft(_0x22644d,DECIMALS_STABLE)[_0x52677e(0x10c)](DECIMALS_6));if(_0x232f79=='blur'){let _0x22e0dc=_0x46af85[_0x52677e(0xec)](_0x22644d),_0x3a2eaf=LP_INVARIANT['div'](_0x22e0dc)['integerValue'](BigNumber[_0x52677e(0x109)]),_0x28d38b=_0x3a2eaf[_0x52677e(0xec)](_0x177349);$(_0x52677e(0xa8))['val'](valueMoveCommaLeft(_0x28d38b,DECIMALS_TOKEN)[_0x52677e(0x10c)](DECIMALS_6));}displayPrice(_0x15bd67,_0x22644d);}}else{const _0x22faac=$(_0x52677e(0xa8))[_0x52677e(0xd9)]();console['log'](_0x52677e(0x98)+_0x22faac);if(!(_0x22faac==''||_0x22faac<=0x0||this['value']==''||this[_0x52677e(0xc5)]<=0x0)){console[_0x52677e(0x91)]('FROM\x20INPUT:\x20FROM\x20STABLE\x20TO\x20TOKEN');let _0x15fe74=BigNumber(valueMoveCommaRight($(_0x52677e(0xa8))[_0x52677e(0xd9)](),DECIMALS_STABLE)),_0x2b5fa1=BigNumber(tokenBalanceContract),_0x269209=BigNumber(stableBalanceContract)[_0x52677e(0x69)](STABLE_BALANCE_OFFSET),_0x3cc62b=_0x269209['plus'](_0x15fe74),_0x24589a=LP_INVARIANT['div'](_0x3cc62b)[_0x52677e(0x90)](BigNumber['ROUND_FLOOR']),_0x5a0f18=_0x2b5fa1['minus'](_0x24589a);console['log'](_0x52677e(0xed)+_0x2b5fa1+_0x52677e(0x70)+_0x269209+_0x52677e(0xff)+_0x24589a+_0x52677e(0xc2)+_0x3cc62b+'\x20|\x20tv\x20=\x20'+_0x5a0f18+_0x52677e(0x72)+_0x15fe74),$(_0x52677e(0x6a))['val'](valueMoveCommaLeft(_0x5a0f18,DECIMALS_TOKEN)[_0x52677e(0x10c)](DECIMALS_6));if(_0x232f79==_0x52677e(0xb3)){let _0x2daa41=_0x2b5fa1[_0x52677e(0xec)](_0x5a0f18),_0x5f0892=LP_INVARIANT[_0x52677e(0xef)](_0x2daa41)['integerValue'](BigNumber[_0x52677e(0x109)]),_0x58ba74=_0x5f0892[_0x52677e(0xec)](_0x269209);$('#swap_from_input')[_0x52677e(0xd9)](valueMoveCommaLeft(_0x58ba74,DECIMALS_STABLE)[_0x52677e(0x10c)](DECIMALS_6));}displayPrice(_0x5a0f18,_0x15fe74);}}}if(_0x56a68c['id']=='swap_to_input'){if($('#swap_from_stable')['prop'](_0x52677e(0xb0))==!![]){const _0x4cffff=$(_0x52677e(0x6a))[_0x52677e(0xd9)]();if(!(_0x4cffff==''||_0x4cffff<=0x0||this['value']==''||this[_0x52677e(0xc5)]<=0x0)){console[_0x52677e(0x91)](_0x52677e(0x74));let _0x58194e=BigNumber(valueMoveCommaRight($(_0x52677e(0x6a))[_0x52677e(0xd9)](),DECIMALS_STABLE)),_0x39313d=BigNumber(tokenBalanceContract),_0x451a89=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x19e307=_0x451a89['minus'](_0x58194e),_0x456573=LP_INVARIANT[_0x52677e(0xef)](_0x19e307)[_0x52677e(0x90)](BigNumber[_0x52677e(0x109)]),_0x560e1b=_0x456573['minus'](_0x39313d);(_0x456573['isGreaterThan'](TOKEN_MAX_SUPPLY)||_0x19e307<0x0)&&(_0x560e1b=BigNumber(0x0));console['log'](_0x52677e(0xc7)+_0x39313d+'\x20|\x20sb\x20=\x20'+_0x451a89+_0x52677e(0xff)+_0x456573+'\x20|\x20sb_new\x20=\x20'+_0x19e307+'\x20|\x20tv\x20=\x20'+_0x560e1b+_0x52677e(0x72)+_0x58194e),$(_0x52677e(0xa8))[_0x52677e(0xd9)](valueMoveCommaLeft(_0x560e1b,DECIMALS_TOKEN)[_0x52677e(0x10c)](DECIMALS_6));if(_0x232f79==_0x52677e(0xb3)){let _0xfeb8ad=_0x39313d[_0x52677e(0x69)](_0x560e1b),_0x256588=LP_INVARIANT['div'](_0xfeb8ad)[_0x52677e(0x90)](BigNumber['ROUND_FLOOR']),_0x515cda=_0x451a89[_0x52677e(0xec)](_0x256588);$(_0x52677e(0x6a))[_0x52677e(0xd9)](valueMoveCommaLeft(_0x515cda,DECIMALS_STABLE)['toFixed'](DECIMALS_6));}displayPrice(_0x560e1b,_0x58194e);}}else{const _0x15fdb9=$(_0x52677e(0x6a))['val']();if(!(_0x15fdb9==''||_0x15fdb9<=0x0||this[_0x52677e(0xc5)]==''||this[_0x52677e(0xc5)]<=0x0)){console[_0x52677e(0x91)](_0x52677e(0xc6));let _0x3a9129=BigNumber(valueMoveCommaRight($(_0x52677e(0x6a))[_0x52677e(0xd9)](),DECIMALS_TOKEN)),_0x3ac765=BigNumber(tokenBalanceContract),_0x5f37ba=BigNumber(stableBalanceContract)[_0x52677e(0x69)](STABLE_BALANCE_OFFSET),_0x4fc511=_0x3ac765[_0x52677e(0xec)](_0x3a9129),_0x57648c=LP_INVARIANT[_0x52677e(0xef)](_0x4fc511)['integerValue'](BigNumber[_0x52677e(0x109)]),_0x36ac03=_0x57648c[_0x52677e(0xec)](_0x5f37ba);_0x36ac03[_0x52677e(0x79)](0x0)&&(_0x36ac03=BigNumber(0x0));console[_0x52677e(0x91)]('WD:\x20tb\x20=\x20'+_0x3ac765+_0x52677e(0x70)+_0x5f37ba+_0x52677e(0xff)+_0x4fc511+'\x20|\x20sb_new\x20=\x20'+_0x57648c+_0x52677e(0xee)+_0x3a9129+_0x52677e(0x72)+_0x36ac03),$('#swap_from_input')['val'](valueMoveCommaLeft(_0x36ac03,DECIMALS_STABLE)[_0x52677e(0x10c)](DECIMALS_6));if(_0x232f79==_0x52677e(0xb3)){let _0x5e7979=_0x5f37ba[_0x52677e(0x69)](_0x36ac03),_0x54c512=LP_INVARIANT['div'](_0x5e7979)[_0x52677e(0x90)](BigNumber[_0x52677e(0x109)]),_0x2ba64d=_0x3ac765[_0x52677e(0xec)](_0x54c512);$(_0x52677e(0x6a))['val'](valueMoveCommaLeft(_0x2ba64d,DECIMALS_TOKEN)[_0x52677e(0x10c)](DECIMALS_6));}displayPrice(_0x3a9129,_0x36ac03);}}}});});}setInputFilter(document[a0_0x1a5825(0x7c)]('swap_from_input'),function(_0x1d928d){const _0x2e7400=a0_0x1a5825;return/^-?\d*[.]?\d{0,6}$/[_0x2e7400(0xa7)](_0x1d928d);}),setInputFilter(document[a0_0x1a5825(0x7c)](a0_0x1a5825(0xdc)),function(_0x4da712){const _0x5537f4=a0_0x1a5825;return/^-?\d*[.]?\d{0,6}$/[_0x5537f4(0xa7)](_0x4da712);}),$(function(){const _0x5a1337=a0_0x1a5825;$(_0x5a1337(0xc1))[_0x5a1337(0xb8)](function(_0x20be0d){const _0x12c889=_0x5a1337;_0x20be0d[_0x12c889(0x76)]();if($('#swap_from_stable')['prop'](_0x12c889(0xb0))==!![]){$(_0x12c889(0xd0))['prop']('hidden',![]),$('#swap_from_token')[_0x12c889(0xdf)](_0x12c889(0xb0),!![]),$(_0x12c889(0x97))[_0x12c889(0xdf)](_0x12c889(0xb0),!![]),$(_0x12c889(0x6b))[_0x12c889(0xdf)](_0x12c889(0xb0),![]),$(_0x12c889(0x6f))[_0x12c889(0xdf)]('src',IMG_STABLE_URL),$(_0x12c889(0xd7))[_0x12c889(0xdf)](_0x12c889(0x75),IMG_TOKEN_URL);let _0x595e33=$(_0x12c889(0xa8))[_0x12c889(0xd9)](),_0x528722=$(_0x12c889(0x6a))[_0x12c889(0xd9)]();$('#swap_from_input')['val'](_0x528722),$(_0x12c889(0x6a))[_0x12c889(0xd9)](_0x595e33),document[_0x12c889(0x7c)](_0x12c889(0x8e))[_0x12c889(0xb5)]();}else{$(_0x12c889(0xd0))['prop'](_0x12c889(0xb0),!![]),$(_0x12c889(0xf8))['prop']('hidden',![]),$(_0x12c889(0x97))[_0x12c889(0xdf)]('hidden',![]),$('#swap_to_token')[_0x12c889(0xdf)](_0x12c889(0xb0),!![]),$(_0x12c889(0x6f))['prop'](_0x12c889(0x75),IMG_TOKEN_URL),$('#swap_to_img')[_0x12c889(0xdf)](_0x12c889(0x75),IMG_STABLE_URL);let _0x3abafc=$(_0x12c889(0xa8))['val'](),_0x223428=$('#swap_to_input')[_0x12c889(0xd9)]();$(_0x12c889(0xa8))[_0x12c889(0xd9)](_0x223428),$(_0x12c889(0x6a))[_0x12c889(0xd9)](_0x3abafc),document[_0x12c889(0x7c)](_0x12c889(0x8e))['focus']();}}),$(_0x5a1337(0xeb))[_0x5a1337(0xb8)](function(_0x316ec2){const _0x1ad50d=_0x5a1337;_0x316ec2[_0x1ad50d(0x76)](),($('#swap_from_input')[_0x1ad50d(0xdf)](_0x1ad50d(0x105))!=!![]||$(_0x1ad50d(0x6a))[_0x1ad50d(0xdf)](_0x1ad50d(0x105))!=!![])&&($(_0x1ad50d(0xd0))['prop']('hidden')==!![]?($(_0x1ad50d(0xa8))['val'](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x1ad50d(0x10c)](DECIMALS_6)),document[_0x1ad50d(0x7c)]('swap_from_input')[_0x1ad50d(0xb5)]()):($(_0x1ad50d(0x6a))[_0x1ad50d(0xd9)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x1ad50d(0x10c)](DECIMALS_6)),document['getElementById']('swap_to_input')[_0x1ad50d(0xb5)]()));}),$(_0x5a1337(0xe9))[_0x5a1337(0xb8)](function(_0x582bb2){const _0x413aa4=_0x5a1337;_0x582bb2['preventDefault'](),($(_0x413aa4(0xa8))[_0x413aa4(0xdf)]('disabled')!=!![]||$(_0x413aa4(0x6a))[_0x413aa4(0xdf)]('disabled')!=!![])&&($(_0x413aa4(0xd0))[_0x413aa4(0xdf)]('hidden')==!![]?($('#swap_to_input')[_0x413aa4(0xd9)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document[_0x413aa4(0x7c)](_0x413aa4(0xdc))['focus']()):($(_0x413aa4(0xa8))[_0x413aa4(0xd9)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0x413aa4(0x10c)](DECIMALS_6)),document['getElementById'](_0x413aa4(0x8e))[_0x413aa4(0xb5)]()));});});async function sendTransaction(_0x5905ac,_0x19a9ff,_0xf6641f,_0x59f53e){const _0x4bc4b4=a0_0x1a5825;console['log']('sendTransaction\x20('+_0x5905ac+'):\x20START');let _0xb3966d=![];$(_0x4bc4b4(0xdb))['html'](_0x4bc4b4(0x8c));try{let _0x442992=await _0x19a9ff()[_0x4bc4b4(0x10b)]();console['log'](_0x4bc4b4(0xab)+_0x5905ac+_0x4bc4b4(0xa0));if(_0xf6641f){$(_0x4bc4b4(0xdb))['html'](_0x4bc4b4(0x8d)+_0x5905ac+_0x4bc4b4(0x108)+TRANSACTION_URL+_0x442992+'\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>'+shortenString(_0x442992)+'</a>\x20to\x20be\x20confirmed...</span>');let _0x3e5984,_0x5209aa=![];try{_0x3e5984=await _0xf6641f()[_0x4bc4b4(0xd3)]({'filters':_0x59f53e},(_0x546eb7,_0x4fae3d)=>{const _0x22d22a=_0x4bc4b4;_0x4fae3d&&($(_0x22d22a(0xdb))[_0x22d22a(0xf1)](_0x22d22a(0x102)+_0x5905ac+_0x22d22a(0x108)+TRANSACTION_URL+_0x442992+_0x22d22a(0x103)+shortenString(_0x442992)+'</a>\x20confirmed</span>'),_0x3e5984[_0x22d22a(0x107)](),_0x5209aa=!![],console['log'](_0x22d22a(0xab)+_0x5905ac+_0x22d22a(0x9b))),_0x546eb7&&console[_0x22d22a(0x91)](_0x546eb7);});}catch(_0x59c085){$(_0x4bc4b4(0xdb))['html'](_0x4bc4b4(0x94)+_0x5905ac+_0x4bc4b4(0x108)+TRANSACTION_URL+_0x442992+_0x4bc4b4(0xb6)+shortenString(_0x442992)+_0x4bc4b4(0xe1)),_0x3e5984['stop'](),_0x5209aa=!![],_0xb3966d=!![];}setTimeout(function(){const _0x58723d=_0x4bc4b4;!_0x5209aa&&($(_0x58723d(0xdb))[_0x58723d(0xf1)](_0x58723d(0x94)+_0x5905ac+_0x58723d(0x108)+TRANSACTION_URL+_0x442992+_0x58723d(0xb6)+shortenString(_0x442992)+'</a>\x20confirmation\x20timeout.\x20Please\x20manually\x20check\x20confirmation\x20status</span>'),_0x3e5984&&_0x3e5984[_0x58723d(0x107)](),_0x5209aa=!![],_0xb3966d=!![]);},0x4e20),await new Promise(_0x1ed511=>{const _0x180d6f=setInterval(()=>{_0x5209aa&&(_0x1ed511(),clearInterval(_0x180d6f));;},0x3e8);});}else $(_0x4bc4b4(0xdb))[_0x4bc4b4(0xf1)](_0x4bc4b4(0x102)+_0x5905ac+'\x20transaction\x20<a\x20href=\x22'+TRANSACTION_URL+_0x442992+_0x4bc4b4(0x103)+shortenString(_0x442992)+_0x4bc4b4(0x71));}catch(_0x50693f){let _0x10e65f;return _0x50693f[_0x4bc4b4(0x9f)]?(_0x10e65f=_0x50693f[_0x4bc4b4(0x9f)],_0x10e65f=='AccountResourceInsufficient\x20error'&&(_0x10e65f=_0x4bc4b4(0x82))):_0x10e65f=_0x50693f,$(_0x4bc4b4(0xdb))['html']('<span\x20class=\x22text-danger\x22>'+_0x10e65f+'</span>'),[!![],!![]];}return[![],_0xb3966d];}$(function(){'use strict';const _0x309beb=a0_0x1a5825;var _0x28aeb3=document[_0x309beb(0xe5)]('.swap_form');Array[_0x309beb(0xc3)][_0x309beb(0x104)]['call'](_0x28aeb3)[_0x309beb(0x84)](function(_0x58d5c8){const _0x1e3d15=_0x309beb;_0x58d5c8['addEventListener'](_0x1e3d15(0xac),async function(_0x4fc39d){const _0x37cbda=_0x1e3d15;_0x4fc39d[_0x37cbda(0x76)](),_0x4fc39d[_0x37cbda(0x7b)]();let _0x1b0afb=null,_0x2895fa=null,_0x360896=null;$('#swap_from_stable')[_0x37cbda(0xdf)](_0x37cbda(0xb0))==!![]?(_0x360896=!![],_0x1b0afb=valueMoveCommaRight($(_0x37cbda(0xa8))[_0x37cbda(0xd9)](),DECIMALS_TOKEN),_0x2895fa=valueMoveCommaRight($('#swap_to_input')['val'](),DECIMALS_STABLE)):(_0x360896=![],_0x1b0afb=valueMoveCommaRight($(_0x37cbda(0x6a))['val'](),DECIMALS_TOKEN),_0x2895fa=valueMoveCommaRight($(_0x37cbda(0xa8))['val'](),DECIMALS_STABLE));console[_0x37cbda(0x91)](_0x37cbda(0xfa)+_0x1b0afb+',\x20stableVal\x20=\x20'+_0x2895fa);let _0x11e0d0=![],_0x477143=![];if(_0x1b0afb[_0x37cbda(0xb9)]()||_0x2895fa[_0x37cbda(0xb9)]()||_0x1b0afb['isLessThanOrEqualTo'](0x0)||_0x2895fa[_0x37cbda(0xd2)](0x0))$(_0x37cbda(0xdb))[_0x37cbda(0xf1)](_0x37cbda(0x88)),_0x11e0d0=!![];else{if(_0x360896&&_0x1b0afb['isGreaterThan'](balanceToken))$(_0x37cbda(0xdb))['html']('<span\x20class=\x22text-danger\x22>Your\x20'+NAME_TOKEN+'\x20balance\x20is\x20too\x20low</span>'),_0x11e0d0=!![];else!_0x360896&&_0x2895fa[_0x37cbda(0xfe)](balanceStable)&&($(_0x37cbda(0xdb))[_0x37cbda(0xf1)]('<span\x20class=\x22text-danger\x22>Your\x20'+NAME_STABLE+_0x37cbda(0x85)),_0x11e0d0=!![]);}enableControls(![]),_0x11e0d0==![]&&(!_0x360896?_0x2895fa['isGreaterThan'](allowanceStable)&&([_0x11e0d0,_0x477143]=await sendTransaction(_0x37cbda(0xca)+NAME_STABLE+_0x37cbda(0xd5),function(){const _0x55f8db=_0x37cbda;return stable[_0x55f8db(0xb4)](CONTRACT_LP,_0x55f8db(0xb1));},function(){const _0x134a3e=_0x37cbda;return stable[_0x134a3e(0xad)]();},{'TRC20_STABLE_APPROVE_OWNER':window['tronWeb'][_0x37cbda(0xbc)][_0x37cbda(0xa2)],'TRC20_STABLE_APPROVE_SPENDER':CONTRACT_LP,'TRC20_STABLE_APPROVE_VALUE':'340282366920938463463374607431768211455'})):_0x1b0afb[_0x37cbda(0xfe)](allowanceToken)&&([_0x11e0d0,_0x477143]=await sendTransaction(_0x37cbda(0xca)+NAME_TOKEN+_0x37cbda(0xd5),function(){return token['approve'](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');},function(){return token['Approval']();},{'TRC20_TOKEN_APPROVE_OWNER':window[_0x37cbda(0x6e)][_0x37cbda(0xbc)][_0x37cbda(0xa2)],'TRC20_TOKEN_APPROVE_SPENDER':CONTRACT_LP,'TRC20_TOKEN_APPROVE_VALUE':_0x37cbda(0x7d)}))),_0x11e0d0==![]&&_0x477143==![]&&(!_0x360896?[_0x11e0d0,_0x477143]=await sendTransaction(_0x37cbda(0xf0)+NAME_STABLE+_0x37cbda(0xda)+NAME_TOKEN+_0x37cbda(0xd5),function(){const _0x402d4f=_0x37cbda;return liquidityPool[_0x402d4f(0xf5)](_0x1b0afb[_0x402d4f(0x10c)](0x0),_0x2895fa[_0x402d4f(0x69)](_0x2895fa[_0x402d4f(0xef)](0x64))[_0x402d4f(0x10c)](0x0));}):[_0x11e0d0,_0x477143]=await sendTransaction(_0x37cbda(0xf0)+NAME_TOKEN+_0x37cbda(0xda)+NAME_STABLE+_0x37cbda(0xd5),function(){const _0x2a14f9=_0x37cbda;return liquidityPool[_0x2a14f9(0xd1)](_0x1b0afb[_0x2a14f9(0x10c)](0x0),_0x2895fa['minus'](_0x2895fa[_0x2a14f9(0xef)](0x64))['toFixed'](0x0));})),enableControls(!![]);},![]);});});var countDownDate=new Date('Nov\x208,\x202021\x2020:00:0')[a0_0x1a5825(0x100)](),x=setInterval(function(){const _0x16f67c=a0_0x1a5825;var _0x383787=new Date()['getTime'](),_0x3109cd=countDownDate-_0x383787,_0x123784=Math[_0x16f67c(0xdd)](_0x3109cd/(0x3e8*0x3c*0x3c*0x18)),_0x335418=Math[_0x16f67c(0xdd)](_0x3109cd%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0x5e0e62=Math[_0x16f67c(0xdd)](_0x3109cd%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x7088b0=Math[_0x16f67c(0xdd)](_0x3109cd%(0x3e8*0x3c)/0x3e8);_0x3109cd<0x0?(clearInterval(x),$(_0x16f67c(0xd4))['prop']('hidden',!![])):($(_0x16f67c(0xd4))[_0x16f67c(0xdf)](_0x16f67c(0xb0),![]),$(_0x16f67c(0x6d))['text'](_0x16f67c(0xd6)+_0x123784+'d\x20'+_0x335418+'h\x20'+_0x5e0e62+'m\x20'+_0x7088b0+'s'));},0x3e8);