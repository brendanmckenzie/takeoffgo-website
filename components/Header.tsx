import React from "react";
import Logo from "./Logo";
import { LinkButton, Columns, Column, Container } from "./Bulma";
import cx from "classnames";

type HeaderProps = {
  showHomeButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showHomeButton }) => {
  const [stuck, setStuck] = React.useState(false);
  React.useEffect(() => {
    const handler = () => {
      setStuck((document.scrollingElement?.scrollTop ?? 0) > 0);
    };

    document.addEventListener("scroll", handler);

    handler();

    return () => document.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={cx("header is-sticky", { "is-stuck": stuck })}>
      <Container>
        <Columns gapless>
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
            <p className="heading hidden-stuck">Experience the extraordinary</p>
          </Column>
        </Columns>
        <hr />
      </Container>
    </header>
  );
};

export default Header;
