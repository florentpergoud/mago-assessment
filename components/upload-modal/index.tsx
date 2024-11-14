import {
  DialogTrigger,
  Button,
  Modal,
  Dialog,
  Heading,
  TextField,
  Label,
  Input,
} from "react-aria-components";

interface Props {
  TriggerButton: React.ReactNode;
}

export const UploadModal = ({ TriggerButton }: Props) => {
  return (
    <DialogTrigger>
      {TriggerButton}
      <Modal>
        <Dialog>
          {({ close }) => (
            <form>
              <Heading slot="title">Sign up</Heading>
              <TextField autoFocus>
                <Label>First Name:</Label>
                <Input />
              </TextField>
              <TextField>
                <Label>Last Name:</Label>
                <Input />
              </TextField>
              <Button onPress={close}>Submit</Button>
            </form>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};
