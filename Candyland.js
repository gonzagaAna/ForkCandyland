
        // Seleciona todos os botões com a classe "candy"
        const candy = document.querySelectorAll('.candy-item--add');
        // Seleciona o elemento onde os nomes serão exibidos
        const containerNomes = document.getElementById('nomes');

        // Adiciona um ouvinte de evento de clique para cada botão
        candy.forEach(candys => {
            candys.addEventListener('click', function() {
        // Obtém o nome a partir do atributo candy-name do botão clicado
        const nome = this.getAttribute('candy-name');

        // Cria um novo elemento de parágrafo (<p>)
          const novoParagrafo = document.createElement('p');

          // Cria um nó de texto com o nome
        const textoNome = document.createTextNode(`➙${nome}`);

        // Adiciona o texto ao novo parágrafo
        novoParagrafo.appendChild(textoNome);

        // Adiciona o novo parágrafo ao container de nomes
        containerNomes.appendChild(novoParagrafo);

         // Atualiza o conteúdo do elemento para exibir o nome
         elementoNome.textContent = nome;

    });
    });


    //   form dom
    function enviar1(){
            var nome = document.getElementById("nome").value;

            document.getElementById("enviar1").innerHTML = "Olá " + nome + " :), seu pedido já está sendo realizado!"



         }

         function enviar2(){
            var nome = document.getElementById("nome").value;
            var endereco = document.getElementById("endereco").value;
            var bairro = document.getElementById("bairro").value;
            var cidade = document.getElementById("cidade").value;

            document.getElementById("enviar2").innerHTML = nome + " seu endereço de entrega é " + endereco +"," + bairro + ", " + cidade;


            let resposta = confirm("Seu endereço está correto?")
            if (resposta == true){
                alert("Em breve seu pedido estará a caminho!")
            } else{
                alert("Prencha novamente o formulário")
            }

         }
