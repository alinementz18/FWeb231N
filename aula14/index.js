
fetch("./data.json") // Lendo o arquivo JSON
    .then(response => response.json())
    .then(data => {
        const peopleList = document.getElementById('peopleList');
        const pessoas = data.pessoas;

        for (let i = 0; i < pessoas.length; i++) {
            const person = pessoas[i];
            const li = document.createElement('li');
            li.textContent = `Nome: ${person.nome}, Idade: ${person.idade}, CPF: ${person.cpf}, Telefone: ${person.telefone}`;
            peopleList.appendChild(li);
        }
    })
    .catch(error => console.error('Erro ao ler o arquivo JSON:', error));



