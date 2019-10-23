export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Billing = {
  id: Scalars['ID'],
  senderName: Scalars['String'],
};

export type MfkAccountTransferNotification = Billing & {
   __typename?: 'MFKAccountTransferNotification',
  id: Scalars['ID'],
  senderName: Scalars['String'],
  accountTransferNotificationID: Scalars['ID'],
};

export type MfkInvoice = Billing & {
   __typename?: 'MFKInvoice',
  id: Scalars['ID'],
  senderName: Scalars['String'],
  invoiceID: Scalars['ID'],
};

export type Query = {
   __typename?: 'Query',
  billing?: Maybe<Billing>,
};


export type QueryBillingArgs = {
  id: Scalars['ID']
};
