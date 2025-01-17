import { ClientLayout } from './client-layout'
import { metadata } from './metadata'

// Export the metadata
export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
