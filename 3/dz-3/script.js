// 1 =========================================================
let rent = document.getElementById('rent');
let fine = document.getElementById('fine');
let days = document.getElementById('days');
let res = document.getElementById('res');
let btn = document.getElementById('btn');

function calcRent() {
   let fullRent = +rent.value;

   for (let i = 0; i < days.value; i++){
      if (i%30 == 0 && i != 0) {
         fullRent += +rent.value;
      }
      fullRent = (fullRent + (fullRent * +fine.value) / 100);
   }

   res.value = fullRent.toFixed(2);
}

btn.addEventListener('click', calcRent);

// 2 =========================================================

let arr = [1, 2, 3, 10, 2, 6, 7, 10, 9, 10];
let radioValue = document.getElementsByName('exampleRadios');
let btn2 = document.getElementById('btn2');
let out = document.querySelector('.out');

btn2.addEventListener('click', () => {
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
         if (val == 5) {
            res = func5();
         }
      }
   }

   out.innerHTML = res;
})

function func1() {
   return Math.max(...arr);
}

function func2() {
   let max = '';
   
   let maxNumber = func1();
   
   for (let i = 0; i < arr.length; i++){
      if (arr[i] == maxNumber) {
         max += i+1 + ',';
      }
   }
   return max;
}

function func3() {
   let max = 0;
   
   let maxNumber = func1();

   for (let i = 0; i < arr.length; i++){
      if (arr[i] == maxNumber) {
         max += 1;
      }
   }
   return max;
}


function func4() {
   let sum = 0;
   
   for (let i = 0; i < arr.length; i++){
      sum += arr[i];
   }
   let average = sum / arr.length;
   let count = 0;
   let sum2 = 0;
   for (let i = 0; i < arr.length; i++){
      if (arr[i] > average) {
         count++;
         sum2 += arr[i];
      };
   }
   return `дней: ${count}; сумма ${sum2}`;
}

function func5() {
   return arr.sort(function(a, b){
      return b - a;
   })
}

// 3 =========================================================
let arr2 = [
   [9, 2, 3, 4, 5],
   [6, 7, 8, 1, 10],
   [11, 12, 13, 14, 15],
   [14, 13, 12, 11, 10]
];
let radioValue2 = document.getElementsByName('exampleRadios2');
let btn3 = document.getElementById('btn3');
let out2 = document.querySelector('.out-2');

btn3.addEventListener('click', () => {
   let res = '';

   for (let i = 0; i < radioValue2.length; i++){
      if (radioValue2[i].checked) {
         let val = radioValue2[i].value;
         if (val == 11) {
            res = func11();
         }
         if (val == 22) {
            res = func22();
         }
         if (val == 33) {
            res = func33();
         }
         if (val == 44) {
            res = func44();
         }
      }
   }

   out2.innerHTML = res;
})

function func11() {
   let sum = 0;
   for (let i = 0; i < arr2.length; i++){
      for (let k = 0; k < arr2[i].length; k++){
         sum += arr2[i][k];
      }
   }
   return sum;
}

function func22() {
   
   let w = '';
   let d = '';
   let min = arr2[0][0];
   for (let i = 0; i < arr2.length; i++){
      for (let k = 0; k < arr2[i].length; k++){
         if (arr2[i][k] < min) {
            min = arr2[i][k];
            w = i + 1;
            d = k + 1;
         }
      }
   }
   
   return `неделя ${w}, день ${d}-й`;
}

function func33() {
   let sumWeek = 0;
   let w = '';
   for (let i = 0; i < arr2.length; i++){
      let sum = 0;
      for (let k = 0; k < arr2[i].length; k++){
         sum += arr2[i][k];
      }
      if (sum > sumWeek) {
         sumWeek = sum;
         w = i + 1;
      }
   }
   return `${w}-я неделя`;
   
}

function func44() {
   let sum = 0;
   for (let i = 0; i < arr2.length; i++){
      
      for (let k = 0; k < arr2[i].length; k++){
         if (k == 2) {
            sum += arr2[i][k];
         }
      }
   }
   return `${sum / arr2.length}`;
}