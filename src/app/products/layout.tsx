import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Global Organik Fertilizer",
  description:
    "Explore our complete range of organic fertilizers and soil amendments designed to nourish your plants naturally and sustainably.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
