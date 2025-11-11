import { apiAuth } from '@/lib/axiosAuth'

export interface Channel {
  id: number
  userId: number | null
  countryId: number
  countryName: string
  channelName: string
  channelCode: string
  isActive: boolean
}

// Get channel
export async function getChannels(): Promise<Channel[]> {
  const res = await apiAuth.get('/api/v1/userDemarcation/channel')

  if (res.data.code !== 200) {
    throw new Error(res.data.message || 'Failed to load channels')
  }

  return res.data.payload as Channel[]
}
