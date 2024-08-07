import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import { useState } from "react";

const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "first",
      link: "first",
    },
    {
      labe: "second",
      link: "second",
    },
    {
      labe: "third",
      link: "third",
    },
    {
      labe: "four",
      link: "four",
    },
    {
      labe: "private-route",
      link: "private-route",
    },
    {
      labe: "captcha",
      link: "captcha",
    },
  ];
  return (
    <>
      <main>
        <nav className="flex justify-between px-8 items-center py-2 border-2">
          <div className="flex items-center gap-8">
            <section className="flex items-center gap-0">
              <FiMenu
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer lg:hidden"
              />
              <Link to={"/"} className="text-4xl font-mono">
                Home
              </Link>
            </section>

            {navlinks.map((d, i) => (
              <Link
                key={i}
                className="hidden lg:block  text-gray-400 hover:text-black"
                to={d.link}
              >
                {d.labe}
              </Link>
            ))}
          </div>

          <div
            className={clsx(
              " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
              isSideMenuOpen && "translate-x-0"
            )}
          >
            <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl cursor-pointer"
              />
              {navlinks.map((d, i) => (
                <Link key={i} className="font-bold" to={d.link}>
                  {d.labe}
                </Link>
              ))}
            </section>
          </div>

          <section className="flex items-center gap-4">image</section>
        </nav>
      </main>
    </>
  );
};
export default Navbar;
