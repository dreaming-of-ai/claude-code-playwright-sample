import { SESSION_KEY, SESSION_VALUE } from "./constants";

/**
 * Redirect to the login page if the user has not authenticated.
 * Call this at the top of every protected page's client-side script.
 */
export function enforceLogin(): void {
  if (sessionStorage.getItem(SESSION_KEY) !== SESSION_VALUE) {
    window.location.replace("/");
  }
}
