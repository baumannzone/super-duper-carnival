'use strict';

const candidates = [ 'ancoar', 'codingCarlos', 'ymd', 'jbaumann', 'josheriff' ];
let liometro = 0;

function initMess() {
  const cells = document.getElementsByClassName( 'item' );
  const randomCellNum = Math.floor( Math.random() * 20 );
  const randomPersonNum = Math.floor( Math.floor( Math.random() * candidates.length ) );

  console.log( 'Cells: ', Array.from( cells ) );
  console.log( 'randomCellNum: ', randomCellNum );
  console.log( 'randomPersonNum: ', randomPersonNum );

  const selectedCell = cells[ randomCellNum ];
  const selectedPerson = candidates[ randomPersonNum ];
  const path = `./img/${selectedPerson}.png`;

  console.debug( selectedCell );

  selectedCell.innerHTML = `<img src="${path}" width="100%" height="100%" onclick="upLiometro()">`;

  setTimeout( function () {
    clear( selectedCell );
  }, 20000 );
}

function clear( celda ) {
  celda.innerHTML = '';
  if ( liometro < 5 ) {
    initMess();
  }
  else {
    alert( 'EL liómetro ha explotado...' );
  }
}

// On click
function upLiometro() {
  console.log( 'Liometro:', liometro );
  alert( '¡Has sido liado!' );
  liometro++;
}

initMess();
