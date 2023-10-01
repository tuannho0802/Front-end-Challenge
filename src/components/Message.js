import { Image, Popover } from 'antd';
import './menu.css';
import message from '../Pictures/message.png';

const Message = () => {
  return (
    <>
      <div>
        <div className="small-menu" style={{ display: 'block' }} type="primary">
          <Popover title="Message" trigger="hover">
            <Image src={message} preview={false} className="icon-menu" />
          </Popover>
          <h2 className="widget-title">Message</h2>
        </div>
      </div>
    </>
  );
};

export default Message;
