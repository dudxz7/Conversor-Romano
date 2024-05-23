function converterParaRomano() {
    let valorInt = parseInt(document.getElementById('numero').value);

    if (!isNaN(valorInt) && valorInt > 0) {
        let valorRomano = inteiroParaRomano(valorInt);
        document.getElementById('total').innerText = valorRomano;
    } else {
        document.getElementById('total').innerText = "Por favor, insira um número válido.";
    }
}

function inteiroParaRomano(num) {
    const valores = [
        { valor: 1000000, simbolo: 'M̅' },
        { valor: 500000, simbolo: 'D̅' },
        { valor: 100000, simbolo: 'C̅' },
        { valor: 50000, simbolo: 'L̅' },
        { valor: 10000, simbolo: 'X̅' },
        { valor: 5000, simbolo: 'V̅' },
        { valor: 1000, simbolo: 'M' },
        { valor: 900, simbolo: 'CM' },
        { valor: 500, simbolo: 'D' },
        { valor: 400, simbolo: 'CD' },
        { valor: 100, simbolo: 'C' },
        { valor: 90, simbolo: 'XC' },
        { valor: 50, simbolo: 'L' },
        { valor: 40, simbolo: 'XL' },
        { valor: 10, simbolo: 'X' },
        { valor: 9, simbolo: 'IX' },
        { valor: 5, simbolo: 'V' },
        { valor: 4, simbolo: 'IV' },
        { valor: 1, simbolo: 'I' }
    ];

    let romano = '';

    for (let i = 0; i < valores.length; i++) {
        while (num >= valores[i].valor) {
            romano += valores[i].simbolo;
            num -= valores[i].valor;
        }
    }

    return romano;
}
