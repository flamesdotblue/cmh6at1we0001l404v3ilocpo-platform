import { ShoppingCart, Home, User } from "lucide-react";

export default function Navbar({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white font-semibold">S</span>
          <div className="leading-tight">
            <div className="font-semibold text-lg">SareeSaaz</div>
            <div className="text-xs text-neutral-500">Elegance in every drape</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="inline-flex items-center gap-2 hover:text-rose-600 transition-colors">
            <Home className="h-4 w-4" /> Home
          </a>
          <a href="#products" className="hover:text-rose-600 transition-colors">Shop</a>
          <a href="#collections" className="hover:text-rose-600 transition-colors">Collections</a>
          <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Account"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:border-rose-300 transition-colors"
          >
            <User className="h-5 w-5" />
          </button>
          <a
            href="#products"
            className="relative inline-flex items-center gap-2 rounded-full bg-rose-600 text-white px-4 py-2 text-sm font-medium hover:bg-rose-700 transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
            <span className="ml-1 inline-flex items-center justify-center rounded-full bg-white/20 px-2 py-0.5 text-xs">
              {cartCount}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
