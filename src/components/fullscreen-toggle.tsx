import { useEffect, useState } from 'react'
import { Minimize2, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function FullscreenToggle() {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(
    !!document.fullscreenElement
  )

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const toggle = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
        // state updates via fullscreenchange listener
      } else if (document.exitFullscreen) {
        await document.exitFullscreen()
      }
    } catch {
      // ignore
    }
  }

  const label = isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          onClick={toggle}
          aria-label={label}
          title={label}
        >
          {isFullscreen ? <Minimize2 /> : <Maximize2 />}
        </Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>{label}</TooltipContent>
    </Tooltip>
  )
}

