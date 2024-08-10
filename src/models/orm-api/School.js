import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import User from 'src/models/User';
import Event from 'src/models/Event';
import Membership from 'src/models/Membership';

export default class School extends MyBaseModel {
    static entity = 'school';
    static entityUrl = '/api/schools';
    static primaryKey = 'id';
    static titleKey = 'id';
    static openRecord(pKey){
      router.push({
        name: '/lists/schools/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [
        'user',
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
            'name': {},
            'user_id': { relationRules: { linkables: (user) => { return {} } } },
            'created_by': { relationRules: { linkables: (user) => { return {} } } },
            'updated_by': { relationRules: { linkables: (user) => { return {} } } },
            'created_at': {},
            'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'name': this.attr('').nullable(),
            'user_id': this.attr('').nullable(),
            'created_by': this.attr('').nullable(),
            'updated_by': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'created_by': this.belongsTo(User, 'created_by'),
            'updated_by': this.belongsTo(User, 'updated_by'),
            'user': this.belongsTo(User, 'user_id'),
            'events': this.hasMany(Event, 'school_id'),
            'memberships': this.hasMany(Membership, 'school_id')
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