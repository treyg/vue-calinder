import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://terbqcgxfxoyxgztbilu.supabase.co";
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
