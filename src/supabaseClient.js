import { createClient } from '@supabase/supabase-js';

// Carrega as variáveis de ambiente (VITE_ é o prefixo padrão)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verifica se as chaves foram carregadas (boa prática)
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("As variáveis de ambiente SUPABASE_URL ou SUPABASE_ANON_KEY não foram carregadas corretamente. Verifique o arquivo .env.local.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);