// src/models/Farmacia.js
export class Farmacia {
    constructor(data) {
        this.id_farmacia = data.id_farmacia;
        this.n_sucursal = data.n_sucursal || data.numero_sucursal;
    }

    static fromJSON(data) {
        return new Farmacia(data);
    }

    toJSON() {
        return {
            id_farmacia: this.id_farmacia,
            n_sucursal: this.n_sucursal
        };
    }
}

