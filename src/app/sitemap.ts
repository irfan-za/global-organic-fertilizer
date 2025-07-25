"use server";

import { products } from "@/constants";

// export const runtime = "edge";
export default async function sitemap() {
  const product_urls = products?.map((product) => {
    return {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });
  return [
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...(product_urls || []),
  ];
}
