/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Account } from "./account.js";
import { App } from "./app.js";
import { Badge } from "./badge.js";
import { Connection } from "./connection.js";
import { Data } from "./data.js";
import { Developer } from "./developer.js";
import { Leaderboard } from "./leaderboard.js";
import { Liveness } from "./liveness.js";
import { Location } from "./location.js";
import { Public } from "./public.js";
import { Session } from "./session.js";
import { Settings } from "./settings.js";

export class SteamSets extends ClientSDK {
  private _account?: Account;
  get account(): Account {
    return (this._account ??= new Account(this._options));
  }

  private _connection?: Connection;
  get connection(): Connection {
    return (this._connection ??= new Connection(this._options));
  }

  private _developer?: Developer;
  get developer(): Developer {
    return (this._developer ??= new Developer(this._options));
  }

  private _session?: Session;
  get session(): Session {
    return (this._session ??= new Session(this._options));
  }

  private _settings?: Settings;
  get settings(): Settings {
    return (this._settings ??= new Settings(this._options));
  }

  private _data?: Data;
  get data(): Data {
    return (this._data ??= new Data(this._options));
  }

  private _public?: Public;
  get public(): Public {
    return (this._public ??= new Public(this._options));
  }

  private _app?: App;
  get app(): App {
    return (this._app ??= new App(this._options));
  }

  private _badge?: Badge;
  get badge(): Badge {
    return (this._badge ??= new Badge(this._options));
  }

  private _leaderboard?: Leaderboard;
  get leaderboard(): Leaderboard {
    return (this._leaderboard ??= new Leaderboard(this._options));
  }

  private _liveness?: Liveness;
  get liveness(): Liveness {
    return (this._liveness ??= new Liveness(this._options));
  }

  private _location?: Location;
  get location(): Location {
    return (this._location ??= new Location(this._options));
  }
}
