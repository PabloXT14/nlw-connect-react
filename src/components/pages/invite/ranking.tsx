import Image from 'next/image'

import medalCooper from '@/assets/medal-cooper.svg'
import medalGold from '@/assets/medal-gold.svg'
import medalSilver from '@/assets/medal-silver.svg'

export function Ranking() {
  return (
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
  )
}
