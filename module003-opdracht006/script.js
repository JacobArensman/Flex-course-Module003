//Deel A
let makeSandwichWith = () => {
    let beleg = 'ham';
    let brood = 'bruin';
    console.log(beleg + ' ' + brood);
};

makeSandwichWith(); 

//------------------------------------------------------------------------
//------------------------------------------------------------------------



//Deel B
let topping = 'kaas'+ ' ' + 'ham' ; //declareer de variable
const makeSandwichWith2 = (topping) => {   //tussen haakjes alle variabelen zetten
    console.log("there you go, a sandwich with" + ' ' + topping); //schrijf de functie
}

makeSandwichWith2(topping); //call de functie met alles variabele die je wil calle


//------------------------------------------------------------------------
//------------------------------------------------------------------------



//deel C
let totalAmount = 10 / 50 * 100; //declareer de variable
const discount = (totalAmount) => {   //tussen haakjes alle variabelen zetten
    console.log(totalAmount); //schrijf de functie
}

discount(totalAmount); //call de functie met alles variabele die je wil calle

//------------------------------------------------------------------------
//------------------------------------------------------------------------



//Deel D
const discountClac = (totalAmount) => {   //tussen haakjes alle variabelen zetten
   if (totalAmount > 25) {
      console.log ('it is')
   } else {
      console.log ('it is not')
   }
}
discountClac(totalAmount); //call de functie met alles variabele die je wil calle










