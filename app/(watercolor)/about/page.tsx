// app/(watercolor)/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Intro Section */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        {/* Portrait Image */}
        <figure className="group card overflow-hidden">
          <div className="relative aspect-[4/5]">
            <Image
              src="/Diana.jpg"
              alt="Portrait of Catherine"
              fill
              priority
              className="object-cover transition duration-500 group-hover:scale-[1.02] group-hover:contrast-[1.02]"
            />
          </div>
          <figcaption className="px-4 py-3 text-xs text-gray-500 border-t border-gray-200">
            In the studio • watercolor & mixed media
          </figcaption>
        </figure>

        {/* Bio */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold tracking-tight">About Catherine</h1>

          <p className="muted leading-relaxed">
            I’m Catherine, a self-taught artist with over 10 years of experience working in watercolor and mixed
            media. My work focuses on expressive portraiture and botanical elements, created with professional
            materials and careful attention to detail.
          </p>

          <p className="muted leading-relaxed">
            I’m drawn to quiet moments — the way light rests across a face, how color shifts within shadow, or
            how a single stem can carry emotion. Through watercolor, I aim to preserve those fleeting details in
            a way that feels gentle, honest, and lasting.
          </p>

          <p className="muted leading-relaxed">
            Each piece is layered thoughtfully and intentionally, blending softness with depth to create artwork
            that feels both intimate and timeless.
          </p>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Artist Statement</h2>

        <p className="muted leading-relaxed">
          My work is rooted in observation — in slowing down enough to notice how light moves across a surface
          or how emotion lives in small, almost imperceptible gestures. I’m inspired by natural forms, expressive
          faces, and the quiet poetry found in everyday life. Through watercolor and mixed media, I strive to
          create pieces that invite stillness and reflection.
        </p>
      </section>

      {/* Marriage Section */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Life & Inspiration</h2>

          <p className="muted leading-relaxed">
            In 2021, I married my husband, Kory Allison. Our life together has been one of my greatest sources
            of inspiration — built on creativity, encouragement, and shared dreams. His support has allowed me
            to grow not only as an artist, but as a person.
          </p>

          <p className="muted leading-relaxed">
            Much of my work is shaped by the quiet, meaningful rhythms of our life — the small everyday moments
            that often become the most beautiful memories.
          </p>
        </div>

        <figure className="group card overflow-hidden">
          <div className="relative aspect-[4/5]">
            <Image
              src="/koryanddiana01.png"
              alt="Catherine and Kory"
              fill
              className="object-cover transition duration-500 grayscale group-hover:grayscale-0 group-hover:scale-[1.02]"
            />
          </div>
          <figcaption className="px-4 py-3 text-xs text-gray-500 border-t border-gray-200">
            Married in 2021 • the best kind of support system
          </figcaption>
        </figure>
      </section>

      {/* Dog Section */}
      <section className="grid gap-10 md:grid-cols-2 items-center">
        <figure className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm order-2 md:order-1">
          <div className="relative aspect-[4/5]">
            <Image
              src="/tali.png"
              alt="Tali"
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.02] group-hover:contrast-[1.02]"
            />
          </div>
          <figcaption className="px-4 py-3 text-xs text-gray-500 border-t border-gray-200">
            Tali • studio companion & quality control
          </figcaption>
        </figure>

        <div className="flex flex-col gap-6 order-1 md:order-2">
          <h2 className="text-2xl font-semibold">Studio Companion</h2>

          <p className="muted leading-relaxed">
            Our pup (Tali) is never far from the studio. Whether quietly resting nearby or curiously watching
            each brushstroke, she’s a constant reminder of warmth and presence. Her personality and energy often
            find their way into the emotional tone of my work.
          </p>

          <p className="muted leading-relaxed">
            The companionship and calm she brings into the space influence the atmosphere in which every
            painting is created.
          </p>
        </div>
      </section>
    </div>
  );
}