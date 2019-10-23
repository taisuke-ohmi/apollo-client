export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "Billing",
        "possibleTypes": [
          {
            "name": "MFKInvoice"
          },
          {
            "name": "MFKAccountTransferNotification"
          }
        ]
      }
    ]
  }
};

export default result;
