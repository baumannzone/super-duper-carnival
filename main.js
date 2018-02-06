let candidates = [
  'ancoar',
  'b',
  'baumann',
  'bifuer',
  'codingCarlos',
  // 'elenaml',
  // 'godoy',
  // 'ivo',
  // 'jacinto',
  // 'josheriff',
  // 'koolTheba',
  // 'laetitia',
  // 'lilxelo',
  // 'nimbusaeta',
  // 'nuria',
  // 'pablocarmona',
  // 'pabloFm',
  // 'paul',
  // 'pepe',
  // 'sebas',
  // 'sebastien',
  // 'tuerto',
  // 'vicky',
  // 'ymd',
];

let liometer = 0;

// Get the number of px to add
const bar = document.getElementById( 'bar' );
const liante = document.getElementById( 'liante' );
const counter = document.getElementById( 'counter' );
const audio = document.getElementById( 'audio' );

const maxPoints = candidates.length;
const percent = 100 / maxPoints;
const oneUnit = roundUp( percent );

const TIME_BY_CARD = 1000; // Milliseconds
const TIME_SHOW_IMAGE = 600; // Milliseconds
let isFirstTime = true;

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

/**
 * Round number
 * @param num Num to round
 * @param precision Number of decimals
 * @returns {number}
 */
function roundUp( num, precision = 2 ) {
  precision = Math.pow( 10, precision );
  return Math.ceil( num * precision ) / precision
}

/**
 * Start app
 */
function initMess() {
  const cells = document.querySelectorAll( '.item' );
  const randomCellNum = Math.floor( Math.random() * 28 );
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
  }, TIME_BY_CARD );
}

function clear( selectedCell, selectedPerson ) {
  selectedCell.classList.remove( selectedPerson );
  selectedCell.removeEventListener( 'click', upLiometer );
  if ( liometer < maxPoints ) {
    initMess();
  }
  else {
    liante.classList.add( 'display' );
    // Alert + redirect
    swal( 'Good job!', 'El liómetro está al 100% y por el momento no puedes liar a más personas.', 'success' )
      .then( ( value ) => {
        window.location.href = '_video.html';
      } );
  }
}

// On click
function upLiometer() {
  audio.play();
  // Show liante img :P
  liante.classList.add( 'display' );
  setTimeout( () => liante.classList.remove( 'display' ), TIME_SHOW_IMAGE );

  // Show liometer-bar on first click
  if ( isFirstTime ) {
    document.getElementById( 'bar' ).classList.remove( 'hidden' );
    isFirstTime = false;
  }

  // Update
  liometer++;
  // Get the 3rd css class
  const user = this.classList[ 2 ];
  this.classList.remove( user );

  // This prevents double clicks
  this.removeEventListener( 'click', upLiometer );

  // Update progress bar
  let num = ( liometer * oneUnit );
  bar.style.height = `${num}%`;
  counter.innerHTML = `${num}%`;

  // Remove user from candidates
  candidates.splice( candidates.indexOf( user ), 1 );
}

document.addEventListener( 'DOMContentLoaded', initMess, false );
