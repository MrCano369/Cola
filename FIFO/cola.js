class Cola{
	constructor(){
		this._primero = null;
		this._ultimo = null;
	}
	get primero(){return this._primero;}
	set primero(v){this._primero = v;}

	get ultimo(){return this._ultimo;}
	set ultimo(v){this._ultimo = v;}

	agregar(nuevo){
		if (this._primero) {
			this._ultimo.sig = nuevo;
			this._ultimo = nuevo;
		}else{
			this._primero = nuevo;
			this._ultimo = nuevo;
		}
	}

	buscar(nombre){
		var actual = this._primero;
		while(actual && actual.nombre != nombre){
			actual = actual.sig;
		}
		if (actual) {
			return actual;
		}else{
			return null;
		}
	}

	sacar(){
		if (this._primero) {
			var nodo = this._primero;
			this._primero = this._primero.sig;
			return nodo;
		}else{
			return null;
		}
	}

	imprimir(){
		var actual = this._primero;
		var s = '';
		while(actual){
			s += actual.nombre + ':' + actual.ciclos;
			if (actual.sig) {
				s += ', ';
			}
			actual = actual.sig;
		}
		console.log(s);
	}

	ciclosTotales(){
		var s = 0;
		var actual = this._primero;
		while(actual){
			s += actual.ciclos;
			actual = actual.sig;
		}
		return s;
	}

	long(){
		var l = 0;
		var actual = this._primero;
		while(actual){
			l++;
			actual = actual.sig;
		}
		return l;
	}
}