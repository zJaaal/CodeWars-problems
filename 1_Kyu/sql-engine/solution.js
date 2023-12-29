//https://www.codewars.com/kata/545434090294935e7d0010ab

// One day I will rewrite this to something more human LOL

let defaultSelect = (x, i) => x[i];

const defaultJoinWhere = (array1, array2, condition) => {
  for (let i = 0; i < array1.length; i++) {
    if (!condition([array1[i], array2[i]])) {
      array1.splice(i, 1);
      array2.splice(i, 1);
    }
  }
  return [array1, array2];
};

const andJoinWhere = (array1, array2, conditions) => {
  for (let i = 0; i < array1.length; i++) {
    if (
      !(
        conditions[0]([array1[i], array2[i]]) &&
        conditions[1]([array1[i], array2[i]])
      )
    ) {
      array1.splice(i, 1);
      array2.splice(i, 1);
    }
  }
  return [array1, array2];
};

const orJoinWhere = (array1, array2, conditions) => {
  for (let i = 0; i < array1.length; i++) {
    if (
      !(
        conditions[0]([array1[i], array2[i]]) ||
        conditions[1]([array1[i], array2[i]])
      )
    ) {
      array1.splice(i, 1);
      array2.splice(i, 1);
    }
  }
  return [array1, array2];
};

//groupBy

function getPossibleGroups(args) {
  const [data, ...callbacks] = args;
  // console.log(data, callbacks);
  const groups = {};
  callbacks.forEach((x) => {
    data.forEach((y) => {
      groups[x.name] = groups[x.name] || [];
      groups[x.name].push(x(y));
    });
    groups[x.name] = Array.from(new Set(...[groups[x.name]]));
  });
  return groups;
}

const createDataStructure = (
  structure = [],
  keys,
  data,
  currentDepth,
  depth,
  groups,
  values,
  father,
  callback
) => {
  if (structure[0] == 'even') groups[keys[1]] = groups[keys[1]].reverse();
  groups[keys[currentDepth]].forEach((group) => {
    if (currentDepth > 0) {
      if (!structure[1].length || !structure[1].find((x) => x[0] == group)) {
        let allData = data.find((x) => {
          if (typeof data[0] == 'object') {
            if (currentDepth == depth && depth >= 2) {
              return (
                x[keys[0]] == father &&
                x[keys[currentDepth - 2]] == values &&
                x[keys[currentDepth]] == group &&
                x[keys[currentDepth - 1]] == structure[0]
              );
            } else {
              return (
                x[keys[currentDepth]] == group &&
                x[keys[currentDepth - 1]] == structure[0]
              );
            }
          } else {
            return callback.every((y) => {
              return y(x).includes(group) || y(x).includes(structure[0]);
            });
          }
        });
        if (allData && typeof data[0] == 'object') {
          return structure[1].push([allData[keys[currentDepth] + ''], []]);
        } else if (allData) {
          return structure[1].push([group, []]);
        }
      }
    } else structure.push([group, []]);
  });
  if (currentDepth >= depth) {
    if (currentDepth == 0) {
      structure.forEach((group) => {
        if (typeof data[0] == 'object' && !Array.isArray(data[0])) {
          let allData = data.filter((x) => x[keys[0]] == group[0]);
          return group[1].push(...allData);
        } else if (Array.isArray(data[0])) {
          let allData = data.filter((x) => callback[0](x) == group[0]);
          return group[1].push(...allData);
        } else {
          let allData = data.filter((x) => callback[0](x) == group[0]);
          return group[1].push(...allData);
        }
      });
      return;
    }
    structure[1].forEach((group) => {
      let allData = data.filter((x) => {
        if (typeof data[0] == 'object' && !Array.isArray(data[0])) {
          if (depth > 2) {
            return (
              x[keys[0]] == father &&
              x[keys[currentDepth - 2]] == values &&
              x[keys[currentDepth]] == group[0] &&
              x[keys[currentDepth - 1]] == structure[0]
            );
          } else {
            return (
              x[keys[currentDepth]] == group[0] &&
              x[keys[currentDepth - 1]] == structure[0]
            );
          }
        } else {
          return callback.every((y) => {
            return y(x).includes(group[0]) || y(x).includes(structure[0]);
          });
        }
      });
      group[1].push(...allData);
    });
    return;
  }
  ++currentDepth;
  if (currentDepth > 1) {
    return structure[1].forEach((group) => {
      createDataStructure(
        group,
        keys,
        data,
        currentDepth,
        depth,
        groups,
        structure[0],
        father,
        callback
      );
    });
  }

  structure.forEach((group) => {
    createDataStructure(
      group,
      keys,
      data,
      currentDepth,
      depth,
      groups,
      '',
      group[0],
      callback
    );
  });
};

const cleanDataStructure = (structure = [], currentDepth, depth) => {
  if (currentDepth == depth) {
    return;
  }
  if (currentDepth == depth - 1) {
    structure[1].forEach((group, i) => {
      if (!group[1].length) {
        structure[1].splice(i, 1);
      }
    });
  }
  ++currentDepth;
  if (currentDepth > 1)
    return structure[1].forEach((group) => {
      cleanDataStructure(group, currentDepth, depth);
    });

  structure.forEach((group) => {
    cleanDataStructure(group, currentDepth, depth);
  });
};

var query = function () {
  let myQuery = {
    select: undefined,
    from: undefined,
    where: {
      and: [],
      or: [],
    },
    orderBy: undefined,
    groupBy: undefined,
    having: {
      and: [],
      or: [],
    },
  };

  this.select = function (callback) {
    myQuery.select = callback;
    this.select = function () {
      throw new Error('Duplicate SELECT');
    };
    return this;
  };
  this.from = function () {
    myQuery.from = [...arguments];

    this.from = function () {
      throw new Error('Duplicate FROM');
    };
    return this;
  };

  this.orderBy = function () {
    myQuery.orderBy = [...arguments];
    this.orderBy = function () {
      throw new Error('Duplicate ORDERBY');
    };
    return this;
  };

  this.groupBy = function () {
    myQuery.groupBy = [...arguments];
    this.groupBy = function () {
      throw new Error('Duplicate GROUPBY');
    };
    return this;
  };

  this.having = function () {
    const args = [...arguments];
    if (args.length > 1) {
      myQuery.having.or = [...args];
    } else {
      args.length && myQuery.having.and.push(args[0]);
    }
    return this;
  };

  this.where = function () {
    const args = [...arguments];
    if (args.length > 1) {
      myQuery.where.or = [...args];
    } else {
      args.length && myQuery.where.and.push(args[0]);
    }
    return this;
  };

  this.execute = function () {
    if (typeof myQuery.from == 'undefined') myQuery.from = [[]];

    //Not join where default, AND & OR
    if (myQuery.where.and.length == 1 && myQuery.from.length < 2) {
      myQuery.from[0] = myQuery.from[0].filter((x) => myQuery.where.and[0](x));
    } else if (myQuery.where.and.length == 2 && myQuery.from.length < 2) {
      myQuery.from[0] = myQuery.from[0].filter(
        (x) => myQuery.where.and[0](x) && myQuery.where.and[1](x)
      );
    } else if (myQuery.where.or.length == 2 && myQuery.from.length < 2) {
      myQuery.from[0] = myQuery.from[0].filter(
        (x) => myQuery.where.or[0](x) || myQuery.where.or[1](x)
      );
    }

    //Join where default, AND & OR
    if (myQuery.where.and.length == 1 && myQuery.from.length == 2) {
      let [array1, array2] = defaultJoinWhere(
        myQuery.from[0],
        myQuery.from[1],
        myQuery.where.and[0]
      );

      myQuery.from[0] = array1;
      myQuery.from[1] = array2;
    } else if (myQuery.where.and.length == 2 && myQuery.from.length == 2) {
      let [array1, array2] = andJoinWhere(
        myQuery.from[0],
        myQuery.from[1],
        myQuery.where.and
      );

      myQuery.from[0] = array1;
      myQuery.from[1] = array2;
    } else if (myQuery.where.or.length == 2 && myQuery.from.length == 2) {
      let [array1, array2] = orJoinWhere(
        myQuery.from[0],
        myQuery.from[1],
        myQuery.where.and
      );

      myQuery.from[0] = array1;
      myQuery.from[1] = array2;
    }

    if (myQuery.groupBy) {
      let newStructure = [];
      const groups = getPossibleGroups([myQuery.from[0], ...myQuery.groupBy]);
      createDataStructure(
        newStructure,
        Object.keys(groups),
        myQuery.from[0],
        0,
        Object.keys(groups).length - 1,
        groups,
        '',
        '',
        myQuery.groupBy
      );
      cleanDataStructure(newStructure, 0, Object.keys(groups).length - 1);
      myQuery.from[0] = newStructure;
    }

    if (myQuery.having.and.length == 1 && myQuery.from.length < 2) {
      myQuery.from[0] = myQuery.from[0].filter((x) => myQuery.having.and[0](x));
    } else if (myQuery.having.and.length == 2 && myQuery.from.length < 2) {
      myQuery.from[0] = myQuery.from[0].filter(
        (x) => myQuery.having.and[0](x) && myQuery.having.and[1](x)
      );
    } else if (myQuery.having.or.length == 2 && myQuery.from.length < 2) {
      myQuery.from[0] = myQuery.from[0].filter(
        (x) => myQuery.having.or[0](x) || myQuery.having.or[1](x)
      );
    }

    if (!myQuery.select && myQuery.from.length == 2) {
      let joinedArray = [];

      myQuery.from[0].forEach((x) => {
        myQuery.from[1].forEach((y) => {
          joinedArray.push([x, y]);
        });
      });

      return joinedArray;
    }

    return Array.from(
      {
        length: myQuery.from[0].length,
      },
      (_, i) => {
        if (!myQuery.select && myQuery.from.length == 1)
          return defaultSelect(myQuery.from[0], i);

        if (myQuery.from.length > 1) {
          return myQuery.select([myQuery.from[0][i], myQuery.from[1][i]]);
        }

        return myQuery.select(myQuery.from[0][i]);
      }
    ).sort((x, y) => {
      if (myQuery.orderBy) {
        return myQuery.orderBy[0](x, y);
      }
    });
  };

  return this;
};
