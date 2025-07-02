// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import {resolve} from "path";

export default defineNuxtConfig({
  alias : {
   "@" : resolve(__dirname, "/")
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  modules: ["nitro-cloudflare-dev", "@nuxtjs/tailwindcss"]
})