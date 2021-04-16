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
            <th>Tutoriais de como ajustar as jornadas e escalas. Mostrando o passo a passo de vários procedimentos desta página.</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/115021/pontoweb-como-criar-uma-jornada-e-quais-sao-os-tipos-de-jornada-?ticketId=&q=" target="_blank">Como configurar Jornada de Trabalho</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/78620/ponto-web-como-criar-escala-6x1?ticketId=&q=" target="_blank">Como criar uma escala 6x1</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/114479/pontoweb-como-configurar-reducao-de-carga-horaria?ticketId=&q=" target="_blank">Como configurar redução de carga horária</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/24501/como-aplicar-escala-para-colaboradores?ticketId=&q=" target="_blank">Como aplicar escala para os colaboradores</a></th>
            </tr>
            <tr>
            <th><a href="https://seusucesso.ahgora.com.br/kb/article/91346/pontoweb-como-reverter-alteracoes-feitas-em-jornadas?ticketId=&q=" target="_blank">Como reverter alterações feitas nas jornadas</a></th>
            </tr>
        </tbody>
        </table>
        </div>`

        document.getElementsByTagName('h2')[0].outerHTML += injection;

    } else {
        console.log('its off');
    }}
