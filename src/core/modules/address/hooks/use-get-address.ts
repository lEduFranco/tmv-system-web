import { useState, useCallback } from "react";

import { getAddress as getAddressService } from "../service/address-service";
import { useToast } from "@/ui-components";
import { AddressType } from "../types";

const useGetAddress = () => {
  const { addToast } = useToast();

  const [address, setAddress] = useState<AddressType[]>([]);
  const [loading, setLoading] = useState(true);

  const getAddress = useCallback(
    async (addressData: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    }) => {
      try {
        setLoading(true);
        const response = await getAddressService(addressData);
        setAddress(response.data);
      } catch (error) {
        addToast({ title: "Error", description: error.message, type: "error" });
      } finally {
        setLoading(false);
      }
    },
    [addToast]
  );

  return { address, loading, getAddress };
};

export { useGetAddress };
