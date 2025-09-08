import HeroSection from "@/Component/YachtDetail/hero";
import { generateYachtMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return generateYachtMetadata(slug, 'bareboat');
}

export default async function YachtDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div>
      <HeroSection slug={slug} />
    </div>
  );
}
