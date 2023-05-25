function adicionar(){  
    //pegando a tarefa  
      const tarefa = document.getElementById('tarefa').value;
    if(tarefa){
        //Passando o texto para o parágrafo
        const novaLista = document.querySelector('.novaLista');
        const clone = novaLista.cloneNode(true);
        clone.querySelector('.texto').textContent = tarefa;
        
        //Mostrando na tela
        clone.classList.remove('mostrando');
        clone.classList.remove('novaLista');
        clone.classList.remove('feito');
        const addLista = document.querySelector('.colocandoLista');
        addLista.appendChild(clone);  
        
        //Excluir a tarefa
        const removerBtn = clone.querySelector('#btn2').addEventListener('click', function(){
            remover(this);
        });

        //concluir a tarefa
        const concluirBtn = clone.querySelector('#btn1').addEventListener('click', function(){
            concluir(this);
        });

        //Limpar o input
        document.getElementById('tarefa').value = '';
    };
};

//Função de remover a tarefa
function remover(btn){
    btn.parentNode.remove(true);
};

//Função de concluir a tarefa
function concluir(btn){
    const feito = btn.parentNode;
    feito.classList.toggle('feito');
};