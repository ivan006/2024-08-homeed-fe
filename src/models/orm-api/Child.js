import MyBaseModel from 'src/models/helpers/MyBaseModel';
import User from 'src/models/User';
import Family from 'src/models/orm-api/Family';
import Attendance from 'src/models/orm-api/Attendance';

export default class Child extends MyBaseModel {
    static entity = 'child';
    static entityUrl = '/api/children';
    static primaryKey = 'id';
    static titleKey = 'name';
    static openRecord(pKeyValue, item, router){
      router.push({
        name: '/lists/children/:rId/:rName',
        params: {
          rId: pKeyValue,
        },
      })
    }

    static parentWithables = [
        'family',
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
        'family_id': { relationRules: { linkables: (user) => { return {} } } },
        'creator_id': { relationRules: { linkables: (user) => { return {} } } },
        'updater_id': { relationRules: { linkables: (user) => { return {} } } },
        'created_at': {},
        'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'name': this.attr(''),
            'family_id': this.attr(''),
            'creator_id': this.attr('').nullable(),
            'updater_id': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'creator': this.belongsTo(User, 'creator_id'),
            'family': this.belongsTo(Family, 'family_id'),
            'updater': this.belongsTo(User, 'updater_id'),
            'attendances': this.hasMany(Attendance, 'child_id')
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
