<template>
  <div>
    <UPageHero
      orientation="horizontal"
      :ui="{
        root: 'bg-secondary',
      }"
      :links="[
        {
          label: 'Book Now',
          to: '/booking',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
          color: 'primary',
        },
        {
          label: 'View Services',
          to: '/services',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
          color: 'primary',
          variant: 'outline',
        },
      ]"
    >
      <template #title>
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-primary font-medium mb-4">
            <UIcon name="i-lucide-scissors" class="w-6 h-6" />
            <span class="uppercase tracking-widest text-xs">
              In-Home Dog & Cat Grooming in Dearborn, Michigan
            </span>
          </div>

          <h1 class="text-5xl/8 lg:text-7xl/12 font-bold">
            <span class="font-display">Smitten Pets</span> <br />
            <span
              class="font-light uppercase text-2xl lg:text-4xl tracking-widest"
            >
              Grooming Co.
            </span>
          </h1>
        </div>
      </template>

      <template #description>
        Smitten Pets Grooming Co. offers boutique grooming services for dogs and
        cats in the comfort of your own home.
      </template>

      <div>
        <NuxtImg
          src="/hero-pink.png"
          alt="Happy dog after grooming"
          width="600"
          height="600"
          class="w-full rounded-full shadow-xl border-4 border-primary-50 dark:border-primary-900/20"
          sizes="100vw sm:50vw md:600px"
        />
      </div>
    </UPageHero>

    <UPageSection
      id="features"
      title="A Suite of In-Home Grooming Services"
      description="Every pet is treated with the patience and attention they deserve."
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
            'Includes a waterless or wet bath (depending on comfort), brush, blow dry, haircut / sanitary trim, ear cleaning, & nail trim.',
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
            <h3 class="text-3xl font-bold">The Smitten Difference</h3>
            <p class="text-lg text-neutral-600 dark:text-neutral-400">
              As a professionally trained groomer with deep roots in Michigan, I
              focus on one-on-one appointments. Your pet gets my undivided
              attention from start to finish in the comfort of your home.
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
              <h4 class="font-bold text-lg">Location</h4>
              <p class="text-neutral-600 dark:text-neutral-400">
                Dearborn, Michigan and surrounding areas
              </p>
              <p class="text-sm text-primary font-medium mt-1 italic">
                Coming soon!
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
                { day: 'Tuesday', hours: '9 AM - 5 PM' },
                { day: 'Wednesday', hours: '9 AM - 5 PM' },
                { day: 'Thursday', hours: '9 AM - 5 PM' },
                { day: 'Friday', hours: '9 AM - 5 PM' },
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
