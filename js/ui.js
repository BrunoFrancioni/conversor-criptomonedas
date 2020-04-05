class Interfaz {
    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                const select = document.querySelector('#criptomoneda');

                for(const [key, value] of Object.entries(monedas.Data)) {
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));

                    select.appendChild(opcion);
                }
            });
    }

    mostrarMensaje(mensaje, clases) {
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        document.querySelector('.mensajes').appendChild(div);
    }

    mostrarResultado(resultado, moneda, crypto) {
        const resultadoAnterior = document.querySelector('#resultado > div');

        if(resultadoAnterior) {
            resultadoAnterior.remove();
        }

        let precio = (resultado[crypto][moneda]).toFixed(3);

        let templateHTML = `
            <div class="card bg-warning">
                <h2 class="card-title">Resultado:</h2>
                <p>El precio de ${moneda} a moneda ${crypto} es de: $ ${precio}</p>
            </div>
        `;

        this.mostrarOcultarSpinner('block');

        setTimeout(() => {
            document.querySelector('#resultado').innerHTML = templateHTML;

            this.mostrarOcultarSpinner('none');
        }, 3000);
    }

    mostrarOcultarSpinner(vista) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}