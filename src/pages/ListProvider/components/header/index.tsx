import { Button, Form } from "@/ui-components";
import { Modal } from "@/ui-components";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

interface HeaderProps {
  handleGetUsersByRole: (role: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleGetUsersByRole }) => {
  // const { handleCreateUser, loading } = useUpdateUser();

  // const handleEdit = handleSubmit((data: UpdateUserRequest) => {
  //   handleUpdateUser(data);

  //   handleModalClose();
  // });
  const methods = useForm();
  return (
    <div className="flex justify-between items-center">
      <FormProvider {...methods}>
        <Modal>
          <Modal.Trigger>
            <Button onClick={() => {}}>Cadastrar agendamento</Button>
          </Modal.Trigger>
          <Modal.Content
            title="Cadastrar Cliente"
            footerContent={
              <div className="flex items-center justify-center gap-20  m-4">
                <Button typeColor="blank">Cancelar</Button>
                <Button typeColor="success">Salvar</Button>
              </div>
            }
          >
            <div>
              <Form.Input
                isRequired
                type="text"
                name="teste"
                label="Nome Completo"
              />
              <Form.Input
                isRequired
                type="text"
                name="teste"
                label="Endereço de E-mail"
              />
              <Form.Input
                isRequired
                type="text"
                name="teste"
                label="Número de Telefone"
              />
            </div>
          </Modal.Content>
        </Modal>
      </FormProvider>
    </div>
  );
};

export { Header };
