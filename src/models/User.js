import MyBaseModel from './helpers/MyBaseModel';
import router from '../router';

export default class User extends MyBaseModel {
  static entity = 'user';
  static entityUrl = '/api/users';
  static primaryKey = 'id';
  // static openRecord(pKey){
  //   router.push({
  //     name: '/lists/users/:rId',
  //     params: {
  //       rId: pKey,
  //     },
  //   })
  // }

  static parentWithables = [
  ];

  // static rules = {
  //   readables: (user) => true,
  //   readable: (user, item) => true,
  //   editable: (user, item) => true,
  // };

  // static fieldsMetadata = {
  //   'SystemUser': { relationRules: { linkables: (user) => { return {} } } },
  //   'DeviceKey': {},
  //   'Name': {},
  //   'LastUsed': {},
  //   'FbId': {}
  // };

  static fields() {
    return {
      // 'SystemUser': this.attr(''),
      // 'DeviceKey': this.attr(''),
      // 'Name': this.attr(''),
      // 'LastUsed': this.attr(''),
      // 'FbId': this.attr(''),
      // 'systemUserRel': this.belongsTo(SystemUser, 'SystemUser')
    };
  }

  // static templateListGrid = {
  //   // Define templateListGrid
  // };
  //
  // static displayMapFull = {
  //   // Define displayMapFull
  // };

  static FetchAll(relationships = [], flags = {}, moreHeaders = {}, options = { page: 1, limit: 15, filters: {}, clearPrimaryModelOnly: false }) {
    return this.customSupabaseApiFetchAll(
      `${this.baseUrl}${this.entityUrl}`,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      options,
      this
    );
  }

  static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiFetchById(
      `${this.baseUrl}${this.entityUrl}`,
      id,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }

  static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiStore(
      `${this.baseUrl}${this.entityUrl}`,
      entity,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }

  static registerFromClient(entity, relationships = [], flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiStore(
      `${this.baseUrl}/api/auth/register-from-client`,
      entity,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }

  static loginFromVue(entity, relationships = [], flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiStore(
      `${this.baseUrl}/api/auth/login-from-vue`,
      entity,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }



  static refetchAuthInfo(relationships = [], flags = {}, moreHeaders = {}, options = { page: 1, limit: 15, filters: {}, clearPrimaryModelOnly: false }) {
    return this.customSupabaseApiFetchAll(
      `${this.baseUrl}/api/auth/refetch-auth-info`,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      options,
      this
    );
  }

  static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiUpdate(
      `${this.baseUrl}${this.entityUrl}`,
      entity,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }

  static Delete(entityId, options = { flags: {}, moreHeaders: {} }) {
    return this.customSupabaseApiDelete(
      `${this.baseUrl}${this.entityUrl}`,
      entityId,
      options.flags,
      this.mergeHeaders(options.moreHeaders),
      this
    );
  }
}
