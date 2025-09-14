// /* KRYPTOBOOKZ ENGINE : KBZ
//  * descriptions:
//  * This engine looks up EPISODE IDTs
//  * From BLOCKCHAIN.
//  * Then converts IDX to IPFS URIs
//  * The content from IPFS is then
//  * LOAD and RENDER.
//  * If IDT is array, display last.
//  * LINKS displayed by 8GRID hash.
//  * On LINK, lookup and RENDER.
//  * Keep an ENGINE variable in series
//  * switch render by KBZ:1.1.1
    // * by spazeFalcon

import { viz } from "./kryptoviz.js";

// let mainView = null;
// const loginButton = document.getElementById('loginBtn')
// const nftDisplay1 = document.getElementById('nftDisplay1')
let nftDisplay1; //TODO move these to ui.nftDisplay
let KRYPTOBOOKFrame1;// = document.getElementById('KRYPTOBOOKFrame1')
let sonics = {};
// const statusDisplay1 = document.getElementById('statusDisplay1')
class MainVw {
    constructor(account){
        this.userAccount = account;
        this.eth = window.ethereum;
        this.wurldz = 0x46f3397433384f2e31262596642c811929d6c069;  //virtua wurldz opensea collection
        this.contract = 0x495f947276749Ce646f68AC8c248420045cb7b5e; //contract address for doc cozmo NFT
        this.tokenId = 32091639769859466206787752406743660124435242419967811135209154768441297600513  //doc cozmo
        this.creator = 0x5b3256965e7C3cF26E11FCAf296DfC8807C01073; //spazefalcon
        this.txnHash = 0x7d0512fa5e19d2d775bb55efe9b5e9960cc59f9c67c627b1f5eb22a5749162f2; //creator transaction hash
        this.idx = null; //use for singular content
    }
}


/***************************************************************************************************\
 * METANET_LOCAL: if provider or IPFS have nothing, show LOCAL DATA - : )
\***************************************************************************************************/  
// const METANET_LOCAL_DEFAULT = { //local data
//     cardz:[ {PATH:'./copyrightNetCinematics/KRYPTOCARDZ', START:1, STOP:2} //enumerable load-.
//     ], bitz:[], vidz:[], sonicz:[], spaze:[], botzity:[] 
// };


function initPage(){
    nftDisplay1 = document.getElementById('nftDisplay1')
    KRYPTOBOOKFrame1 = document.getElementById('KRYPTOBOOKFrame1')
/***************************************************************************************************\
 * META - ability for page to override and change dynamically-. - : )
\***************************************************************************************************/
/***************************************************************************************************\
 * GETDATA - all types of data requestFunctions here-. - : )
\***************************************************************************************************/
    function runDISPLAYFactory(mode, CID){ 
        //NOTE: {mode = 1} //gallery; {mode = 7} //kryptobook
        try{ 
            if (ui.onGalleryView) {ui.onGalleryView = false}
            // if (ui.topMenuFrame) { ui.topMenuFrame.style.display = 'none'; } //show on all pages2
            if (nftDisplay1) { nftDisplay1.style.display = 'none'; }
            if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.style.display = 'none'; }
            // if (nftDisplay1) { nftDisplay1.innerHTML = ""; } //BLANK data view-.
            scrollToTop();
            if(kbz && kbz.MainVw && kbz.MainVw.item_idx){ //render ITEM VIEW
                clearAllDisplays();
                // if (ui.itemDISPLAYFRAME1) {ui.onItemView = true; 
                //     ui.itemDISPLAYFRAME1.style.display = 'block'; }
                viz.create_ITEM_VIEW(kbz.MainVw.item_idx);

                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 

                return;
            }
            if(mode===1){// gallery - initialized on load
                clearAllDisplays();
                if (ui.GalleryDISPLAYFRAME1) {ui.onGalleryView = true; 
                    ui.GalleryDISPLAYFRAME1.style.display = 'block'; }
                if (ui.topMenuFrame) { ui.topMenuFrame.style.display = 'block'; }
            } 
            if(mode===2){  //cardz
                //generate IMG PATH dynamically with ENUM.
                let cardzENUM = {PATH:'./copyrightNetCinematics/KRYPTOCARDZ', START:0, STOP:10}
                let cardzMetaNet = [];
                for ( let i=cardzENUM.START; i<=cardzENUM.STOP; i++ ){
                    cardzMetaNet.push({id:i,IMGPATH:`${cardzENUM.PATH}/num${i}.png`})
                }
                viz.create_Dynamic_TTL('COZMOCARDZ',ui.nftDisplay1);
                for(let card of cardzMetaNet){
                    viz.create_META_VIEW(card);
                }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
                if (ui.itemDISPLAYFRAME1) { ui.itemDISPLAYFRAME1.style.display = 'none'; } 
                //todo remove item and move to clear all display
            } else 
            if(mode===3){  //bitz
                viz.create_Dynamic_TTL('COZMOBITZ',ui.nftDisplay1);
                let bitzMetaNet = [];
                let bitzENUM = {PATH:'./copyrightNetCinematics/KRYPTOBITZ/set002', START:1, STOP:22}
                for ( let i=bitzENUM.START; i<=bitzENUM.STOP; i++ ){
                    bitzMetaNet.push({id:i,IMGPATH:`${bitzENUM.PATH}/${i}.png`})
                }
                for(let bit of bitzMetaNet){
                    viz.create_META_VIEW(bit);
                }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
                if (ui.itemDISPLAYFRAME1) { ui.itemDISPLAYFRAME1.style.display = 'none'; } 

            } else 
            if(mode===4){  //sonicz
                viz.create_Dynamic_TTL('COZMOSONICZ',ui.nftDisplay1);
                //generate PATH dynamically with ENUM.
                let soniczENUM = {START:1, STOP:2,PATH:'./copyrightNetCinematics/KRYPTOSONICZ' }
                let soniczMetaNet = [];
                for ( let i=soniczENUM.START; i<=soniczENUM.STOP; i++ ){
                    soniczMetaNet.push(
                        {id:i, IMGPATH:`${soniczENUM.PATH}/img${i}.png`,
                          SONICPATH:`${soniczENUM.PATH}/sonic${i}.mp3`
                        }
                    );
                }
                for(let sonic of soniczMetaNet){
                    viz.create_META_VIEW(sonic);
                }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
                if (ui.itemDISPLAYFRAME1) { ui.itemDISPLAYFRAME1.style.display = 'none'; } 
            } else 
            if(mode===5){  //vidz
                viz.create_Dynamic_TTL('COZMOVIDZ',ui.nftDisplay1);
                viz.create_UTOOB_VIEW();
                // let vidzIMG_ENUM = {START:1, STOP:6,PATH:'./copyrightNetCinematics/KRYPTOVIDZ' }
                // let vidzPATH_META = {
                //     1:'EP1.V11_remaster2021.mp4',
                //     2:'EP2PROD2a.mp4',
                //     3:'EP3_PRODv8_1080p.mp4',
                //     4:'EP4_PRODv4.mp4',
                //     5:'S2-EP5_PT1_23.mp4',
                //     6:'EP6.V6.mp4',
                // };
                // let vidzMetaNet = [];
                // for ( let i=vidzIMG_ENUM.START; i<=vidzIMG_ENUM.STOP; i++ ){
                //     vidzMetaNet.push(
                //         {id:i, IMGPATH:`${vidzIMG_ENUM.PATH}/img${i}.png`
                //         ,
                //           VIDPATH:`${vidzIMG_ENUM.PATH}/${vidzPATH_META[i]}`
                //         }
                //     );
                // }
                // for(let vid of vidzMetaNet){
                //     viz.create_META_VIEW(vid);
                // }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
                if (ui.itemDISPLAYFRAME1) { ui.itemDISPLAYFRAME1.style.display = 'none'; } 
            } else 
            if(mode===6 || mode===12){ //DISPLAY ALL-.
                //****************************************************************************
                let getNFTbyContractAndToken={  //GETNFT by Contract and tokenId.
                    assetContractAddr:"0x495f947276749Ce646f68AC8c248420045cb7b5e", 
                    tokenId:"32091639769859466206787752406743660124435242419967811135209154768441297600513"}
                // getNFT(getNFTbyContractAndToken)
                //****************************************************************************
                let getNFTSbyOwner={  //GETNFTS by Owner. - PLURAL NFTZ MULTIPLE!
                    owner:"0x46f3397433384f2e31262596642c811929d6c069"}
                getNFTs(getNFTSbyOwner.owner)
                //*********************************************************//OpenSea API : getNFTs (multiple) 
                let getNFTCollectionsbyOwner={  //GETNFT Collections by Owner. - PLURAL COLLECTIONZ MULTIPLE!    
                    owner:"0x46f3397433384f2e31262596642c811929d6c069"}   
                getNFTCollections(getNFTCollectionsbyOwner.owner)
            //***********************KRYPTOBOOKZ*****************************************************
            } else if (mode === 7){ //RENDER KRYPTOBOOK!!! //possibly obsolete todo
                // KRYPTOBOOKFrame1.style.display = 'block'; //todo this line double loads
                getKRYPTOBOOKZ(CID);
                // if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.style.display = 'block'; }
                // kbz.MainVw.runDISPLAYFactory(1);//load init
                // getKRYPTOBOOKZ(mode);
                nftDisplay1.style.display = 'none';
                KRYPTOBOOKFrame1.style.display = 'block';
                // debugger;
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
                if (ui.itemDISPLAYFRAME1) { ui.itemDISPLAYFRAME1.style.display = 'none'; } 
                //todo convert all of these to clear all displays()
            } else if (mode === 8 ){ //RENDER COZMOTOONZ!!!
                // getKRYPTOBOOKZ(CID);
                getCOZMOTOONZ(CID);
                clearAllDisplays();
                KRYPTOBOOKFrame1.style.display = 'block';
                // nftDisplay1.style.display = 'none';
                // if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
                // if (ui.itemDISPLAYFRAME1) { ui.itemDISPLAYFRAME1.style.display = 'none'; } 
                //todo convert all of these to clear all displays()
            } else if (mode === 13){
                clearAllDisplays();
                KRYPTOBOOKFrame1.style.display = 'block';                
                setBIOPAGE();
            }
        //****************************************************************************
        // }); //END: GETNFT button click-.
        }catch(e){
            // statusDisplay1.innerHTML = "ERROR"+" no signal."; //e.message;
        }
    } MainVw.runDISPLAYFactory = runDISPLAYFactory; //Connect to main scope-.

/***************************************************************************************************\
 * METADATA - OVERRIDE : Populate META by ID lookup, then override LINKS and other behaviors. - : )
\***************************************************************************************************/  
const METANET = { //ATTRIBUTE OVERRIDES BY TOKEN ID, 
    // '42606445':{TR:'#1',UP:'SONICZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}}
    '42606445':{main:{snd:1},TR:'#1',UP:'SONICZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '42182031':{main:{snd:1},TR:'#1',UP:'SONICZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '32493286':{main:{vid:1},TR:'#1',UP:'VIDZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '24294536':{main:{vid:1},TR:'#1',UP:'VIDZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '23184401':{main:{vid:1},TR:'#1',UP:'VIDZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '22885283':{main:{vid:1},idx:{id:32493286,t_id:'32091639769859466206787752406743660124435242419967811135209154757446181322753',a_c_address:'0x495f947276749ce646f68ac8c248420045cb7b5e'}},
    '80447251':{ idx:{id:80447251,t_id:'32091639769859466206787752406743660124435242419967811135209154770640320856065',a_c_address:'0x495f947276749Ce646f68AC8c248420045cb7b5e'}},
};

/***************************************************************************************************\
 * HIDEDATA or OVERRIDEDATA - use tgt keys to HIDE items here-. Or change them. - : )
\***************************************************************************************************/
    let HIDENFTTGTs = [{key:'id',tgt:'268592'},{key:'id',tgt:'91019'}] //TODO move to METAFACTORY
    let HIDECOLLECTIONTGTs = [{key:'image_url',tgt:'https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60'}] 


/***************************************************************************************************\
 * UTILITY - all types of helperFunctions here-. - : )
\***************************************************************************************************/
   //todo deletable? improve?
    function getIconLink(node, url){
        node.style.marginTop = "-1em";
        return node.innerHTML=`<a href="${url}" target="_blank"><img src="../images/osblue.png" class="hoverGlow" style="width:2em;border-radius:100%;"/></a>`          
    }

    function getKRYPTOBOOKZ(CID){
        //METANET_CID_to_BOOKZ_lookup
        let METANET_BOOKZ = {
            's1.e1':SPAZEBOOK_KRYPTOBITZ1, 
            's1.e2':SPAZEBOOK_KRYPTOBITZ2, 
        }
        if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.innerHTML = ""; } //BLANK data view-.
        let aBOOK = METANET_BOOKZ[CID];
        if(CID === 's1.e2'){ //new format
            showSTORYBOOK_All(aBOOK, []) 
        } else { //old format
            showKRYPTOBOOK_All(aBOOK, []) 
        }
    }

    function setBIOPAGE(){

        let pageFrame = document.createElement('section');
        pageFrame.style.backgroundColor = 'black';
        pageFrame.style.borderRadius = "10px";
        pageFrame.style.padding = "0.111em";
        pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
        pageFrame.id = 'BioPageFrame';//.replace('.','-'));

        
        var historyFrame = document.createElement('article');
        historyFrame.style.backgroundColor = 'black';
        historyFrame.style.boxShadow = "0px 0px 20px 1px purple"
        historyFrame.style.border = "1px solid steelblue"
        historyFrame.style.borderRadius = "13px"
        historyFrame.style.padding = "0.888em"
        historyFrame.style.margin = "0.88em auto"
        historyFrame.style.maxWidth = "90%"
        historyFrame.style.cursor = "pointer"
        historyFrame.style.overflow = "hidden";    
        historyFrame.style.marginBottom = "1em";   
        historyFrame.style.borderTop = "none";    //OVERLAP
        let workbitz = {}, IMGFRAME, IMGBITw = {}, TXTTTL={}, TXTCAPTION={}, TXTSUB={};
        for(let i=0; i<AI_HISTORY.length;i++){
            workbitz = AI_HISTORY[i];
            if(workbitz.TTL){console.log('TTL',workbitz.TTL); //DYNAMIC TEXT
                TXTTTL = document.createElement('article');
                TXTTTL.style.backgroundColor = 'black';
                TXTTTL.style.border = "1px solid steelblue"
                if(document.body.clientWidth > 888){ TXTTTL.style.borderWidth = "0px";  } //RESPONSIVE
                TXTTTL.style.borderRadius = "13px"
                TXTTTL.style.padding = "0.888em"
                TXTTTL.style.margin = "2em 0 2em 0"
                TXTTTL.style.maxWidth = "44em"
                TXTTTL.style.cursor = "pointer"
                TXTTTL.style.overflow = "hidden";     //CROP
                // TXTTTL.style.marginBottom = "1em";   //CROP
                TXTTTL.style.textAlign = "left";
                // TXTTTL.style.marginLeft = "2em";
                TXTTTL.style.fontWeight = "bold";
                TXTTTL.classList.add('bluesteel-border-frame');
                TXTTTL.innerHTML = `${workbitz.TTL}`;
                if (historyFrame && TXTTTL) { historyFrame.insertAdjacentElement('beforeend', TXTTTL); }
            }
            if(workbitz.IMG){console.log('IMG',workbitz.IMG); //DYNAMIC IMAGE

                IMGFRAME = document.createElement('article');
                IMGFRAME.style.backgroundColor = 'black';
                IMGFRAME.style.border = "1px solid steelblue"
                if(document.body.clientWidth > 888){ IMGFRAME.style.borderWidth = "0px";  } //RESPONSIVE
                IMGFRAME.style.borderRadius = "13px"
                IMGFRAME.style.padding = "0.888em"
                IMGFRAME.style.margin = "0.88em auto"
                IMGFRAME.style.maxWidth = "44em"
                IMGFRAME.style.cursor = "pointer"
                IMGFRAME.style.overflow = "hidden";     //CROP
                IMGFRAME.style.marginBottom = "1em";   //CROP
                IMGFRAME.classList.add('bluesteel-border-frame');

                IMGBITw = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
                IMGBITw.src = workbitz.IMG; //large 600 size
                IMGBITw.style.width = "100%"
                IMGBITw.style.borderRadius = "18px"
                // IMGBITw.style.marginBottom = "-6.666em"     //CROP
                IMGBITw.style.maxWidth = "444px";          //RESPONSIVE
                IMGBITw.style.width = "100%"; //"136%";              //WIDTH
                IMGFRAME.insertAdjacentElement('beforeend', IMGBITw);
                if (historyFrame && IMGFRAME) { historyFrame.insertAdjacentElement('beforeend', IMGFRAME); }
            }
            if(workbitz.SUB){console.log('TXT',workbitz.TXT); //DYNAMIC TEXT
                TXTCAPTION = document.createElement('article');
                TXTCAPTION.style.backgroundColor = 'black';
                TXTCAPTION.style.border = "1px solid steelblue"
                if(document.body.clientWidth > 888){ TXTCAPTION.style.borderWidth = "0px";  } //RESPONSIVE
                TXTCAPTION.style.borderRadius = "13px"
                TXTCAPTION.style.padding = "0.888em"
                TXTCAPTION.style.margin = "0.88em auto"
                TXTCAPTION.style.maxWidth = "44em"
                TXTCAPTION.style.cursor = "pointer"
                TXTCAPTION.style.overflow = "hidden";     //CROP
                TXTCAPTION.style.marginBottom = "1em";   //CROP
                TXTCAPTION.style.fontFamily = "monospace";
                TXTCAPTION.classList.add('bluesteel-border-frame');
                TXTCAPTION.innerHTML = `${workbitz.SUB}`;
                if (historyFrame && TXTCAPTION) { historyFrame.insertAdjacentElement('beforeend', TXTCAPTION); }
            }             
            // if(workbitz.SUB){console.log('SUB',workbitz.SUB); //DYNAMIC TEXT
            //     TXTSUB = document.createElement('article');
            //     TXTSUB.style.backgroundColor = 'black';
            //     TXTSUB.style.border = "1px solid steelblue"
            //     if(document.body.clientWidth > 888){ TXTSUB.style.borderWidth = "0px";  } //RESPONSIVE
            //     TXTCAPTION.style.borderRadius = "13px"
            //     TXTCAPTION.style.padding = "0.888em"
            //     TXTSUB.style.margin = "0.88em auto"
            //     TXTSUB.style.maxWidth = "44em"
            //     TXTSUB.style.cursor = "pointer"
            //     TXTSUB.style.overflow = "hidden";     //CROP
            //     TXTSUB.style.marginBottom = "1em";   //CROP
            //     TXTSUB.style.fontFamily = "monospace";
            //     TXTSUB.classList.add('bluesteel-border-frame');
            //     TXTSUB.innerHTML = ` description ${workbitz.SUB}`;
            //     if (historyFrame && TXTSUB) { historyFrame.insertAdjacentElement('beforeend', TXTSUB); }
            // }             
        }


        var TXTFRAME = document.createElement('article');
        TXTFRAME.style.backgroundColor = 'black';
        TXTFRAME.style.boxShadow = "0px 0px 20px 1px cornflowerblue"
        TXTFRAME.style.border = "1px solid steelblue"
        TXTFRAME.style.borderRadius = "13px"
        TXTFRAME.style.padding = "0.888em"
        TXTFRAME.style.margin = "0.88em auto"
        TXTFRAME.style.maxWidth = "92%"
        TXTFRAME.style.cursor = "pointer"
        TXTFRAME.style.overflow = "hidden";    
        TXTFRAME.style.marginBottom = "1em";   
        TXTFRAME.style.borderTop = "none";    //OVERLAP
        var TXTFRAME2 = document.createElement('article');
        TXTFRAME2.style.backgroundColor = 'black';
        TXTFRAME2.style.boxShadow = "0px 0px 20px 1px cornflowerblue"
        TXTFRAME2.style.border = "1px solid steelblue"
        TXTFRAME2.style.borderRadius = "13px"
        TXTFRAME2.style.padding = "0.888em"
        TXTFRAME2.style.margin = "0.88em auto"
        TXTFRAME2.style.maxWidth = "92%"
        TXTFRAME2.style.cursor = "pointer"
        TXTFRAME2.style.overflow = "hidden";    
        TXTFRAME2.style.marginBottom = "1em";   
        TXTFRAME2.style.borderTop = "none";    //OVERLAP
        var TXTFRAME3 = document.createElement('article');
        TXTFRAME3.style.backgroundColor = 'black';
        TXTFRAME3.style.boxShadow = "0px 0px 20px 1px steelblue"
        TXTFRAME3.style.border = "1px solid steelblue"
        TXTFRAME3.style.borderRadius = "13px"
        TXTFRAME3.style.padding = "0.888em"
        TXTFRAME3.style.margin = "0.88em auto"
        TXTFRAME3.style.maxWidth = "92%"
        TXTFRAME3.style.cursor = "pointer"
        TXTFRAME3.style.overflow = "hidden";    
        TXTFRAME3.style.marginBottom = "1em";   
        TXTFRAME3.style.borderTop = "none";    //OVERLAP        

        var QRCodeFRAME = 0;
        QRCodeFRAME = document.createElement('article');
        QRCodeFRAME.style.backgroundColor = 'black';
        QRCodeFRAME.style.boxShadow = "0px 0px 20px 1px purple"
        QRCodeFRAME.style.border = "1px solid steelblue"
        QRCodeFRAME.style.borderRadius = "13px"
        QRCodeFRAME.style.padding = "0.888em"
        QRCodeFRAME.style.margin = "0.88em auto"
        QRCodeFRAME.style.maxWidth = "90%"
        QRCodeFRAME.style.cursor = "pointer"
        QRCodeFRAME.style.overflow = "hidden";    
        QRCodeFRAME.style.marginBottom = "1em";   
        QRCodeFRAME.style.borderTop = "none";    //OVERLAP        

        var MeTXTFRAME = 0;
        MeTXTFRAME = document.createElement('article');
        MeTXTFRAME.style.backgroundColor = 'black';
        MeTXTFRAME.style.boxShadow = "0px 0px 20px 1px purple"
        MeTXTFRAME.style.border = "1px solid steelblue"
        MeTXTFRAME.style.borderRadius = "13px"
        MeTXTFRAME.style.padding = "0.888em"
        MeTXTFRAME.style.margin = "0.88em auto"
        MeTXTFRAME.style.maxWidth = "90%"
        MeTXTFRAME.style.cursor = "pointer"
        MeTXTFRAME.style.overflow = "hidden";    
        MeTXTFRAME.style.marginBottom = "1em";   
        MeTXTFRAME.style.color = 'steelblue';
        MeTXTFRAME.style.borderTop = "none";    //OVERLAP        

        var txtCard1 = 0;
            txtCard1 = document.createElement('footer'); //IMG  //OTHER IMAGE TYPES HERE
            txtCard1.innerText = "AI_PROJECTS"; //large 600 size
            txtCard1.style.width = "100%";
            txtCard1.style.maxWidth = "32em"
            txtCard1.style.padding = "2em"
            txtCard1.style.margin = "0 auto"
            txtCard1.style.fontWeight = "bold";
            txtCard1.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
            txtCard1.style.borderRadius = "18px"
            txtCard1.addEventListener("click", ()=> {
            })

            
        var txtCard2 = 0;
            txtCard2 = document.createElement('footer'); //IMG  //OTHER IMAGE TYPES HERE
            txtCard2.innerText = "AI EXAMPLES"; //large 600 size
            txtCard2.style.width = "100%";
            txtCard2.style.maxWidth = "32em"
            txtCard2.style.padding = "2em"
            txtCard2.style.margin = "0 auto"
            txtCard2.style.fontWeight = "bold";
            txtCard2.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
            txtCard2.style.borderRadius = "18px"
            
        var txtCard3 = 0;
            txtCard3 = document.createElement('footer'); //IMG  //OTHER IMAGE TYPES HERE
            txtCard3.innerText ="MOBILE_LINKS"; //large 600 size
            txtCard3.style.width = "100%";
            txtCard3.style.maxWidth = "32em"
            txtCard3.style.padding = "2em"
            txtCard3.style.margin = "0 auto"
            txtCard3.style.fontWeight = "bold";
            txtCard3.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
            txtCard3.style.borderRadius = "18px"
            
            
    let AboutMeTXT2 = `
    <section style="text-align:center;margin:1em;line-height:2em;color:steelblue;">
            <div><b>SPAZE FALCON</b></div>
        <div style="font-size:0.666em; margin-left:20px;"><i>CREATOR | DEVELOPER | ARTIST | ENTREPRENEUR</i></div>
        <div style="font-size:0.666em; margin-left:20px;"><i>FOUNDER | KRYPTOSPAZE | COZMOCAT STUDIOS</i></div>
        <div style="font-size:0.666em; margin-left:20px;"><i>CO-FOUNDER | AI BANKBOOKS | AI STORYBOOK | AI CREATIVE DEV</i></div>
        <div style="font-size:0.666em; margin-left:20px;"><i>CO-FOUNDER | NEURAL NET | AXI AI</i></div>
        <div style="font-size:0.666em; margin-left:20px;"><i>OPENSEA | RARIBLE | FOUNDATION | MINTABLE</i></div>
        <div style="font-size:0.666em; margin-left:20px;"><i>TWITTER | INSTAGRAM | LINKTREE | YOUTUBE</i></div>
        <div style="font-size:0.666em; margin-left:20px;"><i>SPAZE FALCON#1234 DISCORD</i></div>
    </section>
        `;

    let QRCodeIMG=`
    <a href="https://linktr.ee/spazefalcon" target="_blank">
    <img src="./images/qrcode_linktree.png"  style="border-radius:10%;width:80%;max-width:12em;"/>
    </a>
    <h3>LINKTREE</h3>
    <a href="https://linktr.ee/spazefalcon" target="_blank">
    <img src="./images/qrcode_linktree.png"  style="border-radius:10%;width:80%;max-width:12em;"/>
    </a>
    <h3>AI_PORTFOLIO</h3>
            ${AboutMeTXT2}`;


    let AIProjectTXT=`
    <section id="AI_PROJECTS" style="display: flex;line-height:2em;color:steelblue;">
        <aside style="text-align:left;margin:1em;line-height:2em;color:steelblue;width: 50%;">
            <div><b>AXI_AI</b> | 2018 ~ 2025</div>
            <div style="margin-left:20px; margin-bottom: 20px;"><i>AI ARCHITECT | Hugging Face LLM | Google Research | CoLab | Python</i></div>
            <div><b>NEURAL_NET</b> | 2023 ~ 2024</div>
            <div style="margin-left:20px;"><i>Data VIS | Gemini | Google Gold Developer </i></div>
            <div style="margin-left:20px; margin-bottom: 20px;"><i>TensorFlow | AIWeb Training | Google Cloud</i></div>
        </aside>
        <aside style="text-align:left;margin:1em;line-height:2em;color:steelblue;width: 50%;">
            <div><b>AI_CREATIVE_DEV</b> | ~ 2025</div>
            <div style="margin-left:20px; margin-bottom: 20px;"><i>Audio/Video Gen | YouTube</i></div>
            <div><b>AI_STORYBOOK</b> | 2020 ~ 2025</div>
            <div style="margin-left:20px;margin-bottom: 20px;"><i>Image Gen | Google Storybook</i></div>
            <div><b>AI BANKBOOKS</b> | ~ 2024</div>
            <div style="margin-left:20px; margin-bottom: 20px;"><i>Data VIS | CODE Gen | CoPilot | FIN TECH</i></div>
        </aside>


    </section>`;

        KRYPTOBOOKFrame1.innerHTML = ''; //blank out
        if(txtCard1 && TXTFRAME){TXTFRAME.insertAdjacentElement('afterbegin', txtCard1);}
        if(txtCard2 && TXTFRAME2){TXTFRAME2.insertAdjacentElement('afterbegin', txtCard2);}
        if(txtCard3 && TXTFRAME3){TXTFRAME3.insertAdjacentElement('afterbegin', txtCard3);}
        if(QRCodeFRAME){QRCodeFRAME.innerHTML = QRCodeIMG;}
        if(MeTXTFRAME){MeTXTFRAME.innerHTML = AIProjectTXT;}
        if (pageFrame && TXTFRAME) { pageFrame.insertAdjacentElement('beforeend', TXTFRAME); }
        if (pageFrame) { pageFrame.insertAdjacentElement('beforeend', MeTXTFRAME); }
        if (pageFrame && TXTFRAME2) { pageFrame.insertAdjacentElement('beforeend', TXTFRAME2); }
        if (pageFrame ) { pageFrame.insertAdjacentElement('beforeend', historyFrame); }
        if (pageFrame && TXTFRAME3) { pageFrame.insertAdjacentElement('beforeend', TXTFRAME3); }
        if (pageFrame) { pageFrame.insertAdjacentElement('beforeend', QRCodeFRAME); }
        if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }

    } //end bio page
    function getCOZMOTOONZ(CID){
        let METANET_BOOKZ = { //METANET_CID_to_BOOKZ_lookup - mechanism
            's1.e1':SPAZEBOOK_KRYPTOBITZ1, 
            's1.e2':SPAZEBOOK_KRYPTOBITZ1, 
        }
        if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.innerHTML = ""; } //BLANK data view-.
        let aBOOK = METANET_BOOKZ[CID];
        // showKRYPTOBOOK_All(aBOOK, []) //todo move  above to MAIN SWITCH
        showCOZMOTOONZ_All(SPAZEBOTZ_EP1, []) //todo move  above to MAIN SWITCH
    }

}  //END MASSIVE INITPAGE FN. //todo move above krypto fns?

let SPAZEBOOK_IDX = 0;
let SPAZEBOOK_KRYPTOBITZ1 = [
    {IDX:'1.0',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_TITLEBIT1.png"},
    {IDX:'1.1',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.1_laundry1.png",
     TXT:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_bit1.1_laundry_5x4_TXT.png"},
    {IDX:'1.2',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.2_spazebot1.png",
     TXT:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_bit1.2_spazebot_5x4_TXT.png"},
    {IDX:'1.3',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.3_spazewarz1.png",
     TXT:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_bit1.3_spazewarz_5x4_TXT.png"},
    {IDX:'1.3.1',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.3.1_orbyzoomout2.png",
     TXT:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_bit1.3.1_marzamoon_5x4TXT.png"
    },
    {IDX:'1.4',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.4_chargeit4.png",
     TXT:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_bit1.4_myheart_5x4_TXT.png"},
    {IDX:'1.4.1',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.4.1_recharg3.png"},
    {IDX:'1.5',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.5_spazeboard3.png",
     TXT:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_bit1.5_spazeboard_5x4_TXT.png"},
    {IDX:'1.6',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.6_mombot1.png",
     TXT:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_bit1.6_mombot_5x4_TXT.png"},
    {IDX:'1.7',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_IMGBIT1.7_brokenheart2.png",
     TXT:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_bit1.7_brokenheart_5x4_TXT.png"},
    {IDX:'1.8',
     IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2022_ORIGINZ_BITZ/originz_ENDBIT1.png"},
];
let SPAZEBOOK_KRYPTOBITZ2 = [
    {IDX:'1.0',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_1.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a1.png",
     TXT:`ORBY ORBOT | Rescue on MARZAMOON!

AI_STORYBOOK_001 | 2025

by NetFalcon`
    },
    {IDX:'1.2',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_2.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a2.png",
     TXT:`Orby Orbot,

Your MISSION is to:

SEARCH MARZAMOON,

for COMMANDER ZAWD,

and scan his Spazecraft,

for signs of life.`},
    {IDX:'1.3',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_3.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a3.png",
     TXT:`Orby follows a signal across the galaxy.
     
     "There it is!"

"The lost spaze crash, of Commander Zawd!" 

"In Crater Lake, on MARZAMOON!?!"`},
    {IDX:'1.4',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_4.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a4.png",
     TXT:`Orby peers into the cockpit.

He sees Commander Zawd is frozen!

Orby scans the spazecraft for life.

Then zaps the data across space, in a laser beam.`},
    {IDX:'1.5',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_5.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a5.png",
     TXT:`There is a rumble in the distance.

"A Marzamoon SANDSTORM!"

A gust, blows the SPAZEBOARD,

across the ICE, and into a sand dune.

Orby lunges for his SPAZEBOARD, "I got it!"

     "You're my only way home!"

     But then he sinks in the sand.
     `},

    {IDX:'1.7a',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_6.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a6.png",
     TXT:`From high on the ridge, 

a hero appears, swinging a rope above his head.

"Grab the rope!", he shouts.

The stranger whips the life line down, 

and into Orby's hand.

Just before Orby is buried alive.
`},
    {IDX:'1.7',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_7.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a7.png",
     TXT:`The mysterious hero, pulls Orby up the cliff.

And loads him on a sand sled.

Then drags the big heavy bot,

across many dunes, out of the SANDSTORM.
`},
    {IDX:'1.8',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_8.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a8.png",
     TXT:`Into a canyon they go.

Surrounded by HOODOOS,

carved by wind and sand for eons.

Then Orby follows the racoon into a PURPLE CAVE.
`},
    {IDX:'1.9',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_9.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a9.png",
     TXT:`"My name is MAXA, and I am stranded."

"Are you a RESCUE BOT?", he asks eagerly.

"Yes", I am a SPACE RESCUE BOT.", Orby confirms.

"Fantastic!" says MAXZA.

"Because I need a RESCUE!"`},
    {IDX:'1.10',
     IMG:"./copyrightNetCinematics/MARZAMOON1/orby3_storybook_10.png",
    //  IMG:"./copyrightNetCinematics/KRYPTOBOOKZ/2025_SPAZECRASH_002/orby1_storybook_a10.png",
     TXT:`"Thanks for that life line", replies Orby.

After a pause, and a beep, he confirms, 

"Orby will rescue MAXZA."

As MAXA grabs a cloth, 

"Thank you! I've been stranded so long!"

Orby realizes, "My SPAZEBOARD! It's buried!".

"No worries.", assures MAXZA.   

As he wipes dust from Orby's eye.

"We'll find it when the storm clears."
    
`},

{IDX:'1.11', TXT:`That night, in the dark,
    
    Orby thinks about this strange day.
    
    And how to escape MARZAMOON.
    
    The two will soon be fast friends. 
    
    As the mystery of this SPAZEWAR deepens!
    `},
    {TXT:'THE END!'}
];

let AI_HISTORY = [
    {TTL:"AI_NEURAL_NET",SUB:"3D interactive viz of embed matrix, TensorFlow, Three.js, WebGL, WebAI",
     IMG:"./assets/img/1.png"},
    {IMG:"./assets/img/2.png",SUB:"AI_BRAIN_VIZ: CoPilot, VSCode, VIBE, WebAI"},
    {IMG:"./assets/img/3.png",SUB:"AI: Neural_Net, interactive 3D viz Web APP, movie player."},
    {TTL:"CORPUS VIZ",
     IMG:"./assets/img/4.png",SUB:"D3.js force directed graph of  custom text corpus."},
    {IMG:"./assets/img/5.png",SUB:"Exploring TensorFlow Embeddings, PCA, T-SNE"},
    {IMG:"./assets/img/6.png",SUB:"AI: FINE-TUINING, Trainer Modules"},
    {IMG:"./assets/img/7.png",SUB:"AI_Neural Net Trainer, plays 10,000 EPOCH like movie."},
    {IMG:"./assets/img/8.png",SUB:"AI: SPEECH to TEXT, dictation device, VIBE APP."},
    {TTL:"GOOGLE CLOUD DEV:",
     IMG:"./assets/img/9.png",SUB:"Top developer 2023, Vertex AI, Gemini, CoLab, LLM, TensorFlow"},
    {IMG:"./assets/img/10.png",SUB:""},
    {IMG:"./assets/img/11.png",SUB:""},
    {IMG:"./assets/img/12.png",SUB:"A few examples of many training badges."},
    {TTL: "AI_BANKBOOKZ",IMG:"./assets/img/14.png",SUB:"VIBE coded FIN TECH, CoPilot, Web3, API"},
    {IMG:"./assets/img/15.png",SUB:"AI Gen, many advanced charts, graphs, and data viz."},
    {IMG:"./assets/img/13.png",SUB:"IMPRESSIVE MARGINS!"},
    {IMG:"./assets/img/16.png",SUB:"IMPRESSIVE UI to track and manage finances."},
    {IMG:"./assets/img/17.png",SUB:"AI_MATRIX: THE END!"},
];

function nextPage(){

    //is it loaded or not? 
    let renderedBitz = document.getElementsByClassName("bit-item")
    if(SPAZEBOOK_IDX+1 === SPAZEBOOK_KRYPTOBITZ1.length){return;}
    // let nextIDX = (SPAZEBOOK_IDX+1 === renderedBitz.length) ? ++SPAZEBOOK_IDX: SPAZEBOOK_IDX = renderedBitz.length -1;
    if(SPAZEBOOK_IDX+1 === renderedBitz.length){ //CREATE NEW PAGE-.
        // showKRYPTO_Page(nextIDX,SPAZEBOOK_KRYPTOBITZ1); //ADD PAGE.
        showKRYPTO_Page(++SPAZEBOOK_IDX,SPAZEBOOK_KRYPTOBITZ1); //ADD PAGE.
        setTimeout(function(){
            //SCROLL TGT IDX, RESPONSIVE to SCREEN WIDTH
            let nextIDX = null;
            if(document.body.clientWidth < 600){
                nextIDX = 'Spacer_' + SPAZEBOOK_KRYPTOBITZ1[SPAZEBOOK_IDX].IDX
            } else {
                nextIDX = SPAZEBOOK_KRYPTOBITZ1[SPAZEBOOK_IDX].IDX
            }
            console.log("IDX",nextIDX)
            document.getElementById(nextIDX).scrollIntoView({ behavior: 'smooth' });
        },222)
    } else { //SHOW NEXT PAGE
        let nextIDX = SPAZEBOOK_KRYPTOBITZ1[++SPAZEBOOK_IDX].IDX
        setTimeout(function(){
            //SCROLL TGT IDX, RESPONSIVE to SCREEN WIDTH
            if(document.body.clientWidth < 600){
                nextIDX = 'Spacer_' + SPAZEBOOK_KRYPTOBITZ1[SPAZEBOOK_IDX].IDX
            }           
            if(nextIDX){
                document.getElementById(nextIDX).scrollIntoView({ behavior: 'smooth' });
            }
            // document.querySelector('#'+nextIDX).scrollIntoView({ behavior: 'smooth' });
        },222)
    }
    updatePageState();
}


function lastPage(){ //use current idx to get last item.
    if(SPAZEBOOK_IDX === 0){return;}
    --SPAZEBOOK_IDX;
    updatePageState();
    // if(lastPageIDX <= 0){//grey out LASTBTN
    //     let lastBtn = document.querySelector('#mainUPBTN');
    //     lastBtn.classList.remove("disabledBTN");
    //     return; //no action
    // }
    // let lastPageIDX = SPAZEBOOK_IDX - 1;
    let lastID = SPAZEBOOK_KRYPTOBITZ1[SPAZEBOOK_IDX].IDX;//.replace('.','-');
    if(document.body.clientWidth < 600){ lastID = "Spacer_"+lastID}
    if(SPAZEBOOK_IDX === 0){ lastID = "pageTitle"} // top page, not top item.
    if(lastID){
        setTimeout(function(){
            document.getElementById(lastID).scrollIntoView({ behavior: 'smooth' });
        },800)
    }
}
let EVENT_STARTED = 0;
let EVENT_THE_END = 0;
function updatePageState(){ // grey page btns,
    EVENT_STARTED += 1;
    if(EVENT_STARTED >= 1 && EVENT_THE_END===0){
        let tFrame = document.getElementById('subTitleFrame')
        tFrame.style.marginTop = "20%"; //POSITION APRON below
    } else {
        let tFrame = document.getElementById('subTitleFrame')
        tFrame.style.marginTop = "0";  //REMOVE APRON below      
    }
    //LAST BTN
    if(SPAZEBOOK_IDX <= 0){ //DISABLE UP ARROW-.
        ui.mainUPBTN.classList.add("disabledBTN");
    }else{ //ENABLE UP ARROW.
        ui.mainUPBTN.classList.remove("disabledBTN");
    }

    //DISABLE DOWN ARROW
    if(SPAZEBOOK_IDX + 1 >= SPAZEBOOK_KRYPTOBITZ1.length){
        EVENT_THE_END = 1;
        ui.mainDWNBTN.classList.add("disabledBTN"); //DISABLE AT "THE END"
    }else{
        ui.mainDWNBTN.classList.remove("disabledBTN");
    }

    if(EVENT_THE_END){
        let tFrame = document.getElementById('subTitleFrame')
        tFrame.style.marginTop = "0";   
        ui.mainDWNBTN.classList.remove("glowBTN");
    } else if (SPAZEBOOK_IDX + 1 <= SPAZEBOOK_KRYPTOBITZ1.length){
        ui.mainDWNBTN.classList.remove("glowBTN");
        setTimeout(function(){
            if(!EVENT_THE_END){
                ui.mainDWNBTN.classList.add("glowBTN");
            }else {
                ui.mainDWNBTN.classList.remove("glowBTN"); 
            }
        },8888)
    } else {
        ui.mainDWNBTN.classList.remove("glowBTN");
    }

    //Set PAGE NUMBER
    // ui.mainPageNums.innerHTML = `${SPAZEBOOK_IDX+1} of ${SPAZEBOOK_KRYPTOBITZ1.length}`


}

function showKRYPTO_Page(idx, data){
    viz.createKRYPTO_PAGE(data[idx]); //createMETACARD(nft)
}

/*********************************************************************\
 * SHOW STORYBOOK ALL
 \********************************************************************/
function showSTORYBOOK_All(bitz, metanet1){
    let showbitz = {}
    //Loop all the pages and render free scroll...
    for(let i=0; i<bitz.length;i++){
        viz.createSTORYBOOK_PAGE(bitz[i],i,bitz.length-1); //page
        // if(i===0){ //intro
        //     viz.createSTORYBOOK_INTRO(bitz[i]); //intro
        // } else {
        //     setTimeout(function(){ //DELAY-RENDER-.
        //         if(i==bitz.length-1){ //outro
        //             //SUPER COOL! this is after end page click! TODO: Hide stuff here. ~ : )
        //             viz.createSTORYBOOK_OUTRO(bitz[i]); 
        //         } else{
        //             viz.createSTORYBOOK_PAGE(bitz[i],i,bitz.length-1); //page
        //         }
        //     }, i* 222 ) //DELAY-RENDER exponent
        // }
    }
}

/*********************************************************************\
 * SHOW KRYPTO BOOK ALL
 \********************************************************************/
function showKRYPTOBOOK_All(bitz, metanet1){
    let showbitz = {}
    //Loop all the pages and render free scroll...
    for(let i=0; i<bitz.length;i++){
        if(i===0){ //intro
            viz.createKRYPTO_INTRO(bitz[i]); //intro
        } else {
            setTimeout(function(){ //DELAY-RENDER-.
                if(i==bitz.length-1){ //outro
                    //SUPER COOL! this is after end page click! TODO: Hide stuff here. ~ : )
                    viz.createKRYPTO_OUTRO(bitz[i]); 
                } else{
                    viz.createKRYPTO_PAGE(bitz[i],i,bitz.length-1); //page
                }
            }, i* 222 ) //DELAY-RENDER exponent
        }
    }
}

//COZMOTOONZ 1st EPISODE
let SPAZEBOTZ_EP1 = [
    {IDX:'1.0',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_1_ttl_800_1280.jpg"},
    {IDX:'1.1',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_2_signal_800_1280.jpg",
    },{IDX:'1.2',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_3_digitize_800_1280.jpg",
    },{IDX:'1.3',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_4_blackhole_800_1280.jpg",
    },{IDX:'1.3.1',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_5_nebula_800_1280.jpg",
    },{IDX:'1.4',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_6_erftoo_800_1280.jpg",
    },{IDX:'1.4.1',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_7_botcity_800_1280.jpg",
    },{IDX:'1.5',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_8_botmommahouse_800_1280.jpg",
    },{IDX:'1.6',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_9_laundro_800_1280.jpg",
    },{IDX:'1.7',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_10_spazebot_800_1280.jpg",
    },{IDX:'1.9',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_11_spazewar_800_1280.jpg"
    },{IDX:'1.10',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_12_waaa_800_1280.jpg"
    },{IDX:'1.11',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_13_lastseen_800_1280.jpg"
    },{IDX:'1.12',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_14_wowza_800_1280.jpg"
    },{IDX:'1.13',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_15_marzamoon_800_1280.jpg"
    },{IDX:'1.14',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_16_myheart_800_1280.jpg"
    },{IDX:'1.15',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_17_recharge_800_1280.jpg"
    },{IDX:'1.16',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_18_plugin_800_1280.jpg"
    },{IDX:'1.17',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_19_better_800_1280.jpg"
    },{IDX:'1.18',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_20_spazeboard_800_1280.jpg"
    },{IDX:'1.19',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_21_forme_800_1280.jpg"
    },{IDX:'1.20',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_22_kbye_800_1280.jpg"
    },{IDX:'1.21',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_23_brokenheart_800_1280.jpg"
    },{IDX:'1.22',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_24_houseOUT_800_1280.jpg"
    },{IDX:'1.23',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_25_spazecity_800_1280.jpg"
    },{IDX:'1.24',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_26_amazing_800_1280.jpg"
    },{IDX:'1.25',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_27_theend_800_1280.jpg"
    },{IDX:'1.26',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_28_blooper_800_1280.jpg"
    },{IDX:'1.27',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_29_blooper_800_1280.jpg"
    },{IDX:'1.28',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_30_blooper_800_1280.jpg"
    },{IDX:'1.29',
     IMG:"./copyrightNetCinematics/COZMOTOONZ/COZMOBOTZ/EP1_ORBOT_ORIGINZ/prod_set/EP1_31_blooper_800_1280.jpg"
    }
]



/*********************************************************************\
 * SHOW COZMOTOONZ ALL
 \********************************************************************/
function showCOZMOTOONZ_All(bitz, metanet1){
    let showbitz = {}
    //Loop all the pages and render free scroll...
    for(let i=0; i<bitz.length;i++){
        if(i===0){ //intro
            viz.createCOZMOTOONZ_INTRO(bitz[i]); //intro
        } else {
            setTimeout(function(){ //DELAY-RENDER-.
                if(i==bitz.length-1){ //outro
                    //SUPER COOL! this is after end page click! TODO: Hide stuff here. ~ : )
                    viz.createCOZMOTOONZ_OUTRO(bitz[i]); 
                } else{
                    viz.createCOZMOTOONZ_PAGE(bitz[i],i,bitz.length-1); //page
                }
            }, i* 222 ) //DELAY-RENDER exponent
        }
    }
}

let audio_IDX = 0;
function toggleSound(toggleOn){
    if(toggleOn){
        audio_IDX++;
        if(audio_IDX%2===0){
            sonics.track2.play();
        } else {
            sonics.track1.play();
        }
    } else {
        sonics.track1.pause();
        sonics.track1.currentTime = 0;
        sonics.track2.pause();
        sonics.track2.currentTime = 0;
        // sonics.track1.stop();
        // sonics.track2.stop();
    }
}
function loadGalleryView(){ //
    let galleryITEMS = [
        {sNUM:'S2',eNUM:'EP2',mainTTL:'SPAZE_CRASH on MARZAMOON!',subTTL:'Hoodoo Refugee!?!',
          CID:'s1.e2',
          IMGPATH:'copyrightNetCinematics/MAIN_GALLERY/orby1_storybook_a6.png',
          VIDPATH:'copyrightNetCinematics/KRYPTOVIDZ/EP6.V6.mp4',
          LINKPATH:'',
          INFO:'Made in DREAMS PS5'},
        {sNUM:'S1',eNUM:'EP1',mainTTL:'ORBOT~ORIGINZ',subTTL:'Go find your Dad for me!',
          CID:'s1.e1',
          IMGPATH:'copyrightNetCinematics/MAIN_GALLERY/originz_TITLEBIT1.png',
          VIDPATH:'copyrightNetCinematics/KRYPTOVIDZ/EP2PROD2a.mp4',
          LINKPATH:'',
          INFO:'Made in DREAMS PS5'},
        {sNUM:'S1',eNUM:'EP5',mainTTL:'Lost in East_Dune_Sea',subTTL:'Over Eastern Ridge.',
          CID:'s1.e6',
          IMGPATH:'copyrightNetCinematics/MAIN_GALLERY/img5.png',
          VIDPATH:'copyrightNetCinematics/KRYPTOVIDZ/EP1.V11_remaster2021.mp4',
          LINKPATH:'',
          INFO:'Made in DREAMS PS5'},
        // {sNUM:'S2',eNUM:'EP6',mainTTL:'Lost in EAST~DUNE~SEA',subTTL:'BadBUGZ!?!',
        //   CID:'s1.e1',
        //   IMGPATH:'copyrightNetCinematics/MAIN_GALLERY/img6b.png',
        //   VIDPATH:'copyrightNetCinematics/KRYPTOVIDZ/EP6.V6.mp4',
        //   LINKPATH:'',
        //   INFO:'Made in DREAMS PS5'},
    ];
    
    ui.GalleryDISPLAYFRAME1.innerHTML = '';
    let galleryITEM = {};
    let galleryViewMarkup=`
        <header id="pageTitle" style="padding:0.666em;">
            <section style="margin: 0.222em;">
                <span class="pageTitleTXT" style=" text-shadow: 6px 1px 14px purple;">AI_BOOKZ</span><span class="tradeMark">&trade;</span>
            </section>
        </header>
    `;
    for(let i=0; i<galleryITEMS.length;i++){
        galleryITEM = galleryITEMS[i];
        galleryViewMarkup += `
            <article id='gID${i}' class='galleryItemFrame'>
                <img class='mainGalleryIMG' src= ${galleryITEM.IMGPATH}
                    onclick='galleryPlayClick(event,"${galleryITEM.CID}")' />
                <section class='galleryINFO_Frame' onclick='galleryINFOClick(event)'>
                    <section class='galleryINFO_short'>
                        <span>${galleryITEM.sNUM}&nbsp;|&nbsp;${galleryITEM.mainTTL}</span><br>
                        <span>${galleryITEM.eNUM}&nbsp;|&nbsp;${galleryITEM.subTTL}</span><br>
                    </section>
                    <section class='galleryINFO_long' style='display:none'>
                        <span>${galleryITEM.sNUM}&nbsp;|&nbsp;${galleryITEM.mainTTL}</span><br>
                        <span>${galleryITEM.eNUM}&nbsp;|&nbsp;${galleryITEM.subTTL}</span><br><hr>
                        <span>INFO:${galleryITEM.INFO}</span>
                        <div onclick='galleryPlayClick(event,"${galleryITEM.CID}")' class="hoverGlow" style="border-radius:100%; background:grey; padding: 0.444em;box-shadow:-2px 0px 2px 2px deepskyblue;
                            width:2em;height:2em;margin: 0 auto;margin-right: 0;">
                        <i class="fas fa-play" style="font-size:1em;color:white;border-radius:100%;"></i>
                        </div>
                    </section>
                </section>

                <hr>
            </article>
        `;
    }
    ui.GalleryDISPLAYFRAME1.innerHTML = galleryViewMarkup;
}

function initSonics(){
    // sonics.spaceWind3= new BABYLON.Sound("spaceWind3","./copyrightnetcinematics/sonicz/nxSpaceWind3.mp3", nx.scene, null, { loop: false, autoplay: false, volume:0.44 });
    // sonics.track1 = new Audio("./copyrightNetCinematics/SONICS/track1.mp3");
    sonics.track1 = new Audio("./copyrightNetCinematics/SONICS/SYNTHFUZZ_4443_3.mp3");
    sonics.track2 = new Audio("./copyrightNetCinematics/SONICS/track2.mp3");
}

//IMPORTANT: INITIALIZE KRYPTOBOOKZ
let kbz = {
    viz:viz,
    sonics,sonics,
    MainVw:MainVw,
    initPage:initPage,
    initSonics:initSonics,
    loadGalleryView:loadGalleryView,
    nextPage:nextPage,
    lastPage:lastPage,
    toggleSound:toggleSound
}

export { kbz };


