import { ArrowRight, Copy } from 'lucide-react'

import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'

export default function Home() {
  return (
    <main className="flex flex-col items-start p-4 gap-4">
      <Button>
        Clique <ArrowRight />
      </Button>

      <IconButton>
        <Copy size={20} />
      </IconButton>
    </main>
  )
}
