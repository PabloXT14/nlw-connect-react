import Image from 'next/image'

import { InviteLinkInput } from '@/components/pages/invite/invite-link-input'
import { Ranking } from '@/components/pages/invite/ranking'
import { Stats } from '@/components/pages/invite/stats'

import logo from '@/assets/logo.svg'

type InvitePageProps = {
  params: Promise<{
    subscriberId: string
  }>
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { subscriberId } = await params

  const inviteLink = `http://localhost:3333/invites/${subscriberId}`

  console.log('SUBSCRIBER ID: ', subscriberId)

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

            <InviteLinkInput inviteLink={inviteLink} />

            <Stats subscriberId={subscriberId} />
          </div>
        </div>

        <Ranking subscriberId={subscriberId} />
      </div>
    </main>
  )
}
