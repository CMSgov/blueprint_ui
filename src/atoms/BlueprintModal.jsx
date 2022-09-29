import {
  Button,
  ButtonGroup,
  Modal,
  ModalFooter,
  ModalHeading,
} from "@trussworks/react-uswds";
import { forwardRef } from "react";

const BlueprintModal = forwardRef((props, modalRef) => {
  return (
    <Modal
      ref={modalRef}
      id={props.id + "-modal"}
      aria-labelledby={props.id + "-heading"}
      aria-describedby={props.id + "-description"}
    >
      <ModalHeading id={props.id + "-heading"}>{props.header}</ModalHeading>
      <div className="usa-prose">
        <p id={props.id + "-description"}>{props.body}</p>
      </div>
      <ModalFooter>
        <ButtonGroup>
          <Button
            className="padding-105 text-center"
            onClick={() => props.clickHandler(true)}
          >
            {props.button}
          </Button>
          <Button unstyled onClick={() => props.clickHandler(false)}>
            {props.link}
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  );
});

export default BlueprintModal;
