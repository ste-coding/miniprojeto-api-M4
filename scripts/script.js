document.addEventListener('DOMContentLoaded', () => {
    const city = 'Recife';
    const endpoint = `http://localhost:3000/recycling-points/city/${encodeURIComponent(city)}`;

    fetch(endpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const resultList = document.getElementById('result-list');
            resultList.innerHTML = '';
            data.forEach(point => {
                const listItem = document.createElement('li');
                let listItemHTML = `
                    <p><strong>Nome:</strong> ${point.name}</p>
                    <p><strong>Endereço:</strong> ${point.street_address || 'N/A'}</p>
                    <p><strong>Tipo:</strong> <span class="type">${point.type}</span></p>
                    <p><strong>Contato:</strong> ${point.contact || 'N/A'}</p>
                `;
                listItem.innerHTML = listItemHTML.trim();
                resultList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao buscar pontos de coleta:', error));
});
