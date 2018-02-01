'use strict';

// const candidates = [ 'ancoar', 'codingCarlos', 'ymd', 'jbaumann', 'josheriff' ];
const candidates = [ 'jbaumann', 'josheriff' ];
let liometer = 0;

// Create style classes
let styles = document.getElementById( 'styles' );
let styleText = '<style>';
candidates.forEach( function ( candidate ) {
  styleText += `.${candidate} {
  background: url("img/${candidate}.png");
  background-size: cover;
  background-position: center;
}`;
} );
styleText += '</style>';
styles.innerHTML = styleText;

function initMess() {
  const cells = document.querySelectorAll( '.item' );
  const randomCellNum = Math.floor( Math.random() * 20 );
  const randomPersonNum = Math.floor( Math.floor( Math.random() * candidates.length ) );

  // Select one cell
  const selectedCell = cells[ randomCellNum ];

  // Select one person
  const selectedPerson = candidates[ randomPersonNum ];

  // Agregar clase con la img
  selectedCell.classList.add( selectedPerson );

  // On click
  selectedCell.addEventListener( 'click', upLiometer );

  // Repeat after xxx ms
  setTimeout( function () {
    clear( selectedCell, selectedPerson );
  }, 1500 );
}

function clear( selectedCell, selectedPerson ) {
  selectedCell.classList.remove( selectedPerson );
  selectedCell.removeEventListener( 'click', upLiometer );
  if ( liometer < 5 ) {
    initMess();
  }
  else {
    alert( 'LIOMETRO AL 100%' );
  }
}

// On click
function upLiometer( ev ) {
  liometer++;
  const liometerBar = document.getElementById( 'liometer-bar' );
  liometerBar.setAttribute( 'value', liometer );
}

document.addEventListener( 'DOMContentLoaded', initMess, false );
