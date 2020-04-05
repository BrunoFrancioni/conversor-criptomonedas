const apiKey = new APIKey();
const cotizador = new API(apiKey.obtenerKey());
const ui = new Interfaz();
const formulario = document.getElementById('formulario');

// Event Listeners

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    const criptomonedaSelect = document.querySelector('#criptomoneda');
    const criptomodenaSeleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value;

    if(monedaSeleccionada === '' || criptomodenaSeleccionada === '') {
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert, bg-danger text-center');

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    } else {
        cotizador.obtenerValores(monedaSeleccionada, criptomodenaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data, monedaSeleccionada, criptomodenaSeleccionada)
            })
    }
});