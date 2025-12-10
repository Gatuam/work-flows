"use client";
import { Input } from "@/components/ui/input";
import { s3URL } from "@/const";
import { useFileUpload } from "@/lib/use-upload";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [pre, setPre] = useState("");
  const { upload, isLoading } = useFileUpload();

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const res = await upload.mutateAsync(file);
    setPre(res.key);
    console.log(res);
  };
  return (
    <div>
      <Input disabled={isLoading} type="file" onChange={onUpload}></Input>
      {pre && (
        <Image
          src={pre ? `${s3URL}/${pre}` : ""}
          alt=""
          width={100}
          height={100}
        />
      )}
    </div>
  );
};

export default Page;
