
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Home } from 'lucide-react';

export default function AcessoNegado() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/pacientes');
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Acesso Negado
            </CardTitle>
            <CardDescription className="text-gray-600">
              Você não tem permissão para acessar esta página
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="p-3 bg-red-50 rounded-md">
            <p className="text-sm text-red-700">
              <strong>Usuário:</strong> {user?.profile?.full_name}
            </p>
            <p className="text-sm text-red-700">
              <strong>Perfil:</strong> {user?.profile?.role}
            </p>
          </div>
          
          <div className="space-y-2">
            <Button 
              onClick={handleGoHome}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Home className="w-4 h-4 mr-2" />
              Ir para Página Inicial
            </Button>
            
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="w-full"
            >
              Fazer Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
