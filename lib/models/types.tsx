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
  trackQuoteView?: Maybe<GenericRequest>,
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


export type PublicQueryTrackQuoteViewArgs = {
  key?: Maybe<Scalars['String']>,
  viewType?: Maybe<Scalars['String']>
};

