<template>
  <q-page>
    <div class="text-h4 text-center q-mb-lg">My Profile</div>
    <div v-if="!profile" class="row justify-center q-mt-xl">
      <q-spinner-ios color="grey-10" size="40px"></q-spinner-ios>
    </div>
    <q-card bordered flat v-else>
      <div>
        <Strong>Name: {{ profile.name }}</Strong>
      </div>
      <div>
        <Strong>Role: {{ profile.role }}</Strong>
      </div>
    </q-card>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getProfile } from '@/services/auth.service'

const profile = ref(null)
onMounted(async () => {
  const res = await getProfile()
  profile.value = res.data.data
})
</script>

<style scoped>
.q-page {
  margin: 10px;
}

.q-card {
  padding: 20px;
  margin: 20px;
  margin-top: 2%;
  box-shadow: 10px;
  border-radius: 20px;
}
</style>
