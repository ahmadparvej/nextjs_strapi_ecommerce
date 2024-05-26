"use client"
import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navItem } from "@/types/navItem";
import { usePathname } from 'next/navigation';
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {

  const pathname = usePathname()

  const navItems: navItem[] = [
    {
      title: "Homepage",
      url: "/"
    },
    {
      title: "Order",
      url: "order"
    },
    {
      title: "About Us",
      url: "about"
    },
    {
      title: "Contact Us",
      url: "contact"
    },
  ]

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 bg-primary rounded-sm px-4 md:w-4/5 md:m-auto md:p-3 z-50">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 md:w-[400px]">
          <Link
            href="/"
            className={`flex items-center gap-2 text-lg font-semibold md:text-base link`}
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {
            navItems && navItems.map((navItem: navItem, index:number)=>{
              return (
                <Link
                  key={index}
                  href={navItem.url}
                  className={`transition-colors text-nowrap hover:text-foreground ${pathname === navItem.url ? 'text-black' : 'text-white'}`}
                >
                  {navItem.title}
                </Link>)
              }
            )
          }
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              {
                navItems && navItems.map((navItem: navItem, index:number)=>{
                  return (
                    <Link
                    key={index}
                      href={navItem.url}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {navItem.title}
                    </Link>
                  )
                })
              }
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <TiShoppingCart className="h-8 w-8 text-white"/>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
  )
}

export default Header