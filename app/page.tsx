import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ProductSection from "@/components/ProductSection/ProductSection";
import { products } from "@/data/products";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Product Collection",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        image: product.image,
        category: product.category,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Header />

      <Hero />

      <ProductSection products={products} />
      <Footer />

    </main>
  );
}