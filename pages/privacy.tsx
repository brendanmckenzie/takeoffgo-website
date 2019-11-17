import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { BrandLine, Section, Content } from "../components/Bulma";

const Privacy: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Privacy policy - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <Section container>
          <Header showHomeButton />

          <h2 className="title is-2">Privacy policy</h2>
          <BrandLine />
          <Content>
            <p>
              Your privacy is important to us. It is Take Off Go Pty Ltd's
              policy to respect your privacy regarding any information we may
              collect from you across our website,{" "}
              <a href="https://www.takeoffgo.com">https://www.takeoffgo.com</a>,
              and other sites we own and operate.
            </p>
            <p>
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </p>
            <p>
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorised access, disclosure, copying, use or
              modification.
            </p>
            <p>
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law.
            </p>
            <p>
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </p>
            <p>
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services.
            </p>
            <p>
              Your continued use of our website will be regarded as acceptance
              of our practices around privacy and personal information. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.
            </p>
            <p>This policy is effective as of 2 July 2019.</p>
          </Content>
        </Section>

        <Footer />
      </>
    </>
  );
};

export default Privacy;
