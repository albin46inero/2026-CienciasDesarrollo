'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.querySelectorAll('[role="dialog"]').forEach(m => {
      try { (m as HTMLElement).style.display = 'none'; } catch {}
    });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-foreground mb-4">⚠️ Algo salió mal</h2>
        <p className="text-muted-foreground mb-6 text-sm">{error.message}</p>
        <button
          onClick={() => {
            document.body.style.overflow = 'auto';
            reset();
          }}
          className="px-6 py-3 bg-[var(--color-primario)] text-white rounded-lg hover:opacity-90 transition"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}