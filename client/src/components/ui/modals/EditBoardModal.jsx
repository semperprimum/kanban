import {
  SvgButton,
  Input,
  InputContainer,
  FlexPair,
  Label,
  ModalHeader,
} from "../../styles/Modal.styled";
import CrossIcon from "../../../assets/icon-cross.svg?react";
import { Modal } from "./Modal";
import { Button } from "../Button.styled";
export default function EditBoardModal({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <ModalHeader>Edit Board</ModalHeader>
      <Label aria-hidden="true">Board Name</Label>
      <Input
        aria-label="Board Name"
        defaultValue={"Platform Launch"}
        placeholder="e.g. Web Design"
      />
      <Label aria-hidden="true">Board Collumns</Label>
      <InputContainer>
        <FlexPair>
          <Input defaultValue={"Todo"} />
          <SvgButton>
            <CrossIcon />
          </SvgButton>
        </FlexPair>
        <FlexPair>
          <Input defaultValue={"Doing"} />
          <SvgButton>
            <CrossIcon />
          </SvgButton>
        </FlexPair>
        <FlexPair>
          <Input defaultValue={"Done"} />
          <SvgButton>
            <CrossIcon />
          </SvgButton>
        </FlexPair>
      </InputContainer>
      <Button $secondary $small style={{ width: "100%", marginTop: ".75rem" }}>
        + Add New Column
      </Button>
      <Button $small style={{ width: "100%", marginTop: "1.5rem" }}>
        Save Changes
      </Button>
    </Modal>
  );
}
