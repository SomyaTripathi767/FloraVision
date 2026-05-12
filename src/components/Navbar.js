import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 relative">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">
        FloraVision.
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 items-center">

        <li>
          <Link
            to="/"
            className="text-white no-underline"
          >
            Home
          </Link>
        </li>

        <li className="flex items-center gap-1">

          <Link
            to="/about"
            className="text-white no-underline"
          >
            Plant Type
          </Link>

          <ChevronDown
            size={18}
            className="text-white"
          />

        </li>

        <li>
          <Link
            to="/"
            className="text-white no-underline"
          >
            More
          </Link>
        </li>

        <li>
          <Link
            to="/"
            className="text-white no-underline"
          >
            Contact
          </Link>
        </li>

      </ul>

      {/* Icons */}
      <div className="flex items-center gap-5">

        <Search className="cursor-pointer text-white" />

        <ShoppingBag className="cursor-pointer text-white" />

        {/* Mobile Menu Button */}
        {
          open ? (
            <X
              className="cursor-pointer text-white md:hidden"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Menu
              className="cursor-pointer text-white"
              onClick={() => setOpen(false)}
            />
          )
        }

      </div>

      {/* Mobile Menu */}
      {
        open && (
          <div className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-lg rounded-3xl p-6 flex flex-col gap-6 md:hidden border border-white/10 z-50">

            <Link
              to="/"
              className="text-white no-underline"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <div className="flex items-center gap-2">

              <Link
                to="/about"
                className="text-white no-underline"
                onClick={() => setOpen(false)}
              >
                Plant Type
              </Link>

              <ChevronDown size={18} />

            </div>

            <Link
              to="/"
              className="text-white no-underline"
              onClick={() => setOpen(false)}
            >
              More
            </Link>

            <Link
              to="/"
              className="text-white no-underline"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

          </div>
        )
      }

    </nav>
  );
}

export default Navbar;