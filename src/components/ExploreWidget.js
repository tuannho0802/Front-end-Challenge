import { Modal, Image, AutoComplete, Popover } from 'antd';
import './ExploreWidget.css';
import explore from '../Pictures/explore.png';
import box from '../Pictures/box.png';
import building from '../Pictures/building.png';

import React, { useState } from 'react';

const Explore = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="small-widget"
        style={{ display: 'block' }}
        type="primary"
        onClick={showModal}
      >
        <Image src={explore} preview={false} className="icon-widget" />
        <h2 className="widget-title">Explore</h2>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={null}
        centered={true}
        width={AutoComplete}
        className="modal-box"
      >
        <div style={{ cursor: 'pointer' }}>
          <Popover title="Product Category" trigger="hover">
            <Image
              src={box}
              preview={false}
              style={{
                width: '100px',
                borderRadius: '270px',
                border: '2.25px solid var(--linear-card-stroke, #FFF)',
                margin: '20px',
                background: 'rgba(255, 255, 255, 0.30)',
              }}
              className="icon"
            />
          </Popover>

          <Popover title="Company" trigger="hover">
            <Image
              src={building}
              preview={false}
              style={{
                width: '100px',
                borderRadius: '270px',
                border: '2.25px solid var(--linear-card-stroke, #FFF)',
                margin: '20px',
                background: 'rgba(255, 255, 255, 0.30)',
              }}
              className="icon"
            />
          </Popover>

          <div className="icon-title">
            <h3>Product Category</h3>
            <h3>Company</h3>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Explore;
