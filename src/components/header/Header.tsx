//components
import { HeaderLeft } from './HeaderLeft';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderRight } from './HeaderRight';

//style
import './Header.css';

export const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </div>
  );
};
