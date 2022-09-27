import {
  ButtonGroup,
  Modal,
  ModalFooter,
  ModalHeading,
  ModalToggleButton,
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
          <ModalToggleButton
            modalRef={modalRef}
            closer
            className="padding-105 text-center"
          >
            {props.button}
          </ModalToggleButton>
          <ModalToggleButton modalRef={modalRef} unstyled closer>
            {props.link}
          </ModalToggleButton>
        </ButtonGroup>
      </ModalFooter>
    </Modal>
  );
});

export default BlueprintModal;
