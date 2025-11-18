// src/models/Medicamento.js
export class Medicamento {
    constructor(data) {
        this.id_medicamento = data.id_medicamento;
        this.nombre = data.nombre || '';
        this.descripcion = data.descripcion || '';
        this.precio = data.precio || 0;
    }

    static fromJSON(data) {
        return new Medicamento(data);
    }

    toJSON() {
        return {
            id_medicamento: this.id_medicamento,
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio
        };
    }
}

