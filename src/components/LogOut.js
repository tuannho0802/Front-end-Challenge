import { Image, Popover } from 'antd';
import './menu.css';
import logout from '../Pictures/logout.png';

const LogOut = () => {
  return (
    <>
      <div>
        <div className="small-menu" style={{ display: 'block' }} type="primary">
          <Popover title="Message" trigger="hover">
            <Image src={logout} preview={false} className="icon-menu" />
          </Popover>
          <h2 className="widget-title">Message</h2>
        </div>
      </div>
    </>
  );
};

export default LogOut;
