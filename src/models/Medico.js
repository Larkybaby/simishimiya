//src/models/Medico.js
export class Medico {
    constructor(data) {
        this.codigo = data.codigo;
        this.curp = data.curp;
        this.nombre_completo = data.nombre_completo;
        this.edad = data.edad;
        this.telefono = data.telefono;
        this.direccion = data.direccion;
        this.especialidad = data.especialidad
        this.numero_sucursal = data.numero_sucursal;
    }

    static fromJSON(data){
        return new Medico(data);
    }

    toJSON(){
        return{
            codigo:this.codigo,
            curp:this.curp,
            nombre_completo:this.nombre_completo,
            edad:this.edad,
            telefono:this.telefono,
            direccion:this.direccion,
            especialidad:this.especialidad,
            numero_sucursal:this.numero_sucursal,
        };
    }
}