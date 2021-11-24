// 1 ============================================================
let matrixElements = document.querySelectorAll('.matrix-form-el');
let matrixBtn = document.querySelector('.matrix-btn');
let matrixVal = [];
let matrixTable = document.querySelector('.matrix-table table');
let multiplier = document.getElementById('multiplier');

matrixBtn.addEventListener('click', () => {
   
   createMatrixTable();
   matrixVal.length = 0;
})

function createMatrixTable() {
   matrixElements.forEach(el => {
      matrixVal.push(+el.value);
   })

   let count = 0;
   matrixTable.innerHTML = '';
   for (let i = 0; i < 3; i++){
      let row = matrixTable.insertRow();
      for (let k = 0; k < 3; k++){
         let cell = row.insertCell();
         count++;
         cell.classList.add('table-cell2', 'text-center');
         cell.style.border = '2px solid black';
         cell.innerHTML = matrixVal[count - 1] * +multiplier.value;
      }
   }
}


// 2 ============================================================

let constructionGoods = document.querySelector('.construction-goods');
let priceGoods = document.querySelectorAll('.price');
let selectGoods = document.querySelector('#exampleFormControlSelect1');
let products2 = document.querySelectorAll('.products2-block input');
let deliveryPrice = document.querySelectorAll('.delivery-block input');
let paymentType = document.querySelectorAll('.payment-block input');
let philanthropy = document.getElementById('exampleFormControlInput1');
let result = document.getElementById('exampleFormControlTextarea1');


priceGoods.forEach((item) => {
   item.addEventListener('change', () => {
      calcTotalPrice();
   })
})

philanthropy.addEventListener('input', () => {
   calcTotalPrice();
})
   
calcTotalPrice();

function calcTotalPrice() {
   let sum = 0;
   let goods = +selectGoods.value;

   sum = sum + goods;

   products2.forEach((item) => {
      if (item.checked) {
         sum += +item.value;
      }
   })

   deliveryPrice.forEach((item) => {
      if (item.checked) {
         sum += +item.value;
      }
   })

   paymentType.forEach((item) => {
      if (item.checked) {
         sum += (sum * +item.value)/100; 
      }
   })

   result.innerHTML = `Ваш заказ на сумму: ${(+philanthropy.value + sum).toLocaleString('ru-RU')} грн.`;
}

// 3 =================================================================
let tableBlock = document.querySelector('.table-block');
let tableContainer = document.querySelector('.table-container');
let table = tableContainer.querySelector('.table-container table');
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
let colorInput = document.querySelector('.color');
let line = document.getElementById('inp1');
let column = document.getElementById('inp2');

function createTable() {
   for (let i = 0; i < 8; i++){
      let row = table.insertRow();
      for (let k = 0; k < 7; k++){
         let cell = row.insertCell();
         cell.classList.add('table-cell');
         cell.style.border = '1px solid black';
         if ((k + 1) % 2 !== 0) {
            cell.classList.add('bg-gray');
         }
      }
   }
}

createTable()

btn1.addEventListener('click', () => {
   table.innerHTML = '';

   for (let i = 0; i < 8; i++){
      let row = table.insertRow();
      for (let k = 0; k < 7; k++){
         let cell = row.insertCell();
         cell.classList.add('table-cell');
         cell.style.border = '1px solid black';
         if ((i + 1) % 2 !== 0 && (k + 1) % 2 !== 0) {
            cell.classList.add('bg-gray');
         }
         if ((i + 1) % 2 == 0 && (k + 1) % 2 == 0) {
            cell.classList.add('bg-gray');
         }
      }
   }
})

btn2.addEventListener('click', () => {
   let lineNum = +line.value;
   let columnNum = +column.value;
   let color = colorInput.value;

   table.innerHTML = '';

   for (let i = 0; i < 8; i++){
      let row = table.insertRow();
      for (let k = 0; k < 7; k++){
         let cell = row.insertCell();
         cell.classList.add('table-cell');
         cell.style.border = '1px solid black';
         if ((i + 1) == lineNum) {
            cell.style.backgroundColor = color;
         }
         if ((k + 1) / columnNum == 1) {
            cell.style.backgroundColor = color;
         }
         
      }
   }
})




