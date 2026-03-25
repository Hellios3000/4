'use client';
import { useCart } from '../../store/useCart';
import { ShoppingCart, CheckCircle } from 'lucide-react';

const TEMPLATES = [
  { id: 't1', name: 'Brutal Dark', price: 200, features: ['One Page', 'Dark Mode', 'Mobile Friendly'] },
  { id: 't2', name: 'Classic Vintage', price: 250, features: ['Multi Page', 'Retro Icons', 'Altegio Sync'] },
  { id: 't3', name: 'Minimalist White', price: 180, features: ['Modern', 'SEO Ready', 'Fast Loading'] },
];

export default function TemplatesPage() {
  const { addItem, items } = useCart();

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Готові шаблони</h1>
          <p className="text-slate-400">Заощаджуйте час та бюджет, обравши один з наших перевірених дизайнів.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEMPLATES.map((tpl) => (
          <div key={tpl.id} className="card-hover bg-slate-900 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-48 bg-slate-800 flex items-center justify-center">
              <span className="text-slate-600 font-bold uppercase tracking-widest">Preview Coming Soon</span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{tpl.name}</h3>
                <span className="text-primary font-bold">${tpl.price}</span>
              </div>
              <ul className="space-y-2 mb-8 flex-grow">
                {tpl.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle className="w-4 h-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => addItem(tpl)}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-primary hover:text-black py-3 rounded-lg transition-colors font-semibold"
              >
                <ShoppingCart className="w-4 h-4" /> Додати у кошик
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}