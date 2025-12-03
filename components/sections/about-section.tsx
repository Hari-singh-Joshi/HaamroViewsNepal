export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 rounded-xl overflow-hidden group">
              <img
                src="/news-office-team.jpg"
                alt="About Haamro Views Nepal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About Haamro Views Nepal</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Since 2020, Haamro Views Nepal has been delivering trusted, verified news to millions of readers worldwide. Our
              mission is to provide comprehensive coverage of global events with unwavering commitment to journalistic
              integrity.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With a team of award-winning journalists and editors across 50+ countries, we bring you the stories that
              matter most. Every article undergoes rigorous fact-checking to ensure accuracy and reliability.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">50M+</p>
                <p className="text-sm text-muted-foreground">Monthly Readers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
