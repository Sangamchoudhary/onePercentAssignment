export function isUserLoggedIn() {
  return document.cookie
    .split("; ")
    .filter((row) => row.startsWith("login"))
    .map((c) => c.split("=")[1])[0];
}
