const a0_0x2a6f81=a0_0x3aa3;(function(_0x81ac66,_0x216837){const _0x2f2a0f=a0_0x3aa3,_0x353053=_0x81ac66();while(!![]){try{const _0x2ffb56=parseInt(_0x2f2a0f(0xd2))/0x1*(parseInt(_0x2f2a0f(0x113))/0x2)+parseInt(_0x2f2a0f(0xfd))/0x3+parseInt(_0x2f2a0f(0xe6))/0x4+parseInt(_0x2f2a0f(0xf5))/0x5+parseInt(_0x2f2a0f(0x13e))/0x6*(-parseInt(_0x2f2a0f(0x11d))/0x7)+parseInt(_0x2f2a0f(0xd7))/0x8*(-parseInt(_0x2f2a0f(0x106))/0x9)+parseInt(_0x2f2a0f(0x154))/0xa;if(_0x2ffb56===_0x216837)break;else _0x353053['push'](_0x353053['shift']());}catch(_0x2bfd4a){_0x353053['push'](_0x353053['shift']());}}}(a0_0x39c4,0x53460));let CONTRACT_LP='TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs',CONTRACT_LP_HEX=a0_0x2a6f81(0x14d),CONTRACT_TOKEN=a0_0x2a6f81(0xad),CONTRACT_STABLE=a0_0x2a6f81(0x149),TRONSCAN_URL_PREFIX=a0_0x2a6f81(0x110),TRONGRID_URL_PREFIX=a0_0x2a6f81(0x129),ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=![];const COIN_GECKO_FEED_URL='https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=USD';let IMG_TOKEN_URL=a0_0x2a6f81(0xd0),IMG_STABLE_URL='usdt.png',NAME_TOKEN='FLAT',NAME_STABLE=a0_0x2a6f81(0x116),DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY='1000000000000',STABLE_BALANCE_OFFSET='1000000000',LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)['times'](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+a0_0x2a6f81(0xdd)+CONTRACT_LP+a0_0x2a6f81(0xf7),TRANSACTION_URL=TRONSCAN_URL_PREFIX+a0_0x2a6f81(0x108),TRC20_TOKEN_APPROVE_OWNER=a0_0x2a6f81(0xe9),TRC20_TOKEN_APPROVE_SPENDER=a0_0x2a6f81(0xe1),TRC20_TOKEN_APPROVE_VALUE=a0_0x2a6f81(0x151),TRC20_STABLE_APPROVE_OWNER=a0_0x2a6f81(0xe9),TRC20_STABLE_APPROVE_SPENDER=a0_0x2a6f81(0xe1),TRC20_STABLE_APPROVE_VALUE='value',token=null,stable=null,liquidityPool=null,tronWebFeedInterval=null,tronGridFeedInterval=null,coinGeckoFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null,usdtPrice=null,marketCap=null;const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0,SLIPPAGE=0x3e8;let chart=undefined,chartX=[],chartY=[];const data={'labels':chartX,'datasets':[{'data':chartY,'fill':!![],'backgroundColor':'rgba(255,193,7,0.2)','borderColor':a0_0x2a6f81(0xa2),'cubicInterpolationMode':a0_0x2a6f81(0x11a)}]},chartConfig={'type':'line','data':data,'options':{'maintainAspectRatio':![],'plugins':{'legend':{'display':![]},'tooltip':{'enabled':![]}},'elements':{'point':{'radius':0x0}},'scales':{'x':{'grid':{'display':![],'drawBorder':![]}},'y':{'grid':{'display':!![],'drawBorder':![]}}}}};cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function formatDate(_0x1f5d9a){const _0x1673ab=a0_0x2a6f81;return _0x1f5d9a['getFullYear']()+'-'+(_0x1f5d9a[_0x1673ab(0x159)]()+0x1)['toString']()['padStart'](0x2,'0')+'-'+_0x1f5d9a[_0x1673ab(0x12c)]()[_0x1673ab(0xd8)]()['padStart'](0x2,'0');}function shortenString(_0x51badf){const _0x33a055=a0_0x2a6f81;let _0x4a0843=_0x51badf;return _0x4a0843[_0x33a055(0x10a)](0x0,0x5)+_0x33a055(0x146)+_0x4a0843[_0x33a055(0x10a)](_0x4a0843['length']-0x5,_0x4a0843[_0x33a055(0xd4)]);}function valueMoveCommaLeft(_0x4367a,_0x32499d){const _0x5bc1ff=a0_0x2a6f81;return BigNumber(_0x4367a)[_0x5bc1ff(0x127)](0xa**_0x32499d);}function valueMoveCommaRight(_0x468055,_0x2b2f46){return BigNumber(_0x468055)['times'](0xa**_0x2b2f46);}function adjustDecimals(_0x3223d1){const _0x3c41fd=a0_0x2a6f81;let _0x154237,_0xf34309=BigNumber(_0x3223d1);if(_0xf34309[_0x3c41fd(0xa7)](0x1))_0x154237=DECIMALS_6;else _0xf34309[_0x3c41fd(0xa7)](0x2710)?_0x154237=DECIMALS_2:_0x154237=DECIMALS_0;return _0xf34309['toFixed'](_0x154237)['replace'](cropZerosRegEx,'$1');}function numberWithCommas(_0x47d97f){const _0x40961e=a0_0x2a6f81;var _0x561597=_0x47d97f[_0x40961e(0xd8)]()['split']('.');return _0x561597[0x0]=_0x561597[0x0][_0x40961e(0x12e)](/\B(?=(\d{3})+(?!\d))/g,','),_0x561597[_0x40961e(0xb8)]('.');}function a0_0x3aa3(_0x4cb307,_0x1e6d33){const _0x39c429=a0_0x39c4();return a0_0x3aa3=function(_0x3aa3da,_0x327162){_0x3aa3da=_0x3aa3da-0xa2;let _0x2c1d0b=_0x39c429[_0x3aa3da];return _0x2c1d0b;},a0_0x3aa3(_0x4cb307,_0x1e6d33);}async function readFromTronGrid(_0x415580){const _0x3913c1=a0_0x2a6f81,_0x36b8da={'method':_0x3913c1(0xd6),'headers':{'Accept':_0x3913c1(0xde),'Content-Type':'application/json'},'body':JSON[_0x3913c1(0xb9)]({'owner_address':_0x3913c1(0x153),'contract_address':CONTRACT_LP_HEX,'function_selector':_0x415580})};return await fetch(TRONGRID_URL_PREFIX+'/wallet/triggersmartcontract',_0x36b8da)['then'](_0x1d8988=>_0x1d8988[_0x3913c1(0xee)]())[_0x3913c1(0xc1)](_0x18c257=>{const _0x4abd61=_0x3913c1;return _0x18c257[_0x4abd61(0x13a)][0x0];})[_0x3913c1(0x133)](_0x132f21=>{const _0x3600ea=_0x3913c1;console[_0x3600ea(0xda)](_0x132f21);});}async function getFromTronWeb(){const _0x1293e2=a0_0x2a6f81;try{await new Promise(_0x1f10ce=>setTimeout(_0x1f10ce,0x64)),balanceToken=String(await token[_0x1293e2(0x10b)](window[_0x1293e2(0x13f)]['defaultAddress'][_0x1293e2(0xf1)])[_0x1293e2(0x14e)]()),await new Promise(_0x4556c1=>setTimeout(_0x4556c1,0x64)),balanceStable=String(await stable[_0x1293e2(0x10b)](window[_0x1293e2(0x13f)][_0x1293e2(0x148)][_0x1293e2(0xf1)])['call']()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token[_0x1293e2(0x122)](window[_0x1293e2(0x13f)][_0x1293e2(0x148)][_0x1293e2(0xf1)],CONTRACT_LP)[_0x1293e2(0x14e)]())['remaining']):allowanceToken=String(await token[_0x1293e2(0x122)](window[_0x1293e2(0x13f)][_0x1293e2(0x148)][_0x1293e2(0xf1)],CONTRACT_LP)[_0x1293e2(0x14e)]()),await new Promise(_0x52382d=>setTimeout(_0x52382d,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable[_0x1293e2(0x122)](window['tronWeb'][_0x1293e2(0x148)]['base58'],CONTRACT_LP)[_0x1293e2(0x14e)]())['remaining']):allowanceStable=String(await stable[_0x1293e2(0x122)](window[_0x1293e2(0x13f)]['defaultAddress'][_0x1293e2(0xf1)],CONTRACT_LP)[_0x1293e2(0x14e)]()),$(_0x1293e2(0x139))[_0x1293e2(0x14b)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x1293e2(0xfa)](DECIMALS_6)['replace'](cropZerosRegEx,'$1')),$('.balanceStable')[_0x1293e2(0x14b)](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)['toFixed'](DECIMALS_6)[_0x1293e2(0x12e)](cropZerosRegEx,'$1')),$(_0x1293e2(0x114))[_0x1293e2(0x126)](_0x1293e2(0x10e)+shortenString(window[_0x1293e2(0x13f)][_0x1293e2(0x148)][_0x1293e2(0xf1)])),enableControls(!![]);}catch(_0x151b57){console[_0x1293e2(0xc6)](_0x1293e2(0xe3)+_0x151b57);throw _0x151b57;}}async function getFromTronGrid(){const _0x28ebc5=a0_0x2a6f81;await new Promise(_0x32546b=>setTimeout(_0x32546b,0x64));let _0x4fb9bb=undefined,_0x5b41d2=undefined;while(!_0x4fb9bb){{await new Promise(_0x4112c2=>setTimeout(_0x4112c2,0x64)),_0x4fb9bb=await readFromTronGrid('tokenBalance()');}}while(!_0x5b41d2){{await new Promise(_0x49ba46=>setTimeout(_0x49ba46,0x64)),_0x5b41d2=await readFromTronGrid(_0x28ebc5(0xbf));}}tokenBalanceContract=BigNumber('0x'+_0x4fb9bb)[_0x28ebc5(0xfa)](),stableBalanceContract=BigNumber('0x'+_0x5b41d2)[_0x28ebc5(0xfa)](),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)[_0x28ebc5(0x11c)](STABLE_BALANCE_OFFSET)[_0x28ebc5(0x127)](tokenBalanceContract)[_0x28ebc5(0xfa)](DECIMALS_6)),$(_0x28ebc5(0xb2))['text'](numberWithCommas(valueMoveCommaLeft(BigNumber('0x'+_0x4fb9bb),DECIMALS_TOKEN)[_0x28ebc5(0xfa)](DECIMALS_6)[_0x28ebc5(0x12e)](cropZerosRegEx,'$1'))),$(_0x28ebc5(0xfe))['text'](numberWithCommas(valueMoveCommaLeft(BigNumber(TOKEN_MAX_SUPPLY)-BigNumber('0x'+_0x4fb9bb),DECIMALS_TOKEN)[_0x28ebc5(0xfa)](DECIMALS_6)[_0x28ebc5(0x12e)](cropZerosRegEx,'$1'))),$(_0x28ebc5(0xce))[_0x28ebc5(0x14b)](BigNumber(0x64)[_0x28ebc5(0xe4)](BigNumber('0x'+_0x4fb9bb)[_0x28ebc5(0x138)](TOKEN_MAX_SUPPLY)[_0x28ebc5(0x120)](0x64))[_0x28ebc5(0xfa)](DECIMALS_2)[_0x28ebc5(0x12e)](cropZerosRegEx,'$1')),$(_0x28ebc5(0xf9))[_0x28ebc5(0x14b)](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)[_0x28ebc5(0xfa)](DECIMALS_6)['replace'](cropZerosRegEx,'$1'))),$('.currentMarketPrice')[_0x28ebc5(0x14b)](numberWithCommas(currentMarketPrice));}async function readFromCoinGecko(){const _0x57d810=a0_0x2a6f81;return await fetch(COIN_GECKO_FEED_URL,{'method':_0x57d810(0x102),'headers':{'Accept':'application/json'}})[_0x57d810(0xc1)](_0x26420d=>_0x26420d[_0x57d810(0xee)]())['then'](_0x43b8c9=>{return _0x43b8c9;})['catch'](_0x57ddc0=>{const _0x307439=_0x57d810;console[_0x307439(0xda)](_0x57ddc0);});}async function getFromCoinGecko(){const _0x109d7b=a0_0x2a6f81;await new Promise(_0x2501e5=>setTimeout(_0x2501e5,0x64));let _0x2e04a6=undefined;while(!_0x2e04a6){{await new Promise(_0x151f39=>setTimeout(_0x151f39,0x64)),_0x2e04a6=await readFromCoinGecko();}}usdtPrice=_0x2e04a6[_0x109d7b(0x134)][_0x109d7b(0xf3)],usdtPrice&&currentMarketPrice&&$('.marketCap')[_0x109d7b(0x14b)](adjustDecimals(valueMoveCommaLeft(BigNumber(TOKEN_MAX_SUPPLY),DECIMALS_TOKEN)['times'](currentMarketPrice)[_0x109d7b(0x13d)](usdtPrice)));}async function readSwapsOnePage(_0xd6e391,_0x2aed1d,_0x2377e4){const _0xa5fa7e=a0_0x2a6f81,_0x40dd1c={'method':'GET','headers':{'Accept':_0xa5fa7e(0xde)}};let _0x1a490a=TRONGRID_URL_PREFIX+_0xa5fa7e(0xed)+_0xd6e391+'/transactions/trc20?limit=200&min_timestamp='+_0x2377e4+_0xa5fa7e(0x107);return _0x2aed1d&&(_0x1a490a+='&fingerprint='+_0x2aed1d),await fetch(_0x1a490a,_0x40dd1c)['then'](_0x30fe74=>_0x30fe74[_0xa5fa7e(0xee)]())[_0xa5fa7e(0xc1)](_0x18fdb2=>{return _0x18fdb2;})[_0xa5fa7e(0x133)](_0x4b18fd=>{const _0x13703d=_0xa5fa7e;console[_0x13703d(0xda)](_0x4b18fd);});}async function readSwaps(_0x56a34f){const _0x12ff14=a0_0x2a6f81;let _0x591205=undefined,_0xf94b14=undefined,_0x5ee79a=0x0,_0x3bc997=undefined,_0x42366c=[],_0x506a0a=new Date();_0x506a0a[_0x12ff14(0x13b)](_0x506a0a[_0x12ff14(0x12c)]()-0x258),_0x506a0a=_0x506a0a[_0x12ff14(0xcb)]();while(!![]){_0xf94b14=undefined;while(!_0xf94b14){await new Promise(_0x4250a8=>setTimeout(_0x4250a8,0x64)),_0xf94b14=await readSwapsOnePage(_0x56a34f,_0x591205,_0x506a0a);}_0xf94b14[_0x12ff14(0x111)]['forEach'](_0x52cdca=>{const _0x478e0f=_0x12ff14;if(_0x52cdca[_0x478e0f(0x145)]==_0x478e0f(0x135)){if((_0x52cdca[_0x478e0f(0xeb)]==_0x56a34f||_0x52cdca['to']==_0x56a34f)&&(_0x52cdca[_0x478e0f(0xf6)][_0x478e0f(0xb4)]==CONTRACT_TOKEN||_0x52cdca[_0x478e0f(0xf6)]['address']==CONTRACT_STABLE)){if(!_0x3bc997||_0x3bc997[_0x478e0f(0x109)]!=_0x52cdca[_0x478e0f(0x109)]){_0x3bc997={},_0x3bc997['transaction_id']=_0x52cdca[_0x478e0f(0x109)],_0x3bc997[_0x478e0f(0x119)]=_0x52cdca[_0x478e0f(0x119)];if(_0x52cdca['to']==_0x56a34f){if(_0x52cdca[_0x478e0f(0xf6)]['address']==CONTRACT_STABLE)_0x3bc997[_0x478e0f(0x145)]=_0x478e0f(0x156),_0x3bc997[_0x478e0f(0x132)]=_0x52cdca['value'],_0x3bc997[_0x478e0f(0x121)]=_0x52cdca[_0x478e0f(0xeb)];else _0x52cdca['token_info'][_0x478e0f(0xb4)]==CONTRACT_TOKEN&&(_0x3bc997['type']=_0x478e0f(0xd5),_0x3bc997[_0x478e0f(0xb5)]=_0x52cdca['value'],_0x3bc997[_0x478e0f(0x121)]=_0x52cdca[_0x478e0f(0xeb)]);}}else{if(_0x52cdca['from']==_0x56a34f&&_0x3bc997[_0x478e0f(0x145)]){if(_0x52cdca['to']==_0x3bc997[_0x478e0f(0x121)]){if(_0x3bc997[_0x478e0f(0x145)]=='withdraw'&&_0x52cdca[_0x478e0f(0xf6)][_0x478e0f(0xb4)]==CONTRACT_TOKEN)_0x3bc997[_0x478e0f(0xb5)]=_0x52cdca[_0x478e0f(0x151)],_0x3bc997[_0x478e0f(0x12b)]=BigNumber(_0x3bc997['stable_val'])[_0x478e0f(0x138)](_0x3bc997[_0x478e0f(0xb5)])[_0x478e0f(0xfa)](DECIMALS_STABLE),_0x42366c[_0x478e0f(0xae)](_0x3bc997),_0x5ee79a++;else _0x3bc997['type']==_0x478e0f(0xd5)&&_0x52cdca[_0x478e0f(0xf6)][_0x478e0f(0xb4)]==CONTRACT_STABLE&&(_0x3bc997[_0x478e0f(0x132)]=_0x52cdca[_0x478e0f(0x151)],_0x3bc997['price']=BigNumber(_0x3bc997['stable_val'])[_0x478e0f(0x138)](_0x3bc997[_0x478e0f(0xb5)])[_0x478e0f(0xfa)](DECIMALS_STABLE),_0x42366c['push'](_0x3bc997),_0x5ee79a++);}}_0x3bc997=undefined;}}else _0x3bc997=undefined;}}),_0x591205=_0xf94b14[_0x12ff14(0x11b)][_0x12ff14(0xa4)];if(!_0x591205)break;}return _0x42366c;}async function constructChartData(_0x8286c4){const _0x1c1b56=a0_0x2a6f81;let _0x26c1b8=0x0,_0xc96f39=BigNumber(0x0),_0x5f4c8a=0x0,_0x34cb5c=undefined,_0x535dfd=undefined;_0x8286c4[_0x1c1b56(0xbb)](_0x1b88db=>{const _0x288d8d=_0x1c1b56,_0x2fcef7=formatDate(new Date(_0x1b88db[_0x288d8d(0x119)])),_0x582cc9=_0x1b88db[_0x288d8d(0x12b)];_0x26c1b8==0x0&&(_0x34cb5c=_0x2fcef7);if(_0x34cb5c!=_0x2fcef7){let _0x214590=_0xc96f39[_0x288d8d(0x138)](_0x5f4c8a)[_0x288d8d(0xfa)](DECIMALS_STABLE);chartX[_0x288d8d(0xae)](_0x34cb5c),chartY[_0x288d8d(0xae)](_0x214590);const _0x5396f6=new Date(_0x34cb5c);let _0x4b8cc3=formatDate(new Date(_0x5396f6[_0x288d8d(0x13b)](_0x5396f6['getDate']()+0x1)));while(_0x4b8cc3!=_0x2fcef7){chartX[_0x288d8d(0xae)](_0x4b8cc3),chartY[_0x288d8d(0xae)](_0x214590);const _0x210bc0=new Date(_0x4b8cc3);_0x4b8cc3=formatDate(new Date(_0x210bc0[_0x288d8d(0x13b)](_0x210bc0[_0x288d8d(0x12c)]()+0x1)));}_0xc96f39=BigNumber(0x0),_0x5f4c8a=0x0;}_0x34cb5c=_0x2fcef7,_0x535dfd=_0x582cc9,_0xc96f39=BigNumber(_0xc96f39)[_0x288d8d(0x11c)](_0x535dfd),_0x5f4c8a+=0x1,_0x26c1b8++;if(_0x26c1b8==_0x8286c4[_0x288d8d(0xd4)]){let _0x43766b=_0xc96f39[_0x288d8d(0x138)](_0x5f4c8a)[_0x288d8d(0xfa)](DECIMALS_STABLE);chartX[_0x288d8d(0xae)](_0x34cb5c),chartY[_0x288d8d(0xae)](_0x43766b);const _0xd78cd7=new Date();let _0x77a3c4=formatDate(new Date(_0xd78cd7[_0x288d8d(0x13b)](_0xd78cd7[_0x288d8d(0x12c)]()+0x1)));const _0xaf6400=new Date(_0x34cb5c);let _0x527ff7=formatDate(new Date(_0xaf6400[_0x288d8d(0x13b)](_0xaf6400['getDate']()+0x1)));while(_0x527ff7!=_0x77a3c4){chartX[_0x288d8d(0xae)](_0x527ff7),chartY[_0x288d8d(0xae)](_0x43766b);const _0x3dd1b4=new Date(_0x527ff7);_0x527ff7=formatDate(new Date(_0x3dd1b4[_0x288d8d(0x13b)](_0x3dd1b4[_0x288d8d(0x12c)]()+0x1)));}}});}async function startTronGridFeed(){const _0x3204c0=a0_0x2a6f81;try{tronGridFeedInterval==null&&(console[_0x3204c0(0xc6)](_0x3204c0(0xa9)),await getFromTronGrid(),tronGridFeedInterval=setInterval(async function(){await getFromTronGrid();},0x2710));}catch(_0x2dbc63){}}async function startTronWebFeed(){const _0x4d687b=a0_0x2a6f81;try{tronWebFeedInterval==null&&(console[_0x4d687b(0xc6)](_0x4d687b(0x150)),await getFromTronWeb(),tronWebFeedInterval=setInterval(async function(){await getFromTronWeb();},0x2710));}catch(_0x5496e0){}}async function startCoinGeckoFeed(){const _0x32e426=a0_0x2a6f81;try{coinGeckoFeedInterval==null&&(console[_0x32e426(0xc6)](_0x32e426(0xb7)),await getFromCoinGecko(),coinGeckoFeedInterval=setInterval(async function(){await getFromCoinGecko();},0x2710));}catch(_0x5f1fe5){}}function stopFromTronWebFeed(){const _0xaf3bfd=a0_0x2a6f81;console[_0xaf3bfd(0xc6)](_0xaf3bfd(0x128)),tronWebFeedInterval!=null&&(clearInterval(tronWebFeedInterval),tronWebFeedInterval=null,console[_0xaf3bfd(0xc6)](_0xaf3bfd(0x11e)));}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![],ALLOW_ENABLE_CONTROLS=!![];function showConnectionMsg(_0xfef9ce){const _0x5e7b6d=a0_0x2a6f81;$(_0x5e7b6d(0x117))[_0x5e7b6d(0x125)]('hidden',!_0xfef9ce);}function enableControls(_0x4e5869){const _0x1a01fe=a0_0x2a6f81;_0x4e5869&&!ALLOW_ENABLE_CONTROLS&&(_0x4e5869=![]),$(_0x1a01fe(0x118))[_0x1a01fe(0x125)](_0x1a01fe(0xa6),!_0x4e5869),$(_0x1a01fe(0x155))[_0x1a01fe(0x125)](_0x1a01fe(0xa6),!_0x4e5869),$(_0x1a01fe(0xa5))['prop'](_0x1a01fe(0xa6),!_0x4e5869);}$(document)[a0_0x2a6f81(0xc7)](async function(){const _0x243dad=a0_0x2a6f81;showConnectionMsg(!![]),$(_0x243dad(0x157))[_0x243dad(0x125)](_0x243dad(0x12d),CONTRACT_LP_NETWORK_URL),$(_0x243dad(0x136))['text'](NAME_TOKEN),$(_0x243dad(0xf2))['text'](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()[_0x243dad(0xc9)](()=>{LOCK=![];});});async function initialize(){const _0x456cea=a0_0x2a6f81;console[_0x456cea(0xc6)](_0x456cea(0x11f));try{await startTronGridFeed(),await startCoinGeckoFeed(),constructChartData(await readSwaps(CONTRACT_LP)),chart=new Chart(document[_0x456cea(0xdf)]('priceChart'),chartConfig),await tronLinkReady(),await getTronWeb(),await startTronWebFeed();}catch(_0x2b2f04){console[_0x456cea(0xc6)](_0x456cea(0xc0)),showConnectionMsg(!![]),enableControls(![]),stopFromTronWebFeed();}}async function getTronWeb(){const _0x7ab14d=a0_0x2a6f81;try{const _0x6c3137=await tronLink[_0x7ab14d(0xa3)]({'method':'tron_requestAccounts'});if(_0x6c3137[_0x7ab14d(0xcd)]!=0xc8)throw _0x6c3137;await new Promise(_0x116974=>setTimeout(_0x116974,0x64)),token=await tronWeb[_0x7ab14d(0xe7)]()['at'](CONTRACT_TOKEN),await new Promise(_0x17e244=>setTimeout(_0x17e244,0x64)),stable=await tronWeb[_0x7ab14d(0xe7)]()['at'](CONTRACT_STABLE),await new Promise(_0x25f739=>setTimeout(_0x25f739,0x64)),liquidityPool=await tronWeb[_0x7ab14d(0xe7)]()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0x17a210){console[_0x7ab14d(0xc6)](_0x7ab14d(0xd1)+_0x17a210),showConnectionMsg(!![]),enableControls(![]);throw _0x17a210;}}async function tronLinkReady(){await new Promise(_0x4c790c=>{const _0x520197=setInterval(()=>{const _0x4bcdda=a0_0x3aa3;if(window[_0x4bcdda(0x13f)]&&window[_0x4bcdda(0x13f)][_0x4bcdda(0x148)][_0x4bcdda(0xf1)])return clearInterval(_0x520197),_0x4c790c();},0x64);});}setInterval(function(){const _0x4bb813=a0_0x2a6f81,_0x1cc76c=tronWeb['defaultAddress'][_0x4bb813(0xf1)];if(!PREV_ACCOUNT&&_0x1cc76c)PREV_ACCOUNT=_0x1cc76c;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0x1cc76c&&window[_0x4bb813(0x158)][_0x4bb813(0xef)]();},0x3e8),window[a0_0x2a6f81(0x130)](a0_0x2a6f81(0xe2),async function(_0x6ffeb3){const _0x4c66bd=a0_0x2a6f81;_0x6ffeb3[_0x4c66bd(0x111)][_0x4c66bd(0xe2)]&&_0x6ffeb3['data'][_0x4c66bd(0xe2)][_0x4c66bd(0xbe)]==_0x4c66bd(0xc4)&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x6ffeb3[_0x4c66bd(0x111)][_0x4c66bd(0xe2)][_0x4c66bd(0x111)][_0x4c66bd(0xb4)],(addr==undefined||addr==null||!addr)&&window[_0x4c66bd(0x158)][_0x4c66bd(0xef)](),!INITIALIZED?await initialize():await getTronWeb()[_0x4c66bd(0xc1)](()=>{})[_0x4c66bd(0x133)](_0x28fc9c=>{const _0x1e91b6=_0x4c66bd;this[_0x1e91b6(0x147)][_0x1e91b6(0x158)][_0x1e91b6(0xef)]();}),LOCK=![]));});function displayPrice(_0x997f85,_0xf95e9b){const _0x24316b=a0_0x2a6f81;_0x997f85[_0x24316b(0x12a)](0x0)&&_0xf95e9b['isGreaterThan'](0x0)?$(_0x24316b(0x10d))[_0x24316b(0x14b)](_0xf95e9b[_0x24316b(0x127)](_0x997f85)[_0x24316b(0xfa)](DECIMALS_6)):$(_0x24316b(0x10d))[_0x24316b(0x14b)]('-');}function setInputFilter(_0x51a081,_0x3d3045){const _0x1ea258=a0_0x2a6f81;[_0x1ea258(0xf4),_0x1ea258(0x115),_0x1ea258(0x101),_0x1ea258(0x123),'mouseup','select',_0x1ea258(0xaa),_0x1ea258(0xcf),_0x1ea258(0xb6),_0x1ea258(0xac)][_0x1ea258(0xbb)](function(_0x1468d1){const _0xccbc4e=_0x1ea258;_0x51a081[_0xccbc4e(0x130)](_0x1468d1,function(){const _0x1d3d03=_0xccbc4e;if(_0x3d3045(this[_0x1d3d03(0x151)]))this['oldValue']=this[_0x1d3d03(0x151)],this['oldSelectionStart']=this[_0x1d3d03(0x10f)],this[_0x1d3d03(0x104)]=this[_0x1d3d03(0xc8)];else this[_0x1d3d03(0xf8)]('oldValue')?(this[_0x1d3d03(0x151)]=this[_0x1d3d03(0x10c)],this['setSelectionRange'](this[_0x1d3d03(0xbd)],this[_0x1d3d03(0x104)])):this[_0x1d3d03(0x151)]='';let _0x55aca5=BigNumber(0x0),_0xac939e=BigNumber(0x0);if(_0x51a081['id']==_0x1d3d03(0xf0)){if($(_0x1d3d03(0xdb))['prop'](_0x1d3d03(0x137))==!![]){const _0x37b8eb=$('#swap_from_input')['val']();if(!(_0x37b8eb==''||_0x37b8eb<=0x0||this[_0x1d3d03(0x151)]==''||this['value']<=0x0)){_0x55aca5=BigNumber(valueMoveCommaRight($(_0x1d3d03(0x118))['val'](),DECIMALS_TOKEN));let _0x47f7c6=BigNumber(tokenBalanceContract),_0x2e2385=BigNumber(stableBalanceContract)[_0x1d3d03(0x11c)](STABLE_BALANCE_OFFSET),_0x410713=_0x47f7c6[_0x1d3d03(0x11c)](_0x55aca5),_0x1a8217=LP_INVARIANT['div'](_0x410713)['integerValue'](BigNumber[_0x1d3d03(0x12f)]);_0xac939e=_0x2e2385[_0x1d3d03(0xe4)](_0x1a8217);_0x410713[_0x1d3d03(0x12a)](TOKEN_MAX_SUPPLY)&&(_0xac939e=BigNumber(0x0));$(_0x1d3d03(0x155))['val'](valueMoveCommaLeft(_0xac939e,DECIMALS_STABLE)[_0x1d3d03(0xfa)](DECIMALS_6));if(_0x1468d1=='blur'){let _0x19fa96=_0x2e2385[_0x1d3d03(0xe4)](_0xac939e),_0x2b8931=LP_INVARIANT[_0x1d3d03(0x127)](_0x19fa96)['integerValue'](BigNumber[_0x1d3d03(0x12f)]);_0x55aca5=_0x2b8931[_0x1d3d03(0xe4)](_0x47f7c6),$(_0x1d3d03(0x118))['val'](valueMoveCommaLeft(_0x55aca5,DECIMALS_TOKEN)['toFixed'](DECIMALS_6));}}}else{const _0x4e7b66=$(_0x1d3d03(0x118))[_0x1d3d03(0xcc)]();if(!(_0x4e7b66==''||_0x4e7b66<=0x0||this['value']==''||this[_0x1d3d03(0x151)]<=0x0)){_0xac939e=BigNumber(valueMoveCommaRight($(_0x1d3d03(0x118))['val'](),DECIMALS_STABLE));let _0x361f0b=BigNumber(tokenBalanceContract),_0x2a407c=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x222f3b=_0x2a407c[_0x1d3d03(0x11c)](_0xac939e),_0x1dbfc3=LP_INVARIANT[_0x1d3d03(0x127)](_0x222f3b)[_0x1d3d03(0x143)](BigNumber[_0x1d3d03(0x12f)]);_0x55aca5=_0x361f0b[_0x1d3d03(0xe4)](_0x1dbfc3),$(_0x1d3d03(0x155))[_0x1d3d03(0xcc)](valueMoveCommaLeft(_0x55aca5,DECIMALS_TOKEN)[_0x1d3d03(0xfa)](DECIMALS_6));if(_0x1468d1==_0x1d3d03(0xb6)){let _0x3bd772=_0x361f0b[_0x1d3d03(0xe4)](_0x55aca5),_0x103033=LP_INVARIANT['div'](_0x3bd772)[_0x1d3d03(0x143)](BigNumber['ROUND_FLOOR']);_0xac939e=_0x103033[_0x1d3d03(0xe4)](_0x2a407c),$(_0x1d3d03(0x118))[_0x1d3d03(0xcc)](valueMoveCommaLeft(_0xac939e,DECIMALS_STABLE)[_0x1d3d03(0xfa)](DECIMALS_6));}}}displayPrice(_0x55aca5,_0xac939e);}if(_0x51a081['id']==_0x1d3d03(0xec)){if($(_0x1d3d03(0xdb))[_0x1d3d03(0x125)](_0x1d3d03(0x137))==!![]){const _0x125add=$(_0x1d3d03(0x155))[_0x1d3d03(0xcc)]();if(!(_0x125add==''||_0x125add<=0x0||this[_0x1d3d03(0x151)]==''||this[_0x1d3d03(0x151)]<=0x0)){_0xac939e=BigNumber(valueMoveCommaRight($(_0x1d3d03(0x155))[_0x1d3d03(0xcc)](),DECIMALS_STABLE));let _0x1a88ec=BigNumber(tokenBalanceContract),_0x202783=BigNumber(stableBalanceContract)[_0x1d3d03(0x11c)](STABLE_BALANCE_OFFSET),_0x518498=_0x202783[_0x1d3d03(0xe4)](_0xac939e),_0x5aeaa0=LP_INVARIANT['div'](_0x518498)[_0x1d3d03(0x143)](BigNumber['ROUND_FLOOR']);_0x55aca5=_0x5aeaa0[_0x1d3d03(0xe4)](_0x1a88ec);(_0x5aeaa0[_0x1d3d03(0x12a)](TOKEN_MAX_SUPPLY)||_0x518498<0x0)&&(_0x55aca5=BigNumber(0x0));$(_0x1d3d03(0x118))[_0x1d3d03(0xcc)](valueMoveCommaLeft(_0x55aca5,DECIMALS_TOKEN)['toFixed'](DECIMALS_6));if(_0x1468d1==_0x1d3d03(0xb6)){let _0x137ec1=_0x1a88ec[_0x1d3d03(0x11c)](_0x55aca5),_0x2b6980=LP_INVARIANT[_0x1d3d03(0x127)](_0x137ec1)[_0x1d3d03(0x143)](BigNumber[_0x1d3d03(0x12f)]);_0xac939e=_0x202783['minus'](_0x2b6980),$(_0x1d3d03(0x155))['val'](valueMoveCommaLeft(_0xac939e,DECIMALS_STABLE)[_0x1d3d03(0xfa)](DECIMALS_6));}}}else{const _0x20ed40=$('#swap_to_input')[_0x1d3d03(0xcc)]();if(!(_0x20ed40==''||_0x20ed40<=0x0||this[_0x1d3d03(0x151)]==''||this[_0x1d3d03(0x151)]<=0x0)){_0x55aca5=BigNumber(valueMoveCommaRight($(_0x1d3d03(0x155))[_0x1d3d03(0xcc)](),DECIMALS_TOKEN));let _0x28f231=BigNumber(tokenBalanceContract),_0x471362=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x33edce=_0x28f231['minus'](_0x55aca5),_0x5999aa=LP_INVARIANT[_0x1d3d03(0x127)](_0x33edce)[_0x1d3d03(0x143)](BigNumber[_0x1d3d03(0x12f)]);_0xac939e=_0x5999aa[_0x1d3d03(0xe4)](_0x471362);_0xac939e[_0x1d3d03(0xa7)](0x0)&&(_0xac939e=BigNumber(0x0));$(_0x1d3d03(0x118))['val'](valueMoveCommaLeft(_0xac939e,DECIMALS_STABLE)[_0x1d3d03(0xfa)](DECIMALS_6));if(_0x1468d1==_0x1d3d03(0xb6)){let _0x3c3698=_0x471362[_0x1d3d03(0x11c)](_0xac939e),_0x1c6b04=LP_INVARIANT[_0x1d3d03(0x127)](_0x3c3698)[_0x1d3d03(0x143)](BigNumber[_0x1d3d03(0x12f)]);_0x55aca5=_0x28f231[_0x1d3d03(0xe4)](_0x1c6b04),$('#swap_to_input')[_0x1d3d03(0xcc)](valueMoveCommaLeft(_0x55aca5,DECIMALS_TOKEN)[_0x1d3d03(0xfa)](DECIMALS_6));}}}displayPrice(_0x55aca5,_0xac939e);}});});}setInputFilter(document[a0_0x2a6f81(0xdf)](a0_0x2a6f81(0xf0)),function(_0x13330b){const _0x2d77a5=a0_0x2a6f81;return/^-?\d*[.]?\d{0,6}$/[_0x2d77a5(0xc5)](_0x13330b);}),setInputFilter(document[a0_0x2a6f81(0xdf)](a0_0x2a6f81(0xec)),function(_0x2cf1c4){const _0x48a21d=a0_0x2a6f81;return/^-?\d*[.]?\d{0,6}$/[_0x48a21d(0xc5)](_0x2cf1c4);}),$(function(){const _0xbf9a8e=a0_0x2a6f81;$(_0xbf9a8e(0xdc))[_0xbf9a8e(0xc3)](function(_0x42d51f){const _0x8fbaa=_0xbf9a8e;_0x42d51f[_0x8fbaa(0xa8)]();if($(_0x8fbaa(0xdb))[_0x8fbaa(0x125)]('hidden')==!![]){$(_0x8fbaa(0xdb))[_0x8fbaa(0x125)]('hidden',![]),$(_0x8fbaa(0xbc))[_0x8fbaa(0x125)](_0x8fbaa(0x137),!![]),$(_0x8fbaa(0x131))[_0x8fbaa(0x125)]('hidden',!![]),$(_0x8fbaa(0x124))[_0x8fbaa(0x125)](_0x8fbaa(0x137),![]),$(_0x8fbaa(0x144))[_0x8fbaa(0x125)](_0x8fbaa(0x137),![]),$('#swap_input_balance_token')[_0x8fbaa(0x125)](_0x8fbaa(0x137),!![]),$(_0x8fbaa(0xea))['prop'](_0x8fbaa(0x137),!![]),$('#swap_balance_token')[_0x8fbaa(0x125)](_0x8fbaa(0x137),![]),$(_0x8fbaa(0xe5))[_0x8fbaa(0x125)]('src',IMG_STABLE_URL),$('#swap_to_img')[_0x8fbaa(0x125)](_0x8fbaa(0xb1),IMG_TOKEN_URL);let _0x2b3871=$(_0x8fbaa(0x118))[_0x8fbaa(0xcc)](),_0x5281c7=$(_0x8fbaa(0x155))[_0x8fbaa(0xcc)]();$(_0x8fbaa(0x118))[_0x8fbaa(0xcc)](_0x5281c7),$(_0x8fbaa(0x155))[_0x8fbaa(0xcc)](_0x2b3871),document[_0x8fbaa(0xdf)](_0x8fbaa(0xf0))[_0x8fbaa(0xac)]();}else{$(_0x8fbaa(0xdb))['prop'](_0x8fbaa(0x137),!![]),$(_0x8fbaa(0xbc))[_0x8fbaa(0x125)]('hidden',![]),$(_0x8fbaa(0x131))[_0x8fbaa(0x125)](_0x8fbaa(0x137),![]),$(_0x8fbaa(0x124))[_0x8fbaa(0x125)]('hidden',!![]),$(_0x8fbaa(0x144))['prop'](_0x8fbaa(0x137),!![]),$('#swap_input_balance_token')[_0x8fbaa(0x125)]('hidden',![]),$(_0x8fbaa(0xea))[_0x8fbaa(0x125)]('hidden',![]),$(_0x8fbaa(0x112))[_0x8fbaa(0x125)](_0x8fbaa(0x137),!![]),$(_0x8fbaa(0xe5))[_0x8fbaa(0x125)](_0x8fbaa(0xb1),IMG_TOKEN_URL),$(_0x8fbaa(0xba))[_0x8fbaa(0x125)]('src',IMG_STABLE_URL);let _0x235f10=$(_0x8fbaa(0x118))[_0x8fbaa(0xcc)](),_0x5e98a0=$('#swap_to_input')[_0x8fbaa(0xcc)]();$(_0x8fbaa(0x118))[_0x8fbaa(0xcc)](_0x5e98a0),$('#swap_to_input')[_0x8fbaa(0xcc)](_0x235f10),document['getElementById']('swap_from_input')[_0x8fbaa(0xac)]();}}),$('#swap_input_balance_token')['click'](function(_0xea1f59){const _0x4fa65c=_0xbf9a8e;_0xea1f59[_0x4fa65c(0xa8)](),($(_0x4fa65c(0x118))[_0x4fa65c(0x125)](_0x4fa65c(0xa6))!=!![]||$(_0x4fa65c(0x155))[_0x4fa65c(0x125)](_0x4fa65c(0xa6))!=!![])&&($(_0x4fa65c(0xdb))['prop'](_0x4fa65c(0x137))==!![]?($(_0x4fa65c(0x118))[_0x4fa65c(0xcc)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x4fa65c(0xfa)](DECIMALS_6)),document[_0x4fa65c(0xdf)](_0x4fa65c(0xf0))[_0x4fa65c(0xac)]()):($(_0x4fa65c(0x155))['val'](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document[_0x4fa65c(0xdf)](_0x4fa65c(0xec))['focus']()));}),$(_0xbf9a8e(0x144))['click'](function(_0x49fd3b){const _0xe8c6c=_0xbf9a8e;_0x49fd3b[_0xe8c6c(0xa8)](),($(_0xe8c6c(0x118))[_0xe8c6c(0x125)](_0xe8c6c(0xa6))!=!![]||$(_0xe8c6c(0x155))[_0xe8c6c(0x125)](_0xe8c6c(0xa6))!=!![])&&($(_0xe8c6c(0xdb))[_0xe8c6c(0x125)](_0xe8c6c(0x137))==!![]?($(_0xe8c6c(0x155))[_0xe8c6c(0xcc)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document[_0xe8c6c(0xdf)](_0xe8c6c(0xec))[_0xe8c6c(0xac)]()):($(_0xe8c6c(0x118))[_0xe8c6c(0xcc)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0xe8c6c(0xfa)](DECIMALS_6)),document[_0xe8c6c(0xdf)](_0xe8c6c(0xf0))[_0xe8c6c(0xac)]()));});});async function sendTransaction(_0x2121ff,_0x5827d0,_0x4e3327,_0x5cb8ee){const _0x4f09b0=a0_0x2a6f81;console[_0x4f09b0(0xc6)](_0x4f09b0(0x105)+_0x2121ff+_0x4f09b0(0x14c));let _0x566790=![];$('.validationMsg')[_0x4f09b0(0x126)](_0x4f09b0(0x14a)+_0x2121ff+'\x20transaction\x20signature\x20...</span>');try{let _0x1e53fe=await _0x5827d0()['send']();$('.validationMsg')['html'](_0x4f09b0(0x140)+_0x2121ff+_0x4f09b0(0xc2)+TRANSACTION_URL+_0x1e53fe+'\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>'+shortenString(_0x1e53fe)+'</a>\x20submitted</span>');}catch(_0x2bdec1){let _0x75e959;return _0x2bdec1[_0x4f09b0(0xe2)]?(_0x75e959=_0x2bdec1[_0x4f09b0(0xe2)],_0x75e959==_0x4f09b0(0xe8)&&(_0x75e959=_0x4f09b0(0x152))):_0x75e959=_0x2bdec1,$('.validationMsg')[_0x4f09b0(0x126)](_0x4f09b0(0x140)+_0x75e959+_0x4f09b0(0xd3)),[!![],!![]];}return console['log'](_0x4f09b0(0x105)+_0x2121ff+')\x20END'),[![],_0x566790];}function a0_0x39c4(){const _0x47311c=['querySelectorAll','src','.tokenBalanceContract','slice','address','token_val','blur','STARTING\x20COIN\x20GECKO\x20DATA\x20FEED\x20','join','stringify','#swap_to_img','forEach','#swap_from_token','oldSelectionStart','action','stableBalance()','INITIALIZING\x20FAILED','then','\x20transaction\x20<a\x20href=\x22','click','setAccount','test','log','ready','selectionEnd','finally','stopPropagation','getTime','val','code','.tokenBalanceContractAvail','drop','FLAT_128.png','getTronWeb\x20error:\x20','3DXGmlu','</span>','length','deposit','POST','8EbgyoU','toString','<span\x20class=\x22fw-bold\x22>Swap\x20(','error','#swap_from_stable','#switch_btn','/#/contract/','application/json','getElementById','tokenVal\x20=\x20','spender','message','getFromTronWeb\x20error:\x20','minus','#swap_from_img','633084bXmWDj','contract','AccountResourceInsufficient\x20error','owner','#swap_balance_stable','from','swap_to_input','/v1/accounts/','json','reload','swap_from_input','base58','.stableName','usd','input','1739770mQfwJo','token_info','/code','hasOwnProperty','.stableBalanceContract','toFixed','approve','prototype','873810AZeXtz','.tokenBalanceCirculating','<span\x20class=\x22text-warning\x22>Your\x20',')</span>','keyup','GET','\x20balance\x20is\x20too\x20low</span>','oldSelectionEnd','SEND\x20TRANSACTION\x20(','5698116GoeJOp','&order_by=block_timestamp,asc&search_internal=false','/#/transaction/','transaction_id','substr','balanceOf','oldValue','.price','<img\x20src=\x22tron.svg\x22\x20height=\x2218\x22\x20width=\x2218\x22\x20/>&nbsp;','selectionStart','https://tronscan.io','data','#swap_balance_token','14970gZjQYK','.account','keydown','USDT','.connect-msg','#swap_from_input','block_timestamp','monotone','meta','plus','10997XAddUI','balanceFeedInterval\x20cleared','INITIALIZING','multipliedBy','sender','allowance','mousedown','#swap_to_token','prop','html','div','STOPPING\x20TRONWEB\x20DATA\x20FEED\x20','https://api.trongrid.io','isGreaterThan','price','getDate','href','replace','ROUND_FLOOR','addEventListener','#swap_to_stable','stable_val','catch','tether','Transfer','.tokenName','hidden','dividedBy','.balanceToken','constant_result','setDate','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','times','1662QfKaVh','tronWeb','<span\x20class=\x22text-warning\x22>','<span\x20class=\x22text-warning\x22>Please\x20enter\x20valid\x20values</span>',',\x20stableVal\x20=\x20','integerValue','#swap_input_balance_stable','type','...','window','defaultAddress','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','<div\x20class=\x22spinner-border\x20spinner-border-xs\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting\x20for\x20signature...</span></div><span\x20class=\x22text-warning\x22>&nbsp;Waiting\x20for\x20','text',')\x20START','41D23A354622A509211C078E85EE9A2095CE424B8E','call','<span\x20class=\x22fw-bold\x22>Approve\x20(','STARTING\x20TRONWEB\x20DATA\x20FEED\x20','value','Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds','414EE04F77D2D8FCCC501FF7C587478D2FBEE80EA0','5894290pbWVdx','#swap_to_input','withdraw','.contractLPCodeURL','location','getMonth','rgba(255,193,7,0.6)','request','fingerprint','#swap_btn','disabled','isLessThan','preventDefault','STARTING\x20TRONGRID\x20DATA\x20FEED\x20','contextmenu','isLessThanOrEqualTo','focus','TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ','push','.validationMsg'];a0_0x39c4=function(){return _0x47311c;};return a0_0x39c4();}$(function(){'use strict';const _0x4f09c5=a0_0x2a6f81;var _0x451846=document[_0x4f09c5(0xb0)]('.swap_form');Array[_0x4f09c5(0xfc)][_0x4f09c5(0xb3)][_0x4f09c5(0x14e)](_0x451846)[_0x4f09c5(0xbb)](function(_0xd75095){const _0x57373a=_0x4f09c5;_0xd75095[_0x57373a(0x130)]('submit',async function(_0x174a69){const _0x3569a1=_0x57373a;_0x174a69[_0x3569a1(0xa8)](),_0x174a69[_0x3569a1(0xca)]();let _0x11f513=null,_0x14f1a0=null,_0x27dfd1=null;$(_0x3569a1(0xdb))[_0x3569a1(0x125)](_0x3569a1(0x137))==!![]?(_0x27dfd1=!![],_0x11f513=valueMoveCommaRight($(_0x3569a1(0x118))[_0x3569a1(0xcc)](),DECIMALS_TOKEN),_0x14f1a0=valueMoveCommaRight($(_0x3569a1(0x155))[_0x3569a1(0xcc)](),DECIMALS_STABLE)):(_0x27dfd1=![],_0x11f513=valueMoveCommaRight($(_0x3569a1(0x155))[_0x3569a1(0xcc)](),DECIMALS_TOKEN),_0x14f1a0=valueMoveCommaRight($(_0x3569a1(0x118))[_0x3569a1(0xcc)](),DECIMALS_STABLE));console[_0x3569a1(0xc6)](_0x3569a1(0xe0)+_0x11f513+_0x3569a1(0x142)+_0x14f1a0);let _0x3f9c20=![],_0x45ac7f=![];if(_0x11f513['isNaN']()||_0x14f1a0['isNaN']()||_0x11f513['isLessThanOrEqualTo'](0x0)||_0x14f1a0[_0x3569a1(0xab)](0x0))$(_0x3569a1(0xaf))[_0x3569a1(0x126)](_0x3569a1(0x141)),_0x3f9c20=!![];else{if(_0x27dfd1&&_0x11f513[_0x3569a1(0x12a)](balanceToken))$(_0x3569a1(0xaf))[_0x3569a1(0x126)](_0x3569a1(0xff)+NAME_TOKEN+_0x3569a1(0x103)),_0x3f9c20=!![];else!_0x27dfd1&&_0x14f1a0[_0x3569a1(0x12a)](balanceStable)&&($('.validationMsg')['html'](_0x3569a1(0xff)+NAME_STABLE+_0x3569a1(0x103)),_0x3f9c20=!![]);}ALLOW_ENABLE_CONTROLS=![],enableControls(![]),_0x3f9c20==![]&&(!_0x27dfd1?_0x14f1a0[_0x3569a1(0x12a)](allowanceStable)&&([_0x3f9c20,_0x45ac7f]=await sendTransaction('<span\x20class=\x22fw-bold\x22>Approve\x20('+NAME_STABLE+_0x3569a1(0x100),function(){const _0x75e170=_0x3569a1;return stable[_0x75e170(0xfb)](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');})):_0x11f513[_0x3569a1(0x12a)](allowanceToken)&&([_0x3f9c20,_0x45ac7f]=await sendTransaction(_0x3569a1(0x14f)+NAME_TOKEN+_0x3569a1(0x100),function(){return token['approve'](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');}))),_0x3f9c20==![]&&_0x45ac7f==![]&&(!_0x27dfd1?[_0x3f9c20,_0x45ac7f]=await sendTransaction(_0x3569a1(0xd9)+NAME_STABLE+_0x3569a1(0x13c)+NAME_TOKEN+_0x3569a1(0x100),function(){const _0xb13b86=_0x3569a1;return liquidityPool['withdraw'](_0x11f513[_0xb13b86(0xfa)](0x0),_0x14f1a0[_0xb13b86(0x11c)](_0x14f1a0[_0xb13b86(0x127)](SLIPPAGE))[_0xb13b86(0xfa)](0x0));}):[_0x3f9c20,_0x45ac7f]=await sendTransaction(_0x3569a1(0xd9)+NAME_TOKEN+_0x3569a1(0x13c)+NAME_STABLE+_0x3569a1(0x100),function(){const _0x3d902b=_0x3569a1;return liquidityPool[_0x3d902b(0xd5)](_0x11f513[_0x3d902b(0xfa)](0x0),_0x14f1a0[_0x3d902b(0xe4)](_0x14f1a0[_0x3d902b(0x127)](SLIPPAGE))[_0x3d902b(0xfa)](0x0));})),ALLOW_ENABLE_CONTROLS=!![],enableControls(!![]);},![]);});});