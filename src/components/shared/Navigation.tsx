"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  return (
    <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-2xl font-bold bg-black bg-clip-text text-transparent"
          >
            Vpay
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid gap-1">
                      <h4 className="font-medium leading-none">Payment Gateway</h4>
                      <p className="text-sm text-muted-foreground">
                        Accept payments across Africa with our secure gateway
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h4 className="font-medium leading-none">Mobile Money</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect with all major mobile money providers
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid gap-1">
                      <h4 className="font-medium leading-none">
                        For Enterprises
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Custom payment solutions for large African businesses
                      </p>
                    </div>
                    <div className="grid gap-1">
                      <h4 className="font-medium leading-none">For SMEs</h4>
                      <p className="text-sm text-muted-foreground">
                        Simple and affordable payment tools for growing businesses
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/developers" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    API Docs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block">
            Sign in
          </Link>
          <Button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white">
            Start Now
          </Button>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/products">Products</Link>
                <Link href="/solutions">Solutions</Link>
                <Link href="/developers">API Docs</Link>
                <Link href="/login">Sign in</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
