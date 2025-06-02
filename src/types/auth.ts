
export interface UserProfile {
  id: string;
  user_id: string;
  full_name: string;
  role: 'AdminGeral' | 'SMSPerobal' | 'Medico' | 'Equipe' | 'SetorMAC';
  first_login: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthUser {
  id: string;
  email: string;
  profile?: UserProfile;
}
