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
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/167104/pontoweb-como-criar-feriados-customizados?ticketId=&q=" target="_blank">Como criar feriados customizados</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/55719/como-adicionar-um-feriado-nacional?ticketId=&q=" target="_blank">Como adicionar feriado nacional automaticamente</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/126421/pontoweb-como-aplicar-feriado-somente-para-alguns-funcionarios?ticketId=&q=" target="_blank">Como aplicar feriado somente para alguns funcionários</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByClassName('page-header')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
