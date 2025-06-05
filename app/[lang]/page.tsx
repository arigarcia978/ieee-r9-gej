import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Award, BookOpen, Heart, Calendar, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { getDictionary } from "./dictionaries"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CampaignLogo } from "@/components/campaign-logo"
import candidateImage from "../../public/gustavo-main.png" 
import galery1 from "../../public/galeria1.png" 
import galery2 from "../../public/galeria2.png" 
import galery3 from "../../public/galeria3.png" 
import galery4 from "../../public/galeria4.png" 
import galery5 from "../../public/galeria5.png"
import galery6 from "../../public/galeria6.png"
import { Linkedin } from "lucide-react"
import { Facebook } from "lucide-react"
import { Instagram } from "lucide-react"

export default async function CampaignPage({
  params,
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <CampaignLogo />
          <nav className="hidden md:flex items-center gap-6">
            <Link href={`#about`} className="text-sm font-medium transition-colors hover:text-primary">
              {dict.navigation.about}
            </Link>
            <Link href={`#experience`} className="text-sm font-medium transition-colors hover:text-primary">
              {dict.navigation.experience}
            </Link>
            <Link href={`#proposals`} className="text-sm font-medium transition-colors hover:text-primary">
              {dict.navigation.proposals}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher label={dict.languageSwitcher.label} currentLang={params.lang} />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-old-lace to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {dict.hero.title}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{dict.hero.subtitle}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="lapisLazuli" href="https://www.linkedin.com/in/gustavo-eduardo-juarez-99333a48/"><Linkedin color="white" size={20} /></Button>
                  <Button variant="lapisLazuli" href="https://www.facebook.com/gustavo.e.juarez"><Facebook color="white" size={20} /></Button>
                  <Button variant="lapisLazuli" href="https://www.instagram.com/gustavius2016/"><Instagram color="white" size={20} /></Button>
                </div>
              </div>
              <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover lg:order-last">
                <Image
                  src={candidateImage}
                  alt="Gustavo Juarez"
                  width={600}
                  height={600}
                  className="mx-auto aspect-square rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{dict.about.title}</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                {dict.about.description}
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{dict.about.family.title}</CardTitle>
                  <Heart className="h-4 w-4 text-lapis-lazuli" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dict.about.family.description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{dict.about.residence.title}</CardTitle>
                  <MapPin className="h-4 w-4 text-lapis-lazuli" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dict.about.residence.description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{dict.about.career.title}</CardTitle>
                  <Award className="h-4 w-4 text-lapis-lazuli" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dict.about.career.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-old-lace">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{dict.experience.title}</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                {dict.experience.description}
              </p>
            </div>

            <Tabs defaultValue="academic" className="mx-auto max-w-4xl mt-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="academic">{dict.experience.tabs.academic}</TabsTrigger>
                <TabsTrigger value="volunteer">{dict.experience.tabs.volunteer}</TabsTrigger>
              </TabsList>
              <TabsContent value="academic" className="mt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-old-lace">
                      <BookOpen className="h-5 w-5 text-lapis-lazuli" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{dict.experience.academic.degree1.title}</h3>
                      <p className="text-muted-foreground">{dict.experience.academic.degree1.institution}</p>
                      <p className="mt-2">{dict.experience.academic.degree1.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-old-lace">
                      <BookOpen className="h-5 w-5 text-lapis-lazuli" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{dict.experience.academic.degree2.title}</h3>
                      <p className="text-muted-foreground">{dict.experience.academic.degree2.institution}</p>
                      <p className="mt-2">{dict.experience.academic.degree2.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-old-lace">
                      <Award className="h-5 w-5 text-lapis-lazuli" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{dict.experience.academic.certification.title}</h3>
                      <p className="text-muted-foreground">{dict.experience.academic.certification.institution}</p>
                      <p className="mt-2">{dict.experience.academic.certification.description}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="volunteer" className="mt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-old-lace">
                      <Heart className="h-5 w-5 text-lapis-lazuli" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{dict.experience.volunteer.role1.title}</h3>
                      <p className="text-muted-foreground">{dict.experience.volunteer.role1.position}</p>
                      <p className="mt-2">{dict.experience.volunteer.role1.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-old-lace">
                      <Heart className="h-5 w-5 text-lapis-lazuli" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{dict.experience.volunteer.role2.title}</h3>
                      <p className="text-muted-foreground">{dict.experience.volunteer.role2.position1}</p>
                      <p className="text-muted-foreground">{dict.experience.volunteer.role2.position2}</p>
                      <p className="text-muted-foreground">{dict.experience.volunteer.role2.position3}</p>
                      <p className="mt-2">{dict.experience.volunteer.role2.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-old-lace">
                      <Heart className="h-5 w-5 text-lapis-lazuli" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{dict.experience.volunteer.role3.title}</h3>
                      <p className="text-muted-foreground">{dict.experience.volunteer.role3.position1}</p>
                      <p className="text-muted-foreground">{dict.experience.volunteer.role3.position2}</p>
                      <p className="text-muted-foreground">{dict.experience.volunteer.role3.position3}</p>
                      <p className="text-muted-foreground">{dict.experience.volunteer.role3.position4}</p>
                      <p className="mt-2">{dict.experience.volunteer.role3.description}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="proposals" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{dict.proposals.title}</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                {dict.proposals.description}
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <CheckCircle className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.proposals.categories.economic.title}</CardTitle>
                  <CardDescription>{dict.proposals.categories.economic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {dict.proposals.categories.economic.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-lapis-lazuli" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <CheckCircle className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.proposals.categories.infrastructure.title}</CardTitle>
                  <CardDescription>{dict.proposals.categories.infrastructure.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {dict.proposals.categories.infrastructure.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-lapis-lazuli" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <CheckCircle className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.proposals.categories.safety.title}</CardTitle>
                  <CardDescription>{dict.proposals.categories.safety.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {dict.proposals.categories.safety.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-lapis-lazuli" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <CheckCircle className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.proposals.categories.education.title}</CardTitle>
                  <CardDescription>{dict.proposals.categories.education.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {dict.proposals.categories.education.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-lapis-lazuli" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <CheckCircle className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.proposals.categories.environment.title}</CardTitle>
                  <CardDescription>{dict.proposals.categories.environment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {dict.proposals.categories.environment.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-lapis-lazuli" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <CheckCircle className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.proposals.categories.housing.title}</CardTitle>
                  <CardDescription>{dict.proposals.categories.housing.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {dict.proposals.categories.housing.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-lapis-lazuli" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-old-lace">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{dict.gallery.title}</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                {dict.gallery.description}
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={galery1}
                  alt={dict.gallery.images.alt1}
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={galery2}
                  alt={dict.gallery.images.alt2}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={galery3}
                  alt={dict.gallery.images.alt3}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={galery4}
                  alt={dict.gallery.images.alt4}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={galery5}
                  alt={dict.gallery.images.alt5}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={galery6}
                  alt={dict.gallery.images.alt6}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{dict.events.title}</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                {dict.events.description}
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <Calendar className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.events.event1.title}</CardTitle>
                  <CardDescription>{dict.events.event1.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{dict.events.event1.location}</p>
                  <p className="text-sm text-muted-foreground">{dict.events.event1.description}</p>
                  <Button variant="outline" className="mt-4">
                    {dict.events.event1.button}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <Calendar className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.events.event2.title}</CardTitle>
                  <CardDescription>{dict.events.event2.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{dict.events.event2.location}</p>
                  <p className="text-sm text-muted-foreground">{dict.events.event2.description}</p>
                  <Button variant="outline" className="mt-4">
                    {dict.events.event2.button}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <Calendar className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.events.event3.title}</CardTitle>
                  <CardDescription>{dict.events.event3.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{dict.events.event3.location}</p>
                  <p className="text-sm text-muted-foreground">{dict.events.event3.description}</p>
                  <Button variant="outline" className="mt-4">
                    {dict.events.event3.button}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-old-lace mb-4">
                    <Calendar className="h-6 w-6 text-lapis-lazuli" />
                  </div>
                  <CardTitle>{dict.events.event4.title}</CardTitle>
                  <CardDescription>{dict.events.event4.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">{dict.events.event4.location}</p>
                  <p className="text-sm text-muted-foreground">{dict.events.event4.description}</p>
                  <Button variant="outline" className="mt-4">
                    {dict.events.event4.button}
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Gustavo E. Juárez. {dict.footer.rights}
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.ieee.org/about/corporate/election" className="text-sm text-muted-foreground hover:underline">
              {dict.footer.terms}
            </Link>
            <Link href="https://www.ieee.org/about/corporate/election/candidates#ieee-region-delegate-elect/director-elect,-2026--2027" className="text-sm text-muted-foreground hover:underline">
              {dict.footer.contact}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
