"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/constants";

export default function ProductsPage() {
  console.log(products);
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our complete range of organic fertilizers and soil
            amendments designed to nourish your plants naturally and
            sustainably.
          </p>
          <div className="w-24 h-1 bg-green-600 mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full bg-white border-border border hover:shadow-xl transition-all duration-300 flex flex-col">
                <CardHeader className="pb-4">
                  <div className="w-full h-40 flex items-center justify-center mb-4 mx-auto shadow-lg relative rounded-lg overflow-hidden">
                    <Image
                      src={`/images/product/${product.id}.jpg`}
                      alt={product.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/images/gallery/placeholder.jpg";
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                      {product.category}
                    </span>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {product.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex-1">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full"
                  >
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300"
                      asChild
                    >
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you select the perfect
            fertilizer for your specific needs. Contact us for personalized
            recommendations.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <Link href="https://wa.me/62895802778484">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
