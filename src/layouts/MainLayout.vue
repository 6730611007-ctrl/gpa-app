<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header และ Toolbar -->
    <q-header elevated class="bg-white text-white">
      <q-toolbar>
        <q-btn flat round dense color="grey" icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-black text-h6"> My Application </q-toolbar-title>

        <div v-if="store.user">
          <q-btn size="sm" color="negative" icon="logout" @click="onLogout" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Page Container -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth-store'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const router = useRouter()
const store = useAuthStore()

const onLogout = () => {
  $q.dialog({
    title: 'Logout',
    message: 'are you sure you want to logout',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    store.logout()
    $q.notify({
      type: 'positive',
      message: 'Logout sucess',
    })
    router.replace({ name: 'login' })
  })
}

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
