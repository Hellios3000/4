'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, { message: 'Введіть ім\'я' }),
  phone: z.string().min(10, { message: 'Введіть коректний телефон' }),
  message: z.string().optional(),
});

export default function LeadForm() {
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    await new Promise(r => setTimeout(r, 1000));
    console.log(data);
    setIsSent(true);
  };

  if (isSent) return (
    <div className="text-center p-10 bg-green-900/20 rounded-xl border border-green-500/30">
      <h3 className="text-xl font-bold text-green-400">Дякуємо!</h3>
      <p>Ми зв'яжемося з вами найближчим часом.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          {...register('name')}
          placeholder="Ваше ім'я"
          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl outline-none focus:border-primary"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>}
      </div>
      <div>
        <input
          {...register('phone')}
          placeholder="Телефон"
          className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl outline-none focus:border-primary"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>}
      </div>
      <button
        disabled={isSubmitting}
        className="w-full bg-primary text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform"
      >
        {isSubmitting ? 'Відправка...' : 'Надіслати запит'}
      </button>
    </form>
  );
}