import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed z-30 w-full top-2 md:top-6">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center flex-1">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          {/* <ul className="flex items-center justify-end flex-1 gap-3">
            <li>
              <Link
                href="/signin"
                className="text-gray-800 bg-white shadow btn-sm hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="text-gray-200 bg-gray-800 shadow btn-sm hover:bg-gray-900"
              >
                Register
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
  );
}
