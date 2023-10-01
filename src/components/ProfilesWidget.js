import { Modal, Image, AutoComplete, Popover } from 'antd';
import './ExploreWidget.css';
import profiles from '../Pictures/profiles.png';
import add from '../Pictures/add.png';
import publicInfo from '../Pictures/publicInfo.png';
import business from '../Pictures/business.png';
import connection from '../Pictures/connection.png';

import React, { useState } from 'react';

const Profiles = () => {
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
        <Image src={profiles} preview={false} className="icon-widget" />
        <h2 className="widget-title">Profiles</h2>
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
          <Popover title="Add Subscription" trigger="hover">
            <Image
              src={add}
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

          <Popover title="Public Information" trigger="hover">
            <Image
              src={publicInfo}
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

          <Popover title="Business Information" trigger="hover">
            <Image
              src={business}
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

          <Popover title="Connection" trigger="hover">
            <Image
              src={connection}
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
            <h3>Add Subscription</h3>
            <h3>Public Information</h3>
            <h3>Business Information</h3>
            <h3>Connection</h3>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Profiles;
