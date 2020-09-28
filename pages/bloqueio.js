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
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/69679/bloqueio-de-alteracoes-e-por-competencia?ticketId=&q=" target="_blank">Diferenças entre bloqueio de alterações e bloqueio por competência</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/108841/pontoweb-bloqueio-automatico-de-competencia?ticketId=&q=" target="_blank">Bloqueio Automático de Competência</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/27041/como-bloquear-o-periodo-de-apuracao-ja-processado?ticketId=&q=" target="_blank">Como bloquear o período de apuração já processado?</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h2')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
