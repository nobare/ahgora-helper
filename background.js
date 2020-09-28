// Storage da flag
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.txt === true) { 
        chrome.storage.local.get('state', value => {
            console.log(value);
        });
    } else if (request.txt === false) {
        chrome.storage.local.get('state', value => {
            console.log(value);
        })
    } else if (request.change === 'state true') {
        alert('A mudança fará efeito após você atualizar a página.');

    } else if (request.change === 'state false') {
        chrome.tabs.executeScript(tabId, {file: 'pages/remover.js'}, () => {
            console.log('injection removed');
        })
    }
});


//Afastamentos 
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && 'https://www.ahgora.com.br/afastamentos' === tab.url) {
        chrome.tabs.executeScript(tabId, {file: 'pages/afastamentos.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

//Apuracao
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && 'https://www.ahgora.com.br/batidas/apuracao' === tab.url) {
        chrome.tabs.executeScript(tabId, {file: 'pages/apuracao.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Batida Online
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && 'https://www.ahgora.com.br/batidaonline/dispositivos' === tab.url) {
        chrome.tabs.executeScript(tabId, {file: 'pages/batidaOnline.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Bloqueio de competências
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('https://www.ahgora.com.br/bloqueio')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/bloqueio.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Configurações
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && 'https://www.ahgora.com.br/configuracoes' === tab.url) {
        chrome.tabs.executeScript(tabId, {file: 'pages/configuracoes.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Gerar Documentos
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && 'https://www.ahgora.com.br/exporta?export=folha_pagamento' === tab.url) {
        chrome.tabs.executeScript(tabId, {file: 'pages/folhaDePagamento.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Funcionários
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && 'https://www.ahgora.com.br/funcionarios' === tab.url) {
        chrome.tabs.executeScript(tabId, {file: 'pages/funcionario.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Horários
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('https://www.ahgora.com.br/horarios')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/horarios.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Importação
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('https://www.ahgora.com.br/importa')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/importacao.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Relatórios
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && 'https://www.ahgora.com.br/relatorios' === tab.url) {
        chrome.tabs.executeScript(tabId, {file: 'pages/relatorios.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Error handling

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab, error) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && !tab.url.includes('www.ahgora.com.br')) {
        console.log('User not on Ahgora');
    };
});