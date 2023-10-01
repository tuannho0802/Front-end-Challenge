import { Modal, Image, AutoComplete, Popover } from 'antd';
import './ExploreWidget.css';
import store from '../Pictures/store.png';
import shopping from '../Pictures/shopping.png';
import chart from '../Pictures/chart.png';
import ticket from '../Pictures/ticket.png';

import React, { useState } from 'react';

const Store = () => {
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
      <div className="small-widget" type="primary" onClick={showModal}>
        <Image src={store} preview={false} className="icon-widget" />
        <h2 className="widget-title">Store</h2>
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
          <Popover title="Online Shop" trigger="hover">
            <Image
              src={shopping}
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

          <Popover title="Product Dashboard" trigger="hover">
            <Image
              src={chart}
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

          <Popover title="Offer Dashboard" trigger="hover">
            <Image
              src={ticket}
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
            <h3>Online Shop</h3>
            <h3>Product Dashboard</h3>
            <h3>Offer Dashboard</h3>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Store;
