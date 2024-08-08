/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Account } from "./account.js";
import { Liveness } from "./liveness.js";

export class SteamSets extends ClientSDK {
    private _account?: Account;
    get account(): Account {
        return (this._account ??= new Account(this.options$));
    }

    private _liveness?: Liveness;
    get liveness(): Liveness {
        return (this._liveness ??= new Liveness(this.options$));
    }
}
