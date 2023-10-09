import {Button} from "../button/component.jsx";
import {useState} from "react";
import {ReviewForm} from "../review-form/component.jsx";
import {Modal} from "../modal/component.jsx";

export const AddReviewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const close = () => setIsModalOpen(false)

  return (
    <>
      <Button type="secondary" onClick={() => setIsModalOpen(true)}>
        Add review
      </Button>
      {isModalOpen && (
        <Modal onClose={close}>
          <ReviewForm onSubmit={close}/>
        </Modal>
      )}
    </>
  );
};
