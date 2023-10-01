import { Image, Popover } from 'antd';
import './menu.css';
import developer from '../Pictures/developer.png';

const Developer = () => {
  return (
    <>
      <div>
        <div className="small-menu" style={{ display: 'block' }} type="primary">
          <Popover title="Developer" trigger="hover">
            <Image src={developer} preview={false} className="icon-menu" />
          </Popover>
          <h2 className="widget-title">Developer</h2>
        </div>
      </div>
    </>
  );
};

export default Developer;
