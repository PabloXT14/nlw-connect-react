'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/button'
import { Input, InputField, InputIcon } from '@/components/input'

const subscriptionFormSchema = z.object({
  name: z.string().nonempty('O nome completo é obrigatório'),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
})

type SubscriptionFormData = z.infer<typeof subscriptionFormSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionFormSchema),
  })

  function handleSubmitForm(data: SubscriptionFormData) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    >
      <h2 className="text-gray-200 text-xl font-heading font-semibold">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-1">
          <Input error={!!errors.name}>
            <InputIcon>
              <User />
            </InputIcon>

            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </Input>

          {errors.name && (
            <span className="text-danger text-xs font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <Input error={!!errors.email}>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </Input>

          {errors.email && (
            <span className="text-danger text-xs font-semibold">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight size={24} />
      </Button>
    </form>
  )
}
