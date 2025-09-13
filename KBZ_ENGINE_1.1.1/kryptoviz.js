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

/*********************************************************\
 * CREATE-COZMOTOONZ-PAGE - 
 * //GENERIC CARD-TEMPLATE RENDERER (minimal behaviors)
 \********************************************************/
 function createCOZMOTOONZ_PAGE(bitz, pgNum, pgTotal){  
    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    // pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    console.log("render: ",bitz.IDX)

    let pageSpacer = document.createElement('section');
    pageSpacer.style.backgroundColor = 'black';
    pageSpacer.style.borderRadius = "10px";
    // pageSpacer.style.padding = "0.111em";
    pageSpacer.style.margin = "0.444em";
    pageSpacer.style.height = "4.444em";
    pageSpacer.style.fontSize = "8px";
    pageSpacer.style.paddingTop = "1.44em"
    pageSpacer.style.paddingRight = "1em"
    // pageSpacer.style.paddingTop = "auto"
    // pageSpacer.style.paddingBottom = "auto"
    pageSpacer.style.color = '#071d30';
    pageSpacer.style.textAlign = 'right';
    if(pgNum && pgTotal) { pageSpacer.innerText = `${pgNum}.${pgTotal}`; }                    //pageNUM
    // pageSpacer.style.marginBottom = "8.888%";
    pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    pageSpacer.classList.add('bit-spacer');
    pageSpacer.id = "Spacer_" + bitz.IDX;
    
    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    if(document.body.clientWidth > 888){ IMGBIT.style.borderWidth = "0px";  } //RESPONSIVE
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    IMGBIT.style.overflow = "hidden";     //CROP
    IMGBIT.style.marginBottom = "0em";   //CROP
    IMGBIT.classList.add('bluesteel-border-frame');

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.marginBottom = "-6.666em"     //CROP
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        imgCard1.style.width = "100%"; //"136%";              //WIDTH
        imgCard1.addEventListener("click", ()=> {
            imgCard1.showDetails = (imgCard1.showDetails) ? 0 : 1;
            if(imgCard1.showDetails){
                imgCard1.style.marginBottom = "2.222em"
            }else{
                imgCard1.style.marginBottom = "-6.666em"
            }
        })
    } 

    var TXTBIT = 0;
    if(bitz.TXT){
        TXTBIT = document.createElement('article');
        TXTBIT.style.backgroundColor = 'black';
        // TXTBIT.style.backgroundColor = getRandoColor();
        TXTBIT.style.boxShadow = "0px 0px 20px 1px blue"
        TXTBIT.style.border = "1px solid purple"
        TXTBIT.style.borderRadius = "13px"
        TXTBIT.style.padding = "0.888em"
        TXTBIT.style.margin = "0.88em auto"
        TXTBIT.style.maxWidth = "42em"
        TXTBIT.style.cursor = "pointer"
        TXTBIT.style.overflow = "hidden";     //CROP
        TXTBIT.style.marginBottom = "1em";   //CROP
        TXTBIT.style.marginTop = "-6em";    //OVERLAP
        TXTBIT.style.borderTop = "none";    //OVERLAP
    } else { //no btz.TXT
        // pageFrame.style.marginTop="6.666em";  //no txt padding
        // pageFrame.style.marginBottom="6.666em"; //no txt padding
    }

    var txtCard2 = 0;
    if(bitz.TXT){
        txtCard2 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        txtCard2.src = bitz.TXT; //large 600 size
        txtCard2.style.width = "100%"
        txtCard2.style.maxWidth = "32em"
        // txtCard2.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        txtCard2.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
        txtCard2.style.borderRadius = "18px"
        // txtCard2.style.marginBottom = "-6em"
        txtCard2.style.marginBottom = "-5.666em"
        txtCard2.style.marginTop = "3em"
        txtCard2.addEventListener("click", ()=> {
            txtCard2.showDetails = (txtCard2.showDetails) ? 0 : 1;
            if(txtCard2.showDetails){
                txtCard2.style.marginBottom = "0em"
            }else{
                txtCard2.style.marginBottom = "-5.666em"
            }
        })
    } 
        
    // if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO PAGE 
/*********************************************************\
 * Render COZMOTOONZ INTRO.
 \********************************************************/
 function createCOZMOTOONZ_INTRO(bitz){  

//TODO Page Title???
{/* <header  style="padding:0.666em;">
    <section style="margin: 0.222em;">
        <span class="pageTitleTXT" style=" text-shadow: 6px 1px 14px purple;">KRYPTOBOOKZ</span><span class="tradeMark">&trade;</span>
    </section>
</header> */}

    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    // console.log("render: ",bitz.IDX)
    // let pageSpacer = document.createElement('section');
    // pageSpacer.style.backgroundColor = 'black';
    // pageSpacer.style.borderRadius = "10px";
    // pageSpacer.style.padding = "0.111em";
    // pageSpacer.style.margin = "0.444em";
    // pageSpacer.style.height = "4.444em";
    // // pageSpacer.style.marginBottom = "8.888%";
    // pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    // pageSpacer.classList.add('bit-spacer');

    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    // IMGBIT.style.overflow = "hidden";     //CROP
    // IMGBIT.style.marginBottom = "0em";   //CROP

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        // imgCard1.style.marginBottom = "-6.666em" //CROP
        imgCard1.addEventListener("click", ()=> {
            // imgCard1.showDetails = (imgCard1.showDetails) ? 0 : 1;
            // if(imgCard1.showDetails){
            //     imgCard1.style.marginBottom = "2.222em"
            // }else{
            //     imgCard1.style.marginBottom = "-6.666em"
            // }
        })
    } 

    //TODO Logic to add remove PAGE_SPACER, title page somehow...   
    // if (KRYPTOBOOKFrame1 && bitz.IDX!="1.0") { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    // if(OSBTN && IMGBIT){IMGBIT.insertAdjacentElement('beforeend', OSBTN);}
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    // if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    // if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO INTRO
/*********************************************************\
 * Render COZMOTOONZ INTRO.
 \********************************************************/
 function createCOZMOTOONZ_OUTRO(bitz){  
    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    // console.log("render: ",bitz.IDX)
    let pageSpacer = document.createElement('section');
    pageSpacer.style.backgroundColor = 'black';
    pageSpacer.style.borderRadius = "10px";
    pageSpacer.style.padding = "0.111em";
    pageSpacer.style.margin = "0.444em";
    pageSpacer.style.height = "4.444em";
    // pageSpacer.style.marginBottom = "8.888%";
    pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    pageSpacer.classList.add('bit-spacer');

    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    // IMGBIT.style.overflow = "hidden";     //CROP
    // IMGBIT.style.marginBottom = "0em";   //CROP

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        // imgCard1.style.marginBottom = "-6.666em" //CROP
        imgCard1.addEventListener("click", ()=> {

        })
    } 

    //TODO Logic to add remove PAGE_SPACER, title page somehow...   
    // if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    // if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    // if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO OUTRO

// import { viz } from "./KBZ_ENGINE_1.1.1/kryptoviz.js";
/*********************************************************\
 * CREATE-STORYBOOK-PAGE - 
 * //GENERIC CARD-TEMPLATE RENDERER (minimal behaviors)
 \********************************************************/
function createSTORYBOOK_PAGE(bitz, pgNum, pgTotal){  
    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    // pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    // pageFrame.classList.add('storybook-page');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    // console.log("render: ",bitz.IDX)

    // let pageSpacer = document.createElement('section');
    // pageSpacer.style.backgroundColor = 'black';
    // pageSpacer.style.borderRadius = "10px";
    // // pageSpacer.style.padding = "0.111em";
    // pageSpacer.style.margin = "0.444em";
    // pageSpacer.style.height = "4.444em";
    // pageSpacer.style.fontSize = "8px";
    // pageSpacer.style.paddingTop = "1.44em"
    // pageSpacer.style.paddingRight = "1em"
    // // pageSpacer.style.paddingTop = "auto"
    // // pageSpacer.style.paddingBottom = "auto"
    // pageSpacer.style.color = '#071d30';
    // pageSpacer.style.textAlign = 'right';
    // if(pgNum && pgTotal) { pageSpacer.innerText = `${pgNum}.${pgTotal}`; }                    //pageNUM
    // // pageSpacer.style.marginBottom = "8.888%";
    // pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    // pageSpacer.classList.add('bit-spacer');
    // pageSpacer.id = "Spacer_" + bitz.IDX;
    
    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    if(document.body.clientWidth > 888){ IMGBIT.style.borderWidth = "0px";  } //RESPONSIVE
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    IMGBIT.style.overflow = "hidden";     //CROP
    IMGBIT.style.marginBottom = "1em";   //CROP
    IMGBIT.classList.add('bluesteel-border-frame');

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        // imgCard1.style.marginBottom = "-6.666em"     //CROP
        // imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        imgCard1.style.width = "100%";//"136%";              //WIDTH
        imgCard1.addEventListener("click", ()=> {
            // imgCard1.showDetails = (imgCard1.showDetails) ? 0 : 1;
            // if(imgCard1.showDetails){
            //     imgCard1.style.marginBottom = "2.222em"
            // }else{
            //     imgCard1.style.marginBottom = "-6.666em"
            // }
        })
    } 

    var TXTFRAME = 0;
    if(bitz.TXT){
        TXTFRAME = document.createElement('article');
        TXTFRAME.style.backgroundColor = 'black';
        // TXTFRAME.style.backgroundColor = getRandoColor();
        TXTFRAME.style.boxShadow = "0px 0px 20px 1px blue"
        TXTFRAME.style.border = "1px solid purple"
        TXTFRAME.style.borderRadius = "13px"
        TXTFRAME.style.padding = "0.888em"
        TXTFRAME.style.margin = "0.88em auto"
        TXTFRAME.style.maxWidth = "42em"
        TXTFRAME.style.cursor = "pointer"
        TXTFRAME.style.overflow = "hidden";    
        TXTFRAME.style.marginBottom = "1em";   
        // TXTFRAME.style.marginTop = "1em";    //OVERLAP
        TXTFRAME.style.borderTop = "none";    //OVERLAP
    }
    //  else { //no btz.TXT
        // pageFrame.style.marginTop="6.666em";  //no txt padding
        // pageFrame.style.marginBottom="6.666em"; //no txt padding
    // }

    var txtCard2 = 0;
    if(bitz.TXT){
        txtCard2 = document.createElement('footer'); //IMG  //OTHER IMAGE TYPES HERE
        txtCard2.innerText = bitz.TXT; //large 600 size
        txtCard2.style.width = "100%";
        // txtCard2.style.height = "4em";
        txtCard2.style.maxWidth = "32em"
        txtCard2.style.padding = "2em"
        txtCard2.style.margin = "0 auto"
        // txtCard2.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        txtCard2.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
        txtCard2.style.borderRadius = "18px"
        // txtCard2.style.marginBottom = "-6em"
        // txtCard2.style.marginBottom = "-5.666em"
        // txtCard2.style.marginTop = "1em"
        txtCard2.addEventListener("click", ()=> {
            // txtCard2.showDetails = (txtCard2.showDetails) ? 0 : 1;
            // if(txtCard2.showDetails){
            //     txtCard2.style.marginBottom = "0em"
            // }else{
            //     txtCard2.style.marginBottom = "-5.666em"
            // }
        })
    } 
        
    // if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    if(txtCard2 && TXTFRAME){TXTFRAME.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    if (pageFrame && TXTFRAME) { pageFrame.insertAdjacentElement('beforeend', TXTFRAME); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE STORYBOOK PAGE 



/*********************************************************\
 * CREATE-KRYPTO-PAGE - 
 * //GENERIC CARD-TEMPLATE RENDERER (minimal behaviors)
 \********************************************************/
function createKRYPTO_PAGE(bitz, pgNum, pgTotal){  
    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    console.log("render: ",bitz.IDX)

    let pageSpacer = document.createElement('section');
    pageSpacer.style.backgroundColor = 'black';
    pageSpacer.style.borderRadius = "10px";
    // pageSpacer.style.padding = "0.111em";
    pageSpacer.style.margin = "0.444em";
    pageSpacer.style.height = "4.444em";
    pageSpacer.style.fontSize = "8px";
    pageSpacer.style.paddingTop = "1.44em"
    pageSpacer.style.paddingRight = "1em"
    // pageSpacer.style.paddingTop = "auto"
    // pageSpacer.style.paddingBottom = "auto"
    pageSpacer.style.color = '#071d30';
    pageSpacer.style.textAlign = 'right';
    if(pgNum && pgTotal) { pageSpacer.innerText = `${pgNum}.${pgTotal}`; }                    //pageNUM
    // pageSpacer.style.marginBottom = "8.888%";
    pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    pageSpacer.classList.add('bit-spacer');
    pageSpacer.id = "Spacer_" + bitz.IDX;
    
    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    if(document.body.clientWidth > 888){ IMGBIT.style.borderWidth = "0px";  } //RESPONSIVE
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    IMGBIT.style.overflow = "hidden";     //CROP
    IMGBIT.style.marginBottom = "0em";   //CROP
    IMGBIT.classList.add('bluesteel-border-frame');

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.marginBottom = "-6.666em"     //CROP
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        imgCard1.style.width = "100%";//"136%";              //WIDTH
        imgCard1.addEventListener("click", ()=> {
            imgCard1.showDetails = (imgCard1.showDetails) ? 0 : 1;
            if(imgCard1.showDetails){
                imgCard1.style.marginBottom = "2.222em"
            }else{
                imgCard1.style.marginBottom = "-6.666em"
            }
        })
    } 

    var TXTBIT = 0;
    if(bitz.TXT){
        TXTBIT = document.createElement('article');
        TXTBIT.style.backgroundColor = 'black';
        // TXTBIT.style.backgroundColor = getRandoColor();
        TXTBIT.style.boxShadow = "0px 0px 20px 1px blue"
        TXTBIT.style.border = "1px solid purple"
        TXTBIT.style.borderRadius = "13px"
        TXTBIT.style.padding = "0.888em"
        TXTBIT.style.margin = "0.88em auto"
        TXTBIT.style.maxWidth = "42em"
        TXTBIT.style.cursor = "pointer"
        TXTBIT.style.overflow = "hidden";     //CROP
        TXTBIT.style.marginBottom = "1em";   //CROP
        TXTBIT.style.marginTop = "-6em";    //OVERLAP
        TXTBIT.style.borderTop = "none";    //OVERLAP
    } else { //no btz.TXT
        pageFrame.style.marginTop="6.666em";  //no txt padding
        pageFrame.style.marginBottom="6.666em"; //no txt padding
    }

    var txtCard2 = 0;
    if(bitz.TXT){
        txtCard2 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        txtCard2.src = bitz.TXT; //large 600 size
        txtCard2.style.width = "100%"
        txtCard2.style.maxWidth = "32em"
        // txtCard2.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        txtCard2.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
        txtCard2.style.borderRadius = "18px"
        // txtCard2.style.marginBottom = "-6em"
        txtCard2.style.marginBottom = "-5.666em"
        txtCard2.style.marginTop = "3em"
        txtCard2.addEventListener("click", ()=> {
            txtCard2.showDetails = (txtCard2.showDetails) ? 0 : 1;
            if(txtCard2.showDetails){
                txtCard2.style.marginBottom = "0em"
            }else{
                txtCard2.style.marginBottom = "-5.666em"
            }
        })
    } 
        
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO PAGE 
/*********************************************************\
 * Render KRYPTO INTRO.
 \********************************************************/
 function createKRYPTO_INTRO(bitz){  

//TODO Page Title???
{/* <header  style="padding:0.666em;">
    <section style="margin: 0.222em;">
        <span class="pageTitleTXT" style=" text-shadow: 6px 1px 14px purple;">KRYPTOBOOKZ</span><span class="tradeMark">&trade;</span>
    </section>
</header> */}

    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    // console.log("render: ",bitz.IDX)
    // let pageSpacer = document.createElement('section');
    // pageSpacer.style.backgroundColor = 'black';
    // pageSpacer.style.borderRadius = "10px";
    // pageSpacer.style.padding = "0.111em";
    // pageSpacer.style.margin = "0.444em";
    // pageSpacer.style.height = "4.444em";
    // // pageSpacer.style.marginBottom = "8.888%";
    // pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    // pageSpacer.classList.add('bit-spacer');

    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    // IMGBIT.style.overflow = "hidden";     //CROP
    // IMGBIT.style.marginBottom = "0em";   //CROP

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        // imgCard1.style.marginBottom = "-6.666em" //CROP
        imgCard1.addEventListener("click", ()=> {
            // imgCard1.showDetails = (imgCard1.showDetails) ? 0 : 1;
            // if(imgCard1.showDetails){
            //     imgCard1.style.marginBottom = "2.222em"
            // }else{
            //     imgCard1.style.marginBottom = "-6.666em"
            // }
        })
    } 

    //OPENSEA-LINK
    // let OSBTN = document.createElement('button');
    // OSBTN.innerHTML = `<span>${getOpenSeaIconLink(OSBTN, 'https://opensea.io/accounts/kryptospaze')}</span>`

    // var TXTBIT = 0;
    // if(bitz.TXT){
    //     TXTBIT = document.createElement('article');
    //     TXTBIT.style.backgroundColor = 'black';
    //     // TXTBIT.style.backgroundColor = getRandoColor();
    //     TXTBIT.style.boxShadow = "0px 0px 20px 1px blue"
    //     TXTBIT.style.border = "1px solid purple"
    //     TXTBIT.style.borderRadius = "13px"
    //     TXTBIT.style.padding = "0.888em"
    //     TXTBIT.style.margin = "0.88em auto"
    //     TXTBIT.style.maxWidth = "42em"
    //     TXTBIT.style.cursor = "pointer"
    //     TXTBIT.style.overflow = "hidden";     //CROP
    //     TXTBIT.style.marginBottom = "1em";   //CROP
    //     TXTBIT.style.marginTop = "-6em";    //OVERLAP
    //     TXTBIT.style.borderTop = "none";    //OVERLAP
    // } else { //no btz.TXT
        // pageFrame.style.marginTop="6.666em";  //no txt padding
        // pageFrame.style.marginBottom="6.666em"; //no txt padding
    // }

    // var txtCard2 = 0;
    // if(bitz.TXT){
    //     txtCard2 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
    //     txtCard2.src = bitz.TXT; //large 600 size
    //     txtCard2.style.width = "100%"
    //     txtCard2.style.maxWidth = "32em"
    //     // txtCard2.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
    //     txtCard2.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
    //     txtCard2.style.borderRadius = "18px"
    //     // txtCard2.style.marginBottom = "-6em"
    //     txtCard2.style.marginBottom = "-5.666em"
    //     txtCard2.style.marginTop = "3em"
    //     txtCard2.addEventListener("click", ()=> {
    //         txtCard2.showDetails = (txtCard2.showDetails) ? 0 : 1;
    //         if(txtCard2.showDetails){
    //             txtCard2.style.marginBottom = "0em"
    //         }else{
    //             txtCard2.style.marginBottom = "-5.666em"
    //         }
    //     })
    // } 
    //TODO Logic to add remove PAGE_SPACER, title page somehow...   
    // if (KRYPTOBOOKFrame1 && bitz.IDX!="1.0") { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    // if(OSBTN && IMGBIT){IMGBIT.insertAdjacentElement('beforeend', OSBTN);}
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    // if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    // if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO INTRO
/*********************************************************\
 * Render KRYPTO INTRO.
 \********************************************************/
 function createKRYPTO_OUTRO(bitz){  
    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    // console.log("render: ",bitz.IDX)
    let pageSpacer = document.createElement('section');
    pageSpacer.style.backgroundColor = 'black';
    pageSpacer.style.borderRadius = "10px";
    pageSpacer.style.padding = "0.111em";
    pageSpacer.style.margin = "0.444em";
    pageSpacer.style.height = "4.444em";
    // pageSpacer.style.marginBottom = "8.888%";
    pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    pageSpacer.classList.add('bit-spacer');

    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    // IMGBIT.style.overflow = "hidden";     //CROP
    // IMGBIT.style.marginBottom = "0em";   //CROP

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        // imgCard1.style.marginBottom = "-6.666em" //CROP
        imgCard1.addEventListener("click", ()=> {

        })
    } 

    //TODO Logic to add remove PAGE_SPACER, title page somehow...   
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    // if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    // if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO OUTRO

// BR.innerHTML = `<span>${getOpenSeaIconLink(BR, 'https://opensea.io/accounts/kryptospaze')}</span>`
// function getOpenSeaIconLink(node, url){
//     node.style.marginTop = "-1em";
//     return node.innerHTML=`<a href="${url}" target="_blank"><img src="../images/osblue.png" class="hoverGlow" style="width:2em;border-radius:100%;"/></a>`          
// }

function getRandoColor(){
    const h = Math.floor(Math.random() * 344); 
    const s = Math.floor(Math.random() * 88); 
    const l = Math.floor(Math.random() * 88); 
    return `hsl(${h}deg, ${s}%, ${l}%)`;
}

//todo change to TITLE
function create_Dynamic_TTL(ttltxt, displayFrame){
    let dynamicTitleMarkup=`
        <header>
            <section style="margin: 0.222em;">
                <span class="pageTitleTXT" style=" text-shadow: 6px 1px 14px purple;">${ttltxt}</span><span class="tradeMark">&trade;</span>
            </section>
        </header>
    `;
    displayFrame.innerHTML = dynamicTitleMarkup;
}
function create_UTOOB_VIEW(){ // show ALL YOUTUBE VIDS
    let UTOOBZ_META = [ 
        { title: 'Virtual Wurldz!',
            IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/SpazeTitle2_ORBY_SQ_1.png',
            UTOOBZ: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZXFtQ73RNBQ" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo 0',
            SHARELINK:'1.0.0',
            TXT_ML:`
               <strong>PROMO MUSIC VIDEO:</strong> <br><br>
               Virtual~Wurldz from the metaverse for you! <br>
               Video Animations, EDM MUSIC, and SciFi STORY...<br>
               <i>by digital artist spazefalcon.</i>
            `,
            id:'0.0.0'
        },
        { title: 'Into EAST~DUNE~SEA',
            IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/img6.png',
            UTOOBZ: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/M1-hZgIlAkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo 0',
            TXT_ML:' ...',
            id:'0.0.7'
        },
        { title: 'OrbyOrbot ORIGIN~STORY',
            IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/originz_TITLEBIT1.png',
            IMGLINKPATH:'s1.e1',
            // UTOOBZ: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/i9MpeCOyIH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo 0',
            TXT_ML:' ...',
            id:'0.0.1'
        },
        { title: 'MISSION to MARZAMOON',
            IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/img1.png',
            UTOOBZ: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/i9MpeCOyIH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo 0',
            TXT_ML:' ...',
            id:'0.0.3'
        },
        { title: 'NORTH~CRATER~LAKE',
            IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/img2.png',
            UTOOBZ: `<iframe width="100%" src="https://www.youtube.com/embed/l4pfJpzGE4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo 0',
            TXT_ML:' ...',
            id:'0.0.4'
        },
        { title: 'SPAZE~CRASH!',
            IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/img3.png',
            UTOOBZ: `<iframe width="100%" src="https://www.youtube.com/embed/kAZATuX1w-E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo 0',
            TXT_ML:' ...',
            id:'0.0.5'
        },
        { title: 'SANDSTORM on MARZAMOON',
            IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/img4.png',
            UTOOBZ: `<iframe width="100%" src="https://www.youtube.com/embed/PxQqCfMEQKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo 0',
            TXT_ML:' ...',
            id:'0.0.5'
        },
        { title: 'Over EASTERN~RIDGE',
            IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/img5.png',
            UTOOBZ: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/i9MpeCOyIH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo 0',
            TXT_ML:' ...',
            id:'0.0.6'
        },
    ]
    
    let display_ITEM = null;
    for(let i=0; i< UTOOBZ_META.length;i++){
        display_ITEM = UTOOBZ_META[i];
        create_META_VIEW(display_ITEM)
    }
    kbz.MainVw.item_idx = null; //reset menu to work

}
function create_ITEM_VIEW(itemIDX){ // show individual ITEM.
    console.log('Loading ITEM:',itemIDX)
    // VIDPATH: './copyrightNetCinematics/KRYPTOVIDZ/COZMO_PROMO_3b.mp4',
    // IMGPATH: './copyrightNetCinematics/KRYPTOVIDZ/SpazeTitle1.png',
    // VIDPATH: 'https://youtu.be/ZXFtQ73RNBQ',
    let item_METADATA = { 
    '1.0.0':{ title: 'Virtual Wurldz!',
    IMGPATH:'./copyrightNetCinematics/KRYPTOVIDZ/SpazeTitle2_ORBY_SQ_1.png',
            UTOOBZ: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZXFtQ73RNBQ" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         `,
            sNUM:0, eNUM:0,mainTTL:'COZMOSPAZE!',subTTL:'Virtual~Wurldz...',
            INFO:'EDM MUSIC VIDEO | COZMOZPAZE | promo',
            id:'PROMO',TXT_ML:'Made in Dreams PS5'
        }
    }
    let display_ITEM = item_METADATA['1.0.0'];
    create_META_VIEW(display_ITEM)
    kbz.MainVw.item_idx = null; //reset menu to work

} //end create item view
function create_META_VIEW(ViewData){ //BUILD METACARD DISPLAY - for MANY types of display.
        let metaFrame = document.createElement('section');
        metaFrame.style.backgroundColor = 'black';
        metaFrame.style.borderRadius = "10px";
        metaFrame.style.padding = "0.111em";
        metaFrame.style.margin = "0.444em";
        let metaCard = document.createElement('article');
        metaCard.style.backgroundColor = "rgb(8, 5, 11)";
        // metaCard.style.backgroundColor = viz.getRandoColor();
        metaCard.style.border = "1px solid steelblue"
        metaCard.style.borderRadius = "13.333px"
        metaCard.style.padding = "0.888em"
        metaCard.style.margin = "0.88em auto"
        metaCard.style.maxWidth = "80%"
        //CARD IMG
        let metaCardIMG = document.createElement('img'); //IMG
        metaCardIMG.style.padding = "0.888em"
        metaCardIMG.style.width = "88.8%"
        if(ViewData.UTOOBZ){ //VID
            metaCardIMG.style.width = "44%"
        }
        metaCardIMG.style.maxWidth = "33em"
        metaCardIMG.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
        metaCardIMG.style.borderRadius = "32px"
        metaCardIMG.style.marginBottom = "1em"
        metaCardIMG.style.cursor = 'pointer'
        metaCardIMG.style.zIndex = "9"
        metaCardIMG.src = ViewData.IMGPATH; 
        metaCardIMG.addEventListener("click", ()=> {
            stopAllVideos();
            if( ViewData.IMGLINKPATH ){
                // let CID = 's1.e1' //todo make dynamic
                loadBOOKDisplay(ViewData.IMGLINKPATH);
                return;
            }
            if(ViewData.UTOOBZ){ //VID
                if(metaCardIMG.style.width === "100%"){
                    metaCardIMG.style.width = "44%"
                }else {
                    metaCardIMG.style.width = "100%"
                }
            } else {
                metaCardVIDBTN.style.display = 'flex';//'none';
                metaCardIMG.style.cssText = 'height:auto; width:auto; max-width:22em;cursor:pointer;';//'height:12em;width:auto'
                metaCardVID.style.display = 'none';
            }    
        })



        let metaCardVID = null;
        let metaCardVIDBTN = null;
        if(ViewData.VIDPATH){ //SOUND-FLAG, render AUDIO-DISPLAY
            metaCardVID = document.createElement('video'); //MP3
            //todo opensea seems broken
            metaCardVID.src = ViewData.VIDPATH; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            metaCardVID.style.padding = "0.888em"
            metaCardVID.style.width = "100%"
            metaCardVID.style.maxWidth = "33em"
            metaCardVID.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
            metaCardVID.style.borderRadius = "6.666px"
            metaCardVID.style.marginBottom = "1em"
            metaCardVID.controls = true;
            metaCardVID.style.display = 'none';
            metaCardVIDBTN = document.createElement('section')
            metaCardVIDBTN.innerHTML = `<div class="hoverGlow" style="border-radius:100%; background:grey; padding: 0.444em;box-shadow:-2px 0px 2px 2px deepskyblue;">
                <i class="fas fa-play" style="font-size:1em;color:white;border-radius:100%;"></i>
                </div>`
            metaCardVIDBTN.style.display = 'flex';
            metaCardVIDBTN.style.marginTop = "-2.222em";
            metaCardVIDBTN.style.marginLeft = "1em";
            metaCardVIDBTN.style.borderRadius = "100%";
            metaCardVIDBTN.addEventListener("click", ()=> {
                stopAllVideos();
                metaCardVIDBTN.style.display = 'none';
                metaCardIMG.style.cssText = 'height:12em;width:auto;cursor:pointer;'
                metaCardVID.style.display = '';
                metaCardVID.play();
            })
        }
        let metaUTubeVID = null;
        if(ViewData.UTOOBZ){ //-FLAG,-DISPLAY
            metaUTubeVID = document.createElement('aside'); //MP3
            metaUTubeVID.innerHTML = `${ViewData.UTOOBZ}`
            metaUTubeVID.style.width = "100%"
        }
        let metaCardSND = null;
        if(ViewData.SONICPATH){ //SOUND-FLAG, render AUDIO-DISPLAY
            metaCardSND = document.createElement('video'); //MP3
            metaCardSND.src = ViewData.SONICPATH; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            metaCardSND.style.padding = "0.888em"
            metaCardSND.style.width = "100%"
            metaCardSND.style.maxWidth = "28em"
            metaCardSND.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
            metaCardSND.style.borderRadius = "6.666px"
            metaCardSND.style.marginBottom = "1em"
            metaCardSND.style.maxHeight = "55px"
            metaCardSND.controls = true;
        }

        //MAINTITLE
        let metaCardSCROLLTXTFRAME = document.createElement('section');
        // metaCardSCROLLTXTFRAME.classList.add('scrollbar')
        metaCardSCROLLTXTFRAME.classList.add('blueScroll')
        // metaCardSCROLLTXTFRAME.id = 'blueScroll';
        let metaCardMainTitle = document.createElement('section'); //Title 1
        metaCardMainTitle.style.height = "2.5em"
        metaCardMainTitle.style.padding = "0.444em"
        metaCardMainTitle.style.borderRadius = "13px"
        metaCardMainTitle.style.cursor = "pointer"
        metaCardMainTitle.style.overflowY = "hidden"
        // metaCardMainTitle.style.marginTop = "3em"
        metaCardMainTitle.style.border = "1px solid steelblue"
        if(ViewData.title){ //TODO this should all be TITLE not ID.
            // metaCardMainTitle.innerText = ViewData.title; //NAME
            metaCardSCROLLTXTFRAME.innerHTML = `
                    <article class="txtFrameOverflow">
                        <span>${ViewData.title}</span>
                        <hr>
                        <h5>${ViewData.INFO}</h5>
                        <p>${ViewData.TXT_ML}</p>    
                                       
                    </article>
            `; //NAME
            metaCardMainTitle.insertAdjacentElement('beforeend', metaCardSCROLLTXTFRAME);
            // metaCardMainTitle.innerHTML = metaCardSCROLLTXTFRAME;
        } else {
            metaCardMainTitle.innerText = ViewData.id; //NAME
        }
        metaCardMainTitle.style.backgroundColor = "#05112a"
        metaCardMainTitle.addEventListener("click", (e)=> {
            if(metaCardMainTitle.style.height === "20em"){ //minimize
                metaCardMainTitle.style.height = '2.5em';
                metaCardSCROLLTXTFRAME.classList.remove('txtFrameScroll')
                // metaCardMainTitle.style.overflowY = 'hidden';

            }else {
                metaCardMainTitle.style.height = '20em';
                metaCardSCROLLTXTFRAME.classList.add('txtFrameScroll')
                // metaCardMainTitle.style.overflowY = 'auto';
            }
        })



        //SUBTITLE
        let metaCardSubTitle = document.createElement('section'); //Title 2
        metaCardSubTitle.style.padding = "0.111em"
        metaCardSubTitle.style.textShadow = "1px 2px 1px black";
        metaCardSubTitle.style.display = "flex";
        metaCardSubTitle.style.justifyContent = "space-between";
        //THREE-PART-SUB-TITLE
        let BR = document.createElement('aside'); //sub
        let DWN = document.createElement('aside'); //sub
        let BL = document.createElement('aside'); //sub
        BR.innerHTML = "<span>\\</span>"
        // BR.innerHTML = `<span>${getIconLink(BR, 'https://opensea.io/accounts/kryptospaze')}</span>`
        DWN.innerHTML = "<span>~</span>"
        BL.innerHTML = "<span>/</span>"

        //SUPERTITLE
        let metaCardSuperTitle = document.createElement('section'); //Title 2
        metaCardSuperTitle.style.padding = "0.111em"
        metaCardSuperTitle.style.textShadow = "1px 2px 1px black";
        metaCardSuperTitle.style.display = "flex";
        metaCardSuperTitle.style.justifyContent = "space-between";
        metaCardSuperTitle.style.marginTop =  "-0.444em";
        metaCardSuperTitle.style.paddingBottom = "0.888em";
        //9GRID - TITLE - THREE-PART-SUPER-TITLE
        let TR = document.createElement('aside'); //super
        let UP = document.createElement('aside'); //super
        let TL = document.createElement('aside'); //super
        TR.innerHTML = "<span>\\</span>"
        UP.innerHTML = `<span>${ViewData.id}</span>`
        TL.innerHTML = (ViewData.SHARELINK)?`<i class="fa fa-share grid9BTN" onclick="clickGrid9BTN('share','${ViewData.SHARELINK}')"></i>`:"<span>/</span>";

        //INSERT INTO DOM-.
        if (metaCard && metaCardVID) { metaCard.insertAdjacentElement('afterbegin', metaCardVID); }
        if (metaCard && metaCardSND) { metaCard.insertAdjacentElement('afterbegin', metaCardSND); }
        if (metaCard && metaCardVIDBTN) { metaCard.insertAdjacentElement('afterbegin', metaCardVIDBTN); }
        if (metaCard && metaUTubeVID) { metaCard.insertAdjacentElement('afterbegin', metaUTubeVID); }
        if (metaCard && metaCardIMG) { metaCard.insertAdjacentElement('afterbegin', metaCardIMG); }
        if (metaCardSuperTitle) { metaCardSuperTitle.insertAdjacentElement('beforeend',TR); }
        if (metaCardSuperTitle) { metaCardSuperTitle.insertAdjacentElement('beforeend',UP); }
        if (metaCardSuperTitle) { metaCardSuperTitle.insertAdjacentElement('beforeend',TL); }
        if (metaCard) { metaCard.insertAdjacentElement('afterbegin',metaCardSuperTitle); }
        if (metaCardSubTitle) { metaCardSubTitle.insertAdjacentElement('beforeend',BL); }
        if (metaCardSubTitle) { metaCardSubTitle.insertAdjacentElement('beforeend',DWN); }
        if (metaCardSubTitle) { metaCardSubTitle.insertAdjacentElement('beforeend',BR); }
        if (metaCard) { metaCard.insertAdjacentElement('beforeend',metaCardMainTitle); }
        if (metaCard) { metaCard.insertAdjacentElement('beforeend',metaCardSubTitle); }
        if (metaFrame && metaCard) { metaFrame.insertAdjacentElement('beforeend', metaCard); }
        if (nftDisplay1) { nftDisplay1.insertAdjacentElement('beforeend', metaFrame); }
    } //END CREATE META CARD

let stopAllVideos = function(){
    let item = null, vidz = document.getElementsByTagName('video') //stop all other vids //todo make
    for(let i=0; i<vidz.length;i++){
        item = vidz[i];
        if(item && item.pause){item.pause();}
    }
}


let viz = {
 create_UTOOB_VIEW:create_UTOOB_VIEW,
 create_ITEM_VIEW:create_ITEM_VIEW,
 create_META_VIEW:create_META_VIEW,
 create_Dynamic_TTL:create_Dynamic_TTL,
 createKRYPTO_INTRO:createKRYPTO_INTRO,
 createKRYPTO_OUTRO:createKRYPTO_OUTRO,
 createKRYPTO_PAGE:createKRYPTO_PAGE, 
 createSTORYBOOK_PAGE:createSTORYBOOK_PAGE, 
 createCOZMOTOONZ_INTRO:createCOZMOTOONZ_INTRO,
 createCOZMOTOONZ_OUTRO:createCOZMOTOONZ_OUTRO,
 createCOZMOTOONZ_PAGE:createCOZMOTOONZ_PAGE,
 getRandoColor:getRandoColor
}

export { viz };


