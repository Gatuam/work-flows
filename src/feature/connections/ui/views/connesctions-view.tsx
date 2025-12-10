import React from "react";
import { ConnectionsCards } from "../components/con-card";

export const ConnectionsView = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-x-4 gap-y-6">
      <div className=" flex flex-col items-start justify-between border-b gap-y-1 bg-background/50  p-4">
        <h1 className=" text-2xl font-semibold tracking-tight backdrop-blur-3xl">
          Connections
        </h1>
        <p className=" text-sm text-accent-foreground/70 max-w-xs md:max-w-md">
          Cnnection all of your app in the dashboardand get start to automation
        </p>
      </div>
      <div className=" flex">
        <ConnectionsCards />
      </div>
    </div>
  );
};
