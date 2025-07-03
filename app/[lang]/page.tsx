import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Award,
  BookOpen,
  Heart,
  Calendar,
  Users,
  Target,
  Shield,
  GraduationCap,
  Leaf,
  Home,
  Building,
  Zap,
  MapPin,
  ExternalLink,
} from "lucide-react"
import { getDictionary } from "./dictionaries"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CampaignLogo } from "@/components/campaign-logo"

import candidatePhoto from "../../public/images/candidate-photo.png" 

export default async function CampaignPage({
  params,
}: {
  params: { lang: "en" | "es" | "pt" }
}) {
  const dict = await getDictionary(params.lang)

  const proposalIcons = {
    economic: Building,
    infrastructure: Zap,
    safety: Shield,
    education: GraduationCap,
    environment: Leaf,
    housing: Home,
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between py-4">
          <CampaignLogo />
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {dict.navigation.about}
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {dict.navigation.experience}
            </Link>
            <Link
              href="#proposals"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {dict.navigation.proposals}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher label={dict.languageSwitcher.label} currentLang={params.lang} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Candidate Introduction */}
        <section className="section-padding bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="relative bg-white rounded-lg p-1 shadow-card">
                  <Image
                    src={candidatePhoto}
                    alt="Gustavo E. Juárez, political candidate"
                    width={400}
                    height={500}
                    className="rounded-md object-cover w-full h-auto"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900">GUSTAVO E. JUÁREZ</h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">{dict.hero.subtitle}</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{dict.hero.connect}</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/gustavius2016/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors group"
                    >
                      <svg
                        className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.facebook.com/gustavo.e.juarez"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors group"
                    >
                      <svg
                        className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/gustavo-eduardo-juarez-99333a48/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors group"
                    >
                      <svg
                        className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">{dict.about.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{dict.about.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="card-subtle border-slate-200">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 mb-4">
                    <Heart className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{dict.about.family.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600">{dict.about.family.description}</p>
                </CardContent>
              </Card>

              <Card className="card-subtle border-slate-200">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 mb-4">
                    <MapPin className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{dict.about.residence.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600"><a href="https://maps.app.goo.gl/YhLaUkHppAYBEg92A" target="_blank">{dict.about.residence.description}</a></p>
                </CardContent>
              </Card>

              <Card className="card-subtle border-slate-200 sm:col-span-2 lg:col-span-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 mb-4">
                    <Award className="h-6 w-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{dict.about.career.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600">{dict.about.career.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">{dict.experience.title}</h2>
            </div>

            <Tabs defaultValue="academic" className="mx-auto max-w-4xl">
              <TabsList className="grid w-full grid-cols-2 bg-white border border-slate-200">
                <TabsTrigger
                  value="academic"
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                >
                  {dict.experience.tabs.academic}
                </TabsTrigger>
                <TabsTrigger
                  value="volunteer"
                  className="data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                >
                  {dict.experience.tabs.volunteer}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="academic" className="mt-8">
                <div className="space-y-6">
                  {[
                    { ...dict.experience.academic.degree1, icon: GraduationCap },
                    { ...dict.experience.academic.degree2, icon: BookOpen },
                    { ...dict.experience.academic.certification, icon: Award },
                  ].map((item, index) => (
                    <Card key={index} className="card-subtle border-slate-200">
                      <CardContent className="flex gap-6 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 flex-shrink-0">
                          <item.icon className="h-6 w-6 text-slate-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                          <p className="text-blue-700 font-medium mb-3">{item.institution}</p>
                          <p className="text-slate-600 leading-relaxed">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="volunteer" className="mt-8">
                <div className="space-y-6">
                  {[
                    { ...dict.experience.volunteer.role1, icon: Heart },
                    { ...dict.experience.volunteer.role2, icon: Users },
                    { ...dict.experience.volunteer.role3, icon: Target },
                  ].map((item, index) => (
                    <Card key={index} className="card-subtle border-slate-200">
                      <CardContent className="flex gap-6 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 flex-shrink-0">
                          <item.icon className="h-6 w-6 text-slate-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                          {item.position.map((pos, idx) => (
                            <p key={idx} className="text-blue-700 font-medium mb-3">{pos}</p>
                          ))}
                          {/* <p className="text-slate-600 leading-relaxed">{item.description}</p> */}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Proposals Section */}
        <section id="proposals" className="section-padding">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">{dict.proposals.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{dict.proposals.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {Object.entries(dict.proposals.categories).map(([key, proposal]) => {
                const IconComponent = proposalIcons[key as keyof typeof proposalIcons]

                return (
                  <Card key={key} className="card-subtle border-slate-200">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-slate-100 mb-4">
                        <IconComponent className="h-7 w-7 text-slate-700" />
                      </div>
                      <CardTitle className="text-xl text-slate-900 mb-2">{proposal.title}</CardTitle>
                      <CardDescription className="text-slate-600">{proposal.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {proposal.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
        
        {/* Gallery Section 
        <section id="gallery" className="section-padding bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">{dict.gallery.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{dict.gallery.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {Object.entries(dict.gallery.images).map(([key, alt], index) => (
                <div key={key} className="group relative overflow-hidden rounded-md shadow-subtle">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={alt}
                    width={400}
                    height={300}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        */}
        {/* Events Section */}
        <section id="events" className="section-padding">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">{dict.events.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{dict.events.description}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto">
              {[dict.events.event1, dict.events.event2, dict.events.event3].map((event) => (
                <Card key={event.title} className="card-subtle border-slate-200">
                  <CardHeader className="pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 mb-4">
                      <Calendar className="h-5 w-5 text-slate-700" />
                    </div>
                    <CardTitle className="text-lg text-slate-900">{event.title}</CardTitle>
                    <CardDescription className="text-blue-700 font-medium">{event.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-medium text-slate-900">{event.location}</p>
                    <p className="text-slate-600 leading-relaxed">{event.description}</p>
                    {event.url && event.url !== "#" ? (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 text-sm font-medium text-slate-900 bg-transparent border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
                      >
                        {event.button}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : event.title !== "SPARK Program" && event.title !== "Programa SPARK" ? (
                      <Button variant="outline" className="w-full bg-transparent">
                        {event.button}
                      </Button>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:h-16 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm text-slate-600 md:text-left">
              &copy; {new Date().getFullYear()} Gustavo E. Juárez. {dict.footer.rights}
            </p>
          </div>
          <div className="flex gap-6">
            {/* <Link href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors"> */}
              {/* {dict.footer.privacy} */}
            {/* </Link> */}
            <Link href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              {dict.footer.terms}
            </Link>
            <Link href="#" className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              {dict.footer.contact}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
