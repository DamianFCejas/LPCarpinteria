export class Producto {

    static productoDesdeJson (obj:Object) {
        return new Producto(
                obj['id'],
                obj['tipo'],
                obj['modelo'],
                obj['tamaño'],
                obj['material'],
                obj['nombre'],
                obj['medidas'],
                obj['tipoDeMaterial'],
                obj['distanciaEntreClavos'],
                obj['descripcion'],
        );
    }

    constructor (
        public id:                   number,
        public tipo:                 string,
        public modelo:               string,
        public tamaño:               number,
        public material:             string,
        public nombre:               string,
        public medidas:              string,
        public tipoDeMaterial:       string,
        public distanciaEntreClavos: string,
        public descripcion:          string,
    ) {}

    get tipoModelo(){
        return `${this.tipo} ${this.modelo}`;
    }
}