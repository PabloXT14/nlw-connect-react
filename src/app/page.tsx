import { ArrowRight, Copy, User } from 'lucide-react'

import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { Input, InputField, InputIcon } from '@/components/input'

export default function Home() {
  return (
    <main className="flex flex-col items-start p-4 gap-4">
      <Button>
        Clique <ArrowRight />
      </Button>

      <IconButton>
        <Copy size={20} />
      </IconButton>

      <Input>
        <InputIcon>
          <User size={20} />
        </InputIcon>
        <InputField type="text" placeholder="Nome" />
      </Input>

      <Input error={true}>
        <InputIcon>
          <User size={20} />
        </InputIcon>
        <InputField type="email" placeholder="Email" />
      </Input>
    </main>
  )
}
