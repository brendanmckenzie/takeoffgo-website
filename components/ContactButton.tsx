import { LinkButton } from "./Bulma";

type ContactButtonProps = {
  large?: boolean;
};

const ContactButton: React.FC<ContactButtonProps> = ({ large }) => (
  <LinkButton dark rounded large={large} href="mailto:sales@takeoffgo.com">
    Contact us
  </LinkButton>
);

export default ContactButton;
