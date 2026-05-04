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
	let ans = document.getElementById("ans");
	if(!ans){
		ans = document.createElement("h3");
		ans.id = "ans";
		document.body.appendChild(ans);
	}
	ans.textContent = total;	
};

getSumBtn.addEventListener("click", getSum);

