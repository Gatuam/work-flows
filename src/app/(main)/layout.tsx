import { AppSidebar } from "@/components/global/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset className=" bg-accent/20">
        <main
          className=" w-full
 bar overflow-x-hidden! h-full"
        >
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
