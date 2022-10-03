export interface ReqResResponse {
    data: ReqProd[];
}

interface ReqProd {
    id:                   number;
    tipo:                 string;
    modelo:               string;
    tamaño:               number;
    material:             string;
    nombre:               string;
    medidas:              string;
    tipoDeMaterial:       string;
    distanciaEntreClavos: string;
    descripcion:          string;
}
