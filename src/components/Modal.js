import React, { useState, useEffect } from 'react';
import $ from 'jquery';

const Modal = ({ isModalVisible, modalToRender, setIsModalVisibility, tools }) => {
  const [ currentModal, setCurrentModal] = useState(<div/>);

  useEffect(() => {
    setIsModalVisibility(isModalVisible);
    setCurrentModal(modalToRender);
  }, [modalToRender, isModalVisible, setIsModalVisibility]);


  const renderModal = () => {
    return (
      <div 
        className="component-modal"
        style={{ marginTop: $(window).scrollTop()}}
        >
        {currentModal}
        <button onClick={() => {
          setIsModalVisibility(false);
          tools.enableScroll();
          }}>Close Modal</button>
      </div>
    );
  };

  return <div>{isModalVisible && renderModal()}</div>;
};

export default Modal;
