import moment from "moment";

const Footer: React.FC = () => (
  <footer className="section container has-text-centered">
    <ul>
      <li>
        <p className="heading">
          Take Off Go, copyright {moment().format('YYYY')}. All rights reserved. ABN 15 634 608 567
        </p>
      </li>
      <li>
        <a className="heading" href="/terms-and-conditions">
          Terms and conditions
        </a>
      </li>
      <li>
        <a className="heading" href="/privacy">
          Privacy policy
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
