import { getServiceSchema } from '../../lib/schema';
import LeadForm from '../../components/LeadForm';

export default function ServicePage() {
  const schema = getServiceSchema(
    "Розробка сайту для барбершопа під ключ",
    "Послуги зі створення професійних сайтів для барбершопів: дизайн, розробка, SEO та інтеграція запису."
  );

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h1 className="text-4xl font-bold mb-8 text-primary">Розробка сайту для барбершопа</h1>
      
      <div className="prose prose-invert max-w-none text-slate-300 gap-8 flex flex-col">
        <p className="text-xl">
          Створення сайту для барбершопа — це не просто картинка в інтернеті. Це інструмент автоматизації,
          який допомагає вашим клієнтам записатися до майстра за 3 кліки.
        </p>
        
        <h2 className="text-2xl font-semibold text-white">Що входить у розробку:</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Прототипування:</strong> Створюємо зручний шлях користувача від головної до кнопки "Записатись".</li>
          <li><strong>Дизайн:</strong> Розробляємо візуальний концепт, що відповідає атмосфері вашого закладу.</li>
          <li><strong>Інтеграція CRM:</strong> Синхронізація розкладу майстрів у реальному часі.</li>
          <li><strong>Швидкість:</strong> Оптимізація зображень та коду для миттєвого завантаження.</li>
        </ul>

        <div className="mt-12 bg-slate-900 p-8 rounded-2xl border border-primary/20">
          <h2 className="text-2xl font-bold mb-6 text-center">Отримати пропозицію</h2>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}