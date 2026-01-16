<script setup>
const title =
  "Smitten Pets Grooming Co. | In-Home Dog & Cat Grooming in Dearborn, MI";
const description =
  "In-home grooming services for dogs and cats. Professional, low-stress care for your furry family members in Dearborn and surrounding areas.";
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
      mode="slideover"
      :toggle="{
        size: 'xl',
      }"
      :ui="{
        root: 'relative w-full border-none bg-transparent backdrop-blur-none',
        header: 'border-0',
        container: 'pl-0',
      }"
    >
      <template #left>
        <NuxtLink to="/" class="relative top-4 rounded-full">
          <AppLogo class="shrink-0 rounded-full" />
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UButton to="/booking" label="Book Now" color="primary" />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="mt-14" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-fa7-solid-paw" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Smitten Pets Grooming Co. ©
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
