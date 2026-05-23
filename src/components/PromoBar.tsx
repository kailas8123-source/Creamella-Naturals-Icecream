import { Sparkles } from 'lucide-react';

export default function PromoBar() {
  return (
    <div className="promo-bar fixed left-0 right-0 top-0 z-[110] flex items-center justify-center gap-2 px-4 py-2 text-center">
      <Sparkles size={15} aria-hidden="true" />
      <span className="font-label text-xs uppercase">Launch treat: Buy 2 cups, get toppings on us</span>
    </div>
  );
}
