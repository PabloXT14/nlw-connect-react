import { Copy, Link } from 'lucide-react'

import { IconButton } from '@/components/icon-button'
import { Input, InputField, InputIcon } from '@/components/input'

export function InviteLinkInput() {
  return (
    <Input>
      <InputIcon>
        <Link size={20} />
      </InputIcon>

      <InputField
        type="text"
        defaultValue="devstage.com/codecraft-summit-2025/1289"
        readOnly
      />

      <IconButton className="-mr-2">
        <Copy size={20} />
      </IconButton>
    </Input>
  )
}
