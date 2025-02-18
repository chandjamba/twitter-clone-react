export function validateUserNameWithRegex(userName: string) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
  return regex.test(userName);
}
