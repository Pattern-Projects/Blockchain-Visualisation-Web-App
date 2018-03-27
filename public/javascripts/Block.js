//Create block with properties
function Block(){
    this.blockID = "";
    this.blockNo = 0;
    this.time = Date.now();
    this.findingUser = "";
    this.prevHash = "";
    this.nonce = 70;
    this.messages = [];
    this.messageHash = 48655;
    this.hash = "";
    this.diff = networkDiff;
    this.hit = false;
}

//Chain
function Chain(){
    this.blocks = [];
}

//Add block to allBlocks
function addBlock(block){
    allBlocks.push(block);
}

function updateChain(user, block)
{
    user.chain.push(block);
}

function refreshBlockList() {
    var list = document.getElementById("tabs_block_list");
    list.innerText = "";
    allBlocks.forEach((block) => {
        blockListEntry(block);
    });
}

//Get only messgage on block on a chain
//Requires updating to a single or multiple message
function getChainBlockMessage(chain, block){
    var b = chain.blocks[block];
    return b.message;
}

function blockListEntry(block){
    var blockEntry = document.createElement("LI");

    var diva = document.createElement("div");
    var divb = document.createElement("div");
    var divc = document.createElement("div");
    var divd = document.createElement("div");
    var dive = document.createElement("div");
    var divf = document.createElement("div");
    var divg = document.createElement("div");
    var divh = document.createElement("div");
    var divi = document.createElement("div");
    var divj = document.createElement("div");
    var divk = document.createElement("div");
    var divl = document.createElement("div");
    var divm = document.createElement("div");
    var divn = document.createElement("div");
    var divo = document.createElement("div");
    var divp = document.createElement("div");
    var divq = document.createElement("div");
    var divr = document.createElement("div");
    var divs = document.createElement("div");
    var divt = document.createElement("div");
    var divu = document.createElement("div");
    var divv = document.createElement("div");
    var divw = document.createElement("div");
    var divx = document.createElement("div");

    //LI - ID and Class
    blockEntry.id = block.blockID;
    blockEntry.classList.add("item_portion");

    //Div classes
    diva.classList.add("item_portion");
    divb.classList.add("b_leftsection");
    divc.classList.add("single_chunk");
    divc.classList.add("b_number");
    divd.classList.add("chunk_title");
    divd.classList.add("title");
    dive.classList.add("chunk_content");

    divf.classList.add("single_chunk");
    divf.classList.add("b_ts");
    divg.classList.add("chunk_title");
    divg.classList.add("title");
    divh.classList.add("chunk_content");

    divi.classList.add("single_chunk");
    divi.classList.add("b_ph");
    divj.classList.add("chunk_title");
    divj.classList.add("title");
    divk.classList.add("chunk_content");

    divl.classList.add("b_midsection");
    divm.classList.add("single_chunk");
    divm.classList.add("b_nonce");
    divn.classList.add("chunk_title");
    divn.classList.add("title");
    divo.classList.add("chunk_content");

    divp.classList.add("single_chunk");
    divp.classList.add("b_fb");
    divq.classList.add("chunk_title");
    divq.classList.add("title");
    divr.classList.add("chunk_content");

    divs.classList.add("single_chunk");
    divs.classList.add("b_col");
    divt.classList.add("chunk_title");
    divt.classList.add("title");
    divu.classList.add("chunk_content");

    divv.classList.add("b_rightsection");
    divw.classList.add("b_messagesbox");

    //Div Contents
    divd.innerText = "Block#: ";
    dive.innerText = block.blockNo;

    divg.innerText = "TimeStamp: ";
    divh.innerText = block.time;

    divj.innerText = "PrevHash: ";
    divk.innerText = block.prevHash;

    divn.innerText = "Nonce: ";
    divo.innerText = block.nonce;

    divq.innerText = "FoundBy: ";
    divr.innerText = block.findingUser;

    divt.innerText = "Colour: #";
    divu.innerText = block.Hash;

    //Add to document
    document.getElementById("tabs_block_list").appendChild(blockEntry);
    blockEntry.appendChild(diva);
    diva.appendChild(divb);
    divb.appendChild(divc);

    divc.appendChild(divd);
    divc.appendChild(dive);

    divb.appendChild(divf);
    divf.appendChild(divg);
    divf.appendChild(divh);

    divb.appendChild(divi);
    divi.appendChild(divj);
    divi.appendChild(divk);

    diva.appendChild(divl);
    divl.appendChild(divm);

    divm.appendChild(divn);
    divm.appendChild(divo);

    divl.appendChild(divp);
    divp.appendChild(divq);
    divp.appendChild(divr);

    divl.appendChild(divs);
    divs.appendChild(divt);
    divs.appendChild(divu);

    diva.appendChild(divv);
    divv.appendChild(divw);
}