'use client'

import { Copy, Link } from 'lucide-react'
import { toast } from 'sonner'

import { IconButton } from '@/components/icon-button'
import { Input, InputField, InputIcon } from '@/components/input'

type InputFieldProps = {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InputFieldProps) {
  async function handleCopyLink() {
    await navigator.clipboard.writeText(inviteLink)

    toast.success('Link copiado para a area de transferência!', {
      position: 'top-center',
    })
  }

  return (
    <Input>
      <InputIcon>
        <Link size={20} />
      </InputIcon>

      <InputField type="text" defaultValue={inviteLink} readOnly />

      <IconButton className="-mr-2" onClick={handleCopyLink}>
        <Copy size={20} />
      </IconButton>
    </Input>
  )
}
