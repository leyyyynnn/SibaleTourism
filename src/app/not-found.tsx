import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="contours flex min-h-[80vh] items-center bg-pine-950 pt-24 text-white">
      <div className="container-site">
        <p className="eyebrow text-lime-300">404</p>
        <h1 className="display mt-4 max-w-2xl text-5xl sm:text-6xl">This shore isn&rsquo;t on our map</h1>
        <p className="mt-5 max-w-lg text-lg text-white/75">The page you were looking for doesn&rsquo;t exist or has moved.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/destinations" variant="ghost-light">
            Browse destinations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
