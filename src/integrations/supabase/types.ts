export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          id: string
          ip_address: string | null
          new_values: Json | null
          old_values: Json | null
          record_id: string | null
          table_name: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          id?: string
          ip_address?: string | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      doctors: {
        Row: {
          active: boolean | null
          contact: string | null
          created_at: string | null
          crm: string
          full_name: string
          id: string
          specialization: string
          uf: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          contact?: string | null
          created_at?: string | null
          crm: string
          full_name: string
          id?: string
          specialization: string
          uf: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          contact?: string | null
          created_at?: string | null
          crm?: string
          full_name?: string
          id?: string
          specialization?: string
          uf?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      medications: {
        Row: {
          active: boolean | null
          category: string | null
          concentration: string | null
          created_at: string | null
          form: string | null
          generic_name: string | null
          id: string
          laboratory: string | null
          name: string
        }
        Insert: {
          active?: boolean | null
          category?: string | null
          concentration?: string | null
          created_at?: string | null
          form?: string | null
          generic_name?: string | null
          id?: string
          laboratory?: string | null
          name: string
        }
        Update: {
          active?: boolean | null
          category?: string | null
          concentration?: string | null
          created_at?: string | null
          form?: string | null
          generic_name?: string | null
          id?: string
          laboratory?: string | null
          name?: string
        }
        Relationships: []
      }
      patients: {
        Row: {
          address: string | null
          birth_date: string
          contact: string | null
          cpf: string
          created_at: string | null
          full_name: string
          id: string
          mother_name: string | null
          neighborhood: string | null
          observations: string | null
          sus_card: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          birth_date: string
          contact?: string | null
          cpf: string
          created_at?: string | null
          full_name: string
          id?: string
          mother_name?: string | null
          neighborhood?: string | null
          observations?: string | null
          sus_card?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          birth_date?: string
          contact?: string | null
          cpf?: string
          created_at?: string | null
          full_name?: string
          id?: string
          mother_name?: string | null
          neighborhood?: string | null
          observations?: string | null
          sus_card?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      prescription_medications: {
        Row: {
          created_at: string | null
          dosage: string
          duration: string
          frequency: string
          id: string
          instructions: string | null
          medication_id: string
          prescription_id: string
          quantity: string
        }
        Insert: {
          created_at?: string | null
          dosage: string
          duration: string
          frequency: string
          id?: string
          instructions?: string | null
          medication_id: string
          prescription_id: string
          quantity: string
        }
        Update: {
          created_at?: string | null
          dosage?: string
          duration?: string
          frequency?: string
          id?: string
          instructions?: string | null
          medication_id?: string
          prescription_id?: string
          quantity?: string
        }
        Relationships: [
          {
            foreignKeyName: "prescription_medications_medication_id_fkey"
            columns: ["medication_id"]
            isOneToOne: false
            referencedRelation: "medications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescription_medications_prescription_id_fkey"
            columns: ["prescription_id"]
            isOneToOne: false
            referencedRelation: "prescriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      prescriptions: {
        Row: {
          created_at: string | null
          created_by: string
          dispensed_at: string | null
          dispensed_by: string | null
          doctor_id: string
          expiry_date: string
          id: string
          observations: string | null
          patient_id: string
          prescription_date: string
          status: string | null
          validation_code: string
        }
        Insert: {
          created_at?: string | null
          created_by: string
          dispensed_at?: string | null
          dispensed_by?: string | null
          doctor_id: string
          expiry_date: string
          id?: string
          observations?: string | null
          patient_id: string
          prescription_date?: string
          status?: string | null
          validation_code: string
        }
        Update: {
          created_at?: string | null
          created_by?: string
          dispensed_at?: string | null
          dispensed_by?: string | null
          doctor_id?: string
          expiry_date?: string
          id?: string
          observations?: string | null
          patient_id?: string
          prescription_date?: string
          status?: string | null
          validation_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "prescriptions_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "doctors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescriptions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          created_at: string | null
          first_login: boolean | null
          full_name: string
          id: string
          role: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          first_login?: boolean | null
          full_name: string
          id?: string
          role: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          first_login?: boolean | null
          full_name?: string
          id?: string
          role?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_validation_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
