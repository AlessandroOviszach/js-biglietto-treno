// ___ BIGLIETTO DEL TRENO ___
// richiesta dei parametri utente (km ed età passeggiero)
const Km = prompt('Km da percorrere');
const eta = prompt('Inserisci la tua età');
const utente = prompt('Inserisci il tuo nome');

// Parametri costanti
const prezzo_per_Km = 0.21;

// formula di calcolo prezzo biglietto
let prezzo = prezzo_per_Km * Km;

// condizioni sconti 
if ( (eta >= 18) && (eta < 65) ) {
    prezzo = prezzo

} else if ( eta < 18 ) {
    prezzo -= (prezzo * 20) / 100

} else if ( eta >= 65 ) {
    prezzo -= (prezzo * 40) / 100
}

// trasformazione a due decimali
prezzo = prezzo.toFixed(2);

// inserimento dati nel documento
document.getElementById('km').innerHTML = Km;
document.getElementById('eta').innerHTML = eta;
document.getElementById('utente').innerHTML = utente;
document.getElementById('prezzo').innerHTML = prezzo;
