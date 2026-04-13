import { Music, MapPin, ExternalLink } from "lucide-react";

export default function Home() {
  const albums = [
    {
      title: "Popular",
      year: "2025",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663549016014/7xdKb3V8gMsSm6y3to2Hnp/IMG_1400_619cd06d.PNG",
    },
    {
      title: "Sorry 4 The Wait",
      year: "2024",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663549016014/7xdKb3V8gMsSm6y3to2Hnp/IMG_1397_e25dd4ff.PNG",
    },
    {
      title: "Be Alive",
      year: "2023",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663549016014/7xdKb3V8gMsSm6y3to2Hnp/IMG_1211_a4281c75.PNG",
    },
    {
      title: "Blood Brothers",
      year: "2023",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663549016014/7xdKb3V8gMsSm6y3to2Hnp/IMG_1208_89abe688.PNG",
    },
  ];

  const streamingLinks = [
    { name: "Spotify", url: "https://open.spotify.com/artist/4komsmbgcyvxgb59TXp6Xm", icon: "🎵" },
    { name: "Apple Music", url: "https://music.apple.com/us/artist/global-boy/1501612104", icon: "🎶" },
    { name: "YouTube", url: "https://youtube.com/@globalboy", icon: "▶️" },
    { name: "Instagram", url: "https://instagram.com/globalboyreal", icon: "📸" },
  ];

  const socialLinks = [
    { name: "YouTube", url: "https://youtube.com/@globalboy" },
    { name: "Spotify", url: "https://open.spotify.com/artist/4komsmbgcyvxgb59TXp6Xm" },
    { name: "Instagram", url: "https://instagram.com/globalboyreal" },
    { name: "Apple Music", url: "https://music.apple.com/us/artist/global-boy/1501612104" },
  ];

  const bebasStyle = { fontFamily: "'Bebas Neue', sans-serif" };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden" itemScope itemType="https://schema.org/MusicGroup">
        <meta itemProp="name" content="Global Boy" />
        <meta itemProp="description" content="American rapper, singer, and songwriter from Saginaw, Michigan. Based in Atlanta, Georgia." />
        <meta itemProp="image" content="https://d2xsxph8kpxj0f.cloudfront.net/310519663549016014/7xdKb3V8gMsSm6y3to2Hnp/IMG_1222_c831a258.PNG" />
        <meta itemProp="url" content="https://globalboy.manus.space" />
        <meta itemProp="genre" content="Hip-Hop" />
        <meta itemProp="genre" content="Rap" />
        <meta itemProp="genre" content="Alternative" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="z-10">
              <h1 style={bebasStyle} className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
                GLOBAL BOY
              </h1>
              <p style={bebasStyle} className="text-2xl md:text-3xl text-primary mb-6 tracking-wider font-bold">
                HIP-HOP ARTIST
              </p>
              <p className="text-lg text-foreground/90 mb-8 leading-relaxed max-w-lg">
                An American rapper, singer, and songwriter from Saginaw, Michigan. 
                Now based in Atlanta, Georgia, Global Boy brings raw energy and authentic storytelling to contemporary hip-hop.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#music" title="Listen to Global Boy's music">
                  <button className="button-neon">
                    Listen Now
                  </button>
                </a>
                <a href="#contact" title="Get in touch with Global Boy">
                  <button className="button-outline-neon">
                    Get in Touch
                  </button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden neon-glow">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663549016014/7xdKb3V8gMsSm6y3to2Hnp/IMG_1222_c831a258.PNG"
                  alt="Global Boy - American rapper and hip-hop artist from Saginaw, Michigan"
                  className="w-full h-auto object-cover"
                  itemProp="image"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-secondary rounded-lg opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-12 bg-card/50 border-y border-border" aria-label="Stream Global Boy's music">
        <div className="container mx-auto px-4">
          <h2 style={bebasStyle} className="text-3xl font-bold text-center mb-8 text-gradient">
            STREAM NOW
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {streamingLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Listen to Global Boy on ${link.name}`}
                className="flex items-center justify-center gap-2 p-4 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <span className="text-2xl" aria-hidden="true">{link.icon}</span>
                <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 relative" aria-label="Latest music releases">
        <div className="container mx-auto px-4">
          <h2 style={bebasStyle} className="text-5xl font-bold mb-4 text-gradient">
            LATEST RELEASES
          </h2>
          <p className="text-foreground/80 mb-12 text-lg max-w-2xl">
            Explore Global Boy's discography and discover his latest albums and tracks featuring authentic hip-hop storytelling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <article
                key={album.title}
                className="group cursor-pointer transition-transform duration-300 hover:scale-105"
                itemScope
                itemType="https://schema.org/MusicAlbum"
              >
                <meta itemProp="name" content={album.title} />
                <meta itemProp="datePublished" content={album.year} />
                <meta itemProp="image" content={album.image} />
                <meta itemProp="byArtist" content="Global Boy" />
                
                <div className="relative mb-4 rounded-lg overflow-hidden neon-glow">
                  <img
                    src={album.image}
                    alt={`${album.title} - Album by Global Boy`}
                    className="w-full aspect-square object-cover group-hover:brightness-75 transition-all duration-300"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80">
                    <Music className="w-12 h-12 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 style={bebasStyle} className="text-xl font-bold text-foreground" itemProp="name">
                  {album.title}
                </h3>
                <p className="text-primary text-sm" itemProp="datePublished">{album.year}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-20 bg-card/50 border-y border-border" aria-label="About Global Boy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <article>
              <h2 style={bebasStyle} className="text-5xl font-bold mb-6 text-gradient">
                ABOUT GLOBAL BOY
              </h2>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Global Boy (also known as Lil Glo) is an American rapper, singer, songwriter, and dancer 
                  known for his state-of-the-art performances and authentic storytelling in hip-hop music.
                </p>
                <p>
                  Born October 3, 1999, in Saginaw, Michigan, Global Boy grew up in a tight-knit family of five. 
                  His passion for music started early, mastering various instruments including drums, violin, 
                  cello, trombone, keyboard, and guitar.
                </p>
                <p>
                  After relocating to Atlanta, Georgia, Global Boy found the perfect platform to explore and 
                  express his artistry. His parents and two brothers remain his greatest strength and inspiration, 
                  having supported his journey through music from the beginning.
                </p>
                <p className="italic text-primary font-semibold">
                  "If you told me I could only do one thing, I would choose live concerts."
                </p>
              </div>
            </article>

            <aside className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-3xl"></div>
              <div className="relative bg-background border border-border rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <h3 style={bebasStyle} className="text-2xl font-bold text-primary mb-2">BIRTHDATE</h3>
                    <p className="text-foreground/80">October 3, 1999</p>
                  </div>
                  <div>
                    <h3 style={bebasStyle} className="text-2xl font-bold text-primary mb-2">ORIGIN</h3>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <MapPin size={20} className="text-secondary" aria-hidden="true" />
                      <span>Saginaw, Michigan</span>
                    </div>
                  </div>
                  <div>
                    <h3 style={bebasStyle} className="text-2xl font-bold text-primary mb-2">BASED IN</h3>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <MapPin size={20} className="text-secondary" aria-hidden="true" />
                      <span>Atlanta, Georgia</span>
                    </div>
                  </div>
                  <div>
                    <h3 style={bebasStyle} className="text-2xl font-bold text-primary mb-2">GENRE</h3>
                    <p className="text-foreground/80">Hip-Hop, Rap, Alternative</p>
                  </div>
                  <div>
                    <h3 style={bebasStyle} className="text-2xl font-bold text-primary mb-2">INSTRUMENTS</h3>
                    <p className="text-foreground/80">Drums, Violin, Cello, Trombone, Keyboard, Guitar</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Shows Section */}
      <section id="shows" className="py-20" aria-label="Upcoming shows and events">
        <div className="container mx-auto px-4">
          <h2 style={bebasStyle} className="text-5xl font-bold mb-4 text-gradient">
            UPCOMING SHOWS
          </h2>
          <p className="text-foreground/80 mb-12 text-lg">
            Coming soon. Check back for tour dates and live performance information from Global Boy.
          </p>
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-foreground/70 text-lg">
              Follow Global Boy on social media for the latest announcements about upcoming shows and events.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50 border-y border-border" aria-label="Connect with Global Boy">
        <div className="container mx-auto px-4">
          <h2 style={bebasStyle} className="text-5xl font-bold mb-4 text-gradient">
            CONNECT
          </h2>
          <p className="text-foreground/80 mb-12 text-lg max-w-2xl">
            Follow Global Boy on social media to stay updated on new music, performances, and exclusive content.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Follow Global Boy on ${link.name}`}
                className="group p-6 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-between"
              >
                <span style={bebasStyle} className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {link.name}
                </span>
                <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              © 2025 Global Boy. All rights reserved.
            </p>
            <p className="text-foreground/60 text-sm">
              Made with passion for hip-hop music.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
