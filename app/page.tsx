import Link from 'next/link';
import { Scissors, Calendar, Smartphone, Rocket, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-20 px-4 hero-gradient flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl mb-6 leading-tight">
          Професійний сайт для вашого <span className="text-primary">Барбершопа</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mb-10">
          Ми створюємо високоефективні рішення для барберів: від лендінгів до повноцінних систем з онлайн-записом.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/rozrobka-saitu-dlya-barbershopa" className="bg-primary text-black px-8 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform">
            Замовити сайт
          </Link>
          <Link href="/portfolio" className="border border-slate-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-800 transition-colors">
            Наші роботи
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <FeatureCard 
          icon={<Scissors className="w-10 h-10 text-primary" />} 
          title="Унікальний Дизайн" 
          desc="Брутальний або мінімалістичний стиль, що підкреслить ваш бренд."
        />
        <FeatureCard 
          icon={<Calendar className="w-10 h-10 text-primary" />} 
          title="Онлайн-запис" 
          desc="Повна інтеграція з Altegio, YCLIENTS або іншими CRM системами."
        />
        <FeatureCard 
          icon={<Smartphone className="w-10 h-10 text-primary" />} 
          title="Mobile-First" 
          desc="Ідеальне відображення на смартфонах для швидкого запису в дорозі."
        />
        <FeatureCard 
          icon={<Rocket className="w-10 h-10 text-primary" />} 
          title="SEO Оптимізація" 
          desc="Ваш барбершоп буде на перших позиціях у пошуку Google."
        />
      </section>

      {/* CTA Section */}
      <section className="w-full bg-slate-900 py-20 px-4 border-y border-slate-800">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6">Готові масштабувати свій бізнес?</h2>
          <p className="mb-8 text-slate-400">Отримайте безкоштовну консультацію щодо розробки та маркетингу вашого барбершопу.</p>
          <Link href="/kontakty" className="flex items-center gap-2 text-primary font-bold text-xl hover:gap-4 transition-all">
            Обговорити проект <ChevronRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-6 card-hover rounded-xl flex flex-col gap-4">
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-slate-400">{desc}</p>
    </div>
  );
}