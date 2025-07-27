'use client';
import Image from 'next/image';
import right_hero_image from '../../public/assest/hero_right_image.svg'
// import { Star, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Top Gradient Banner */}
      <div className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 py-3">
        <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-center">
          {/* <Star className="w-4 h-4 text-yellow-300 mr-2" /> */}
          <span className="text-sm font-medium text-white">
            <strong>FRESH BEGINNINGS SALE:</strong> Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 relative">
        {/* Header */}
        <header className="flex items-center justify-between py-8">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">
              <span className="text-white">fame</span>
              <span className="text-cyan-400">tonic</span>
            </h1>
          </div>
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              About us
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 items-center  relative">
          {/* Left Content */}
          <div className="space-y-8 col-span-5">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Want to Turn Social Media Into a{' '}
                <span className="text-white">Profitable Career?</span>
              </h2>
              <h3 className="text-3xl font-bold text-cyan-400">
                Discover your way to success with Fametonic:
              </h3>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-yellow-400 text-xl font-bold mt-1">+</div>
                <p className="text-lg text-gray-200">
                  Start growing your influence right away—no waiting required!
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-yellow-400 text-xl font-bold mt-1">+</div>
                <p className="text-lg text-gray-200">
                  Create viral TikToks and Reels step by step with easy-to-follow lessons
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-yellow-400 text-xl font-bold mt-1">+</div>
                <p className="text-lg text-gray-200">
                  Use a Personal AI Worker to boost your content
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-yellow-400 text-xl font-bold mt-1">+</div>
                <p className="text-lg text-gray-200">
                  Learn from expert-led courses designed for aspiring influencers
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-3">
              <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                <span>GET STARTED</span>
                {/* <ArrowRight className="w-5 h-5" /> */}
              </button>
              <p className="text-sm text-gray-400">
                1-minute quiz for personalized insights
              </p>
            </div>

            {/* Footer Text */}
            <div className="space-y-2 text-xs text-gray-500">
              <p>
                By clicking "Get Started", you agree with Terms and Conditions, Privacy Policy, Subscription Terms
              </p>
              <p>
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="w-full h-full col-span-7 relative">
          
            <Image src={right_hero_image} alt="Hero Right Image" className="w-full h-full" />  
          </div>
        </div>
      </div>
    </div>
  );
}