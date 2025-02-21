import { ArrowRight, Mail, Radio, User } from 'lucide-react'
import Image from 'next/image'

import { Input, InputField, InputIcon } from '@/components/input'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/button'

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 lg:py-0">
      <div className="min-h-dvh flex flex-col justify-center gap-16">
        {/* HEADER */}
        <div className="flex flex-col gap-8 items-center md:items-start">
          <Image
            src={logo}
            width={108.5}
            height={30}
            alt="DevStage"
            className=""
          />

          <h1 className="flex flex-col text-4xl text-center leading-none font-heading font-medium md:text-7xl md:text-left">
            <span className="text-blue">CodeCraft</span> Summit 2025
          </h1>
        </div>

        {/* INFO */}
        <div className="flex flex-col gap-5 items-stretch lg:flex-row">
          {/* ABOUT */}
          <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
            {/* TITLE */}
            <div className="flex items-center justify-between">
              <h2 className="text-gray-200 text-xl font-heading font-semibold">
                Sobre o evento
              </h2>

              <div className="flex items-center gap-2 text-purple">
                <Radio size={20} />
                <span className="text-xs font-semibold uppercase">ao vivo</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons. Dias 15 a 17 de março | Das 18h
              às 21h | Online & Gratuito{' '}
            </p>

            {/* SCHEDULE */}
            <p className="mt-auto text-gray-300 leading-relaxed text-sm md:text-base">
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito{' '}
            </p>
          </div>

          {/* SUBSCRIPTION */}
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
        </div>
      </div>
    </main>
  )
}
