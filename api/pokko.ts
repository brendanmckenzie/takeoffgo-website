import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any };
};

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Entries>;
  entry?: Maybe<PokEntry>;
  sync?: Maybe<SyncCollection>;
  taxonomy?: Maybe<PageCollection>;
};


export type QueryEntryArgs = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
};


export type QuerySyncArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<SyncCondition>;
};


export type QueryTaxonomyArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<PagesCondition>;
};

export type Entries = {
  __typename?: 'Entries';
  buttons?: Maybe<Buttons>;
  title?: Maybe<Title>;
  column?: Maybe<Column>;
  image?: Maybe<Image>;
  fiftyFifty?: Maybe<FiftyFifty>;
  highlight?: Maybe<Highlight>;
  seo?: Maybe<Seo>;
  brandLine?: Maybe<BrandLine>;
  mediaBox?: Maybe<MediaBox>;
  messageBox?: Maybe<MessageBox>;
  body?: Maybe<Body>;
  hero?: Maybe<Hero>;
  button?: Maybe<Button>;
  columns?: Maybe<Columns>;
  customerQuote?: Maybe<CustomerQuote>;
  modularPage?: Maybe<ModularPage>;
  allButtons?: Maybe<ButtonsCollection>;
  allTitle?: Maybe<TitleCollection>;
  allColumn?: Maybe<ColumnCollection>;
  allImage?: Maybe<ImageCollection>;
  allFiftyFifty?: Maybe<FiftyFiftyCollection>;
  allHighlight?: Maybe<HighlightCollection>;
  allSeo?: Maybe<SeoCollection>;
  allBrandLine?: Maybe<BrandLineCollection>;
  allMediaBox?: Maybe<MediaBoxCollection>;
  allMessageBox?: Maybe<MessageBoxCollection>;
  allBody?: Maybe<BodyCollection>;
  allHero?: Maybe<HeroCollection>;
  allButton?: Maybe<ButtonCollection>;
  allColumns?: Maybe<ColumnsCollection>;
  allCustomerQuote?: Maybe<CustomerQuoteCollection>;
  allModularPage?: Maybe<ModularPageCollection>;
};


export type EntriesButtonsArgs = {
  id: Scalars['String'];
};


export type EntriesTitleArgs = {
  id: Scalars['String'];
};


export type EntriesColumnArgs = {
  id: Scalars['String'];
};


export type EntriesImageArgs = {
  id: Scalars['String'];
};


export type EntriesFiftyFiftyArgs = {
  id: Scalars['String'];
};


export type EntriesHighlightArgs = {
  id: Scalars['String'];
};


export type EntriesSeoArgs = {
  id: Scalars['String'];
};


export type EntriesBrandLineArgs = {
  id: Scalars['String'];
};


export type EntriesMediaBoxArgs = {
  id: Scalars['String'];
};


export type EntriesMessageBoxArgs = {
  id: Scalars['String'];
};


export type EntriesBodyArgs = {
  id: Scalars['String'];
};


export type EntriesHeroArgs = {
  id: Scalars['String'];
};


export type EntriesButtonArgs = {
  id: Scalars['String'];
};


export type EntriesColumnsArgs = {
  id: Scalars['String'];
};


export type EntriesCustomerQuoteArgs = {
  id: Scalars['String'];
};


export type EntriesModularPageArgs = {
  id: Scalars['String'];
};


export type EntriesAllButtonsArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTitleArgs = {
  condition?: Maybe<TitleFilter>;
  orderBy?: Maybe<TitleOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllColumnArgs = {
  condition?: Maybe<ColumnFilter>;
  orderBy?: Maybe<ColumnOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllImageArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllFiftyFiftyArgs = {
  condition?: Maybe<FiftyFiftyFilter>;
  orderBy?: Maybe<FiftyFiftyOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHighlightArgs = {
  condition?: Maybe<HighlightFilter>;
  orderBy?: Maybe<HighlightOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllSeoArgs = {
  condition?: Maybe<SeoFilter>;
  orderBy?: Maybe<SeoOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllBrandLineArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllMediaBoxArgs = {
  condition?: Maybe<MediaBoxFilter>;
  orderBy?: Maybe<MediaBoxOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllMessageBoxArgs = {
  condition?: Maybe<MessageBoxFilter>;
  orderBy?: Maybe<MessageBoxOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllBodyArgs = {
  condition?: Maybe<BodyFilter>;
  orderBy?: Maybe<BodyOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllHeroArgs = {
  condition?: Maybe<HeroFilter>;
  orderBy?: Maybe<HeroOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllButtonArgs = {
  condition?: Maybe<ButtonFilter>;
  orderBy?: Maybe<ButtonOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllColumnsArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllCustomerQuoteArgs = {
  condition?: Maybe<CustomerQuoteFilter>;
  orderBy?: Maybe<CustomerQuoteOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllModularPageArgs = {
  condition?: Maybe<ModularPageFilter>;
  orderBy?: Maybe<ModularPageOrderBy>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type Buttons = PokEntry & PokValue & {
  __typename?: 'Buttons';
  id: Scalars['String'];
  pokko: Pokko;
  buttons?: Maybe<Array<Maybe<PokValue>>>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type Pokko = {
  __typename?: 'Pokko';
  id: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  created: Scalars['String'];
  modified: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type Title = PokEntry & PokValue & {
  __typename?: 'Title';
  id: Scalars['String'];
  pokko: Pokko;
  title?: Maybe<Scalars['String']>;
};

export type Column = PokEntry & PokValue & {
  __typename?: 'Column';
  id: Scalars['String'];
  pokko: Pokko;
  span?: Maybe<Scalars['String']>;
  components?: Maybe<Array<Maybe<PokValue>>>;
};

export type Image = PokEntry & PokValue & {
  __typename?: 'Image';
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  id: Scalars['String'];
  url: Scalars['String'];
};


export type PokMediaUrlArgs = {
  process?: Maybe<PokMediaProcess>;
};

export type PokMediaProcess = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  fit?: Maybe<PokMediaFit>;
  position?: Maybe<PokMediaPosition>;
};

export enum PokMediaFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum PokMediaPosition {
  Centre = 'CENTRE',
  Top = 'TOP',
  RightTop = 'RIGHT_TOP',
  Right = 'RIGHT',
  RightBottom = 'RIGHT_BOTTOM',
  Bottom = 'BOTTOM',
  LeftBottom = 'LEFT_BOTTOM',
  Left = 'LEFT',
  LeftTop = 'LEFT_TOP'
}

export type FiftyFifty = PokEntry & PokValue & IButtons & IBody & ITitle & IImage & {
  __typename?: 'FiftyFifty';
  id: Scalars['String'];
  pokko: Pokko;
  subtitle?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<PokValue>>>;
  image?: Maybe<PokMedia>;
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IButtons = {
  id: Scalars['String'];
  buttons?: Maybe<Array<Maybe<PokValue>>>;
};

export type IBody = {
  id: Scalars['String'];
  body?: Maybe<Scalars['String']>;
};

export type ITitle = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type IImage = {
  id: Scalars['String'];
  image?: Maybe<PokMedia>;
};

export type Highlight = PokEntry & PokValue & IButtons & IBody & ITitle & IImage & {
  __typename?: 'Highlight';
  id: Scalars['String'];
  pokko: Pokko;
  buttons?: Maybe<Array<Maybe<PokValue>>>;
  image?: Maybe<PokMedia>;
  subtitle?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Seo = PokEntry & PokValue & {
  __typename?: 'Seo';
  id: Scalars['String'];
  pokko: Pokko;
  description?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
};

export type BrandLine = PokEntry & PokValue & {
  __typename?: 'BrandLine';
  id: Scalars['String'];
  pokko: Pokko;
};

export type MediaBox = PokEntry & PokValue & IBody & ITitle & IImage & {
  __typename?: 'MediaBox';
  id: Scalars['String'];
  pokko: Pokko;
  image?: Maybe<PokMedia>;
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type MessageBox = PokEntry & PokValue & IBody & ITitle & {
  __typename?: 'MessageBox';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Body = PokEntry & PokValue & {
  __typename?: 'Body';
  id: Scalars['String'];
  pokko: Pokko;
  body?: Maybe<Scalars['String']>;
};

export type Hero = PokEntry & PokValue & IButtons & IBody & ITitle & IImage & {
  __typename?: 'Hero';
  id: Scalars['String'];
  pokko: Pokko;
  buttons?: Maybe<Array<Maybe<PokValue>>>;
  image?: Maybe<PokMedia>;
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Button = PokEntry & PokValue & ITitle & {
  __typename?: 'Button';
  id: Scalars['String'];
  pokko: Pokko;
  icon?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Columns = PokEntry & PokValue & {
  __typename?: 'Columns';
  id: Scalars['String'];
  pokko: Pokko;
  columns?: Maybe<Array<Maybe<PokValue>>>;
};

export type CustomerQuote = PokEntry & PokValue & IBody & {
  __typename?: 'CustomerQuote';
  id: Scalars['String'];
  pokko: Pokko;
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type ModularPage = PokEntry & PokValue & ISeo & {
  __typename?: 'ModularPage';
  id: Scalars['String'];
  pokko: Pokko;
  description?: Maybe<Scalars['String']>;
  components?: Maybe<Array<Maybe<PokValue>>>;
  pageTitle?: Maybe<Scalars['String']>;
};

export type ISeo = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
};

export type ButtonsCollection = {
  __typename?: 'ButtonsCollection';
  nodes: Array<Maybe<Buttons>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
};

export type TitleCollection = {
  __typename?: 'TitleCollection';
  nodes: Array<Maybe<Title>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TitleFilter = {
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum TitleOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ColumnCollection = {
  __typename?: 'ColumnCollection';
  nodes: Array<Maybe<Column>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ColumnFilter = {
  /** Filter on the Span field */
  span?: Maybe<Scalars['String']>;
};

export enum ColumnOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SpanAsc = 'SPAN_ASC',
  SpanDesc = 'SPAN_DESC'
}

export type ImageCollection = {
  __typename?: 'ImageCollection';
  nodes: Array<Maybe<Image>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FiftyFiftyCollection = {
  __typename?: 'FiftyFiftyCollection';
  nodes: Array<Maybe<FiftyFifty>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FiftyFiftyFilter = {
  /** Filter on the Subtitle field */
  subtitle?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum FiftyFiftyOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SubtitleAsc = 'SUBTITLE_ASC',
  SubtitleDesc = 'SUBTITLE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type HighlightCollection = {
  __typename?: 'HighlightCollection';
  nodes: Array<Maybe<Highlight>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HighlightFilter = {
  /** Filter on the Subtitle field */
  subtitle?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum HighlightOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SubtitleAsc = 'SUBTITLE_ASC',
  SubtitleDesc = 'SUBTITLE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type SeoCollection = {
  __typename?: 'SeoCollection';
  nodes: Array<Maybe<Seo>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SeoFilter = {
  /** Filter on the Description field */
  description?: Maybe<Scalars['String']>;
  /** Filter on the Page title field */
  pageTitle?: Maybe<Scalars['String']>;
};

export enum SeoOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  PageTitleAsc = 'PAGE_TITLE_ASC',
  PageTitleDesc = 'PAGE_TITLE_DESC'
}

export type BrandLineCollection = {
  __typename?: 'BrandLineCollection';
  nodes: Array<Maybe<BrandLine>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MediaBoxCollection = {
  __typename?: 'MediaBoxCollection';
  nodes: Array<Maybe<MediaBox>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MediaBoxFilter = {
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum MediaBoxOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type MessageBoxCollection = {
  __typename?: 'MessageBoxCollection';
  nodes: Array<Maybe<MessageBox>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MessageBoxFilter = {
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum MessageBoxOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type BodyCollection = {
  __typename?: 'BodyCollection';
  nodes: Array<Maybe<Body>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BodyFilter = {
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum BodyOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type HeroCollection = {
  __typename?: 'HeroCollection';
  nodes: Array<Maybe<Hero>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HeroFilter = {
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum HeroOrderBy {
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  nodes: Array<Maybe<Button>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ButtonFilter = {
  /** Filter on the Icon field */
  icon?: Maybe<Scalars['String']>;
  /** Filter on the Style field */
  style?: Maybe<Scalars['String']>;
  /** Filter on the Target field */
  target?: Maybe<Scalars['String']>;
  /** Filter on the Title field */
  title?: Maybe<Scalars['String']>;
};

export enum ButtonOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  IconAsc = 'ICON_ASC',
  IconDesc = 'ICON_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  StyleAsc = 'STYLE_ASC',
  StyleDesc = 'STYLE_DESC',
  TargetAsc = 'TARGET_ASC',
  TargetDesc = 'TARGET_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

export type ColumnsCollection = {
  __typename?: 'ColumnsCollection';
  nodes: Array<Maybe<Columns>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CustomerQuoteCollection = {
  __typename?: 'CustomerQuoteCollection';
  nodes: Array<Maybe<CustomerQuote>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CustomerQuoteFilter = {
  /** Filter on the Author field */
  author?: Maybe<Scalars['String']>;
  /** Filter on the Body field */
  body?: Maybe<Scalars['String']>;
};

export enum CustomerQuoteOrderBy {
  AuthorAsc = 'AUTHOR_ASC',
  AuthorDesc = 'AUTHOR_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type ModularPageCollection = {
  __typename?: 'ModularPageCollection';
  nodes: Array<Maybe<ModularPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ModularPageFilter = {
  /** Filter on the Description field */
  description?: Maybe<Scalars['String']>;
  /** Filter on the Page title field */
  pageTitle?: Maybe<Scalars['String']>;
};

export enum ModularPageOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  PageTitleAsc = 'PAGE_TITLE_ASC',
  PageTitleDesc = 'PAGE_TITLE_DESC'
}

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Sync = {
  __typename?: 'Sync';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
};


export type SyncCondition = {
  after?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Page = {
  __typename?: 'Page';
  fullPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  entry?: Maybe<PokEntry>;
  type?: Maybe<Scalars['String']>;
  entryId?: Maybe<Scalars['String']>;
};

export type PagesCondition = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathExact?: Maybe<Scalars['Boolean']>;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = (
  { __typename?: 'Query' }
  & { entry?: Maybe<{ __typename?: 'Buttons' } | { __typename?: 'Title' } | { __typename?: 'Column' } | { __typename?: 'Image' } | { __typename?: 'FiftyFifty' } | { __typename?: 'Highlight' } | { __typename?: 'Seo' } | { __typename?: 'BrandLine' } | { __typename?: 'MediaBox' } | { __typename?: 'MessageBox' } | { __typename?: 'Body' } | { __typename?: 'Hero' } | { __typename?: 'Button' } | { __typename?: 'Columns' } | { __typename?: 'CustomerQuote' } | (
    { __typename?: 'ModularPage' }
    & { components?: Maybe<Array<Maybe<(
      { __typename: 'Buttons' }
      & HomeModule_Buttons_Fragment
    ) | (
      { __typename: 'Title' }
      & HomeModule_Title_Fragment
    ) | (
      { __typename: 'Column' }
      & HomeModule_Column_Fragment
    ) | (
      { __typename: 'Image' }
      & HomeModule_Image_Fragment
    ) | (
      { __typename: 'FiftyFifty' }
      & HomeModule_FiftyFifty_Fragment
    ) | (
      { __typename: 'Highlight' }
      & HomeModule_Highlight_Fragment
    ) | (
      { __typename: 'Seo' }
      & HomeModule_Seo_Fragment
    ) | (
      { __typename: 'BrandLine' }
      & HomeModule_BrandLine_Fragment
    ) | (
      { __typename: 'MediaBox' }
      & HomeModule_MediaBox_Fragment
    ) | (
      { __typename: 'MessageBox' }
      & HomeModule_MessageBox_Fragment
    ) | (
      { __typename: 'Body' }
      & HomeModule_Body_Fragment
    ) | (
      { __typename: 'Hero' }
      & HomeModule_Hero_Fragment
    ) | (
      { __typename: 'Button' }
      & HomeModule_Button_Fragment
    ) | (
      { __typename: 'Columns' }
      & HomeModule_Columns_Fragment
    ) | (
      { __typename: 'CustomerQuote' }
      & HomeModule_CustomerQuote_Fragment
    ) | (
      { __typename: 'ModularPage' }
      & HomeModule_ModularPage_Fragment
    )>>> }
  )> }
);

type HomeModule_Buttons_Fragment = { __typename?: 'Buttons' };

type HomeModule_Title_Fragment = { __typename?: 'Title' };

type HomeModule_Column_Fragment = { __typename?: 'Column' };

type HomeModule_Image_Fragment = (
  { __typename?: 'Image' }
  & ImageModuleFragment
);

type HomeModule_FiftyFifty_Fragment = { __typename?: 'FiftyFifty' };

type HomeModule_Highlight_Fragment = (
  { __typename?: 'Highlight' }
  & HighlightModuleFragment
);

type HomeModule_Seo_Fragment = { __typename?: 'Seo' };

type HomeModule_BrandLine_Fragment = { __typename?: 'BrandLine' };

type HomeModule_MediaBox_Fragment = { __typename?: 'MediaBox' };

type HomeModule_MessageBox_Fragment = { __typename?: 'MessageBox' };

type HomeModule_Body_Fragment = { __typename?: 'Body' };

type HomeModule_Hero_Fragment = (
  { __typename?: 'Hero' }
  & HeroModuleFragment
);

type HomeModule_Button_Fragment = { __typename?: 'Button' };

type HomeModule_Columns_Fragment = { __typename?: 'Columns' };

type HomeModule_CustomerQuote_Fragment = (
  { __typename?: 'CustomerQuote' }
  & CustomerQuoteModuleFragment
);

type HomeModule_ModularPage_Fragment = { __typename?: 'ModularPage' };

export type HomeModuleFragment = HomeModule_Buttons_Fragment | HomeModule_Title_Fragment | HomeModule_Column_Fragment | HomeModule_Image_Fragment | HomeModule_FiftyFifty_Fragment | HomeModule_Highlight_Fragment | HomeModule_Seo_Fragment | HomeModule_BrandLine_Fragment | HomeModule_MediaBox_Fragment | HomeModule_MessageBox_Fragment | HomeModule_Body_Fragment | HomeModule_Hero_Fragment | HomeModule_Button_Fragment | HomeModule_Columns_Fragment | HomeModule_CustomerQuote_Fragment | HomeModule_ModularPage_Fragment;

export type HighlightModuleFragment = (
  { __typename?: 'Highlight' }
  & Pick<Highlight, 'title' | 'subtitle' | 'body'>
  & { image?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )>, buttons?: Maybe<Array<Maybe<{ __typename?: 'Buttons' } | { __typename?: 'Title' } | { __typename?: 'Column' } | { __typename?: 'Image' } | { __typename?: 'FiftyFifty' } | { __typename?: 'Highlight' } | { __typename?: 'Seo' } | { __typename?: 'BrandLine' } | { __typename?: 'MediaBox' } | { __typename?: 'MessageBox' } | { __typename?: 'Body' } | { __typename?: 'Hero' } | (
    { __typename?: 'Button' }
    & Pick<Button, 'icon' | 'style' | 'target' | 'title'>
  ) | { __typename?: 'Columns' } | { __typename?: 'CustomerQuote' } | { __typename?: 'ModularPage' }>>> }
);

export type HeroModuleFragment = (
  { __typename?: 'Hero' }
  & Pick<Hero, 'title'>
  & { heroBody: Hero['body'] }
  & { image?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )>, buttons?: Maybe<Array<Maybe<{ __typename: 'Buttons' } | { __typename: 'Title' } | { __typename: 'Column' } | { __typename: 'Image' } | { __typename: 'FiftyFifty' } | { __typename: 'Highlight' } | { __typename: 'Seo' } | { __typename: 'BrandLine' } | { __typename: 'MediaBox' } | { __typename: 'MessageBox' } | { __typename: 'Body' } | { __typename: 'Hero' } | (
    { __typename: 'Button' }
    & Pick<Button, 'icon' | 'style' | 'target' | 'title'>
  ) | { __typename: 'Columns' } | { __typename: 'CustomerQuote' } | { __typename: 'ModularPage' }>>> }
);

export type ImageModuleFragment = (
  { __typename?: 'Image' }
  & { image?: Maybe<(
    { __typename?: 'PokMedia' }
    & Pick<PokMedia, 'url'>
  )> }
);

export type CustomerQuoteModuleFragment = (
  { __typename?: 'CustomerQuote' }
  & Pick<CustomerQuote, 'author' | 'body'>
);

export const HeroModuleFragmentDoc = gql`
    fragment HeroModule on Hero {
  title
  heroBody: body
  image {
    url
  }
  buttons {
    __typename
    ... on Button {
      icon
      style
      target
      title
    }
  }
}
    `;
export const HighlightModuleFragmentDoc = gql`
    fragment HighlightModule on Highlight {
  title
  subtitle
  body
  image {
    url
  }
  buttons {
    ... on Button {
      icon
      style
      target
      title
    }
  }
}
    `;
export const ImageModuleFragmentDoc = gql`
    fragment ImageModule on Image {
  image {
    url
  }
}
    `;
export const CustomerQuoteModuleFragmentDoc = gql`
    fragment CustomerQuoteModule on CustomerQuote {
  author
  body
}
    `;
export const HomeModuleFragmentDoc = gql`
    fragment HomeModule on PokValue {
  ...HeroModule
  ...HighlightModule
  ...ImageModule
  ...CustomerQuoteModule
}
    ${HeroModuleFragmentDoc}
${HighlightModuleFragmentDoc}
${ImageModuleFragmentDoc}
${CustomerQuoteModuleFragmentDoc}`;
export const GetHomeDocument = gql`
    query GetHome {
  entry(path: ["website", "home"]) {
    ... on ModularPage {
      components {
        __typename
        ...HomeModule
      }
    }
  }
}
    ${HomeModuleFragmentDoc}`;

/**
 * __useGetHomeQuery__
 *
 * To run a query within a React component, call `useGetHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeQuery(baseOptions?: Apollo.QueryHookOptions<GetHomeQuery, GetHomeQueryVariables>) {
        return Apollo.useQuery<GetHomeQuery, GetHomeQueryVariables>(GetHomeDocument, baseOptions);
      }
export function useGetHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomeQuery, GetHomeQueryVariables>) {
          return Apollo.useLazyQuery<GetHomeQuery, GetHomeQueryVariables>(GetHomeDocument, baseOptions);
        }
export type GetHomeQueryHookResult = ReturnType<typeof useGetHomeQuery>;
export type GetHomeLazyQueryHookResult = ReturnType<typeof useGetHomeLazyQuery>;
export type GetHomeQueryResult = Apollo.QueryResult<GetHomeQuery, GetHomeQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "PokEntry": [
      "Buttons",
      "Title",
      "Column",
      "Image",
      "FiftyFifty",
      "Highlight",
      "Seo",
      "BrandLine",
      "MediaBox",
      "MessageBox",
      "Body",
      "Hero",
      "Button",
      "Columns",
      "CustomerQuote",
      "ModularPage"
    ],
    "PokValue": [
      "Buttons",
      "Title",
      "Column",
      "Image",
      "FiftyFifty",
      "Highlight",
      "Seo",
      "BrandLine",
      "MediaBox",
      "MessageBox",
      "Body",
      "Hero",
      "Button",
      "Columns",
      "CustomerQuote",
      "ModularPage"
    ],
    "IButtons": [
      "FiftyFifty",
      "Highlight",
      "Hero"
    ],
    "IBody": [
      "FiftyFifty",
      "Highlight",
      "MediaBox",
      "MessageBox",
      "Hero",
      "CustomerQuote"
    ],
    "ITitle": [
      "FiftyFifty",
      "Highlight",
      "MediaBox",
      "MessageBox",
      "Hero",
      "Button"
    ],
    "IImage": [
      "FiftyFifty",
      "Highlight",
      "MediaBox",
      "Hero"
    ],
    "ISeo": [
      "ModularPage"
    ]
  }
};
      export default result;
    