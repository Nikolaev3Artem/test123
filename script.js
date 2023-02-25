const storage = document.querySelector('#storage');
let storage_label = document.querySelector('#storage_label');
const transfer = document.querySelector('#transfer');
let transfer_label = document.querySelector('#transfer_label');

let backblaze_output = document.querySelector('#backblaze_output');

let bunny_output = document.querySelector('#bunny_output');
let bunny_hdd = document.querySelector('#bunny_hdd');
let bunny_ssd = document.querySelector('#bunny_ssd');

let scaleway_output = document.querySelector('#scaleway_output');
let scaleway_multi = document.querySelector('#scaleway_multi');
let scaleway_single = document.querySelector('#scaleway_single');

let vultr_output = document.querySelector('#vultr_output');

const prices = {
    'backblaze': {
      storage: 0.005,
      transfer: 0.01,
      minprice: 7
    },
    'bunny': {
      storage:{
        HDD:0.01,
        SSD:0.02
    },
      transfer: 0.01,
      maxprice:10
    },
    'scaleway': {
      storage: {
        multi:0.06,
        single:0.03
      },
      transfer: 0.02
    },
    'vultr': {
      storage: 0.01,
      transfer: 0.01,
      minprice:5
    }
  };

function getStorageValue(){
    storage_label.innerHTML = "Storage: " + storage.value + "GB"
}

function getTransferValue(){
    transfer_label.innerHTML = "Transfer: " + transfer.value + "GB"
}

function backblaze(storage, transfer) {
    const providerPrices = prices['backblaze'];
    const storagePrice = storage.value * providerPrices.storage;
    const transferPrice = transfer.value * providerPrices.transfer;
    let res = storagePrice + transferPrice
    if(res < providerPrices.minprice){
        backblaze_output.innerHTML = providerPrices.minprice + "$"
    }
    else{
        backblaze_output.innerHTML = storagePrice + transferPrice + "$"
        return 
    }
}


function bunny(storage,transfer){
    const providerPrices = prices['bunny'];
    let storagePrice;
    if (bunny_hdd.checked){
        storagePrice = storage.value * providerPrices.storage.HDD;
    }
    else{
        storagePrice = storage.value * providerPrices.storage.SSD;
    }
    const transferPrice = transfer.value * providerPrices.transfer;
    let res = storagePrice + transferPrice
    if(res > providerPrices.maxprice){
        bunny_output.innerHTML = providerPrices.maxprice + "$"
    }
    else{
        bunny_output.innerHTML = storagePrice + transferPrice + "$"
    }
}

function scaleway(storage,transfer){
    const providerPrices = prices['scaleway'];
    let storagePrice;
    let transferPrice;
    if (scaleway_multi.checked){
        if(storage.value <= 75 || storage.value <= 75){
            storagePrice = 0
        }
        else{
            storagePrice = (storage.value - 70) * providerPrices.storage.multi;
        }
    }
    else{
        if(storage.value <= 75 || storage.value <= 75){
            storagePrice = 0
        }
        else{
            storagePrice = (storage.value - 70) * providerPrices.storage.single;
        }
    }
    if(transfer.value <= 75 || transfer.value <= 75){
        transferPrice = 0
    }
    else{
        transferPrice = (transfer.value - 75) * providerPrices.transfer;
    }
    let res = storagePrice + transferPrice
    if(res > providerPrices.maxprice){
        scaleway_output.innerHTML = providerPrices + "$"
    }
    else{
        scaleway_output.innerHTML = storagePrice + transferPrice + "$"
    }
}

function vultr(storage, transfer) {
    const providerPrices = prices['vultr'];
    const storagePrice = storage.value * providerPrices.storage;
    const transferPrice = transfer.value * providerPrices.transfer;
    let res = storagePrice + transferPrice
    if(res < providerPrices.minprice){
        vultr_output.innerHTML = providerPrices.minprice + "$"
    }
    else{
        vultr_output.innerHTML = storagePrice + transferPrice + "$"
    }
}