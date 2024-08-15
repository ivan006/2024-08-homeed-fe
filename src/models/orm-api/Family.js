import MyBaseModel from 'src/models/helpers/MyBaseModel';
import User from 'src/models/User';
import Child from 'src/models/orm-api/Child';
import FamilyMembership from 'src/models/orm-api/FamilyMembership';
import SchoolFamilyEnrollment from 'src/models/orm-api/SchoolFamilyEnrollment';

export default class Family extends MyBaseModel {
    static entity = 'family';
    static entityUrl = '/api/families';
    static primaryKey = 'id';
    static titleKey = 'name';
    static openRecord(pKeyValue, item, router){
      router.push({
        name: '/lists/families/:rId/:rName',
        params: {
          rId: pKeyValue,
          rName: pKeyValue,
        },
      })
    }

    static parentWithables = [
        'creator',
        'updater'
    ];

    static rules = {
        readables: () => true,
        readable: (item) => true,
        editable: (item) => true,
        creatable: () => true,
    };

    static fieldsMetadata = {
        'id': {},
            'name': {},
            'creator_id': { relationRules: { linkables: (user) => { return {} } } },
            'updater_id': { relationRules: { linkables: (user) => { return {} } } },
            'created_at': {},
            'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'name': this.attr(''),
            'creator_id': this.attr('').nullable(),
            'updater_id': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'creator': this.belongsTo(User, 'creator_id'),
            'updater': this.belongsTo(User, 'updater_id'),
            'children': this.hasMany(Child, 'family_id'),
            'familyMemberships': this.hasMany(FamilyMembership, 'family_id'),
            'schoolFamilyEnrollments': this.hasMany(SchoolFamilyEnrollment, 'family_id')
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
