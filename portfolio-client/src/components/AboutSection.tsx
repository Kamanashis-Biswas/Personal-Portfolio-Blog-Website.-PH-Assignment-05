import Link from "next/link";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutSection({ page }: any) {
  return (
    <section className="w-full mb-20 md:mb-10">
      <div className="relative bg-blue-600 dark:bg-blue-900 text-white dark:text-gray-200 py-20 mb-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold  uppercase">About me</h2>
        </div>
      </div>

      <div className="px-2 md:px-0 sm:container grid items-center justify-center gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-4xl text-primary">
            Who I am?
          </h3>
          <div className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <p>
              Hey there! I’m Kamanashis Biswas, a passionate Junior Full Stack
              Developer with a strong focus on web technologies. I thrive on
              creating dynamic, user-friendly web applications and constantly
              improving my skills to stay ahead in the tech world. With a love
              for problem-solving, I’m always eager to explore new frameworks,
              libraries, and best practices to build scalable, high-performing
              applications.
            </p>
            <p>
              My key skills include ReactJS, NextJS, JavaScript, TypeScript,
              Node.js, Express, Prisma, MongoDB, PostgreSQL, and more. I believe
              in continuous learning and am actively seeking opportunities to
              contribute and grow as a developer. Whether working independently
              or in a team, I bring enthusiasm, dedication, and a
              problem-solving mindset to every project I work on.
            </p>
          </div>

          {/* Optional: Link to a more detailed About page if not on it already */}
          {!page && (
            <div className="flex gap-5">
              <Link
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-10 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase hover:bg-transparent hover:text-primary border hover:border-primary"
                prefetch={false}
              >
                Read more
              </Link>
            </div>
          )}
        </div>

        {/* Optional Image or additional section */}
        <div className="flex justify-center items-center">
          <Image
            src="/Kamanashis.jpg"
            width={600} // Increased width
            height={700} // Increased height
            alt="Kamanashis"
            priority={true}
            className="mx-auto aspect-[4/3] overflow-hidden rounded-sm sm:rounded-xl object-cover md:w-full order-1 lg:order-2 xl:w-[600px] xl:h-[700px]" // Adjusted responsive classes
          />
        </div>
      </div>
    </section>
  );
}
