document.addEventListener('DOMContentLoaded', () => {
    const catalog = {
        "Eletrônicos": [
            {
                name: 'Produto 1',
                description: 'Descrição do Produto 1',
                price: 'R$ 100,00',
                image: 'https://via.placeholder.com/200'
            },
            {
                name: 'Produto 2',
                description: 'Descrição do Produto 2',
                price: 'R$ 150,00',
                image: 'https://via.placeholder.com/200'
            }
        ],
        "Roupas": [
            {
                name: 'Produto 3',
                description: 'Descrição do Produto 3',
                price: 'R$ 200,00',
                image: 'https://via.placeholder.com/200'
            },
            {
                name: 'Produto 4',
                description: 'Descrição do Produto 4',
                price: 'R$ 250,00',
                image: 'https://via.placeholder.com/200'
            }
        ],
        "Livros": [
            {
                name: 'Produto 5',
                description: 'Descrição do Produto 5',
                price: 'R$ 50,00',
                image: 'https://via.placeholder.com/200'
            },
            {
                name: 'Produto 6',
                description: 'Descrição do Produto 6',
                price: 'R$ 60,00',
                image: 'https://via.placeholder.com/200'
            }
        ]
    };

    const catalogElement = document.getElementById('catalog');

    Object.keys(catalog).forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');

        categoryElement.innerHTML = `
            <h2>${category}</h2>
            <div class="product-container" id="${category.replace(/\s+/g, '-').toLowerCase()}-container">
                <!-- Produtos desta categoria serão inseridos aqui -->
            </div>
        `;

        catalogElement.appendChild(categoryElement);

        const productContainer = document.getElementById(`${category.replace(/\s+/g, '-').toLowerCase()}-container`);

        catalog[category].forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span>${product.price}</span>
                </div>
            `;

            productContainer.appendChild(productElement);
        });
    });
});
