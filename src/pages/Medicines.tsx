
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pill, Plus } from 'lucide-react';

export default function Medicines() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Medicamentos</h1>
            <p className="text-gray-600">Gerencie o cadastro de medicamentos</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Novo Medicamento
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Pill className="w-5 h-5" />
              <span>Lista de Medicamentos</span>
            </CardTitle>
            <CardDescription>
              Módulo em desenvolvimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <Pill className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                Módulo de medicamentos será implementado em breve
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
