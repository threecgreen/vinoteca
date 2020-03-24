 * Need to enable TLS for HTTPS
   * Add XSRF token
   * Check for every request
 * Need app secret key for hashing passwords
 * JWT token stored as hardened cookie:
   * HttpOnly
   * Secure
   * SameSite
 * Token revocation database table to facilitate logout feature
