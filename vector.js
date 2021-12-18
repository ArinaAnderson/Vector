'use strict';
class Vector {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.parsed = false;
  }

  parseCoordinates() {
    if (this.parsed) {
      return;
    }
    const iter = (count) => {
      if (count === this.coordinates.length) {
        return;
      }
      const coordName = `coord${count}`;
      this[coordName] = this.coordinates[count];
      const newCount = count + 1;
      this.parsed = true;
      return iter(newCount);
    };
    return iter(0);
  }

  getCoordVal(coordIdx) {
    return this[`coord${coordIdx}`] ? this[`coord${coordIdx}`] : 0;
  }

  convertCoordsToString() {
    return this.coordinates.join(' ');
  }

  printVector() {
    console.log(`Vector is (${this.convertCoordsToString()})`);
  }
/*
  checkVecorsIfEqual(v1, v2) {
    const v1CoordsString = v1.convertCoordsToString();
    const v2CoordsString = v2.convertCoordsToString();
    return v1CoordsString === v2CoordsString;
  }

  addVectors(v1, v2) {
    const prepareVector = function (vector) {
      if (!vector.parsed) {
        vector.parseCoordinates();
      }
    };
    prepareVector(v1);
    prepareVector(v2);
    const count = v1.coordinates.length > v2.coordinates.length ? v1.coordinates.length : v2.coordinates.length;
    const newVectorCoords = [];

    for (let i = 0; i < count; i++) {
      newVectorCoords.push(v1[`coord${i}`] + v2[`coord${i}`]);
    }

    return new Vector(newVectorCoords);
  }
*/
}

// Vector operations:
const checkVectorsIfEqual = function (v1, v2) {
  const v1CoordsString = v1.convertCoordsToString();
  const v2CoordsString = v2.convertCoordsToString();
  return v1CoordsString === v2CoordsString;
}

const addOrSubstractVectors = function (v1, v2, operator) {
  /*
  const prepareVector = function (vector) {
    if (!vector.parsed) {
      vector.parseCoordinates();
    }
  };
  prepareVector(v1);
  prepareVector(v2);
  */
  v1.parseCoordinates();
  v2.parseCoordinates();
  const count = v1.coordinates.length > v2.coordinates.length ? v1.coordinates.length : v2.coordinates.length;
  const newVectorCoords = [];

  for (let i = 0; i < count; i++) {
    const v1Val = v1.getCoordVal(i);
    const v2Val = v2.getCoordVal(i);
    const newVal = sign === '+' ? v1Val + v2Val : v1Val - v2Val;
    newVectorCoords.push(newVal);
  }
  return new Vector(newVectorCoords);
}

const scaleVector = (vector) => {};
