const a0_0x5279ff=a0_0x2d3b;(function(_0x1bb267,_0x29bcca){const _0x3e630c=a0_0x2d3b,_0xeccc5f=_0x1bb267();while(!![]){try{const _0x22b5f5=-parseInt(_0x3e630c(0x134))/0x1*(parseInt(_0x3e630c(0x180))/0x2)+parseInt(_0x3e630c(0x171))/0x3*(-parseInt(_0x3e630c(0x155))/0x4)+parseInt(_0x3e630c(0x198))/0x5*(-parseInt(_0x3e630c(0x1a1))/0x6)+parseInt(_0x3e630c(0x1a2))/0x7*(-parseInt(_0x3e630c(0x18d))/0x8)+parseInt(_0x3e630c(0x183))/0x9+parseInt(_0x3e630c(0x122))/0xa+-parseInt(_0x3e630c(0x1b8))/0xb*(-parseInt(_0x3e630c(0x176))/0xc);if(_0x22b5f5===_0x29bcca)break;else _0xeccc5f['push'](_0xeccc5f['shift']());}catch(_0xbe0e35){_0xeccc5f['push'](_0xeccc5f['shift']());}}}(a0_0x4f62,0xd6fbd));let CONTRACT_LP=a0_0x5279ff(0x1c0),CONTRACT_LP_HEX='41D23A354622A509211C078E85EE9A2095CE424B8E',CONTRACT_TOKEN='TLxSCKNuxso2f62mPz2eBtAnQeXQUaYQiZ',CONTRACT_STABLE=a0_0x5279ff(0x119),TRONSCAN_URL_PREFIX=a0_0x5279ff(0x12e),TRONGRID_URL_PREFIX=a0_0x5279ff(0x190),ALLOWANCE_FIX_TOKEN=![],ALLOWANCE_FIX_STABLE=![];const COIN_GECKO_FEED_URL='https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=USD';let IMG_TOKEN_URL=a0_0x5279ff(0x165),IMG_STABLE_URL='usdt.png',NAME_TOKEN='FLAT',NAME_STABLE=a0_0x5279ff(0x160),DECIMALS_TOKEN=0x6,DECIMALS_STABLE=0x6,TOKEN_MAX_SUPPLY='1000000000000',STABLE_BALANCE_OFFSET='1000000000',LP_INVARIANT=BigNumber(TOKEN_MAX_SUPPLY)[a0_0x5279ff(0x1a8)](STABLE_BALANCE_OFFSET),CONTRACT_LP_NETWORK_URL=TRONSCAN_URL_PREFIX+a0_0x5279ff(0x151)+CONTRACT_LP+a0_0x5279ff(0x11d),TRANSACTION_URL=TRONSCAN_URL_PREFIX+'/#/transaction/',TRC20_TOKEN_APPROVE_OWNER='owner',TRC20_TOKEN_APPROVE_SPENDER=a0_0x5279ff(0x12d),TRC20_TOKEN_APPROVE_VALUE=a0_0x5279ff(0x13b),TRC20_STABLE_APPROVE_OWNER=a0_0x5279ff(0x16f),TRC20_STABLE_APPROVE_SPENDER=a0_0x5279ff(0x12d),TRC20_STABLE_APPROVE_VALUE='value',token=null,stable=null,liquidityPool=null,tronWebFeedInterval=null,tronGridFeedInterval=null,coinGeckoFeedInterval=null,balanceToken=null,balanceStable=null,allowanceToken=null,allowanceStable=null,tokenBalanceContract=null,stableBalanceContract=null,currentMarketPrice=null,usdtPrice=null,marketCap=null;function a0_0x4f62(){const _0x31a313=['<span\x20class=\x22fw-bold\x22>Approve\x20(','multipliedBy','https://api.trongrid.io','<span\x20class=\x22text-warning\x22>Your\x20','tokenBalance()','select','#swap_btn','swap_to_input','then','Transfer','10ZOGtQE','&fingerprint=','hasOwnProperty','</a>\x20submitted</span>','line','#swap_to_input','GET','<span\x20class=\x22fw-bold\x22>Swap\x20(','#switch_btn','603480Gxqonp','7nrtyuB',')</span>','from','text','.validationMsg','getDate','times','keyup','call','base58','STOPPING\x20TRONWEB\x20DATA\x20FEED\x20','isLessThan','STARTING\x20TRONGRID\x20DATA\x20FEED\x20','.tokenBalanceContractAvail','isLessThanOrEqualTo','<span\x20class=\x22text-warning\x22>','AccountResourceInsufficient\x20error','getFullYear','swap_from_input','hidden','window','stableBalance()','20842349wxibSH','location','token_val','div','setAccount','transaction_id','join','isGreaterThan','TV8ndiKP98SF537BM9XvEbzkY2TerXNzEs','focus','#swap_input_balance_stable','val','log','#swap_from_token','padStart','TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t','forEach','error','approve','/code','\x20transaction\x20<a\x20href=\x22','.contractLPCodeURL','balanceOf','toFixed','14479360xyrIQw','&nbsp;<i\x20class=\x22bi\x20bi-caret-right-fill\x22></i>&nbsp;','\x20balance\x20is\x20too\x20low</span>','0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF','stopPropagation','dividedBy','#swap_input_balance_token','data',')\x20START','STARTING\x20COIN\x20GECKO\x20DATA\x20FEED\x20','balanceFeedInterval\x20cleared','spender','https://tronscan.io','submit','getElementById','deposit','message','/v1/accounts/','2ZaMtyJ','.stableName','.connect-msg','.balanceToken','click','setSelectionRange','#swap_balance_token','value','drop','allowance','.balanceStable','substr','html','test','setDate','addEventListener','#swap_to_img','action','getTronWeb\x20error:\x20','.price','oldValue','fingerprint','defaultAddress',')\x20END','prototype','length','plus','selectionEnd','/transactions/trc20?limit=200&min_timestamp=','/#/contract/','toString','.stableBalanceContract','POST','272wNCLMi','rgba(255,193,7,0.6)','.currentMarketPrice','replace','send','&order_by=block_timestamp,asc&search_internal=false','oldSelectionStart','sender','ROUND_FLOOR','minus','#swap_to_stable','USDT','application/json','stable_val','withdraw','push','FLAT_128.png','token_info','#swap_from_stable','getFromTronWeb\x20error:\x20','json','slice','input','monotone','blur','catch','owner','prop','22539sWazIC','request','reload','type','<span\x20class=\x22text-warning\x22>Please\x20enter\x20valid\x20values</span>','12nElHFy','src','address','#swap_from_input','ready','#swap_to_token','keydown','integerValue','.tokenBalanceCirculating','contract','1267404mdTlyG','finally','disabled','8565210TqYopj','isNaN','.marketCap','remaining','stringify','querySelectorAll','tronWeb','price','preventDefault','mouseup','11474912aqnhQq'];a0_0x4f62=function(){return _0x31a313;};return a0_0x4f62();}const DECIMALS_6=0x6,DECIMALS_2=0x2,DECIMALS_0=0x0,SLIPPAGE=0x3e8;let chart=undefined,chartX=[],chartY=[];const data={'labels':chartX,'datasets':[{'data':chartY,'fill':!![],'backgroundColor':'rgba(255,193,7,0.2)','borderColor':a0_0x5279ff(0x156),'cubicInterpolationMode':a0_0x5279ff(0x16c),'tension':0.4}]},chartConfig={'type':a0_0x5279ff(0x19c),'data':data,'options':{'maintainAspectRatio':![],'plugins':{'legend':{'display':![]},'tooltip':{'enabled':![]}},'elements':{'point':{'radius':0x0}},'scales':{'x':{'grid':{'display':![],'drawBorder':![]}},'y':{'grid':{'display':!![],'drawBorder':![]}}}}};cropZerosRegEx=/(\.[0-9]*[1-9])0+$|\.0*$/;function formatDate(_0x473220){const _0x157609=a0_0x5279ff;return _0x473220[_0x157609(0x1b3)]()+'-'+(_0x473220['getMonth']()+0x1)[_0x157609(0x152)]()[_0x157609(0x118)](0x2,'0')+'-'+_0x473220['getDate']()['toString']()[_0x157609(0x118)](0x2,'0');}function shortenString(_0x1e05ca){const _0x443f66=a0_0x5279ff;let _0x312e62=_0x1e05ca;return _0x312e62[_0x443f66(0x13f)](0x0,0x5)+'...'+_0x312e62['substr'](_0x312e62[_0x443f66(0x14d)]-0x5,_0x312e62[_0x443f66(0x14d)]);}function valueMoveCommaLeft(_0x573e9f,_0x4d433c){const _0x3ed835=a0_0x5279ff;return BigNumber(_0x573e9f)[_0x3ed835(0x1bb)](0xa**_0x4d433c);}function valueMoveCommaRight(_0x3694cb,_0x44f38e){const _0x1f9a1d=a0_0x5279ff;return BigNumber(_0x3694cb)[_0x1f9a1d(0x1a8)](0xa**_0x44f38e);}function adjustDecimals(_0xbd4d57){const _0x1df53e=a0_0x5279ff;let _0x5c70e8,_0x103a6f=BigNumber(_0xbd4d57);if(_0x103a6f['isLessThan'](0x1))_0x5c70e8=DECIMALS_6;else _0x103a6f[_0x1df53e(0x1ad)](0x2710)?_0x5c70e8=DECIMALS_2:_0x5c70e8=DECIMALS_0;return _0x103a6f[_0x1df53e(0x121)](_0x5c70e8)['replace'](cropZerosRegEx,'$1');}function numberWithCommas(_0x4c400f){const _0x1ed450=a0_0x5279ff;var _0x585a18=_0x4c400f[_0x1ed450(0x152)]()['split']('.');return _0x585a18[0x0]=_0x585a18[0x0][_0x1ed450(0x158)](/\B(?=(\d{3})+(?!\d))/g,','),_0x585a18[_0x1ed450(0x1be)]('.');}async function readFromTronGrid(_0x51de8c){const _0x3615fb=a0_0x5279ff,_0x2020d1={'method':_0x3615fb(0x154),'headers':{'Accept':'application/json','Content-Type':_0x3615fb(0x161)},'body':JSON[_0x3615fb(0x187)]({'owner_address':'414EE04F77D2D8FCCC501FF7C587478D2FBEE80EA0','contract_address':CONTRACT_LP_HEX,'function_selector':_0x51de8c})};return await fetch(TRONGRID_URL_PREFIX+'/wallet/triggersmartcontract',_0x2020d1)[_0x3615fb(0x196)](_0x2c20b6=>_0x2c20b6[_0x3615fb(0x169)]())[_0x3615fb(0x196)](_0x4b28c2=>{return _0x4b28c2['constant_result'][0x0];})['catch'](_0x271295=>{const _0x4c5ccb=_0x3615fb;console[_0x4c5ccb(0x11b)](_0x271295);});}async function getFromTronWeb(){const _0x47e376=a0_0x5279ff;try{await new Promise(_0x51d666=>setTimeout(_0x51d666,0x64)),balanceToken=String(await token[_0x47e376(0x120)](window[_0x47e376(0x189)][_0x47e376(0x14a)]['base58'])['call']()),await new Promise(_0xc932d6=>setTimeout(_0xc932d6,0x64)),balanceStable=String(await stable[_0x47e376(0x120)](window['tronWeb']['defaultAddress']['base58'])[_0x47e376(0x1aa)]()),ALLOWANCE_FIX_TOKEN?allowanceToken=String((await token[_0x47e376(0x13d)](window[_0x47e376(0x189)]['defaultAddress']['base58'],CONTRACT_LP)[_0x47e376(0x1aa)]())[_0x47e376(0x186)]):allowanceToken=String(await token['allowance'](window[_0x47e376(0x189)][_0x47e376(0x14a)][_0x47e376(0x1ab)],CONTRACT_LP)[_0x47e376(0x1aa)]()),await new Promise(_0x37b5c0=>setTimeout(_0x37b5c0,0x64)),ALLOWANCE_FIX_STABLE?allowanceStable=String((await stable[_0x47e376(0x13d)](window[_0x47e376(0x189)][_0x47e376(0x14a)][_0x47e376(0x1ab)],CONTRACT_LP)['call']())['remaining']):allowanceStable=String(await stable[_0x47e376(0x13d)](window[_0x47e376(0x189)][_0x47e376(0x14a)][_0x47e376(0x1ab)],CONTRACT_LP)[_0x47e376(0x1aa)]()),$(_0x47e376(0x137))['text'](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)[_0x47e376(0x158)](cropZerosRegEx,'$1')),$(_0x47e376(0x13e))['text'](valueMoveCommaLeft(balanceStable,DECIMALS_STABLE)[_0x47e376(0x121)](DECIMALS_6)['replace'](cropZerosRegEx,'$1')),$('.account')['html']('<img\x20src=\x22tron.svg\x22\x20height=\x2218\x22\x20width=\x2218\x22\x20/>&nbsp;'+shortenString(window['tronWeb'][_0x47e376(0x14a)][_0x47e376(0x1ab)])),enableControls(!![]);}catch(_0x2034d6){console['log'](_0x47e376(0x168)+_0x2034d6);throw _0x2034d6;}}async function getFromTronGrid(){const _0x29b887=a0_0x5279ff;await new Promise(_0x2e6c3d=>setTimeout(_0x2e6c3d,0x64));let _0x479a2b=undefined,_0x2c82d1=undefined;while(!_0x479a2b){{await new Promise(_0x54af61=>setTimeout(_0x54af61,0x64)),_0x479a2b=await readFromTronGrid(_0x29b887(0x192));}}while(!_0x2c82d1){{await new Promise(_0xc664e2=>setTimeout(_0xc664e2,0x64)),_0x2c82d1=await readFromTronGrid(_0x29b887(0x1b7));}}tokenBalanceContract=BigNumber('0x'+_0x479a2b)[_0x29b887(0x121)](),stableBalanceContract=BigNumber('0x'+_0x2c82d1)[_0x29b887(0x121)](),currentMarketPrice=adjustDecimals(BigNumber(stableBalanceContract)[_0x29b887(0x14e)](STABLE_BALANCE_OFFSET)[_0x29b887(0x1bb)](tokenBalanceContract)[_0x29b887(0x121)](DECIMALS_6)),$('.tokenBalanceContract')[_0x29b887(0x1a5)](numberWithCommas(valueMoveCommaLeft(BigNumber('0x'+_0x479a2b),DECIMALS_TOKEN)[_0x29b887(0x121)](DECIMALS_6)[_0x29b887(0x158)](cropZerosRegEx,'$1'))),$(_0x29b887(0x17e))['text'](numberWithCommas(valueMoveCommaLeft(BigNumber(TOKEN_MAX_SUPPLY)-BigNumber('0x'+_0x479a2b),DECIMALS_TOKEN)[_0x29b887(0x121)](DECIMALS_6)[_0x29b887(0x158)](cropZerosRegEx,'$1'))),$(_0x29b887(0x1af))[_0x29b887(0x1a5)](BigNumber(0x64)['minus'](BigNumber('0x'+_0x479a2b)[_0x29b887(0x127)](TOKEN_MAX_SUPPLY)[_0x29b887(0x18f)](0x64))[_0x29b887(0x121)](DECIMALS_2)[_0x29b887(0x158)](cropZerosRegEx,'$1')),$(_0x29b887(0x153))[_0x29b887(0x1a5)](numberWithCommas(valueMoveCommaLeft(stableBalanceContract,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)['replace'](cropZerosRegEx,'$1'))),$(_0x29b887(0x157))['text'](numberWithCommas(currentMarketPrice));}async function readFromCoinGecko(){const _0x2f48c4=a0_0x5279ff;return await fetch(COIN_GECKO_FEED_URL,{'method':_0x2f48c4(0x19e),'headers':{'Accept':_0x2f48c4(0x161)}})[_0x2f48c4(0x196)](_0x1d0361=>_0x1d0361[_0x2f48c4(0x169)]())[_0x2f48c4(0x196)](_0x278c2d=>{return _0x278c2d;})[_0x2f48c4(0x16e)](_0x5f395a=>{const _0x331fe1=_0x2f48c4;console[_0x331fe1(0x11b)](_0x5f395a);});}async function getFromCoinGecko(){const _0x47b366=a0_0x5279ff;await new Promise(_0xfa0bfb=>setTimeout(_0xfa0bfb,0x64));let _0x4d8d84=undefined;while(!_0x4d8d84){{await new Promise(_0x31202b=>setTimeout(_0x31202b,0x64)),_0x4d8d84=await readFromCoinGecko();}}usdtPrice=_0x4d8d84['tether']['usd'],usdtPrice&&currentMarketPrice&&$(_0x47b366(0x185))[_0x47b366(0x1a5)](adjustDecimals(valueMoveCommaLeft(BigNumber(TOKEN_MAX_SUPPLY),DECIMALS_TOKEN)[_0x47b366(0x1a8)](currentMarketPrice)[_0x47b366(0x1a8)](usdtPrice)));}async function readSwapsOnePage(_0x5aa03a,_0x44961c,_0x1a08ec){const _0x336db0=a0_0x5279ff,_0x2e2102={'method':_0x336db0(0x19e),'headers':{'Accept':'application/json'}};let _0x1e7456=TRONGRID_URL_PREFIX+_0x336db0(0x133)+_0x5aa03a+_0x336db0(0x150)+_0x1a08ec+_0x336db0(0x15a);return _0x44961c&&(_0x1e7456+=_0x336db0(0x199)+_0x44961c),await fetch(_0x1e7456,_0x2e2102)[_0x336db0(0x196)](_0x47e5a5=>_0x47e5a5[_0x336db0(0x169)]())[_0x336db0(0x196)](_0x26f583=>{return _0x26f583;})[_0x336db0(0x16e)](_0x319258=>{const _0x2ae993=_0x336db0;console[_0x2ae993(0x11b)](_0x319258);});}async function readSwaps(_0x2306f2){const _0x457e93=a0_0x5279ff;let _0x496695=undefined,_0x4452d2=undefined,_0x137135=0x0,_0x11d685=undefined,_0x110f45=[],_0x5281cf=new Date();_0x5281cf[_0x457e93(0x142)](_0x5281cf[_0x457e93(0x1a7)]()-0x16d),_0x5281cf=_0x5281cf['getTime']();while(!![]){_0x4452d2=undefined;while(!_0x4452d2){await new Promise(_0x3aba2a=>setTimeout(_0x3aba2a,0x64)),_0x4452d2=await readSwapsOnePage(_0x2306f2,_0x496695,_0x5281cf);}_0x4452d2[_0x457e93(0x129)][_0x457e93(0x11a)](_0x50e0b1=>{const _0x4d3700=_0x457e93;if(_0x50e0b1[_0x4d3700(0x174)]==_0x4d3700(0x197)){if((_0x50e0b1[_0x4d3700(0x1a4)]==_0x2306f2||_0x50e0b1['to']==_0x2306f2)&&(_0x50e0b1[_0x4d3700(0x166)][_0x4d3700(0x178)]==CONTRACT_TOKEN||_0x50e0b1['token_info'][_0x4d3700(0x178)]==CONTRACT_STABLE)){if(!_0x11d685||_0x11d685[_0x4d3700(0x1bd)]!=_0x50e0b1[_0x4d3700(0x1bd)]){_0x11d685={},_0x11d685[_0x4d3700(0x1bd)]=_0x50e0b1[_0x4d3700(0x1bd)],_0x11d685['block_timestamp']=_0x50e0b1['block_timestamp'];if(_0x50e0b1['to']==_0x2306f2){if(_0x50e0b1['token_info'][_0x4d3700(0x178)]==CONTRACT_STABLE)_0x11d685[_0x4d3700(0x174)]=_0x4d3700(0x163),_0x11d685[_0x4d3700(0x162)]=_0x50e0b1[_0x4d3700(0x13b)],_0x11d685[_0x4d3700(0x15c)]=_0x50e0b1['from'];else _0x50e0b1[_0x4d3700(0x166)][_0x4d3700(0x178)]==CONTRACT_TOKEN&&(_0x11d685[_0x4d3700(0x174)]=_0x4d3700(0x131),_0x11d685[_0x4d3700(0x1ba)]=_0x50e0b1[_0x4d3700(0x13b)],_0x11d685['sender']=_0x50e0b1[_0x4d3700(0x1a4)]);}}else{if(_0x50e0b1[_0x4d3700(0x1a4)]==_0x2306f2&&_0x11d685[_0x4d3700(0x174)]){if(_0x50e0b1['to']==_0x11d685[_0x4d3700(0x15c)]){if(_0x11d685['type']=='withdraw'&&_0x50e0b1[_0x4d3700(0x166)][_0x4d3700(0x178)]==CONTRACT_TOKEN)_0x11d685[_0x4d3700(0x1ba)]=_0x50e0b1[_0x4d3700(0x13b)],_0x11d685[_0x4d3700(0x18a)]=BigNumber(_0x11d685[_0x4d3700(0x162)])[_0x4d3700(0x127)](_0x11d685[_0x4d3700(0x1ba)])['toFixed'](DECIMALS_STABLE),_0x110f45[_0x4d3700(0x164)](_0x11d685),_0x137135++;else _0x11d685[_0x4d3700(0x174)]==_0x4d3700(0x131)&&_0x50e0b1[_0x4d3700(0x166)][_0x4d3700(0x178)]==CONTRACT_STABLE&&(_0x11d685['stable_val']=_0x50e0b1[_0x4d3700(0x13b)],_0x11d685['price']=BigNumber(_0x11d685[_0x4d3700(0x162)])['dividedBy'](_0x11d685['token_val'])['toFixed'](DECIMALS_STABLE),_0x110f45[_0x4d3700(0x164)](_0x11d685),_0x137135++);}}_0x11d685=undefined;}}else _0x11d685=undefined;}}),_0x496695=_0x4452d2['meta'][_0x457e93(0x149)];if(!_0x496695)break;}return _0x110f45;}async function constructChartData(_0x1e39ff){const _0x2682c0=a0_0x5279ff;let _0x5c43b2=0x0,_0x42ea33=BigNumber(0x0),_0x26054d=0x0,_0x15f1a1=undefined,_0x6311c5=undefined;_0x1e39ff[_0x2682c0(0x11a)](_0x4a787a=>{const _0x37a652=_0x2682c0,_0x312d85=formatDate(new Date(_0x4a787a['block_timestamp'])),_0x40f00d=_0x4a787a[_0x37a652(0x18a)];_0x5c43b2==0x0&&(_0x15f1a1=_0x312d85);if(_0x15f1a1!=_0x312d85){let _0x3070ab=_0x42ea33[_0x37a652(0x127)](_0x26054d)[_0x37a652(0x121)](DECIMALS_STABLE);chartX[_0x37a652(0x164)](_0x15f1a1),chartY[_0x37a652(0x164)](_0x3070ab);const _0x221253=new Date(_0x15f1a1);let _0x5c0801=formatDate(new Date(_0x221253[_0x37a652(0x142)](_0x221253[_0x37a652(0x1a7)]()+0x1)));while(_0x5c0801!=_0x312d85){chartX[_0x37a652(0x164)](_0x5c0801),chartY['push'](_0x3070ab);const _0xeca07b=new Date(_0x5c0801);_0x5c0801=formatDate(new Date(_0xeca07b[_0x37a652(0x142)](_0xeca07b[_0x37a652(0x1a7)]()+0x1)));}_0x42ea33=BigNumber(0x0),_0x26054d=0x0;}_0x15f1a1=_0x312d85,_0x6311c5=_0x40f00d,_0x42ea33=BigNumber(_0x42ea33)[_0x37a652(0x14e)](_0x6311c5),_0x26054d+=0x1,_0x5c43b2++;if(_0x5c43b2==_0x1e39ff[_0x37a652(0x14d)]){let _0x2af1e9=_0x42ea33[_0x37a652(0x127)](_0x26054d)[_0x37a652(0x121)](DECIMALS_STABLE);chartX[_0x37a652(0x164)](_0x15f1a1),chartY[_0x37a652(0x164)](_0x2af1e9);const _0x20ff55=new Date();let _0x3b0043=formatDate(new Date(_0x20ff55[_0x37a652(0x142)](_0x20ff55['getDate']()+0x1)));const _0x5e236e=new Date(_0x15f1a1);let _0x57b5f2=formatDate(new Date(_0x5e236e[_0x37a652(0x142)](_0x5e236e[_0x37a652(0x1a7)]()+0x1)));while(_0x57b5f2!=_0x3b0043){chartX['push'](_0x57b5f2),chartY[_0x37a652(0x164)](_0x2af1e9);const _0x36c0f9=new Date(_0x57b5f2);_0x57b5f2=formatDate(new Date(_0x36c0f9[_0x37a652(0x142)](_0x36c0f9[_0x37a652(0x1a7)]()+0x1)));}}});}async function startTronGridFeed(){const _0x57332=a0_0x5279ff;try{tronGridFeedInterval==null&&(console[_0x57332(0x116)](_0x57332(0x1ae)),await getFromTronGrid(),tronGridFeedInterval=setInterval(async function(){await getFromTronGrid();},0x2710));}catch(_0x57b621){}}async function startTronWebFeed(){const _0x416158=a0_0x5279ff;try{tronWebFeedInterval==null&&(console[_0x416158(0x116)]('STARTING\x20TRONWEB\x20DATA\x20FEED\x20'),await getFromTronWeb(),tronWebFeedInterval=setInterval(async function(){await getFromTronWeb();},0x2710));}catch(_0x70f5a2){}}async function startCoinGeckoFeed(){const _0x3fb8f0=a0_0x5279ff;try{coinGeckoFeedInterval==null&&(console['log'](_0x3fb8f0(0x12b)),await getFromCoinGecko(),coinGeckoFeedInterval=setInterval(async function(){await getFromCoinGecko();},0x2710));}catch(_0x3333ac){}}function stopFromTronWebFeed(){const _0x1f1275=a0_0x5279ff;console[_0x1f1275(0x116)](_0x1f1275(0x1ac)),tronWebFeedInterval!=null&&(clearInterval(tronWebFeedInterval),tronWebFeedInterval=null,console[_0x1f1275(0x116)](_0x1f1275(0x12c)));}let LOCK=![],INITIALIZED=![],PREV_ACCOUNT=null,ENTERED=![],ALLOW_ENABLE_CONTROLS=!![];function showConnectionMsg(_0x268fe9){const _0x1aaaf5=a0_0x5279ff;$(_0x1aaaf5(0x136))[_0x1aaaf5(0x170)]('hidden',!_0x268fe9);}function enableControls(_0x1a912e){const _0x392328=a0_0x5279ff;_0x1a912e&&!ALLOW_ENABLE_CONTROLS&&(_0x1a912e=![]),$(_0x392328(0x179))[_0x392328(0x170)](_0x392328(0x182),!_0x1a912e),$(_0x392328(0x19d))[_0x392328(0x170)](_0x392328(0x182),!_0x1a912e),$(_0x392328(0x194))[_0x392328(0x170)]('disabled',!_0x1a912e);}$(document)[a0_0x5279ff(0x17a)](async function(){const _0x50f37e=a0_0x5279ff;showConnectionMsg(!![]),$(_0x50f37e(0x11f))[_0x50f37e(0x170)]('href',CONTRACT_LP_NETWORK_URL),$('.tokenName')[_0x50f37e(0x1a5)](NAME_TOKEN),$(_0x50f37e(0x135))[_0x50f37e(0x1a5)](NAME_STABLE),ENTERED=!![],LOCK=!![],await initialize()[_0x50f37e(0x181)](()=>{LOCK=![];});});async function initialize(){const _0x185e51=a0_0x5279ff;console[_0x185e51(0x116)]('INITIALIZING');try{await startTronGridFeed(),await startCoinGeckoFeed(),constructChartData(await readSwaps(CONTRACT_LP)),chart=new Chart(document[_0x185e51(0x130)]('priceChart'),chartConfig),await tronLinkReady(),await getTronWeb(),await startTronWebFeed();}catch(_0x52fe59){console[_0x185e51(0x116)]('INITIALIZING\x20FAILED'),showConnectionMsg(!![]),enableControls(![]),stopFromTronWebFeed();}}async function getTronWeb(){const _0xc9793=a0_0x5279ff;try{const _0x678dac=await tronLink[_0xc9793(0x172)]({'method':'tron_requestAccounts'});if(_0x678dac['code']!=0xc8)throw _0x678dac;await new Promise(_0x1e3d0a=>setTimeout(_0x1e3d0a,0x64)),token=await tronWeb['contract']()['at'](CONTRACT_TOKEN),await new Promise(_0x3051bb=>setTimeout(_0x3051bb,0x64)),stable=await tronWeb[_0xc9793(0x17f)]()['at'](CONTRACT_STABLE),await new Promise(_0x10361a=>setTimeout(_0x10361a,0x64)),liquidityPool=await tronWeb[_0xc9793(0x17f)]()['at'](CONTRACT_LP),showConnectionMsg(![]),INITIALIZED=!![];}catch(_0xb1693b){console[_0xc9793(0x116)](_0xc9793(0x146)+_0xb1693b),showConnectionMsg(!![]),enableControls(![]);throw _0xb1693b;}}async function tronLinkReady(){await new Promise(_0x2b95c2=>{const _0x507199=setInterval(()=>{const _0x56ba14=a0_0x2d3b;if(window[_0x56ba14(0x189)]&&window[_0x56ba14(0x189)][_0x56ba14(0x14a)][_0x56ba14(0x1ab)])return clearInterval(_0x507199),_0x2b95c2();},0x64);});}function a0_0x2d3b(_0x59cd4f,_0x53e32b){const _0x4f6274=a0_0x4f62();return a0_0x2d3b=function(_0x2d3b0f,_0x49f1f0){_0x2d3b0f=_0x2d3b0f-0x116;let _0x5cd352=_0x4f6274[_0x2d3b0f];return _0x5cd352;},a0_0x2d3b(_0x59cd4f,_0x53e32b);}setInterval(function(){const _0x122e32=a0_0x5279ff,_0x2cb440=tronWeb[_0x122e32(0x14a)][_0x122e32(0x1ab)];if(!PREV_ACCOUNT&&_0x2cb440)PREV_ACCOUNT=_0x2cb440;else PREV_ACCOUNT&&PREV_ACCOUNT!=_0x2cb440&&window[_0x122e32(0x1b9)][_0x122e32(0x173)]();},0x3e8),window[a0_0x5279ff(0x143)](a0_0x5279ff(0x132),async function(_0x1d5019){const _0x18abc9=a0_0x5279ff;_0x1d5019[_0x18abc9(0x129)][_0x18abc9(0x132)]&&_0x1d5019[_0x18abc9(0x129)][_0x18abc9(0x132)][_0x18abc9(0x145)]==_0x18abc9(0x1bc)&&(ENTERED&&!LOCK&&(LOCK=!![],addr=_0x1d5019['data']['message'][_0x18abc9(0x129)][_0x18abc9(0x178)],(addr==undefined||addr==null||!addr)&&window[_0x18abc9(0x1b9)]['reload'](),!INITIALIZED?await initialize():await getTronWeb()[_0x18abc9(0x196)](()=>{})[_0x18abc9(0x16e)](_0x4def1c=>{const _0x34b499=_0x18abc9;this[_0x34b499(0x1b6)][_0x34b499(0x1b9)][_0x34b499(0x173)]();}),LOCK=![]));});function displayPrice(_0x4adcca,_0x42e92f){const _0xd119c=a0_0x5279ff;_0x4adcca[_0xd119c(0x1bf)](0x0)&&_0x42e92f[_0xd119c(0x1bf)](0x0)?$(_0xd119c(0x147))[_0xd119c(0x1a5)](_0x42e92f['div'](_0x4adcca)[_0xd119c(0x121)](DECIMALS_6)):$('.price')[_0xd119c(0x1a5)]('-');}function setInputFilter(_0x383d55,_0x55d524){const _0x257edd=a0_0x5279ff;[_0x257edd(0x16b),_0x257edd(0x17c),_0x257edd(0x1a9),'mousedown',_0x257edd(0x18c),_0x257edd(0x193),'contextmenu',_0x257edd(0x13c),_0x257edd(0x16d),_0x257edd(0x1c1)][_0x257edd(0x11a)](function(_0x1ff049){_0x383d55['addEventListener'](_0x1ff049,function(){const _0x34949f=a0_0x2d3b;if(_0x55d524(this[_0x34949f(0x13b)]))this[_0x34949f(0x148)]=this[_0x34949f(0x13b)],this[_0x34949f(0x15b)]=this['selectionStart'],this['oldSelectionEnd']=this[_0x34949f(0x14f)];else this[_0x34949f(0x19a)]('oldValue')?(this[_0x34949f(0x13b)]=this[_0x34949f(0x148)],this[_0x34949f(0x139)](this[_0x34949f(0x15b)],this['oldSelectionEnd'])):this['value']='';let _0x20dc98=BigNumber(0x0),_0x273b84=BigNumber(0x0);if(_0x383d55['id']=='swap_from_input'){if($(_0x34949f(0x167))[_0x34949f(0x170)](_0x34949f(0x1b5))==!![]){const _0x3c8574=$(_0x34949f(0x179))[_0x34949f(0x1c3)]();if(!(_0x3c8574==''||_0x3c8574<=0x0||this[_0x34949f(0x13b)]==''||this[_0x34949f(0x13b)]<=0x0)){_0x20dc98=BigNumber(valueMoveCommaRight($(_0x34949f(0x179))[_0x34949f(0x1c3)](),DECIMALS_TOKEN));let _0x43f2b1=BigNumber(tokenBalanceContract),_0xee423a=BigNumber(stableBalanceContract)[_0x34949f(0x14e)](STABLE_BALANCE_OFFSET),_0x421784=_0x43f2b1[_0x34949f(0x14e)](_0x20dc98),_0x11910c=LP_INVARIANT[_0x34949f(0x1bb)](_0x421784)[_0x34949f(0x17d)](BigNumber[_0x34949f(0x15d)]);_0x273b84=_0xee423a[_0x34949f(0x15e)](_0x11910c);_0x421784[_0x34949f(0x1bf)](TOKEN_MAX_SUPPLY)&&(_0x273b84=BigNumber(0x0));$(_0x34949f(0x19d))['val'](valueMoveCommaLeft(_0x273b84,DECIMALS_STABLE)['toFixed'](DECIMALS_6));if(_0x1ff049==_0x34949f(0x16d)){let _0x1028c7=_0xee423a['minus'](_0x273b84),_0x503cb4=LP_INVARIANT[_0x34949f(0x1bb)](_0x1028c7)['integerValue'](BigNumber[_0x34949f(0x15d)]);_0x20dc98=_0x503cb4[_0x34949f(0x15e)](_0x43f2b1),$(_0x34949f(0x179))[_0x34949f(0x1c3)](valueMoveCommaLeft(_0x20dc98,DECIMALS_TOKEN)[_0x34949f(0x121)](DECIMALS_6));}}}else{const _0x2ede49=$(_0x34949f(0x179))[_0x34949f(0x1c3)]();if(!(_0x2ede49==''||_0x2ede49<=0x0||this[_0x34949f(0x13b)]==''||this[_0x34949f(0x13b)]<=0x0)){_0x273b84=BigNumber(valueMoveCommaRight($(_0x34949f(0x179))[_0x34949f(0x1c3)](),DECIMALS_STABLE));let _0x4b51c7=BigNumber(tokenBalanceContract),_0x39690=BigNumber(stableBalanceContract)[_0x34949f(0x14e)](STABLE_BALANCE_OFFSET),_0x591a25=_0x39690[_0x34949f(0x14e)](_0x273b84),_0x1ae58d=LP_INVARIANT['div'](_0x591a25)[_0x34949f(0x17d)](BigNumber['ROUND_FLOOR']);_0x20dc98=_0x4b51c7['minus'](_0x1ae58d),$('#swap_to_input')[_0x34949f(0x1c3)](valueMoveCommaLeft(_0x20dc98,DECIMALS_TOKEN)[_0x34949f(0x121)](DECIMALS_6));if(_0x1ff049=='blur'){let _0x4dfcf3=_0x4b51c7[_0x34949f(0x15e)](_0x20dc98),_0x2f77d4=LP_INVARIANT['div'](_0x4dfcf3)['integerValue'](BigNumber[_0x34949f(0x15d)]);_0x273b84=_0x2f77d4[_0x34949f(0x15e)](_0x39690),$(_0x34949f(0x179))[_0x34949f(0x1c3)](valueMoveCommaLeft(_0x273b84,DECIMALS_STABLE)[_0x34949f(0x121)](DECIMALS_6));}}}displayPrice(_0x20dc98,_0x273b84);}if(_0x383d55['id']==_0x34949f(0x195)){if($(_0x34949f(0x167))[_0x34949f(0x170)](_0x34949f(0x1b5))==!![]){const _0x4a26df=$(_0x34949f(0x19d))[_0x34949f(0x1c3)]();if(!(_0x4a26df==''||_0x4a26df<=0x0||this[_0x34949f(0x13b)]==''||this['value']<=0x0)){_0x273b84=BigNumber(valueMoveCommaRight($(_0x34949f(0x19d))[_0x34949f(0x1c3)](),DECIMALS_STABLE));let _0x299e7a=BigNumber(tokenBalanceContract),_0x16635b=BigNumber(stableBalanceContract)[_0x34949f(0x14e)](STABLE_BALANCE_OFFSET),_0x2ccf3d=_0x16635b[_0x34949f(0x15e)](_0x273b84),_0x14a652=LP_INVARIANT[_0x34949f(0x1bb)](_0x2ccf3d)[_0x34949f(0x17d)](BigNumber[_0x34949f(0x15d)]);_0x20dc98=_0x14a652[_0x34949f(0x15e)](_0x299e7a);(_0x14a652[_0x34949f(0x1bf)](TOKEN_MAX_SUPPLY)||_0x2ccf3d<0x0)&&(_0x20dc98=BigNumber(0x0));$(_0x34949f(0x179))['val'](valueMoveCommaLeft(_0x20dc98,DECIMALS_TOKEN)['toFixed'](DECIMALS_6));if(_0x1ff049==_0x34949f(0x16d)){let _0x1b8af8=_0x299e7a[_0x34949f(0x14e)](_0x20dc98),_0x3a1f21=LP_INVARIANT['div'](_0x1b8af8)[_0x34949f(0x17d)](BigNumber[_0x34949f(0x15d)]);_0x273b84=_0x16635b[_0x34949f(0x15e)](_0x3a1f21),$(_0x34949f(0x19d))[_0x34949f(0x1c3)](valueMoveCommaLeft(_0x273b84,DECIMALS_STABLE)[_0x34949f(0x121)](DECIMALS_6));}}}else{const _0x480b48=$('#swap_to_input')[_0x34949f(0x1c3)]();if(!(_0x480b48==''||_0x480b48<=0x0||this[_0x34949f(0x13b)]==''||this['value']<=0x0)){_0x20dc98=BigNumber(valueMoveCommaRight($(_0x34949f(0x19d))['val'](),DECIMALS_TOKEN));let _0x52ca91=BigNumber(tokenBalanceContract),_0x51ae55=BigNumber(stableBalanceContract)['plus'](STABLE_BALANCE_OFFSET),_0x1394b7=_0x52ca91['minus'](_0x20dc98),_0xf542fa=LP_INVARIANT['div'](_0x1394b7)['integerValue'](BigNumber['ROUND_FLOOR']);_0x273b84=_0xf542fa[_0x34949f(0x15e)](_0x51ae55);_0x273b84[_0x34949f(0x1ad)](0x0)&&(_0x273b84=BigNumber(0x0));$(_0x34949f(0x179))[_0x34949f(0x1c3)](valueMoveCommaLeft(_0x273b84,DECIMALS_STABLE)['toFixed'](DECIMALS_6));if(_0x1ff049==_0x34949f(0x16d)){let _0x1469e3=_0x51ae55['plus'](_0x273b84),_0x75319a=LP_INVARIANT['div'](_0x1469e3)['integerValue'](BigNumber['ROUND_FLOOR']);_0x20dc98=_0x52ca91[_0x34949f(0x15e)](_0x75319a),$(_0x34949f(0x19d))['val'](valueMoveCommaLeft(_0x20dc98,DECIMALS_TOKEN)[_0x34949f(0x121)](DECIMALS_6));}}}displayPrice(_0x20dc98,_0x273b84);}});});}setInputFilter(document[a0_0x5279ff(0x130)](a0_0x5279ff(0x1b4)),function(_0x249a85){const _0x3ca689=a0_0x5279ff;return/^-?\d*[.]?\d{0,6}$/[_0x3ca689(0x141)](_0x249a85);}),setInputFilter(document[a0_0x5279ff(0x130)](a0_0x5279ff(0x195)),function(_0x321c40){const _0x4cdb7d=a0_0x5279ff;return/^-?\d*[.]?\d{0,6}$/[_0x4cdb7d(0x141)](_0x321c40);}),$(function(){const _0x3dbee1=a0_0x5279ff;$(_0x3dbee1(0x1a0))[_0x3dbee1(0x138)](function(_0x3b67bb){const _0x214050=_0x3dbee1;_0x3b67bb[_0x214050(0x18b)]();if($(_0x214050(0x167))[_0x214050(0x170)](_0x214050(0x1b5))==!![]){$(_0x214050(0x167))['prop'](_0x214050(0x1b5),![]),$(_0x214050(0x117))['prop']('hidden',!![]),$(_0x214050(0x15f))[_0x214050(0x170)]('hidden',!![]),$(_0x214050(0x17b))[_0x214050(0x170)](_0x214050(0x1b5),![]),$(_0x214050(0x1c2))['prop'](_0x214050(0x1b5),![]),$(_0x214050(0x128))[_0x214050(0x170)](_0x214050(0x1b5),!![]),$('#swap_balance_stable')[_0x214050(0x170)]('hidden',!![]),$(_0x214050(0x13a))['prop']('hidden',![]),$('#swap_from_img')[_0x214050(0x170)]('src',IMG_STABLE_URL),$(_0x214050(0x144))[_0x214050(0x170)](_0x214050(0x177),IMG_TOKEN_URL);let _0x59cadf=$('#swap_from_input')[_0x214050(0x1c3)](),_0x223d61=$(_0x214050(0x19d))[_0x214050(0x1c3)]();$(_0x214050(0x179))['val'](_0x223d61),$(_0x214050(0x19d))[_0x214050(0x1c3)](_0x59cadf),document[_0x214050(0x130)](_0x214050(0x1b4))['focus']();}else{$(_0x214050(0x167))['prop'](_0x214050(0x1b5),!![]),$(_0x214050(0x117))[_0x214050(0x170)](_0x214050(0x1b5),![]),$(_0x214050(0x15f))[_0x214050(0x170)](_0x214050(0x1b5),![]),$(_0x214050(0x17b))['prop'](_0x214050(0x1b5),!![]),$('#swap_input_balance_stable')[_0x214050(0x170)](_0x214050(0x1b5),!![]),$('#swap_input_balance_token')[_0x214050(0x170)](_0x214050(0x1b5),![]),$('#swap_balance_stable')[_0x214050(0x170)](_0x214050(0x1b5),![]),$(_0x214050(0x13a))[_0x214050(0x170)](_0x214050(0x1b5),!![]),$('#swap_from_img')['prop']('src',IMG_TOKEN_URL),$('#swap_to_img')[_0x214050(0x170)]('src',IMG_STABLE_URL);let _0x2c9f53=$('#swap_from_input')['val'](),_0x15fa25=$(_0x214050(0x19d))[_0x214050(0x1c3)]();$('#swap_from_input')['val'](_0x15fa25),$(_0x214050(0x19d))[_0x214050(0x1c3)](_0x2c9f53),document[_0x214050(0x130)](_0x214050(0x1b4))['focus']();}}),$(_0x3dbee1(0x128))[_0x3dbee1(0x138)](function(_0x3e152b){const _0x58363e=_0x3dbee1;_0x3e152b[_0x58363e(0x18b)](),($(_0x58363e(0x179))[_0x58363e(0x170)](_0x58363e(0x182))!=!![]||$(_0x58363e(0x19d))['prop'](_0x58363e(0x182))!=!![])&&($('#swap_from_stable')[_0x58363e(0x170)](_0x58363e(0x1b5))==!![]?($(_0x58363e(0x179))[_0x58363e(0x1c3)](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x58363e(0x121)](DECIMALS_6)),document[_0x58363e(0x130)](_0x58363e(0x1b4))[_0x58363e(0x1c1)]()):($(_0x58363e(0x19d))['val'](valueMoveCommaLeft(balanceToken,DECIMALS_TOKEN)[_0x58363e(0x121)](DECIMALS_6)),document[_0x58363e(0x130)](_0x58363e(0x195))['focus']()));}),$(_0x3dbee1(0x1c2))[_0x3dbee1(0x138)](function(_0x25d6a7){const _0xbc5b9b=_0x3dbee1;_0x25d6a7[_0xbc5b9b(0x18b)](),($(_0xbc5b9b(0x179))[_0xbc5b9b(0x170)](_0xbc5b9b(0x182))!=!![]||$(_0xbc5b9b(0x19d))[_0xbc5b9b(0x170)](_0xbc5b9b(0x182))!=!![])&&($(_0xbc5b9b(0x167))['prop'](_0xbc5b9b(0x1b5))==!![]?($(_0xbc5b9b(0x19d))[_0xbc5b9b(0x1c3)](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)['toFixed'](DECIMALS_6)),document['getElementById'](_0xbc5b9b(0x195))[_0xbc5b9b(0x1c1)]()):($(_0xbc5b9b(0x179))['val'](valueMoveCommaLeft(balanceStable,DECIMALS_TOKEN)[_0xbc5b9b(0x121)](DECIMALS_6)),document[_0xbc5b9b(0x130)](_0xbc5b9b(0x1b4))['focus']()));});});async function sendTransaction(_0x1ba248,_0x563f13,_0x585466,_0x125b32){const _0x2f9adc=a0_0x5279ff;console[_0x2f9adc(0x116)]('SEND\x20TRANSACTION\x20('+_0x1ba248+_0x2f9adc(0x12a));let _0x1eb7d8=![];$(_0x2f9adc(0x1a6))[_0x2f9adc(0x140)]('<div\x20class=\x22spinner-border\x20spinner-border-xs\x20text-warning\x22\x20role=\x22status\x22><span\x20class=\x22visually-hidden\x22>Waiting\x20for\x20signature...</span></div><span\x20class=\x22text-warning\x22>&nbsp;Waiting\x20for\x20'+_0x1ba248+'\x20transaction\x20signature\x20...</span>');try{let _0x1689d9=await _0x563f13()[_0x2f9adc(0x159)]();$(_0x2f9adc(0x1a6))[_0x2f9adc(0x140)](_0x2f9adc(0x1b1)+_0x1ba248+_0x2f9adc(0x11e)+TRANSACTION_URL+_0x1689d9+'\x22\x20target=\x22_blank\x22\x20class=\x22text-warning\x22>'+shortenString(_0x1689d9)+_0x2f9adc(0x19b));}catch(_0x271f39){let _0x7c33f1;return _0x271f39[_0x2f9adc(0x132)]?(_0x7c33f1=_0x271f39[_0x2f9adc(0x132)],_0x7c33f1==_0x2f9adc(0x1b2)&&(_0x7c33f1='Unable\x20to\x20confirm\x20transaction\x20due\x20to\x20insufficient\x20funds')):_0x7c33f1=_0x271f39,$(_0x2f9adc(0x1a6))['html'](_0x2f9adc(0x1b1)+_0x7c33f1+'</span>'),[!![],!![]];}return console[_0x2f9adc(0x116)]('SEND\x20TRANSACTION\x20('+_0x1ba248+_0x2f9adc(0x14b)),[![],_0x1eb7d8];}$(function(){'use strict';const _0x3bae98=a0_0x5279ff;var _0x3f702a=document[_0x3bae98(0x188)]('.swap_form');Array[_0x3bae98(0x14c)][_0x3bae98(0x16a)]['call'](_0x3f702a)[_0x3bae98(0x11a)](function(_0x4420eb){const _0x2bd18e=_0x3bae98;_0x4420eb['addEventListener'](_0x2bd18e(0x12f),async function(_0x4dc3c7){const _0x10ea13=_0x2bd18e;_0x4dc3c7[_0x10ea13(0x18b)](),_0x4dc3c7[_0x10ea13(0x126)]();let _0x11ff31=null,_0x2a8c48=null,_0x180dd4=null;$('#swap_from_stable')[_0x10ea13(0x170)](_0x10ea13(0x1b5))==!![]?(_0x180dd4=!![],_0x11ff31=valueMoveCommaRight($(_0x10ea13(0x179))['val'](),DECIMALS_TOKEN),_0x2a8c48=valueMoveCommaRight($(_0x10ea13(0x19d))[_0x10ea13(0x1c3)](),DECIMALS_STABLE)):(_0x180dd4=![],_0x11ff31=valueMoveCommaRight($(_0x10ea13(0x19d))[_0x10ea13(0x1c3)](),DECIMALS_TOKEN),_0x2a8c48=valueMoveCommaRight($(_0x10ea13(0x179))[_0x10ea13(0x1c3)](),DECIMALS_STABLE));console[_0x10ea13(0x116)]('tokenVal\x20=\x20'+_0x11ff31+',\x20stableVal\x20=\x20'+_0x2a8c48);let _0x2d6a4b=![],_0x2eb4ae=![];if(_0x11ff31[_0x10ea13(0x184)]()||_0x2a8c48[_0x10ea13(0x184)]()||_0x11ff31[_0x10ea13(0x1b0)](0x0)||_0x2a8c48[_0x10ea13(0x1b0)](0x0))$(_0x10ea13(0x1a6))['html'](_0x10ea13(0x175)),_0x2d6a4b=!![];else{if(_0x180dd4&&_0x11ff31['isGreaterThan'](balanceToken))$(_0x10ea13(0x1a6))[_0x10ea13(0x140)]('<span\x20class=\x22text-warning\x22>Your\x20'+NAME_TOKEN+'\x20balance\x20is\x20too\x20low</span>'),_0x2d6a4b=!![];else!_0x180dd4&&_0x2a8c48[_0x10ea13(0x1bf)](balanceStable)&&($(_0x10ea13(0x1a6))[_0x10ea13(0x140)](_0x10ea13(0x191)+NAME_STABLE+_0x10ea13(0x124)),_0x2d6a4b=!![]);}ALLOW_ENABLE_CONTROLS=![],enableControls(![]),_0x2d6a4b==![]&&(!_0x180dd4?_0x2a8c48[_0x10ea13(0x1bf)](allowanceStable)&&([_0x2d6a4b,_0x2eb4ae]=await sendTransaction(_0x10ea13(0x18e)+NAME_STABLE+_0x10ea13(0x1a3),function(){const _0x481fb8=_0x10ea13;return stable[_0x481fb8(0x11c)](CONTRACT_LP,_0x481fb8(0x125));})):_0x11ff31[_0x10ea13(0x1bf)](allowanceToken)&&([_0x2d6a4b,_0x2eb4ae]=await sendTransaction('<span\x20class=\x22fw-bold\x22>Approve\x20('+NAME_TOKEN+')</span>',function(){const _0x5471f6=_0x10ea13;return token['approve'](CONTRACT_LP,_0x5471f6(0x125));}))),_0x2d6a4b==![]&&_0x2eb4ae==![]&&(!_0x180dd4?[_0x2d6a4b,_0x2eb4ae]=await sendTransaction(_0x10ea13(0x19f)+NAME_STABLE+_0x10ea13(0x123)+NAME_TOKEN+_0x10ea13(0x1a3),function(){const _0x17d9c9=_0x10ea13;return liquidityPool['withdraw'](_0x11ff31[_0x17d9c9(0x121)](0x0),_0x2a8c48['plus'](_0x2a8c48['div'](SLIPPAGE))[_0x17d9c9(0x121)](0x0));}):[_0x2d6a4b,_0x2eb4ae]=await sendTransaction('<span\x20class=\x22fw-bold\x22>Swap\x20('+NAME_TOKEN+_0x10ea13(0x123)+NAME_STABLE+')</span>',function(){const _0x9a59f4=_0x10ea13;return liquidityPool[_0x9a59f4(0x131)](_0x11ff31[_0x9a59f4(0x121)](0x0),_0x2a8c48[_0x9a59f4(0x15e)](_0x2a8c48['div'](SLIPPAGE))[_0x9a59f4(0x121)](0x0));})),ALLOW_ENABLE_CONTROLS=!![],enableControls(!![]);},![]);});});