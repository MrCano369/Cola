var cola = new Cola();
var n = 1;
var completados = 0;
var vacio = 0;

for (var i = 0; i < 300; i++) {
	if (Math.trunc(Math.random()*100+1) <= 39) {
		cola.agregar(new Proceso("p"+n));
		n++;
	}
	
	cola.imprimir();

	if (cola.primero) {
		cola.primero.ciclos--;
		if (cola.primero.ciclos == 0) {
			cola.sacar();
			completados++;
		}	
	}else{
		vacio++;
	}
}
console.log('Ciclos sin cola: ' + vacio);
console.log('Completados: ' + completados);
console.log('Pendientes: ' + cola.long());
console.log('Ciclos pendientes totales: ' + cola.ciclosTotales())