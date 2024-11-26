import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            vpay
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Payments Infrastructure
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Accept payments online and in person across Africa
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            For Businesses
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Solutions for businesses of all sizes across Africa
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/developers" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white">
                    Developers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white">
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <Link href="/signin" className="text-white hover:text-gray-200">
              Sign in
            </Link>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Contact sales
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white lg:text-7xl animate-gradient">
              Financial infrastructure to grow your revenue
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              Join the millions of companies of all sizes that use vpay to
              accept payments across Africa, embed financial services, power
              custom revenue models, and build a more profitable business.
            </p>
            <div className="flex items-center gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 whitespace-nowrap">
                Start now →
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl -z-10" />
            <div className="bg-white/10 backdrop-blur-xl rounded-lg p-6 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    Dashboard
                  </h3>
                  <p className="text-white/60">Today</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-white/60">Total Volume</p>
                    <p className="text-2xl font-bold text-white">
                      ₦3,528,198.72
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-sm text-white/60">
                      Successful Transactions
                    </p>
                    <p className="text-2xl font-bold text-white">1,234</p>
                  </div>
                </div>
                <div className="h-32 bg-white/5 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
