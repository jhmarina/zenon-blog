import projectsData from '@/data/disenoData'
import Card from '@/components/Card'
import Link from "@/components/Link";
import SocialLinks from "@/components/SocialLinks";
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Servicios de Diseño Web' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Servicios de Diseño Web y Presencia Online
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ofrezco servicios de Diseño y Desarrollo Web para empresas. Desarrollo tu Presencia Online de forma integral, tanto a través del Diseño Web hecho a medida como la gestión de Redes Sociales y el posicionamiento SEO. No dudes en <strong><Link href="mailto:jhmarina@gmail.com">contactarme</Link></strong>.
          </p>
          <SocialLinks/>
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14">
            Últimos proyectos
          </h2>
        </div>
        <div className="container py-12">
          
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                services={d.services}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}