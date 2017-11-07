/**
 * @flow
 * @relayHash 2626e6491e3a1ca109b9ac511e93c07d
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type CreateWebMutationVariables = {|
  input: {
    domain: string;
    name: string;
    ownerId?: ?string;
    owner?: ?{
      branch?: ?"BAN_KOH" | "SAVE_ONE" | "KHON_KHAN";
      cellPhone?: ?string;
      dateOfBirth?: ?any;
      department?: ?"SERVER" | "KITCHEN" | "DISHWASHER" | "DAILY" | "MANAGER" | "OWNER";
      email?: ?string;
      employedDate?: ?any;
      firstName?: ?string;
      idCardNumber?: ?string;
      lastName?: ?string;
      leaveWithPay?: ?number;
      nickName?: ?string;
      password?: ?string;
      role?: ?"ADMIN" | "STAFF" | "MANAGER";
      savingsAccountID?: ?string;
      savingsBank?: ?string;
      shift?: ?"MORNING" | "MID" | "GRAVEYARD";
      vacation?: ?number;
      imageId?: ?string;
      image?: ?{
        name: string;
      };
      timesheetsIds?: ?$ReadOnlyArray<string>;
      timesheets?: ?$ReadOnlyArray<{
        rating?: ?number;
        remark?: ?string;
        timeCode?: ?"R" | "OT" | "H" | "H1" | "V" | "L" | "L1" | "S" | "S1" | "A" | "A1";
        workday?: ?any;
      }>;
      websIds?: ?$ReadOnlyArray<string>;
      webs?: ?$ReadOnlyArray<{
        domain: string;
        name: string;
      }>;
    };
    clientMutationId: string;
  };
|};
export type CreateWebMutationResponse = {|
  +createWeb: ?{|
    +edge: ?{|
      +node: {| |};
    |};
  |};
|};
*/


/*
mutation CreateWebMutation(
  $input: CreateWebInput!
) {
  createWeb(input: $input) {
    edge {
      node {
        ...WebListItem_web
        id
      }
    }
  }
}

fragment WebListItem_web on Web {
  updatedAt
  domain
  owner {
    id
  }
  id
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateWebInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateWebMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateWebInput!"
          }
        ],
        "concreteType": "CreateWebPayload",
        "name": "createWeb",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "WebEdge",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Web",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "WebListItem_web",
                    "args": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "CreateWebMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreateWebInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "CreateWebMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreateWebInput!"
          }
        ],
        "concreteType": "CreateWebPayload",
        "name": "createWeb",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "WebEdge",
            "name": "edge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Web",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Web",
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "updatedAt",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "domain",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "name": "owner",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "name",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation CreateWebMutation(\n  $input: CreateWebInput!\n) {\n  createWeb(input: $input) {\n    edge {\n      node {\n        ...WebListItem_web\n        id\n      }\n    }\n  }\n}\n\nfragment WebListItem_web on Web {\n  updatedAt\n  domain\n  owner {\n    id\n  }\n  id\n  name\n}\n"
};

module.exports = batch;
