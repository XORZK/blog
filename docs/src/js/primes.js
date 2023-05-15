function pfact(s) {
	var factors = new Map();
	for (var i = 2; i <= Math.sqrt(s); i++) {
		while (s%i == 0) {
			factors.set(i, (factors.get(i) == undefined)?1:factors.get(i)+1);
			s /= i;
		}
	}
	if (s != 1) factors.set(s, (factors.get(s) == undefined)?1:factors.get(i)+1);
	return factors;
}

function display(s) {
	var f = pfact(s);
	var d = document.getElementById("display");
	d.innerHTML += `Prime Factorization of ${s}: $`;
	for (const [k, v] of f.entries()) {
		d.innerHTML += `${k}^${v}`;
	}
	d.innerHTML += "$";
	MathJax.typesetPromise([d]);
}


window.onload = function() {
	var s = Number(document.location.search.replace("?",""));
	if (typeof s == 'number' && !isNaN(s)) {
		display(s);
	}
};
