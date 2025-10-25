import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-rose-100 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-white font-semibold">S</span>
            <div className="font-semibold text-lg">SareeSaaz</div>
          </div>
          <p className="mt-3 text-sm text-neutral-600 max-w-sm">
            A boutique for heirloom sarees and contemporary drapes. We partner with weaving communities across India to bring you authentic craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Store</h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="#products" className="hover:text-rose-700">Shop Sarees</a></li>
            <li><a href="#collections" className="hover:text-rose-700">Festive Collection</a></li>
            <li><a href="#" className="hover:text-rose-700">Care & Draping Guide</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai, India</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@sareesaaz.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rose-100 py-4 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} SareeSaaz. All rights reserved.
      </div>
    </footer>
  );
}
