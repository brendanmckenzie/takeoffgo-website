export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Decimal: any,
  /** 
 * The `Date` scalar type represents a year, month and day in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
 **/
  Date: any,
  /** 
 * The `DateTime` scalar type represents a date and time. `DateTime` expects
   * timestamps to be formatted in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
 **/
  DateTime: any,
  /** 
 * The `DateTimeOffset` scalar type represents a date, time and offset from UTC.
   * `DateTimeOffset` expects timestamps to be formatted in accordance with the
   * [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard.
 **/
  DateTimeOffset: any,
  /** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
  Milliseconds: any,
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
  Seconds: any,
};





export type GenericRequest = {
   __typename?: 'GenericRequest',
  success: Scalars['Boolean'],
};


export type PublicInvoice = {
   __typename?: 'PublicInvoice',
  amountDue: Scalars['Float'],
  amountPaid: Scalars['Float'],
  currency: Scalars['String'],
  due: Scalars['String'],
  id?: Maybe<Scalars['ID']>,
  invoiced: Scalars['String'],
  items?: Maybe<Array<Maybe<PublicInvoiceItem>>>,
  number: Scalars['Int'],
  paid?: Maybe<Scalars['String']>,
  paymentUrl: Scalars['String'],
  subtitle?: Maybe<Scalars['String']>,
  total: Scalars['Float'],
};

export type PublicInvoiceItem = {
   __typename?: 'PublicInvoiceItem',
  amount: Scalars['Float'],
  currency: Scalars['String'],
  description: Scalars['String'],
  id: Scalars['String'],
  quantity: Scalars['Float'],
  total: Scalars['Float'],
};

export type PublicQuery = {
   __typename?: 'PublicQuery',
  createEnquiry?: Maybe<GenericRequest>,
  invoice?: Maybe<PublicInvoice>,
  invoicePayment?: Maybe<GenericRequest>,
  quote?: Maybe<PublicQuote>,
};


export type PublicQueryCreateEnquiryArgs = {
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  comments?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>
};


export type PublicQueryInvoiceArgs = {
  id?: Maybe<Scalars['ID']>
};


export type PublicQueryInvoicePaymentArgs = {
  invoice?: Maybe<Scalars['ID']>,
  token?: Maybe<Scalars['String']>,
  amount?: Maybe<Scalars['Decimal']>
};


export type PublicQueryQuoteArgs = {
  key?: Maybe<Scalars['String']>,
  viewType?: Maybe<Scalars['String']>,
  track?: Maybe<Scalars['Boolean']>
};

export type PublicQuote = {
   __typename?: 'PublicQuote',
  accommodation?: Maybe<Array<Maybe<PublicQuoteAccommodationDetail>>>,
  agency?: Maybe<PublicQuoteAgencyDetail>,
  airports?: Maybe<Array<Maybe<PublicQuoteAirport>>>,
  consultant?: Maybe<PublicQuoteConsultantDetail>,
  currency: Scalars['String'],
  days?: Maybe<Array<Maybe<PublicQuoteDay>>>,
  destinations?: Maybe<Array<Maybe<PublicQuoteDestination>>>,
  duration: Scalars['Int'],
  exclusions: Scalars['String'],
  expiry: Scalars['String'],
  flights?: Maybe<Array<Maybe<PublicQuoteFlight>>>,
  groupSize: Scalars['Int'],
  hero?: Maybe<PublicQuoteHeroDetail>,
  inclusions: Scalars['String'],
  locked: Scalars['Boolean'],
  nextPayment?: Maybe<PublicQuotePayment>,
  properties?: Maybe<Array<Maybe<PublicQuoteProperty>>>,
  start: Scalars['String'],
  status: Scalars['String'],
  total: Scalars['Decimal'],
  totalOutstanding: Scalars['Decimal'],
};

export type PublicQuoteAccommodationDetail = {
   __typename?: 'PublicQuoteAccommodationDetail',
  id?: Maybe<Scalars['ID']>,
  inclusions?: Maybe<PublicQuoteAccommodationInclusions>,
  property?: Maybe<Scalars['ID']>,
  room?: Maybe<Scalars['String']>,
};

export type PublicQuoteAccommodationInclusions = {
   __typename?: 'PublicQuoteAccommodationInclusions',
  beverage?: Maybe<Array<Maybe<Scalars['String']>>>,
  food?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type PublicQuoteAgencyDetail = {
   __typename?: 'PublicQuoteAgencyDetail',
  logo?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type PublicQuoteAirport = {
   __typename?: 'PublicQuoteAirport',
  city: Scalars['String'],
  country: Scalars['String'],
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  timezone: Scalars['String'],
};

export type PublicQuoteConsultantDetail = {
   __typename?: 'PublicQuoteConsultantDetail',
  email: Scalars['String'],
  genderPreposition: Scalars['String'],
  name: Scalars['String'],
  phone: Scalars['String'],
};

export type PublicQuoteDay = {
   __typename?: 'PublicQuoteDay',
  accommodation?: Maybe<Scalars['ID']>,
  activities?: Maybe<PublicQuoteDayActivities>,
  date: Scalars['String'],
  destinations?: Maybe<Array<Maybe<Scalars['ID']>>>,
  index: Scalars['Int'],
};

export type PublicQuoteDayActivities = {
   __typename?: 'PublicQuoteDayActivities',
  detail?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
};

export type PublicQuoteDestination = {
   __typename?: 'PublicQuoteDestination',
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
};

export type PublicQuoteFlight = {
   __typename?: 'PublicQuoteFlight',
  arrival?: Maybe<PublicQuoteFlightActivity>,
  carrier: Scalars['String'],
  departure?: Maybe<PublicQuoteFlightActivity>,
  id?: Maybe<Scalars['ID']>,
  number: Scalars['String'],
};

export type PublicQuoteFlightActivity = {
   __typename?: 'PublicQuoteFlightActivity',
  airport: Scalars['String'],
  date: Scalars['String'],
};

export type PublicQuoteHeroDetail = {
   __typename?: 'PublicQuoteHeroDetail',
  image?: Maybe<Scalars['ID']>,
  style?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  title: Scalars['String'],
};

export type PublicQuotePayment = {
   __typename?: 'PublicQuotePayment',
  amount: Scalars['Decimal'],
  due: Scalars['String'],
  type: Scalars['String'],
  url: Scalars['String'],
};

export type PublicQuoteProperty = {
   __typename?: 'PublicQuoteProperty',
  id?: Maybe<Scalars['ID']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  name: Scalars['String'],
  overview?: Maybe<Scalars['String']>,
  thumbnail?: Maybe<Scalars['ID']>,
};

