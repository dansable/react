export const createEntityState = (entities) => {
  return entities.reduce((acc, entity) => {
    acc.entities[entity.id] = entity;
    acc.ids.push(entity.id);

    return acc;
  }, {
    entities: {},
    ids: [],
  })
}
