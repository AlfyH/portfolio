/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Empty from '../components/Empty';

import one from '../assets/prototype.png'
import two from '../assets/design.png'
import three from '../assets/quad.gif'
import four from '../assets/5.png'
import five from '../assets/6.png'
import six from '../assets/8.png'
import seven from '../assets/9.png'
import eight from '../assets/10.png'
import nine from '../assets/11.png'
import ten from '../assets/12.png'
import allfour from '../assets/All4.png'
import accedo from '../assets/accedo.png'
import alllogos from '../assets/alllogs.png'

const imageArray = [
  {
    image: one,
    modalContent: <Empty
    title="1"
    />
  },
  {
    image:two,
    modalContent: <Empty
    title="2"
    />
  },
  {
    image:three,
    modalContent: <Empty
    title="3"
    />
  },
  {
    image:four,
    modalContent: <Empty
    title="4"
    />
  },
  {
    image:five,
    modalContent: <Empty
    title="5"
    />
  },
  {
    image:six,
    modalContent: <Empty 
    title="6"
    />
  },
  {
    image:seven,
    modalContent: <Empty 
    title="7"
    />
  },
  {
    image:eight,
    modalContent: <Empty
    title="8"
    />
  },
  {
    image:nine,
    modalContent: <Empty
    title="9"
    />
  },
  {
    image:ten,
    modalContent: <Empty 
    title="10"
    />
  }
];

export default ({ tools, setIsModalVisibility, setCurrentModal }) => {
  return (
    <section id="3">
      <div onClick={tools.toggleSidebarMain} id="page-portfolio">
        <div className="accedo">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.accedo.tv"
          >
            <img src={accedo} className="accedo-image" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.channel4.com"
          >
            <img src={allfour} className="image" />
          </a>

          <p>
            With Accedo, I have worked extensively on the All4 app created by
            Channel 4 UK. We develop applications for platforms such as Amazon
            Fire TV, Samsung TV, Youview, Freeview and Playstation. My work
            includes UI, player and playback reliability.
          </p>
          <p>
            Through Accedo I have had the opportunity to work with other big
            brands:
          </p>

          <img src={alllogos} className="image" />
        </div>

        <div className="grid-cont">
          {imageArray.map((item) => (
            <div className="grid-item">
              <img
                className="port-img"
                src={item.image}
                onClick={() => {
                  setIsModalVisibility(true);
                  setCurrentModal(item.modalContent);
                  tools.disableScroll();
                }}
              ></img>
            </div>
          ))}
          {/* <div className="grid-item">
            <img
              onClick={() => {
                setIsModalVisibility(true);
                setCurrentModal(<div>modal 1</div>);
                tools.disableScroll();
              }}
              className="port-img"
              src={design}
            ></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={prototype}></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={five}></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={quad}></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={six}></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={eight}></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={nine}></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={ten}></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={eleven}></img>
          </div>
          <div className="grid-item">
            <img className="port-img" src={twelve}></img>
          </div> */}
        </div>
        <p
          style={{
            color: "white",
            marginTop: "10vh",
            fontWeight: "100",
            fontSize: "0.7em",
          }}
        >
          This website was designed in Sketch and developed with React
        </p>
      </div>
    </section>
  );
};