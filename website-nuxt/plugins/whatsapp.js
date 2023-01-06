
const whatsApp = () => {
    return 'hallo du'
}

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    nuxtApp.whatsApp = whatsApp;
})
