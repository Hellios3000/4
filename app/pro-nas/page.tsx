export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-12">Ми — експерти у Barber-Tech</h1>
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-800 rounded-2xl h-64"></div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Спеціалізована агенція</h2>
            <p className="text-slate-400">Ми не створюємо сайти для всіх. Ми створюємо їх ТІЛЬКИ для барбершопів. Це дозволяє нам знати всі нюанси бізнесу: від того, як краще відобразити послугу "Борода", до інтеграції складних складських систем.</p>
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-6">Наші цифри:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center"><div className="text-3xl font-bold text-primary">50+</div><div className="text-sm text-slate-500">Проектів</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-primary">5</div><div className="text-sm text-slate-500">Років досвіду</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-primary">100%</div><div className="text-sm text-slate-500">Задоволених</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-primary">24/7</div><div className="text-sm text-slate-500">Підтримка</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}