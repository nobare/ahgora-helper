chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.state === true) {
        injectIt(true);

    } else {
        injectIt(false)
    }
})

const injectIt = (value) => {

    if (value == true) {
        let injection = `<div id="ext-div" style="padding: 1.5em";>
        <table class="tab_dados table table-striped table-bordered" id="funcionarios ">
        <thead>
            <tr>
            <th>Artigos mais acessados em relação a Batida Online.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/84006/criar-um-dispositivo-para-batida-online-mobile?ticketId=&q=" target="_blank">Como criar um dispositivo para batida online/mobile?o</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/84068/batida-online-como-bater-o-ponto-pelo-navegador-de-internet?ticketId=&q=" target="_blank">Como registrar a batida online pelo navegador?</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/84045/batida-online-como-adicionar-extensao-para-chrome?ticketId=&q=" target="_blank">Como adicionar extensão para o Google Chrome</a></th>
            </tr>
        <thead>
            <tr>
            <th>Artigos mais acessados em relação ao Ahgora Multi.</th>
            </tr>
        </thead>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/25950/como-instalar-ativar-e-realizar-o-primeiro-registro-de-ponto-com?ticketId=&q=" target="_blank">Como habilitar e instalar o aplicativo Ahgora Multi</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/142278/ahgora-multi-como-inserir-mais-de-um-colaborador-em-dispositivo-?ticketId=&q=" target="_blank">Como inserir mais de um colaborador em dispositivo Multi e cadastrar face</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/24485/como-funciona-a-geolocalizacao-no-ahgora-multi?ticketId=&q=" target="_blank">Como funciona a geolocalização no Ahgora Multi?</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h2')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
