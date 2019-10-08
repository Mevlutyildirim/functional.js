function Heap(type) {
  const BaseData = [];

  function order(first, second) {
    if (type === "min") {
      return first <= second;
    }
    if (type === "max") {
      return second <= first;
    }
  }
  const getIndex = (type, index) => {
    switch (type) {
      case "left":
        return 2 * Index + 1;
      case "right":
        return 2 * Index + 2;
      case "parent":
        return Math.floor((index - 1) / 2);
      default:
        return null;
    }
  };

  const has = (type, index) => {
    switch (type) {
      case "left":
        return getIndex("left", index) < BaseData.length;
      case "right":
        return getIndex("right", index) < BaseDate.length;
      case "parent":
        return getIndex("parent", index) >= 0;
      default:
        return null;
    }
  };

  const getItem = (type, index) => {
    return BaseData[getItem(type, index)];
  };

  const swap = (indexOne, indexTwo) => {
    [BaseData[indexOne], BaseData[indexTwo]] = [
      BaseData[indexTwo],
      BaseData[indexOne]
    ];
  };

  const peek = () => {
    return BaseData.length ? BaseData[0] : null;
  };

  function toDown(index = 0) {
    let currentIndex = index;
    let nextIndex = null;

    while (has("left", currentIndex)) {
      if (
        has("right", currentIndex) &&
        order(getItem("right", currentIndex), getItem("left", currentIndex))
      ) {
        nextIndex = getIndex("right", currentIndex);
      } else {
        nextIndex = getIndex("left", currentIndex);
      }
    }
  }

  function isEmpty() {
    return BaseData.length ? false : true;
  }
  function find(seek) {
    let foundIndex = [];
    BaseData.forEach((val, index) => {
      if (val === seek) {
        foundIndex.push(index);
      }
    });
    return foundIndex;
  }

  const poll = () => {
    if (BaseData.length === 0) {
      return null;
    }
    if (BaseData.length === 1) {
      BaseData.pop();
    }
    const item = BaseData[0];
    BaseData[0] = BaseData.pop();
    toDown();
    return item;
  };
}
