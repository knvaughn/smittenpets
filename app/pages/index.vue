<template>
  <div>
    <UPageHero
      id="hero"
      orientation="horizontal"
      :ui="{
        root: 'bg-secondary ',
        container: 'pt-50 sm:pt-60 lg:pt-40',
      }"
      :links="[
        {
          label: 'Book Now',
          to: '/booking',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
          color: 'primary',
        },
      ]"
    >
      <template #title>
        <div class="space-y-2">
          <h1 class="text-6xl/8 lg:text-8xl/12 font-bold">
            <span class="font-display">Smitten Pets</span> <br />
            <span
              class="font-light uppercase text-xl lg:text-4xl tracking-[11px] lg:tracking-[15px]"
            >
              Grooming Co.
            </span>
          </h1>
        </div>
      </template>

      <template #description>
        In-Home Dog & Cat Grooming in Dearborn, Michigan. Offering boutique
        grooming services from the comfort of your own home.
      </template>

      <div>
        <NuxtImg
          src="/hero-pink.png"
          alt="Happy dog after grooming"
          width="600"
          height="600"
          class="w-full rounded-full border-4 border-primary-50 dark:border-primary-900/20"
          sizes="100vw sm:50vw md:600px"
        />
      </div>
    </UPageHero>

    <UPageSection
      id="features"
      title="A complete range of in-home grooming services for dogs and cats"
      description="With Smitten Pets Grooming Co, every pet is treated with the patience and attention they deserve. The goal is to make grooming a positive experience for both you and your fur baby, and reduce stress by eliminating the need for travel, kenneling, and waiting time. Professional grooming is brought right to your doorstep!"
      :ui="{
        container: 'pb-6 lg:pb-0',
      }"
      :features="[
        {
          icon: 'i-lucide-dog',
          title: 'Full Dog Groom',
          description:
            'Includes bath, brush, blow dry, haircut, sanitary & paw pad trim, ear cleaning, & nail trim.',
        },
        {
          icon: 'i-lucide-cat',
          title: 'Full Cat Groom',
          description:
            'Includes a waterless or wet bath (depending on comfort), brush, blow dry, haircut or sanitary trim, ear cleaning, & nail trim.',
        },
        {
          icon: 'i-lucide-wind',
          title: 'Dematting & Coat Recovery',
          description:
            'A specialized, patient service focused on the pain-free removal of mats and tangles. ',
        },
        {
          icon: 'i-lucide-bath',
          title: 'Bath, Brush, & Blow Dry',
          description:
            'Premium shampoos and conditioners, blow dry, and a deep brush out to remove shedding hair and restore coat shine.',
        },
        {
          icon: 'i-lucide-paw-print',
          title: 'Nail Trim',
          description:
            'Safe clipping and filing to keep paws healthy and prevent scratching.',
        },
        {
          icon: 'i-fa7-solid-tooth',
          title: 'Teeth Brushing',
          description:
            'Gentle teeth brushing and breath-freshening gel to support oral health between vet visits.',
        },
      ]"
      :links="[
        {
          label: 'View All Services & Pricing',
          to: '/services',
          size: 'xl',
          color: 'primary',
        },
      ]"
    />

    <UPageSection>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div class="space-y-8">
          <div class="space-y-4">
            <h3 class="text-3xl font-bold">Grooming with Care</h3>
            <p class="text-lg text-neutral-600 dark:text-neutral-400">
              As a professionally trained groomer and pet lover with deep roots
              in Michigan, I prioritize your pet's comfort and your peace of
              mind. Every appointment is tailored to your specific needs. I
              listen to what you want, communicate any concerns upfront, and
              document your pet's health background and grooming history. Your
              pet receives my undivided attention in the familiar environment of
              your home, eliminating traumatic salon visits.
            </p>
          </div>

          <div
            class="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800"
          >
            <UIcon
              name="i-lucide-map-pin"
              class="h-8 w-8 text-primary shrink-0"
            />
            <div>
              <h4 class="font-bold text-lg">Service Area</h4>
              <p class="text-neutral-600 dark:text-neutral-400">
                Dearborn, Allen Park, Southgate, Taylor, Brownstown, & Woodhaven
              </p>
              <p class="text-sm text-primary font-medium mt-1 italic">
                Extended travel available upon request
              </p>
            </div>
          </div>

          <ul class="space-y-3 px-1">
            <li class="flex items-center gap-3">
              <UIcon name="i-lucide-award" class="text-primary h-5 w-5" />
              <span class="font-medium">
                Professionally Trained & Certified
              </span>
            </li>
            <li class="flex items-center gap-3">
              <UIcon name="i-lucide-heart" class="text-primary h-5 w-5" />
              <span class="font-medium">Low-stress, one-on-one care</span>
            </li>
          </ul>
        </div>

        <UCard class="shadow-lg border-primary-100 dark:border-primary-900">
          <template #header>
            <div class="flex items-center justify-center gap-2">
              <UIcon name="i-lucide-clock" class="h-5 w-5 text-primary" />
              <h4 class="font-bold text-xl text-center">Available Hours</h4>
            </div>
          </template>

          <div class="space-y-2">
            <div
              v-for="schedule in [
                { day: 'Sunday', hours: 'Closed', color: 'text-neutral-400' },
                { day: 'Monday', hours: 'Closed', color: 'text-neutral-400' },
                { day: 'Tuesday', hours: '9 AM - 7 PM' },
                { day: 'Wednesday', hours: '9 AM - 7 PM' },
                { day: 'Thursday', hours: '9 AM - 7 PM' },
                { day: 'Friday', hours: '9 AM - 7 PM' },
                { day: 'Saturday', hours: '9 AM - 2 PM' },
              ]"
              :key="schedule.day"
              class="flex justify-between border-b border-neutral-100 dark:border-neutral-800 pb-1 last:border-0"
              :class="schedule.color"
            >
              <span class="font-semibold">{{ schedule.day }}</span>
              <span>{{ schedule.hours }}</span>
            </div>
          </div>

          <template #footer>
            <UButton
              to="/booking"
              label="Book an Appointment"
              block
              size="xl"
              icon="i-lucide-calendar"
              color="primary"
            />
          </template>
        </UCard>
      </div>
    </UPageSection>
  </div>
</template>

<style scoped>
#hero {
  position: relative;
}
#hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url("/yellow-print.png") repeat;
  opacity: 0.2;
}
</style>
