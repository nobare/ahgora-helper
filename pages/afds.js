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
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/126423/pontoweb-como-baixar-multiplos-afd-s?ticketId=&q=" target="_blank">Como baixar múltiplos AFD's</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h3')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
