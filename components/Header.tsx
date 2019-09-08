import Logo from "./Logo";
import { LinkButton, Columns, Column } from "./Bulma";

type HeaderProps = {
  showHomeButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showHomeButton }) => (
  <>
    <Columns>
      <Column>
        {showHomeButton && (
          <LinkButton iconLeft="chevron-left" text href="/">
            Back home
          </LinkButton>
        )}
      </Column>
      <Column narrow className="has-text-right">
        <a href="/">
          <Logo />
        </a>
        <p className="heading">Experience the extraordinary</p>
      </Column>
    </Columns>
    <hr />
  </>
);

export default Header;
