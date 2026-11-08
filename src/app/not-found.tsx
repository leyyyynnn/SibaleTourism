import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="contours flex min-h-[80vh] items-center bg-pine-950 pt-24 text-white">
      <div className="container-site">
        <p className="eyebrow text-lime-300">404</p>
        <h1 className="display mt-4 max-w-2xl text-5xl sm:text-6xl">This shore isn&rsquo;t on our map</h1>
        <p className="mt-5 max-w-lg text-lg text-white/75">The page you were looking for doesn&rsquo;t exist or has moved.</p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
          <ButtonLink size="compact" href="/">Back to home</ButtonLink>
          <ButtonLink size="compact" href="/destinations" variant="ghost-light">
            Browse destinations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
