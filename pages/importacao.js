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
            <th>Dúvidas pra fazer uma importação?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/44242/pontoweb-como-criar-e-importar-uma-planilha-de-funcionarios" target="_blank">Como criar e importar uma planilha de funcionários</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/137354/copia-de-pontoweb-como-importar-banco-de-horas-manual?ticketId=&q=" target="_blank">Como importar banco de horas manual</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h2')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
