export default function IntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-primary">Інтеграція онлайн-запису</h1>
      <p className="text-xl text-slate-300 mb-8">Перетворіть ваш сайт на цілодобового адміністратора.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="bg-slate-900 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Altegio / YCLIENTS</h3>
          <p className="text-slate-400 text-sm mb-4">Найпопулярніші CRM для барбершопів. Ми налаштуємо віджети, кнопки та кастомні форми запису.</p>
          <ul className="text-primary text-sm font-semibold">
            <li>+ Синхронізація бази клієнтів</li>
            <li>+ Push-сповіщення майстрам</li>
          </ul>
        </div>
        <div className="bg-slate-900 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Custom Solutions</h3>
          <p className="text-slate-400 text-sm mb-4">Розробляємо індивідуальні системи запису, якщо ви не хочете платити абонплату за сторонні сервіси.</p>
          <ul className="text-primary text-sm font-semibold">
            <li>+ Без комісії</li>
            <li>+ Власний Telegram-бот</li>
          </ul>
        </div>
      </div>
    </div>
  );
}