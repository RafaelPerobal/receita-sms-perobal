
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string[];
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/login');
        return;
      }

      // Check if user needs to change password
      if (user.profile?.first_login) {
        navigate('/trocar-senha');
        return;
      }

      // Check role permissions if specified
      if (requiredRole && user.profile && !requiredRole.includes(user.profile.role)) {
        navigate('/acesso-negado');
        return;
      }
    }
  }, [user, loading, navigate, requiredRole]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (user.profile?.first_login) {
    return null;
  }

  return <>{children}</>;
}
