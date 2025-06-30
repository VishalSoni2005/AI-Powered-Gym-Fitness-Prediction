import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductListingProps {
  products: Product[];
}

export function ProductListing({ products }: ProductListingProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          href={`/products/${product.slug}`}
          key={product.id}>
          <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-muted hover:border-muted-foreground/20">
            <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
                  {product.discount}% OFF
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex items-center mb-1">
                <div className="flex items-center text-yellow-500 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-500" : "fill-transparent"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviewCount})
                </span>
              </div>
              <h3 className="font-medium text-base line-clamp-2 h-12 mb-1">
                {product.name}
              </h3>
              <div className="flex items-center mb-2">
                <span className="font-bold text-lg mr-2">
                  ₹{product.discountedPrice}
                </span>
                {product.discount > 0 && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.price}
                  </span>
                )}
              </div>
              <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Free Delivery
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
