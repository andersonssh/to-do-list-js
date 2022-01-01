var texto = document.getElementById('entrada-texto')
var botaoAdicionar = document.getElementById('adicionar')
var tarefas = document.getElementById('tarefas')
texto.addEventListener('keypress',function(event){
    if (event.key === "Enter" ){
        insereTarefa()
    }
    
})

botaoAdicionar.addEventListener('click', insereTarefa)
function insereTarefa(){
    tarefa = texto.value
    if(tarefa){
        let item = document.createElement('div')
        item.setAttribute('class', 'tarefa-item')
        item.setAttribute('data-tarefa', 'true')
        
        let descricao = document.createElement('div')
        descricao.setAttribute('class', 'tarefa-texto')
        //adicionando descricao da tarefa na div
        descricao.innerText = tarefa

        let botoesItem = document.createElement('div')
        botoesItem.setAttribute('class', 'botoes-item')

        let check = document.createElement('input')
        check.setAttribute('type', 'checkbox')
        check.addEventListener('click', function(event){
            let caminhoCheck = event.path
            desativarTarefa(caminhoCheck, check.checked)
        })


        /*Criando botao deletar tarefa */
        let btnDeletar = document.createElement('button')
        btnDeletar.addEventListener('click', function(event){
            let caminhoBotao = event.path
            deletarTarefa(caminhoBotao)
        })

        let deletar = document.createElement('i')
        deletar.setAttribute('class', 'bi bi-trash-fill')
        deletar.setAttribute('style', 'color: white')
        
        // criando estrutura dos botoes do item
        btnDeletar.appendChild(deletar)
        
        botoesItem.appendChild(check)
        botoesItem.appendChild(btnDeletar)

        /*Criando estrutura da caixa de tarefas */
        item.appendChild(descricao)
        item.appendChild(botoesItem)

        tarefas.appendChild(item)

        // apaga conteudo digitado

        texto.value = ''
        
    }
    
}

function deletarTarefa(caminhoBotao){
    let divPrincipal;
    for (var i = 0; i < caminhoBotao.length; i++){
        if(caminhoBotao[i].getAttribute('data-tarefa') == 'true'){
            divPrincipal = caminhoBotao[i]
            break
        }
    } 
    divPrincipal.parentNode.removeChild(divPrincipal) 
}
function desativarTarefa(caminhoCheck, checked){
    // ativa e reativa de acordo com o estado do
    let divPrincipal;
    for (var i = 0; i < caminhoCheck.length; i++){
        console.log(caminhoCheck[i])
        if(caminhoCheck[i].getAttribute('data-tarefa') == 'true'){
            divPrincipal = caminhoCheck[i]
            break
        }
    } 
    if (checked){
        divPrincipal.classList.add('texto-desativado')
    }else{
        divPrincipal.classList.remove('texto-desativado')
    }
}