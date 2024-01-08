

const kmPrice = 0.21;

const carriageNumber = Math.floor(Math.random() * (10-1 + 1) +1);
console.log("Numero di carrozza:", carriageNumber);

const cpCode = Math.floor(Math.random() * (99999-10000 + 10000) +10000);
console.log("Codice CP:", cpCode);

let submitButton = document.getElementById("submitButton");





submitButton.addEventListener("click", 
    
            function(event) {
            event.preventDefault();

            let userName = document.getElementById("Name").value;
            console.log("Nome untente:", userName)

            let kilometers = document.getElementById("km").value;
            console.log("km da percorrere:", kilometers);

            let userAge = document.getElementById("age").value;
            console.log("L'età dell'utente:", userAge);

            let priceWithoutDiscount = (kilometers * kmPrice);
            console.log("prezzo senza sconto:", priceWithoutDiscount);

            let totalPrice = 0;

            let ticketArea = document.getElementById("ticket");

            let offer = "";

            
            if ( userAge == "" || userName == "" || kilometers == "" ){
                alert("Inserisci i dati mancanti");
            } else {

                if (userAge == "Minorenne") {

                    totalPrice = (priceWithoutDiscount - (0.2 * priceWithoutDiscount));
                    offer = "Biglietto scontato"

                } else if ( userAge == "Maggiorenne") {

                    totalPrice = priceWithoutDiscount;
                    offer = "Biglietto standard"

                } else if ( userAge == "Over 65") {

                    totalPrice = (priceWithoutDiscount - (0.4 * priceWithoutDiscount));
                    offer = "Biglietto scontato"

                } 

                document.getElementById('user-name').innerHTML = "<p> " + userName + "</p>";
                document.getElementById('totale-biglietto').innerHTML = "<p> " + totalPrice.toFixed(2) + " €" + "</p>";
                document.getElementById('codice-cp').innerHTML = "<p> " + cpCode + "</p>";
                document.getElementById('numero-carrozza').innerHTML = "<p> " + carriageNumber + "</p>";
                document.getElementById('offerta').innerHTML = "<p> " + offer + "</p>";

                ticketArea.className = "d-flex justify-content-center d-block"

                console.log("il prezzo totale:", totalPrice);
            }
            }     
)

// terminato esercizio

