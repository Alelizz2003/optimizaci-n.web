document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    const modal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('.product-info p:nth-child(2)').textContent;
            const productPrice = parseFloat(productCard.querySelector('.product-info p:nth-child(1)').textContent.replace(',', '.'));
            const product = { name: productName, price: productPrice };
            cart.push(product);
            updateCart();
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    function updateCart() {
        cartList.innerHTML = ''; // Limpiar la lista del carrito
        let total = 0;

        cart.forEach((product, index) => {
            const li = document.createElement('li');
            li.classList.add('cart-item');

            // Corregido: Usar template literals correctamente
            li.textContent = `${product.name} - ${product.price.toFixed(2).replace('.', ',')}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1); // Eliminar el producto del carrito
                updateCart(); // Actualizar el carrito después de eliminar
            });

            li.appendChild(removeButton); // Agregar el botón de eliminar a la lista
            cartList.appendChild(li); // Agregar el elemento de lista al carrito
            total += product.price; // Sumar el precio al total
        });

        // Corregido: Asegúrate de usar las comillas adecuadas y la sintaxis
        cartTotal.textContent = `Total: ${total.toFixed(2).replace('.', ',')}`; 
        modal.style.display = 'block'; // Mostrar el modal
    }
});
