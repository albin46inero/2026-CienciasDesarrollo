// app/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('🚨 Error capturado:', error);
    
    // Forzar limpieza del DOM
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
    
    // Cerrar todos los modales/portales
    const modals = document.querySelectorAll('[role="dialog"], .fixed.inset-0');
    modals.forEach(modal => {
      try {
        (modal as HTMLElement).style.display = 'none';
      } catch (e) {
        // Ignorar
      }
    });
    
    // Limpiar iframes problemáticos
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      try {
        iframe.src = 'about:blank';
      } catch (e) {
        // Ignorar
      }
    });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-md">
        <h2 className="text-2xl font-bold text-foreground mb-4">⚠️ Oops! Algo salió mal</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          {error.message || 'Error desconocido al navegar'}
        </p>
        <button
          onClick={() => {
            document.body.style.overflow = 'auto';
            window.location.href = '/';
          }}
          className="px-6 py-3 bg-[var(--color-primario)] text-white rounded-lg hover:opacity-90 transition font-semibold"
        >
          🏠 Ir al Inicio
        </button>
      </div>
    </div>
  );
}