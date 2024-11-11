var special_words = ['CPU', 'ULA', 'REGISTRADORES', 'RAM', 'ROM', 'EPROM', 'FLASH', 'MEMÓRIA DE MASSA', 'DMA', 'CS', 'ADDRESSBUS', 'DATA BUS', 'I5', 'I7', 'DUAL CORE', 'QUAD CORE'];

var questions_list = [
    'Qual o componente conhecido como cerébro do computador (sigla)',
    'Parte do processador responsável por operações matemáticas (sigla)',
    'Tipo de memória mais rápida dentro do processador',
    'Memória primária que armazena dados temporários do sistema (sigla)',
    'Memória usada para guardar a BIOS (sigla)',
    'Tipo de memória não volátil usada para armazena o firmware do sistema (sigla)',
    'Memória não volátil usada para armazenar dados em dispositivos como pendrives',
    'Memória secundária usada em HDs e SSDs',
    'Permite que dispositivos de I/O acessem diretamente a RAM (sigla)',
    'Habilita e desabilita qualquer memória solicitada pelo sistema (sigla)',
    'Barramento de endereço (inglês)',
    'Hardware responsável por transportar dados entre componentes de um sistema',
    'Modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em setembro de 2009',
    'Modelo de processador desenvolvido pela Intel que teve sua primeira versão lançada em novembro de 2008',
    'Tipo de processador que possui dois núcleos',
    'Tipo de processador que possui dois núcleos a mais que o anterior'
];

var filledCell = [2, 20, 38, 133, 134, 135, 59, 77, 95, 113, 131, 149,
    167, 185, 203, 221, 239, 257, 275, 59, 60, 61, 272, 290, 308, 236,
    254, 272, 290, 308, 116, 134, 152, 170, 188, 27, 45, 63, 81, 99, 117,
    135, 153, 171, 189, 207, 225, 243, 261, 279, 297, 203, 204, 205, 312,
    313, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 187, 20, 223,
    241, 259, 277, 295, 313, 117, 118, 113, 114, 37, 38, 39, 40, 41, 42,
    43, 44, 45, 3, 21, 39, 57, 75, 93, 111, 129, 147];

var firstIndex = [2, 133, 59, 59, 272, 236, 116, 27, 203, 312, 270, 187, 117, 113, 37, 3];


var word = {

    word1: {
        letter: special_words[0].split(''),
        position: [2, 20, 38],
        write: function () {

            for (i in word.word1.letter) {
                var findCell = document.querySelector(`#cell_${word.word1.position[i]}`);

                findCell.innerHTML = word.word1.letter[i];
                console.log(word.word1.letter[i]);
            }
            cell_2.innerHTML = '<span style="color: red; font-size:10px">1</span>C';
        }
    },
    word2: {
        letter: special_words[1].split(''),
        position: [133, 134, 135],
        write: function () {
            for (i in word.word2.letter) {
                var findCell = document.querySelector(`#cell_${word.word2.position[i]}`);

                findCell.innerHTML = word.word2.letter[i];
                console.log(word.word2.letter[i]);
            }
            cell_133.innerHTML = '<span style="color: red; font-size:10px">2</span>U';

        }
    },
    word3: {
        letter: special_words[2].split(''),
        position: [59, 77, 95, 113, 131, 149, 167, 185, 203, 221, 239, 257, 275],
        write: function () {
            for (i in word.word3.letter) {
                var findCell = document.querySelector(`#cell_${word.word3.position[i]}`);

                findCell.innerHTML = word.word3.letter[i];
                console.log(word.word3.letter[i]);
            }
            cell_59.innerHTML = '<span style="color: red; font-size:10px">3_4</span>R';
            cell_113.innerHTML = '<span style="color: red; font-size:10px">14</span>i';
        }
    },
    word4: {
        letter: special_words[3].split(''),
        position: [59, 60, 61],
        write: function () {
            for (i in word.word4.letter) {
                var findCell = document.querySelector(`#cell_${word.word4.position[i]}`);

                findCell.innerHTML = word.word4.letter[i];
                console.log(word.word4.letter[i]);
            }
            cell_59.innerHTML = '<span style="color: red; font-size:10px">3_4</span>R';
        }
    },
    word5: {
        letter: special_words[4].split(''),
        position: [272, 290, 308],
        write: function () {
            for (i in word.word5.letter) {
                var findCell = document.querySelector(`#cell_${word.word5.position[i]}`);

                findCell.innerHTML = word.word5.letter[i];
                console.log(word.word5.letter[i]);
            }
            cell_272.innerHTML = '<span style="color: red; font-size:10px">5</span>R';
        }
    },
    word6: {
        letter: special_words[5].split(''),
        position: [236, 254, 272, 290, 308],
        write: function () {
            for (i in word.word6.letter) {
                var findCell = document.querySelector(`#cell_${word.word6.position[i]}`);

                findCell.innerHTML = word.word6.letter[i];
                console.log(word.word6.letter[i]);
            }
            cell_236.innerHTML = '<span style="color: red; font-size:10px">6</span>E';
        }
    },
    word7: {
        letter: special_words[6].split(''),
        position: [116, 134, 152, 170, 188],
        write: function () {
            for (i in word.word7.letter) {
                var findCell = document.querySelector(`#cell_${word.word7.position[i]}`);

                findCell.innerHTML = word.word7.letter[i];
                console.log(word.word7.letter[i]);
            }
            cell_116.innerHTML = '<span style="color: red; font-size:10px">7</span>F';
        }
    },
    word8: {
        letter: special_words[7].split(''),
        position: [27, 45, 63, 81, 99, 117, 135, 153, 171, 189, 207, 225, 243, 261, 279, 297],
        write: function () {
            for (i in word.word8.letter) {
                var findCell = document.querySelector(`#cell_${word.word8.position[i]}`);

                findCell.innerHTML = word.word8.letter[i];
                console.log(word.word8.letter[i]);
            }
            cell_27.innerHTML = '<span style="color: red; font-size:10px">8</span>M';
            cell_117.innerHTML = '<span style="color: red; font-size:10px">13</span>i';
            cell_153.innerHTML = '-';
            cell_207.innerHTML = '-';

        }
    },
    word9: {
        letter: special_words[8].split(''),
        position: [203, 204, 205, 312, 313],
        write: function () {
            for (i in word.word9.letter) {
                var findCell = document.querySelector(`#cell_${word.word9.position[i]}`);

                findCell.innerHTML = word.word9.letter[i];
                console.log(word.word9.letter[i]);
            }
            cell_203.innerHTML = '<span style="color: red; font-size:10px">9</span>D';
        }
    },
    word10: {
        letter: special_words[9].split(''),
        position: [312, 313],
        write: function () {
            for (i in word.word10.letter) {
                var findCell = document.querySelector(`#cell_${word.word10.position[i]}`);

                findCell.innerHTML = word.word10.letter[i];
                console.log(word.word10.letter[i]);
            }
            cell_312.innerHTML = '<span style="color: red; font-size:10px">10</span>C';
        }
    },
    word11: {
        letter: special_words[10].split(''),
        position: [270, 271, 272, 273, 274, 275, 276, 277, 278, 279],
        write: function () {
            for (i in word.word11.letter) {
                var findCell = document.querySelector(`#cell_${word.word11.position[i]}`);

                findCell.innerHTML = word.word11.letter[i];
                console.log(word.word11.letter[i]);
            }
            cell_270.innerHTML = '<span style="color: red; font-size:10px">11</span>A';
            cell_276.innerHTML = '-';
        }
    },
    word12: {
        letter: special_words[11].split(''),
        position: [187, 205, 223, 241, 259, 277, 295, 313, 117, 118],
        write: function () {
            for (i in word.word12.letter) {
                var findCell = document.querySelector(`#cell_${word.word12.position[i]}`);

                findCell.innerHTML = word.word12.letter[i];
                console.log(word.word12.letter[i]);
            }
            cell_187.innerHTML = '<span style="color: red; font-size:10px">12</span>D';
            cell_259.innerHTML = '-';
        }
    },
    word13: {
        letter: special_words[12].split(''),
        position: [117, 118],
        write: function () {
            for (i in word.word13.letter) {
                var findCell = document.querySelector(`#cell_${word.word13.position[i]}`);

                findCell.innerHTML = word.word13.letter[i];
                console.log(word.word13.letter[i]);
            }
            cell_117.innerHTML = '<span style="color: red; font-size:10px">13</span>I';
        }
    },
    word14: {
        letter: special_words[13].split(''),
        position: [113, 114],
        write: function () {
            for (i in word.word14.letter) {
                var findCell = document.querySelector(`#cell_${word.word14.position[i]}`);

                findCell.innerHTML = word.word14.letter[i];
                console.log(word.word14.letter[i]);
            }
            cell_113.innerHTML = '<span style="color: red; font-size:10px">14</span>I';
        }
    },
    word15: {
        letter: special_words[14].split(''),
        position: [37, 38, 39, 40, 41, 42, 43, 44, 45],
        write: function () {
            for (i in word.word15.letter) {
                var findCell = document.querySelector(`#cell_${word.word15.position[i]}`);

                findCell.innerHTML = word.word15.letter[i];
                console.log(word.word15.letter[i]);
            }
            cell_37.innerHTML = '<span style="color: red; font-size:10px">15</span>D';
            cell_41.innerHTML = '-';
        }
    },
    word16: {
        letter: special_words[15].split(''),
        position: [3, 21, 39, 57, 75, 93, 111, 129, 147],
        write: function () {
            for (i in word.word16.letter) {
                var findCell = document.querySelector(`#cell_${word.word16.position[i]}`);

                findCell.innerHTML = word.word16.letter[i];
                console.log(word.word16.letter[i]);
            }
            cell_3.innerHTML = '<span style="color: red; font-size:10px">16</span>Q';
            cell_75.innerHTML = '-';
        }
    }
};

var widthTable = 18;
var heightTable = 18;

function fecharModal() {
    modal_inicio.style.display = 'none';
    renderizarTabela();
    listarPerguntas();
}

function verificarResposta() {
    var resposta = input_resposta.value;
    
    if (resposta != '') {
        resposta = resposta.toUpperCase();
        var incluiReposta = special_words.includes(resposta);

        if (incluiReposta) {
            span_situacao.classList.remove('wrongAnswer');
            span_situacao.classList.add('correctAnswer');
            span_situacao.innerHTML = 'Resposta Correta!';
            var indiceResposta = special_words.indexOf(resposta);
        }
        else {
            span_situacao.classList.remove('correctAnswer');
            span_situacao.classList.add('wrongAnswer');
            span_situacao.innerHTML = 'Resposta Incorreta, tente novamente';
        } 

        span_situacao.value = '';
        continuarJogo(indiceResposta);
    }
    else {
        alert('Por Favor, digite uma resposta na caixa de texto');
    }
}

function continuarJogo(indiceResposta) {
    indiceResposta++;

    if (indiceResposta == 1) {
        word.word1.write();
        span_pergunta0.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 2) {
        word.word2.write();
        span_pergunta1.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 3) {
        word.word3.write();
        span_pergunta2.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 4) {
        word.word4.write();
        span_pergunta3.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 5) {
        word.word5.write();
        span_pergunta4.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 6) {
        word.word6.write();
        span_pergunta5.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 7) {
        word.word7.write();
        span_pergunta6.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 8) {
        word.word8.write();
        span_pergunta7.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 9) {
        word.word9.write();
        span_pergunta8.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 10) {
        word.word10.write();
        span_pergunta9.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 11) {
        word.word11.write();
        span_pergunta10.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 12) {
        word.word12.write();
        span_pergunta11.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 13) {
        word.word13.write();
        span_pergunta12.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 14) {
        word.word14.write();
        span_pergunta13.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 15) {
        word.word15.write();
        span_pergunta14.style.textDecoration = 'line-through';
    }
    else if (indiceResposta == 16) {
        word.word16.write();
        span_pergunta15.style.textDecoration = 'line-through';
    }
}

function listarPerguntas() {
    var tamanho_lista = questions_list.length;
    var estrutura = '';
    for (var i = 0; i < tamanho_lista; i++) {
        estrutura += 
        `
        <span id="span_pergunta${i}"><b>${i+1}</b>. ${questions_list[i]}</span> <br> <br>
        `;
    }

    div_perguntas.innerHTML = estrutura;
}

function pontuacao() {
    div_situacao.innerHTML = '<h1 style="text-align: center;">Parabéns!!</h1><br><br><p style="text-align: center;">Você finalizou o jogo</p><br><br>';
}

function renderizarTabela() {
    var tableGame = '<table id="gridGame" cellspacing=0 cellpadding=0>';

    // &nbsp é usado para mostrar que uma célula de tabela tem valor nulo
    var cellContent_tableGame = '&nbsp';
    var cell = 0;
    for (var row = 1; row <= heightTable; row++) {

        tableGame += `<tr id="row_${row}">`;

        for (var column = 1; column <= widthTable; column++, cell++) {
            tableGame += `<td class="deadCell" id="cell_${cell}">` + cellContent_tableGame + '</td>';

        }
        tableGame += '</tr>';

    }
    tableGame += '</table>';

    document.querySelector('#div_canvasCruzada').innerHTML = tableGame;

    pintarCelulas();
}



function pintarCelulas() {

    for (item in filledCell) {
        var paintCell = document.getElementById(`cell_${filledCell[item]}`);
        paintCell.removeAttribute('deadCell');
        paintCell.setAttribute('class', 'availableCell');
    }

    for (var initial = 0; initial < firstIndex.length; initial++) {
        var paintIndex_cell = document.getElementById(`cell_${firstIndex[initial]}`);

        paintIndex_cell.innerHTML = `<span style="color: red; font-size:10px">${initial + 1}</span>`;

        if (initial == 2 || initial == 3) {
            paintIndex_cell.innerHTML = `<span style="color: red; font-size:10px">3_4</span>`;
        }
    }
}