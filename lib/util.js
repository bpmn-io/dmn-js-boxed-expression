export function is(element, type) {
  const bo = getBusinessObject(element);

  return bo.$instanceOf && bo.$instanceOf(type);
}

export function isAny(element, types) {
  return types.some(type => is(element, type));
}

export function getBusinessObject(element) {
  return (element && element.businessObject) || element;
}
