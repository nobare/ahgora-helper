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
            <th>Abaixo temos artigos explicando as dúvidas mais recorrentes da aba Funcionários!</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/24530/pontoweb-como-cadastrar-novo-funcionario?ticketId=&q=" target="_blank">Como cadastrar um novo funcionário</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/105662/pontoweb-como-liberar-batida-online-mobile-para-os-colaboradores" target="_blank">Como liberar batida online/mobile para os colaboradores individualmente</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/31446/base-de-conhecimento-utilizando-a-opcao-listar-funcionarios?ticketId=&q=" target="_blank">Como utilizar a ferramenta Listar Funcionários</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/pt-br/Search?q=funcion%C3%A1rio" target="_blank">Não encontrou a sua dúvida? Verifique todos os artigos relacionados a página funcionários</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h2')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
