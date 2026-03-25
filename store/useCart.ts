'use client';
import { create } from 'zustand';

type CartItem = {
  id: string;
  name: string;
  price: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
};

export const useCart = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
      total: state.total + item.price,
    })),
  removeItem: (id) =>
    set((state) => {
      const itemToRemove = state.items.find((i) => i.id === id);
      return {
        items: state.items.filter((i) => i.id !== id),
        total: state.total - (itemToRemove?.price || 0),
      };
    }),
  clearCart: () => set({ items: [], total: 0 }),
}));