const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   let total = 0;
   let prices = document.querySelectorAll(".prices")
	prices.forEach(function(price){
		total += Number(price.textContent.trim());
	})
	let table = document.getElementById("grocery-table");
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	td.innerText = "Total:"+total;
	td.colSpan = 2;
	tr.appendChild(td);
    table.appendChild(tr);
	
};

getSumBtn.addEventListener("click", getSum);

