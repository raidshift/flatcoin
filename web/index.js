const a0_0x146e56=a0_0x2521;function a0_0x2eef(){const _0x5356b5=['isLessThanOrEqualTo','text','selectionEnd','swap_to_input','contract','length','reload','request','input','#swap_to_img','.stableName','#swap_from_stable','tron_requestAccounts','#swap_from_img','log','\x20balance\x20is\x20too\x20low</span>','remaining','0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF','1000000000','finally','<div\x20class=\x22spinner-border\x20spinner-border-xs\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting\x20for\x20signature...</span></div><span\x20class=\x22text-warning\x22>&nbsp;Waiting\x20for\x20','tokenBalance','getTime','99lDCnAt','.launch_count_down','test','prop','disabled','address','90LnlxTG','FLAT','.balanceToken','.tokenBalanceContract','<span\x20class=\x22text-warning\x22>Please\x20enter\x20valid\x20values</span>','oldValue','<span\x20class=\x22fw-bold\x22>Approve\x20(','deposit','#swap_input_balance_token','.connect-msg','343055cnlwtA','blur','base58',')\x20END','allowance','.balanceStable','tokenVal\x20=\x20','html','.currentMarketPrice','#swap_from_token','location','href','selectionStart','726363sDGRdM','oldSelectionStart','stableBalance','...','hasOwnProperty','getElementById','prototype','STOPPING\x20CONTRACT\x20DATA\x20FEED\x20','catch','substr','.account','code','join','balanceOf','forEach','message','\x20transaction\x20signature\x20...</span>','91684hSbkps','toString','tronWeb','#swap_input_balance_stable','value','4446574XBLdZP','<span\x20class=\x22text-warning\x22>','\x20transaction\x20<a\x20href=\x22','oldSelectionEnd','balanceFeedInterval\x20cleared','toFixed','querySelectorAll','floor','preventDefault','ROUND_FLOOR','Nov\x208,\x202021\x2020:00:0','isNaN','click','.tokenName','focus','action','hidden','64vfaQgD','contextmenu','times','owner','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','30lnmmWD','setSelectionRange','Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds','plus','swap_from_input','</span>','window','slice','drop','#swap_from_input','<span\x20class=\x22fw-bold\x22>Swap\x20(','.validationMsg','TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ','FLAT_128.png','#switch_btn','SEND\x20TRANSACTION\x20(','#swap_to_stable','\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>','then','#swap_to_token','defaultAddress',',\x20stableVal\x20=\x20','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','isLessThan','stopPropagation','select','send','.stableBalanceContract','spender','val','src','minus','withdraw','6534512GkpWOE','mousedown','call','data','addEventListener',')</span>','#swap_to_input','replace','div','2742TrJbKH','keydown','.swap_form','isGreaterThan','integerValue','4028304QlAjYP','approve'];a0_0x2eef=function(){return _0x5356b5;};return a0_0x2eef();}(function(_0x2da7f0,_0x105a42){const _0x37c435=a0_0x2521,_0x199f58=_0x2da7f0();while(!![]){try{const _0x1c4493=-parseInt(_0x37c435(0xb3))/0x1*(-parseInt(_0x37c435(0xe2))/0x2)+-parseInt(_0x37c435(0x100))/0x3*(-parseInt(_0x37c435(0x9d))/0x4)+parseInt(_0x37c435(0x7f))/0x5*(-parseInt(_0x37c435(0xb8))/0x6)+-parseInt(_0x37c435(0xe7))/0x7+parseInt(_0x37c435(0xd9))/0x8+parseInt(_0x37c435(0x8c))/0x9*(-parseInt(_0x37c435(0x75))/0xa)+parseInt(_0x37c435(0xa2))/0xb;if(_0x1c4493===_0x105a42)break;else _0x199f58['push'](_0x199f58['shift']());}catch(_0x4fbd45){_0x199f58['push'](_0x199f58['shift']());}}}(a0_0x2eef,0x669c7));let CONTRACT_LP='TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs',CONTRACT_TOKEN=a0_0x146e56(0xc4),CONTRACT_STABLE=a0_0x146e56(0xce);TRONSCAN_URL_PREFIX='https://tronscan.io';let ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=!![],IMG_TOKEN_URL=a0_0x146e56(0xc5),IMG_STABLE_URL='USDT_128.png',NAME_TOKEN=a0_0x146e56(0x76),NAME_STABLE='USDT',DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY='1000000000000',STABLE_BALANCE_OFFSET=a0_0x146e56(0xfb),LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)[a0_0x146e56(0xb5)](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+'/#/contract/'+CONTRACT_LP+'/code',TRANSACTION_URL=TRONSCAN_URL_PREFIX+'/#/transaction/',TRC20_TOKEN_APPROVE_OWNER='owner',TRC20_TOKEN_APPROVE_SPENDER=a0_0x146e56(0xd4),TRC20_TOKEN_APPROVE_VALUE=a0_0x146e56(0xa1),TRC20_STABLE_APPROVE_OWNER=a0_0x146e56(0xb6),TRC20_STABLE_APPROVE_SPENDER='spender',TRC20_STABLE_APPROVE_VALUE=a0_0x146e56(0xa1),token=null,stable=null,liquidityPool=null,balanceFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null;const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0;cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function shortenString(_0x450a3a){const _0x1c1d49=a0_0x146e56;let _0x1062f0=_0x450a3a;return _0x1062f0['substr'](0x0,0x5)+_0x1c1d49(0x8f)+_0x1062f0[_0x1c1d49(0x95)](_0x1062f0[_0x1c1d49(0xee)]-0x5,_0x1062f0['length']);}function a0_0x2521(_0x500a0f,_0xd852e7){const _0x2eef63=a0_0x2eef();return a0_0x2521=function(_0x2521c7,_0x2e5f25){_0x2521c7=_0x2521c7-0x70;let _0x1f4446=_0x2eef63[_0x2521c7];return _0x1f4446;},a0_0x2521(_0x500a0f,_0xd852e7);}function valueMoveCommaLeft(_0xb791f5,_0x2e1015){return BigNumber(_0xb791f5)['div'](0xa**_0x2e1015);}function valueMoveCommaRight(_0x2734cb,_0x2ea4c4){const _0x334b02=a0_0x146e56;return BigNumber(_0x2734cb)[_0x334b02(0xb5)](0xa**_0x2ea4c4);}function adjustDecimals(_0x262605){const _0x40db00=a0_0x146e56;let _0x4b68ba,_0x1be5f4=BigNumber(_0x262605);if(_0x1be5f4[_0x40db00(0xcf)](0x1))_0x4b68ba=DECIMALS_6;else _0x1be5f4[_0x40db00(0xcf)](0x2710)?_0x4b68ba=DECIMALS_2:_0x4b68ba=DECIMALS_0;return _0x1be5f4['toFixed'](_0x4b68ba)['replace'](cropZerosRegEx,'$1');}function numberWithCommas(_0x524419){const _0x47956a=a0_0x146e56;var _0x41c281=_0x524419[_0x47956a(0x9e)]()['split']('.');return _0x41c281[0x0]=_0x41c281[0x0]['replace'](/\B(?=(\d{3})+(?!\d))/g,','),_0x41c281[_0x47956a(0x98)]('.');}async function getContractData(){const _0x20fd0e=a0_0x146e56;await new Promise(_0x2a334a=>setTimeout(_0x2a334a,0x64)),balanceToken=String(await token[_0x20fd0e(0x99)](window[_0x20fd0e(0x9f)][_0x20fd0e(0xcc)][_0x20fd0e(0x81)])['call']()),await new Promise(_0x58d9c7=>setTimeout(_0x58d9c7,0x64)),balanceStable=String(await stable[_0x20fd0e(0x99)](window['tronWeb'][_0x20fd0e(0xcc)][_0x20fd0e(0x81)])['call']()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token['allowance'](window[_0x20fd0e(0x9f)][_0x20fd0e(0xcc)][_0x20fd0e(0x81)],CONTRACT_LP)['call']())[_0x20fd0e(0xf9)]):allowanceToken=String(await token[_0x20fd0e(0x83)](window[_0x20fd0e(0x9f)][_0x20fd0e(0xcc)][_0x20fd0e(0x81)],CONTRACT_LP)[_0x20fd0e(0xdb)]()),await new Promise(_0x40d846=>setTimeout(_0x40d846,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable[_0x20fd0e(0x83)](window[_0x20fd0e(0x9f)][_0x20fd0e(0xcc)][_0x20fd0e(0x81)],CONTRACT_LP)['call']())[_0x20fd0e(0xf9)]):allowanceStable=String(await stable['allowance'](window[_0x20fd0e(0x9f)]['defaultAddress'][_0x20fd0e(0x81)],CONTRACT_LP)['call']()),await new Promise(_0x282616=>setTimeout(_0x282616,0x64)),tokenBalanceContract=String(await liquidityPool[_0x20fd0e(0xfe)]()['call']()),await new Promise(_0xf0a959=>setTimeout(_0xf0a959,0x64)),stableBalanceContract=String(await liquidityPool[_0x20fd0e(0x8e)]()[_0x20fd0e(0xdb)]()),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)[_0x20fd0e(0xbb)](STABLE_BALANCE_OFFSET)[_0x20fd0e(0xe1)](tokenBalanceContract)[_0x20fd0e(0xa7)](DECIMALS_6)),$(_0x20fd0e(0x77))[_0x20fd0e(0xea)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x20fd0e(0xa7)](DECIMALS_6)[_0x20fd0e(0xe0)](cropZerosRegEx,'$1')),$(_0x20fd0e(0x84))[_0x20fd0e(0xea)](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)['toFixed'](DECIMALS_6)['replace'](cropZerosRegEx,'$1')),$(_0x20fd0e(0x78))[_0x20fd0e(0xea)](numberWithCommas(valueMoveCommaLeft(tokenBalanceContract,DECIMALS_TOKEN)[_0x20fd0e(0xa7)](DECIMALS_6)['replace'](cropZerosRegEx,'$1'))),$(_0x20fd0e(0xd3))[_0x20fd0e(0xea)](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)[_0x20fd0e(0xa7)](DECIMALS_6)[_0x20fd0e(0xe0)](cropZerosRegEx,'$1'))),$(_0x20fd0e(0x87))['text'](numberWithCommas(currentMarketPrice)),$(_0x20fd0e(0x96))['text'](shortenString(window['tronWeb'][_0x20fd0e(0xcc)][_0x20fd0e(0x81)])),enableControls(!![]);}async function startContractDataFeed(){const _0x14a17d=a0_0x146e56;try{balanceFeedInterval==null&&(console[_0x14a17d(0xf7)]('STARTING\x20CONTRACT\x20DATA\x20FEED\x20'),await getContractData(),balanceFeedInterval=setInterval(async function(){await getContractData();},0x2710));}catch(_0x496529){}}function stopContractDataFeed(){const _0x273aa0=a0_0x146e56;console['log'](_0x273aa0(0x93)),balanceFeedInterval!=null&&(clearInterval(balanceFeedInterval),balanceFeedInterval=null,console['log'](_0x273aa0(0xa6)));}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![],ALLOW_ENABLE_CONTROLS=!![];function showConnectionMsg(_0x55bd56){const _0x5a2374=a0_0x146e56;$(_0x5a2374(0x7e))[_0x5a2374(0x72)](_0x5a2374(0xb2),!_0x55bd56);}function enableControls(_0x23b671){_0x23b671&&!ALLOW_ENABLE_CONTROLS&&(_0x23b671=![]);}$(document)['ready'](async function(){const _0x2fb3d8=a0_0x146e56;showConnectionMsg(!![]),$('.contractLPCodeURL')[_0x2fb3d8(0x72)](_0x2fb3d8(0x8a),CONTRACT_LP_NETWORK_URL),$(_0x2fb3d8(0xaf))[_0x2fb3d8(0xea)](NAME_TOKEN),$(_0x2fb3d8(0xf3))[_0x2fb3d8(0xea)](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()[_0x2fb3d8(0xfc)](()=>{LOCK=![];});});async function initialize(){const _0x3dce08=a0_0x146e56;console[_0x3dce08(0xf7)]('INITIALIZING');try{await tronLinkReady(),await getTronWeb(),await startContractDataFeed();}catch(_0x182086){console[_0x3dce08(0xf7)]('INITIALIZING\x20FAILED:'+_0x182086),showConnectionMsg(!![]),enableControls(![]),stopContractDataFeed();}}async function getTronWeb(){const _0x31b6dc=a0_0x146e56;try{const _0x768b11=await tronLink[_0x31b6dc(0xf0)]({'method':_0x31b6dc(0xf5)});if(_0x768b11[_0x31b6dc(0x97)]!=0xc8)throw _0x768b11;token=await tronWeb['contract']()['at'](CONTRACT_TOKEN),stable=await tronWeb[_0x31b6dc(0xed)]()['at'](CONTRACT_STABLE),liquidityPool=await tronWeb[_0x31b6dc(0xed)]()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0x50aef3){showConnectionMsg(!![]),enableControls(![]);throw _0x50aef3;}}async function tronLinkReady(){await new Promise(_0x142276=>{const _0x11bbdb=setInterval(()=>{const _0x1d0c73=a0_0x2521;if(window[_0x1d0c73(0x9f)]&&window[_0x1d0c73(0x9f)][_0x1d0c73(0xcc)][_0x1d0c73(0x81)])return clearInterval(_0x11bbdb),_0x142276();},0x64);});}setInterval(function(){const _0x296643=a0_0x146e56,_0xdbe9fa=tronWeb['defaultAddress'][_0x296643(0x81)];if(!PREV_ACCOUNT&&_0xdbe9fa)PREV_ACCOUNT=_0xdbe9fa;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0xdbe9fa&&window[_0x296643(0x89)][_0x296643(0xef)]();},0x3e8),window[a0_0x146e56(0xdd)](a0_0x146e56(0x9b),async function(_0x4f995c){const _0x265db5=a0_0x146e56;_0x4f995c[_0x265db5(0xdc)][_0x265db5(0x9b)]&&_0x4f995c[_0x265db5(0xdc)]['message'][_0x265db5(0xb1)]=='setAccount'&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x4f995c['data']['message']['data'][_0x265db5(0x74)],(addr==undefined||addr==null||!addr)&&window[_0x265db5(0x89)][_0x265db5(0xef)](),!INITIALIZED?await initialize():await getTronWeb()[_0x265db5(0xca)](()=>{})[_0x265db5(0x94)](_0x2d6354=>{const _0x657305=_0x265db5;this[_0x657305(0xbe)][_0x657305(0x89)][_0x657305(0xef)]();}),LOCK=![]));});function displayPrice(_0x4a48cd,_0xb32797){const _0x52af29=a0_0x146e56;_0x4a48cd[_0x52af29(0xe5)](0x0)&&_0xb32797['isGreaterThan'](0x0)&&$('.price')[_0x52af29(0xea)](_0xb32797['div'](_0x4a48cd)[_0x52af29(0xa7)](DECIMALS_6));}function setInputFilter(_0x56f5d3,_0x1aabcb){const _0x4bc475=a0_0x146e56;[_0x4bc475(0xf1),_0x4bc475(0xe3),'keyup',_0x4bc475(0xda),'mouseup',_0x4bc475(0xd1),_0x4bc475(0xb4),_0x4bc475(0xc0),_0x4bc475(0x80),_0x4bc475(0xb0)][_0x4bc475(0x9a)](function(_0x5cafbd){const _0x2060f0=_0x4bc475;_0x56f5d3[_0x2060f0(0xdd)](_0x5cafbd,function(){const _0x4eb879=_0x2060f0;if(_0x1aabcb(this[_0x4eb879(0xa1)]))this['oldValue']=this[_0x4eb879(0xa1)],this[_0x4eb879(0x8d)]=this[_0x4eb879(0x8b)],this[_0x4eb879(0xa5)]=this[_0x4eb879(0xeb)];else this[_0x4eb879(0x90)](_0x4eb879(0x7a))?(this[_0x4eb879(0xa1)]=this[_0x4eb879(0x7a)],this[_0x4eb879(0xb9)](this[_0x4eb879(0x8d)],this['oldSelectionEnd'])):this[_0x4eb879(0xa1)]='';if(_0x56f5d3['id']==_0x4eb879(0xbc)){if($('#swap_from_stable')[_0x4eb879(0x72)](_0x4eb879(0xb2))==!![]){const _0x4c1de3=$(_0x4eb879(0xc1))['val']();if(!(_0x4c1de3==''||_0x4c1de3<=0x0||this[_0x4eb879(0xa1)]==''||this[_0x4eb879(0xa1)]<=0x0)){let _0x354e61=BigNumber(valueMoveCommaRight($(_0x4eb879(0xc1))[_0x4eb879(0xd5)](),DECIMALS_TOKEN)),_0x679fee=BigNumber(tokenBalanceContract),_0x1a8fa3=BigNumber(stableBalanceContract)[_0x4eb879(0xbb)](STABLE_BALANCE_OFFSET),_0x505218=_0x679fee['plus'](_0x354e61),_0x535f94=LP_INVARIANT[_0x4eb879(0xe1)](_0x505218)[_0x4eb879(0xe6)](BigNumber[_0x4eb879(0xab)]),_0x28c7c7=_0x1a8fa3[_0x4eb879(0xd7)](_0x535f94);_0x505218[_0x4eb879(0xe5)](TOKEN_MAX_SUPPLY)&&(_0x28c7c7=BigNumber(0x0));$('#swap_to_input')[_0x4eb879(0xd5)](valueMoveCommaLeft(_0x28c7c7,DECIMALS_STABLE)[_0x4eb879(0xa7)](DECIMALS_6));if(_0x5cafbd=='blur'){let _0x42bb77=_0x1a8fa3['minus'](_0x28c7c7),_0x31fc4d=LP_INVARIANT[_0x4eb879(0xe1)](_0x42bb77)['integerValue'](BigNumber[_0x4eb879(0xab)]),_0x1c387e=_0x31fc4d[_0x4eb879(0xd7)](_0x679fee);$(_0x4eb879(0xc1))[_0x4eb879(0xd5)](valueMoveCommaLeft(_0x1c387e,DECIMALS_TOKEN)['toFixed'](DECIMALS_6));}displayPrice(_0x354e61,_0x28c7c7);}}else{const _0x440524=$('#swap_from_input')[_0x4eb879(0xd5)]();if(!(_0x440524==''||_0x440524<=0x0||this[_0x4eb879(0xa1)]==''||this[_0x4eb879(0xa1)]<=0x0)){let _0x5b0d72=BigNumber(valueMoveCommaRight($('#swap_from_input')['val'](),DECIMALS_STABLE)),_0x860c94=BigNumber(tokenBalanceContract),_0x191d2a=BigNumber(stableBalanceContract)[_0x4eb879(0xbb)](STABLE_BALANCE_OFFSET),_0x29945f=_0x191d2a[_0x4eb879(0xbb)](_0x5b0d72),_0x58fb5c=LP_INVARIANT['div'](_0x29945f)[_0x4eb879(0xe6)](BigNumber[_0x4eb879(0xab)]),_0x32dcb7=_0x860c94[_0x4eb879(0xd7)](_0x58fb5c);$(_0x4eb879(0xdf))[_0x4eb879(0xd5)](valueMoveCommaLeft(_0x32dcb7,DECIMALS_TOKEN)[_0x4eb879(0xa7)](DECIMALS_6));if(_0x5cafbd==_0x4eb879(0x80)){let _0x5b13dc=_0x860c94[_0x4eb879(0xd7)](_0x32dcb7),_0x23048f=LP_INVARIANT[_0x4eb879(0xe1)](_0x5b13dc)[_0x4eb879(0xe6)](BigNumber[_0x4eb879(0xab)]),_0x58b6c7=_0x23048f[_0x4eb879(0xd7)](_0x191d2a);$('#swap_from_input')[_0x4eb879(0xd5)](valueMoveCommaLeft(_0x58b6c7,DECIMALS_STABLE)['toFixed'](DECIMALS_6));}displayPrice(_0x32dcb7,_0x5b0d72);}}}if(_0x56f5d3['id']==_0x4eb879(0xec)){if($(_0x4eb879(0xf4))[_0x4eb879(0x72)]('hidden')==!![]){const _0x95f547=$(_0x4eb879(0xdf))['val']();if(!(_0x95f547==''||_0x95f547<=0x0||this[_0x4eb879(0xa1)]==''||this['value']<=0x0)){let _0x3e52c0=BigNumber(valueMoveCommaRight($(_0x4eb879(0xdf))[_0x4eb879(0xd5)](),DECIMALS_STABLE)),_0x237de3=BigNumber(tokenBalanceContract),_0x5268d1=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x4a556f=_0x5268d1[_0x4eb879(0xd7)](_0x3e52c0),_0x2cdba6=LP_INVARIANT[_0x4eb879(0xe1)](_0x4a556f)[_0x4eb879(0xe6)](BigNumber[_0x4eb879(0xab)]),_0x1c92f7=_0x2cdba6[_0x4eb879(0xd7)](_0x237de3);(_0x2cdba6[_0x4eb879(0xe5)](TOKEN_MAX_SUPPLY)||_0x4a556f<0x0)&&(_0x1c92f7=BigNumber(0x0));$(_0x4eb879(0xc1))[_0x4eb879(0xd5)](valueMoveCommaLeft(_0x1c92f7,DECIMALS_TOKEN)[_0x4eb879(0xa7)](DECIMALS_6));if(_0x5cafbd=='blur'){let _0x5590a5=_0x237de3['plus'](_0x1c92f7),_0x22b69e=LP_INVARIANT[_0x4eb879(0xe1)](_0x5590a5)['integerValue'](BigNumber['ROUND_FLOOR']),_0x1273e2=_0x5268d1['minus'](_0x22b69e);$(_0x4eb879(0xdf))['val'](valueMoveCommaLeft(_0x1273e2,DECIMALS_STABLE)[_0x4eb879(0xa7)](DECIMALS_6));}displayPrice(_0x1c92f7,_0x3e52c0);}}else{const _0x1af09d=$(_0x4eb879(0xdf))['val']();if(!(_0x1af09d==''||_0x1af09d<=0x0||this[_0x4eb879(0xa1)]==''||this['value']<=0x0)){let _0x1f8e13=BigNumber(valueMoveCommaRight($('#swap_to_input')[_0x4eb879(0xd5)](),DECIMALS_TOKEN)),_0x6f1558=BigNumber(tokenBalanceContract),_0x4c0c69=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x7e6ad3=_0x6f1558['minus'](_0x1f8e13),_0x5ef72f=LP_INVARIANT[_0x4eb879(0xe1)](_0x7e6ad3)[_0x4eb879(0xe6)](BigNumber[_0x4eb879(0xab)]),_0x22747b=_0x5ef72f[_0x4eb879(0xd7)](_0x4c0c69);_0x22747b[_0x4eb879(0xcf)](0x0)&&(_0x22747b=BigNumber(0x0));$(_0x4eb879(0xc1))[_0x4eb879(0xd5)](valueMoveCommaLeft(_0x22747b,DECIMALS_STABLE)[_0x4eb879(0xa7)](DECIMALS_6));if(_0x5cafbd==_0x4eb879(0x80)){let _0x41d721=_0x4c0c69[_0x4eb879(0xbb)](_0x22747b),_0x4bff2f=LP_INVARIANT['div'](_0x41d721)[_0x4eb879(0xe6)](BigNumber[_0x4eb879(0xab)]),_0x3dc66c=_0x6f1558[_0x4eb879(0xd7)](_0x4bff2f);$(_0x4eb879(0xdf))[_0x4eb879(0xd5)](valueMoveCommaLeft(_0x3dc66c,DECIMALS_TOKEN)[_0x4eb879(0xa7)](DECIMALS_6));}displayPrice(_0x1f8e13,_0x22747b);}}}});});}setInputFilter(document[a0_0x146e56(0x91)]('swap_from_input'),function(_0x37e07c){const _0x1b9fdf=a0_0x146e56;return/^-?\d*[.]?\d{0,6}$/[_0x1b9fdf(0x71)](_0x37e07c);}),setInputFilter(document[a0_0x146e56(0x91)]('swap_to_input'),function(_0xedfc98){const _0x576454=a0_0x146e56;return/^-?\d*[.]?\d{0,6}$/[_0x576454(0x71)](_0xedfc98);}),$(function(){const _0x532282=a0_0x146e56;$(_0x532282(0xc6))[_0x532282(0xae)](function(_0x1f58a7){const _0x8a74ac=_0x532282;_0x1f58a7[_0x8a74ac(0xaa)]();if($(_0x8a74ac(0xf4))[_0x8a74ac(0x72)](_0x8a74ac(0xb2))==!![]){$(_0x8a74ac(0xf4))['prop'](_0x8a74ac(0xb2),![]),$('#swap_from_token')[_0x8a74ac(0x72)](_0x8a74ac(0xb2),!![]),$(_0x8a74ac(0xc8))[_0x8a74ac(0x72)](_0x8a74ac(0xb2),!![]),$(_0x8a74ac(0xcb))[_0x8a74ac(0x72)]('hidden',![]),$(_0x8a74ac(0xf6))[_0x8a74ac(0x72)](_0x8a74ac(0xd6),IMG_STABLE_URL),$('#swap_to_img')['prop']('src',IMG_TOKEN_URL);let _0x405151=$(_0x8a74ac(0xc1))[_0x8a74ac(0xd5)](),_0x2c7caf=$(_0x8a74ac(0xdf))[_0x8a74ac(0xd5)]();$('#swap_from_input')['val'](_0x2c7caf),$(_0x8a74ac(0xdf))[_0x8a74ac(0xd5)](_0x405151),document[_0x8a74ac(0x91)](_0x8a74ac(0xbc))[_0x8a74ac(0xb0)]();}else{$(_0x8a74ac(0xf4))[_0x8a74ac(0x72)](_0x8a74ac(0xb2),!![]),$(_0x8a74ac(0x88))['prop'](_0x8a74ac(0xb2),![]),$(_0x8a74ac(0xc8))[_0x8a74ac(0x72)]('hidden',![]),$('#swap_to_token')[_0x8a74ac(0x72)](_0x8a74ac(0xb2),!![]),$(_0x8a74ac(0xf6))['prop']('src',IMG_TOKEN_URL),$(_0x8a74ac(0xf2))[_0x8a74ac(0x72)](_0x8a74ac(0xd6),IMG_STABLE_URL);let _0x1e082d=$(_0x8a74ac(0xc1))[_0x8a74ac(0xd5)](),_0x10b243=$(_0x8a74ac(0xdf))['val']();$('#swap_from_input')[_0x8a74ac(0xd5)](_0x10b243),$('#swap_to_input')[_0x8a74ac(0xd5)](_0x1e082d),document[_0x8a74ac(0x91)](_0x8a74ac(0xbc))[_0x8a74ac(0xb0)]();}}),$(_0x532282(0x7d))['click'](function(_0x21f504){const _0x23f816=_0x532282;_0x21f504[_0x23f816(0xaa)](),($('#swap_from_input')[_0x23f816(0x72)](_0x23f816(0x73))!=!![]||$(_0x23f816(0xdf))[_0x23f816(0x72)](_0x23f816(0x73))!=!![])&&($(_0x23f816(0xf4))[_0x23f816(0x72)](_0x23f816(0xb2))==!![]?($(_0x23f816(0xc1))[_0x23f816(0xd5)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x23f816(0xa7)](DECIMALS_6)),document[_0x23f816(0x91)](_0x23f816(0xbc))['focus']()):($(_0x23f816(0xdf))[_0x23f816(0xd5)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document[_0x23f816(0x91)](_0x23f816(0xec))[_0x23f816(0xb0)]()));}),$(_0x532282(0xa0))[_0x532282(0xae)](function(_0x13946e){const _0x3c2005=_0x532282;_0x13946e[_0x3c2005(0xaa)](),($(_0x3c2005(0xc1))[_0x3c2005(0x72)](_0x3c2005(0x73))!=!![]||$(_0x3c2005(0xdf))[_0x3c2005(0x72)]('disabled')!=!![])&&($(_0x3c2005(0xf4))[_0x3c2005(0x72)]('hidden')==!![]?($(_0x3c2005(0xdf))[_0x3c2005(0xd5)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0x3c2005(0xa7)](DECIMALS_6)),document[_0x3c2005(0x91)](_0x3c2005(0xec))[_0x3c2005(0xb0)]()):($('#swap_from_input')[_0x3c2005(0xd5)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0x3c2005(0xa7)](DECIMALS_6)),document[_0x3c2005(0x91)]('swap_from_input')[_0x3c2005(0xb0)]()));});});async function sendTransaction(_0x5119b6,_0x870f61,_0x4d9c22,_0x23735d){const _0x2f6929=a0_0x146e56;console[_0x2f6929(0xf7)](_0x2f6929(0xc7)+_0x5119b6+')\x20START');let _0x3a7f87=![];$(_0x2f6929(0xc3))['html'](_0x2f6929(0xfd)+_0x5119b6+_0x2f6929(0x9c));try{let _0x31f458=await _0x870f61()[_0x2f6929(0xd2)]();$(_0x2f6929(0xc3))['html'](_0x2f6929(0xa3)+_0x5119b6+_0x2f6929(0xa4)+TRANSACTION_URL+_0x31f458+_0x2f6929(0xc9)+shortenString(_0x31f458)+'</a>\x20submitted</span>');}catch(_0x109fcc){let _0x3097d9;return _0x109fcc[_0x2f6929(0x9b)]?(_0x3097d9=_0x109fcc[_0x2f6929(0x9b)],_0x3097d9=='AccountResourceInsufficient\x20error'&&(_0x3097d9=_0x2f6929(0xba))):_0x3097d9=_0x109fcc,$(_0x2f6929(0xc3))[_0x2f6929(0x86)](_0x2f6929(0xa3)+_0x3097d9+_0x2f6929(0xbd)),[!![],!![]];}return console[_0x2f6929(0xf7)](_0x2f6929(0xc7)+_0x5119b6+_0x2f6929(0x82)),[![],_0x3a7f87];}$(function(){'use strict';const _0x381f0c=a0_0x146e56;var _0x119b9e=document[_0x381f0c(0xa8)](_0x381f0c(0xe4));Array[_0x381f0c(0x92)][_0x381f0c(0xbf)][_0x381f0c(0xdb)](_0x119b9e)[_0x381f0c(0x9a)](function(_0x37590a){const _0x4b845c=_0x381f0c;_0x37590a[_0x4b845c(0xdd)]('submit',async function(_0x2b15fa){const _0x179b3f=_0x4b845c;_0x2b15fa['preventDefault'](),_0x2b15fa[_0x179b3f(0xd0)]();let _0x355050=null,_0x2c89f0=null,_0x15f119=null;$('#swap_from_stable')['prop']('hidden')==!![]?(_0x15f119=!![],_0x355050=valueMoveCommaRight($(_0x179b3f(0xc1))[_0x179b3f(0xd5)](),DECIMALS_TOKEN),_0x2c89f0=valueMoveCommaRight($(_0x179b3f(0xdf))['val'](),DECIMALS_STABLE)):(_0x15f119=![],_0x355050=valueMoveCommaRight($(_0x179b3f(0xdf))[_0x179b3f(0xd5)](),DECIMALS_TOKEN),_0x2c89f0=valueMoveCommaRight($(_0x179b3f(0xc1))[_0x179b3f(0xd5)](),DECIMALS_STABLE));console[_0x179b3f(0xf7)](_0x179b3f(0x85)+_0x355050+_0x179b3f(0xcd)+_0x2c89f0);let _0x3c3169=![],_0xc43c6a=![];if(_0x355050[_0x179b3f(0xad)]()||_0x2c89f0[_0x179b3f(0xad)]()||_0x355050['isLessThanOrEqualTo'](0x0)||_0x2c89f0[_0x179b3f(0xe9)](0x0))$(_0x179b3f(0xc3))[_0x179b3f(0x86)](_0x179b3f(0x79)),_0x3c3169=!![];else{if(_0x15f119&&_0x355050[_0x179b3f(0xe5)](balanceToken))$(_0x179b3f(0xc3))['html']('<span\x20class=\x22text-warning\x22>Your\x20'+NAME_TOKEN+'\x20balance\x20is\x20too\x20low</span>'),_0x3c3169=!![];else!_0x15f119&&_0x2c89f0[_0x179b3f(0xe5)](balanceStable)&&($('.validationMsg')['html']('<span\x20class=\x22text-warning\x22>Your\x20'+NAME_STABLE+_0x179b3f(0xf8)),_0x3c3169=!![]);}ALLOW_ENABLE_CONTROLS=![],enableControls(![]),_0x3c3169==![]&&(!_0x15f119?_0x2c89f0[_0x179b3f(0xe5)](allowanceStable)&&([_0x3c3169,_0xc43c6a]=await sendTransaction('<span\x20class=\x22fw-bold\x22>Approve\x20('+NAME_STABLE+_0x179b3f(0xde),function(){const _0x5d3768=_0x179b3f;return stable['approve'](CONTRACT_LP,_0x5d3768(0xfa));})):_0x355050['isGreaterThan'](allowanceToken)&&([_0x3c3169,_0xc43c6a]=await sendTransaction(_0x179b3f(0x7b)+NAME_TOKEN+_0x179b3f(0xde),function(){const _0x478a0f=_0x179b3f;return token[_0x478a0f(0xe8)](CONTRACT_LP,_0x478a0f(0xfa));}))),_0x3c3169==![]&&_0xc43c6a==![]&&(!_0x15f119?[_0x3c3169,_0xc43c6a]=await sendTransaction(_0x179b3f(0xc2)+NAME_STABLE+_0x179b3f(0xb7)+NAME_TOKEN+_0x179b3f(0xde),function(){const _0x180764=_0x179b3f;return liquidityPool[_0x180764(0xd8)](_0x355050[_0x180764(0xa7)](0x0),_0x2c89f0['plus'](_0x2c89f0[_0x180764(0xe1)](0x64))[_0x180764(0xa7)](0x0));}):[_0x3c3169,_0xc43c6a]=await sendTransaction(_0x179b3f(0xc2)+NAME_TOKEN+_0x179b3f(0xb7)+NAME_STABLE+_0x179b3f(0xde),function(){const _0x68446d=_0x179b3f;return liquidityPool[_0x68446d(0x7c)](_0x355050[_0x68446d(0xa7)](0x0),_0x2c89f0[_0x68446d(0xd7)](_0x2c89f0[_0x68446d(0xe1)](0x64))['toFixed'](0x0));})),ALLOW_ENABLE_CONTROLS=!![],enableControls(!![]);},![]);});});var countDownDate=new Date(a0_0x146e56(0xac))['getTime'](),x=setInterval(function(){const _0x22facd=a0_0x146e56;var _0x38d4a3=new Date()[_0x22facd(0xff)](),_0x14df2d=countDownDate-_0x38d4a3,_0x426d25=Math[_0x22facd(0xa9)](_0x14df2d/(0x3e8*0x3c*0x3c*0x18)),_0x595b97=Math[_0x22facd(0xa9)](_0x14df2d%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0x1d51c8=Math['floor'](_0x14df2d%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x455c55=Math[_0x22facd(0xa9)](_0x14df2d%(0x3e8*0x3c)/0x3e8);_0x14df2d<0x0?(clearInterval(x),$('.launch_count_down')['prop'](_0x22facd(0xb2),!![])):($(_0x22facd(0x70))[_0x22facd(0x72)](_0x22facd(0xb2),![]),$('.launch_text')[_0x22facd(0xea)]('Launch\x20in\x20'+_0x426d25+'d\x20'+_0x595b97+'h\x20'+_0x1d51c8+'m\x20'+_0x455c55+'s'));},0x3e8);