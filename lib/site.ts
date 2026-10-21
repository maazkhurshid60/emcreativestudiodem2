/* One place for the site's own address.
 *
 * Env-driven so a preview deploy can point elsewhere; the fallback is the live
 * domain (theemcreativestudio.com redirects to the www host). It used to be a
 * guess, theemcreative.studio, which put the wrong host in every canonical.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.theemcreativestudio.com"
).replace(/\/$/, "");

export const SITE_NAME = "The EM Creative Studio";
