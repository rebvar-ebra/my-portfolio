import Link from "next/link";

export default function Header() {
  return (
      <>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="">Rebvar Ebrahimi</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          I build things for the web.
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I&apos;m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        </p>
      </>
  );
}
