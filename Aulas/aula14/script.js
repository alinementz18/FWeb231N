document.addEventListener('DOMContentLoaded', function() {
    fetch('usuarios.json')
        .then(response => response.json())
        .then(dados => {
            const usuarios = dados.usuarios;
            const tbody = document.getElementById('usuarios-tbody');
            usuarios.forEach(usuario => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${usuario.nome}</td>
                    <td>${usuario.idade}</td>
                    <td>${usuario.cpf}</td>
                    <td>${usuario.telefone}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
});




