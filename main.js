const candidates = [
  'ancoar',
  'b',
  'baumann',
  'bifuer',
  'codingCarlos',
  'elenaml',
  'godoy',
  'ivo',
  'jacinto',
  'josheriff',
  'koolTheba',
  'laetitia',
  'lilxelo',
  'pablocarmona',
  'pabloFm',
  'paul',
  'pepe',
  'sebas',
  'sebastien',
  'tuerto',
  'vicky',
  'ymd',
];
let liometer = 0;

// Create style classes
let styles = document.getElementById( 'styles' );
let styleText = '<style>';

// Create a class for each candidate with the image as background
candidates.forEach( function ( candidate ) {
  styleText += `.${candidate} {
    background: url("img/${candidate}.png");
    background-size: cover;
    background-position: center;
    cursor: pointer;
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
  }, 1000 );
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
function upLiometer() {
  liometer++;
  // 3rd class
  const className = this.classList[ 2 ];
  this.classList.remove( className );
  // This prevents double clicks
  this.removeEventListener( 'click', upLiometer );
  // Update progress bar
  // const liometerBar = document.getElementById( 'liometer-bar' );
  // liometerBar.setAttribute( 'value', liometer );
}

document.addEventListener( 'DOMContentLoaded', initMess, false );
