'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../store/useCart';
import Link from 'next/link';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { items, total, removeItem } = useCart();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" />
        <Dialog.Content className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-900 p-8 shadow-2xl z-[101] outline-none flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <Dialog.Title className="text-2xl font-bold flex items-center gap-2">
              <ShoppingCart /> Кошик
            </Dialog.Title>
            <Dialog.Close className="p-2 hover:bg-slate-800 rounded-full">
              <X />
            </Dialog.Close>
          </div>

          <div className="flex-grow overflow-y-auto space-y-4">
            {items.length === 0 ? (
              <p className="text-slate-500">Ваш кошик порожній</p>
            ) : (
              items.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="flex justify-between items-center p-4 bg-slate-800 rounded-xl">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-primary">${item.price}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-red-500">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-slate-800">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl">Разом:</span>
              <span className="text-2xl font-bold text-primary">${total}</span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full block text-center py-4 bg-primary text-black font-bold rounded-xl"
            >
              Оформити замовлення
            </Link>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}