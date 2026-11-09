import { useAuthStore } from '../stores/auth-store'
export default async () => {
  const auth = useAuthStore()
  await auth.checkAuth()
}
// แก้ quasar.config เพื่อบูตไฟล์นี้ขึ้นมา
