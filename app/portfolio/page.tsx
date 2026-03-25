export default function PortfolioPage() {
  const cases = [
    { name: 'Chop-Chop Lviv', type: 'Redesign', link: '#' },
    { name: 'The Blade Barber', type: 'E-commerce', link: '#' },
    { name: 'Brutal Cut Kyiv', type: 'Landing Page', link: '#' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Наші Кейси</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl h-80 bg-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">{c.type}</span>
              <h3 className="text-2xl font-bold">{c.name}</h3>
            </div>
            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 bg-slate-700" />
          </div>
        ))}
      </div>
    </div>
  );
}