chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({'state': true});
})

chrome.browserAction.setPopup({popup: 'popup.html'}, () => {
    chrome.storage.local.get('state', value => {
        let valor = Object.values(value)[0]
        console.log(valor);
        if (valor) {
            document.getElementById('btn').checked = true
            chrome.storage.local.set({'state': true})
            
        } else if (!valor) {
            document.getElementById('btn').checked = false
            chrome.storage.local.set({'state': false})
        };
    });
});

document.getElementById('btn').onclick = function () {

    let checkBox = document.getElementById('btn').checked;
    if (checkBox === true) {
        document.getElementById('btn').checked = true
        chrome.storage.local.set({'state': true})
        chrome.runtime.sendMessage({change: 'state true'})

    } else if (checkBox === false) {
        document.getElementById('btn').checked = false
        chrome.storage.local.set({'state': false})
        chrome.runtime.sendMessage({change: 'state false'})
    };
};
