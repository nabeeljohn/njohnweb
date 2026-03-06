export const BASE_TITLE = "NJohn Web";

export function pageTitle(pageTitle?: string) {
  return pageTitle ? `${BASE_TITLE} | ${pageTitle}` : BASE_TITLE;
}