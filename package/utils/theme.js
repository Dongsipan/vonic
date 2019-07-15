export const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
export const createColorClasses = color => {
  return typeof color === "string" && color.length > 0
    ? {
        "ion-color": true,
        [`ion-color-${color}`]: true
      }
    : undefined;
};

export const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(" ");
    return array
      .filter(c => c != null)
      .map(c => String(c).trim())
      .filter(c => c !== "");
  }
  return [];
};

export const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => (map[c] = true));
  return map;
};
