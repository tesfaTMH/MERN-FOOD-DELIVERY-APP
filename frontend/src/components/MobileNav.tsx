import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return(
    <Sheet>
        <SheetTrigger>
            <Menu className="text-orange-500" />
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle className="flex justify-content-center ">
                <span className="flex justify-between items-center">Welcome to  <span className="text-2xl text-orange-500">TMH</span><p className=" text-amber-300">Resturant</p></span>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex">
                <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;