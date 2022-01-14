//components
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';
import { HeaderMiddle } from './HeaderMiddle';

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
