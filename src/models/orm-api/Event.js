import MyBaseModel from 'src/models/helpers/MyBaseModel';
import User from 'src/models/User';
import School from 'src/models/orm-api/School';
import Attendance from 'src/models/orm-api/Attendance';

export default class Event extends MyBaseModel {
    static entity = 'event';
    static entityUrl = '/api/events';
    static primaryKey = 'id';
    static titleKey = 'name';
    static openRecord(pVal, item, router){
      router.push({
        name: '/lists/events/:rId/:rName',
        params: {
          rId: pVal,
          rName: pVal,
        },
      })
    }

    static parentWithables = [
        'school',
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
        'start_datetime': {
          usageType: "dateType"
        },
        'end_datetime': {
          usageType: "dateType"
        },
        'school_id': { relationRules: { linkables: (user) => { return {} } } },
        'creator_id': { relationRules: { linkables: (user) => { return {} } } },
        'updater_id': { relationRules: { linkables: (user) => { return {} } } },
        'created_at': {},
        'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'name': this.attr(''),
            'start_datetime': this.attr(''),
            'end_datetime': this.attr(''),
            'school_id': this.attr(''),
            'creator_id': this.attr('').nullable(),
            'updater_id': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'creator': this.belongsTo(User, 'creator_id'),
            'school': this.belongsTo(School, 'school_id'),
            'updater': this.belongsTo(User, 'updater_id'),
            'attendances': this.hasMany(Attendance, 'event_id')
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
