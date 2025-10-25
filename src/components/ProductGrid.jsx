import { Star, ShoppingCart } from "lucide-react";

function Rating({ value = 0 }) {
  const rounded = Math.round(value);
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= rounded ? "fill-amber-400" : "fill-transparent"}`}
        />
      ))}
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group rounded-2xl border border-neutral-200/60 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.tag ? (
          <span className="absolute top-3 left-3 text-xs font-medium bg-white/90 text-rose-700 px-2 py-0.5 rounded-full border border-rose-100">
            {product.tag}
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-snug">{product.title}</h3>
            <div className="text-xs text-neutral-500 mt-0.5">{product.category} • {product.color}</div>
          </div>
          <Rating value={product.rating} />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-semibold text-rose-700">₹{product.price.toLocaleString("en-IN")}</div>
          <button
            onClick={() => onAddToCart?.(product)}
            className="inline-flex items-center gap-2 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 px-3 py-2 text-sm font-medium transition-colors"
          >
            <ShoppingCart className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products = [], onAddToCart }) {
  return (
    <section>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Curated Sarees</h2>
          <p className="text-neutral-600 text-sm">Finest weaves from Banaras, Kanchipuram, Bengal and beyond</p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-rose-700 hover:text-rose-800 hidden sm:inline"
        >
          View all
        </a>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-neutral-200 rounded-2xl bg-white">
          <div className="text-lg font-medium">No sarees match your search</div>
          <div className="text-neutral-600 text-sm mt-1">Try a different keyword or category</div>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
}
