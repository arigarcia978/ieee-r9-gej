import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Award, BookOpen, Heart, Calendar, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { redirect } from "next/navigation"

export default function CampaignPage() {
  redirect("/en")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Gustavo E. Juárez</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#proposals" className="text-sm font-medium transition-colors hover:text-primary">
              Proposals
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="bg-rose-600 hover:bg-rose-700">Donate</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Leadership That Works For Everyone
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Building a stronger community through inclusive policies, transparent governance, and
                    forward-thinking solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-rose-600 hover:bg-rose-700">Join Our Campaign</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="mx-auto aspect-square overflow-hidden rounded-xl object-cover lg:order-last">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Gustavo E. Juárez"
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
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">About John Smith</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                John Smith is a dedicated public servant with over 15 years of experience in community leadership. Born
                and raised in our city, John understands the unique challenges and opportunities we face.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Family</CardTitle>
                  <Heart className="h-4 w-4 text-rose-600" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Married for 20 years with two children in local public schools
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Residence</CardTitle>
                  <MapPin className="h-4 w-4 text-rose-600" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Lifelong resident of the North District neighborhood</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Career</CardTitle>
                  <Award className="h-4 w-4 text-rose-600" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Small business owner and former city planning commissioner
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Experience & Background</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                John brings a wealth of experience in both academic and community service roles
              </p>
            </div>

            <Tabs defaultValue="academic" className="mx-auto max-w-4xl mt-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="academic">Academic Experience</TabsTrigger>
                <TabsTrigger value="volunteer">Volunteer Work</TabsTrigger>
              </TabsList>
              <TabsContent value="academic" className="mt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                      <BookOpen className="h-5 w-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Master of Public Administration</h3>
                      <p className="text-muted-foreground">State University, 2008</p>
                      <p className="mt-2">
                        Specialized in Urban Planning and Development with honors. Thesis on sustainable city growth
                        models.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                      <BookOpen className="h-5 w-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Bachelor of Arts in Political Science</h3>
                      <p className="text-muted-foreground">City College, 2004</p>
                      <p className="mt-2">
                        Graduated summa cum laude. Student body president and founder of the Community Outreach
                        Initiative.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                      <Award className="h-5 w-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Certified Urban Planner</h3>
                      <p className="text-muted-foreground">American Planning Association, 2010</p>
                      <p className="mt-2">
                        Professional certification in urban planning with focus on community development and
                        revitalization.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="volunteer" className="mt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                      <Heart className="h-5 w-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Habitat for Humanity</h3>
                      <p className="text-muted-foreground">Board Member, 2015-Present</p>
                      <p className="mt-2">
                        Helped coordinate the construction of over 50 affordable homes for families in need throughout
                        the region.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                      <Heart className="h-5 w-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">City Food Bank</h3>
                      <p className="text-muted-foreground">Volunteer Coordinator, 2012-2018</p>
                      <p className="mt-2">
                        Organized weekly food distribution events serving over 200 families per week. Recruited and
                        trained volunteers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
                      <Heart className="h-5 w-5 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Youth Mentorship Program</h3>
                      <p className="text-muted-foreground">Mentor, 2010-Present</p>
                      <p className="mt-2">
                        Dedicated over 1,000 hours mentoring at-risk youth, helping them develop life skills and career
                        paths.
                      </p>
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
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">My Proposals</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                A comprehensive plan for a better future for our community
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <CheckCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Economic Development</CardTitle>
                  <CardDescription>Supporting local businesses and creating jobs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Tax incentives for small businesses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Streamlined permit process for new businesses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Job training programs for residents</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <CheckCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Infrastructure</CardTitle>
                  <CardDescription>Improving our roads, parks, and public spaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Comprehensive road repair program</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Expansion of public parks and green spaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Modernization of public facilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <CheckCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Public Safety</CardTitle>
                  <CardDescription>Creating safer neighborhoods for everyone</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Community policing initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Improved street lighting in high-risk areas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Youth engagement programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <CheckCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Supporting our schools and students</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Increased funding for public schools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>After-school program expansion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Teacher retention initiatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <CheckCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Environment</CardTitle>
                  <CardDescription>Creating a sustainable future</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Clean energy initiatives for city buildings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Expanded recycling programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Tree planting and urban forestry</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <CheckCircle className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Housing</CardTitle>
                  <CardDescription>Making housing affordable and accessible</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Affordable housing development incentives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>First-time homebuyer assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                      <span>Rental assistance programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mt-12">
              <Button className="bg-rose-600 hover:bg-rose-700">
                View Full Platform <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Campaign Gallery</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                John Smith in action, serving our community
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="John Smith speaking at community event"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="John Smith volunteering at food drive"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="John Smith meeting with constituents"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="John Smith at city council meeting"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="John Smith with family at community park"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="John Smith at ribbon cutting ceremony"
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
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Upcoming Events</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Join us at these upcoming campaign events
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <Calendar className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Town Hall Meeting</CardTitle>
                  <CardDescription>May 15, 2025 • 7:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Community Center, 123 Main Street</p>
                  <p className="text-sm text-muted-foreground">
                    Join us for an open discussion about the issues that matter most to our community. Bring your
                    questions and concerns.
                  </p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    RSVP
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <Calendar className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Neighborhood Canvassing</CardTitle>
                  <CardDescription>May 22, 2025 • 10:00 AM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Campaign HQ, 456 Oak Avenue</p>
                  <p className="text-sm text-muted-foreground">
                    Help us spread our message door-to-door. Training and materials will be provided. Lunch included.
                  </p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Volunteer
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <Calendar className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Fundraising Dinner</CardTitle>
                  <CardDescription>June 5, 2025 • 6:30 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Grand Hotel Ballroom, 789 River Road</p>
                  <p className="text-sm text-muted-foreground">
                    Join us for an evening of dinner and discussion to support our campaign. Special guest speakers.
                  </p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Purchase Tickets
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 mb-4">
                    <Calendar className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle>Community Clean-Up</CardTitle>
                  <CardDescription>June 12, 2025 • 9:00 AM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">City Park, 321 Park Avenue</p>
                  <p className="text-sm text-muted-foreground">
                    Help us beautify our community with this volunteer clean-up event. Supplies and refreshments
                    provided.
                  </p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Sign Up
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mt-12">
              <Button className="bg-rose-600 hover:bg-rose-700">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Involved</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  There are many ways to support our campaign. Whether you want to volunteer, donate, or just stay
                  informed, we'd love to hear from you.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-rose-600" />
                    <span>contact@johnsmith.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-rose-600" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-rose-600" />
                    <span>123 Campaign HQ Street, City, State 12345</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button className="bg-rose-600 hover:bg-rose-700">Volunteer</Button>
                  <Button variant="outline">Donate</Button>
                </div>
              </div>
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Join Our Campaign</h3>
                <p className="mt-2 text-sm text-muted-foreground">Sign up to receive updates and get involved</p>
                <form className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      How would you like to help?
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="I'm interested in volunteering..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} John Smith for City Council. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
