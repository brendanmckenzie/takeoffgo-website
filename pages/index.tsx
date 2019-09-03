import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Experience the Extraordinary - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <section className="section container">
          <Header />

          <div className="columns">
            <div className="column">
              <h2 className="title is-2">The extraordinary experience</h2>
              <hr className="brand" />
              <div className="content">
                <p>
                  At Take Off Go, we lift Africa’s veil of mystery and reveal a
                  land of adventure.
                </p>
                <p>
                  Our custom travel itineraries expertly weave together
                  excursions through a range of countries, allowing you to
                  experience the hospitality, magic, and solitude of Africa.
                  From the people and the scenery to the safaris and the
                  beaches, the Africa you’ve dreamed of is closer than you
                  think.
                </p>
                <p>
                  Take Off Go curates extraordinary experiences. Let us share
                  our passion for travel with you by helping plan your own
                  unique, once-in-a-lifetime journey through these wild,
                  incredible lands.
                </p>
              </div>
              <a className="button is-dark" href="mailto:sales@takeoffgo.com">
                <span>Contact us</span>
                <span className="icon">
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
            <div className="column is-5">
              <img src="/static/prince-david-MMKAbQPIXg8-unsplash.jpg" />
            </div>
          </div>
        </section>

        <section className="section container">
          <img src="/static/roberta-doyle-dqmmx51pVf8-unsplash.jpg" />
        </section>

        <section className="section container">
          <div className="columns">
            <div className="column">
              <h2 className="title is-2">Places we love</h2>
              <h4 className="subtitle is-4">
                Stunning experiences hand picked by our travel experts
              </h4>
              <hr className="brand" />
              <article className="content">
                <p>
                  The Silo Hotel has been built in the grain elevator portion of
                  the historic grain silo complex occupying six floors above
                  Zeitz Museum of Contemporary Art Africa (MOCAA) which houses
                  Africa’s largest collection of contemporary African art.
                </p>
                <p>
                  Only guests of the 28-room boutique hotel have the pleasure of
                  floating in the rooftop pool while taking in views of Table
                  Mountain, Lion’s Head, the Atlantic Ocean, and the city
                  skyline.
                </p>
                <p>
                  The Silo Hotel is a celebration of art, style, architecture
                  and design. A tribute to timeless glamour and contemporary
                  luxury offering the highest levels of personalised service.
                </p>
              </article>
              <a className="button is-dark" href="mailto:sales@takeoffgo.com">
                <span>Contact us</span>
                <span className="icon">
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
            <div className="column">
              <figure className="image">
                <img src="/static/ts-deluxe-superior-bedroom-1-1200x801.jpg" />
              </figure>
            </div>
          </div>
        </section>

        <section className="section container">
          <img src="/static/BarclayStennerSafaris+Dining+Table+(1).jpg" />
        </section>

        <section className="section container">
          <h2 className="title is-2">From our past guests</h2>
          <h4 className="subtitle is-4">Your stories drive our passion</h4>
          <div className="content">
            <blockquote>
              <p>
                We cannot speak highly enough of our South African trip
                organised by Take Off Go. The places we visited exceeded our
                expectations. The variety of venues and accommodation gave us a
                broad aspect of African life. A highlight? So many but the Blue
                Train was special.
              </p>
              <p>
                <small>&mdash; Ron Thorpe</small>
              </p>
            </blockquote>
          </div>
        </section>

        <section className="container has-text-centered">
          <a
            className="button is-dark is-large"
            href="mailto:sales@takeoffgo.com"
          >
            <span>Contact us</span>
            <span className="icon">
              <i className="fas fa-chevron-right" />
            </span>
          </a>
        </section>

        <section className="section container">
          <img src="/static/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg" />
        </section>

        <Footer />

        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        />
      </>
    </>
  );
};

export default Home;
