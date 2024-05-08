import ScrollToTop from "react-scroll-up";
import { BsFillRocketFill } from 'react-icons/bs';

export default function ScrollToTopButton() {
  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '50%',
    padding: '10px',
  };

  return (
    <div className="relative z-[500]">
      <ScrollToTop showUnder={160} style={{}}>
        <p style={buttonStyle} className="font-bold text-3xl cursor-pointer hover:border-2 hover:border-white hover:rounded-full p-3">
          <BsFillRocketFill />
        </p>
      </ScrollToTop>
    </div>
  );
}
