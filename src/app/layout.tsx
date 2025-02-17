import '@/app/global.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CodeCraft',
  description: 'Pagina de inscrição no evento e acompanhamento de indicações',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  )
}
