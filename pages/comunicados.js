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
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/136886/pontoweb-como-utilizar-o-modulo-de-comunicados?ticketId=&q=" 
            target="_blank">Como utilizar o módulo de comunicados</a></th>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/136961/pontoweb-como-conferir-as-assinaturas-de-comunicados?ticketId=&q=" 
            target="_blank">Como conferir as assinaturas de comunicados</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByClassName('MuiToolbar-root MuiToolbar-regular jss13 MuiToolbar-gutters').outerHTML += injection;

    } else {
        console.log('its off');
    }}