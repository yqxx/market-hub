export const BASE_URL = import.meta.env.BASE_URL

export const SITE_NAME = '市集中台'
export const SITE_TAGLINE = '整个市场，一家店铺'
export const CONTACT_EMAIL = 'hello@markethub.cn'

export function publicUrl(path: string): string {
  const clean = path.replace(/^\//, '')
  return `${BASE_URL}${clean}`
}
