<template>
  <div>
    <UPageHero
      orientation="horizontal"
      :links="[
        {
          label: 'Book Now',
          to: '/booking',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
        },
        {
          label: 'View Services',
          to: '/services',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
    >
      <template #title>
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-primary font-medium mb-4">
            <UIcon name="i-lucide-scissors" class="w-6 h-6" />
            <span class="uppercase tracking-widest text-xs">
              Professional Dog & Cat Grooming • Metro Detroit
            </span>
          </div>

          <h1 class="text-5xl lg:text-7xl font-bold">
            Purely <span class="text-primary">S&rsquo;Mitten</span> with your
            pet.
          </h1>
        </div>
      </template>

      <template #description>
        S'Mitten Pets of Metro Detroit offers boutique grooming services for
        cats and dogs. From one-on-one dog styling to low-stress cat baths and
        expert dematting.
      </template>

      <div>
        <NuxtImg
          src="/hero-yellow.png"
          alt="Happy dog in a field of yellow flowers"
          width="600"
          height="600"
          class="w-full rounded-full shadow-xl border-4 border-primary-50 dark:border-primary-900/20"
          sizes="100vw sm:50vw md:600px"
        />
      </div>
    </UPageHero>

    <UPageSection
      id="features"
      title="A Suite of Boutique Pet Grooming & Spa Services"
      description="From the tip of the tail to the top of the ears, we provide high-standard dog grooming and cat grooming services in a low-stress environment. Every pet is treated with the patience and attention they deserve."
      :features="[
        {
          icon: 'i-lucide-dog',
          title: 'Full Dog Grooming',
          description:
            'Personalized styling tailored to your dog\'s breed, coat type, and personality. This service includes a bath, blow dry, brush out, precision haircut, sanitary trim, paw pad trim, nail clipping, ear cleaning, and anal gland expression (upon request).',
        },
        {
          icon: 'i-lucide-cat',
          title: 'Full Cat Grooming',
          description:
            'Expert, gentle handling for our feline friends. This service includes a waterless or wet bath (depending on comfort), blow dry, thorough comb-out, nail trim, ear cleaning, and your choice of a lion cut, plush trim, or sanitary shave.',
        },
        {
          icon: 'i-lucide-wind',
          title: 'Dematting & Coat Recovery',
          description:
            'A specialized, patient service focused on the pain-free removal of mats and tangles. We prioritize the health of the skin and the comfort of the pet, using premium conditioners to restore the coat whenever possible.',
        },
        {
          icon: 'i-lucide-bath',
          title: 'Bath & Brush',
          description:
            'Premium shampoos and conditioners, thorough blow-drying, and a deep brush-out to remove shedding hair and restore coat shine.',
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
        },
      ]"
    />

    <UPageSection
      id="about"
      title="The S’Mitten Difference"
      description="Professional care with a personal touch. We believe grooming should be a highlight of your pet's month, not a source of stress."
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div class="space-y-8">
          <div class="space-y-4">
            <h3 class="text-3xl font-bold">Why Metro Detroit trusts us</h3>
            <p class="text-lg text-gray-600 dark:text-gray-400">
              As a professionally trained groomer with deep roots in Michigan, I
              focus on one-on-one appointments. Your pet gets my undivided
              attention from start to finish in a calm, kennel-free environment.
            </p>
          </div>

          <div
            class="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
          >
            <UIcon
              name="i-lucide-map-pin"
              class="h-8 w-8 text-primary shrink-0"
            />
            <div>
              <h4 class="font-bold text-lg">Our Location</h4>
              <p class="text-gray-600 dark:text-gray-400">Metro Detroit Area</p>
              <p class="text-sm text-primary font-medium mt-1 italic">
                Boutique salon coming soon!
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
              <h4 class="font-bold text-xl text-center">Salon Hours</h4>
            </div>
          </template>

          <div class="space-y-2">
            <div
              v-for="schedule in [
                { day: 'Sunday', hours: 'Closed', color: 'text-gray-400' },
                { day: 'Monday', hours: 'Closed', color: 'text-gray-400' },
                { day: 'Tuesday', hours: '9 AM - 5 PM' },
                { day: 'Wednesday', hours: '9 AM - 5 PM' },
                { day: 'Thursday', hours: '9 AM - 5 PM' },
                { day: 'Friday', hours: '9 AM - 5 PM' },
                { day: 'Saturday', hours: '9 AM - 2 PM' },
              ]"
              :key="schedule.day"
              class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-1 last:border-0"
              :class="schedule.color"
            >
              <span class="font-semibold">{{ schedule.day }}</span>
              <span>{{ schedule.hours }}</span>
            </div>
          </div>

          <template #footer>
            <UButton
              to="/booking"
              label="Request an Appointment"
              block
              size="xl"
              icon="i-lucide-calendar"
            />
          </template>
        </UCard>
      </div>
    </UPageSection>
  </div>
</template>
