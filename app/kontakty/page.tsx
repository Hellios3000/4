import LeadForm from '../../components/LeadForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-4xl font-bold mb-8">Зв'яжіться з нами</h1>
          <p className="text-slate-400 mb-12">Ми завжди відкриті до нових проектів та цікавих колаборацій. Напишіть нам сьогодні!</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center"><Phone className="text-primary" /></div>
              <div><div className="text-sm text-slate-500">Телефон</div><div className="font-bold text-lg">+38 (063) 000 00 00</div></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center"><Mail className="text-primary" /></div>
              <div><div className="text-sm text-slate-500">Email</div><div className="font-bold text-lg">hello@barberweb.com.ua</div></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center"><MapPin className="text-primary" /></div>
              <div><div className="text-sm text-slate-500">Локація</div><div className="font-bold text-lg">Київ, Україна</div></div>
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}