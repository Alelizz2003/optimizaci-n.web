// test/cart.test.js
import { addToCart, removeFromCart, getTotal, getCart } from '../carrito.js'; // Ajusta la ruta según tu estructura

describe('Carrito de Compras', () => {
    beforeEach(() => {
        // Reinicia el carrito antes de cada prueba
        while (cart.length > 0) {
            cart.pop();
        }
    });

    it('debería agregar un producto al carrito', () => {
        const product = { name: 'Producto 1', price: 10.00 };
        addToCart(product);
        const cartItems = getCart();
        expect(cartItems).to.have.lengthOf(1);
        expect(cartItems[0]).to.deep.equal(product);
    });

    it('debería calcular el total correctamente', () => {
        addToCart({ name: 'Producto 1', price: 10.00 });
        addToCart({ name: 'Producto 2', price: 20.00 });
        const total = getTotal();
        expect(total).to.equal(30.00);
    });

    it('debería eliminar un producto del carrito', () => {
        addToCart({ name: 'Producto 1', price: 10.00 });
        addToCart({ name: 'Producto 2', price: 20.00 });
        removeFromCart(0); // Eliminar el primer producto
        const cartItems = getCart();
        expect(cartItems).to.have.lengthOf(1);
        expect(cartItems[0].name).to.equal('Producto 2');
    });
});
