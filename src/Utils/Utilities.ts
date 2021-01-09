export function getEnumKeyOrValue(enums: any, enumKeyOrValue: any): string {
  return enums[enumKeyOrValue];
}

export const isString = (item: string = ""): boolean => {
  const requestedItem = item.trim();
  return requestedItem.length && typeof requestedItem === "string";
};

export const isValidEmail = (email: string): boolean =>
  new RegExp("[a-zA-Z0-9_]+.[a-zA-Z0-9_]+@[a-zA-Z0-9]+.[a-z]{1,8}").test(email);

export const isValidPassword = (password: string): boolean =>
  new RegExp(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,13}$/
  ).test(password);
