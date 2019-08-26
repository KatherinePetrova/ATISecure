import { Datastore } from "nedb-async-await";
import path from "path";
import { remote } from "electron";

let user_db = new Datastore({
  autoload: true,
  filename: path.join(remote.app.getPath("userData"), "/ATISecure/users.db")
});

export default {
  user_db
};
