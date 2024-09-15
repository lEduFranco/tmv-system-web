import { useUpdateUser } from "@/core/modules/user/hooks/use-update-user";
import { UpdateUserRequest } from "@/core/modules/user/types/update-users";

import { Button } from "@/ui-components";

import React from "react";
import { useFormContext } from "react-hook-form";

interface FooterProps {
  handleModalClose: () => void;
}

const Footer: React.FC<FooterProps> = ({ handleModalClose }) => {
  const { handleSubmit } = useFormContext();
  const { handleUpdateUser, loading } = useUpdateUser();

  const handleEdit = handleSubmit((data: UpdateUserRequest) => {
    handleUpdateUser(data);

    handleModalClose();
  });

  return (
    <div className="flex justify-end">
      <div className="flex gap-1">
        <Button typeColor="blank" size="sm" onClick={() => handleModalClose()}>
          Cancelar
        </Button>

        <Button
          size="sm"
          typeColor="success"
          onClick={handleEdit}
          isLoading={loading}
        >
          Salvar
        </Button>
      </div>
    </div>
  );
};

export { Footer };
