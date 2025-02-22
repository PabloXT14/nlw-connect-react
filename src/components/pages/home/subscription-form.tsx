import { ArrowRight, Mail, User } from 'lucide-react'

import { Button } from '@/components/button'
import { Input, InputField, InputIcon } from '@/components/input'

export function SubscriptionForm() {
  return (
    <form className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]">
      <h2 className="text-gray-200 text-xl font-heading font-semibold">
        Inscrição
      </h2>

      <div className="space-y-3">
        <Input>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome completo" />
        </Input>

        <Input>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="email" placeholder="E-mail" />
        </Input>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight size={24} />
      </Button>
    </form>
  )
}
