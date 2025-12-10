"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONNECTIONS } from "@/const";
import Image from "next/image";

export function ConnectionsCards() {
  const handleConnect = (title: string) => {
    console.log(`Connecting to ${title}...`);
  };

  return (
    <div className="grid p-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
      {CONNECTIONS.map((connection) => (
        <Card
          key={connection.connectionKey}
          className="flex flex-col bg-card border-border hover:shadow-lg transition-shadow gap-y-4"
        >
          <CardHeader>
            <div className="w-10 h-10 bg-accent-foreground/20 border border-primary/10 p-1 rounded-lg flex items-center justify-center">
             <Image
             src={connection.image}
             alt="conn"
             width={30}
             height={30}
             />
            </div>
            <CardTitle className="text-xl text-card-foreground">
              {connection.title}
            </CardTitle>
            <CardDescription className=" text-muted-foreground/70 text-sm">
              {connection.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto">
            <Button 
            className=" h-7 text-shadow-sm bg-linear-0 from-primary via-secondary-foreground/50 to-primary"
            onClick={() => handleConnect(connection.title)}>
              Connect
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
