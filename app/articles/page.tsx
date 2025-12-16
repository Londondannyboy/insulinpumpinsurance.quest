import Link from 'next/link'

export default function ArticlesPage() {
  const articles = [
    {
      slug: 'insulin-pump-insurance-costs-guide',
      title: 'The Complete Guide to Insulin Pump Insurance Costs in 2025',
      description: 'Comprehensive breakdown of insulin pump insurance pricing, factors affecting costs, and how much you should budget for diabetes device protection.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&crop=entropy',
      imageAlt: 'insulin pump insurance costs 2025 UK pricing guide diabetes device protection',
      color: 'from-cyan-900',
    },
    {
      slug: 'medtronic-pump-insurance-guide',
      title: 'Medtronic Insulin Pump Insurance: Complete Coverage Guide',
      description: 'Everything you need to know about insuring Medtronic pumps including 780G, 670G, and 640G models with specialized coverage.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&h=400&crop=entropy',
      imageAlt: 'medtronic insulin pump insurance 780G 670G coverage requirements',
      color: 'from-teal-900',
    },
    {
      slug: 'omnipod-pump-insurance-explained',
      title: 'Omnipod Insurance: Complete Guide to Coverage and Requirements',
      description: 'Detailed guide to Omnipod Dash and Omnipod 5 insurance, specialized coverage needs, and how to protect your tubeless insulin pump.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&crop=entropy',
      imageAlt: 'omnipod insurance tubeless pump protection dash omnipod 5',
      color: 'from-blue-900',
    },
    {
      slug: 'accidental-damage-vs-warranty-cover',
      title: 'Accidental Damage vs Warranty Cover: Which Insurance Do You Need?',
      description: 'Clear explanation of the differences between accidental damage insurance and manufacturer warranty for insulin pumps and CGM devices.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&crop=entropy',
      imageAlt: 'accidental damage warranty insurance comparison insulin pump coverage',
      color: 'from-indigo-900',
    },
    {
      slug: 'nhs-pump-insurance-requirements',
      title: 'NHS Pump Insurance Requirements: Complete 2025 Guide',
      description: 'Full breakdown of NHS insulin pump insurance requirements, policy considerations, and how to ensure comprehensive protection.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&crop=entropy',
      imageAlt: 'NHS pump insurance requirements standards diabetes device coverage',
      color: 'from-teal-900',
    },
    {
      slug: 'childrens-pump-insurance-guide',
      title: 'Children\'s Insulin Pump Insurance: Protection During Childhood',
      description: 'Everything parents need to know about insurance coverage for children\'s insulin pumps and CGM devices.',
      date: 'December 2024',
      readTime: '6 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&crop=entropy',
      imageAlt: 'children insulin pump insurance pediatric coverage diabetes device protection',
      color: 'from-amber-900',
    },
    {
      slug: 'best-pump-insurance-providers-2025',
      title: 'Best Insulin Pump Insurance Providers 2025: Detailed Comparison',
      description: 'Comprehensive comparison of leading insulin pump insurance providers including pricing, coverage, and customer reviews.',
      date: 'December 2024',
      readTime: '9 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1554224311-beee1080a7ff?w=600&h=400&crop=entropy',
      imageAlt: 'best insulin pump insurance providers 2025 comparison UK specialists',
      color: 'from-emerald-900',
    },
    {
      slug: 'pump-insurance-uk-regional-guide',
      title: 'Insulin Pump Insurance Requirements by Location: UK Regional Guide',
      description: 'Regional breakdown of insulin pump insurance considerations across the UK and coverage options by area.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1606166325683-7e5d39b1d9c8?w=600&h=400&crop=entropy',
      imageAlt: 'insulin pump insurance requirements UK location regional coverage guide',
      color: 'from-rose-900',
    },
    {
      slug: 'tandem-tslim-insurance-guide',
      title: 'Tandem t:slim X2 Insurance: Complete Coverage Guide for Hybrid Closed-Loop Systems',
      description: 'Comprehensive guide to insuring the Tandem t:slim X2 insulin pump with Control-IQ technology and specialized coverage needs.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&crop=entropy',
      imageAlt: 'tandem tslim x2 insurance control-iq hybrid closed-loop pump coverage',
      color: 'from-purple-900',
    },
    {
      slug: 'pump-theft-claims-process',
      title: 'Insulin Pump Theft Claims: Complete Process Guide and Timeline',
      description: 'Step-by-step guide to filing theft claims for stolen insulin pumps including documentation requirements and expected timelines.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&crop=entropy',
      imageAlt: 'insulin pump theft claims process insurance documentation timeline',
      color: 'from-red-900',
    },
    {
      slug: 'dexcom-g7-insurance-guide',
      title: 'Dexcom G7 Insurance: CGM Coverage Options and Requirements',
      description: 'Detailed guide to insuring the Dexcom G7 continuous glucose monitor with sensor protection and replacement coverage.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1631815588091-d223a8e0c2cd?w=600&h=400&crop=entropy',
      imageAlt: 'dexcom g7 insurance cgm coverage continuous glucose monitor protection',
      color: 'from-green-900',
    },
    {
      slug: 'freestyle-libre-insurance-guide',
      title: 'FreeStyle Libre Insurance: Flash Glucose Monitor Coverage Guide',
      description: 'Complete guide to insuring FreeStyle Libre 2 and Libre 3 sensors with comprehensive protection options.',
      date: 'December 2024',
      readTime: '6 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&crop=entropy',
      imageAlt: 'freestyle libre insurance flash glucose monitor sensor coverage',
      color: 'from-yellow-900',
    },
    {
      slug: 'pump-liquid-damage-coverage',
      title: 'Insulin Pump Liquid Damage Coverage: Water Resistance vs Insurance Protection',
      description: 'Understanding water resistance ratings, liquid damage scenarios, and when insurance covers pump damage from water exposure.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=400&crop=entropy',
      imageAlt: 'insulin pump liquid damage water resistance insurance coverage protection',
      color: 'from-blue-800',
    },
    {
      slug: 'home-vs-specialist-pump-insurance',
      title: 'Home Insurance vs Specialist Pump Insurance: Complete Comparison',
      description: 'Comparing home insurance add-ons versus specialist insulin pump insurance policies for comprehensive diabetes device protection.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&crop=entropy',
      imageAlt: 'home insurance specialist pump insurance comparison diabetes device coverage',
      color: 'from-slate-800',
    },
  ]

  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section with Medical Background */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop&q=80"
            alt="Expert insulin pump insurance articles guides resources diabetes device protection"
            title="Insulin Pump Insurance Articles - Expert Guides and Resources"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/85 to-slate-900/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Expert Articles & Guides
            <span className="block bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent mt-2">Insulin Pump Insurance Resources</span>
          </h1>
          <p className="text-xl text-slate-100 mb-4 font-light">
            Comprehensive guides on insulin pump insurance, CGM coverage options, and diabetes device protection strategies
          </p>
          <p className="text-slate-300">
            Expert resources for insulin pump users, parents of children with type 1 diabetes, and diabetes device owners in the UK
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-cyan-500/20 border border-slate-700 hover:border-cyan-500/50"
              >
                <div className="relative h-48 overflow-hidden bg-slate-700">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-xs text-slate-400">{article.date}</span>
                    <span className="text-xs text-cyan-400 font-semibold">{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* All Articles */}
          <h2 className="text-3xl font-bold mb-12">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-slate-800/50 hover:bg-slate-800 rounded-lg overflow-hidden transition-all border border-slate-700 hover:border-cyan-500/50"
              >
                <div className="relative h-40 overflow-hidden bg-slate-700">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-700">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-900/30 to-cyan-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Compare Insurance Quotes?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Use our interactive quote calculator to compare insulin pump insurance from leading UK providers.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Your Quote Today
          </a>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">About Our Insulin Pump Insurance Guides</h2>
          <p className="text-slate-300 mb-4">
            Our comprehensive articles provide expert guidance on all aspects of insulin pump insurance in the UK. Whether you're just starting with an insulin pump, managing diabetes with CGM systems, or looking for specialized coverage for devices like the Medtronic 780G, Omnipod Dash, or Tandem t:slim X2, our guides will help you understand your insurance needs and find the right coverage.
          </p>
          <p className="text-slate-300 mb-4">
            We cover everything from basic accidental damage insurance to comprehensive theft and loss coverage, specialized options for different pump brands and CGM systems, and detailed provider comparisons. Our goal is to help you make informed decisions about protecting your diabetes technology.
          </p>
          <p className="text-slate-300">
            All articles are researched and updated regularly to reflect the latest insurance requirements and market offerings for insulin pump users in the UK. Information is provided for educational purposes and should be verified with insurance providers and healthcare professionals.
          </p>
        </div>
      </section>
    </main>
  )
}
