var keys = document.querySelectorAll('.calculator .button');
var counter = document.querySelectorAll('.circle');

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var units = parseFloat(this.getAttribute('data-units'));
		var unitsTotal = document.querySelector('.screen');
		var unitsTotalValue = parseFloat(unitsTotal.getAttribute('data-accurate'));
		if(this.className === 'button clear') {
			unitsTotalValue = 0;
			unitsTotal.innerHTML = 0;
			unitsTotal.innerHTML += ' einingar';
			unitsTotal.dataset.accurate = 0;
			for(var j = 0; j < counter.length; j++) {
				counter[j].style.visibility = "hidden";
				counter[j].innerHTML = 0;
			}
		} else if (this.className === 'button add') {
			if (this.id === 'custom-spirit') {
				var quantity = document.getElementById('spirit-quantity').value;
				if (quantity === "" || isNaN(quantity) || quantity < 0) {
					document.getElementById('spirit-quantity').value = "";
					return;
				}
				units = parseInt(quantity) / 250;
				document.getElementById('spirit-quantity').value = "";
			}
			if (this.id === 'custom-wine') {
				var quantity = document.getElementById('wine-quantity').value;
				if (quantity === "" || isNaN(quantity) || quantity < 0) {
					document.getElementById('wine-quantity').value = "";
					return;
				}
				units = parseInt(quantity) / 750;
				document.getElementById('wine-quantity').value = "";
			}
			if (this.id === 'custom-beer') {
				var quantity = document.getElementById('beer-quantity').value;
				if (quantity === "" || isNaN(quantity) || quantity < 0) {
					document.getElementById('beer-quantity').value = "";
					return;
				}
				units = parseInt(quantity) / 3000;
				document.getElementById('beer-quantity').value = "";
			}
			unitsTotal.dataset.accurate = unitsTotalValue + units;
			unitsTotal.innerHTML = unitsTotalValue + units;
			unitsTotal.innerHTML = Math.round(unitsTotal.innerHTML * 100) / 100;
		
		}
		else {
			var selectedCount = parseInt(this.querySelector('.circle').innerHTML);
			this.querySelector('.circle').style.visibility = "visible";
			this.querySelector('.circle').innerHTML = selectedCount + 1;
			this.querySelector('.circle').innerHTML = this.querySelector('.circle').innerHTML;
			unitsTotal.innerHTML = unitsTotalValue + units;
			unitsTotal.innerHTML = Math.round(unitsTotal.innerHTML * 100) / 100;
			unitsTotal.dataset.accurate = unitsTotalValue + units;
		}
	}
	document.getElementById("spirit-quantity").addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("custom-spirit").click();
		}
	});
	document.getElementById("wine-quantity").addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("custom-wine").click();
		}
	});
	document.getElementById("beer-quantity").addEventListener("keyup", function(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			document.getElementById("custom-beer").click();
		}
	});
}