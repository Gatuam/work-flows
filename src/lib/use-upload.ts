import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useFileUpload = () => {
  const signUrlMutation = useMutation({
    mutationFn: async (data: {
      fileName: string;
      ext: string;
      type: string;
    }) => {
      const res = await axios.post("/api/get-sign-url", data);
      if (!res.data.success) throw new Error("Failed to get signed URL");
      return res.data;
    },
    onError: () => {
      toast.error("upload error", {
        description: "tr again",
      });
    },
    onSuccess: (data) => {
      toast.success("upload success", {
        description: "",
      });
    },
  });

  const upload = useMutation({
    mutationFn: async (file: File) => {
      const ext = file.name.split(".").pop() || "bin";
      const rawName = file.name.replace(`.${ext}`, "");
      const mime = file.type || "application/octet-stream";

      const signed = await signUrlMutation.mutateAsync({
        fileName: rawName,
        ext,
        type: mime,
      });

      const signedUrl = signed.data;

      await axios.put(signedUrl, file, {
        headers: { "Content-Type": mime },
      });

      const key = signedUrl.split(".amazonaws.com/")[1].split("?")[0];
      const preview = URL.createObjectURL(file);

      return { key, preview };
    },
  });

  return {
    upload,
    isLoading: signUrlMutation.isPending || upload.isPending,
  };
};
