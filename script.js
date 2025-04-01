document.addEventListener('DOMContentLoaded', function() {


    const productosSection = document.getElementById('productos');

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        const imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;

        const nombreProducto = document.createElement('h3');
        nombreProducto.textContent = producto.nombre;

        const descripcionProducto = document.createElement('p');
        descripcionProducto.textContent = producto.descripcion;

        productoDiv.appendChild(imagenProducto);
        productoDiv.appendChild(nombreProducto);
        productoDiv.appendChild(descripcionProducto);

        productosSection.appendChild(productoDiv);
    });
});