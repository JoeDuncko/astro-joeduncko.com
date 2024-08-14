import {
  faChartLine,
  faCodeBranch,
  faCopyright,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { catchPhrase, myName } from "../constants";

export function Footer() {
  const print = () => {
    window.print();
  };

  return (
    <footer className="max-w-screen-lg sm:flex text-xs print:hidden items-center">
      <div className="text-center sm:text-left flex-1">
        <FontAwesomeIcon icon={faCopyright} /> {myName}{" "}
        {new Date().getFullYear()}
      </div>

      <div className="text-center flex-1">
        <a
          href="https://github.com/JoeDuncko/joeduncko.com"
          className="m-1 hover:text-[#ff9300]"
          target="_blank"
          rel="noreferrer"
          title="Fork this site on GitHub"
        >
          <FontAwesomeIcon icon={faCodeBranch} />
        </a>
        <button
          onClick={print}
          className="m-1 hover:text-[#ff9300]"
          title="Print this page"
        >
          <FontAwesomeIcon icon={faPrint} />
        </button>
        <a
          href="https://simpleanalytics.com/joeduncko.com?utm_source=joeduncko.com"
          className="m-1 hover:text-[#ff9300]"
          target="_blank"
          rel="noreferrer"
          title="View analytics on Simple Analytics"
        >
          <FontAwesomeIcon icon={faChartLine} />
        </a>
      </div>

      <div className="text-right flex-1">
        <em>{catchPhrase}</em>
      </div>
    </footer>
  );
}
