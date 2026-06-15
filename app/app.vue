<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Internet eXchange 42` : 'Internet eXchange 42';
  },
  meta: [
    { name: 'keywords', content: 'IX42,IX,Internet eXchange,BGP,ASN,dn42,overlay' },
    { name: 'theme-color', content: '#333333' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
