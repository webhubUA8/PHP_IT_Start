let radioValue = document.getElementsByName('exampleRadios');
let btn = document.getElementById('btn');
let out = document.querySelector('.out');
let products = [
   {
      name: 'Товар один',
      price: 20,
      amount: 10
   },
   {
      name: 'Товар два',
      price: 35,
      amount: 20
   },
   {
      name: 'Товар три',
      price: 15,
      amount: 5
   },
   {
      name: 'Товар четыре',
      price: 200,
      amount: 3
   },
   {
      name: 'Товар пять',
      price: 133,
      amount: 11
   },
   {
      name: 'Товар шесть',
      price: 50,
      amount: 25
   },
   {
      name: 'Товар семь',
      price: 250,
      amount: 2
   },
   {
      name: 'Товар восемь',
      price: 20,
      amount: 10
   },
   {
      name: 'Товар девять',
      price: 45,
      amount: 40
   },
   {
      name: 'Товар десять',
      price: 80,
      amount: 17
   },

];

btn.addEventListener('click', () => {
   let res = '';
   for (let i = 0; i < radioValue.length; i++) {
      if (radioValue[i].checked) {
         let val = radioValue[i].value;
         if (val == 1) {
            res = func1();
         }
         if (val == 2) {
            res = func2();
         }
         if (val == 3) {
            res = func3();
         }
         if (val == 4) {
            res = func4();
         }
         
      }
   }

   out.innerHTML = res;
})


function func1() {
   let out = '';
   let arr = [...products].sort(function (a, b) {
      if (a.name < b.name) {
         return -1;
      }
      if (a.name > b.name) {
         return 1;
      }
      return 0;
   });

   for (let i = 0; i < arr.length; i++) {
      out += `<p style="background: lightgray;">${arr[i].name}</p>`;
   }

   return out;
}

function func2() {
   let out = '';
   for (let i = 0; i < products.length; i++) {
      out += `<p style="background: lightgray;">${products[i].name}: Чек на сумму ${products[i].price * products[i].amount}грн.</p>`
   }
   return out;
}

function func3() {
   let sum = 0;
   for (let i = 0; i < products.length; i++){
      if (products[i].amount < 5) {
         sum += products[i].price * products[i].amount;
      }
   }

   return sum;
}

function func4() {
   let minCheck = [];
   for (let i = 0; i < products.length; i++){
      if (products[i].price > 100) {
         minCheck.push(products[i].price * products[i].amount);
      }
   }

   return Math.min(...minCheck);
}