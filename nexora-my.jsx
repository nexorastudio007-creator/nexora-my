import React, { useState, useRef } from "react";
import {
  X,
  Minus,
  Plus,
  UploadCloud,
  FileText,
  Check,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Wallet,
  Eye,
  EyeOff,
  LayoutGrid,
  PlusCircle,
  Mail,
  Lock,
  User,
  Store,
  ShoppingCart,
  Instagram,
  Zap,
  TrendingUp,
  Star,
  BadgeCheck,
  ArrowDownToLine,
  Package,
  Users,
  Share2,
  Music2,
  Wallet2,
  BarChart3,
  Receipt,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Tag,
  PackagePlus,
  Layers,
  Heart,
  Bell,
  Link2,
  Copy,
  Gift,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

// ===========================================================================
// COLOR SYSTEM — Cream & Gold (Batik-inspired)
// Base cream surface — #F5EFE3 (warm, not white)
// Card surface       — #FFFDF8 (ivory, lifted off the cream)
// Gold (primary)     — #C9962C  → badges, accents, secondary CTA
// Gold deep          — #8B6914  → icons on light, small text accents
// Batik motif ink    — #B8860B  → pattern only, very low opacity
// Terracotta (action)— #9A3324  → primary CTA, price, "buy/sell" emphasis
// Ink (text)         — #2B2118  → near-black but warm, max readability
// ===========================================================================

const COLORS = {
  cream: "#F5EFE3",
  creamDeep: "#ECE1CB",
  card: "#FFFDF8",
  gold: "#C9962C",
  goldDeep: "#8B6914",
  goldPale: "#E8C97A",
  batikInk: "#B8860B",
  terracotta: "#9A3324",
  terracottaDeep: "#7A2719",
  ink: "#2B2118",
};

// ---------------------------------------------------------------------------
// DATA
// ---------------------------------------------------------------------------

const PRODUCTS = [
  {
    id: "p1",
    creatorId: "c1",
    title: "E-book Strategi Vektor 2D",
    subtitle: "Panduan lengkap ilustrasi vektor",
    price: 39.0,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    badge: "E-BOOK",
    sold: "1.2k terjual",
    rating: 4.9,
  },
  {
    id: "p2",
    creatorId: "c2",
    title: "Masterclass Canva Malaysia",
    subtitle: "Video tutorial 6 jam + template",
    price: 89.0,
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    badge: "KURSUS",
    sold: "856 terjual",
    rating: 5.0,
  },
  {
    id: "p3",
    creatorId: "c3",
    title: "Template Bajet RM",
    subtitle: "Google Sheets — kira automatik",
    price: 19.9,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    badge: "TEMPLATE",
    sold: "2.4k terjual",
    rating: 4.8,
  },
  {
    id: "p4",
    creatorId: "c1",
    title: "Set Lesen Font Premium",
    subtitle: "20 fon untuk kegunaan komersial",
    price: 59.0,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    badge: "ASET",
    sold: "412 terjual",
    rating: 4.7,
  },
  {
    id: "p5",
    creatorId: "c2",
    title: "Panduan Niaga TikTok Shop",
    subtitle: "Strategi & skrip closing 2025",
    price: 49.0,
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=800&auto=format&fit=crop",
    badge: "E-BOOK",
    sold: "1.8k terjual",
    rating: 4.9,
  },
  {
    id: "p6",
    creatorId: "c3",
    title: "Template Resume ATS-Friendly",
    subtitle: "Canva & Word — 12 reka bentuk",
    price: 15.0,
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    badge: "TEMPLATE",
    sold: "3.1k terjual",
    rating: 4.6,
  },
];

// ---------------------------------------------------------------------------
// CREATORS — public profile data
// ---------------------------------------------------------------------------

const CREATORS = {
  c1: {
    id: "c1",
    name: "Aiman Zulkifli",
    handle: "@aimandraws",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    cover: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    bio: "Ilustrator vektor & pereka fon sepenuh masa. Berkongsi panduan praktikal untuk kreator visual Malaysia sejak 2021.",
    verified: true,
    followers: "8.4k",
    totalSales: "1.6k",
    socials: { instagram: "aimandraws", tiktok: "aimandraws" },
  },
  c2: {
    id: "c2",
    name: "Siti Nur Hidayah",
    handle: "@hidayahcreates",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    cover: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    bio: "Jurulatih Canva & strategi kandungan. Membantu peniaga kecil Malaysia nampak lebih profesional dalam talian.",
    verified: true,
    followers: "22.1k",
    totalSales: "2.7k",
    socials: { instagram: "hidayahcreates", tiktok: "hidayahcreates" },
  },
  c3: {
    id: "c3",
    name: "Rajesh Kumar",
    handle: "@rajeshtemplates",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    cover: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    bio: "Pereka template kewangan & produktiviti. Fokus pada alat ringkas yang benar-benar dipakai setiap hari.",
    verified: false,
    followers: "3.9k",
    totalSales: "5.5k",
    socials: { instagram: "rajeshtemplates", tiktok: "" },
  },
};

// ---------------------------------------------------------------------------
// REVIEWS — testimonials per product
// ---------------------------------------------------------------------------

const REVIEWS = {
  p1: [
    { id: "r1", name: "Farah I.", rating: 5, text: "Sangat membantu, contoh langkah demi langkah mudah diikuti walaupun saya baru bermula.", date: "2 minggu lalu" },
    { id: "r2", name: "Hafiz R.", rating: 5, text: "Kandungan padat dan terus ke tujuan, tak banyak filler macam e-book lain.", date: "1 bulan lalu" },
    { id: "r3", name: "Wong L.", rating: 4, text: "Bagus untuk permulaan, harap ada lebih banyak contoh lanjutan pada edisi akan datang.", date: "1 bulan lalu" },
  ],
  p2: [
    { id: "r4", name: "Nurul A.", rating: 5, text: "Video tutorial jelas, terus boleh praktik untuk bisnes kecil saya sendiri.", date: "3 hari lalu" },
    { id: "r5", name: "Danial K.", rating: 5, text: "Worth it sangat, template yang disertakan pun cantik dan boleh terus guna.", date: "2 minggu lalu" },
  ],
  p3: [
    { id: "r6", name: "Mei Ling.", rating: 5, text: "Akhirnya boleh nampak ke mana duit pergi setiap bulan. Sangat mudah digunakan.", date: "5 hari lalu" },
    { id: "r7", name: "Ahmad S.", rating: 4, text: "Simple dan terus pakai. Mungkin boleh tambah lagi kategori belanja.", date: "3 minggu lalu" },
  ],
  p4: [
    { id: "r8", name: "Iris T.", rating: 5, text: "Koleksi fon yang sangat berbaloi untuk kerja klien komersial.", date: "1 minggu lalu" },
  ],
  p5: [
    { id: "r9", name: "Syafiq M.", rating: 5, text: "Skrip closing dalam panduan ini terus naikkan conversion rate kedai saya.", date: "4 hari lalu" },
    { id: "r10", name: "Aina Z.", rating: 5, text: "Sangat praktikal, banyak contoh sebenar bukan teori sahaja.", date: "2 minggu lalu" },
  ],
  p6: [
    { id: "r11", name: "Kevin C.", rating: 4, text: "Template kemas dan professional. Berjaya dipanggil temuduga selepas guna ni.", date: "1 bulan lalu" },
  ],
};

function getProductRating(productId) {
  const list = REVIEWS[productId] || [];
  if (!list.length) return null;
  const avg = list.reduce((s, r) => s + r.rating, 0) / list.length;
  return { avg: Math.round(avg * 10) / 10, count: list.length };
}

// ---------------------------------------------------------------------------
// COUPONS — simple promo code system
// ---------------------------------------------------------------------------

const COUPONS = {
  NEXORA10: { type: "percent", value: 10, label: "10% diskaun" },
  JIMAT5: { type: "flat", value: 5, label: "RM5 diskaun" },
  WELCOME20: { type: "percent", value: 20, label: "20% diskaun pengguna baru" },
};

// ---------------------------------------------------------------------------
// BUNDLES — multi-product packages at a discounted combined price
// ---------------------------------------------------------------------------

const BUNDLES = [
  {
    id: "b1",
    title: "Pakej Kreator Visual",
    subtitle: "E-book Vektor + Set Font Premium",
    productIds: ["p1", "p4"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    bundlePrice: 79.0,
  },
  {
    id: "b2",
    title: "Pakej Niaga Digital",
    subtitle: "Masterclass Canva + Panduan TikTok Shop",
    productIds: ["p2", "p5"],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    bundlePrice: 109.0,
  },
];

function getBundleDetails(bundle) {
  const items = bundle.productIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  const originalPrice = items.reduce((s, p) => s + p.price, 0);
  const savings = originalPrice - bundle.bundlePrice;
  const savingsPct = originalPrice > 0 ? Math.round((savings / originalPrice) * 100) : 0;
  return { items, originalPrice, savings, savingsPct };
}

const TAX_RATE = 0.06;

const fmt = (n) =>
  `RM ${n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// ---------------------------------------------------------------------------
// BATIK PATTERN (SVG, tiled, low-opacity)
// A kawung-inspired geometric motif: interlocking four-petal forms.
// ---------------------------------------------------------------------------

const BATIK_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
  <g fill="none" stroke="${COLORS.batikInk}" stroke-width="1.1">
    <circle cx="35" cy="35" r="16"/>
    <circle cx="35" cy="35" r="6"/>
    <circle cx="105" cy="35" r="16"/>
    <circle cx="105" cy="35" r="6"/>
    <circle cx="35" cy="105" r="16"/>
    <circle cx="35" cy="105" r="6"/>
    <circle cx="105" cy="105" r="16"/>
    <circle cx="105" cy="105" r="6"/>
    <circle cx="70" cy="70" r="20"/>
    <circle cx="70" cy="70" r="8"/>
    <path d="M70 50 L86 70 L70 90 L54 70 Z"/>
    <path d="M35 19 Q45 35 35 51 Q25 35 35 19 Z"/>
    <path d="M19 35 Q35 25 51 35 Q35 45 19 35 Z"/>
    <path d="M105 19 Q115 35 105 51 Q95 35 105 19 Z"/>
    <path d="M89 35 Q105 25 121 35 Q105 45 89 35 Z"/>
    <path d="M35 89 Q45 105 35 121 Q25 105 35 89 Z"/>
    <path d="M19 105 Q35 95 51 105 Q35 115 19 105 Z"/>
    <path d="M105 89 Q115 105 105 121 Q95 105 105 89 Z"/>
    <path d="M89 105 Q105 95 121 105 Q105 115 89 105 Z"/>
  </g>
</svg>
`);

function BatikBackdrop({ opacity = 0.07, tone = "onCream" }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,${BATIK_SVG}")`,
        backgroundSize: "140px 140px",
        opacity,
        mixBlendMode: tone === "onCream" ? "multiply" : "normal",
      }}
    />
  );
}

// ---------------------------------------------------------------------------
// BRAND MARK
// ---------------------------------------------------------------------------

function NexoraMark({ size = 32 }) {
  return (
    <div
      className="relative flex shrink-0 items-center justify-center rounded-xl"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDeep})`,
      }}
    >
      <span className="font-black text-white" style={{ fontSize: size * 0.5, lineHeight: 1 }}>
        N
      </span>
    </div>
  );
}

function NexoraWordmark({ className = "" }) {
  return (
    <span className={`font-black tracking-tight ${className}`} style={{ color: COLORS.ink }}>
      NEXORA
      <span className="font-bold" style={{ color: COLORS.terracotta, fontSize: "0.7em" }}>
        .MY
      </span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// SHARED ATOMS
// ---------------------------------------------------------------------------

function RatingPill({ rating }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11.5px] font-bold ring-1"
      style={{ background: "rgba(255,253,248,0.92)", color: COLORS.ink, "--tw-ring-color": "rgba(0,0,0,0.06)" }}
    >
      <Sparkles size={11} style={{ color: COLORS.gold }} fill={COLORS.gold} />
      {rating}
    </span>
  );
}

function PriceBadge({ price }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1.5 text-[13px] font-bold text-white shadow-md"
      style={{ background: COLORS.terracotta }}
    >
      {fmt(price)}
    </span>
  );
}

function CategoryTag({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide"
      style={{ background: "rgba(201,150,44,0.14)", color: COLORS.goldDeep }}
    >
      {children}
    </span>
  );
}

function TrustBadge({ icon, label, tone = "gold" }) {
  const tones = {
    gold: { bg: "rgba(201,150,44,0.12)", color: COLORS.goldDeep },
    terracotta: { bg: "rgba(154,51,36,0.1)", color: COLORS.terracotta },
    ink: { bg: "rgba(43,33,24,0.06)", color: COLORS.ink },
  };
  const t = tones[tone];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold"
      style={{ background: t.bg, color: t.color }}
    >
      {icon}
      {label}
    </span>
  );
}

function ProductCard({ product, onOpen, onOpenCreator, isSaved, onToggleSave }) {
  const creator = CREATORS[product.creatorId];
  const ratingInfo = getProductRating(product.id);

  return (
    <button
      onClick={() => onOpen(product)}
      className="group relative flex w-full flex-col rounded-3xl p-3 text-left ring-1 transition-all duration-300 ease-out hover:-translate-y-1.5 focus:outline-none"
      style={{
        background: COLORS.card,
        "--tw-ring-color": "rgba(201,150,44,0.18)",
        boxShadow: "0 1px 3px rgba(43,33,24,0.06)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 22px 44px -16px rgba(43,33,24,0.22)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(43,33,24,0.06)")}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl" style={{ background: COLORS.creamDeep }}>
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: `linear-gradient(180deg, transparent 50%, ${COLORS.ink}50 100%)` }}
        />
        <div className="absolute left-3 top-3">
          <CategoryTag>{product.badge}</CategoryTag>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave && onToggleSave(product.id);
          }}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition-transform active:scale-90"
          style={{ background: "rgba(255,253,248,0.92)" }}
          aria-label="Simpan produk"
        >
          <Heart
            size={15}
            style={{ color: isSaved ? COLORS.terracotta : "#B5A684" }}
            fill={isSaved ? COLORS.terracotta : "transparent"}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <PriceBadge price={product.price} />
        </div>
        {ratingInfo && (
          <div className="absolute bottom-3 right-3">
            <RatingPill rating={ratingInfo.avg} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 px-1 pt-4 pb-2">
        <h3 className="text-[15px] font-bold leading-snug" style={{ color: COLORS.ink }}>
          {product.title}
        </h3>
        <p className="text-[13px]" style={{ color: "#8A7D6B" }}>
          {product.subtitle}
        </p>

        {creator && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              onOpenCreator && onOpenCreator(creator.id);
            }}
            className="mt-1.5 inline-flex items-center gap-1.5 self-start text-[12px] font-semibold hover:underline"
            style={{ color: "#9A8B6E" }}
          >
            <img src={creator.avatar} alt={creator.name} className="h-4 w-4 rounded-full object-cover" />
            {creator.name}
            {creator.verified && <BadgeCheck size={12} style={{ color: COLORS.goldDeep }} />}
          </span>
        )}

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[12px] font-medium" style={{ color: "#A89A85" }}>
            {product.sold}
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold text-white shadow-sm transition-transform duration-200 group-hover:scale-105"
            style={{ background: COLORS.ink }}
          >
            Beli
            <ChevronRight size={14} strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </button>
  );
}

function BundleCard({ bundle, onOpen }) {
  const { items, originalPrice, savings, savingsPct } = getBundleDetails(bundle);

  return (
    <button
      onClick={() => onOpen(bundle)}
      className="group relative flex w-full shrink-0 flex-col overflow-hidden rounded-3xl p-5 text-left transition-all duration-300 ease-out hover:-translate-y-1.5 sm:p-6"
      style={{
        width: 300,
        background: `linear-gradient(135deg, ${COLORS.ink}, #3A2E1F)`,
        boxShadow: "0 1px 3px rgba(43,33,24,0.15)",
      }}
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full opacity-20 blur-2xl" style={{ background: COLORS.gold }} />

      <div className="relative flex items-center justify-between">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
          style={{ background: COLORS.terracotta }}
        >
          <PackagePlus size={12} />
          Bundle
        </span>
        <span className="rounded-full px-2.5 py-1 text-[11.5px] font-black text-white" style={{ background: COLORS.gold }}>
          Jimat {savingsPct}%
        </span>
      </div>

      <h3 className="relative mt-4 text-[17px] font-black leading-snug text-white">{bundle.title}</h3>
      <p className="relative mt-1 text-[12.5px] text-white/60">{bundle.subtitle}</p>

      <div className="relative mt-4 flex -space-x-3">
        {items.map((p) => (
          <img
            key={p.id}
            src={p.image}
            alt={p.title}
            className="h-12 w-12 rounded-xl object-cover ring-2"
            style={{ "--tw-ring-color": "#3A2E1F", ringColor: "#3A2E1F" }}
          />
        ))}
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-[11px] font-bold text-white/80 ring-2"
          style={{ background: "rgba(255,255,255,0.08)", "--tw-ring-color": "#3A2E1F" }}
        >
          {items.length} item
        </div>
      </div>

      <div className="relative mt-5 flex items-end justify-between">
        <div>
          <p className="text-[11px] text-white/45 line-through">{fmt(originalPrice)}</p>
          <p className="text-[20px] font-black text-white">{fmt(bundle.bundlePrice)}</p>
        </div>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold transition-transform duration-200 group-hover:scale-105"
          style={{ background: COLORS.gold, color: COLORS.ink }}
        >
          Lihat
          <ChevronRight size={14} strokeWidth={2.5} />
        </span>
      </div>
    </button>
  );
}

function BundleSection({ onOpenBundle }) {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-2">
        <Layers size={16} style={{ color: COLORS.terracotta }} />
        <h2 className="text-[15px] font-black tracking-tight" style={{ color: COLORS.ink }}>
          Jimat Lagi Dengan Bundle
        </h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "thin" }}>
        {BUNDLES.map((b) => (
          <BundleCard key={b.id} bundle={b} onOpen={onOpenBundle} />
        ))}
      </div>
    </div>
  );
}

function ProductGrid({ onOpenProduct, onOpenCreator, onOpenBundle, savedIds, onToggleSave }) {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-5 pb-24 pt-8 sm:px-8">
      <header className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-[13px] font-bold tracking-wide" style={{ color: COLORS.terracotta }}>
            KEDAI DIGITAL
          </p>
          <h1 className="mt-1 text-[26px] font-black tracking-tight sm:text-3xl" style={{ color: COLORS.ink }}>
            Produk Digital Terlaris
          </h1>
        </div>
        <span className="hidden text-[13px] font-medium sm:block" style={{ color: "#A89A85" }}>
          {PRODUCTS.length} item
        </span>
      </header>

      <BundleSection onOpenBundle={onOpenBundle} />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onOpen={onOpenProduct}
            onOpenCreator={onOpenCreator}
            isSaved={savedIds && savedIds.includes(p.id)}
            onToggleSave={onToggleSave}
          />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PRODUCT DETAIL — BOTTOM SHEET
// ---------------------------------------------------------------------------

function PaymentOption({ icon, label, sub, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition-all duration-200"
      style={{
        borderColor: selected ? COLORS.gold : "#E8E0CC",
        background: selected ? "rgba(201,150,44,0.08)" : "transparent",
      }}
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
        style={{ background: selected ? COLORS.gold : "#C2B49A" }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-[14px] font-bold" style={{ color: COLORS.ink }}>{label}</p>
        <p className="text-[12px]" style={{ color: "#8A7D6B" }}>{sub}</p>
      </div>
      <div
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
        style={{ borderColor: selected ? COLORS.gold : "#D9CFB8", background: selected ? COLORS.gold : "transparent" }}
      >
        {selected && <Check size={12} className="text-white" strokeWidth={3} />}
      </div>
    </button>
  );
}

function ProductSheet({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const [payMethod, setPayMethod] = useState("fpx");
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  if (!product) return null;

  const isBundle = Array.isArray(product.productIds);
  const effectiveQty = isBundle ? 1 : qty;
  const unitPrice = isBundle ? product.bundlePrice : product.price;
  const bundleInfo = isBundle ? getBundleDetails(product) : null;

  const subtotal = unitPrice * effectiveQty;
  const discount = appliedCoupon
    ? appliedCoupon.type === "percent"
      ? subtotal * (appliedCoupon.value / 100)
      : Math.min(appliedCoupon.value, subtotal)
    : 0;
  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * TAX_RATE;
  const total = taxableAmount + tax;
  const creator = !isBundle ? CREATORS[product.creatorId] : null;
  const ratingInfo = !isBundle ? getProductRating(product.id) : null;
  const productReviews = !isBundle ? REVIEWS[product.id] || [] : [];

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) return;
    const found = COUPONS[code];
    if (found) {
      setAppliedCoupon({ code, ...found });
      setCouponError("");
    } else {
      setAppliedCoupon(null);
      setCouponError("Kod kupon tidak sah atau telah tamat tempoh.");
    }
  };

  const bullets = isBundle
    ? [
        `Termasuk ${bundleInfo.items.length} produk digital dalam satu pakej`,
        `Jimat ${fmt(bundleInfo.savings)} (${bundleInfo.savingsPct}%) berbanding beli berasingan`,
        "Akses muat turun segera selepas bayaran disahkan",
        "Sokongan pelanggan dalam Bahasa Melayu & Inggeris",
      ]
    : [
        "Akses muat turun segera selepas bayaran disahkan",
        "Format fail digital — sesuai untuk semua peranti",
        "Kemas kini percuma untuk versi akan datang",
        "Sokongan pelanggan dalam Bahasa Melayu & Inggeris",
      ];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        style={{ background: `${COLORS.ink}55` }}
        onClick={onClose}
      />

      <div
        className="relative z-10 flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl shadow-2xl sm:max-h-[88vh] sm:max-w-md sm:rounded-3xl animate-[slideUp_0.3s_cubic-bezier(0.32,0.72,0,1)]"
        style={{ background: COLORS.card }}
      >
        <div className="flex shrink-0 justify-center pt-3 sm:hidden">
          <span className="h-1.5 w-10 rounded-full" style={{ background: "#E8E0CC" }} />
        </div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full shadow-sm ring-1 transition"
          style={{ background: "rgba(255,253,248,0.92)", color: COLORS.ink, "--tw-ring-color": "rgba(0,0,0,0.05)" }}
        >
          <X size={18} />
        </button>

        <div className="flex-1 overflow-y-auto">
          <div className="aspect-[16/9] w-full overflow-hidden sm:rounded-t-3xl" style={{ background: COLORS.creamDeep }}>
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
          </div>

          <div className="px-6 py-6 sm:px-7">
            {isBundle ? (
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
                style={{ background: COLORS.terracotta }}
              >
                <PackagePlus size={11} />
                Bundle Pakej
              </span>
            ) : (
              <CategoryTag>{product.badge}</CategoryTag>
            )}
            <h2 className="mt-3 text-[20px] font-black leading-tight" style={{ color: COLORS.ink }}>
              {product.title}
            </h2>
            <p className="mt-1 text-[14px]" style={{ color: "#8A7D6B" }}>{product.subtitle}</p>

            <div className="mt-3 flex items-center gap-3">
              {creator && (
                <div className="flex items-center gap-2">
                  <img src={creator.avatar} alt={creator.name} className="h-6 w-6 rounded-full object-cover" />
                  <span className="text-[12.5px] font-semibold" style={{ color: "#5C5142" }}>{creator.name}</span>
                  {creator.verified && <BadgeCheck size={13} style={{ color: COLORS.goldDeep }} />}
                </div>
              )}
              {ratingInfo && (
                <div className="flex items-center gap-1 text-[12.5px] font-bold" style={{ color: COLORS.ink }}>
                  <Star size={12} style={{ color: COLORS.gold }} fill={COLORS.gold} />
                  {ratingInfo.avg}
                  <span className="font-medium" style={{ color: "#A89A85" }}>({ratingInfo.count} ulasan)</span>
                </div>
              )}
            </div>

            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[13.5px]" style={{ color: "#5C5142" }}>
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(201,150,44,0.18)" }}
                  >
                    <Check size={12} style={{ color: COLORS.goldDeep }} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {isBundle ? (
              <div className="mt-7">
                <p className="mb-3 text-[13px] font-bold" style={{ color: COLORS.ink }}>
                  Produk Dalam Pakej Ini
                </p>
                <div className="space-y-2.5">
                  {bundleInfo.items.map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 rounded-2xl p-3 ring-1"
                      style={{ background: COLORS.cream, "--tw-ring-color": "rgba(201,150,44,0.1)" }}
                    >
                      <img src={p.image} alt={p.title} className="h-12 w-12 rounded-xl object-cover" />
                      <div className="flex-1">
                        <p className="text-[13px] font-bold" style={{ color: COLORS.ink }}>{p.title}</p>
                        <p className="text-[11.5px]" style={{ color: "#A89A85" }}>{p.subtitle}</p>
                      </div>
                      <span className="text-[12.5px] font-semibold line-through" style={{ color: "#C2B49A" }}>
                        {fmt(p.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="mt-7 flex items-center justify-between rounded-2xl px-4 py-3.5 ring-1"
                style={{ background: COLORS.cream, "--tw-ring-color": "rgba(201,150,44,0.12)" }}
              >
                <span className="text-[14px] font-semibold" style={{ color: COLORS.ink }}>Kuantiti lesen</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full ring-1 transition disabled:opacity-40"
                    style={{ background: COLORS.card, color: "#5C5142", "--tw-ring-color": "rgba(0,0,0,0.08)" }}
                    disabled={qty <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center text-[15px] font-bold" style={{ color: COLORS.ink }}>{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(9, q + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full ring-1 transition"
                    style={{ background: COLORS.card, color: "#5C5142", "--tw-ring-color": "rgba(0,0,0,0.08)" }}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            )}

            <div className="mt-7">
              <p className="mb-3 text-[13px] font-bold" style={{ color: COLORS.ink }}>Kaedah Pembayaran</p>
              <div className="space-y-2.5">
                <PaymentOption
                  icon={<Wallet size={18} />}
                  label="FPX Online Banking"
                  sub="Semua bank utama Malaysia"
                  selected={payMethod === "fpx"}
                  onClick={() => setPayMethod("fpx")}
                />
                <PaymentOption
                  icon={<Zap size={18} />}
                  label="Touch 'n Go eWallet"
                  sub="Bayar terus dari e-dompet anda"
                  selected={payMethod === "tng"}
                  onClick={() => setPayMethod("tng")}
                />
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-[13px] font-bold" style={{ color: COLORS.ink }}>Kod Kupon</p>
              {appliedCoupon ? (
                <div
                  className="flex items-center justify-between rounded-2xl border-2 px-4 py-3"
                  style={{ borderColor: COLORS.gold, background: "rgba(201,150,44,0.08)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full"
                      style={{ background: "rgba(201,150,44,0.2)" }}
                    >
                      <Tag size={14} style={{ color: COLORS.goldDeep }} />
                    </span>
                    <div>
                      <p className="text-[13px] font-bold" style={{ color: COLORS.ink }}>{appliedCoupon.code}</p>
                      <p className="text-[11.5px]" style={{ color: "#8A7D6B" }}>{appliedCoupon.label} digunakan</p>
                    </div>
                  </div>
                  <button
                    onClick={() => { setAppliedCoupon(null); setCouponInput(""); setCouponError(""); }}
                    className="text-[12px] font-bold underline"
                    style={{ color: COLORS.terracotta }}
                  >
                    Buang
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex gap-2.5">
                    <div
                      className="flex flex-1 items-center gap-2 rounded-2xl border-2 px-4 py-2.5"
                      style={{ borderColor: couponError ? COLORS.terracotta : "#E8E0CC" }}
                    >
                      <Tag size={15} style={{ color: "#B5A684" }} />
                      <input
                        type="text"
                        placeholder="cth. NEXORA10"
                        value={couponInput}
                        onChange={(e) => { setCouponInput(e.target.value); setCouponError(""); }}
                        onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                        className="w-full bg-transparent text-[13.5px] uppercase outline-none placeholder:normal-case"
                        style={{ color: COLORS.ink }}
                      />
                    </div>
                    <button
                      onClick={handleApplyCoupon}
                      className="rounded-2xl px-5 text-[13px] font-bold text-white transition active:scale-[0.97]"
                      style={{ background: COLORS.ink }}
                    >
                      Guna
                    </button>
                  </div>
                  {couponError && (
                    <p className="mt-2 text-[12px] font-medium" style={{ color: COLORS.terracotta }}>{couponError}</p>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5 space-y-2.5 rounded-2xl border p-5" style={{ borderColor: "#EDE4CE" }}>
              <div className="flex justify-between text-[13.5px]" style={{ color: "#8A7D6B" }}>
                <span>Subtotal</span>
                <span className="font-medium" style={{ color: "#5C5142" }}>{fmt(subtotal)}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between text-[13.5px]" style={{ color: COLORS.goldDeep }}>
                  <span className="flex items-center gap-1.5">
                    <Tag size={12} />
                    Diskaun ({appliedCoupon.code})
                  </span>
                  <span className="font-medium">-{fmt(discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[13.5px]" style={{ color: "#8A7D6B" }}>
                <span>SST (6%)</span>
                <span className="font-medium" style={{ color: "#5C5142" }}>{fmt(tax)}</span>
              </div>
              <div className="my-2 border-t border-dashed" style={{ borderColor: "#EDE4CE" }} />
              <div className="flex justify-between text-[16px] font-black" style={{ color: COLORS.ink }}>
                <span>Jumlah</span>
                <span style={{ color: COLORS.terracotta }}>{fmt(total)}</span>
              </div>
            </div>

            {productReviews.length > 0 && (
              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-[13px] font-bold" style={{ color: COLORS.ink }}>
                    Ulasan Pembeli
                  </p>
                  {ratingInfo && (
                    <span className="flex items-center gap-1 text-[12.5px] font-bold" style={{ color: COLORS.goldDeep }}>
                      <Star size={12} fill={COLORS.gold} style={{ color: COLORS.gold }} />
                      {ratingInfo.avg} · {ratingInfo.count} ulasan
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  {productReviews.map((r) => (
                    <div key={r.id} className="rounded-2xl p-4" style={{ background: COLORS.cream }}>
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-bold" style={{ color: COLORS.ink }}>{r.name}</span>
                        <span className="text-[11.5px]" style={{ color: "#A89A85" }}>{r.date}</span>
                      </div>
                      <div className="mt-1 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={11}
                            fill={i < r.rating ? COLORS.gold : "transparent"}
                            style={{ color: i < r.rating ? COLORS.gold : "#D9CFB8" }}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "#5C5142" }}>{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="shrink-0 border-t px-6 py-4 backdrop-blur-md sm:px-7" style={{ borderColor: "#EDE4CE", background: "rgba(255,253,248,0.95)" }}>
          <div className="mb-3 flex flex-wrap items-center justify-center gap-1.5">
            <TrustBadge icon={<ShieldCheck size={12} />} label="Jualan Selamat" tone="terracotta" />
            <TrustBadge icon={<Zap size={12} />} label="Akses Segera" tone="gold" />
          </div>
          <button
            className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-[15px] font-bold text-white shadow-lg transition-transform duration-150 active:scale-[0.98]"
            style={{ background: COLORS.terracotta, boxShadow: `0 10px 24px -8px ${COLORS.terracotta}66` }}
          >
            Bayar {fmt(total)}
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
          <p className="mt-2.5 text-center text-[11.5px]" style={{ color: "#A89A85" }}>
            Transaksi disulitkan &amp; selamat
          </p>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// CREATOR PUBLIC PROFILE — the shareable "one link" page
// ---------------------------------------------------------------------------

function CreatorProfile({ creatorId, onBack, onOpenProduct, savedIds, onToggleSave }) {
  const creator = CREATORS[creatorId];
  if (!creator) return null;

  const creatorProducts = PRODUCTS.filter((p) => p.creatorId === creatorId);
  const allReviews = creatorProducts.flatMap((p) => REVIEWS[p.id] || []);
  const avgRating = allReviews.length
    ? Math.round((allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length) * 10) / 10
    : null;

  return (
    <div className="relative min-h-screen w-full" style={{ background: COLORS.cream }}>
      <BatikBackdrop opacity={0.05} />
      <div className="relative z-10 mx-auto w-full max-w-3xl pb-24">
        <button
          onClick={onBack}
          className="absolute left-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full shadow-sm ring-1 transition sm:left-8"
          style={{ background: "rgba(255,253,248,0.92)", color: COLORS.ink, "--tw-ring-color": "rgba(0,0,0,0.06)" }}
        >
          <ArrowRight size={16} className="rotate-180" />
        </button>

        {/* cover */}
        <div className="relative h-40 w-full overflow-hidden sm:h-52" style={{ background: COLORS.creamDeep }}>
          <img src={creator.cover} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 40%, ${COLORS.cream} 100%)` }} />
        </div>

        {/* identity block */}
        <div className="-mt-12 flex flex-col items-center px-5 text-center sm:-mt-14">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="h-24 w-24 rounded-full object-cover shadow-lg ring-4 sm:h-28 sm:w-28"
            style={{ "--tw-ring-color": COLORS.cream, ringColor: COLORS.cream }}
          />
          <div className="mt-3 flex items-center gap-1.5">
            <h1 className="text-[22px] font-black" style={{ color: COLORS.ink }}>{creator.name}</h1>
            {creator.verified && <BadgeCheck size={18} style={{ color: COLORS.goldDeep }} />}
          </div>
          <p className="text-[13.5px] font-medium" style={{ color: "#9A8B6E" }}>{creator.handle}</p>
          <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed" style={{ color: "#5C5142" }}>
            {creator.bio}
          </p>

          {/* stats row */}
          <div className="mt-5 flex items-center gap-6">
            <div className="text-center">
              <p className="text-[16px] font-black" style={{ color: COLORS.ink }}>{creator.followers}</p>
              <p className="text-[11.5px]" style={{ color: "#A89A85" }}>Pengikut</p>
            </div>
            <div className="h-8 w-px" style={{ background: "#EDE0BC" }} />
            <div className="text-center">
              <p className="text-[16px] font-black" style={{ color: COLORS.ink }}>{creator.totalSales}</p>
              <p className="text-[11.5px]" style={{ color: "#A89A85" }}>Jualan</p>
            </div>
            {avgRating && (
              <>
                <div className="h-8 w-px" style={{ background: "#EDE0BC" }} />
                <div className="text-center">
                  <p className="flex items-center justify-center gap-1 text-[16px] font-black" style={{ color: COLORS.ink }}>
                    <Star size={14} fill={COLORS.gold} style={{ color: COLORS.gold }} />
                    {avgRating}
                  </p>
                  <p className="text-[11.5px]" style={{ color: "#A89A85" }}>Penilaian</p>
                </div>
              </>
            )}
          </div>

          {/* socials + share */}
          <div className="mt-5 flex items-center gap-2.5">
            {creator.socials.instagram && (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full ring-1"
                style={{ background: COLORS.card, color: COLORS.goldDeep, "--tw-ring-color": "#EDE0BC" }}
              >
                <Instagram size={16} />
              </span>
            )}
            {creator.socials.tiktok && (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full ring-1"
                style={{ background: COLORS.card, color: COLORS.goldDeep, "--tw-ring-color": "#EDE0BC" }}
              >
                <Music2 size={16} />
              </span>
            )}
            <button
              className="flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[12.5px] font-bold ring-1"
              style={{ background: COLORS.card, color: "#5C5142", "--tw-ring-color": "#EDE0BC" }}
            >
              <Share2 size={13} />
              Kongsi profil
            </button>
          </div>

          {/* trust badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {creator.verified && (
              <TrustBadge icon={<BadgeCheck size={13} />} label="Penjual Disahkan" tone="gold" />
            )}
            <TrustBadge icon={<ShieldCheck size={13} />} label="Jualan Selamat Dijamin" tone="terracotta" />
            <TrustBadge icon={<Zap size={13} />} label="Respon Pantas" tone="ink" />
          </div>
        </div>

        {/* products */}
        <div className="mt-9 px-5 sm:px-8">
          <p className="mb-4 text-[13px] font-bold tracking-wide" style={{ color: COLORS.terracotta }}>
            PRODUK ({creatorProducts.length})
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {creatorProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpen={onOpenProduct}
                onOpenCreator={() => {}}
                isSaved={savedIds && savedIds.includes(p.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
          {creatorProducts.length === 0 && (
            <p className="text-center text-[13.5px]" style={{ color: "#A89A85" }}>
              Belum ada produk disiarkan.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// CREATOR DASHBOARD
// ---------------------------------------------------------------------------

function ToggleRow({ label, sub, checked, onChange, accent = COLORS.ink }) {
  return (
    <div className="flex items-center justify-between py-3.5">
      <div>
        <p className="text-[14px] font-bold" style={{ color: COLORS.ink }}>{label}</p>
        <p className="text-[12.5px]" style={{ color: "#8A7D6B" }}>{sub}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className="relative h-7 w-12 shrink-0 rounded-full transition-colors duration-200"
        style={{ background: checked ? accent : "#E8E0CC" }}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full shadow-sm transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
          style={{ background: COLORS.card }}
        />
      </button>
    </div>
  );
}

function DropZone() {
  const [fileName, setFileName] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    if (files && files[0]) setFileName(files[0].name);
  };

  return (
    <div>
      <label className="mb-2 block text-[13px] font-bold" style={{ color: COLORS.ink }}>
        Fail Produk Digital
      </label>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-colors duration-200"
        style={{
          borderColor: dragOver ? COLORS.terracotta : "#E8E0CC",
          background: dragOver ? "rgba(154,51,36,0.04)" : COLORS.cream,
        }}
      >
        <input ref={inputRef} type="file" className="hidden" onChange={(e) => handleFiles(e.target.files)} />
        {fileName ? (
          <>
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "rgba(201,150,44,0.18)" }}>
              <FileText size={20} style={{ color: COLORS.goldDeep }} />
            </div>
            <div>
              <p className="text-[13.5px] font-bold" style={{ color: COLORS.ink }}>{fileName}</p>
              <p className="text-[12px]" style={{ color: "#A89A85" }}>Klik untuk tukar fail</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "rgba(154,51,36,0.1)" }}>
              <UploadCloud size={20} style={{ color: COLORS.terracotta }} />
            </div>
            <div>
              <p className="text-[13.5px] font-semibold" style={{ color: "#5C5142" }}>Seret &amp; lepas fail di sini</p>
              <p className="mt-0.5 text-[12px]" style={{ color: "#A89A85" }}>PDF, ZIP, MP4 — maksimum 500MB</p>
            </div>
            <span className="mt-1 rounded-full px-4 py-1.5 text-[12.5px] font-bold text-white" style={{ background: COLORS.ink }}>
              Pilih Fail
            </span>
          </>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DASHBOARD — ANALYTICS TAB
// ---------------------------------------------------------------------------

const DASHBOARD_STATS = {
  revenueMonth: 4280.5,
  revenueChangePct: 18,
  salesMonth: 96,
  visitors: 1840,
  conversionPct: 5.2,
  topProducts: [
    { name: "Masterclass Canva Malaysia", sold: 34, revenue: 3026.0 },
    { name: "E-book Strategi Vektor 2D", sold: 28, revenue: 1092.0 },
    { name: "Panduan Niaga TikTok Shop", sold: 21, revenue: 1029.0 },
  ],
  recentSales: [
    { buyer: "Farah I.", product: "E-book Strategi Vektor 2D", amount: 39.0, time: "12 minit lalu" },
    { buyer: "Danial K.", product: "Masterclass Canva Malaysia", amount: 89.0, time: "47 minit lalu" },
    { buyer: "Mei Ling.", product: "Template Bajet RM", amount: 19.9, time: "2 jam lalu" },
  ],
};

function StatCard({ icon, label, value, sub, accent }) {
  return (
    <div className="rounded-2xl p-5 ring-1" style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE" }}>
      <div
        className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
        style={{ background: `${accent}1F`, color: accent }}
      >
        {icon}
      </div>
      <p className="text-[20px] font-black leading-tight" style={{ color: COLORS.ink }}>{value}</p>
      <p className="mt-0.5 text-[12.5px] font-medium" style={{ color: "#8A7D6B" }}>{label}</p>
      {sub && <p className="mt-1.5 text-[11.5px] font-bold" style={{ color: accent }}>{sub}</p>}
    </div>
  );
}

function DashboardAnalytics() {
  const s = DASHBOARD_STATS;
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
        <StatCard
          icon={<Wallet2 size={17} />}
          label="Hasil bulan ini"
          value={fmt(s.revenueMonth)}
          sub={`▲ ${s.revenueChangePct}% dari bulan lepas`}
          accent={COLORS.terracotta}
        />
        <StatCard icon={<Package size={17} />} label="Jualan bulan ini" value={s.salesMonth} accent={COLORS.goldDeep} />
        <StatCard icon={<Users size={17} />} label="Pelawat profil" value={s.visitors.toLocaleString("en-MY")} accent={COLORS.goldDeep} />
        <StatCard icon={<BarChart3 size={17} />} label="Kadar penukaran" value={`${s.conversionPct}%`} accent={COLORS.terracotta} />
      </div>

      <div className="rounded-2xl p-6 ring-1" style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE" }}>
        <p className="mb-4 text-[13.5px] font-bold" style={{ color: COLORS.ink }}>Produk Terlaris</p>
        <div className="space-y-3.5">
          {s.topProducts.map((p, i) => (
            <div key={p.name} className="flex items-center gap-3">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
                style={{ background: i === 0 ? COLORS.gold : COLORS.cream, color: i === 0 ? "white" : "#8A7D6B" }}
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-[13.5px] font-semibold" style={{ color: COLORS.ink }}>{p.name}</p>
                <p className="text-[11.5px]" style={{ color: "#A89A85" }}>{p.sold} terjual</p>
              </div>
              <span className="text-[13.5px] font-bold" style={{ color: COLORS.terracotta }}>{fmt(p.revenue)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-6 ring-1" style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE" }}>
        <p className="mb-4 text-[13.5px] font-bold" style={{ color: COLORS.ink }}>Jualan Terkini</p>
        <div className="space-y-3.5">
          {s.recentSales.map((r, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(45,212,191,0.15)" }}
              >
                <ArrowUpRight size={15} style={{ color: COLORS.goldDeep }} />
              </span>
              <div className="flex-1">
                <p className="text-[13.5px] font-semibold" style={{ color: COLORS.ink }}>
                  {r.buyer} <span className="font-normal" style={{ color: "#8A7D6B" }}>membeli {r.product}</span>
                </p>
                <p className="flex items-center gap-1 text-[11.5px]" style={{ color: "#A89A85" }}>
                  <Clock size={10} /> {r.time}
                </p>
              </div>
              <span className="text-[13.5px] font-bold" style={{ color: COLORS.ink }}>+{fmt(r.amount)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DASHBOARD — WALLET TAB
// ---------------------------------------------------------------------------

const WALLET_DATA = {
  available: 1842.3,
  pending: 612.0,
  totalEarned: 18420.75,
  transactions: [
    { id: "t1", type: "in", label: "Jualan — Masterclass Canva Malaysia", amount: 89.0, date: "25 Jun 2026" },
    { id: "t2", type: "in", label: "Jualan — E-book Strategi Vektor 2D", amount: 39.0, date: "25 Jun 2026" },
    { id: "t3", type: "out", label: "Pengeluaran ke Maybank •••• 4821", amount: -1200.0, date: "20 Jun 2026" },
    { id: "t4", type: "in", label: "Jualan — Template Bajet RM", amount: 19.9, date: "19 Jun 2026" },
  ],
};

function WalletPanel() {
  const w = WALLET_DATA;
  return (
    <div className="space-y-5">
      <div
        className="overflow-hidden rounded-3xl p-7 text-white"
        style={{ background: `linear-gradient(135deg, ${COLORS.terracotta}, ${COLORS.terracottaDeep})` }}
      >
        <p className="text-[12.5px] font-semibold uppercase tracking-wide text-white/70">Baki Tersedia</p>
        <p className="mt-1.5 text-[34px] font-black">{fmt(w.available)}</p>
        <div className="mt-5 flex items-center gap-2 text-[12.5px] text-white/70">
          <Clock size={13} />
          {fmt(w.pending)} dalam proses (tersedia dalam 3 hari)
        </div>
        <button
          className="mt-5 flex items-center gap-2 rounded-2xl px-5 py-3 text-[13.5px] font-bold transition active:scale-[0.98]"
          style={{ background: "white", color: COLORS.terracottaDeep }}
        >
          <ArrowDownToLine size={15} />
          Tarik Duit ke Bank
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        <StatCard icon={<Receipt size={17} />} label="Jumlah pendapatan" value={fmt(w.totalEarned)} accent={COLORS.goldDeep} />
        <StatCard icon={<Wallet2 size={17} />} label="Dalam proses" value={fmt(w.pending)} accent={COLORS.terracotta} />
      </div>

      <div className="rounded-2xl p-6 ring-1" style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE" }}>
        <p className="mb-4 text-[13.5px] font-bold" style={{ color: COLORS.ink }}>Sejarah Transaksi</p>
        <div className="space-y-3.5">
          {w.transactions.map((t) => (
            <div key={t.id} className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: t.type === "in" ? "rgba(45,212,191,0.15)" : "rgba(154,51,36,0.1)" }}
              >
                {t.type === "in" ? (
                  <ArrowUpRight size={15} style={{ color: COLORS.goldDeep }} />
                ) : (
                  <ArrowDownToLine size={15} style={{ color: COLORS.terracotta }} />
                )}
              </span>
              <div className="flex-1">
                <p className="text-[13.5px] font-semibold" style={{ color: COLORS.ink }}>{t.label}</p>
                <p className="text-[11.5px]" style={{ color: "#A89A85" }}>{t.date}</p>
              </div>
              <span className="text-[13.5px] font-bold" style={{ color: t.type === "in" ? COLORS.goldDeep : COLORS.terracotta }}>
                {t.type === "in" ? "+" : ""}{fmt(t.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// NOTIFICATIONS — bell dropdown
// ---------------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: "n1",
    type: "sale",
    icon: <ArrowUpRight size={15} />,
    title: "Jualan baharu!",
    desc: "Farah I. membeli E-book Strategi Vektor 2D",
    time: "12 minit lalu",
    unread: true,
  },
  {
    id: "n2",
    type: "review",
    icon: <Star size={15} />,
    title: "Ulasan baharu",
    desc: "Danial K. memberi penilaian 5 bintang",
    time: "1 jam lalu",
    unread: true,
  },
  {
    id: "n3",
    type: "verified",
    icon: <BadgeCheck size={15} />,
    title: "Permohonan disahkan",
    desc: "Tahniah! Akaun anda kini berlencana Penjual Disahkan",
    time: "3 jam lalu",
    unread: true,
  },
  {
    id: "n4",
    type: "referral",
    icon: <Gift size={15} />,
    title: "Komisen rujukan diterima",
    desc: "Anda menerima RM4.50 daripada rujukan Masterclass Canva",
    time: "Semalam",
    unread: false,
  },
  {
    id: "n5",
    type: "sale",
    icon: <ArrowUpRight size={15} />,
    title: "Jualan baharu!",
    desc: "Mei Ling. membeli Template Bajet RM",
    time: "2 hari lalu",
    unread: false,
  },
];

function notifTone(type) {
  switch (type) {
    case "sale":
      return { bg: "rgba(201,150,44,0.15)", color: COLORS.goldDeep };
    case "review":
      return { bg: "rgba(201,150,44,0.15)", color: COLORS.gold };
    case "verified":
      return { bg: "rgba(201,150,44,0.15)", color: COLORS.goldDeep };
    case "referral":
      return { bg: "rgba(154,51,36,0.1)", color: COLORS.terracotta };
    default:
      return { bg: "rgba(43,33,24,0.06)", color: COLORS.ink };
  }
}

function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(NOTIFICATIONS);
  const unreadCount = items.filter((n) => n.unread).length;

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-9 w-9 items-center justify-center rounded-full ring-1 transition"
        style={{ background: COLORS.card, color: COLORS.ink, "--tw-ring-color": "#EDE0BC" }}
        aria-label="Notifikasi"
      >
        <Bell size={16} />
        {unreadCount > 0 && (
          <span
            className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9.5px] font-black text-white"
            style={{ background: COLORS.terracotta }}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div
            className="absolute right-0 top-12 z-40 w-80 overflow-hidden rounded-2xl shadow-2xl ring-1 sm:w-96"
            style={{ background: COLORS.card, "--tw-ring-color": "#EDE0BC" }}
          >
            <div className="flex items-center justify-between px-4 py-3.5" style={{ borderBottom: "1px solid #F0E8D4" }}>
              <p className="text-[14px] font-black" style={{ color: COLORS.ink }}>Notifikasi</p>
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="text-[11.5px] font-bold"
                  style={{ color: COLORS.goldDeep }}
                >
                  Tandakan semua dibaca
                </button>
              )}
            </div>
            <div className="max-h-96 overflow-y-auto">
              {items.map((n) => {
                const tone = notifTone(n.type);
                return (
                  <div
                    key={n.id}
                    className="flex items-start gap-3 px-4 py-3.5 transition"
                    style={{ background: n.unread ? "rgba(201,150,44,0.05)" : "transparent", borderBottom: "1px solid #F5EFE0" }}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{ background: tone.bg, color: tone.color }}
                    >
                      {n.icon}
                    </span>
                    <div className="flex-1">
                      <p className="text-[13px] font-bold" style={{ color: COLORS.ink }}>{n.title}</p>
                      <p className="text-[12px] leading-snug" style={{ color: "#8A7D6B" }}>{n.desc}</p>
                      <p className="mt-1 text-[11px]" style={{ color: "#B5A684" }}>{n.time}</p>
                    </div>
                    {n.unread && (
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: COLORS.terracotta }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// DASHBOARD — ADD PRODUCT FORM (extracted)
// ---------------------------------------------------------------------------

function AddProductForm() {
  const [showOnProfile, setShowOnProfile] = useState(true);
  const [saveAsDraft, setSaveAsDraft] = useState(false);
  const [price, setPrice] = useState("39.00");

  const categories = [
    { name: "E-book", icon: "📘" },
    { name: "Kursus", icon: "🎓" },
    { name: "Template", icon: "🗂️" },
    { name: "Aset Reka Bentuk", icon: "🎨" },
  ];

  return (
    <div
      className="space-y-5 rounded-3xl p-6 ring-1 sm:p-8"
      style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE", boxShadow: "0 1px 3px rgba(43,33,24,0.05)" }}
    >
      <DropZone />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-[13px] font-bold" style={{ color: COLORS.ink }}>Nama Produk</label>
          <input
            type="text"
            placeholder="cth. E-book Strategi Vektor 2D"
            className="w-full rounded-xl border-2 px-4 py-3 text-[14px] outline-none transition"
            style={{ color: COLORS.ink, borderColor: "#E8E0CC" }}
            onFocus={(e) => (e.target.style.borderColor = COLORS.terracotta)}
            onBlur={(e) => (e.target.style.borderColor = "#E8E0CC")}
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-bold" style={{ color: COLORS.ink }}>Harga Jualan</label>
          <div className="flex items-stretch overflow-hidden rounded-xl border-2" style={{ borderColor: "#E8E0CC" }}>
            <span className="flex items-center px-4 text-[14px] font-bold" style={{ background: "rgba(154,51,36,0.08)", color: COLORS.terracottaDeep }}>
              RM
            </span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-3 text-[14px] outline-none"
              style={{ color: COLORS.ink }}
              placeholder="0.00"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-[13px] font-bold" style={{ color: COLORS.ink }}>Kategori</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className="rounded-full px-4 py-2 text-[13px] font-semibold transition"
              style={i === 0 ? { background: COLORS.ink, color: "white" } : { background: COLORS.cream, color: "#8A7D6B" }}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-[13px] font-bold" style={{ color: COLORS.ink }}>Penerangan</label>
        <textarea
          rows={4}
          placeholder="Terangkan apa yang pembeli akan dapat..."
          className="w-full resize-none rounded-xl border-2 px-4 py-3 text-[14px] outline-none transition"
          style={{ color: COLORS.ink, borderColor: "#E8E0CC" }}
          onFocus={(e) => (e.target.style.borderColor = COLORS.terracotta)}
          onBlur={(e) => (e.target.style.borderColor = "#E8E0CC")}
        />
      </div>

      <div className="border-t pt-2" style={{ borderColor: "#F0E8D4" }}>
        <ToggleRow
          label="Paparkan di Profil"
          sub="Produk ini akan kelihatan kepada orang awam"
          checked={showOnProfile}
          accent={COLORS.goldDeep}
          onChange={(v) => { setShowOnProfile(v); if (v) setSaveAsDraft(false); }}
        />
        <div className="border-t" style={{ borderColor: "#F5EFE0" }} />
        <ToggleRow
          label="Simpan sebagai Draf"
          sub="Sembunyikan buat sementara, sunting kemudian"
          checked={saveAsDraft}
          accent={COLORS.ink}
          onChange={(v) => { setSaveAsDraft(v); if (v) setShowOnProfile(false); }}
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          className="order-2 flex-1 rounded-2xl border-2 py-3.5 text-[14px] font-bold transition sm:order-1"
          style={{ borderColor: "#E8E0CC", color: "#5C5142" }}
        >
          Pratonton
        </button>
        <button
          className="order-1 flex-1 rounded-2xl py-3.5 text-[14px] font-bold text-white shadow-lg transition-transform active:scale-[0.98] sm:order-2"
          style={{ background: COLORS.terracotta, boxShadow: `0 10px 24px -8px ${COLORS.terracotta}66` }}
        >
          {saveAsDraft ? "Simpan Draf" : "Terbitkan Produk"}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// CREATOR DASHBOARD — tabbed shell
// ---------------------------------------------------------------------------

function VerificationStatusCard({ verified, onApply }) {
  if (verified) {
    return (
      <div
        className="mb-6 flex items-center gap-3 rounded-2xl p-4 ring-1"
        style={{ background: "rgba(201,150,44,0.08)", "--tw-ring-color": "rgba(201,150,44,0.2)" }}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: COLORS.gold }}>
          <BadgeCheck size={18} className="text-white" />
        </span>
        <div className="flex-1">
          <p className="text-[13.5px] font-bold" style={{ color: COLORS.ink }}>Akaun Disahkan</p>
          <p className="text-[12px]" style={{ color: "#8A7D6B" }}>
            Lencana "Penjual Disahkan" anda kelihatan pada semua produk dan profil awam.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="mb-6 flex flex-col gap-3 rounded-2xl p-4 ring-1 sm:flex-row sm:items-center"
      style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE" }}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(43,33,24,0.06)" }}>
        <ShieldCheck size={18} style={{ color: "#9A8B6E" }} />
      </span>
      <div className="flex-1">
        <p className="text-[13.5px] font-bold" style={{ color: COLORS.ink }}>Akaun Belum Disahkan</p>
        <p className="text-[12px]" style={{ color: "#8A7D6B" }}>
          Sahkan akaun anda untuk dapat lencana percaya & tingkatkan kadar penukaran pembeli.
        </p>
      </div>
      <button
        onClick={onApply}
        className="shrink-0 rounded-full px-4 py-2 text-[12.5px] font-bold text-white transition active:scale-[0.97]"
        style={{ background: COLORS.ink }}
      >
        Mohon Disahkan
      </button>
    </div>
  );
}

function CopyLinkButton({ value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[12.5px] font-bold text-white transition active:scale-[0.97]"
      style={{ background: copied ? COLORS.goldDeep : COLORS.ink }}
    >
      {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
      {copied ? "Disalin" : "Salin"}
    </button>
  );
}

const AFFILIATE_DATA = {
  code: "AIMAN15",
  commissionPct: 15,
  clicks: 342,
  conversions: 28,
  earned: 486.7,
  history: [
    { id: "a1", buyer: "Hafiz R.", product: "Masterclass Canva Malaysia", commission: 13.35, date: "26 Jun 2026" },
    { id: "a2", buyer: "Wong L.", product: "Template Bajet RM", commission: 2.99, date: "24 Jun 2026" },
    { id: "a3", buyer: "Nurul A.", product: "E-book Strategi Vektor 2D", commission: 5.85, date: "21 Jun 2026" },
  ],
};

function AffiliatePanel() {
  const a = AFFILIATE_DATA;
  const referralLink = `nexora.my/r/${a.code}`;
  const promotable = PRODUCTS.filter((p) => p.creatorId !== "c1").slice(0, 3);

  return (
    <div className="space-y-5">
      <div
        className="overflow-hidden rounded-3xl p-7 text-white"
        style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDeep})` }}
      >
        <p className="text-[12.5px] font-semibold uppercase tracking-wide text-white/75">Pendapatan Rujukan</p>
        <p className="mt-1.5 text-[34px] font-black">{fmt(a.earned)}</p>
        <p className="mt-1 text-[12.5px] text-white/75">
          Daripada {a.conversions} jualan berjaya · Komisen {a.commissionPct}% setiap jualan
        </p>

        <div className="mt-5 flex items-center gap-2 rounded-xl p-2.5" style={{ background: "rgba(255,255,255,0.15)" }}>
          <Link2 size={15} className="ml-1.5 shrink-0 text-white/80" />
          <span className="flex-1 truncate text-[13px] font-bold">{referralLink}</span>
          <CopyLinkButton value={referralLink} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        <StatCard icon={<Users size={17} />} label="Klik pautan" value={a.clicks.toLocaleString("en-MY")} accent={COLORS.goldDeep} />
        <StatCard icon={<TrendingUp size={17} />} label="Kadar penukaran" value={`${Math.round((a.conversions / a.clicks) * 100)}%`} accent={COLORS.terracotta} />
      </div>

      <div className="rounded-2xl p-6 ring-1" style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE" }}>
        <p className="mb-1.5 text-[13.5px] font-bold" style={{ color: COLORS.ink }}>Promosikan Produk Kreator Lain</p>
        <p className="mb-4 text-[12px]" style={{ color: "#8A7D6B" }}>
          Kongsi produk ini dengan pautan rujukan anda dan dapatkan komisen setiap jualan.
        </p>
        <div className="space-y-3">
          {promotable.map((p) => {
            const creator = CREATORS[p.creatorId];
            return (
              <div key={p.id} className="flex items-center gap-3">
                <img src={p.image} alt={p.title} className="h-12 w-12 rounded-xl object-cover" />
                <div className="flex-1">
                  <p className="text-[13px] font-semibold" style={{ color: COLORS.ink }}>{p.title}</p>
                  <p className="text-[11.5px]" style={{ color: "#A89A85" }}>
                    oleh {creator?.name} · Komisen {fmt(p.price * 0.15)}
                  </p>
                </div>
                <CopyLinkButton value={`nexora.my/${p.id}?ref=${a.code}`} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl p-6 ring-1" style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE" }}>
        <p className="mb-4 text-[13.5px] font-bold" style={{ color: COLORS.ink }}>Sejarah Komisen</p>
        <div className="space-y-3.5">
          {a.history.map((h) => (
            <div key={h.id} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: "rgba(201,150,44,0.15)" }}>
                <Gift size={15} style={{ color: COLORS.goldDeep }} />
              </span>
              <div className="flex-1">
                <p className="text-[13.5px] font-semibold" style={{ color: COLORS.ink }}>
                  {h.buyer} <span className="font-normal" style={{ color: "#8A7D6B" }}>membeli {h.product}</span>
                </p>
                <p className="text-[11.5px]" style={{ color: "#A89A85" }}>{h.date}</p>
              </div>
              <span className="text-[13.5px] font-bold" style={{ color: COLORS.goldDeep }}>+{fmt(h.commission)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CreatorDashboard() {
  const [tab, setTab] = useState("analytics"); // analytics | add | wallet
  const [verified, setVerified] = useState(false);
  const [applying, setApplying] = useState(false);

  const handleApply = () => {
    setApplying(true);
    setTimeout(() => {
      setVerified(true);
      setApplying(false);
    }, 1200);
  };

  const TABS = [
    { id: "analytics", label: "Analitik", icon: <BarChart3 size={14} /> },
    { id: "add", label: "Tambah Produk", icon: <PlusCircle size={14} /> },
    { id: "wallet", label: "Dompet", icon: <Wallet2 size={14} /> },
    { id: "affiliate", label: "Rujukan", icon: <Gift size={14} /> },
  ];

  const titles = {
    analytics: { eyebrow: "DASHBOARD PENJUAL", title: "Prestasi Kedai Anda", sub: "Pantau jualan dan pertumbuhan kedai digital anda di sini." },
    add: { eyebrow: "DASHBOARD PENJUAL", title: "Tambah Produk Baru", sub: "Isi maklumat di bawah untuk menyenaraikan produk digital anda." },
    wallet: { eyebrow: "DASHBOARD PENJUAL", title: "Dompet & Pendapatan", sub: "Urus baki, pengeluaran dan sejarah transaksi anda." },
    affiliate: { eyebrow: "DASHBOARD PENJUAL", title: "Program Rujukan", sub: "Promosikan produk kreator lain dan dapatkan komisen setiap jualan." },
  };

  const t = titles[tab];
  const maxWidth = tab === "add" ? "max-w-2xl" : "max-w-3xl";

  return (
    <div className={`relative mx-auto w-full ${maxWidth} px-5 pb-24 pt-8 sm:px-8`}>
      <header className="mb-6">
        <p className="text-[13px] font-bold tracking-wide" style={{ color: COLORS.goldDeep }}>
          {t.eyebrow}
        </p>
        <h1 className="mt-1 text-[24px] font-black tracking-tight sm:text-[26px]" style={{ color: COLORS.ink }}>
          {t.title}
        </h1>
        <p className="mt-1.5 text-[14px]" style={{ color: "#8A7D6B" }}>{t.sub}</p>
      </header>

      <VerificationStatusCard
        verified={verified}
        onApply={handleApply}
      />
      {applying && (
        <p className="-mt-4 mb-6 text-[12px] font-medium" style={{ color: COLORS.goldDeep }}>
          Permohonan sedang diproses...
        </p>
      )}

      <div className="mb-6 flex gap-1.5 overflow-x-auto rounded-full p-1.5" style={{ background: COLORS.creamDeep, width: "fit-content" }}>
        {TABS.map((tb) => (
          <button
            key={tb.id}
            onClick={() => setTab(tb.id)}
            className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-bold transition"
            style={
              tab === tb.id
                ? { background: COLORS.card, color: COLORS.ink, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }
                : { color: "#9A8B6E" }
            }
          >
            {tb.icon}
            {tb.label}
          </button>
        ))}
      </div>

      {tab === "analytics" && <DashboardAnalytics />}
      {tab === "add" && <AddProductForm />}
      {tab === "wallet" && <WalletPanel />}
      {tab === "affiliate" && <AffiliatePanel />}
    </div>
  );
}

// ---------------------------------------------------------------------------
// LANDING — ROLE PICKER
// ---------------------------------------------------------------------------

function RoleCard({ icon, eyebrow, title, desc, points, accent, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-1 flex-col overflow-hidden rounded-3xl p-7 text-left transition-all duration-500 sm:p-9"
      style={{ minHeight: 330, background: COLORS.card, border: "1px solid #EDE4CE" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 24px 48px -18px ${accent}33`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div
        className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ background: accent }}
      />

      <div
        className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
        style={{ background: accent }}
      >
        {icon}
      </div>

      <p className="relative text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h3 className="relative mt-2 text-[24px] font-black leading-tight sm:text-[26px]" style={{ color: COLORS.ink }}>
        {title}
      </h3>
      <p className="relative mt-2 text-[14px] leading-relaxed" style={{ color: "#8A7D6B" }}>{desc}</p>

      <ul className="relative mt-6 space-y-2.5">
        {points.map((p, i) => (
          <li key={i} className="flex items-center gap-2.5 text-[13px]" style={{ color: "#5C5142" }}>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full" style={{ background: `${accent}22` }}>
              <Check size={9} style={{ color: accent }} strokeWidth={3.5} />
            </span>
            {p}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex items-center gap-2 pt-7 text-[13.5px] font-bold" style={{ color: COLORS.ink }}>
        Teruskan
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" style={{ color: accent }} />
      </div>
    </button>
  );
}

function LandingHero({ onPickRole }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: COLORS.cream }}>
      <BatikBackdrop opacity={0.08} />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{ background: `linear-gradient(180deg, ${COLORS.goldPale}33, transparent)` }}
      />

      <div className="relative z-10 flex min-h-screen flex-col px-5 py-7 sm:px-10 sm:py-9">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <NexoraMark size={34} />
            <NexoraWordmark className="text-[18px]" />
          </div>
          <button
            onClick={() => onPickRole("signin")}
            className="rounded-full border-2 px-4 py-2 text-[13px] font-bold transition"
            style={{ borderColor: "#E0D2A8", color: COLORS.ink }}
          >
            Log Masuk
          </button>
        </div>

        <div className="mx-auto mt-16 w-full max-w-3xl text-center sm:mt-20">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px] font-bold"
            style={{ background: COLORS.card, border: "1px solid #EDE0BC", color: COLORS.goldDeep }}
          >
            <TrendingUp size={13} style={{ color: COLORS.terracotta }} />
            Dibuat untuk kreator &amp; peniaga Malaysia
          </div>
          <h1 className="text-[40px] font-black leading-[1.06] tracking-tight sm:text-[60px]" style={{ color: COLORS.ink }}>
            Satu pautan.
            <br />
            <span style={{ color: COLORS.terracotta }}>Seluruh perniagaan</span> anda.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed sm:text-[17px]" style={{ color: "#6B5E4C" }}>
            Jual e-book, kelas, template atau khidmat — terima FPX dan Touch&nbsp;'n&nbsp;Go
            eWallet, terus dari satu laman yang anda miliki sepenuhnya.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-3xl gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
          <RoleCard
            icon={<ShoppingCart size={24} />}
            eyebrow="Untuk Pembeli"
            title="Saya nak beli"
            desc="Terokai produk digital dari kreator tempatan & bayar dengan selamat."
            points={["Bayaran FPX & TNG eWallet", "Muat turun segera", "Sokongan Bahasa Melayu"]}
            accent={COLORS.goldDeep}
            onClick={() => onPickRole("signup-buyer")}
          />
          <RoleCard
            icon={<Store size={24} />}
            eyebrow="Untuk Penjual"
            title="Saya nak jual"
            desc="Bina kedai digital anda dalam minit, tanpa kemahiran teknikal."
            points={["0% komisen bulan pertama", "Dashboard analitik mudah", "Payout terus ke bank"]}
            accent={COLORS.terracotta}
            onClick={() => onPickRole("signup-seller")}
          />
        </div>

        <p className="mt-10 text-center text-[12.5px]" style={{ color: "#A89A85" }}>
          Dipercayai oleh 12,000+ kreator &amp; peniaga di seluruh Malaysia
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AUTH
// ---------------------------------------------------------------------------

function AuthInput({ icon, type = "text", placeholder, value, onChange, toggle, showToggle }) {
  return (
    <div
      className="flex items-center gap-3 rounded-2xl border-2 px-4 py-3.5 transition"
      style={{ background: COLORS.cream, borderColor: "#EDE0BC" }}
    >
      <span style={{ color: "#B5A684" }}>{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-[14px] outline-none"
        style={{ color: COLORS.ink }}
      />
      {showToggle && (
        <button type="button" onClick={toggle} style={{ color: "#B5A684" }}>
          {showToggle === "hide" ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      )}
    </div>
  );
}

function AuthScreen({ mode, onBack, onSwitchMode, onComplete }) {
  const isSignup = mode === "signup-buyer" || mode === "signup-seller";
  const role = mode === "signup-seller" ? "seller" : "buyer";
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");

  const roleLabel = role === "seller" ? "Penjual" : "Pembeli";
  const roleAccent = role === "seller" ? COLORS.terracotta : COLORS.goldDeep;

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 py-10" style={{ background: COLORS.cream }}>
      <BatikBackdrop opacity={0.08} />

      <div className="relative z-10 w-full max-w-md">
        <button
          onClick={onBack}
          className="mb-7 flex items-center gap-1.5 text-[13px] font-bold transition"
          style={{ color: "#9A8B6E" }}
        >
          <ArrowRight size={14} className="rotate-180" />
          Kembali
        </button>

        <div className="rounded-3xl border-2 p-7 sm:p-9" style={{ background: COLORS.card, borderColor: "#EDE0BC" }}>
          <div className="mb-7 flex items-center gap-3">
            <NexoraMark size={40} />
            <div>
              <NexoraWordmark className="text-[16px]" />
              {isSignup && (
                <div
                  className="mt-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-white"
                  style={{ background: roleAccent }}
                >
                  Akaun {roleLabel}
                </div>
              )}
            </div>
          </div>

          <h2 className="text-[22px] font-black leading-tight" style={{ color: COLORS.ink }}>
            {isSignup ? `Cipta akaun ${roleLabel.toLowerCase()} anda` : "Selamat kembali"}
          </h2>
          <p className="mt-1.5 text-[13.5px]" style={{ color: "#8A7D6B" }}>
            {isSignup ? "Mula dalam masa kurang dari seminit." : "Log masuk untuk teruskan ke kedai digital anda."}
          </p>

          <div className="mt-7 space-y-3">
            {isSignup && (
              <AuthInput icon={<User size={16} />} placeholder="Nama penuh" value={name} onChange={(e) => setName(e.target.value)} />
            )}
            <AuthInput icon={<Mail size={16} />} type="email" placeholder="Alamat e-mel" value={email} onChange={(e) => setEmail(e.target.value)} />
            <AuthInput
              icon={<Lock size={16} />}
              type={showPw ? "text" : "password"}
              placeholder="Kata laluan"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              showToggle={showPw ? "hide" : "show"}
              toggle={() => setShowPw((v) => !v)}
            />
          </div>

          {!isSignup && (
            <div className="mt-3 text-right">
              <button className="text-[12.5px] font-bold" style={{ color: "#9A8B6E" }}>
                Lupa kata laluan?
              </button>
            </div>
          )}

          <button
            onClick={() => onComplete(role)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-[14.5px] font-bold text-white shadow-lg transition-transform active:scale-[0.98]"
            style={{ background: roleAccent, boxShadow: `0 10px 24px -8px ${roleAccent}66` }}
          >
            {isSignup ? "Daftar Sekarang" : "Log Masuk"}
            <ArrowRight size={15} />
          </button>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: "#EDE0BC" }} />
            <span className="text-[11.5px] font-bold" style={{ color: "#B5A684" }}>ATAU</span>
            <div className="h-px flex-1" style={{ background: "#EDE0BC" }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              className="flex items-center justify-center gap-2 rounded-2xl border-2 py-3 text-[13px] font-bold transition"
              style={{ borderColor: "#EDE0BC", color: "#5C5142" }}
            >
              <svg width="16" height="16" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.4 6 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.5 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.4 6 29.5 4 24 4 16.2 4 9.5 8.3 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.4 0 10.2-1.8 13.6-5l-6.3-5.3C29.4 35.4 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.4 39.6 16.1 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.3 5.3C40.9 36.4 44 30.8 44 24c0-1.3-.1-2.7-.4-3.5z" />
              </svg>
              Google
            </button>
            <button
              className="flex items-center justify-center gap-2 rounded-2xl border-2 py-3 text-[13px] font-bold transition"
              style={{ borderColor: "#EDE0BC", color: "#5C5142" }}
            >
              <Instagram size={15} />
              Instagram
            </button>
          </div>

          <p className="mt-7 text-center text-[13px]" style={{ color: "#8A7D6B" }}>
            {isSignup ? "Sudah ada akaun?" : "Belum ada akaun?"}{" "}
            <button
              onClick={() => onSwitchMode(isSignup ? "signin" : `signup-${role}`)}
              className="font-bold underline"
              style={{ color: COLORS.ink }}
            >
              {isSignup ? "Log masuk" : "Daftar"}
            </button>
          </p>
        </div>

        <p className="mt-6 text-center text-[12px] leading-relaxed" style={{ color: "#A89A85" }}>
          Dengan meneruskan, anda bersetuju dengan Terma Perkhidmatan &amp; Polisi Privasi NEXORA.MY
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// WISHLIST — saved products view
// ---------------------------------------------------------------------------

function WishlistView({ savedIds, onOpenProduct, onOpenCreator, onToggleSave, onBrowse }) {
  const savedProducts = PRODUCTS.filter((p) => savedIds.includes(p.id));

  return (
    <div className="relative mx-auto w-full max-w-5xl px-5 pb-24 pt-8 sm:px-8">
      <header className="mb-8">
        <p className="text-[13px] font-bold tracking-wide" style={{ color: COLORS.terracotta }}>
          DISIMPAN
        </p>
        <h1 className="mt-1 text-[26px] font-black tracking-tight sm:text-3xl" style={{ color: COLORS.ink }}>
          Produk Disimpan
        </h1>
        <p className="mt-1.5 text-[14px]" style={{ color: "#8A7D6B" }}>
          Produk yang anda tandakan untuk dibeli kemudian.
        </p>
      </header>

      {savedProducts.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center rounded-3xl py-16 text-center ring-1"
          style={{ background: COLORS.card, "--tw-ring-color": "#EDE4CE" }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "rgba(154,51,36,0.08)" }}>
            <Heart size={22} style={{ color: COLORS.terracotta }} />
          </span>
          <p className="mt-4 text-[15px] font-bold" style={{ color: COLORS.ink }}>Belum ada produk disimpan</p>
          <p className="mt-1 max-w-sm text-[13px]" style={{ color: "#8A7D6B" }}>
            Tekan ikon hati pada mana-mana produk untuk simpan dan beli kemudian.
          </p>
          <button
            onClick={onBrowse}
            className="mt-5 rounded-full px-5 py-2.5 text-[13px] font-bold text-white transition active:scale-[0.97]"
            style={{ background: COLORS.ink }}
          >
            Terokai Kedai
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {savedProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpen={onOpenProduct}
              onOpenCreator={onOpenCreator}
              isSaved={true}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// ROOT APP
// ---------------------------------------------------------------------------

export default function App() {
  const [stage, setStage] = useState("landing"); // landing | auth | app
  const [authMode, setAuthMode] = useState("signin");
  const [view, setView] = useState("grid"); // grid | dashboard | creator-profile | wishlist
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeCreatorId, setActiveCreatorId] = useState(null);
  const [myRole, setMyRole] = useState("buyer");
  const [savedIds, setSavedIds] = useState([]);

  const handlePickRole = (mode) => {
    setAuthMode(mode);
    setStage("auth");
  };

  const handleAuthComplete = (role) => {
    setMyRole(role);
    setView(role === "seller" ? "dashboard" : "grid");
    setStage("app");
  };

  const openCreator = (creatorId) => {
    setActiveCreatorId(creatorId);
    setView("creator-profile");
  };

  const toggleSave = (productId) => {
    setSavedIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen w-full font-sans antialiased" style={{ background: COLORS.cream }}>
      <style>{`
        html, body, #root, #__next {
          background: ${COLORS.cream};
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
        @media (min-width: 640px) {
          @keyframes slideUp { from { transform: translateY(24px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        }
      `}</style>

      {stage === "landing" && <LandingHero onPickRole={handlePickRole} />}

      {stage === "auth" && (
        <AuthScreen
          mode={authMode}
          onBack={() => setStage("landing")}
          onSwitchMode={setAuthMode}
          onComplete={handleAuthComplete}
        />
      )}

      {stage === "app" && (
        <div className="relative min-h-screen w-full" style={{ background: COLORS.cream }}>
          {view !== "creator-profile" && <BatikBackdrop opacity={0.05} />}
          <div className="relative z-10">
            <div
              className="sticky top-0 z-40 border-b backdrop-blur-md"
              style={{ borderColor: "#EDE0BC", background: "rgba(245,239,227,0.88)" }}
            >
              <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
                <button onClick={() => setView("grid")} className="flex items-center gap-2.5">
                  <NexoraMark size={30} />
                  <NexoraWordmark className="text-[15px]" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="flex gap-1 rounded-full p-1" style={{ background: COLORS.creamDeep }}>
                    <button
                      onClick={() => setView("grid")}
                      className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition"
                      style={
                        view === "grid"
                          ? { background: COLORS.card, color: COLORS.ink, boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }
                          : { color: "#A89A85" }
                      }
                    >
                      <LayoutGrid size={14} />
                      <span className="hidden sm:inline">Kedai</span>
                    </button>
                    <button
                      onClick={() => setView("wishlist")}
                      className="relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition"
                      style={
                        view === "wishlist"
                          ? { background: COLORS.card, color: COLORS.ink, boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }
                          : { color: "#A89A85" }
                      }
                    >
                      <Heart size={14} />
                      <span className="hidden sm:inline">Disimpan</span>
                      {savedIds.length > 0 && (
                        <span
                          className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9.5px] font-black text-white"
                          style={{ background: COLORS.terracotta }}
                        >
                          {savedIds.length}
                        </span>
                      )}
                    </button>
                    <button
                      onClick={() => openCreator("c1")}
                      className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition"
                      style={
                        view === "creator-profile"
                          ? { background: COLORS.card, color: COLORS.ink, boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }
                          : { color: "#A89A85" }
                      }
                    >
                      <User size={14} />
                      <span className="hidden sm:inline">Profil Saya</span>
                    </button>
                    <button
                      onClick={() => setView("dashboard")}
                      className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-bold transition"
                      style={
                        view === "dashboard"
                          ? { background: COLORS.card, color: COLORS.ink, boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }
                          : { color: "#A89A85" }
                      }
                    >
                      <PlusCircle size={14} />
                      <span className="hidden sm:inline">Penjual</span>
                    </button>
                  </div>
                  <NotificationBell />
                  <button
                    onClick={() => setStage("landing")}
                    className="text-[12.5px] font-bold transition"
                    style={{ color: "#A89A85" }}
                  >
                    Log keluar
                  </button>
                </div>
              </div>
            </div>

            {view === "grid" && (
              <ProductGrid
                onOpenProduct={setActiveProduct}
                onOpenCreator={openCreator}
                onOpenBundle={setActiveProduct}
                savedIds={savedIds}
                onToggleSave={toggleSave}
              />
            )}
            {view === "dashboard" && <CreatorDashboard />}
            {view === "wishlist" && (
              <WishlistView
                savedIds={savedIds}
                onOpenProduct={setActiveProduct}
                onOpenCreator={openCreator}
                onToggleSave={toggleSave}
                onBrowse={() => setView("grid")}
              />
            )}
            {view === "creator-profile" && (
              <CreatorProfile
                creatorId={activeCreatorId}
                onBack={() => setView("grid")}
                onOpenProduct={setActiveProduct}
                savedIds={savedIds}
                onToggleSave={toggleSave}
              />
            )}
          </div>

          <ProductSheet product={activeProduct} onClose={() => setActiveProduct(null)} />
        </div>
      )}
    </div>
  );
}
