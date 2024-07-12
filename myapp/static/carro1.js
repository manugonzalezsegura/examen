document.addEventListener('DOMContentLoaded', () => {
    const cartas = document.querySelectorAll('.carta');
    window.carrito = {};

    cartas.forEach(carta => {
        carta.addEventListener('click', function(event) {
            event.preventDefault();
            const nombreCarta = carta.getAttribute('data-name');
            window.agregarAlCarrito(nombreCarta);  // Accediendo a la función global agregarAlCarrito
        });
    });

    window.eliminarDelCarrito = function(nombre) {
        if (window.carrito[nombre]) {
            delete window.carrito[nombre];
        }
        window.mostrarEnModal();  // Accediendo a la función global mostrarEnModal
    }


    
    window.agregarAlCarrito = function(nombre) {
        if (carrito[nombre]) {
            carrito[nombre]++;
        } else {
            carrito[nombre] = 1;
        }
    
        // Mostrar en el modal
        mostrarEnModal();
    }



    function mostrarEnModal() {
        modalBody.innerHTML = '';
        Object.keys(carrito).forEach(nombre => {
            const nombreElement = document.createElement('div');
            nombreElement.classList.add('cart-item');
            nombreElement.innerHTML = `
                <div>
                    <img src="${cartas.find(carta => carta.getAttribute('data-name') === nombre).getAttribute('data-img-url')}" alt="Imagen de ${nombre}">
                    <p>Nombre: ${nombre}, Cantidad: ${carrito[nombre]}</p>
                </div>
                <button class="eliminar-btn" data-name="${nombre}">Eliminar</button>
            `;
            modalBody.appendChild(nombreElement);
        });
    
        document.querySelectorAll('.eliminar-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const nombre = btn.getAttribute('data-name');
                eliminarDelCarrito(nombre);
            });
        });
    
        modal.style.display = 'block';
    }
   
});
