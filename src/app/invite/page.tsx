import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import Image from 'next/image'

import { IconButton } from '@/components/icon-button'
import { Input, InputField, InputIcon } from '@/components/input'

import logo from '@/assets/logo.svg'
import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'

export default function InvitePage() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 lg:py-0">
      {/* INFO */}
      <div className="min-h-dvh flex items-center justify-between gap-16 flex-col lg:flex-row">
        {/* ABOUT */}
        <div className="w-full max-w-[550px] flex flex-col gap-10">
          <Image
            src={logo}
            width={108.5}
            height={30}
            alt="DevStage"
            className=""
          />

          {/* TITLE */}
          <div className="space-y-2">
            <h1 className="text-gray-100 text-4xl font-heading font-semibold leading-none">
              Inscrição confirmada!
            </h1>

            <p className="text-gray-300">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </div>

          {/* MGM */}
          <div className="space-y-6">
            {/* TEXT */}
            <div className="space-y-3">
              <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                Indique e ganhe
              </h2>

              <p className="text-gray-300">
                Convide mais pessoas para o evento e concorra a prêmios
                exclusivos! É só compartilhar o link abaixo e acompanhar as
                inscrições:
              </p>
            </div>

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

            {/* DETAILS */}
            <div className="grid gap-3 md:grid-cols-3">
              {/* CARD 1 */}
              <div className="relative flex flex-col gap-1 items-center justify-center bg-gray-700 border border-gray-600 rounded-xl px-4 pt-7 pb-5">
                <span className="text-gray-200 text-2xl font-heading font-semibold leading-none">
                  942
                </span>

                <span className="text-gray-300 text-sm text-center">
                  Acessos ao link
                </span>

                <div className="absolute top-3 left-3">
                  <MousePointerClick className="size-5 text-purple" />
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative flex flex-col gap-1 items-center justify-center bg-gray-700 border border-gray-600 rounded-xl px-4 pt-7 pb-5">
                <span className="text-gray-200 text-2xl font-heading font-semibold leading-none">
                  875
                </span>

                <span className="text-gray-300 text-sm text-center">
                  Inscrições feitas
                </span>

                <div className="absolute top-3 left-3">
                  <BadgeCheck className="size-5 text-purple" />
                </div>
              </div>

              {/* CARD 3 */}
              <div className="relative flex flex-col gap-1 items-center justify-center bg-gray-700 border border-gray-600 rounded-xl px-4 pt-7 pb-5">
                <span className="text-gray-200 text-2xl font-heading font-semibold leading-none">
                  3º
                </span>

                <span className="text-gray-300 text-sm text-center">
                  Posição no ranking
                </span>

                <div className="absolute top-3 left-3">
                  <Medal className="size-5 text-purple" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RANKING */}
        <div className="w-full max-w-[440px] space-y-5">
          <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
            Ranking de indicações
          </h2>

          {/* LIST */}
          <div className="space-y-4">
            {/* ITEM 1 */}
            <div className="relative bg-gray-700 flex flex-col justify-center gap-3 p-6 rounded-xl border border-gray-600">
              {/* TEXT */}

              <span className="text-gray-300 ">
                <span className="font-semibold">1º</span> | Andrés Souza
              </span>

              <span className="text-gray-200 text-2xl font-heading font-semibold leading-none">
                1.128
              </span>

              {/* MEDAL */}
              <Image
                src={medalGold}
                width={56}
                height={86}
                alt=""
                className="absolute top-0 right-8"
              />
            </div>

            {/* ITEM 2 */}
            <div className="relative bg-gray-700 flex flex-col justify-center gap-3 p-6 rounded-xl border border-gray-600">
              {/* TEXT */}

              <span className="text-gray-300 ">
                <span className="font-semibold">2º</span> | Melissa Loures
              </span>

              <span className="text-gray-200 text-2xl font-heading font-semibold leading-none">
                928
              </span>

              {/* MEDAL */}
              <Image
                src={medalSilver}
                width={56}
                height={86}
                alt=""
                className="absolute top-0 right-8"
              />
            </div>

            {/* ITEM 3 */}
            <div className="relative bg-gray-700 flex flex-col justify-center gap-3 p-6 rounded-xl border border-gray-600">
              {/* TEXT */}

              <span className="text-gray-300 ">
                <span className="font-semibold">3º</span> | Rodrigo Gonçalves
              </span>

              <span className="flex gap-3 items-center text-gray-200 text-2xl font-heading font-semibold leading-none">
                875
                {/* TAG */}
                <div className="bg-gray-500 px-3 py-1 rounded-md text-sm">
                  <span className="text-gray-300 text-xs font-sans">Você</span>
                </div>
              </span>

              {/* MEDAL */}
              <Image
                src={medalCooper}
                width={56}
                height={86}
                alt=""
                className="absolute top-0 right-8"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
