import MyBaseModel from 'src/models/model-helpers/MyBaseModel';
import router from 'src/router';
import Attendance from 'src/models/Attendance';
import Child from 'src/models/Child';
import Event from 'src/models/Event';
import Family from 'src/models/Family';
import Membership from 'src/models/Membership';
import School from 'src/models/School';

export default class User extends MyBaseModel {
    static entity = 'user';
    static entityUrl = '/api/users';
    static primaryKey = 'id';
    static titleKey = 'id';
    static openRecord(pKey){
      router.push({
        name: '/lists/users/:rId',
        params: {
          rId: pKey,
        },
      })
    }

    static parentWithables = [

    ];

    static rules = {
        readables: () => true,
        readable: (item) => true,
        editable: (item) => true,
        creatable: () => true,
    };

    static fieldsMetadata = {
        'id': {},
            'old_id': {},
            'name': {},
            'email': {},
            'email_verified_at': {},
            'password': {},
            'status': {},
            'remember_token': {},
            'created_at': {},
            'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'old_id': this.attr('').nullable(),
            'name': this.attr('').nullable(),
            'email': this.attr('').nullable(),
            'email_verified_at': this.attr('').nullable(),
            'password': this.attr('').nullable(),
            'status': this.attr('').nullable(),
            'remember_token': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'attendances': this.hasMany(Attendance, 'created_by'),
            'attendancesUpdatedBy': this.hasMany(Attendance, 'updated_by'),
            'children': this.hasMany(Child, 'created_by'),
            'childrenUpdatedBy': this.hasMany(Child, 'updated_by'),
            'events': this.hasMany(Event, 'created_by'),
            'eventsUpdatedBy': this.hasMany(Event, 'updated_by'),
            'families': this.hasMany(Family, 'created_by'),
            'familiesUpdatedBy': this.hasMany(Family, 'updated_by'),
            'familiesUserId': this.hasMany(Family, 'user_id'),
            'memberships': this.hasMany(Membership, 'created_by'),
            'membershipsUpdatedBy': this.hasMany(Membership, 'updated_by'),
            'schools': this.hasMany(School, 'created_by'),
            'schoolsUpdatedBy': this.hasMany(School, 'updated_by'),
            'schoolsUserId': this.hasMany(School, 'user_id')
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
