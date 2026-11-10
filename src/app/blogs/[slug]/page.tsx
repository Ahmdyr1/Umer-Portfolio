import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Tag } from "@/components/ui";
import { posts } from "@/content/posts";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title, description: post?.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const { default: Body } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <main className="shell pt-[clamp(1.5rem,3.3vw,3rem)] pb-[clamp(3rem,6vw,5rem)]">
      <article className="mx-auto max-w-[860px]">
        <Link href="/blogs" className="text-body font-medium text-gray-500 hover:text-brand">
          Back to all posts
        </Link>
        <div className="mt-6">
          <Tag>{post.topic}</Tag>
        </div>
        <h1 className="mt-5 text-h1 leading-[1.1] font-bold text-gray-700">{post.title}</h1>
        <p className="mt-4 text-body text-gray-500">
          {site.name} &middot; {post.date}
        </p>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-card">
          <Image src={post.cover} alt="" fill unoptimized={post.cover.endsWith(".svg")} sizes="(max-width: 860px) 100vw, 860px" className="object-cover" />
        </div>
        <div className="prose-post mt-8">
          <Body />
        </div>
      </article>
    </main>
  );
}
