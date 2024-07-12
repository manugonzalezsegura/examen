document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const modalBody = modal.querySelector('#modal-body');
    const confirmarBtn = document.getElementById('confirmar-btn');
    const carritoIcono = document.getElementById('carrito-icono');

    carritoIcono.addEventListener('click', function() {
        window.mostrarEnModal();  // Accediendo a la función global mostrarEnModal
    });

    confirmarBtn.addEventListener('click', function() {
        window.confirmarCompra();  // Accediendo a la función global confirmarCompra
    });

    modal.querySelector('.close').addEventListener('click', function() {
        window.toggleModal();  // Accediendo a la función global toggleModal
    });

    window.mostrarEnModal = function() {
        modalBody.innerHTML = '';
        Object.keys(window.carrito).forEach(nombre => {
            const nombreElement = document.createElement('div');
            nombreElement.classList.add('cart-item');
            nombreElement.innerHTML = `
                <div>
                    <img src="${document.querySelector(`[data-name="${nombre}"]`).getAttribute('data-img-url')}" alt="Imagen de ${nombre}">
                    <p>Nombre: ${nombre}, Cantidad: ${window.carrito[nombre]}</p>
                </div>
                <button class="eliminar-btn" data-name="${nombre}">Eliminar</button>
            `;
            modalBody.appendChild(nombreElement);
        });

        document.querySelectorAll('.eliminar-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const nombre = btn.getAttribute('data-name');
                window.eliminarDelCarrito(nombre);  // Accediendo a la función global eliminarDelCarrito
            });
        });

        modal.style.display = 'block';
    }

    window.toggleModal = function() {
        modal.style.display = 'none';
    }
});
