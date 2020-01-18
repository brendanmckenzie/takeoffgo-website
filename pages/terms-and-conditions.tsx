import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";
import { BrandLine, Section, Content } from "../components/Bulma";

const Terms: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Terms and conditions - Take Off Go</title>
        <Meta router={router} />
      </Head>
      <>
        <Header showHomeButton />

        <Section container>
          <h2 className="title is-2">Terms and conditions</h2>
          <BrandLine />
          <Content>
            <h2>Registration and payment</h2>

            <p>
              A deposit of 30% is required at the time of booking. We accept
              payment via credit card, paypal, or bank transfer your deposit.
              The balance is due 90 days prior to departure. If your reservation
              is made within 90 days of departure, the entire cost of the trip
              must be paid at the time of confirmation.
            </p>

            <h2>Cancellation</h2>

            <p>
              All cancellations of confirmed reservations are subject to a $500
              per person administrative fee. Additionally, clients are subject
              to any cancellation fees assessed by the purveyors of services
              including hotels or airlines used in the itinerary. Cancellations
              90 days or more prior to departure will receive full refund minus
              the $500 per person administrative fee. 60-89 days will be subject
              to loss of deposit (30% trip price). 30-59 days will be subject to
              loss of 50% of program price. 29 days or less will be subject to
              100% of program price, all of the above may vary depending on
              seasonality and cancellation charges by the hotels and airlines
              which costs will be passed on to the traveller at the time of
              cancellation.
            </p>

            <h2>Insurance</h2>

            <p>
              We require all clients travelling with Take Off Go to purchase
              fully comprehensive travel insurance with coverage including (by
              not limited to) trip cancellation, medical, accident, baggage loss
              or damage insurance. In the event that you must cancel your
              participation in a travel program, trip cancellation insurance may
              be the only source of reimbursement.
            </p>

            <p>
              Please note: It is a condition of travel that guests must have
              insurance for cancellation/curtailment, medical expenses and
              baggage loss.
            </p>

            <p>
              Take Off Go cannot be held responsible for any costs incurred by
              any airline delays.{" "}
            </p>

            <h2>Passports and visas</h2>

            <p>
              Valid passports are required for travel to most destinations.
              Check with the appropriate consulate or embassy for the latest
              visa requirements.
            </p>

            <h2>Baggage</h2>

            <p>
              Weight restrictions may apply on internal flights. Baggage and
              personal effects are at owner's risk throughout the travel
              program. Check with the airline for other baggage restrictions
              applicable to international flights.
            </p>

            <h2>Changes</h2>

            <p>
              Prices are based on current rates of exchange, tariffs and taxes.
              Take Off Go reserves the right to increase tour prices to cover
              increased costs, tariffs and taxes, and to reflect fluctuations in
              foreign currency. Take Off Go also reserves the right to withdraw
              a tour or any part of it to make such alterations in the itinerary
              or with the tour inclusions as it deems necessary or desirable and
              to pass on to tour members any expenditures or losses caused by
              delays or events beyond its control. Itineraries and arranged
              sightseeing are subject to change at any time due to unforeseen
              circumstances or circumstances beyond our control. Every effort
              will be made to operate tours as planned, but alterations may
              occur after the final itinerary has been issued.
            </p>

            <h2>Promotional photography</h2>

            <p>
              Take Off Go reserves the right to take photographs during the
              operation of any program or part thereof and to use them for
              promotional purposes. By booking a reservation with Take Off Go,
              program members agree to allow their images to be used in such
              photographs. Program members who prefer that their images not be
              used are asked to identify themselves to their travel program
              escort at the beginning of their program.
            </p>

            <h2>Claims and refunds</h2>

            <p>
              Refunds are not made for any missed services, except for
              verifiable extenuating circumstances. Please see our Limits on
              Responsibility on this page. For verifiable claims to be
              considered, they must be received in writing within 30 days of the
              termination of the program and be accompanied by supporting
              documentation and/or a statement from the Operating Company
              verifying the claim. Any adjustment considered will be based on
              the actual price of the services involved and not on a per diem
              basis. Adjustments will not be made for unused sightseeing trips
              or meals. Take Off Go will not accept any liability for any claims
              that are not received within 30 days of the termination of your
              travel program. All claims for days missed while travelling should
              be made in writing within 30 days of the termination of the
              program.
            </p>

            <h2>Air transportation</h2>

            <p>
              Take Off Go will not accept any responsibility for mistakes or
              errors in airfare bookings made by independent third parties. The
              traveler will be provided with an arrival date, if booking flights
              via a third party the traveller is responsible at ensuring the
              flights are booking in accordance with the start and completion of
              their itineraries. If there are any mistakes on airfare made by
              the traveller or their third party, the costs to change the
              flights or itinerary will be the responsibility of the
            </p>

            <p>
              While we may recommend an agent whom we trust and will arrange the
              best-priced airfare available in the class category you request at
              the time of your booking. Please note that certain airfares are
              subject to a service fee. Should you cancel or change your air
              reservation before or after your departure, cancellation penalties
              may apply as per the airline rules. Service fees are
              nonrefundable.
            </p>

            <h2>Limits on responsibility</h2>

            <p>
              Take Off Go, its employees, officers, directors, successors,
              agents and assigns, does not own or operate any entity which is to
              or does provide goods or services for your trip. It purchases
              transportation (by aircraft, coach, train, vessel or otherwise),
              hotel and other lodging accommodations, restaurant, ground
              handling and other services from various independent suppliers
              (including from time to time other affiliated Take Off Go
              companies). All such persons and entities are independent
              contractors. As a result Take Off Go is not liable for any
              negligent or willful act of any such person or entity or of any
              third person.
            </p>

            <p>
              Take Off Go, acts solely as agents for the client with respect to
              all transportation, hotel and other tour arrangements. In that
              capacity, Take Off Go exercises all reasonable care possible to
              ensure the traveler's safety and satisfaction, but, Take Off Go
              neither assumes nor bears any responsibility or liability for any
              injury, death, damage, loss, accident, delay, or irregularity
              arising in connection with the services of any airplane, train,
              ship, automobile, motor coach, carriage, or other conveyance, or
              the actions of any third-party involved in carrying the traveler
              or in affecting these tours. Take Off Go is not responsible for
              damages, additional expenses, or any other losses due to
              cancellation, delay or other changes in air or other services,
              sickness, weather, strike, war, civil disturbances, acts or
              threats of terrorism, travel warnings or bans, termination or
              suspension of war risks or other carrier insurance, quarantine,
              acts of God or other causes beyond its control. All such losses
              must be borne by the traveler, and tour rates provide for
              arrangements only for the time stated. Take Off Go is not
              responsible for delays, changes or cancellation costs due to
              incorrect, incomplete or expired traveler documents. In the event
              of cancellation, delay or rescheduling mandated by any of the
              aforesaid causes beyond Take Off Go’s control, the passenger shall
              have the option of accepting in lieu of the original tour such
              rescheduled tour or other substituted tour(s) as may be offered,
              or else, receiving a refund of as much of such advance tour
              expenditures as Take Off Go can recover on the traveler's behalf
              from carriers, third-party tour vendors, etc., but, Take Off Go
              shall not have any obligation or liability to the traveler beyond
              the foregoing. Take Off Go reserves the right to make alterations
              to the tour's itinerary and to substitute hotels, vehicles, ships,
              or activities if this is required. Take Off Go reserves the right
              to cancel, delay, or reschedule any tour prior to departure, and,
              so long as this is not due to any of the aforesaid causes beyond
              our control, the passenger shall be entitled to a full refund of
              all monies paid to that point if he/she so desires, less any
              nonrefundable deposits or uncollectible expenses incurred.
            </p>

            <p>
              In addition and without limitation, Take Off Go is not responsible
              for any injury, loss, death, inconvenience, delay or damage to
              personal property in connection with the provision of any goods or
              services whether resulting from but not limited to acts of God or
              force majeure, illness, disease, acts of war, civil unrest,
              insurrection or revolt, animals, strikes or other labor
              activities, criminal or terrorist activities of any kind,
              overbooking or downgrading of services, food poisoning, mechanical
              or other failure of aircraft or other means of transportation or
              for failure of any transportation mechanism to arrive or depart on
              time.
            </p>

            <h3>Risks</h3>

            <p>
              There are certain inherent risks in adventure travel of the type
              involved here. These include, but are not limited to, hiking,
              walking safaris, climbing injuries and altitude sickness, and in
              all trips dangers of animals, inaccessibility to medical attention
              and difficulty in evacuation from remote locations in the case of
              a medical emergency. Passenger assumes all such risks with regard
              to these possibilities.
            </p>

            <h3>Travel Advisories/Warnings</h3>

            <p>
              It is the responsibility of The Traveler to become informed about
              the most current travel advisories and warnings by referring to
              your local government’s foreign travel website. In the event of an
              active Travel Warning against travel to the specific destination
              location(s) of the trip, should The Traveler still choose to
              travel, notwithstanding any travel advisory or warning, The
              Traveler assumes all risk of personal injury, death or property
              damage that may arise out of the events like those advised or
              warned against.
            </p>

            <h3>Travelers Representations</h3>

            <p>
              The Traveler represents that neither he nor she nor anyone
              traveling with him or her has any physical or other condition or
              disability that could create a hazard to himself or herself or
              other members of the tour. The traveller is responsible to notify
              Take Off Go of any medical or mobility needs that need to be
              passed on to our local offices and suppliers.
            </p>

            <p>
              Take Off Go reserves the right to decline to accept anyone on a
              trip if they concealed or failed to inform us in advance of any
              medical conditions which require supervision. Take Off Go reserves
              the right to remove from the trip, at his or her sole expense,
              anyone whose condition is such that he or she could create a
              hazard to himself or others, or otherwise impact the enjoyment of
              other passengers on the trip.
            </p>
          </Content>
        </Section>

        <Footer />
      </>
    </>
  );
};

export default Terms;
