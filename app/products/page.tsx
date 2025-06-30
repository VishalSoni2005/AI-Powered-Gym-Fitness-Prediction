import { ProductCategories } from "@/components/product-categories";
import { ProductListing } from "@/components/product-listing";
import { getAllProducts } from "@/lib/products";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Premium Supplements</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            High-quality supplements to support your fitness journey and help
            you achieve your goals faster.
          </p>
        </div>

        <ProductCategories />

        <div className="mt-16 space-y-16">
          <section
            id="creatine"
            className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
              Creatine
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Creatine is one of the most researched supplements in the fitness
              industry. It helps increase strength, power, and muscle mass by
              improving ATP production during high-intensity exercise.
            </p>
            <ProductListing
              products={products.filter((p) => p.category === "creatine")}
            />
          </section>

          <section
            id="whey-protein"
            className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
              Whey Protein
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Whey protein is a complete protein containing all essential amino
              acids. It's quickly absorbed by the body, making it ideal for
              post-workout recovery and muscle building.
            </p>
            <ProductListing
              products={products.filter((p) => p.category === "whey-protein")}
            />
          </section>

          <section
            id="mass-gainer"
            className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-red-500 rounded-full mr-3"></span>
              Mass Gainer
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Mass gainers are high-calorie supplements designed to help you
              consume more calories and protein. Perfect for those struggling to
              gain weight or build muscle mass.
            </p>
            <ProductListing
              products={products.filter((p) => p.category === "mass-gainer")}
            />
          </section>

          <section
            id="multivitamins"
            className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-2 h-8 bg-yellow-500 rounded-full mr-3"></span>
              Multivitamins
            </h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Multivitamins help fill nutritional gaps in your diet, supporting
              overall health, immune function, and recovery. Essential for
              active individuals with high nutrient demands.
            </p>
            <ProductListing
              products={products.filter((p) => p.category === "multivitamins")}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
