<template>
  <UContainer class="py-24 sm:py-32 flex flex-col items-center text-center">
    <div class="mb-8 relative">
      <UIcon
        name="i-lucide-clock-9"
        class="relative w-20 h-20 text-primary-500 animate-pulse"
      />
    </div>

    <UPageHeader>
      <template #title>
        <div class="text-center w-full">
          <h1
            class="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            Something <span class="text-primary-500">Paws-itive</span> is Coming
          </h1>
        </div>
      </template>

      <template #description>
        <div class="text-center w-full max-w-2xl mx-auto mt-4">
          <p
            class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
          >
            We're currently perfecting our boutique experience for the pets of
            Metro Detroit. This page is getting a little extra grooming and will
            be ready soon!
          </p>
        </div>
      </template>
    </UPageHeader>

    <div
      class="mt-20 max-w-md w-full p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
    >
      <h3 class="font-bold text-lg mb-2">Want an alert when we're live?</h3>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        Leave your email and we'll send you a special "Grand Opening" discount.
      </p>
      <div class="flex gap-2">
        <UInput placeholder="your@email.com" class="flex-1" size="md" />
        <UButton color="secondary" label="Notify Me" />
      </div>
    </div>
  </UContainer>
</template>
