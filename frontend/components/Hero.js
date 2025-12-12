import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Discover & Share
              </span>
              <br />
              Amazing Recipes
            </h1>
            <p className="text-xl text-gray-600">
              Join our community of food lovers. Share your culinary masterpieces and explore thousands of delicious recipes from around the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/recipes" className="btn-primary">
                Browse Recipes
              </Link>
              <Link href="/submit" className="btn-secondary">
                Submit a Recipe
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl transform rotate-6"></div>
            <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
                alt="Delicious food"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary-200 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary-200 rounded-full opacity-50 blur-xl"></div>
    </section>
  )
}
