import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PanelTopOpen, ShieldCheck, Zap } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <ShieldCheck className="h-6 w-6 text-purple-500" />
          <span className="sr-only">Wakanda</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Products
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1635863138275-d9b33299680b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTc0ODE4ODR8&ixlib=rb-4.0.3&q=85')",
            }}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Wakanda
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Experience the power of vibranium technology and the wisdom of our ancestors.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-black border-purple-500 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-purple-600 text-white hover:bg-purple-700" type="submit">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  Sign up to receive updates about Wakandan technology.
                  <a className="underline underline-offset-2 text-purple-400" href="#">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Vibranium Technology</h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Harness the power of vibranium in our cutting-edge products.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row lg:flex-col">
                <Button className="bg-purple-600 text-white hover:bg-purple-700" variant="default">
                  Learn More
                </Button>
                <Button className="bg-gray-800 text-white hover:bg-gray-700" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2">
                <PanelTopOpen className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Advanced Shielding</h3>
                <p className="text-gray-300">Protect your nation with our state-of-the-art vibranium shields.</p>
              </div>
              <div className="space-y-2">
                <Zap className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Energy Solutions</h3>
                <p className="text-gray-300">Clean, sustainable energy powered by vibranium technology.</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold">Medical Advancements</h3>
                <p className="text-gray-300">Revolutionizing healthcare with vibranium-enhanced treatments.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Wakanda. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}