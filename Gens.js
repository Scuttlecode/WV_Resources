

//-----Wolf 1 Stats----------//
var STR1;
var SPD1;
var AGI1;
var WIS1;
var SMA1;
var TTL1;

//-----Wolf 2 Stats----------//
var STR2;
var SPD2;
var AGI2;
var WIS2;
var SMA2;
var TTL2;

//-----Result Stats----------//
var STRR;
var SPDR;
var AGIR;
var WISR;
var SMAR;
var TTLR;

function RollStats() {
	
	//set stats, wolf 1
	STR1 = parseFloat(document.getElementById("I_STR").value);
	SPD1 = parseFloat(document.getElementById("I_SPD").value);
	AGI1 = parseFloat(document.getElementById("I_AGI").value);
	WIS1 = parseFloat(document.getElementById("I_WIS").value);
	SMA1 = parseFloat(document.getElementById("I_SMA").value);
	TTL1 = STR1 + SPD1 + AGI1 + WIS1 + SMA1;
	document.getElementById("R_TOTAL").innerHTML = TTL1;
	
	//set stats, wolf 2
	STR2 = parseFloat(document.getElementById("II_STR").value);
	SPD2 = parseFloat(document.getElementById("II_SPD").value);
	AGI2 = parseFloat(document.getElementById("II_AGI").value);
	WIS2 = parseFloat(document.getElementById("II_WIS").value);
	SMA2 = parseFloat(document.getElementById("II_SMA").value);
	TTL2 = STR2 + SPD2 + AGI2 + WIS2 + SMA2;
	document.getElementById("RR_TOTAL").innerHTML = TTL2;
	
	/*function CalcStat(Stat1, Stat2) {
		var AvStat = (Stat1 + Stat2) / 2;
		var NuStat = (30/100) * AvStat;
		return NuStat;
	}*/
	
	function CalcStat(Stat1, Stat2) {
		var ComStatL = ((20/100) * (Stat1 + Stat2)) + 21;
		var ComStatH = ((20/100) * (Stat1 + Stat2)) + 31;
		var AvStat = (ComStatL + ComStatH) / 2;
		
		return AvStat;
	}
	
	STRR = CalcStat(STR1, STR2);
	SPDR = CalcStat(SPD1, SPD2);
	AGIR = CalcStat(AGI1, AGI2);
	WISR = CalcStat(WIS1, WIS2);
	SMAR = CalcStat(SMA1, SMA2);
	TTLR = STRR + SPDR + AGIR + WISR + SMAR;
	
	
	document.getElementById("O_STR").innerHTML = Math.floor(STRR);
	document.getElementById("O_SPD").innerHTML = Math.floor(SPDR);
	document.getElementById("O_AGI").innerHTML = Math.floor(AGIR);
	document.getElementById("O_WIS").innerHTML = Math.floor(WISR);
	document.getElementById("O_SMA").innerHTML = Math.floor(SMAR);
	document.getElementById("RO_TOTAL").innerHTML = Math.floor(TTLR);
	
	
}
