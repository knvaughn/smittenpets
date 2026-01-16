<script setup lang="ts">
const email = ref("");
const status = ref<"idle" | "loading" | "success" | "error">("idle");

async function onNotify() {
  status.value = "loading";

  try {
    await $fetch("/api/notify", {
      method: "POST",
      body: { email: email.value },
    });
    status.value = "success";
  } catch (e) {
    status.value = "error";
  }
}
</script>

<template>
  <UContainer class="py-8 sm:py-32 flex flex-col items-center text-center">
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
            Dearborn. This page is getting a little extra grooming and will be
            ready soon!
          </p>
        </div>
      </template>
    </UPageHeader>

    <div
      class="mt-10 max-w-md w-full p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
    >
      <h3 class="font-bold text-lg mb-2">Want an alert when we're live?</h3>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        Leave your email and we'll send you a special "Grand Opening" discount.
      </p>
      <form
        @submit.prevent="onNotify"
        v-if="status !== 'success'"
        class="flex gap-2"
      >
        <UInput
          v-model="email"
          type="email"
          required
          placeholder="your@email.com"
          class="flex-1"
          :disabled="status === 'loading'"
        />
        <UButton
          type="submit"
          color="primary"
          label="Notify Me"
          class="cursor-pointer"
          :loading="status === 'loading'"
        />
      </form>

      <div v-else class="text-primary-500 font-medium">
        Thanks! You're on the list.
      </div>
    </div>
  </UContainer>
</template>
