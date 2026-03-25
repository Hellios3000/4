'use client';
import { useCart } from '../../store/useCart';
import LeadForm from '../../components/LeadForm';
import { Trash2 } from 'lucide-react';

export default function CheckoutPage() {
  const { items, total, removeItem } = useCart();

  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-12">Оформлення замовлення</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-xl font-bold mb-6">Ваші товари</h2>
            {items.length === 0 ? (
              <p className="text-slate-500">Кошик порожній</p>
            ) : (
              <div className="space-y-4">
                {items.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex justify-between items-center bg-slate-800 p-4 rounded-xl">
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-primary text-sm">${item.price}</div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-red-500">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                <div className="pt-6 border-t border-slate-700 flex justify-between items-center text-xl font-bold">
                  <span>Разом:</span>
                  <span className="text-primary">${total}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h2 className="text-xl font-bold mb-6">Дані для зв'язку</h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
}