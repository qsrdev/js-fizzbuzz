# FizzBuzz TASK 15/04/2025

Dopo aver settato il ciclo di conteggio, parto da 1 e voglio arrivare a 100 compreso.
Utilizzerò l'operatore Modulus per andare a verificare se i numeri sono divisibili per 3 e per 5. Inoltre scriverò una condizione per cui: se un numero è divisibile sia per 3 che per 5 scriverà FizzBuzz invece

```
for (let i = 1; i <= 100; i++)
 if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
```
