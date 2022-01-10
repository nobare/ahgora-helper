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
        chrome.tabs.executeScript(null, {file: 'pages/remover.js'}, () => {
            console.log('injection removed');
        })
    }
});


//Afastamentos 
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/afastamentos')) {
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
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/batidas/apuracao')) {
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
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/batidaonline/dispositivos')) {
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
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/bloqueio')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/bloqueio.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Folha de pagamento
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/exporta')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/folhaDePagamento.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value); 
            });
        });
    };
});

// AFD dos dispositivos
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/afds/gerar_afds')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/afds.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value); 
            });
        });
    };
});

// Gerar Documentos
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/documentos')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/documentos.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Funcionários
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/funcionarios')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/funcionario.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Feriados
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/feriados')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/feriados.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Gerenciador de Espelhos
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/gerenciador_espelhos')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/gerenciadorEspelhos.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Justificativas
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/justificativa')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/justificativas.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Mapa de batidas area de atuacao
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/cercas')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/areaAtuacao.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Horários
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/horarios')) {
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
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/importa')) {
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
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/relatorios')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/relatorios.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Comunicados
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/notificationPolicy')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/comunicados.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Relatorio batidas impares
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/relatorios/batidas_impares')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/relatorioBatidasImpar.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Relatorio batidas por periodo
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/relatorios/batidas_periodo')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/relatorioBatidasPeriodo.js'}, () => {
            chrome.storage.local.get('state', value => {
                chrome.tabs.sendMessage(tabId, value)
                console.log(tabId, tab.url, value);
            });
        });
    };
});

// Relatorio sumarizado diario por funcionario
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status == 'complete' && tab.status == 'complete' && tab.url != undefined && tab.url.includes('ahgora.com.br/relatorios/completo/irr')) {
        chrome.tabs.executeScript(tabId, {file: 'pages/relatorioSumarizadoDiario.js'}, () => {
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