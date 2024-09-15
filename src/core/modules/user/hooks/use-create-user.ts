import { useState, useCallback } from "react";

import { useToast } from "@/ui-components";
import { createUser } from "../service/user-service";
import { CreateUserRequest } from "../types/create-appointment";

const useCreateUser = () => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleCreateUsers = useCallback(
    async (params: CreateUserRequest) => {
      setLoading(true);
      try {
        const response = await createUser(params);

        if (!response.data) {
          return;
        }

        addToast({
          title: "Success",
          description: "User Created",
          type: "success",
        });
      } catch (error) {
        addToast({ title: "Error", description: error.message, type: "error" });
      } finally {
        setLoading(false);
      }
    },
    [addToast]
  );

  return { handleCreateUsers, loading };
};

export { useCreateUser };
