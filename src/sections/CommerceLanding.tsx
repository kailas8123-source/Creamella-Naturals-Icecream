import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShoppingBag, Star } from 'lucide-react';

const categories = ['All Treats', 'Cups', 'Cones', 'Family Tubs', 'Fruit Bars', 'Party Packs'];

const products = [
  {
    image: '/brand/creamella-cup.svg',
    badge: 'Bestseller',
    skin: 'All sweet moods',
    title: 'Strawberry Cloud Cup',
    size: '120 ml',
    deal: 'Buy 2 @ 199',
    price: '₹99',
    oldPrice: '₹129',
  },
  {
    image: '/brand/creamella-cone.svg',
    badge: 'Top Pick',
    skin: 'Crunch lovers',
    title: 'Vanilla Berry Cone',
    size: '90 ml',
    deal: 'Free dip topping',
    price: '₹89',
    oldPrice: '₹110',
  },
  {
    image: '/brand/creamella-tub.svg',
    badge: 'Family',
    skin: 'Sharing size',
    title: 'Mango Custard Tub',
    size: '500 ml',
    deal: 'Flat 20% off',
    price: '₹299',
    oldPrice: '₹379',
  },
  {
    image: '/brand/creamella-bars.svg',
    badge: 'Just In',
    skin: 'Fruit chill',
    title: 'Berry Lime Fruit Bars',
    size: 'Pack of 4',
    deal: 'Launch combo',
    price: '₹189',
    oldPrice: '₹240',
  },
];

const cravings = [
  { title: 'Berry Bright', tone: 'Strawberry, raspberry, fresh fruit swirls' },
  { title: 'Creamy Classic', tone: 'Vanilla, milk, soft custard, cone crunch' },
  { title: 'Sunny Mango', tone: 'Mango pulp, custard base, family tubs' },
  { title: 'After-Dinner Chill', tone: 'Chocolate dips, bars, late-night scoops' },
];

export default function CommerceLanding() {
  const scopeRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.commerce-rise',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.08, ease: 'power2.out' }
      );
      gsap.to('.hero-sundae', {
        y: -18,
        rotate: 1.5,
        duration: 4.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={scopeRef} className="commerce-home relative overflow-hidden">
      <div className="commerce-shell mx-auto w-full max-w-7xl px-5 pt-36 md:px-8">
        <div className="category-rail commerce-rise glass-panel">
          {categories.map((item) => (
            <a key={item} href="#products">
              {item}
            </a>
          ))}
        </div>

        <div className="commerce-hero mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="commerce-copy commerce-rise glass-panel">
            <p className="offer-kicker font-label text-xs uppercase">Buy 2 products, get 1 topping free</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[0.92] text-[#171712] md:text-7xl">
              Creamella ice creams, now dressed to delight.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#3C3529] md:text-lg">
              Fresh milk scoops, fruit-bright colors, glossy product cards, and a softer glass UI made for browsing flavors fast.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="shop-primary" href="#products">
                Shop bestsellers
                <ArrowRight size={18} />
              </a>
              <a className="shop-secondary" href="#flavors">
                Pick by craving
              </a>
            </div>
            <div className="offer-clock mt-8 grid grid-cols-3 gap-3">
              {['00 Hours', '44 Minutes', '59 Seconds'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="commerce-art commerce-rise glass-panel">
            <img className="hero-sundae" src="/brand/creamella-hero-sundae.svg" alt="Creamella sundae with colorful scoops" />
            <div className="floating-note">
              <Star size={16} fill="currentColor" />
              4.8 loved by scoop fans
            </div>
          </div>
        </div>

        <div id="products" className="commerce-products commerce-rise mt-8">
          <div className="section-heading">
            <p className="font-label text-xs uppercase text-berry">Bestseller</p>
            <h2 className="font-display text-4xl font-bold text-[#171712] md:text-5xl">Shop the freezer favorites</h2>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article key={product.title} className="commerce-product-card glass-panel">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.title} loading="lazy" decoding="async" />
                  <span>{product.badge}</span>
                </div>
                <div className="p-4">
                  <p className="font-label text-xs uppercase text-lime-dark">{product.skin}</p>
                  <h3 className="mt-2 min-h-14 font-display text-2xl font-bold leading-tight text-[#171712]">{product.title}</h3>
                  <div className="mt-2 flex items-center gap-1 text-[#F7A600]" aria-label="Rated 4.8 out of 5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                    <span className="ml-1 text-xs text-[#3C3529]">(1846)</span>
                  </div>
                  <p className="mt-3 text-sm text-[#3C3529]">{product.size}</p>
                  <p className="mt-3 rounded-full bg-[#FFF3CC] px-3 py-2 text-center font-label text-xs uppercase text-[#171712]">
                    {product.deal}
                  </p>
                  <div className="mt-3 flex items-end justify-between">
                    <p className="font-display text-2xl font-bold text-[#171712]">
                      {product.price} <span className="text-sm text-[#756B5D] line-through">{product.oldPrice}</span>
                    </p>
                    <button type="button" className="cart-dot" aria-label={`Add ${product.title} to cart`}>
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div id="flavors" className="craving-strip commerce-rise mt-10">
          <div className="section-heading">
            <p className="font-label text-xs uppercase text-berry">Shop By Craving</p>
            <h2 className="font-display text-4xl font-bold text-[#171712] md:text-5xl">Choose your scoop mood</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {cravings.map((item) => (
              <a key={item.title} className="craving-card glass-panel" href="#products">
                <span>{item.title}</span>
                <p>{item.tone}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="process-bridge commerce-rise mt-10 mb-14 glass-panel">
          <div>
            <p className="font-label text-xs uppercase text-berry">From freezer to flavor</p>
            <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-[#171712] md:text-5xl">
              See how Creamella becomes scoop-ready.
            </h2>
          </div>
          <a className="shop-primary" href="#process">
            Start the journey
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
