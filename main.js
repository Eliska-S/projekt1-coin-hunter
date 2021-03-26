
/** Samostatný pokus o zpracování hry.
 *  
 *  Otázky na kouče:
 * 	Jak spustit hudbu hned po načtení stránky?
 * 	Jak umístit panáčka na konkrétní souřadnice na začáku hry?
 * 
 */




let panacek = document.querySelector('#panacek');
panacek.style.top = 0;
panacek.style.left = 0;
let panacekX;
let panacekY;
let panacekSirka = 64;
let panacekVyska = 70;

let krok = 50;

let mince = document.querySelector('#mince');
mince.style.top = Math.floor(Math.random()*window.innerHeight + 1) + "px";
mince.style.left = Math.floor(Math.random()*window.innerWidth + 1) + "px";
let minceX;
let minceY; 
let minceSirka = 36;
let minceVyska = 36;

let zvukMince = document.getElementById('zvukMince');
let zvuk = document.getElementById('hudba');
let fanfara = document.getElementById('zvukFanfara');

let skore = document.getElementById('score');

function prehrajZvuk() {
	zvuk.play();
} 

function pohniMinci() {
	zvukMince.play();
	mince.style.top = Math.floor(Math.random()*window.innerHeight + 1) + "px";
	mince.style.left = Math.floor(Math.random()*window.innerWidth + 1) + "px";
}

function prictiBod() {
	skore.innerHTML++;
	let currentScore = parseInt(skore.innerHTML);
	if (currentScore === 5) {
		fanfara.play();
		console.log("Sebral jsi 5 mincí, vyhrál jsi tuto hru!! Gratulejeme!");
	}
}

function pohniPanackem(event) {

	panacekY = parseInt(panacek.style.top);
	panacekX = parseInt(panacek.style.left);
	minceX = parseInt(mince.style.left);
    minceY = parseInt(mince.style.top);
	
	if(event.keyCode === 38 && panacekY > 0) {
		panacek.src = "obrazky/panacek-nahoru.png";
		panacek.style.top = panacekY - krok + "px";
	} else if(event.keyCode === 40 && panacekY < window.innerHeight) {
		panacek.src = "obrazky/panacek.png";
		panacek.style.top = panacekY + krok + "px";
	} else if(event.keyCode === 39 && panacekX < window.innerWidth) {
		panacek.src = "obrazky/panacek-vpravo.png";
		panacek.style.left = panacekX + krok + "px";
	} else if(event.keyCode === 37 && panacekX > 0) {
		panacek.src = "obrazky/panacek-vlevo.png";
		panacek.style.left = panacekX - krok + "px";
	}

	if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
		pohniMinci ();
		prictiBod ();
	}
}
