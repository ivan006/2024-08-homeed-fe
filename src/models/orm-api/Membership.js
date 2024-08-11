import MyBaseModel from 'src/models/helpers/MyBaseModel';
import router from 'src/router';
import User from 'src/models/orm-api/User';
import Family from 'src/models/orm-api/Family';
import School from 'src/models/orm-api/School';

export default class Membership extends MyBaseModel {
    static entity = 'membership';
    static entityUrl = '/api/memberships';
    static primaryKey = 'id';
    static titleKey = 'id';
    static openRecord(pKey){
      router.push({
        name: '/lists/memberships/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'family',
        'school',
        'created_by',
        'updated_by'
    ];

    static rules = {
        readables: () => true,
        readable: (item) => true,
        editable: (item) => true,
        creatable: () => true,
    };

    static fieldsMetadata = {
        'id': {},
            'family_id': { relationRules: { linkables: (user) => { return {} } } },
            'school_id': { relationRules: { linkables: (user) => { return {} } } },
            'created_by': { relationRules: { linkables: (user) => { return {} } } },
            'updated_by': { relationRules: { linkables: (user) => { return {} } } },
            'created_at': {},
            'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'family_id': this.attr('').nullable(),
            'school_id': this.attr('').nullable(),
            'created_by': this.attr('').nullable(),
            'updated_by': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'created_by': this.belongsTo(User, 'created_by'),
            'family': this.belongsTo(Family, 'family_id'),
            'school': this.belongsTo(School, 'school_id'),
            'updated_by': this.belongsTo(User, 'updated_by')
        };
    }

    static templateListGrid = {
        // Define templateListGrid
    };

    static templateOverview = {
        // Define templateOverview
    };

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

    static Delete(entityId, flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId,
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }
}
