<template>
  <div class="page">
    <SiteHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <HowSection />
      <RolesSection />
      <WeighSection />
      <FaqSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import HowSection from '@/components/HowSection.vue'
import RolesSection from '@/components/RolesSection.vue'
import WeighSection from '@/components/WeighSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
