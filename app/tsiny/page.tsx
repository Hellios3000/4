import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    { name: 'Lite', price: '400', features: ['Landing Page', 'Basic SEO', 'Altegio Widget'] },
    { name: 'Pro', price: '850', features: ['Multi-page Site', 'Advanced SEO', 'Speed Optimization', 'Booking Customization'] },
    { name: 'Ultimate', price: '1500+', features: ['Custom Design', 'Copywriting', 'Marketing Audit', '1 Year Support'] }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-16">Вартість розробки</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p) => (
          <div key={p.name} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col">
            <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
            <div className="text-4xl font-bold text-primary mb-6">від ${p.price}</div>
            <ul className="space-y-4 mb-10 flex-grow">
              {p.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-slate-300">
                  <Check className="text-primary w-5 h-5" /> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl font-bold border border-primary text-primary hover:bg-primary hover:text-black transition-colors">
              Обрати план
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}