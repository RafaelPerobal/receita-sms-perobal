
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Auth pages
import Login from "./pages/Login";
import TrocarSenha from "./pages/TrocarSenha";
import AcessoNegado from "./pages/AcessoNegado";

// Protected pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Patients from "./pages/Patients";
import Medicines from "./pages/Medicines";
import Doctors from "./pages/Doctors";
import Prescriptions from "./pages/Prescriptions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/trocar-senha" element={<TrocarSenha />} />
            <Route path="/acesso-negado" element={<AcessoNegado />} />
            
            {/* Protected routes */}
            <Route path="/" element={<Navigate to="/pacientes" replace />} />
            <Route path="/pacientes" element={
              <ProtectedRoute>
                <Patients />
              </ProtectedRoute>
            } />
            <Route path="/medicines" element={
              <ProtectedRoute>
                <Medicines />
              </ProtectedRoute>
            } />
            <Route path="/doctors" element={
              <ProtectedRoute>
                <Doctors />
              </ProtectedRoute>
            } />
            <Route path="/prescriptions" element={
              <ProtectedRoute>
                <Prescriptions />
              </ProtectedRoute>
            } />
            
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
