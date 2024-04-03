export const secretEmail = (email) => {
  const [username, domain] = email.split("@");
  const secretUser = username.substring(0, 3) + "*".repeat(username.length - 3);
  return `${secretUser}@${domain}`;
};