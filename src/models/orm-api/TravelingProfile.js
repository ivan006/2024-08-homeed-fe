import MyBaseModel from '../helpers/MyBaseModel';

export default class TravelingProfile extends MyBaseModel {
  static entity = 'traveling-profiles';
  static entityUrl = '/api/auth/preference/orm-api/traveling-profiles';
  static primaryKey = 'id';

  static parentWithables = [
  ];


  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(null),
      description: this.attr(null).nullable(),
      owner: this.attr(null),
      status: this.attr(null),
      created_at: this.attr(null).nullable(),
      updated_at: this.attr(null).nullable()
    };
  }

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

  static Update(entity, relationships = [], flags = {}, moreHeaders = {}, supportFiles = false) {
    return this.customSupabaseApiUpdate(
      `${this.baseUrl}${this.entityUrl}`,
      entity,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this,
      supportFiles
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
