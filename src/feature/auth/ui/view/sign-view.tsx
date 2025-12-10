"use client";
import React, { useState } from "react";
import { CardWrapper } from "../components/card-warpper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RegisterForm } from "../components/register-form";
import { LoginForm } from "../components/login-form";
import { ModeToggle } from "@/components/global/mode-toogle";

//  children,
//  headerlabel,
//  backButtonlable,
// backButtonherf,

export const SignInView = () => {
  const [tab, setTab] = useState<"register" | "login">("register");

  return (
    <div className=" w-full min-h-screen pt-20 flex justify-center relative">
      <div className=" absolute top-4 right-9">
        <ModeToggle />
      </div>
      <div className=" max-w-7xl mx-auto flex-col flex gap-y-6">
        <div className=" flex flex-col justify-center items gap-y-1 ">
          <h1 className=" text-4xl font-bold tracking-tight ">Workflows</h1>
          <p className=" text-base text-accent-foreground/50 max-w-sm ">
           Create Workflows to get start and automate yourbusiness
          </p>
        </div>
        <Tabs
          value={tab}
          onValueChange={(value) => setTab(value as "login" | "register")}
        >
          <TabsList className=" min-w-3xs bg-linear-0">
            <TabsTrigger value="login">
              Login
            </TabsTrigger>
            <TabsTrigger value="register">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <CardWrapper headerlabel="Enter your credentials to access your account ">
              <RegisterForm onSuccessSwitch={() => setTab("login")} />
            </CardWrapper>
          </TabsContent>

          <TabsContent value="login">
            <CardWrapper headerlabel="Enter your credentials to access your account ">
              <LoginForm />
            </CardWrapper>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
