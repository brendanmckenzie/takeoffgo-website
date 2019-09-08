import { css } from "../lib/util";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

type ColumnsProps = ContainerProps & {
  centred?: boolean;
  vcentred?: boolean;
};

export const Columns: React.FC<ColumnsProps> = ({
  children,
  centred,
  vcentred
}) => (
  <div
    className={css({
      columns: true,
      "is-centered": centred,
      "is-vcentered": vcentred
    })}
  >
    {children}
  </div>
);

type ColumnProps = ContainerProps & {
  width?: number;
  narrow?: boolean;
};

export const Column: React.FC<ColumnProps> = ({
  children,
  width,
  narrow,
  className
}) => (
  <div
    className={css({
      column: true,
      [`is-${width}`]: width,
      "is-narrow": narrow,
      [`${className}`]: className
    })}
  >
    {children}
  </div>
);

export const Content: React.FC<ContainerProps> = ({ children }) => (
  <div className="content">{children}</div>
);

export const BrandLine: React.FC = () => <hr className="brand" />;

type SectionProps = ContainerProps & {
  container?: boolean;
};

export const Section: React.FC<SectionProps> = ({ children, container }) => (
  <section className={css({ section: true, container })}>{children}</section>
);

export const Buttons: React.FC<ContainerProps> = ({ children }) => (
  <div className="buttons">{children}</div>
);

type ButtonProps = ContainerProps & {
  href: string;
  dark?: boolean;
  text?: boolean;
  large?: boolean;
  iconRight?: string;
  iconLeft?: string;
  rounded?: boolean;
};

export const LinkButton: React.FC<ButtonProps> = ({
  dark,
  text,
  large,
  iconRight,
  iconLeft,
  href,
  rounded,
  children
}) => (
  <a
    className={css({
      button: true,
      "is-dark": dark,
      "is-text": text,
      "is-large": large,
      "is-rounded": rounded
    })}
    href={href}
  >
    {iconLeft && (
      <span className="icon">
        <i className={`fas fa-${iconLeft}`} />
      </span>
    )}
    {children && <span>{children}</span>}
    {iconRight && (
      <span className="icon">
        <i className={`fas fa-${iconRight}`} />
      </span>
    )}
  </a>
);
