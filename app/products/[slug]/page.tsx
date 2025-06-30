import { getProductBySlug, getSimilarProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  ShoppingCart,
  Heart,
  TruckIcon,
  Shield,
  Award,
  ThumbsUp,
} from "lucide-react";
import { ProductListing } from "@/components/product-listing";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const similarProducts = getSimilarProducts(product.category, product.id);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Product Image */}
          <div className="lg:col-span-5 sticky top-24 self-start">
            <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-muted p-6">
              <div className="relative h-[400px] w-full mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
                {product.discount > 0 && (
                  <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
                    {product.discount}% OFF
                  </Badge>
                )}
              </div>
              
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {/* Breadcrumbs */}
              <div className="flex text-sm text-muted-foreground">
                <span>Supplements</span>
                <span className="mx-2">/</span>
                <span className="capitalize">
                  {product.category.replace("-", " ")}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl font-bold">{product.name}</h1>

              {/* Ratings */}
              <div className="flex items-center">
                <Badge
                  variant="outline"
                  className="mr-2 bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                  {product.rating} ★
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {product.reviewCount} ratings & reviews
                </span>
              </div>

              {/* Price */}
              <div className="space-y-1">
                <div className="flex items-center">
                  <span className="text-3xl font-bold mr-3">
                    ₹{product.discountedPrice}
                  </span>
                  {product.discount > 0 && (
                    <>
                      <span className="text-lg text-muted-foreground line-through mr-3">
                        ₹{product.price}
                      </span>
                      <Badge className="bg-red-500 hover:bg-red-600">
                        {product.discount}% OFF
                      </Badge>
                    </>
                  )}
                </div>
                <p className="text-green-600 dark:text-green-400 text-sm">
                  Free delivery
                </p>
              </div>

              {/* Offers */}
              <Card className="p-4 border-dashed">
                <h3 className="font-medium mb-2">Available Offers</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Badge className="mr-2 mt-0.5 h-4 w-4 p-0 flex items-center justify-center bg-green-500">
                      %
                    </Badge>
                    <span>
                      10% off on HDFC Bank Credit Card, up to ₹500. On orders of
                      ₹2000 and above
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 mt-0.5 h-4 w-4 p-0 flex items-center justify-center bg-green-500">
                      %
                    </Badge>
                    <span>5% Cashback on Fitness Wallet</span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mr-2 mt-0.5 h-4 w-4 p-0 flex items-center justify-center bg-green-500">
                      %
                    </Badge>
                    <span>Buy 2 supplements, get 10% off on both</span>
                  </li>
                </ul>
              </Card>

              {/* Delivery */}
              <div className="space-y-3">
                <h3 className="font-medium">Delivery Options</h3>
                <div className="flex items-center">
                  <TruckIcon className="h-5 w-5 mr-2 text-muted-foreground" />
                  <span>Delivery by 2-3 business days</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h3 className="font-medium">Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <Tabs
                defaultValue="description"
                className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specifications">
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="description"
                  className="pt-4">
                  <div className="space-y-4">
                    <p>{product.description}</p>
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        <span className="text-sm">100% Authentic Products</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 mr-2 text-primary" />
                        <span className="text-sm">Quality Tested</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value="specifications"
                  className="pt-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="flex flex-col">
                          <span className="text-sm text-muted-foreground">
                            {spec.name}
                          </span>
                          <span className="font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value="reviews"
                  className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center mr-4">
                        <span className="text-3xl font-bold mr-2">
                          {product.rating}
                        </span>
                        <div className="flex flex-col">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? "fill-yellow-500 text-yellow-500"
                                    : "fill-transparent text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {product.reviewCount} reviews
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Customer reviews will appear here. Currently showing
                      product rating summary.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
            <ProductListing products={similarProducts} />
          </div>
        )}
      </div>
    </div>
  );
}
