import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Global Organic Fertilizer",
  description:
    "Explore our complete collection showcasing organic fertilizer production, sustainable farming practices, and the positive impact on agriculture worldwide.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
