import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainVav from "./MainNav";

const Header = () => {
  return(
    <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link to='/' className="flex font-bold tracking-tight items-center border-2 rounded-2xl p-2 bg-slate-500">
                <span className="text-3xl text-orange-500">TMH</span><p className="text-1xl text-amber-300">Resturant</p>
            </Link>
            <div className="md:hidden">
              <MobileNav />
            </div>
            <div className="hidden md:block">
              <MainVav />
            </div>
        </div>
    </div>
  )
}

export default Header;