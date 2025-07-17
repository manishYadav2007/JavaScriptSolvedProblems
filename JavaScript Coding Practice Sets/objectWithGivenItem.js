

function filterObjectsByShape(objectEntities, shape) {
  return objectEntities.filter(entity => entity.shape === shape);
}

// Example usage:
const objectEntities = [
  { shape: 'circle', color: 'Green' },
  { shape: 'square', color: 'Red' },
  { shape: 'circle', color: 'Blue' }
];

const shapeToFilter = 'rectangle';
const filteredObjects = filterObjectsByShape(objectEntities, shapeToFilter);
console.log(filteredObjects);