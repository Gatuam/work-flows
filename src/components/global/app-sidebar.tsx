"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { menuItems } from "@/const";
import { CreditCardIcon, LogOutIcon, User2Icon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const AppSidebar = () => {
  const { setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sidebar className=" h-screen" collapsible="icon">
      <SidebarHeader className="flex border-b py-1">
        <div className=" flex items-center w-full justify-between">
          <SidebarMenu className="flex w-full">
            <SidebarMenuButton asChild className="flex w-full">
              <Link href="/dashboard" className="flex gap-2 ">
                <Image width={12} height={12} alt="logo" src="/logo.svg" />
                <span className=" font-semibold text-sm">D-invoice</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenu>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((gp) => (
          <SidebarGroup key={gp.title}>
            <SidebarGroupContent className=" space-y-1">
              <SidebarMenu>
                {gp.items.map((it) => (
                  <SidebarMenuItem key={it.title}>
                    <SidebarMenuButton
                      tooltip={it.title}
                      isActive={
                        it.url === "/"
                          ? pathname === "/"
                          : pathname.startsWith(it.url)
                      }
                      asChild
                      className=" gap-x-4 h-9 px-4"
                    >
                      <Link prefetch href={it.url}>
                        <it.icon className=" size-4 " />
                        <span className=" ">{it.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu className=" py-2 ">
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  tooltip="Switch theme"
                  className="gap-x-2 cursor-pointer"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                  <span>Switch theme</span>
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SidebarMenuButton
              onClick={() => {
                router.push("/account");
              }}
              tooltip={"Account"}
              className=" gap-x-4"
            >
              <User2Icon className=" size-4" />
              <span>Account </span>
            </SidebarMenuButton>
            <SidebarMenuButton tooltip={"update to pro"} className=" gap-x-4">
              <CreditCardIcon className=" size-4" />
              <span>Billings </span>
            </SidebarMenuButton>
            <SidebarMenuButton
              tooltip={"sign out"}
              className=" gap-x-4"
              onClick={() =>
                authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/");
                    },
                  },
                })
              }
            >
              <LogOutIcon className=" size-4" />
              <span>Sign out </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
