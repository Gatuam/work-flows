"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

export const WorkFlowBtn = () => {
  return (
    <Button  
    className=" h-7 w-fit  "
    size={"sm"} onClick={() => {}}>
      <Plus />
      Create WorkFlows
    </Button>
  );
};
