import {Button} from "../button/component.jsx";
import {useState} from "react";
import {Modal} from "../modal/component.jsx";
import {ReviewFormContainer} from "../review-form/container.jsx";

export const AddReviewButton = ({restaurantId}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const close = () => setIsModalOpen(false);

  return (
    <>
      <Button type="secondary" onClick={() => setIsModalOpen(true)}>
        Add review
      </Button>
      {isModalOpen && (
        <Modal onClose={close}>
          <ReviewFormContainer onSubmit={close} restaurantId={restaurantId}/>
        </Modal>
      )}
    </>
  );
};
