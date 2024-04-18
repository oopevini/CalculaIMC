function calcular () {

    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let div = document.getElementById('resultado');
    let nomes = document.getElementById('nome').value;

    let imc1 = peso / altura ** 2;


    if(imc1 < 18.5) {

        alert( nomes + ' está com o imc igual a ' + imc1 + ' na CATEGORIA: Abaixo do normal')

    } else if ( imc1 <= 24.9 ) {

        alert( nomes + ' está com o imc igual a ' + imc1 + ' na CATEGORIA: Normal')

    } else if ( imc1 <= 29.9 ) {

        alert( nomes + ' está com o imc igual a ' + imc1 + ' na CATEGORIA: Sobrepeso')

    } else if ( imc1 <= 34.9 ) {

        alert( nomes + ' está com o imc igual a ' + imc1 + ' ,na CATEGORIA: Obsidade Grau I')

    } else if ( imc1 <= 39.9 ) {

        alert( nomes + ' está com o imc igual a ' + imc1 + ' na CATEGORIA: Obsidade Grau II' )

    } else if ( imc1 >= 40.0 ){

        alert( nomes + ' está com o imc igual a ' + imc1 + ' na categoria: Obsidade Grau III')

    }

    const arrPessoa = []

    let pesoInput = document.getElementById('peso').value;
    let alturaInput = document.getElementById('altura').value;
    let nomeInput = document.getElementById('nome').value;

    const pessoa = {

        nome: nomeInput,
        peso: pesoInput,
        altura: alturaInput,
        imc: imc1

    }

    arrPessoa.push(pessoa);

    imprimir();

    console.log(arrPessoa);

    function imprimir () { 

        for (let i = 0; arrPessoa.length; i++) {

            div.innerHTML += ` 

                <tr>

                    <td class="th" > ${arrPessoa[i].nome} </td>
                    <td class="th" > ${arrPessoa[i].peso} </td>
                    <td class="th" > ${arrPessoa[i].altura} </td>
                    <td class="th" > ${arrPessoa[i].imc} </td> 

                </tr>

            `
            }

    }


}