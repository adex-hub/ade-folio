import Link from "next/link";
import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({ subsets: ["latin"] });

function NotFound() {
  return (
    <main className="text-center space-y-6">
      <div className="flex gap-4 pt-[40vh] pb-10 justify-center w-full text-center">
        <h1 className="text-7xl font-bold">Page not found</h1>
        <Image src="/pnf.svg" width={72} height={72} alt="remorse" />
      </div>
      <Link
        href="/"
        className={`text-2xl font-semibold px-3 py-2 uppercase ${syne.className} hover:bg-white hover:text-[#08233b] duration-300 rounded-xl border-2 border-white leading-none`}
      >
        Come back home
      </Link>
    </main>
  );
}

export default NotFound;
