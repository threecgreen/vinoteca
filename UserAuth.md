 * Add CSRF token
   * Check for every request
 * Need app secret key for hashing passwords
 * Authorized user id token stored as private cookie (built in to Rocket):
   * HttpOnly
   * Secure
   * SameSite
 * Logout by removing cookie
