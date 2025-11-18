// src/services/FarmaciaService.js
import supabase from '../../supabase/supabaseClient.js';

export class FarmaciaService {
    static async obtenerRecetas(idFarmacia = null) {
        try {
            let query = supabase
                .from('receta')
                .select('*')
                .order('fecha_expedicion', { ascending: false });
            
            // obtenemos todas las recetas
            const { data, error } = await query;
            
            if (error) {
                return { data: null, error };
            }
            
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }

    static async surtirReceta(idReceta) {
        try {
            
            const { data, error } = await supabase
                .from('receta')
                .select('*')
                .eq('id_receta', idReceta)
                .single();
            
            if (error) {
                return { data: null, error };
            }
            
            // Por ahora retornamos la receta sin modificar
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }

    static async obtenerVentas(idFarmacia = null) {
        try {
            let query = supabase
                .from('venta')
                .select('*')
                .order('fecha_venta', { ascending: false });
            
            if (idFarmacia) {
                query = query.eq('id_farmacia', idFarmacia);
            }
            
            const { data, error } = await query;
            
            if (error) {
                return { data: null, error };
            }
            
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }

    static async crearVenta(ventaData) {
        try {
            const { data, error } = await supabase
                .from('venta')
                .insert({
                    id_farmacia: ventaData.id_farmacia,
                    id_medicamento: ventaData.id_medicamento || null,
                    fecha_venta: ventaData.fecha_venta || new Date().toISOString().split('T')[0],
                    total: ventaData.total,
                    tipo: ventaData.tipo || 'venta'
                })
                .select()
                .single();
            
            if (error) {
                return { data: null, error };
            }
            
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }

    static async actualizarVenta(idVenta, ventaData) {
        try {
            const { data, error } = await supabase
                .from('venta')
                .update({
                    total: ventaData.total,
                    tipo: ventaData.tipo,
                    fecha_venta: ventaData.fecha_venta
                })
                .eq('id_venta', idVenta)
                .select()
                .single();
            
            if (error) {
                return { data: null, error };
            }
            
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }

    static async eliminarVenta(idVenta) {
        try {
            const { error } = await supabase
                .from('venta')
                .delete()
                .eq('id_venta', idVenta);
            
            if (error) {
                return { success: false, error };
            }
            
            return { success: true, error: null };
        } catch (error) {
            return { success: false, error };
        }
    }
}
