import Image from 'next/image'

import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'
import { getRanking } from '@/http/api'

type RankingProps = {
  subscriberId: string
}

export async function Ranking({ subscriberId }: RankingProps) {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      {ranking?.length !== 0 && (
        <>
          <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
            Ranking de indicações
          </h2>

          {/* LIST */}
          <div className="space-y-4">
            {ranking?.map((item, index) => {
              const rankingPosition = index + 1

              const medal =
                index === 0
                  ? medalGold
                  : index === 1
                    ? medalSilver
                    : medalCooper

              return (
                <div
                  key={item.id}
                  className="relative bg-gray-700 flex flex-col justify-center gap-3 p-6 rounded-xl border border-gray-600"
                >
                  {/* TEXT */}

                  <span className="text-gray-300 ">
                    <span className="font-semibold">{rankingPosition}º</span> |{' '}
                    {item.name}
                  </span>

                  <span className="flex gap-3 items-center text-gray-200 text-2xl font-heading font-semibold leading-none">
                    {item.score}
                    {/* TAG */}
                    {item.id === subscriberId && (
                      <div className="bg-gray-500 px-3 py-1 rounded-md text-sm">
                        <span className="text-gray-300 text-xs font-sans">
                          Você
                        </span>
                      </div>
                    )}
                  </span>

                  {/* MEDAL */}
                  <Image
                    src={medal}
                    width={56}
                    height={86}
                    alt=""
                    className="absolute top-0 right-8"
                  />
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
