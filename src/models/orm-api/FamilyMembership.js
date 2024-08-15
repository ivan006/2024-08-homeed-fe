import MyBaseModel from 'src/models/helpers/MyBaseModel';
import Family from 'src/models/orm-api/Family';
import User from 'src/models/User';

export default class FamilyMembership extends MyBaseModel {
    static entity = 'familymembership';
    static entityUrl = '/api/family-memberships';
    static primaryKey = 'id';
    static titleKey = 'id';
    static openRecord(pVal, item, router){
      router.push({
        name: '/lists/family-memberships/:rId/:rName',
        params: {
          rId: pVal,
          rName: pVal,
        },
      })
    }

    static parentWithables = [
        'user',
        'family'
    ];

    static rules = {
        readables: () => true,
        readable: (item) => true,
        editable: (item) => true,
        creatable: () => true,
    };

    static fieldsMetadata = {
        'id': {},
            'user_id': { relationRules: { linkables: (user) => { return {} } } },
            'family_id': { relationRules: { linkables: (user) => { return {} } } },
            'created_at': {},
            'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'user_id': this.attr('').nullable(),
            'family_id': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'family': this.belongsTo(Family, 'family_id'),
            'user': this.belongsTo(User, 'user_id')
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
