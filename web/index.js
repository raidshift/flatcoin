const a0_0x12b4ef=a0_0x2a90;(function(_0x3e8599,_0x4d8020){const _0x305f22=a0_0x2a90,_0x3e7835=_0x3e8599();while(!![]){try{const _0x3faa87=-parseInt(_0x305f22(0x135))/0x1+parseInt(_0x305f22(0x166))/0x2+parseInt(_0x305f22(0x1c6))/0x3*(-parseInt(_0x305f22(0x123))/0x4)+-parseInt(_0x305f22(0x177))/0x5*(parseInt(_0x305f22(0x1a3))/0x6)+parseInt(_0x305f22(0x16f))/0x7*(parseInt(_0x305f22(0x17f))/0x8)+parseInt(_0x305f22(0x12a))/0x9+parseInt(_0x305f22(0x159))/0xa;if(_0x3faa87===_0x4d8020)break;else _0x3e7835['push'](_0x3e7835['shift']());}catch(_0x446807){_0x3e7835['push'](_0x3e7835['shift']());}}}(a0_0x40cb,0xe6466));let CONTRACT_LP=a0_0x12b4ef(0x1b2),CONTRACT_LP_HEX=a0_0x12b4ef(0x1bc),CONTRACT_TOKEN=a0_0x12b4ef(0x169),CONTRACT_STABLE=a0_0x12b4ef(0x15a),TRONSCAN_URL_PREFIX='https://tronscan.io',TRONGRID_URL_PREFIX=a0_0x12b4ef(0x196),ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=![];const COIN_GECKO_FEED_URL=a0_0x12b4ef(0x138);let IMG_TOKEN_URL=a0_0x12b4ef(0x118),IMG_STABLE_URL='usdt.png',NAME_TOKEN=a0_0x12b4ef(0x162),NAME_STABLE=a0_0x12b4ef(0x18e),DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY=a0_0x12b4ef(0x111),STABLE_BALANCE_OFFSET='1000000000',LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)[a0_0x12b4ef(0x197)](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+'/#/contract/'+CONTRACT_LP+a0_0x12b4ef(0x15b),TRANSACTION_URL=TRONSCAN_URL_PREFIX+'/#/transaction/',TRC20_TOKEN_APPROVE_OWNER=a0_0x12b4ef(0x124),TRC20_TOKEN_APPROVE_SPENDER=a0_0x12b4ef(0x11d),TRC20_TOKEN_APPROVE_VALUE=a0_0x12b4ef(0x172),TRC20_STABLE_APPROVE_OWNER=a0_0x12b4ef(0x124),TRC20_STABLE_APPROVE_SPENDER=a0_0x12b4ef(0x11d),TRC20_STABLE_APPROVE_VALUE='value',token=null,stable=null,liquidityPool=null,tronWebFeedInterval=null,tronGridFeedInterval=null,coinGeckoFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null,usdtPrice=null,marketCap=null;const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0,SLIPPAGE=0x3e8;let chart=undefined,chartX=[],chartY=[];const data={'labels':chartX,'datasets':[{'data':chartY,'fill':!![],'backgroundColor':'rgba(255,193,7,0.2)','borderColor':a0_0x12b4ef(0x19c),'cubicInterpolationMode':a0_0x12b4ef(0x156),'tension':0.4}]},chartConfig={'type':'line','data':data,'options':{'maintainAspectRatio':![],'plugins':{'legend':{'display':![]},'tooltip':{'enabled':![]}},'elements':{'point':{'radius':0x0}},'scales':{'x':{'grid':{'display':![],'drawBorder':![]}},'y':{'grid':{'display':!![],'drawBorder':![]}}}}};function a0_0x40cb(){const _0x5e1e25=['selectionStart','STARTING\x20TRONWEB\x20DATA\x20FEED\x20','click','ready',')\x20START','send','isLessThanOrEqualTo','183285FeFIrs','.account','STARTING\x20TRONGRID\x20DATA\x20FEED\x20','https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=USD','length','priceChart','val','toFixed','.validationMsg','contextmenu','oldValue','/v1/accounts/','html','input','message','414EE04F77D2D8FCCC501FF7C587478D2FBEE80EA0','text','/wallet/triggersmartcontract','#swap_balance_stable','#swap_to_input','selectionEnd','tokenBalance()','#swap_to_stable','getDate','src','approve','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','then','application/json','select','stopPropagation','reload','keydown','monotone','padStart','submit','13690260Gmivwf','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','/code','log','#switch_btn','getFromTronWeb\x20error:\x20','join','getTronWeb\x20error:\x20','.balanceToken','FLAT','hasOwnProperty','INITIALIZING\x20FAILED','stableBalance()','695714SfaIQo','window','#swap_balance_token','TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ','#swap_input_balance_token','keyup','.swap_form','&fingerprint=','sender','1771xjcPQv','focus','.price','value','.balanceStable','minus',')\x20END','STOPPING\x20TRONWEB\x20DATA\x20FEED\x20','9059665xnWSvY','getMonth','#swap_btn','integerValue','json','.contractLPCodeURL','getTime','setDate','57496iNOgaO','&order_by=block_timestamp,asc&search_internal=false','#swap_from_token','isLessThan','mouseup','action','#swap_from_input','address','</a>\x20submitted</span>','contract','balanceOf','forEach','dividedBy','swap_to_input','token_info','USDT','push','tron_requestAccounts','GET','/transactions/trc20?limit=200&min_timestamp=','location','from','preventDefault','https://api.trongrid.io','times','INITIALIZING','getElementById','catch','\x20balance\x20is\x20too\x20low</span>','rgba(255,193,7,0.6)','withdraw','.connect-msg','.currentMarketPrice','disabled','allowance','#swap_from_img','6ZZkDCU','div','mousedown','...','balanceFeedInterval\x20cleared','getFullYear','remaining','test','block_timestamp','tether',')</span>','AccountResourceInsufficient\x20error','hidden','addEventListener','#swap_to_img','TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs','#swap_from_stable','setSelectionRange','.tokenBalanceContractAvail','blur','tronWeb','price','<span\x20class=\x22text-warning\x22>','plus','transaction_id','41D23A354622A509211C078E85EE9A2095CE424B8E','prop','code','.stableName','<span\x20class=\x22fw-bold\x22>Swap\x20(','stable_val','data','#swap_input_balance_stable','base58','slice','147rVPSRt','POST','querySelectorAll','</span>','swap_from_input','deposit','1000000000000','#swap_to_token','usd','type','oldSelectionEnd','substr','\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>','FLAT_128.png','call','\x20transaction\x20<a\x20href=\x22','replace','token_val','spender','ROUND_FLOOR','<span\x20class=\x22fw-bold\x22>Approve\x20(','drop','defaultAddress','fingerprint','59572vPZfPi','owner','toString','isNaN','<span\x20class=\x22text-warning\x22>Please\x20enter\x20valid\x20values</span>','0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF','.tokenName','1196883SWQoqv','.tokenBalanceCirculating','error','isGreaterThan'];a0_0x40cb=function(){return _0x5e1e25;};return a0_0x40cb();}cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function formatDate(_0x5ba587){const _0x99aae5=a0_0x12b4ef;return _0x5ba587[_0x99aae5(0x1a8)]()+'-'+(_0x5ba587[_0x99aae5(0x178)]()+0x1)[_0x99aae5(0x125)]()[_0x99aae5(0x157)](0x2,'0')+'-'+_0x5ba587['getDate']()[_0x99aae5(0x125)]()[_0x99aae5(0x157)](0x2,'0');}function shortenString(_0x229a52){const _0x12f18c=a0_0x12b4ef;let _0x4a31b8=_0x229a52;return _0x4a31b8[_0x12f18c(0x116)](0x0,0x5)+_0x12f18c(0x1a6)+_0x4a31b8[_0x12f18c(0x116)](_0x4a31b8[_0x12f18c(0x139)]-0x5,_0x4a31b8[_0x12f18c(0x139)]);}function valueMoveCommaLeft(_0x202da9,_0x489d3d){const _0x52ac45=a0_0x12b4ef;return BigNumber(_0x202da9)[_0x52ac45(0x1a4)](0xa**_0x489d3d);}function valueMoveCommaRight(_0x1dced2,_0x5c541f){return BigNumber(_0x1dced2)['times'](0xa**_0x5c541f);}function adjustDecimals(_0x50f864){const _0x28ce01=a0_0x12b4ef;let _0x559bc0,_0x234140=BigNumber(_0x50f864);if(_0x234140['isLessThan'](0x1))_0x559bc0=DECIMALS_6;else _0x234140[_0x28ce01(0x182)](0x2710)?_0x559bc0=DECIMALS_2:_0x559bc0=DECIMALS_0;return _0x234140[_0x28ce01(0x13c)](_0x559bc0)[_0x28ce01(0x11b)](cropZerosRegEx,'$1');}function numberWithCommas(_0xc333a9){const _0x2e3683=a0_0x12b4ef;var _0x106f38=_0xc333a9['toString']()['split']('.');return _0x106f38[0x0]=_0x106f38[0x0]['replace'](/\B(?=(\d{3})+(?!\d))/g,','),_0x106f38[_0x2e3683(0x15f)]('.');}async function readFromTronGrid(_0x218b26){const _0x1661f4=a0_0x12b4ef,_0x320947={'method':_0x1661f4(0x10c),'headers':{'Accept':'application/json','Content-Type':_0x1661f4(0x151)},'body':JSON['stringify']({'owner_address':_0x1661f4(0x144),'contract_address':CONTRACT_LP_HEX,'function_selector':_0x218b26})};return await fetch(TRONGRID_URL_PREFIX+_0x1661f4(0x146),_0x320947)[_0x1661f4(0x150)](_0x162119=>_0x162119['json']())[_0x1661f4(0x150)](_0x643c15=>{return _0x643c15['constant_result'][0x0];})[_0x1661f4(0x19a)](_0x530136=>{console['error'](_0x530136);});}async function getFromTronWeb(){const _0x9ec45e=a0_0x12b4ef;try{await new Promise(_0x258450=>setTimeout(_0x258450,0x64)),balanceToken=String(await token[_0x9ec45e(0x189)](window['tronWeb']['defaultAddress'][_0x9ec45e(0x1c4)])[_0x9ec45e(0x119)]()),await new Promise(_0x535910=>setTimeout(_0x535910,0x64)),balanceStable=String(await stable[_0x9ec45e(0x189)](window[_0x9ec45e(0x1b7)]['defaultAddress'][_0x9ec45e(0x1c4)])[_0x9ec45e(0x119)]()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token[_0x9ec45e(0x1a1)](window[_0x9ec45e(0x1b7)][_0x9ec45e(0x121)][_0x9ec45e(0x1c4)],CONTRACT_LP)[_0x9ec45e(0x119)]())[_0x9ec45e(0x1a9)]):allowanceToken=String(await token['allowance'](window[_0x9ec45e(0x1b7)][_0x9ec45e(0x121)][_0x9ec45e(0x1c4)],CONTRACT_LP)['call']()),await new Promise(_0x39a04e=>setTimeout(_0x39a04e,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable['allowance'](window[_0x9ec45e(0x1b7)][_0x9ec45e(0x121)]['base58'],CONTRACT_LP)[_0x9ec45e(0x119)]())[_0x9ec45e(0x1a9)]):allowanceStable=String(await stable[_0x9ec45e(0x1a1)](window[_0x9ec45e(0x1b7)][_0x9ec45e(0x121)][_0x9ec45e(0x1c4)],CONTRACT_LP)[_0x9ec45e(0x119)]()),$(_0x9ec45e(0x161))[_0x9ec45e(0x145)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x9ec45e(0x13c)](DECIMALS_6)[_0x9ec45e(0x11b)](cropZerosRegEx,'$1')),$(_0x9ec45e(0x173))['text'](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)[_0x9ec45e(0x13c)](DECIMALS_6)[_0x9ec45e(0x11b)](cropZerosRegEx,'$1')),$(_0x9ec45e(0x136))[_0x9ec45e(0x141)]('<img\x20src=\x22tron.svg\x22\x20height=\x2218\x22\x20width=\x2218\x22\x20/>&nbsp;'+shortenString(window[_0x9ec45e(0x1b7)][_0x9ec45e(0x121)][_0x9ec45e(0x1c4)])),enableControls(!![]);}catch(_0x210980){console[_0x9ec45e(0x15c)](_0x9ec45e(0x15e)+_0x210980);throw _0x210980;}}async function getFromTronGrid(){const _0x44d0f2=a0_0x12b4ef;await new Promise(_0x488140=>setTimeout(_0x488140,0x64));let _0x472f77=undefined,_0x289950=undefined;while(!_0x472f77){{await new Promise(_0x74e233=>setTimeout(_0x74e233,0x64)),_0x472f77=await readFromTronGrid(_0x44d0f2(0x14a));}}while(!_0x289950){{await new Promise(_0x3cc243=>setTimeout(_0x3cc243,0x64)),_0x289950=await readFromTronGrid(_0x44d0f2(0x165));}}tokenBalanceContract=BigNumber('0x'+_0x472f77)['toFixed'](),stableBalanceContract=BigNumber('0x'+_0x289950)[_0x44d0f2(0x13c)](),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)[_0x44d0f2(0x1ba)](STABLE_BALANCE_OFFSET)[_0x44d0f2(0x1a4)](tokenBalanceContract)['toFixed'](DECIMALS_6)),$('.tokenBalanceContract')[_0x44d0f2(0x145)](numberWithCommas(valueMoveCommaLeft(BigNumber('0x'+_0x472f77),DECIMALS_TOKEN)[_0x44d0f2(0x13c)](DECIMALS_6)[_0x44d0f2(0x11b)](cropZerosRegEx,'$1'))),$(_0x44d0f2(0x12b))['text'](numberWithCommas(valueMoveCommaLeft(BigNumber(TOKEN_MAX_SUPPLY)-BigNumber('0x'+_0x472f77),DECIMALS_TOKEN)[_0x44d0f2(0x13c)](DECIMALS_6)[_0x44d0f2(0x11b)](cropZerosRegEx,'$1'))),$(_0x44d0f2(0x1b5))['text'](BigNumber(0x64)[_0x44d0f2(0x174)](BigNumber('0x'+_0x472f77)['dividedBy'](TOKEN_MAX_SUPPLY)['multipliedBy'](0x64))[_0x44d0f2(0x13c)](DECIMALS_2)['replace'](cropZerosRegEx,'$1')),$('.stableBalanceContract')[_0x44d0f2(0x145)](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)[_0x44d0f2(0x13c)](DECIMALS_6)[_0x44d0f2(0x11b)](cropZerosRegEx,'$1'))),$(_0x44d0f2(0x19f))[_0x44d0f2(0x145)](numberWithCommas(currentMarketPrice));}async function readFromCoinGecko(){const _0x12ce44=a0_0x12b4ef;return await fetch(COIN_GECKO_FEED_URL,{'method':_0x12ce44(0x191),'headers':{'Accept':_0x12ce44(0x151)}})[_0x12ce44(0x150)](_0x139202=>_0x139202[_0x12ce44(0x17b)]())['then'](_0x45842b=>{return _0x45842b;})['catch'](_0x262d87=>{const _0x9a9a5f=_0x12ce44;console[_0x9a9a5f(0x12c)](_0x262d87);});}async function getFromCoinGecko(){const _0x1cf814=a0_0x12b4ef;await new Promise(_0x2c33ab=>setTimeout(_0x2c33ab,0x64));let _0x547362=undefined;while(!_0x547362){{await new Promise(_0x54f5c3=>setTimeout(_0x54f5c3,0x64)),_0x547362=await readFromCoinGecko();}}usdtPrice=_0x547362[_0x1cf814(0x1ac)][_0x1cf814(0x113)],usdtPrice&&currentMarketPrice&&$('.marketCap')[_0x1cf814(0x145)](adjustDecimals(valueMoveCommaLeft(BigNumber(TOKEN_MAX_SUPPLY),DECIMALS_TOKEN)[_0x1cf814(0x197)](currentMarketPrice)[_0x1cf814(0x197)](usdtPrice)));}async function readSwapsOnePage(_0x17df96,_0x1afb2a,_0x10e947){const _0x5c1301=a0_0x12b4ef,_0x125a43={'method':_0x5c1301(0x191),'headers':{'Accept':_0x5c1301(0x151)}};let _0x54fad7=TRONGRID_URL_PREFIX+_0x5c1301(0x140)+_0x17df96+_0x5c1301(0x192)+_0x10e947+_0x5c1301(0x180);return _0x1afb2a&&(_0x54fad7+=_0x5c1301(0x16d)+_0x1afb2a),await fetch(_0x54fad7,_0x125a43)[_0x5c1301(0x150)](_0x262c8a=>_0x262c8a[_0x5c1301(0x17b)]())[_0x5c1301(0x150)](_0x287320=>{return _0x287320;})['catch'](_0x9fa486=>{console['error'](_0x9fa486);});}async function readSwaps(_0x289d52){const _0x5f2229=a0_0x12b4ef;let _0x140642=undefined,_0x46db65=undefined,_0x4f7fd6=0x0,_0x3becb9=undefined,_0x51f890=[],_0x468a9a=new Date();_0x468a9a[_0x5f2229(0x17e)](_0x468a9a[_0x5f2229(0x14c)]()-0x16d),_0x468a9a=_0x468a9a[_0x5f2229(0x17d)]();while(!![]){_0x46db65=undefined;while(!_0x46db65){await new Promise(_0x356119=>setTimeout(_0x356119,0x64)),_0x46db65=await readSwapsOnePage(_0x289d52,_0x140642,_0x468a9a);}_0x46db65[_0x5f2229(0x1c2)][_0x5f2229(0x18a)](_0x598792=>{const _0x50e9c0=_0x5f2229;if(_0x598792[_0x50e9c0(0x114)]=='Transfer'){if((_0x598792[_0x50e9c0(0x194)]==_0x289d52||_0x598792['to']==_0x289d52)&&(_0x598792['token_info'][_0x50e9c0(0x186)]==CONTRACT_TOKEN||_0x598792[_0x50e9c0(0x18d)][_0x50e9c0(0x186)]==CONTRACT_STABLE)){if(!_0x3becb9||_0x3becb9[_0x50e9c0(0x1bb)]!=_0x598792[_0x50e9c0(0x1bb)]){_0x3becb9={},_0x3becb9['transaction_id']=_0x598792[_0x50e9c0(0x1bb)],_0x3becb9[_0x50e9c0(0x1ab)]=_0x598792['block_timestamp'];if(_0x598792['to']==_0x289d52){if(_0x598792[_0x50e9c0(0x18d)][_0x50e9c0(0x186)]==CONTRACT_STABLE)_0x3becb9['type']=_0x50e9c0(0x19d),_0x3becb9[_0x50e9c0(0x1c1)]=_0x598792[_0x50e9c0(0x172)],_0x3becb9[_0x50e9c0(0x16e)]=_0x598792[_0x50e9c0(0x194)];else _0x598792['token_info'][_0x50e9c0(0x186)]==CONTRACT_TOKEN&&(_0x3becb9[_0x50e9c0(0x114)]='deposit',_0x3becb9[_0x50e9c0(0x11c)]=_0x598792[_0x50e9c0(0x172)],_0x3becb9[_0x50e9c0(0x16e)]=_0x598792['from']);}}else{if(_0x598792[_0x50e9c0(0x194)]==_0x289d52&&_0x3becb9['type']){if(_0x598792['to']==_0x3becb9[_0x50e9c0(0x16e)]){if(_0x3becb9[_0x50e9c0(0x114)]==_0x50e9c0(0x19d)&&_0x598792[_0x50e9c0(0x18d)][_0x50e9c0(0x186)]==CONTRACT_TOKEN)_0x3becb9[_0x50e9c0(0x11c)]=_0x598792[_0x50e9c0(0x172)],_0x3becb9['price']=BigNumber(_0x3becb9[_0x50e9c0(0x1c1)])[_0x50e9c0(0x18b)](_0x3becb9[_0x50e9c0(0x11c)])[_0x50e9c0(0x13c)](DECIMALS_STABLE),_0x51f890['push'](_0x3becb9),_0x4f7fd6++;else _0x3becb9[_0x50e9c0(0x114)]==_0x50e9c0(0x110)&&_0x598792[_0x50e9c0(0x18d)]['address']==CONTRACT_STABLE&&(_0x3becb9[_0x50e9c0(0x1c1)]=_0x598792[_0x50e9c0(0x172)],_0x3becb9[_0x50e9c0(0x1b8)]=BigNumber(_0x3becb9[_0x50e9c0(0x1c1)])['dividedBy'](_0x3becb9['token_val'])[_0x50e9c0(0x13c)](DECIMALS_STABLE),_0x51f890[_0x50e9c0(0x18f)](_0x3becb9),_0x4f7fd6++);}}_0x3becb9=undefined;}}else _0x3becb9=undefined;}}),_0x140642=_0x46db65['meta'][_0x5f2229(0x122)];if(!_0x140642)break;}return _0x51f890;}async function constructChartData(_0x483fdd){const _0x3b7491=a0_0x12b4ef;let _0x4675df=0x0,_0x1caaba=BigNumber(0x0),_0x5668e6=0x0,_0x40c8b6=undefined,_0x3f0b58=undefined;_0x483fdd[_0x3b7491(0x18a)](_0x21ca48=>{const _0x23ff98=_0x3b7491,_0x8d3dab=formatDate(new Date(_0x21ca48[_0x23ff98(0x1ab)])),_0x4846b0=_0x21ca48[_0x23ff98(0x1b8)];_0x4675df==0x0&&(_0x40c8b6=_0x8d3dab);if(_0x40c8b6!=_0x8d3dab){let _0x1f751e=_0x1caaba[_0x23ff98(0x18b)](_0x5668e6)[_0x23ff98(0x13c)](DECIMALS_STABLE);chartX[_0x23ff98(0x18f)](_0x40c8b6),chartY[_0x23ff98(0x18f)](_0x1f751e);const _0x385864=new Date(_0x40c8b6);let _0x28b362=formatDate(new Date(_0x385864[_0x23ff98(0x17e)](_0x385864[_0x23ff98(0x14c)]()+0x1)));while(_0x28b362!=_0x8d3dab){chartX[_0x23ff98(0x18f)](_0x28b362),chartY[_0x23ff98(0x18f)](_0x1f751e);const _0x1a8a9e=new Date(_0x28b362);_0x28b362=formatDate(new Date(_0x1a8a9e['setDate'](_0x1a8a9e['getDate']()+0x1)));}_0x1caaba=BigNumber(0x0),_0x5668e6=0x0;}_0x40c8b6=_0x8d3dab,_0x3f0b58=_0x4846b0,_0x1caaba=BigNumber(_0x1caaba)[_0x23ff98(0x1ba)](_0x3f0b58),_0x5668e6+=0x1,_0x4675df++;if(_0x4675df==_0x483fdd['length']){let _0x187122=_0x1caaba[_0x23ff98(0x18b)](_0x5668e6)[_0x23ff98(0x13c)](DECIMALS_STABLE);chartX[_0x23ff98(0x18f)](_0x40c8b6),chartY[_0x23ff98(0x18f)](_0x187122);const _0x2e064a=new Date();let _0x47c258=formatDate(new Date(_0x2e064a['setDate'](_0x2e064a['getDate']()+0x1)));const _0x167600=new Date(_0x40c8b6);let _0x1c0e11=formatDate(new Date(_0x167600['setDate'](_0x167600[_0x23ff98(0x14c)]()+0x1)));while(_0x1c0e11!=_0x47c258){chartX[_0x23ff98(0x18f)](_0x1c0e11),chartY[_0x23ff98(0x18f)](_0x187122);const _0x4d43ad=new Date(_0x1c0e11);_0x1c0e11=formatDate(new Date(_0x4d43ad[_0x23ff98(0x17e)](_0x4d43ad[_0x23ff98(0x14c)]()+0x1)));}}});}async function startTronGridFeed(){const _0xe101c4=a0_0x12b4ef;try{tronGridFeedInterval==null&&(console[_0xe101c4(0x15c)](_0xe101c4(0x137)),await getFromTronGrid(),tronGridFeedInterval=setInterval(async function(){await getFromTronGrid();},0x2710));}catch(_0x8740f9){}}async function startTronWebFeed(){const _0xcab7f4=a0_0x12b4ef;try{tronWebFeedInterval==null&&(console[_0xcab7f4(0x15c)](_0xcab7f4(0x12f)),await getFromTronWeb(),tronWebFeedInterval=setInterval(async function(){await getFromTronWeb();},0x2710));}catch(_0x2e47d9){}}function a0_0x2a90(_0x4353af,_0x28d132){const _0x40cbbd=a0_0x40cb();return a0_0x2a90=function(_0x2a90d4,_0x357794){_0x2a90d4=_0x2a90d4-0x10c;let _0x714d02=_0x40cbbd[_0x2a90d4];return _0x714d02;},a0_0x2a90(_0x4353af,_0x28d132);}async function startCoinGeckoFeed(){const _0x477194=a0_0x12b4ef;try{coinGeckoFeedInterval==null&&(console[_0x477194(0x15c)]('STARTING\x20COIN\x20GECKO\x20DATA\x20FEED\x20'),await getFromCoinGecko(),coinGeckoFeedInterval=setInterval(async function(){await getFromCoinGecko();},0x2710));}catch(_0xf056a5){}}function stopFromTronWebFeed(){const _0x3e8a14=a0_0x12b4ef;console[_0x3e8a14(0x15c)](_0x3e8a14(0x176)),tronWebFeedInterval!=null&&(clearInterval(tronWebFeedInterval),tronWebFeedInterval=null,console['log'](_0x3e8a14(0x1a7)));}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![],ALLOW_ENABLE_CONTROLS=!![];function showConnectionMsg(_0x13d11d){const _0x5d0152=a0_0x12b4ef;$(_0x5d0152(0x19e))['prop']('hidden',!_0x13d11d);}function enableControls(_0x3de53c){const _0x55e8c4=a0_0x12b4ef;_0x3de53c&&!ALLOW_ENABLE_CONTROLS&&(_0x3de53c=![]),$('#swap_from_input')[_0x55e8c4(0x1bd)](_0x55e8c4(0x1a0),!_0x3de53c),$(_0x55e8c4(0x148))[_0x55e8c4(0x1bd)](_0x55e8c4(0x1a0),!_0x3de53c),$(_0x55e8c4(0x179))[_0x55e8c4(0x1bd)]('disabled',!_0x3de53c);}$(document)[a0_0x12b4ef(0x131)](async function(){const _0x2d3c79=a0_0x12b4ef;showConnectionMsg(!![]),$(_0x2d3c79(0x17c))[_0x2d3c79(0x1bd)]('href',CONTRACT_LP_NETWORK_URL),$(_0x2d3c79(0x129))['text'](NAME_TOKEN),$(_0x2d3c79(0x1bf))['text'](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()['finally'](()=>{LOCK=![];});});async function initialize(){const _0x309ac2=a0_0x12b4ef;console['log'](_0x309ac2(0x198));try{await startTronGridFeed(),await startCoinGeckoFeed(),constructChartData(await readSwaps(CONTRACT_LP)),chart=new Chart(document[_0x309ac2(0x199)](_0x309ac2(0x13a)),chartConfig),await tronLinkReady(),await getTronWeb(),await startTronWebFeed();}catch(_0x58f785){console[_0x309ac2(0x15c)](_0x309ac2(0x164)),showConnectionMsg(!![]),enableControls(![]),stopFromTronWebFeed();}}async function getTronWeb(){const _0x1024c7=a0_0x12b4ef;try{const _0x27ffbf=await tronLink['request']({'method':_0x1024c7(0x190)});if(_0x27ffbf[_0x1024c7(0x1be)]!=0xc8)throw _0x27ffbf;await new Promise(_0x36f987=>setTimeout(_0x36f987,0x64)),token=await tronWeb[_0x1024c7(0x188)]()['at'](CONTRACT_TOKEN),await new Promise(_0x3e54af=>setTimeout(_0x3e54af,0x64)),stable=await tronWeb[_0x1024c7(0x188)]()['at'](CONTRACT_STABLE),await new Promise(_0x4b594e=>setTimeout(_0x4b594e,0x64)),liquidityPool=await tronWeb['contract']()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0x3329e4){console[_0x1024c7(0x15c)](_0x1024c7(0x160)+_0x3329e4),showConnectionMsg(!![]),enableControls(![]);throw _0x3329e4;}}async function tronLinkReady(){await new Promise(_0x5b5791=>{const _0x329066=setInterval(()=>{const _0x3497d2=a0_0x2a90;if(window[_0x3497d2(0x1b7)]&&window[_0x3497d2(0x1b7)][_0x3497d2(0x121)][_0x3497d2(0x1c4)])return clearInterval(_0x329066),_0x5b5791();},0x64);});}setInterval(function(){const _0x4a77aa=a0_0x12b4ef,_0x278ed3=tronWeb[_0x4a77aa(0x121)][_0x4a77aa(0x1c4)];if(!PREV_ACCOUNT&&_0x278ed3)PREV_ACCOUNT=_0x278ed3;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0x278ed3&&window['location'][_0x4a77aa(0x154)]();},0x3e8),window[a0_0x12b4ef(0x1b0)]('message',async function(_0x3004b6){const _0xe52234=a0_0x12b4ef;_0x3004b6['data'][_0xe52234(0x143)]&&_0x3004b6[_0xe52234(0x1c2)]['message'][_0xe52234(0x184)]=='setAccount'&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x3004b6['data'][_0xe52234(0x143)][_0xe52234(0x1c2)][_0xe52234(0x186)],(addr==undefined||addr==null||!addr)&&window[_0xe52234(0x193)]['reload'](),!INITIALIZED?await initialize():await getTronWeb()[_0xe52234(0x150)](()=>{})['catch'](_0x1a8269=>{const _0x29f9f3=_0xe52234;this[_0x29f9f3(0x167)][_0x29f9f3(0x193)][_0x29f9f3(0x154)]();}),LOCK=![]));});function displayPrice(_0x253d30,_0x5b7a2a){const _0x2ea51d=a0_0x12b4ef;_0x253d30[_0x2ea51d(0x12d)](0x0)&&_0x5b7a2a['isGreaterThan'](0x0)?$(_0x2ea51d(0x171))[_0x2ea51d(0x145)](_0x5b7a2a[_0x2ea51d(0x1a4)](_0x253d30)['toFixed'](DECIMALS_6)):$(_0x2ea51d(0x171))[_0x2ea51d(0x145)]('-');}function setInputFilter(_0x2abe22,_0x2cd6a8){const _0x3ea52d=a0_0x12b4ef;[_0x3ea52d(0x142),_0x3ea52d(0x155),_0x3ea52d(0x16b),_0x3ea52d(0x1a5),_0x3ea52d(0x183),_0x3ea52d(0x152),_0x3ea52d(0x13e),_0x3ea52d(0x120),_0x3ea52d(0x1b6),_0x3ea52d(0x170)]['forEach'](function(_0x48ea09){const _0x5bce1a=_0x3ea52d;_0x2abe22[_0x5bce1a(0x1b0)](_0x48ea09,function(){const _0x1e0e36=_0x5bce1a;if(_0x2cd6a8(this[_0x1e0e36(0x172)]))this[_0x1e0e36(0x13f)]=this['value'],this['oldSelectionStart']=this[_0x1e0e36(0x12e)],this[_0x1e0e36(0x115)]=this[_0x1e0e36(0x149)];else this[_0x1e0e36(0x163)]('oldValue')?(this['value']=this['oldValue'],this[_0x1e0e36(0x1b4)](this['oldSelectionStart'],this[_0x1e0e36(0x115)])):this[_0x1e0e36(0x172)]='';let _0x4a00d4=BigNumber(0x0),_0x19104f=BigNumber(0x0);if(_0x2abe22['id']==_0x1e0e36(0x10f)){if($(_0x1e0e36(0x1b3))[_0x1e0e36(0x1bd)](_0x1e0e36(0x1af))==!![]){const _0x3c4099=$(_0x1e0e36(0x185))[_0x1e0e36(0x13b)]();if(!(_0x3c4099==''||_0x3c4099<=0x0||this[_0x1e0e36(0x172)]==''||this[_0x1e0e36(0x172)]<=0x0)){_0x4a00d4=BigNumber(valueMoveCommaRight($('#swap_from_input')['val'](),DECIMALS_TOKEN));let _0x1a2608=BigNumber(tokenBalanceContract),_0x13dfe8=BigNumber(stableBalanceContract)[_0x1e0e36(0x1ba)](STABLE_BALANCE_OFFSET),_0x403e1c=_0x1a2608[_0x1e0e36(0x1ba)](_0x4a00d4),_0x44dd01=LP_INVARIANT['div'](_0x403e1c)[_0x1e0e36(0x17a)](BigNumber[_0x1e0e36(0x11e)]);_0x19104f=_0x13dfe8[_0x1e0e36(0x174)](_0x44dd01);_0x403e1c[_0x1e0e36(0x12d)](TOKEN_MAX_SUPPLY)&&(_0x19104f=BigNumber(0x0));$(_0x1e0e36(0x148))[_0x1e0e36(0x13b)](valueMoveCommaLeft(_0x19104f,DECIMALS_STABLE)[_0x1e0e36(0x13c)](DECIMALS_6));if(_0x48ea09==_0x1e0e36(0x1b6)){let _0xd81947=_0x13dfe8[_0x1e0e36(0x174)](_0x19104f),_0x5b56ac=LP_INVARIANT[_0x1e0e36(0x1a4)](_0xd81947)[_0x1e0e36(0x17a)](BigNumber[_0x1e0e36(0x11e)]);_0x4a00d4=_0x5b56ac['minus'](_0x1a2608),$('#swap_from_input')[_0x1e0e36(0x13b)](valueMoveCommaLeft(_0x4a00d4,DECIMALS_TOKEN)[_0x1e0e36(0x13c)](DECIMALS_6));}}}else{const _0x4b0535=$(_0x1e0e36(0x185))['val']();if(!(_0x4b0535==''||_0x4b0535<=0x0||this[_0x1e0e36(0x172)]==''||this[_0x1e0e36(0x172)]<=0x0)){_0x19104f=BigNumber(valueMoveCommaRight($(_0x1e0e36(0x185))[_0x1e0e36(0x13b)](),DECIMALS_STABLE));let _0x128f99=BigNumber(tokenBalanceContract),_0x1fda2c=BigNumber(stableBalanceContract)[_0x1e0e36(0x1ba)](STABLE_BALANCE_OFFSET),_0x26a38c=_0x1fda2c['plus'](_0x19104f),_0x264ff5=LP_INVARIANT[_0x1e0e36(0x1a4)](_0x26a38c)[_0x1e0e36(0x17a)](BigNumber[_0x1e0e36(0x11e)]);_0x4a00d4=_0x128f99[_0x1e0e36(0x174)](_0x264ff5),$(_0x1e0e36(0x148))[_0x1e0e36(0x13b)](valueMoveCommaLeft(_0x4a00d4,DECIMALS_TOKEN)[_0x1e0e36(0x13c)](DECIMALS_6));if(_0x48ea09==_0x1e0e36(0x1b6)){let _0x2434fa=_0x128f99['minus'](_0x4a00d4),_0x970337=LP_INVARIANT['div'](_0x2434fa)[_0x1e0e36(0x17a)](BigNumber[_0x1e0e36(0x11e)]);_0x19104f=_0x970337[_0x1e0e36(0x174)](_0x1fda2c),$('#swap_from_input')[_0x1e0e36(0x13b)](valueMoveCommaLeft(_0x19104f,DECIMALS_STABLE)[_0x1e0e36(0x13c)](DECIMALS_6));}}}displayPrice(_0x4a00d4,_0x19104f);}if(_0x2abe22['id']==_0x1e0e36(0x18c)){if($('#swap_from_stable')['prop'](_0x1e0e36(0x1af))==!![]){const _0x148499=$(_0x1e0e36(0x148))['val']();if(!(_0x148499==''||_0x148499<=0x0||this[_0x1e0e36(0x172)]==''||this[_0x1e0e36(0x172)]<=0x0)){_0x19104f=BigNumber(valueMoveCommaRight($('#swap_to_input')[_0x1e0e36(0x13b)](),DECIMALS_STABLE));let _0x10e6ff=BigNumber(tokenBalanceContract),_0x4634cb=BigNumber(stableBalanceContract)[_0x1e0e36(0x1ba)](STABLE_BALANCE_OFFSET),_0x58f65a=_0x4634cb[_0x1e0e36(0x174)](_0x19104f),_0x2da00b=LP_INVARIANT[_0x1e0e36(0x1a4)](_0x58f65a)[_0x1e0e36(0x17a)](BigNumber['ROUND_FLOOR']);_0x4a00d4=_0x2da00b[_0x1e0e36(0x174)](_0x10e6ff);(_0x2da00b[_0x1e0e36(0x12d)](TOKEN_MAX_SUPPLY)||_0x58f65a<0x0)&&(_0x4a00d4=BigNumber(0x0));$(_0x1e0e36(0x185))[_0x1e0e36(0x13b)](valueMoveCommaLeft(_0x4a00d4,DECIMALS_TOKEN)[_0x1e0e36(0x13c)](DECIMALS_6));if(_0x48ea09==_0x1e0e36(0x1b6)){let _0x23c2f5=_0x10e6ff[_0x1e0e36(0x1ba)](_0x4a00d4),_0x28b264=LP_INVARIANT[_0x1e0e36(0x1a4)](_0x23c2f5)[_0x1e0e36(0x17a)](BigNumber[_0x1e0e36(0x11e)]);_0x19104f=_0x4634cb[_0x1e0e36(0x174)](_0x28b264),$('#swap_to_input')['val'](valueMoveCommaLeft(_0x19104f,DECIMALS_STABLE)[_0x1e0e36(0x13c)](DECIMALS_6));}}}else{const _0x1a901d=$('#swap_to_input')[_0x1e0e36(0x13b)]();if(!(_0x1a901d==''||_0x1a901d<=0x0||this[_0x1e0e36(0x172)]==''||this[_0x1e0e36(0x172)]<=0x0)){_0x4a00d4=BigNumber(valueMoveCommaRight($(_0x1e0e36(0x148))[_0x1e0e36(0x13b)](),DECIMALS_TOKEN));let _0x3a7765=BigNumber(tokenBalanceContract),_0xc78d05=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x2b1423=_0x3a7765[_0x1e0e36(0x174)](_0x4a00d4),_0x1363f0=LP_INVARIANT['div'](_0x2b1423)['integerValue'](BigNumber[_0x1e0e36(0x11e)]);_0x19104f=_0x1363f0[_0x1e0e36(0x174)](_0xc78d05);_0x19104f[_0x1e0e36(0x182)](0x0)&&(_0x19104f=BigNumber(0x0));$('#swap_from_input')[_0x1e0e36(0x13b)](valueMoveCommaLeft(_0x19104f,DECIMALS_STABLE)[_0x1e0e36(0x13c)](DECIMALS_6));if(_0x48ea09==_0x1e0e36(0x1b6)){let _0x159876=_0xc78d05[_0x1e0e36(0x1ba)](_0x19104f),_0x33093c=LP_INVARIANT[_0x1e0e36(0x1a4)](_0x159876)[_0x1e0e36(0x17a)](BigNumber['ROUND_FLOOR']);_0x4a00d4=_0x3a7765[_0x1e0e36(0x174)](_0x33093c),$(_0x1e0e36(0x148))['val'](valueMoveCommaLeft(_0x4a00d4,DECIMALS_TOKEN)[_0x1e0e36(0x13c)](DECIMALS_6));}}}displayPrice(_0x4a00d4,_0x19104f);}});});}setInputFilter(document[a0_0x12b4ef(0x199)](a0_0x12b4ef(0x10f)),function(_0x1aaa67){const _0x44b98a=a0_0x12b4ef;return/^-?\d*[.]?\d{0,6}$/[_0x44b98a(0x1aa)](_0x1aaa67);}),setInputFilter(document[a0_0x12b4ef(0x199)](a0_0x12b4ef(0x18c)),function(_0x3221e2){const _0x299e18=a0_0x12b4ef;return/^-?\d*[.]?\d{0,6}$/[_0x299e18(0x1aa)](_0x3221e2);}),$(function(){const _0x3663cd=a0_0x12b4ef;$(_0x3663cd(0x15d))[_0x3663cd(0x130)](function(_0x26ff12){const _0x288742=_0x3663cd;_0x26ff12[_0x288742(0x195)]();if($(_0x288742(0x1b3))[_0x288742(0x1bd)]('hidden')==!![]){$(_0x288742(0x1b3))[_0x288742(0x1bd)](_0x288742(0x1af),![]),$('#swap_from_token')['prop']('hidden',!![]),$('#swap_to_stable')['prop'](_0x288742(0x1af),!![]),$('#swap_to_token')[_0x288742(0x1bd)](_0x288742(0x1af),![]),$(_0x288742(0x1c3))[_0x288742(0x1bd)](_0x288742(0x1af),![]),$(_0x288742(0x16a))[_0x288742(0x1bd)](_0x288742(0x1af),!![]),$(_0x288742(0x147))[_0x288742(0x1bd)](_0x288742(0x1af),!![]),$(_0x288742(0x168))[_0x288742(0x1bd)](_0x288742(0x1af),![]),$(_0x288742(0x1a2))['prop'](_0x288742(0x14d),IMG_STABLE_URL),$('#swap_to_img')[_0x288742(0x1bd)](_0x288742(0x14d),IMG_TOKEN_URL);let _0x5bb7f1=$(_0x288742(0x185))[_0x288742(0x13b)](),_0xbbaebf=$('#swap_to_input')[_0x288742(0x13b)]();$('#swap_from_input')[_0x288742(0x13b)](_0xbbaebf),$(_0x288742(0x148))[_0x288742(0x13b)](_0x5bb7f1),document['getElementById']('swap_from_input')[_0x288742(0x170)]();}else{$(_0x288742(0x1b3))['prop'](_0x288742(0x1af),!![]),$(_0x288742(0x181))[_0x288742(0x1bd)](_0x288742(0x1af),![]),$(_0x288742(0x14b))['prop'](_0x288742(0x1af),![]),$(_0x288742(0x112))[_0x288742(0x1bd)](_0x288742(0x1af),!![]),$(_0x288742(0x1c3))[_0x288742(0x1bd)]('hidden',!![]),$(_0x288742(0x16a))[_0x288742(0x1bd)](_0x288742(0x1af),![]),$('#swap_balance_stable')[_0x288742(0x1bd)](_0x288742(0x1af),![]),$('#swap_balance_token')[_0x288742(0x1bd)]('hidden',!![]),$(_0x288742(0x1a2))[_0x288742(0x1bd)]('src',IMG_TOKEN_URL),$(_0x288742(0x1b1))[_0x288742(0x1bd)](_0x288742(0x14d),IMG_STABLE_URL);let _0x4e1819=$(_0x288742(0x185))['val'](),_0x4df3fe=$('#swap_to_input')[_0x288742(0x13b)]();$(_0x288742(0x185))[_0x288742(0x13b)](_0x4df3fe),$(_0x288742(0x148))[_0x288742(0x13b)](_0x4e1819),document[_0x288742(0x199)](_0x288742(0x10f))[_0x288742(0x170)]();}}),$(_0x3663cd(0x16a))['click'](function(_0x405842){const _0x3073e1=_0x3663cd;_0x405842[_0x3073e1(0x195)](),($(_0x3073e1(0x185))[_0x3073e1(0x1bd)]('disabled')!=!![]||$(_0x3073e1(0x148))['prop'](_0x3073e1(0x1a0))!=!![])&&($('#swap_from_stable')[_0x3073e1(0x1bd)]('hidden')==!![]?($(_0x3073e1(0x185))['val'](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x3073e1(0x13c)](DECIMALS_6)),document[_0x3073e1(0x199)]('swap_from_input')[_0x3073e1(0x170)]()):($(_0x3073e1(0x148))['val'](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x3073e1(0x13c)](DECIMALS_6)),document[_0x3073e1(0x199)](_0x3073e1(0x18c))[_0x3073e1(0x170)]()));}),$(_0x3663cd(0x1c3))[_0x3663cd(0x130)](function(_0x23f897){const _0x983011=_0x3663cd;_0x23f897[_0x983011(0x195)](),($('#swap_from_input')[_0x983011(0x1bd)](_0x983011(0x1a0))!=!![]||$('#swap_to_input')[_0x983011(0x1bd)]('disabled')!=!![])&&($(_0x983011(0x1b3))['prop'](_0x983011(0x1af))==!![]?($(_0x983011(0x148))[_0x983011(0x13b)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document[_0x983011(0x199)]('swap_to_input')['focus']()):($(_0x983011(0x185))[_0x983011(0x13b)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0x983011(0x13c)](DECIMALS_6)),document[_0x983011(0x199)](_0x983011(0x10f))[_0x983011(0x170)]()));});});async function sendTransaction(_0x2ec774,_0x46b5a3,_0x4dc8d3,_0x4d8a69){const _0x57f9f2=a0_0x12b4ef;console[_0x57f9f2(0x15c)]('SEND\x20TRANSACTION\x20('+_0x2ec774+_0x57f9f2(0x132));let _0x51e21d=![];$(_0x57f9f2(0x13d))[_0x57f9f2(0x141)]('<div\x20class=\x22spinner-border\x20spinner-border-xs\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting\x20for\x20signature...</span></div><span\x20class=\x22text-warning\x22>&nbsp;Waiting\x20for\x20'+_0x2ec774+'\x20transaction\x20signature\x20...</span>');try{let _0x3c19d0=await _0x46b5a3()[_0x57f9f2(0x133)]();$('.validationMsg')[_0x57f9f2(0x141)](_0x57f9f2(0x1b9)+_0x2ec774+_0x57f9f2(0x11a)+TRANSACTION_URL+_0x3c19d0+_0x57f9f2(0x117)+shortenString(_0x3c19d0)+_0x57f9f2(0x187));}catch(_0x28779a){let _0x723e3e;return _0x28779a[_0x57f9f2(0x143)]?(_0x723e3e=_0x28779a[_0x57f9f2(0x143)],_0x723e3e==_0x57f9f2(0x1ae)&&(_0x723e3e='Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds')):_0x723e3e=_0x28779a,$('.validationMsg')['html'](_0x57f9f2(0x1b9)+_0x723e3e+_0x57f9f2(0x10e)),[!![],!![]];}return console['log']('SEND\x20TRANSACTION\x20('+_0x2ec774+_0x57f9f2(0x175)),[![],_0x51e21d];}$(function(){'use strict';const _0x2ea066=a0_0x12b4ef;var _0xf29990=document[_0x2ea066(0x10d)](_0x2ea066(0x16c));Array['prototype'][_0x2ea066(0x1c5)][_0x2ea066(0x119)](_0xf29990)[_0x2ea066(0x18a)](function(_0x558c0a){const _0x3ed2a2=_0x2ea066;_0x558c0a['addEventListener'](_0x3ed2a2(0x158),async function(_0x5aa0d0){const _0x5a11ba=_0x3ed2a2;_0x5aa0d0[_0x5a11ba(0x195)](),_0x5aa0d0[_0x5a11ba(0x153)]();let _0x44325c=null,_0x1d78e5=null,_0x46d9a4=null;$(_0x5a11ba(0x1b3))['prop'](_0x5a11ba(0x1af))==!![]?(_0x46d9a4=!![],_0x44325c=valueMoveCommaRight($(_0x5a11ba(0x185))[_0x5a11ba(0x13b)](),DECIMALS_TOKEN),_0x1d78e5=valueMoveCommaRight($('#swap_to_input')[_0x5a11ba(0x13b)](),DECIMALS_STABLE)):(_0x46d9a4=![],_0x44325c=valueMoveCommaRight($('#swap_to_input')['val'](),DECIMALS_TOKEN),_0x1d78e5=valueMoveCommaRight($('#swap_from_input')[_0x5a11ba(0x13b)](),DECIMALS_STABLE));console[_0x5a11ba(0x15c)]('tokenVal\x20=\x20'+_0x44325c+',\x20stableVal\x20=\x20'+_0x1d78e5);let _0x1d999d=![],_0x18f30d=![];if(_0x44325c[_0x5a11ba(0x126)]()||_0x1d78e5[_0x5a11ba(0x126)]()||_0x44325c[_0x5a11ba(0x134)](0x0)||_0x1d78e5[_0x5a11ba(0x134)](0x0))$(_0x5a11ba(0x13d))[_0x5a11ba(0x141)](_0x5a11ba(0x127)),_0x1d999d=!![];else{if(_0x46d9a4&&_0x44325c['isGreaterThan'](balanceToken))$(_0x5a11ba(0x13d))['html']('<span\x20class=\x22text-warning\x22>Your\x20'+NAME_TOKEN+_0x5a11ba(0x19b)),_0x1d999d=!![];else!_0x46d9a4&&_0x1d78e5[_0x5a11ba(0x12d)](balanceStable)&&($(_0x5a11ba(0x13d))[_0x5a11ba(0x141)]('<span\x20class=\x22text-warning\x22>Your\x20'+NAME_STABLE+_0x5a11ba(0x19b)),_0x1d999d=!![]);}ALLOW_ENABLE_CONTROLS=![],enableControls(![]),_0x1d999d==![]&&(!_0x46d9a4?_0x1d78e5[_0x5a11ba(0x12d)](allowanceStable)&&([_0x1d999d,_0x18f30d]=await sendTransaction(_0x5a11ba(0x11f)+NAME_STABLE+')</span>',function(){const _0x2dfdea=_0x5a11ba;return stable[_0x2dfdea(0x14e)](CONTRACT_LP,'0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');})):_0x44325c[_0x5a11ba(0x12d)](allowanceToken)&&([_0x1d999d,_0x18f30d]=await sendTransaction('<span\x20class=\x22fw-bold\x22>Approve\x20('+NAME_TOKEN+_0x5a11ba(0x1ad),function(){const _0x5d7123=_0x5a11ba;return token[_0x5d7123(0x14e)](CONTRACT_LP,_0x5d7123(0x128));}))),_0x1d999d==![]&&_0x18f30d==![]&&(!_0x46d9a4?[_0x1d999d,_0x18f30d]=await sendTransaction(_0x5a11ba(0x1c0)+NAME_STABLE+_0x5a11ba(0x14f)+NAME_TOKEN+')</span>',function(){const _0x28d0e8=_0x5a11ba;return liquidityPool['withdraw'](_0x44325c[_0x28d0e8(0x13c)](0x0),_0x1d78e5[_0x28d0e8(0x1ba)](_0x1d78e5['div'](SLIPPAGE))[_0x28d0e8(0x13c)](0x0));}):[_0x1d999d,_0x18f30d]=await sendTransaction(_0x5a11ba(0x1c0)+NAME_TOKEN+_0x5a11ba(0x14f)+NAME_STABLE+')</span>',function(){const _0xa70069=_0x5a11ba;return liquidityPool[_0xa70069(0x110)](_0x44325c[_0xa70069(0x13c)](0x0),_0x1d78e5['minus'](_0x1d78e5[_0xa70069(0x1a4)](SLIPPAGE))[_0xa70069(0x13c)](0x0));})),ALLOW_ENABLE_CONTROLS=!![],enableControls(!![]);},![]);});});