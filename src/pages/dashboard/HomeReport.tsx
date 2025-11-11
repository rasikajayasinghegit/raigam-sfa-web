import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Button } from '@/components/ui/button'
import { logout } from '@/features/auth/authSlice'
import { getChannels, type Channel } from '@/services/userDemarcationService'
import { useEffect, useState } from 'react'

export default function HomeReport() {
  const dispatch = useAppDispatch()
  const user = useAppSelector((s) => s.auth.user)

  const [channels, setChannels] = useState<Channel[]>([])
  const [loading, setLoading] = useState(false)

  const loadChannels = async () => {
    try {
      setLoading(true)
      const data = await getChannels()
      setChannels(data)
    } catch (err) {
      console.error('Channel fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadChannels()
  }, [])

  const onLogout = async () => {
    await dispatch(logout())
    window.location.href = '/sign-in'
  }

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Home Report</h1>

      {/* ✅ Show logged-in user */}
      <div className="p-4 bg-white border rounded shadow-sm">
        <div className="font-medium">Logged-in User</div>
        <p>Name: {user?.personalName}</p>
        <p>Role: {user?.role}</p>
      </div>

      {/* ✅ Channels List */}
      <div className="p-4 bg-white border rounded shadow-sm">
        <div className="font-medium mb-2">Channel List</div>

        {loading ? (
          <p>Loading channels...</p>
        ) : (
          <ul className="space-y-2">
            {channels.map((c) => (
              <li key={c.id} className="p-2 border rounded bg-gray-50 flex justify-between">
                <span>
                  <strong>{c.channelName}</strong> ({c.channelCode})
                </span>
                <span className={`text-sm ${c.isActive ? 'text-green-600' : 'text-red-600'}`}>
                  {c.isActive ? 'Active' : 'Inactive'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button variant="destructive" onClick={onLogout}>
        Logout
      </Button>
    </div>
  )
}
