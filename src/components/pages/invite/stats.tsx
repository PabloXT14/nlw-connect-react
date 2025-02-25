import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

type StatsProps = {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: inviteClicks } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {/* CARD 1 */}
      <div className="relative flex flex-col gap-1 items-center justify-center bg-gray-700 border border-gray-600 rounded-xl px-4 pt-7 pb-5">
        <span className="text-gray-200 text-2xl font-heading font-semibold leading-none">
          {inviteClicks}
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
          {inviteCount}
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
          {rankingPosition ? `${rankingPosition}°` : '-'}
        </span>

        <span className="text-gray-300 text-sm text-center">
          Posição no ranking
        </span>

        <div className="absolute top-3 left-3">
          <Medal className="size-5 text-purple" />
        </div>
      </div>
    </div>
  )
}
