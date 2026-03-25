import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-black text-white tracking-tighter mb-6 block">
            BARBER<span className="text-primary">WEB</span>
          </Link>
          <p className="text-slate-500 max-w-sm">
            Ми допомагаємо барбершопам в Україні залучати більше клієнтів через сучасні цифрові інструменти.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6">Навігація</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link href="/rozrobka-saitu-dlya-barbershopa">Розробка</Link></li>
            <li><Link href="/shablony">Шаблони</Link></li>
            <li><Link href="/portfolio">Портфоліо</Link></li>
            <li><Link href="/blog">Блог</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Юридична інформація</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>Публічна оферта</li>
            <li>Політика конфіденційності</li>
            <li><Link href="/kontakty">Контакти</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 text-slate-600 text-sm text-center">
        © {new Date().getFullYear()} BarberWeb Agency. Всі права захищені.
      </div>
    </footer>
  );
}