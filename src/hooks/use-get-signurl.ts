import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useGetSignUrlMutation = () => {
  const mutation = useMutation({
    mutationFn: async (data: {
      fileName: string;
      ext: string;
      type: string;
    }) => {
      const res = await axios.post("/api/get-sign-url", data, {
        headers: { "Content-Type": data?.type },
      });
      if (!res.data.success) {
        throw new Error("Failed to get the sign url");
      }
      return res.data;
    },
    onSuccess: (data) => {
      toast(data.message || "success creating signUrl", {
        description: "signurl create successfully",
      });
    },
    onError: (error) => {
      toast(error.message || "Something went wrong", {
        description: "error while getting signUrl",
      });
    },
  });
  return mutation;
};
