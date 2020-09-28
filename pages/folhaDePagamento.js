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
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/68858/implantacao-tutorial-de-fechamento-do-mes-contabil-do-plano-gere?ticketId=&q=" target="_blank">Tutorial completo para fechamento de folha de pagamento</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/98266/pontoweb-onde-configurar-codigos-contabeis-para?ticketId=&q=" target="_blank">Como configurar códigos contábeis para integração com a folha de pagamento</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/28106/como-as-informacoes-de-ponto-podem-ser-enviadas-ao-software-de-f?ticketId=&q=" target="_blank">Como as informações de ponto podem ser enviadas ao software de Folha de Pagamento?</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/141489/pontoweb-como-tirar-relatorio-de-horas-adicionais-atraves-de-fol?ticketId=&q=" target="_blank">Como tirar relatório de horas adicionais através de folha de pagamento</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h2')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
