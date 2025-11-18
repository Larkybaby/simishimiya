// src/services/MedicamentoService.js
import supabase from '../../supabase/supabaseClient.js';

export class MedicamentoService {
    static async obtenerTodos() {
        try {
            const { data, error } = await supabase
                .from('medicamento')
                .select('*')
                .order('nombre');
            
            if (error) {
                return { data: null, error };
            }
            
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }

    static async obtenerPorId(idMedicamento) {
        try {
            const { data, error } = await supabase
                .from('medicamento')
                .select('*')
                .eq('id_medicamento', idMedicamento)
                .single();
            
            if (error) {
                return { data: null, error };
            }
            
            return { data, error: null };
        } catch (error) {
            return { data: null, error };
        }
    }
}

