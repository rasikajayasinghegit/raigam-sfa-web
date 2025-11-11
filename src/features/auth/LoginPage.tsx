import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from './authSlice'

export default function LoginPage() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { status, error } = useAppSelector((s) => s.auth)
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const loc = useLocation() as any

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await dispatch(login({ userName, password }))
    if ((res as any).meta.requestStatus === 'fulfilled') {
      nav(loc.state?.from?.pathname || '/', { replace: true })
    }
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm space-y-4 p-6 rounded-lg border bg-white"
      >
        <h1 className="text-xl font-semibold">Sign in</h1>
        <div>
          <label className="text-sm">Username</label>
          <Input value={userName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div>
          <label className="text-sm">Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {status === 'error' && <p className="text-red-600 text-sm">{error}</p>}
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>
    </div>
  )
}
