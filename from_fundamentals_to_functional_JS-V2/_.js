export const _ = Object.create(null);

_.each = (list, callback) => {
  if (Array.isArray(list)) {
    for (let [index, item] of list.entries()) {
      callback(item, index, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};
_.map = (list, callback) => {
  const res = [];
  _.each(list, (value, index, list) => {
    res.push(callback(value, index, list));
  });

  return res;
};
_.filter = (list, callback) => {
  const res = [];
  _.each(list, (value, index, list) => {
    if (callback(value, index, list)) {
      res.push(value);
    }
  });
  return res;
};

_.from = (...argList) => {
  return argList;
};

//ES5 Version
_.es5from = function () {
  return Array.prototype.slice.call(arguments);
};

_.reduce = (collection, callback, accum) => {
  if (Array.isArray(collection)) {
    accum = accum ?? collection[0];
    for (let item of collection) {
      accum = callback(accum, item);
    }
  } else {
    accum = accum ?? Object.create(null);
    for (let key in collection) {
      accum = callback(accum, collection[key], key);
    }
  }
  return accum;
};

_.forEachRight = (list, callback) => {
  if (Array.isArray(list)) {
    const reverseArr = [...list].reverse();
    for (let [index, item] of reverseArr.entries()) {
      callback(item, index, reverseArr);
    }
  } else {
    // Objects don't have order so this is the same as _.each
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
};

_.eachRight = _.forEachRight;
