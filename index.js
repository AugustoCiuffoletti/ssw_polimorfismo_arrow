// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Aprire la consolle per i risultati</h1>`;

function g (x) { return 9*x+2; }
function zero ( h ) {
  return h(0);
}
console.log( zero ( (x) => 4 * x + 3 ) );
console.log(zero(g));
