'use client';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../store/useCart';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  const links = [
    { name: 'Послуги', href: '/rozrobka-saitu-dlya-barbershopa' },
    { name: 'Шаблони', href: '/shablony' },
    { name: 'Портфоліо', href: '/portfolio' },
    { name: 'Ціни', href: '/tsiny' },
    { name: 'Блог', href: '/blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-white tracking-tighter">
          BARBER<span className="text-primary">WEB</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-semibold hover:text-primary transition-colors">
              {l.name}
            </Link>
          ))}
          <button onClick={() => setIsCartOpen(true)} className="relative p-2 bg-slate-900 rounded-full">
            <ShoppingBag className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>
          <Link href="/kontakty" className="bg-primary text-black px-5 py-2.5 rounded-lg font-bold text-sm">
            Консультація
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
           <button onClick={() => setIsCartOpen(true)} className="relative p-2">
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 p-4 space-y-4 flex flex-col">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="text-lg font-bold">
              {l.name}
            </Link>
          ))}
        </div>
      )}

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}