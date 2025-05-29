import { useFetch } from "../../hooks/useFetch";
import { ProductCardProps } from "../../types";
import ProductCard from "../../components/ProductCard";

function Home() {
  const {
    data: products,
    loading,
    error,
  } = useFetch<ProductCardProps[]>("products");

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!products) {
    return <div>No hay productos</div>;
  }

  return (
    <main>
      <section className="new-arrivals">
        <h2 className="prueba">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product: ProductCardProps) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;