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
            <th>Está com alguma duvida pra lançar um Afastamento?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/70487/ponto-web-lancamento-de-afastamento-para-abono?ticketId=&q=" target="_blank">Como lançar um afastamento abonando falta para o funcionário</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/55644/pontoweb-como-lancar-afastamento-sem-abonar-horas-de-falta?ticketId=&q=" target="_blank">Como lançar afastamento sem abonar horas de falta</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/118676/pontoweb-como-tratar-batidas-durante-o-afastamento?ticketId=&q=" target="_blank">Como tratar batidas durante o afastamento/feriado</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/54298/adicionar-mais-motivo-na-solicitacao-do-portal-do-colaborador?ticketId=&q=" target="_blank">Como permitir justificativas pelo MyAhgora em um motivo de afastamento</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/pt-br/Search?q=afastamento" target="_blank">Não encontrou a sua dúvida? Verifique todos os artigos relacionados a página Afastamentos/Feriados</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h2')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
