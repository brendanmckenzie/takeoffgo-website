import Logo from "./Logo";

type HeaderProps = {
  showHomeButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showHomeButton }) => (
  <>
    <div className="columns">
      <div className="column">
        {showHomeButton && (
          <a href="/" className="button is-text">
            <span className="icon">
              <i className="fas fa-chevron-left" />
            </span>
            <span>Back home</span>
          </a>
        )}
      </div>
      <div className="column is-narrow has-text-right">
        <a href="/">
          <Logo />
        </a>
        <p className="heading">Experience the extraordinary</p>
      </div>
    </div>
    <hr />
  </>
);

export default Header;
