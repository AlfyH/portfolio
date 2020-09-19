import React, { useEffect } from 'react';
import $ from 'jquery';

const Modal = ({ isModalVisible, currentModal, setIsModalVisibility, tools }) => {
  useEffect(() => {
    setIsModalVisibility(isModalVisible);
  }, [isModalVisible, setIsModalVisibility]);

  const renderModal = () => {
    return (
      <div
        className={"component-modal"}
        style={{
          marginTop: $(window).scrollTop(),
        }}
      >
        {currentModal}
        <p style={{ color:"white"}}
          onClick={() => {
            setIsModalVisibility(false);
            tools.enableScroll();
          }}
        >
          x Close
        </p>
      </div>
    );
  };

  return <div>{isModalVisible && renderModal()}</div>;
};

export default Modal;
