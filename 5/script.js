
// 2============================================================

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

// 3=================================================================
let tableBlock = document.querySelector('.table-block');
let tableContainer = document.querySelector('.table-container');
let table = tableContainer.querySelector('table');
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');

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
         if ((k + 1) % 2 !== 0) {jove
            cell.classList.add('bg-gray');
         }
      }
   }
})

function tableCreate(){
   var body = document.body,
       tbl  = document.createElement('table');
   tbl.style.width  = '200px';
   tbl.style.border = '1px solid black';

   for(var i = 0; i < 3; i++){
       var tr = tbl.insertRow();
       for(var j = 0; j < 2; j++){
           if(i == 2 && j == 1){
               break;
           } else {
               var td = tr.insertCell();
               td.appendChild(document.createTextNode('Cell'));
               td.style.border = '1px solid black';
               if(i == 1 && j == 1){
                   td.setAttribute('rowSpan', '2');
               }
           }
       }
   }
   body.appendChild(tbl);
}
tableCreate();



