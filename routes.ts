/**
 * An array of routes that are accessible to public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/", "/auth/new-verification"];

/**
 * An array of routes that are accessible to authenticated users.
 * These routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes: string[] = [
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password",
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefic are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
