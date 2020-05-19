//Variabili
var nome;
var cognome;
var colore;
var pwd;

//Chiedo all' utente il suo nome
nome = prompt("Qual' è il tuo nome");

//Chiedo all' utente il suo cognome
cognome = prompt("Qual' è il tuo cognome");

//Chiedo all' utente il suo colore preferito
colore = prompt("Qual' è il tuo colore preferito");

//Password generata
pwd = nome + cognome + colore + "19";

//Output
document.getElementById('pwd').innerHTML = "Ecco la tua nuova password: " + pwd;
