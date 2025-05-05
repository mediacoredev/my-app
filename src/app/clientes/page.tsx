'use client';
import { useEffect, useState } from 'react';

export default function ClientesPage() {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/notion?db=clientes')
      .then((r) => r.json())
      .then(setClientes);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Clientes</h1>
      <ul className="space-y-2">
        {clientes.map((c) => (
          <li key={c.id} className="border p-2 rounded">
            {c.properties.Nombre.title[0]?.plain_text}
          </li>
        ))}
      </ul>
    </div>
  );
}
