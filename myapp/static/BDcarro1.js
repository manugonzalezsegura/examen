document.addEventListener('DOMContentLoaded', () => {
    window.confirmarCompra = function() {
        const nombresMedicamentos = Object.keys(carrito);
        fetch('/guardar-nombre-medicamento/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify({ nombre_medicamento: nombresMedicamentos })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al confirmar la compra.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            alert(data.message);
            carrito = {};
            toggleModal();
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
            alert('Error al confirmar la compra. Por favor, inténtalo nuevamente.');
        });
    }

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
