export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  discountedPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviewCount: number;
  description: string;
  highlights: string[];
  specifications: { name: string; value: string }[];
}

import creatine from '/creatine.webp';

const products: Product[] = [
  // Creatine Products
  {
    id: "creatine-1",
    slug: "optimum-nutrition-micronized-creatine",
    name: "Optimum Nutrition Micronized Creatine Monohydrate Powder",
    category: "creatine",
    price: 1299,
    discountedPrice: 999,
    discount: 23,
    image: "/products/c1.jpg",
    rating: 4.7,
    reviewCount: 1245,
    description:
      "Optimum Nutrition's Micronized Creatine Powder supports muscle strength, power, and recovery. Each serving provides 5g of pure creatine monohydrate in its most potent form. Micronized for better absorption and easier mixing, this unflavored powder can be added to any beverage.",
    highlights: [
      "5g of pure creatine monohydrate per serving",
      "Micronized for better absorption",
      "Unflavored - mix with any beverage",
      "Supports muscle strength and power",
      "Enhances recovery between sets",
    ],
    specifications: [
      { name: "Weight", value: "300g (60 servings)" },
      { name: "Type", value: "Micronized Creatine Monohydrate" },
      { name: "Serving Size", value: "5g per serving" },
      { name: "Flavor", value: "Unflavored" },
      { name: "Recommended Use", value: "1 serving daily" },
      { name: "Manufactured In", value: "USA" },
    ],
  },

  {
    id: "creatine-2",
    slug: "muscletech-platinum-creatine",
    name: "MuscleTech Platinum 100% Creatine",
    category: "creatine",
    price: 999,
    discountedPrice: 799,
    discount: 20,
    image: "/products/c2.jpg",
    rating: 4.5,
    reviewCount: 856,
    description:
      "MuscleTech Platinum 100% Creatine delivers ultra-pure micronized creatine monohydrate to help build muscle strength and improve between-set recovery. Each serving provides 5g of HPLC-tested creatine monohydrate with no fillers or additives.",
    highlights: [
      "Ultra-pure HPLC-tested creatine",
      "5g of creatine monohydrate per serving",
      "No fillers or additives",
      "Improves strength and power",
      "Enhances muscle cell volumization",
    ],
    specifications: [
      { name: "Weight", value: "400g (80 servings)" },
      { name: "Type", value: "Micronized Creatine Monohydrate" },
      { name: "Serving Size", value: "5g per serving" },
      { name: "Flavor", value: "Unflavored" },
      { name: "Recommended Use", value: "1 serving daily" },
      { name: "Manufactured In", value: "USA" },
    ],
  },

  {
    id: "creatine-3",
    slug: "myprotein-creatine-monohydrate",
    name: "MyProtein Creatine Monohydrate Powder",
    category: "creatine",
    price: 1499,
    discountedPrice: 1199,
    discount: 20,
    image: "/products/c3.jpg",
    rating: 4.6,
    reviewCount: 723,
    description:
      "MyProtein Creatine Monohydrate is a pure form of creatine that helps improve physical performance during high-intensity exercise. This supplement increases phosphocreatine stores in your muscles, helping to produce more ATP energy and enhancing performance during high-intensity training.",
    highlights: [
      "99% pure creatine monohydrate",
      "Increases physical performance",
      "Promotes muscle growth and strength",
      "Easily mixable powder",
      "Suitable for vegetarians and vegans",
    ],
    specifications: [
      { name: "Weight", value: "500g (100 servings)" },
      { name: "Type", value: "Creatine Monohydrate" },
      { name: "Serving Size", value: "5g per serving" },
      { name: "Flavor", value: "Unflavored" },
      { name: "Recommended Use", value: "1 serving daily" },
      { name: "Manufactured In", value: "UK" },
    ],
  },

  // Whey Protein Products
  {
    id: "whey-1",
    slug: "optimum-nutrition-gold-standard-whey",
    name: "Optimum Nutrition Gold Standard 100% Whey Protein",
    category: "whey-protein",
    price: 3999,
    discountedPrice: 3299,
    discount: 18,
    image: "/products/w1.jpg",
    rating: 4.8,
    reviewCount: 2456,
    description:
      "Optimum Nutrition Gold Standard 100% Whey is the world's best-selling whey protein. Each serving provides 24g of high-quality whey protein primarily from Whey Protein Isolate, which has been filtered for purity. Contains whey protein isolate, concentrate, and peptides for a complete amino acid profile.",
    highlights: [
      "24g of protein per serving",
      "5.5g of naturally occurring BCAAs",
      "4g of glutamine & glutamic acid",
      "Low in fat and sugar",
      "Over 20 delicious flavors available",
    ],
    specifications: [
      { name: "Weight", value: "2 lbs (907g)" },
      { name: "Servings", value: "29 servings" },
      { name: "Protein per Serving", value: "24g" },
      { name: "Flavor", value: "Double Rich Chocolate" },
      {
        name: "Protein Source",
        value: "Whey Protein Isolate, Concentrate, and Peptides",
      },
      { name: "Manufactured In", value: "USA" },
    ],
  },

  {
    id: "whey-2",
    slug: "muscleblaze-whey-protein",
    name: "MuscleBlaze Whey Protein",
    category: "whey-protein",
    price: 2999,
    discountedPrice: 2499,
    discount: 17,
    image: "/products/w2.jpg",
    rating: 4.5,
    reviewCount: 1876,
    description:
      "MuscleBlaze Whey Protein is designed to support muscle recovery and growth. Each serving provides 25g of protein with added digestive enzymes for better absorption. The formula contains whey protein concentrate and isolate for a complete amino acid profile.",
    highlights: [
      "25g of protein per serving",
      "Added digestive enzymes",
      "5.5g of BCAAs per serving",
      "Low in carbs and fat",
      "Made with imported whey",
    ],
    specifications: [
      { name: "Weight", value: "1 kg (2.2 lbs)" },
      { name: "Servings", value: "30 servings" },
      { name: "Protein per Serving", value: "25g" },
      { name: "Flavor", value: "Rich Chocolate" },
      { name: "Protein Source", value: "Whey Protein Concentrate and Isolate" },
      { name: "Manufactured In", value: "India" },
    ],
  },

  {
    id: "whey-3",
    slug: "dymatize-iso100-whey-protein-isolate",
    name: "Dymatize ISO100 Hydrolyzed Whey Protein Isolate",
    category: "whey-protein",
    price: 4499,
    discountedPrice: 3799,
    discount: 16,
    image: "/products/w3.jpg",
    rating: 4.7,
    reviewCount: 1345,
    description:
      "Dymatize ISO100 is one of the most advanced whey protein isolates available. Each serving provides 25g of hydrolyzed 100% whey protein isolate and 5.5g of BCAAs. The protein is filtered using a multi-step purification process that removes excess fat, lactose, and impurities.",
    highlights: [
      "25g of hydrolyzed whey protein isolate",
      "5.5g of BCAAs including 2.7g of Leucine",
      "Less than 1g of sugar and fat per serving",
      "Gluten-free and lactose-free",
      "Fast-absorbing formula",
    ],
    specifications: [
      { name: "Weight", value: "1.6 lbs (725g)" },
      { name: "Servings", value: "25 servings" },
      { name: "Protein per Serving", value: "25g" },
      { name: "Flavor", value: "Gourmet Vanilla" },
      { name: "Protein Source", value: "Hydrolyzed Whey Protein Isolate" },
      { name: "Manufactured In", value: "USA" },
    ],
  },

  // Mass Gainer Products
  {
    id: "mass-1",
    slug: "optimum-nutrition-serious-mass",
    name: "Optimum Nutrition Serious Mass Weight Gainer",
    category: "mass-gainer",
    price: 4999,
    discountedPrice: 3999,
    discount: 20,
    image: "/products/m1.jpg",
    rating: 4.6,
    reviewCount: 1567,
    description:
      "Optimum Nutrition Serious Mass is a complete high-calorie weight gainer designed to help you reach your caloric needs and recover from intense training. Each serving provides 1,250 calories, 50g of protein, 250g of carbohydrates, and 25 vitamins and minerals to support muscle growth and recovery.",
    highlights: [
      "1,250 calories per serving",
      "50g of protein from multiple sources",
      "250g of carbohydrates",
      "Added creatine, glutamine, and glutamic acid",
      "25 vitamins and minerals",
    ],
    specifications: [
      { name: "Weight", value: "6 lbs (2.72 kg)" },
      { name: "Servings", value: "16 servings" },
      { name: "Calories per Serving", value: "1,250" },
      { name: "Flavor", value: "Chocolate" },
      {
        name: "Protein Source",
        value: "Whey Protein Concentrate, Calcium Caseinate, Egg Whites",
      },
      { name: "Manufactured In", value: "USA" },
    ],
  },

  {
    id: "mass-2",
    slug: "muscleblaze-super-gainer-xxl",
    name: "MuscleBlaze Super Gainer XXL",
    category: "mass-gainer",
    price: 3499,
    discountedPrice: 2799,
    discount: 20,
    image: "/products/m2.jpg",
    rating: 4.4,
    reviewCount: 987,
    description:
      "MuscleBlaze Super Gainer XXL is a high-calorie mass gainer designed for hardgainers who struggle to put on weight. Each serving provides 1,000 calories, 30g of protein, and 162g of carbohydrates to support muscle recovery and growth. Contains added digestive enzymes for better nutrient absorption.",
    highlights: [
      "1,000 calories per serving",
      "30g of protein blend",
      "162g of complex carbohydrates",
      "Added digestive enzymes",
      "Low in sugar",
    ],
    specifications: [
      { name: "Weight", value: "3 kg (6.6 lbs)" },
      { name: "Servings", value: "30 servings" },
      { name: "Calories per Serving", value: "1,000" },
      { name: "Flavor", value: "Chocolate" },
      {
        name: "Protein Source",
        value: "Whey Protein Concentrate, Calcium Caseinate",
      },
      { name: "Manufactured In", value: "India" },
    ],
  },

  {
    id: "mass-3",
    slug: "dymatize-super-mass-gainer",
    name: "Dymatize Super Mass Gainer",
    category: "mass-gainer",
    price: 4299,
    discountedPrice: 3599,
    discount: 16,
    image: "/products/m3.jpg",
    rating: 4.5,
    reviewCount: 765,
    description:
      "Dymatize Super Mass Gainer is a scientifically formulated weight-gain formula with added calories from protein and carbohydrates. Each serving provides 1,280 calories, 52g of protein, and 252g of carbohydrates to help you build size and strength. Contains BCAAs and other essential amino acids for muscle support.",
    highlights: [
      "1,280 calories per serving",
      "52g of protein blend",
      "252g of carbohydrates",
      "17g of BCAAs",
      "Added creatine monohydrate",
    ],
    specifications: [
      { name: "Weight", value: "5.4 kg (12 lbs)" },
      { name: "Servings", value: "16 servings" },
      { name: "Calories per Serving", value: "1,280" },
      { name: "Flavor", value: "Rich Chocolate" },
      {
        name: "Protein Source",
        value: "Whey Protein Concentrate, Milk Protein Isolate",
      },
      { name: "Manufactured In", value: "USA" },
    ],
  },

  // Multivitamin Products
  {
    id: "vitamin-1",
    slug: "optimum-nutrition-opti-men",
    name: "Optimum Nutrition Opti-Men Multivitamin",
    category: "multivitamins",
    price: 1999,
    discountedPrice: 1599,
    discount: 20,
    image: "/products/mv1.jpg",
    rating: 4.7,
    reviewCount: 1234,
    description:
      "Optimum Nutrition Opti-Men is a complete multivitamin formulated specifically for active men. Each serving provides 75+ ingredients including essential vitamins, minerals, botanical extracts, and amino acids. Supports overall health, immune function, and performance for active lifestyles.",
    highlights: [
      "75+ ingredients in each tablet",
      "High-potency B vitamins for energy metabolism",
      "Antioxidant vitamins C and E",
      "Amino acid blend",
      "Phyto-nutrient and enzyme blends",
    ],
    specifications: [
      { name: "Count", value: "150 tablets" },
      { name: "Servings", value: "50 servings" },
      { name: "Serving Size", value: "3 tablets daily" },
      { name: "Form", value: "Tablets" },
      { name: "Gender", value: "Men" },
      { name: "Manufactured In", value: "USA" },
    ],
  },

  {
    id: "vitamin-2",
    slug: "muscletech-platinum-multivitamin",
    name: "MuscleTech Platinum 100% Multivitamin",
    category: "multivitamins",
    price: 1499,
    discountedPrice: 1199,
    discount: 20,
    image: "/products/mv2.jpg",
    rating: 4.5,
    reviewCount: 876,
    description:
      "MuscleTech Platinum 100% Multivitamin is a complete formula designed for active men and women. Each serving provides essential vitamins and minerals to support overall health, immune function, and energy metabolism. Contains antioxidants to help combat free radicals produced during exercise.",
    highlights: [
      "Complete vitamin and mineral profile",
      "Added antioxidants",
      "Supports immune function",
      "Enhances energy metabolism",
      "Suitable for men and women",
    ],
    specifications: [
      { name: "Count", value: "90 caplets" },
      { name: "Servings", value: "90 servings" },
      { name: "Serving Size", value: "1 caplet daily" },
      { name: "Form", value: "Caplets" },
      { name: "Gender", value: "Unisex" },
      { name: "Manufactured In", value: "USA" },
    ],
  },

  {
    id: "vitamin-3",
    slug: "now-foods-adam-mens-multivitamin",
    name: "NOW Foods ADAM Men's Multivitamin",
    category: "multivitamins",
    price: 1799,
    discountedPrice: 1499,
    discount: 17,
    image: "/products/mv3.jpg",
    rating: 4.6,
    reviewCount: 654,
    description:
      "NOW Foods ADAM Men's Multivitamin is a comprehensive formula designed to support men's health. Each serving provides essential vitamins, minerals, and herbal extracts including saw palmetto and lycopene for prostate health. Supports immune function, energy production, and overall wellness.",
    highlights: [
      "Complete vitamin and mineral profile",
      "Saw palmetto and lycopene for prostate health",
      "CoQ10 and alpha lipoic acid for energy",
      "Zinc and selenium for immune support",
      "Free from common allergens",
    ],
    specifications: [
      { name: "Count", value: "90 softgels" },
      { name: "Servings", value: "90 servings" },
      { name: "Serving Size", value: "1 softgel daily" },
      { name: "Form", value: "Softgels" },
      { name: "Gender", value: "Men" },
      { name: "Manufactured In", value: "USA" },
    ],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getSimilarProducts(
  category: string,
  excludeId: string
): Product[] {
  return products
    .filter(
      (product) => product.category === category && product.id !== excludeId
    )
    .slice(0, 4);
}
