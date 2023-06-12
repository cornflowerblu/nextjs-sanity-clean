import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'pet',
      type: 'document',
      title: 'Pet',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },
        {
          name: 'color',
          type: 'string',
          title: 'Color'
        },
        {
          name: 'breed',
          type: 'string',
          title: 'Breed'
        }
      ]
    }
  ],
}
