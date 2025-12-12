import Link from 'next/link'
import { FaUtensils, FaGithub, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-lg">
                <FaUtensils className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold">RecipeShare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Share your culinary creations and discover amazing recipes from home cooks around the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Browse Recipes
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Submit Recipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/recipes?category=Breakfast" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link href="/recipes?category=Vegan" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Vegan
                </Link>
              </li>
              <li>
                <Link href="/recipes?category=Desserts" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Desserts
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RecipeShare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
