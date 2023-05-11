fetch('https://api.example.com/stocks')
    .then(response => response.json())
    .then(data => {
        const table = document.querySelector('.stock-market table');
        data.forEach(stock => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${stock.symbol}</td>
                <td>${stock.price}</td>
                <td>${stock.change}</td>
            `;
            table.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching stock data:', error);
    });
