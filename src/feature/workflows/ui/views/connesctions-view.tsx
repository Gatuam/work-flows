import React from "react";
import { WorkFlowBtn } from "../components/work-btn";

export const WorkFlowsView = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-x-4">
      <div className=" flex flex-col items-start justify-between border-b bg-background/50 p-4">
        <h1 className=" text-2xl font-semibold tracking-tight backdrop-blur-3xl">
          Workflows
        </h1>
      </div>
      <div className=" flex w-full p-3">
        <WorkFlowBtn />
      </div>
    </div>
  );
};
