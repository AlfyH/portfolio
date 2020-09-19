import React, { useState } from "react";
import Home from '../../pages/Home';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import FullImage from '../../pages/FullImage';
import Contact from '../../pages/Contact';
import Modal from "../../components/Modal";


// import MenuSide from '../components/MenuSide';

export default ({ tools }) => {
    const [isModalVisible, setIsModalVisibility] = useState(false);
    
    return (
      <div id="view-main">
        <Modal
          isModalVisible={isModalVisible}
          modalToRender={<div>dfsdfsdf</div>}
          setIsModalVisibility={setIsModalVisibility}
          tools={tools}
        />
        <div id="main-content">
          <Home tools={tools} />
          {/* <MenuSide tools={tools}></MenuSide> */}
          <div id="main-content-after-menu">
            <About tools={tools} />
            <Portfolio
              tools={tools}
              setIsModalVisibility={setIsModalVisibility}
            />
            <FullImage />
            <Contact tools={tools} />
          </div>
        </div>
      </div>
    );
};
