const a0_0x104f56=a0_0x1820;(function(_0x1ba41f,_0x1977dd){const _0x117335=a0_0x1820,_0x75e81b=_0x1ba41f();while(!![]){try{const _0x25a4b=-parseInt(_0x117335(0x173))/0x1+-parseInt(_0x117335(0x1b1))/0x2*(parseInt(_0x117335(0x142))/0x3)+-parseInt(_0x117335(0x1c2))/0x4+-parseInt(_0x117335(0x1c9))/0x5+parseInt(_0x117335(0x19d))/0x6*(-parseInt(_0x117335(0x13b))/0x7)+parseInt(_0x117335(0x1c4))/0x8*(parseInt(_0x117335(0x199))/0x9)+parseInt(_0x117335(0x19b))/0xa*(parseInt(_0x117335(0x1d6))/0xb);if(_0x25a4b===_0x1977dd)break;else _0x75e81b['push'](_0x75e81b['shift']());}catch(_0x46f6af){_0x75e81b['push'](_0x75e81b['shift']());}}}(a0_0x107e,0x7093c));let CONTRACT_LP=a0_0x104f56(0x16c),CONTRACT_LP_HEX='41D23A354622A509211C078E85EE9A2095CE424B8E',CONTRACT_TOKEN=a0_0x104f56(0x197),CONTRACT_STABLE=a0_0x104f56(0x16f),TRONSCAN_URL_PREFIX=a0_0x104f56(0x149),TRONGRID_URL_PREFIX='https://api.trongrid.io',ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=![],IMG_TOKEN_URL=a0_0x104f56(0x176),IMG_STABLE_URL=a0_0x104f56(0x175),NAME_TOKEN='FLAT',NAME_STABLE='USDT',DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY='1000000000000',STABLE_BALANCE_OFFSET='1000000000',LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)[a0_0x104f56(0x193)](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+a0_0x104f56(0x174)+CONTRACT_LP+a0_0x104f56(0x1ca),TRANSACTION_URL=TRONSCAN_URL_PREFIX+a0_0x104f56(0x1a2),TRC20_TOKEN_APPROVE_OWNER=a0_0x104f56(0x15e),TRC20_TOKEN_APPROVE_SPENDER='spender',TRC20_TOKEN_APPROVE_VALUE='value',TRC20_STABLE_APPROVE_OWNER=a0_0x104f56(0x15e),TRC20_STABLE_APPROVE_SPENDER=a0_0x104f56(0x160),TRC20_STABLE_APPROVE_VALUE=a0_0x104f56(0x15f),token=null,stable=null,liquidityPool=null,tronWebFeedInterval=null,tronGridFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null;const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0;cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function shortenString(_0x3c4969){const _0x403a15=a0_0x104f56;let _0x2ead33=_0x3c4969;return _0x2ead33[_0x403a15(0x187)](0x0,0x5)+_0x403a15(0x1d3)+_0x2ead33['substr'](_0x2ead33[_0x403a15(0x1ce)]-0x5,_0x2ead33[_0x403a15(0x1ce)]);}function valueMoveCommaLeft(_0x98ff4e,_0x4752b6){return BigNumber(_0x98ff4e)['div'](0xa**_0x4752b6);}function a0_0x1820(_0x4d34b2,_0x166288){const _0x107e73=a0_0x107e();return a0_0x1820=function(_0x1820aa,_0x4db581){_0x1820aa=_0x1820aa-0x13b;let _0x32e3e7=_0x107e73[_0x1820aa];return _0x32e3e7;},a0_0x1820(_0x4d34b2,_0x166288);}function valueMoveCommaRight(_0x42a4ce,_0x35ccf8){return BigNumber(_0x42a4ce)['times'](0xa**_0x35ccf8);}function adjustDecimals(_0x2ca809){const _0x46d0c3=a0_0x104f56;let _0x1cb569,_0x1cde3d=BigNumber(_0x2ca809);if(_0x1cde3d[_0x46d0c3(0x13f)](0x1))_0x1cb569=DECIMALS_6;else _0x1cde3d[_0x46d0c3(0x13f)](0x2710)?_0x1cb569=DECIMALS_2:_0x1cb569=DECIMALS_0;return _0x1cde3d[_0x46d0c3(0x16b)](_0x1cb569)['replace'](cropZerosRegEx,'$1');}function numberWithCommas(_0x179cb1){const _0x3765d6=a0_0x104f56;var _0x5cbf51=_0x179cb1[_0x3765d6(0x14f)]()[_0x3765d6(0x1a1)]('.');return _0x5cbf51[0x0]=_0x5cbf51[0x0]['replace'](/\B(?=(\d{3})+(?!\d))/g,','),_0x5cbf51[_0x3765d6(0x190)]('.');}async function readFromTronGrid(_0x903bce){const _0x5d0166=a0_0x104f56,_0x340907={'method':_0x5d0166(0x1d8),'headers':{'Accept':_0x5d0166(0x1a0),'Content-Type':'application/json'},'body':JSON['stringify']({'owner_address':_0x5d0166(0x19a),'contract_address':CONTRACT_LP_HEX,'function_selector':_0x903bce})};return await fetch(TRONGRID_URL_PREFIX+_0x5d0166(0x1cb),_0x340907)[_0x5d0166(0x1af)](_0x10a877=>_0x10a877[_0x5d0166(0x141)]())[_0x5d0166(0x1af)](_0x3c7712=>{const _0x5d41ca=_0x5d0166;return _0x3c7712[_0x5d41ca(0x19e)][0x0];})[_0x5d0166(0x1b6)](_0x2d5ebe=>{const _0x461171=_0x5d0166;console[_0x461171(0x17d)](_0x2d5ebe);});}async function getFromTronWeb(){const _0x431b21=a0_0x104f56;try{await new Promise(_0x5cfbe0=>setTimeout(_0x5cfbe0,0x64)),balanceToken=String(await token[_0x431b21(0x16a)](window['tronWeb'][_0x431b21(0x1cc)]['base58'])[_0x431b21(0x1ba)]()),await new Promise(_0x2572e8=>setTimeout(_0x2572e8,0x64)),balanceStable=String(await stable[_0x431b21(0x16a)](window[_0x431b21(0x181)][_0x431b21(0x1cc)][_0x431b21(0x1bb)])[_0x431b21(0x1ba)]()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token['allowance'](window[_0x431b21(0x181)][_0x431b21(0x1cc)][_0x431b21(0x1bb)],CONTRACT_LP)[_0x431b21(0x1ba)]())['remaining']):allowanceToken=String(await token[_0x431b21(0x163)](window[_0x431b21(0x181)][_0x431b21(0x1cc)][_0x431b21(0x1bb)],CONTRACT_LP)['call']()),await new Promise(_0x50376f=>setTimeout(_0x50376f,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable['allowance'](window[_0x431b21(0x181)][_0x431b21(0x1cc)][_0x431b21(0x1bb)],CONTRACT_LP)[_0x431b21(0x1ba)]())[_0x431b21(0x1b9)]):allowanceStable=String(await stable['allowance'](window[_0x431b21(0x181)][_0x431b21(0x1cc)]['base58'],CONTRACT_LP)[_0x431b21(0x1ba)]()),$(_0x431b21(0x1b7))[_0x431b21(0x164)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)[_0x431b21(0x195)](cropZerosRegEx,'$1')),$(_0x431b21(0x147))['text'](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)[_0x431b21(0x16b)](DECIMALS_6)['replace'](cropZerosRegEx,'$1')),$(_0x431b21(0x167))['html'](_0x431b21(0x161)+shortenString(window[_0x431b21(0x181)]['defaultAddress'][_0x431b21(0x1bb)])),enableControls(!![]);}catch(_0x264f98){console[_0x431b21(0x13e)]('getFromTronWeb\x20error:\x20'+_0x264f98);throw _0x264f98;}}async function getFromTronGrid(){const _0x20a7b6=a0_0x104f56;await new Promise(_0x59e3f4=>setTimeout(_0x59e3f4,0x64));let _0x1d0e1b=undefined;while(!_0x1d0e1b){{await new Promise(_0x480511=>setTimeout(_0x480511,0x64)),_0x1d0e1b=await readFromTronGrid(_0x20a7b6(0x15b));}}tokenBalanceContract=BigNumber('0x'+_0x1d0e1b)[_0x20a7b6(0x16b)](),stableBalanceContract=BigNumber(LP_INVARIANT)['div'](tokenBalanceContract)['minus'](STABLE_BALANCE_OFFSET),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)[_0x20a7b6(0x18a)](STABLE_BALANCE_OFFSET)['div'](tokenBalanceContract)[_0x20a7b6(0x16b)](DECIMALS_6)),$('.tokenBalanceContract')[_0x20a7b6(0x164)](numberWithCommas(valueMoveCommaLeft(BigNumber(TOKEN_MAX_SUPPLY)-BigNumber('0x'+_0x1d0e1b),DECIMALS_TOKEN)['toFixed'](DECIMALS_6)[_0x20a7b6(0x195)](cropZerosRegEx,'$1'))),$(_0x20a7b6(0x1bd))[_0x20a7b6(0x164)](BigNumber(0x64)[_0x20a7b6(0x1a6)](BigNumber('0x'+_0x1d0e1b)[_0x20a7b6(0x155)](TOKEN_MAX_SUPPLY)['multipliedBy'](0x64))[_0x20a7b6(0x16b)](DECIMALS_2)['replace'](cropZerosRegEx,'$1')),$('.stableBalanceContract')[_0x20a7b6(0x164)](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)[_0x20a7b6(0x16b)](DECIMALS_6)[_0x20a7b6(0x195)](cropZerosRegEx,'$1'))),$(_0x20a7b6(0x1c0))[_0x20a7b6(0x164)](numberWithCommas(currentMarketPrice));}function a0_0x107e(){const _0x29167c=['minus','href','\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>','disabled','tron_requestAccounts','test','drop','code','isGreaterThan','then','<span\x20class=\x22text-warning\x22>','18066boHUNZ','STARTING\x20TRONGRID\x20DATA\x20FEED\x20','#swap_input_balance_stable','#swap_to_token','selectionStart','catch','.balanceToken','STARTING\x20TRONWEB\x20DATA\x20FEED\x20','remaining','call','base58','div','.tokenBalanceContractAvail','swap_to_input','val','.currentMarketPrice','deposit','658576flAGZL','#swap_input_balance_token','56jorrzm','prototype','request','querySelectorAll','#swap_from_stable','1023105lsKcaC','/code','/wallet/triggersmartcontract','defaultAddress','oldSelectionStart','length','data','.contractLPCodeURL','click','forEach','...','input','STOPPING\x20TRONWEB\x20DATA\x20FEED\x20','9559eEYTkM','.stableName','POST','238kotEDD','message','selectionEnd','log','isLessThan','send','json','219AACWSu','INITIALIZING','getTronWeb\x20error:\x20',')\x20START',')\x20END','.balanceStable',')</span>','https://tronscan.io','hasOwnProperty','contract','reload','ROUND_FLOOR','location','toString','setAccount','swap_from_input','stopPropagation','src','Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds','dividedBy','<span\x20class=\x22fw-bold\x22>Swap\x20(','integerValue','#swap_from_token','isLessThanOrEqualTo',',\x20stableVal\x20=\x20','tokenBalance()','tokenVal\x20=\x20','withdraw','owner','value','spender','<img\x20id=\x22swap_from_img\x22\x20src=\x22tron.svg\x22\x20height=\x2218\x22\x20width=\x2218\x22\x20/>&nbsp;','#swap_btn','allowance','text','address','\x20transaction\x20signature\x20...</span>','.account','html','prop','balanceOf','toFixed','TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs','addEventListener','preventDefault','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','#switch_btn','blur','focus','822107lhRSMX','/#/contract/','usdt.png','FLAT_128.png','getElementById','oldSelectionEnd','isNaN','ready','#swap_from_img','keydown','error','SEND\x20TRANSACTION\x20(','select','#swap_to_img','tronWeb','#swap_to_input','oldValue','</a>\x20submitted</span>','#swap_balance_token','<span\x20class=\x22text-warning\x22>Your\x20','substr','setSelectionRange','0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF','plus','\x20balance\x20is\x20too\x20low</span>','#swap_to_stable','keyup','<span\x20class=\x22text-warning\x22>Please\x20enter\x20valid\x20values</span>','<span\x20class=\x22fw-bold\x22>Approve\x20(','join','approve','#swap_balance_stable','times','.connect-msg','replace','contextmenu','TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ','AccountResourceInsufficient\x20error','955881kFMSlk','414EE04F77D2D8FCCC501FF7C587478D2FBEE80EA0','22340NMagQq','.validationMsg','65808TwTOJF','constant_result','.price','application/json','split','/#/transaction/','#swap_from_input','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','hidden'];a0_0x107e=function(){return _0x29167c;};return a0_0x107e();}async function startTronGridFeed(){const _0x23671d=a0_0x104f56;try{tronGridFeedInterval==null&&(console['log'](_0x23671d(0x1b2)),await getFromTronGrid(),tronGridFeedInterval=setInterval(async function(){await getFromTronGrid();},0x2710));}catch(_0x5d2ea4){}}async function startTronWebFeed(){const _0x270a14=a0_0x104f56;try{tronWebFeedInterval==null&&(console[_0x270a14(0x13e)](_0x270a14(0x1b8)),await getFromTronWeb(),tronWebFeedInterval=setInterval(async function(){await getFromTronWeb();},0x2710));}catch(_0x507f5b){}}function stopFromTronWebFeed(){const _0x235ce0=a0_0x104f56;console[_0x235ce0(0x13e)](_0x235ce0(0x1d5)),tronWebFeedInterval!=null&&(clearInterval(tronWebFeedInterval),tronWebFeedInterval=null,console['log']('balanceFeedInterval\x20cleared'));}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![],ALLOW_ENABLE_CONTROLS=!![];function showConnectionMsg(_0x59370e){const _0x548bd8=a0_0x104f56;$(_0x548bd8(0x194))[_0x548bd8(0x169)](_0x548bd8(0x1a5),!_0x59370e);}function enableControls(_0x1598f7){const _0x149835=a0_0x104f56;_0x1598f7&&!ALLOW_ENABLE_CONTROLS&&(_0x1598f7=![]),$('#swap_from_input')[_0x149835(0x169)](_0x149835(0x1a9),!_0x1598f7),$(_0x149835(0x182))[_0x149835(0x169)](_0x149835(0x1a9),!_0x1598f7),$(_0x149835(0x162))[_0x149835(0x169)](_0x149835(0x1a9),!_0x1598f7);}$(document)[a0_0x104f56(0x17a)](async function(){const _0xb337aa=a0_0x104f56;showConnectionMsg(!![]),$(_0xb337aa(0x1d0))[_0xb337aa(0x169)](_0xb337aa(0x1a7),CONTRACT_LP_NETWORK_URL),$('.tokenName')[_0xb337aa(0x164)](NAME_TOKEN),$(_0xb337aa(0x1d7))[_0xb337aa(0x164)](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()['finally'](()=>{LOCK=![];});});async function initialize(){const _0x551aa2=a0_0x104f56;console['log'](_0x551aa2(0x143));try{await startTronGridFeed(),await tronLinkReady(),await getTronWeb(),await startTronWebFeed();}catch(_0x5cf75b){console['log']('INITIALIZING\x20FAILED'),showConnectionMsg(!![]),enableControls(![]),stopFromTronWebFeed();}}async function getTronWeb(){const _0x39d667=a0_0x104f56;try{const _0x26fa70=await tronLink[_0x39d667(0x1c6)]({'method':_0x39d667(0x1aa)});if(_0x26fa70[_0x39d667(0x1ad)]!=0xc8)throw _0x26fa70;await new Promise(_0x412079=>setTimeout(_0x412079,0x64)),token=await tronWeb['contract']()['at'](CONTRACT_TOKEN),await new Promise(_0x1fd394=>setTimeout(_0x1fd394,0x64)),stable=await tronWeb[_0x39d667(0x14b)]()['at'](CONTRACT_STABLE),await new Promise(_0x51d88a=>setTimeout(_0x51d88a,0x64)),liquidityPool=await tronWeb[_0x39d667(0x14b)]()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0x39841a){console['log'](_0x39d667(0x144)+_0x39841a),showConnectionMsg(!![]),enableControls(![]);throw _0x39841a;}}async function tronLinkReady(){await new Promise(_0x2d76a9=>{const _0x473ef6=setInterval(()=>{const _0x5ad20a=a0_0x1820;if(window[_0x5ad20a(0x181)]&&window[_0x5ad20a(0x181)][_0x5ad20a(0x1cc)][_0x5ad20a(0x1bb)])return clearInterval(_0x473ef6),_0x2d76a9();},0x64);});}setInterval(function(){const _0x5a02f5=a0_0x104f56,_0x72b6bb=tronWeb['defaultAddress'][_0x5a02f5(0x1bb)];if(!PREV_ACCOUNT&&_0x72b6bb)PREV_ACCOUNT=_0x72b6bb;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0x72b6bb&&window[_0x5a02f5(0x14e)]['reload']();},0x3e8),window[a0_0x104f56(0x16d)]('message',async function(_0x57af56){const _0x1c6997=a0_0x104f56;_0x57af56[_0x1c6997(0x1cf)][_0x1c6997(0x13c)]&&_0x57af56[_0x1c6997(0x1cf)][_0x1c6997(0x13c)]['action']==_0x1c6997(0x150)&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x57af56[_0x1c6997(0x1cf)]['message'][_0x1c6997(0x1cf)][_0x1c6997(0x165)],(addr==undefined||addr==null||!addr)&&window['location'][_0x1c6997(0x14c)](),!INITIALIZED?await initialize():await getTronWeb()['then'](()=>{})[_0x1c6997(0x1b6)](_0x12a470=>{const _0x23941e=_0x1c6997;this['window'][_0x23941e(0x14e)][_0x23941e(0x14c)]();}),LOCK=![]));});function displayPrice(_0x5d61ff,_0x488d65){const _0x3ba7d9=a0_0x104f56;_0x5d61ff['isGreaterThan'](0x0)&&_0x488d65[_0x3ba7d9(0x1ae)](0x0)?$(_0x3ba7d9(0x19f))[_0x3ba7d9(0x164)](_0x488d65[_0x3ba7d9(0x1bc)](_0x5d61ff)[_0x3ba7d9(0x16b)](DECIMALS_6)):$(_0x3ba7d9(0x19f))[_0x3ba7d9(0x164)]('-');}function setInputFilter(_0x2c1bc1,_0x1411d4){const _0x143609=a0_0x104f56;[_0x143609(0x1d4),_0x143609(0x17c),_0x143609(0x18d),'mousedown','mouseup',_0x143609(0x17f),_0x143609(0x196),_0x143609(0x1ac),_0x143609(0x171),'focus'][_0x143609(0x1d2)](function(_0x50538c){const _0x28886b=_0x143609;_0x2c1bc1[_0x28886b(0x16d)](_0x50538c,function(){const _0x1e9d44=_0x28886b;if(_0x1411d4(this[_0x1e9d44(0x15f)]))this['oldValue']=this[_0x1e9d44(0x15f)],this[_0x1e9d44(0x1cd)]=this[_0x1e9d44(0x1b5)],this[_0x1e9d44(0x178)]=this[_0x1e9d44(0x13d)];else this[_0x1e9d44(0x14a)](_0x1e9d44(0x183))?(this['value']=this[_0x1e9d44(0x183)],this[_0x1e9d44(0x188)](this['oldSelectionStart'],this[_0x1e9d44(0x178)])):this[_0x1e9d44(0x15f)]='';let _0x95a3b8=BigNumber(0x0),_0x54b4e3=BigNumber(0x0);if(_0x2c1bc1['id']==_0x1e9d44(0x151)){if($('#swap_from_stable')[_0x1e9d44(0x169)](_0x1e9d44(0x1a5))==!![]){const _0x186777=$(_0x1e9d44(0x1a3))[_0x1e9d44(0x1bf)]();if(!(_0x186777==''||_0x186777<=0x0||this[_0x1e9d44(0x15f)]==''||this[_0x1e9d44(0x15f)]<=0x0)){_0x95a3b8=BigNumber(valueMoveCommaRight($(_0x1e9d44(0x1a3))['val'](),DECIMALS_TOKEN));let _0x3909e5=BigNumber(tokenBalanceContract),_0x4a8033=BigNumber(stableBalanceContract)[_0x1e9d44(0x18a)](STABLE_BALANCE_OFFSET),_0x40807a=_0x3909e5[_0x1e9d44(0x18a)](_0x95a3b8),_0x5e4da8=LP_INVARIANT['div'](_0x40807a)[_0x1e9d44(0x157)](BigNumber[_0x1e9d44(0x14d)]);_0x54b4e3=_0x4a8033[_0x1e9d44(0x1a6)](_0x5e4da8);_0x40807a[_0x1e9d44(0x1ae)](TOKEN_MAX_SUPPLY)&&(_0x54b4e3=BigNumber(0x0));$(_0x1e9d44(0x182))[_0x1e9d44(0x1bf)](valueMoveCommaLeft(_0x54b4e3,DECIMALS_STABLE)[_0x1e9d44(0x16b)](DECIMALS_6));if(_0x50538c==_0x1e9d44(0x171)){let _0x2467d5=_0x4a8033[_0x1e9d44(0x1a6)](_0x54b4e3),_0x31a9bb=LP_INVARIANT[_0x1e9d44(0x1bc)](_0x2467d5)[_0x1e9d44(0x157)](BigNumber[_0x1e9d44(0x14d)]);_0x95a3b8=_0x31a9bb[_0x1e9d44(0x1a6)](_0x3909e5),$(_0x1e9d44(0x1a3))['val'](valueMoveCommaLeft(_0x95a3b8,DECIMALS_TOKEN)['toFixed'](DECIMALS_6));}}}else{const _0x2a142f=$(_0x1e9d44(0x1a3))[_0x1e9d44(0x1bf)]();if(!(_0x2a142f==''||_0x2a142f<=0x0||this[_0x1e9d44(0x15f)]==''||this[_0x1e9d44(0x15f)]<=0x0)){_0x54b4e3=BigNumber(valueMoveCommaRight($(_0x1e9d44(0x1a3))[_0x1e9d44(0x1bf)](),DECIMALS_STABLE));let _0x320a73=BigNumber(tokenBalanceContract),_0x293d2c=BigNumber(stableBalanceContract)[_0x1e9d44(0x18a)](STABLE_BALANCE_OFFSET),_0x53f90d=_0x293d2c[_0x1e9d44(0x18a)](_0x54b4e3),_0x1f2d9e=LP_INVARIANT[_0x1e9d44(0x1bc)](_0x53f90d)[_0x1e9d44(0x157)](BigNumber[_0x1e9d44(0x14d)]);_0x95a3b8=_0x320a73['minus'](_0x1f2d9e),$(_0x1e9d44(0x182))[_0x1e9d44(0x1bf)](valueMoveCommaLeft(_0x95a3b8,DECIMALS_TOKEN)[_0x1e9d44(0x16b)](DECIMALS_6));if(_0x50538c==_0x1e9d44(0x171)){let _0x3823ff=_0x320a73[_0x1e9d44(0x1a6)](_0x95a3b8),_0x13d711=LP_INVARIANT['div'](_0x3823ff)['integerValue'](BigNumber[_0x1e9d44(0x14d)]);_0x54b4e3=_0x13d711[_0x1e9d44(0x1a6)](_0x293d2c),$(_0x1e9d44(0x1a3))[_0x1e9d44(0x1bf)](valueMoveCommaLeft(_0x54b4e3,DECIMALS_STABLE)[_0x1e9d44(0x16b)](DECIMALS_6));}}}displayPrice(_0x95a3b8,_0x54b4e3);}if(_0x2c1bc1['id']==_0x1e9d44(0x1be)){if($('#swap_from_stable')[_0x1e9d44(0x169)](_0x1e9d44(0x1a5))==!![]){const _0x1cb516=$(_0x1e9d44(0x182))['val']();if(!(_0x1cb516==''||_0x1cb516<=0x0||this[_0x1e9d44(0x15f)]==''||this['value']<=0x0)){_0x54b4e3=BigNumber(valueMoveCommaRight($('#swap_to_input')['val'](),DECIMALS_STABLE));let _0x46cf84=BigNumber(tokenBalanceContract),_0x219d23=BigNumber(stableBalanceContract)[_0x1e9d44(0x18a)](STABLE_BALANCE_OFFSET),_0x317e51=_0x219d23['minus'](_0x54b4e3),_0x111036=LP_INVARIANT[_0x1e9d44(0x1bc)](_0x317e51)[_0x1e9d44(0x157)](BigNumber[_0x1e9d44(0x14d)]);_0x95a3b8=_0x111036[_0x1e9d44(0x1a6)](_0x46cf84);(_0x111036['isGreaterThan'](TOKEN_MAX_SUPPLY)||_0x317e51<0x0)&&(_0x95a3b8=BigNumber(0x0));$('#swap_from_input')[_0x1e9d44(0x1bf)](valueMoveCommaLeft(_0x95a3b8,DECIMALS_TOKEN)[_0x1e9d44(0x16b)](DECIMALS_6));if(_0x50538c==_0x1e9d44(0x171)){let _0x3eb10e=_0x46cf84['plus'](_0x95a3b8),_0x58a37c=LP_INVARIANT[_0x1e9d44(0x1bc)](_0x3eb10e)['integerValue'](BigNumber[_0x1e9d44(0x14d)]);_0x54b4e3=_0x219d23[_0x1e9d44(0x1a6)](_0x58a37c),$(_0x1e9d44(0x182))[_0x1e9d44(0x1bf)](valueMoveCommaLeft(_0x54b4e3,DECIMALS_STABLE)[_0x1e9d44(0x16b)](DECIMALS_6));}}}else{const _0x45a30f=$('#swap_to_input')[_0x1e9d44(0x1bf)]();if(!(_0x45a30f==''||_0x45a30f<=0x0||this[_0x1e9d44(0x15f)]==''||this[_0x1e9d44(0x15f)]<=0x0)){_0x95a3b8=BigNumber(valueMoveCommaRight($(_0x1e9d44(0x182))['val'](),DECIMALS_TOKEN));let _0x5d6ce6=BigNumber(tokenBalanceContract),_0x121dfa=BigNumber(stableBalanceContract)[_0x1e9d44(0x18a)](STABLE_BALANCE_OFFSET),_0x5a6481=_0x5d6ce6[_0x1e9d44(0x1a6)](_0x95a3b8),_0x355dea=LP_INVARIANT['div'](_0x5a6481)['integerValue'](BigNumber[_0x1e9d44(0x14d)]);_0x54b4e3=_0x355dea['minus'](_0x121dfa);_0x54b4e3[_0x1e9d44(0x13f)](0x0)&&(_0x54b4e3=BigNumber(0x0));$(_0x1e9d44(0x1a3))[_0x1e9d44(0x1bf)](valueMoveCommaLeft(_0x54b4e3,DECIMALS_STABLE)[_0x1e9d44(0x16b)](DECIMALS_6));if(_0x50538c==_0x1e9d44(0x171)){let _0xd5037=_0x121dfa[_0x1e9d44(0x18a)](_0x54b4e3),_0x703f33=LP_INVARIANT['div'](_0xd5037)[_0x1e9d44(0x157)](BigNumber[_0x1e9d44(0x14d)]);_0x95a3b8=_0x5d6ce6['minus'](_0x703f33),$(_0x1e9d44(0x182))[_0x1e9d44(0x1bf)](valueMoveCommaLeft(_0x95a3b8,DECIMALS_TOKEN)[_0x1e9d44(0x16b)](DECIMALS_6));}}}displayPrice(_0x95a3b8,_0x54b4e3);}});});}setInputFilter(document[a0_0x104f56(0x177)](a0_0x104f56(0x151)),function(_0x55e117){return/^-?\d*[.]?\d{0,6}$/['test'](_0x55e117);}),setInputFilter(document['getElementById'](a0_0x104f56(0x1be)),function(_0x5774d7){const _0x49a0d1=a0_0x104f56;return/^-?\d*[.]?\d{0,6}$/[_0x49a0d1(0x1ab)](_0x5774d7);}),$(function(){const _0x24e7ae=a0_0x104f56;$(_0x24e7ae(0x170))[_0x24e7ae(0x1d1)](function(_0xaebd81){const _0x1e1358=_0x24e7ae;_0xaebd81[_0x1e1358(0x16e)]();if($(_0x1e1358(0x1c8))[_0x1e1358(0x169)](_0x1e1358(0x1a5))==!![]){$('#swap_from_stable')[_0x1e1358(0x169)](_0x1e1358(0x1a5),![]),$(_0x1e1358(0x158))[_0x1e1358(0x169)]('hidden',!![]),$(_0x1e1358(0x18c))['prop'](_0x1e1358(0x1a5),!![]),$('#swap_to_token')['prop'](_0x1e1358(0x1a5),![]),$(_0x1e1358(0x1b3))[_0x1e1358(0x169)](_0x1e1358(0x1a5),![]),$(_0x1e1358(0x1c3))[_0x1e1358(0x169)]('hidden',!![]),$(_0x1e1358(0x192))[_0x1e1358(0x169)](_0x1e1358(0x1a5),!![]),$('#swap_balance_token')['prop'](_0x1e1358(0x1a5),![]),$(_0x1e1358(0x17b))['prop'](_0x1e1358(0x153),IMG_STABLE_URL),$(_0x1e1358(0x180))['prop']('src',IMG_TOKEN_URL);let _0x287f3b=$(_0x1e1358(0x1a3))[_0x1e1358(0x1bf)](),_0x16ca26=$(_0x1e1358(0x182))[_0x1e1358(0x1bf)]();$(_0x1e1358(0x1a3))[_0x1e1358(0x1bf)](_0x16ca26),$(_0x1e1358(0x182))[_0x1e1358(0x1bf)](_0x287f3b),document[_0x1e1358(0x177)](_0x1e1358(0x151))[_0x1e1358(0x172)]();}else{$('#swap_from_stable')[_0x1e1358(0x169)]('hidden',!![]),$(_0x1e1358(0x158))[_0x1e1358(0x169)]('hidden',![]),$(_0x1e1358(0x18c))[_0x1e1358(0x169)]('hidden',![]),$(_0x1e1358(0x1b4))[_0x1e1358(0x169)](_0x1e1358(0x1a5),!![]),$(_0x1e1358(0x1b3))[_0x1e1358(0x169)]('hidden',!![]),$(_0x1e1358(0x1c3))[_0x1e1358(0x169)](_0x1e1358(0x1a5),![]),$(_0x1e1358(0x192))[_0x1e1358(0x169)]('hidden',![]),$(_0x1e1358(0x185))[_0x1e1358(0x169)]('hidden',!![]),$(_0x1e1358(0x17b))[_0x1e1358(0x169)](_0x1e1358(0x153),IMG_TOKEN_URL),$(_0x1e1358(0x180))[_0x1e1358(0x169)](_0x1e1358(0x153),IMG_STABLE_URL);let _0x1c7de6=$('#swap_from_input')[_0x1e1358(0x1bf)](),_0x107645=$(_0x1e1358(0x182))['val']();$(_0x1e1358(0x1a3))[_0x1e1358(0x1bf)](_0x107645),$(_0x1e1358(0x182))['val'](_0x1c7de6),document[_0x1e1358(0x177)](_0x1e1358(0x151))['focus']();}}),$('#swap_input_balance_token')[_0x24e7ae(0x1d1)](function(_0x2aef2d){const _0x25c2c3=_0x24e7ae;_0x2aef2d[_0x25c2c3(0x16e)](),($(_0x25c2c3(0x1a3))['prop'](_0x25c2c3(0x1a9))!=!![]||$(_0x25c2c3(0x182))[_0x25c2c3(0x169)](_0x25c2c3(0x1a9))!=!![])&&($('#swap_from_stable')['prop'](_0x25c2c3(0x1a5))==!![]?($(_0x25c2c3(0x1a3))[_0x25c2c3(0x1bf)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x25c2c3(0x16b)](DECIMALS_6)),document[_0x25c2c3(0x177)](_0x25c2c3(0x151))['focus']()):($(_0x25c2c3(0x182))['val'](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x25c2c3(0x16b)](DECIMALS_6)),document[_0x25c2c3(0x177)]('swap_to_input')[_0x25c2c3(0x172)]()));}),$(_0x24e7ae(0x1b3))[_0x24e7ae(0x1d1)](function(_0x4873ed){const _0x2a3950=_0x24e7ae;_0x4873ed['preventDefault'](),($(_0x2a3950(0x1a3))['prop'](_0x2a3950(0x1a9))!=!![]||$(_0x2a3950(0x182))[_0x2a3950(0x169)](_0x2a3950(0x1a9))!=!![])&&($(_0x2a3950(0x1c8))[_0x2a3950(0x169)](_0x2a3950(0x1a5))==!![]?($('#swap_to_input')[_0x2a3950(0x1bf)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document[_0x2a3950(0x177)]('swap_to_input')[_0x2a3950(0x172)]()):($('#swap_from_input')[_0x2a3950(0x1bf)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0x2a3950(0x16b)](DECIMALS_6)),document[_0x2a3950(0x177)](_0x2a3950(0x151))[_0x2a3950(0x172)]()));});});async function sendTransaction(_0x148951,_0x7bf89,_0x398444,_0x55c601){const _0x3185aa=a0_0x104f56;console[_0x3185aa(0x13e)](_0x3185aa(0x17e)+_0x148951+_0x3185aa(0x145));let _0x30c1dd=![];$(_0x3185aa(0x19c))[_0x3185aa(0x168)]('<div\x20class=\x22spinner-border\x20spinner-border-xs\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting\x20for\x20signature...</span></div><span\x20class=\x22text-warning\x22>&nbsp;Waiting\x20for\x20'+_0x148951+_0x3185aa(0x166));try{let _0x5dbf4e=await _0x7bf89()[_0x3185aa(0x140)]();$(_0x3185aa(0x19c))[_0x3185aa(0x168)](_0x3185aa(0x1b0)+_0x148951+'\x20transaction\x20<a\x20href=\x22'+TRANSACTION_URL+_0x5dbf4e+_0x3185aa(0x1a8)+shortenString(_0x5dbf4e)+_0x3185aa(0x184));}catch(_0xfb9c69){let _0x66553c;return _0xfb9c69[_0x3185aa(0x13c)]?(_0x66553c=_0xfb9c69[_0x3185aa(0x13c)],_0x66553c==_0x3185aa(0x198)&&(_0x66553c=_0x3185aa(0x154))):_0x66553c=_0xfb9c69,$(_0x3185aa(0x19c))['html']('<span\x20class=\x22text-warning\x22>'+_0x66553c+'</span>'),[!![],!![]];}return console['log'](_0x3185aa(0x17e)+_0x148951+_0x3185aa(0x146)),[![],_0x30c1dd];}$(function(){'use strict';const _0x4e306d=a0_0x104f56;var _0x1b60fb=document[_0x4e306d(0x1c7)]('.swap_form');Array[_0x4e306d(0x1c5)]['slice']['call'](_0x1b60fb)[_0x4e306d(0x1d2)](function(_0x45967e){const _0x3a9ed7=_0x4e306d;_0x45967e[_0x3a9ed7(0x16d)]('submit',async function(_0x45994e){const _0x451a17=_0x3a9ed7;_0x45994e[_0x451a17(0x16e)](),_0x45994e[_0x451a17(0x152)]();let _0x4f6c6c=null,_0x380cec=null,_0x1de016=null;$('#swap_from_stable')[_0x451a17(0x169)](_0x451a17(0x1a5))==!![]?(_0x1de016=!![],_0x4f6c6c=valueMoveCommaRight($(_0x451a17(0x1a3))['val'](),DECIMALS_TOKEN),_0x380cec=valueMoveCommaRight($(_0x451a17(0x182))[_0x451a17(0x1bf)](),DECIMALS_STABLE)):(_0x1de016=![],_0x4f6c6c=valueMoveCommaRight($(_0x451a17(0x182))['val'](),DECIMALS_TOKEN),_0x380cec=valueMoveCommaRight($(_0x451a17(0x1a3))[_0x451a17(0x1bf)](),DECIMALS_STABLE));console[_0x451a17(0x13e)](_0x451a17(0x15c)+_0x4f6c6c+_0x451a17(0x15a)+_0x380cec);let _0x14c4a1=![],_0x411a9c=![];if(_0x4f6c6c[_0x451a17(0x179)]()||_0x380cec[_0x451a17(0x179)]()||_0x4f6c6c[_0x451a17(0x159)](0x0)||_0x380cec[_0x451a17(0x159)](0x0))$(_0x451a17(0x19c))[_0x451a17(0x168)](_0x451a17(0x18e)),_0x14c4a1=!![];else{if(_0x1de016&&_0x4f6c6c[_0x451a17(0x1ae)](balanceToken))$(_0x451a17(0x19c))[_0x451a17(0x168)](_0x451a17(0x186)+NAME_TOKEN+_0x451a17(0x18b)),_0x14c4a1=!![];else!_0x1de016&&_0x380cec[_0x451a17(0x1ae)](balanceStable)&&($(_0x451a17(0x19c))[_0x451a17(0x168)](_0x451a17(0x186)+NAME_STABLE+_0x451a17(0x18b)),_0x14c4a1=!![]);}ALLOW_ENABLE_CONTROLS=![],enableControls(![]),_0x14c4a1==![]&&(!_0x1de016?_0x380cec[_0x451a17(0x1ae)](allowanceStable)&&([_0x14c4a1,_0x411a9c]=await sendTransaction(_0x451a17(0x18f)+NAME_STABLE+_0x451a17(0x148),function(){const _0x46a950=_0x451a17;return stable[_0x46a950(0x191)](CONTRACT_LP,_0x46a950(0x189));})):_0x4f6c6c[_0x451a17(0x1ae)](allowanceToken)&&([_0x14c4a1,_0x411a9c]=await sendTransaction(_0x451a17(0x18f)+NAME_TOKEN+_0x451a17(0x148),function(){const _0x1c6dda=_0x451a17;return token[_0x1c6dda(0x191)](CONTRACT_LP,_0x1c6dda(0x189));}))),_0x14c4a1==![]&&_0x411a9c==![]&&(!_0x1de016?[_0x14c4a1,_0x411a9c]=await sendTransaction(_0x451a17(0x156)+NAME_STABLE+_0x451a17(0x1a4)+NAME_TOKEN+_0x451a17(0x148),function(){const _0x337d2d=_0x451a17;return liquidityPool[_0x337d2d(0x15d)](_0x4f6c6c['toFixed'](0x0),_0x380cec[_0x337d2d(0x18a)](_0x380cec['div'](0x64))[_0x337d2d(0x16b)](0x0));}):[_0x14c4a1,_0x411a9c]=await sendTransaction(_0x451a17(0x156)+NAME_TOKEN+_0x451a17(0x1a4)+NAME_STABLE+_0x451a17(0x148),function(){const _0x1acfe1=_0x451a17;return liquidityPool[_0x1acfe1(0x1c1)](_0x4f6c6c[_0x1acfe1(0x16b)](0x0),_0x380cec[_0x1acfe1(0x1a6)](_0x380cec[_0x1acfe1(0x1bc)](0x64))[_0x1acfe1(0x16b)](0x0));})),ALLOW_ENABLE_CONTROLS=!![],enableControls(!![]);},![]);});});