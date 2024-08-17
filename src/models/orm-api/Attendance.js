import MyBaseModel from 'src/models/helpers/MyBaseModel';
import VueCookies from 'vue-cookies';
import Child from 'src/models/orm-api/Child';
import User from 'src/models/User';
import Event from 'src/models/orm-api/Event';

export default class Attendance extends MyBaseModel {
    static entity = 'attendance';
    static entityUrl = '/api/attendances';
    static primaryKey = 'id';
    static entityName = 'Item';
    static titleKey = 'id';
    static openRecord(pVal, item, router){
      router.push({
        name: '/lists/attendances/:rId/:rName',
        params: {
          rId: pVal,
          rName: pVal,
        },
      })
    }

    static parentWithables = [
        'event',
        'child',
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
        'event_id': { linkablesRule: () => { return {} } },
        'child_id': {
          linkablesRule(item){
            const session = VueCookies.get('VITE_AUTH');

            const familyIds = session.user.family_memberships.map(membership => membership.family_id);
            const familyIdsString = familyIds.join(',');
            return {
              family_id: familyIdsString
            }
          },
        },
        'creator_id': { linkablesRule: () => { return {} } },
        'updater_id': { linkablesRule: () => { return {} } },
        'created_at': { linkablesRule: () => { return {} } },
        'updated_at': { linkablesRule: () => { return {} } },
        'school_id': { linkablesRule: () => { return {} } },
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'event_id': this.attr(''),
            'child_id': this.attr(''),
            'creator_id': this.attr('').nullable(),
            'updater_id': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'child': this.belongsTo(Child, 'child_id'),
            'creator': this.belongsTo(User, 'creator_id'),
            'event': this.belongsTo(Event, 'event_id'),
            'updater': this.belongsTo(User, 'updater_id')
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
