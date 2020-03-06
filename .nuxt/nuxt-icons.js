export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.3fa1aa.png","120x120":"/_nuxt/icons/icon_120.3fa1aa.png","144x144":"/_nuxt/icons/icon_144.3fa1aa.png","152x152":"/_nuxt/icons/icon_152.3fa1aa.png","192x192":"/_nuxt/icons/icon_192.3fa1aa.png","384x384":"/_nuxt/icons/icon_384.3fa1aa.png","512x512":"/_nuxt/icons/icon_512.3fa1aa.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
