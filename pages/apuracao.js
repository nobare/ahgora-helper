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
        <tbody>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/27000/pontoweb-como-funciona-a-virada-do-dia-na-jornada-de-trabalho?ticketId=&q=" target="_blank">Como funciona a virada do dia?</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/47451/pontoweb-como-localizar-funcionario-demitido" target="_blank">Como localizar informações de um funcionário demitido</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/110563/pontoweb-aprovar-justificativas?ticketId=&q=" target="_blank">Como aprovar justificativa ou inclusão de batida do colaborador</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/24501/como-aplicar-escala-para-colaboradores?ticketId=&q=" target="_blank">Como aplicar escala para os colaboradores</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/pt-br/Search?q=apura%C3%A7%C3%A3o" target="_blank">Todos os artigos relácionados a Apuração de Batidas</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h2')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
