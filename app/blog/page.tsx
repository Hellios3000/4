import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-12">Блог про маркетинг барбершопів</h1>
      <div className="space-y-12">
        <article className="border-b border-slate-800 pb-12">
          <Link href="/blog/marketing-dlya-barbershopa" className="group">
            <h2 className="text-3xl font-bold group-hover:text-primary transition-colors mb-4">Як збільшити онлайн-записи у 2024 році: повний гід</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Розбираємо основні фішки маркетингу: від оформлення Instagram до SEO оптимізації сайту для локального пошуку в Києві та Львові...
            </p>
            <span className="text-primary font-semibold underline underline-offset-4">Читати далі</span>
          </Link>
        </article>
        {/* Add more articles as needed */}
      </div>
    </div>
  );
}