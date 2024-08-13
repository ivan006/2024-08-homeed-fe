import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'

import { DBCrudCacheSet } from 'quicklists-vue-orm-ui';

import User from 'src/models/User'
import Session from 'src/models/Session'
import RouteLineage  from "src/models/RouteLineage";
import Post from "src/models/orm-api/Post";


import Attendance from 'src/models/orm-api/Attendance';
import Child from 'src/models/orm-api/Child';
import Event from 'src/models/orm-api/Event';
import FailedJob from 'src/models/orm-api/FailedJob';
import Family from 'src/models/orm-api/Family';
import Membership from 'src/models/orm-api/Membership';
import Migration from 'src/models/orm-api/Migration';
import PasswordResetToken from 'src/models/orm-api/PasswordResetToken';
import PersonalAccessToken from 'src/models/orm-api/PersonalAccessToken';
import PostTag from 'src/models/orm-api/PostTag';
// import Post from 'src/models/orm-api/Post';
import School from 'src/models/orm-api/School';
import Tag from 'src/models/orm-api/Tag';
// import User from 'src/models/User';


// Initialize the database
const database = new VuexORM.Database()

// Register models
database.register(DBCrudCacheSet);

database.register(User)
database.register(Session)
database.register(RouteLineage)
database.register(Post)


database.register(DBCrudCacheSet);
database.register(Attendance);
database.register(Child);
database.register(Event);
database.register(FailedJob);
database.register(Family);
database.register(Membership);
database.register(Migration);
database.register(PasswordResetToken);
database.register(PersonalAccessToken);
database.register(PostTag);
// database.register(Post);
database.register(School);
database.register(Tag);
// database.register(User);




// Create Vuex store
const store = createStore({
  plugins: [VuexORM.install(database)]
})

export default store
