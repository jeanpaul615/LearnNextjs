import {Roboto} from "next/font/google";
export const metadata = {
  title: 'Gestion de Tareas con IA - NextJS',
  description: 'Desarrollado por Jean Paul',
  keywords: 'gestion, tareas, desarrollo, nextjs'
}

/*
Minutos Importantes del curso de NextJs - Fazt Code
-1.00.00 -> React essentials
-45:11 -> fonts google
-1.02.11 -> FetchData
-Params Dinamicos, [id]
-1.29.00 Alias Rutas,- Solo colocar el @
-2.14.00 UseRouter redireccionamiento
-2.23.00 Route Handlers 
-Request Body
-3.03.00 SQL LITE VIEWER
-NPX PRIMA STUDIO
-3.06.00 FULL API REST
-Front React Js
-Despliegue 4.13.00
*/
const roboto = Roboto({
  weight: ["300","400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={roboto.className}>{children}</body>
    </html>
  )
}
