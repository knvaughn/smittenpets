<script setup>
const title = "S'Mitten Pets of Metro Detroit";
const description =
  "A boutique grooming retreat for dogs and cats. Professional, low-stress care for your furry family members in Metro Detroit.";
const siteUrl = "https://smittenpets.com";

const items = computed(() => [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
]);

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogUrl: siteUrl,
  ogType: "website",
  ogImage: "/og-image.png",
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
});
</script>

<template>
  <UApp>
    <UHeader
      :toggle="{
        size: 'xl',
      }"
    >
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UButton to="/booking" label="Book Now" color="secondary" />
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-fa7-solid-paw" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          S'Mitten Pets of Metro Detroit ©
          {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/knvaughn"
          target="_blank"
          label="Site made with &hearts; by Kristin Vaughn"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
