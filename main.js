'use strict';

const candidates = [ 'ancoar', 'codingCarlos', 'ymd', 'jbaumann', 'josheriff' ];
let liometer = 0;

function initMess() {
  const cells = document.querySelectorAll( '.item' );
  const randomCellNum = Math.floor( Math.random() * 20 );
  const randomPersonNum = Math.floor( Math.floor( Math.random() * candidates.length ) );

  console.log( 'Cells: ', Array.from( cells ) );
  console.log( 'randomCellNum: ', randomCellNum );
  console.log( 'randomPersonNum: ', randomPersonNum );

  // Select one cell
  const selectedCell = cells[ randomCellNum ];
  // Select one person
  const selectedPerson = candidates[ randomPersonNum ];
  // Image path src
  const path = `./img/${selectedPerson}.png`;

  // Add image
  selectedCell.innerHTML = `<img src="${path}" alt="${selectedPerson}">`;

  // On click
  selectedCell.addEventListener( 'click', function ( ev ) {
    const id = this.id;
    upLiometer()
    console.debug( '+1 liado..', id );
  } );


  // Repeat after xxx ms
  setTimeout( function () {
    clear( selectedCell );
  }, 1500 );
}

function clear( selectedCell ) {
  selectedCell.innerHTML = '';
  console.log(liometer,'ºººººº liometer <<<<<<<')
  if ( liometer < 5 ) {
    initMess();
  }
  else {
    alert( 'LIOMETRO AL 100%' );
  }
}

// On click
function upLiometer() {
  console.log( 'Liometro:', liometer );
  alert( '¡Has sido liado!' );
  liometer++;
}

document.addEventListener( "DOMContentLoaded", initMess, false );
