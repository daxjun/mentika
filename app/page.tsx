import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Lightbulb,
  GraduationCap,
  Calendar,
  Mail,
  ArrowRight,
  Upload,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-01%20at%2022.38.09_d6d198d3.jpg-DNj98GqfAWrCmk4ta70t5CSzTWzEIs.jpeg"
              alt="Mentika Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#join" className="text-sm font-medium hover:text-primary">
              Join As Mentor
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:flex">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
            <Button>
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    Coming Soon
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect Mentor with Mentika
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your advice seeking platform. Connect with experienced mentors who can guide you through your career
                    journey.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-[#f7913e] hover:bg-[#e57f2d]">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Be the first to know when we launch. No spam, ever.</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-sm overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
                  <div className="p-4">
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Join Our Waitlist</h3>
                      <p className="text-sm text-muted-foreground">
                        Be the first to experience Mentika when we launch.
                      </p>
                    </div>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Input type="text" placeholder="Full Name" />
                      </div>
                      <div className="space-y-2">
                        <Input type="email" placeholder="Email Address" />
                      </div>
                      <div className="space-y-2">
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="" disabled selected>
                            I am interested as a...
                          </option>
                          <option value="mentee">Mentee - Seeking Advice</option>
                          <option value="mentor">Mentor - Offering Guidance</option>
                        </select>
                      </div>
                    </div>
                    <Button className="w-full bg-[#f7913e] hover:bg-[#e57f2d]">Join Waitlist</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Mentika</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mentika is a platform designed to connect mentors and mentees, making advice seeking simple and
                  effective.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-[#f7913e]" />
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Find and connect with mentors who have the experience and expertise you need.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Lightbulb className="h-12 w-12 text-[#f7913e]" />
                <h3 className="text-xl font-bold">Learn</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Gain valuable insights and knowledge from experienced professionals in your field.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <GraduationCap className="h-12 w-12 text-[#f7913e]" />
                <h3 className="text-xl font-bold">Grow</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Accelerate your personal and professional growth with personalized guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Mentika Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes it easy to find the right mentor and start your growth journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7913e] text-white">
                    1
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Create Your Profile</h3>
                    <p className="text-sm text-muted-foreground">
                      Sign up and create a detailed profile highlighting your goals, interests, and what you're looking
                      for in a mentor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7913e] text-white">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Browse Mentors</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore our diverse community of mentors, filtering by industry, expertise, and availability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7913e] text-white">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Connect and Schedule</h3>
                    <p className="text-sm text-muted-foreground">
                      Request sessions with mentors who match your needs and schedule meetings at times that work for
                      both of you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7913e] text-white">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Grow and Develop</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive personalized guidance, feedback, and support to help you achieve your goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background md:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Mentika Platform Preview"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                  <p className="text-lg font-medium">Platform Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join As Mentor Section with Google Form */}
        <section id="join" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Become a Mentor</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Share your expertise and help others grow. Join our community of mentors today.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="mb-6 space-y-2">
                  <h3 className="text-2xl font-bold">Mentor Registration Form</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below to register as a mentor on Mentika. We'll review your application and get
                    back to you soon.
                  </p>
                </div>
                {/* Google Form Embed */}
                <div className="aspect-video w-full overflow-hidden rounded-lg border">
                  <iframe
                    src="https://docs.google.com/forms/u/0/d/1nOp11D5red4FMiKvPlv2KRYLsr1Ia43Q-SPPitk-Y74/viewform?chromeless=1&edit_requested=true"
                    width="100%"
                    height="100%"
                    className="h-[500px]"
                  >
                    Loading Google Form...
                  </iframe>
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Replace "YOUR_GOOGLE_FORM_ID" in the iframe src with your actual Google Form ID
                    </p>
                    <p className="mt-2 text-sm">
                      <Link href="https://forms.gle/example" className="text-[#f7913e] hover:underline" target="_blank">
                        Or open the form in a new tab
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Alternative Form */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-lg font-medium">Or fill out our quick registration form:</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="profession" className="text-sm font-medium">
                        Profession
                      </label>
                      <Input id="profession" placeholder="Software Engineer" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-sm font-medium">
                        Years of Experience
                      </label>
                      <Input id="experience" type="number" placeholder="5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="expertise" className="text-sm font-medium">
                      Areas of Expertise
                    </label>
                    <Input id="expertise" placeholder="e.g., Career Development, Leadership, Technical Skills" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium">
                      Short Bio
                    </label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself and your experience..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium">
                      LinkedIn Profile URL (Optional)
                    </label>
                    <Input id="linkedin" placeholder="https://linkedin.com/in/username" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Upload Resume/CV (Optional)</label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="resume-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOCX (MAX. 5MB)</p>
                        </div>
                        <input id="resume-upload" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <Button className="w-full bg-[#f7913e] hover:bg-[#e57f2d]">Submit Application</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admin Area Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Admin Area</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Manage your company branding, founder details, and content.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                {/* Logo Upload */}
                <div className="mb-8 space-y-4">
                  <h3 className="text-2xl font-bold">Logo Upload</h3>
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-4 h-32 w-32 overflow-hidden rounded-lg border bg-muted">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-01%20at%2022.38.09_d6d198d3.jpg-DNj98GqfAWrCmk4ta70t5CSzTWzEIs.jpeg"
                        alt="Current Logo"
                        width={128}
                        height={128}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Current Logo</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Upload New Logo</label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="logo-upload"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PNG, JPG, SVG (MAX. 2MB)</p>
                        </div>
                        <input id="logo-upload" type="file" accept="image/*" className="hidden" />
                      </label>
                    </div>
                  </div>
                  <Button className="w-full">Update Logo</Button>
                </div>

                {/* Founders Details */}
                <div className="mb-8 space-y-4">
                  <h3 className="text-2xl font-bold">Founders Details</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Founder 1 */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-20 w-20 overflow-hidden rounded-full border bg-muted">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Founder 1"
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <label htmlFor="founder1-photo" className="block text-sm font-medium text-muted-foreground">
                            Update Photo
                          </label>
                          <input id="founder1-photo" type="file" accept="image/*" className="text-sm" />
                        </div>
                      </div>
                      <Input placeholder="Founder Name" />
                      <Textarea placeholder="Founder Bio" className="min-h-[100px]" />
                    </div>
                    {/* Founder 2 */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-20 w-20 overflow-hidden rounded-full border bg-muted">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Founder 2"
                            width={80}
                            height={80}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <label htmlFor="founder2-photo" className="block text-sm font-medium text-muted-foreground">
                            Update Photo
                          </label>
                          <input id="founder2-photo" type="file" accept="image/*" className="text-sm" />
                        </div>
                      </div>
                      <Input placeholder="Founder Name" />
                      <Textarea placeholder="Founder Bio" className="min-h-[100px]" />
                    </div>
                  </div>
                  <Button className="w-full">Update Founders Details</Button>
                </div>

                {/* Images and Articles */}
                <div className="mb-8 space-y-4">
                  <h3 className="text-2xl font-bold">Images and Articles</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Upload Images</label>
                      <div className="mt-2 flex items-center justify-center w-full">
                        <label
                          htmlFor="images-upload"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">PNG, JPG (MAX. 5MB each)</p>
                          </div>
                          <input id="images-upload" type="file" accept="image/*" multiple className="hidden" />
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="article-title" className="text-sm font-medium">
                        Article Title
                      </label>
                      <Input id="article-title" placeholder="Enter article title" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="article-content" className="text-sm font-medium">
                        Article Content
                      </label>
                      <Textarea
                        id="article-content"
                        placeholder="Write your article content here..."
                        className="min-h-[200px]"
                      />
                    </div>
                  </div>
                  <Button className="w-full">Add Images and Article</Button>
                </div>

                {/* Social Media Links */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Social Media Links</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="instagram-link" className="text-sm font-medium">
                        Instagram Page Link
                      </label>
                      <Input id="instagram-link" placeholder="https://www.instagram.com/mentika" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="linkedin-link" className="text-sm font-medium">
                        LinkedIn Page Link
                      </label>
                      <Input id="linkedin-link" placeholder="https://www.linkedin.com/company/mentika" />
                    </div>
                  </div>
                  <Button className="w-full">Update Social Media Links</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or want to learn more about Mentika? We'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#f7913e]" />
                  <div>
                    <h3 className="text-lg font-medium">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:info@mentika.in" className="hover:underline">
                        info@mentika.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-[#f7913e]" />
                  <div>
                    <h3 className="text-lg font-medium">Schedule a Call</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="#" className="hover:underline">
                        Book a 15-minute intro call
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-[#f7913e]" />
                  <div>
                    <h3 className="text-lg font-medium">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="#" className="text-muted-foreground hover:text-[#f7913e]">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-[#f7913e]">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-[#f7913e]">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="contact-name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="contact-email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="contact-subject" placeholder="How can we help you?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="contact-message" placeholder="Your message..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-[#f7913e] hover:bg-[#e57f2d]">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to receive updates about our launch and mentorship opportunities.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-[#f7913e] hover:bg-[#e57f2d]">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-01%20at%2022.38.09_d6d198d3.jpg-DNj98GqfAWrCmk4ta70t5CSzTWzEIs.jpeg"
                alt="Mentika Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Mentika. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/mentika" className="text-muted-foreground hover:text-[#f7913e]">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/mentika"
              className="text-muted-foreground hover:text-[#f7913e]"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#f7913e]">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

