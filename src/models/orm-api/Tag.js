import MyBaseModel from 'src/models/helpers/MyBaseModel';

export default class Tag extends MyBaseModel {
    static entity = 'tag';
    static entityUrl = '/api/tags';
    static primaryKey = 'id';
    static session = VueCookies.get('VITE_AUTH');
    static entityName = 'Item';
    static titleKey = 'id';
    static openRecord(pVal, item, router){
      router.push({
        name: '/lists/tags/:rId/:rName',
        params: {
          rId: pVal,
          rName: pVal,
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
            'created_at': {},
            'updated_at': {},
            'name': {}
    };

    static fields() {
        return {
            'id': this.attr('').nullable(),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'name': this.attr(''),

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
