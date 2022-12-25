import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fksypmigsadlqvjuvrui.supabase.co";
const supabaseAnonKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrc3lwbWlnc2FkbHF2anV2cnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE5MjI1MjAsImV4cCI6MTk4NzQ5ODUyMH0.RcBMOUB9Yod24C6-ODXgm8BX5hCPJ70MTcVD6GpuZzk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
	auth: {
		storage: AsyncStorage as any,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});
