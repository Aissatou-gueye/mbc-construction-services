import { Building2, Truck, Mountain, HardHat, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import heroImage from '@/assets/hero-construction.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#apropos', label: 'À Propos' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
            <HardHat className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl tracking-wider text-foreground">MBC</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm">
            Devis Gratuit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="w-full">
              Devis Gratuit
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src={heroImage} 
        alt="Chantier de construction MBC" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 relative z-10 pt-20">
      <div className="max-w-3xl">
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/30">
            Expert en Construction & Travaux Publics
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          BÂTIR VOTRE
          <span className="text-gradient block">AVENIR</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          MBC, votre partenaire de confiance pour tous vos projets de construction, 
          terrassement, démolition et fourniture de matériaux.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl">
            Demander un Devis
          </Button>
          <Button variant="heroOutline" size="xl">
            Nos Services
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {[
            { value: '15+', label: 'Années d\'Expérience' },
            { value: '200+', label: 'Projets Réalisés' },
            { value: '100%', label: 'Clients Satisfaits' },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="font-display text-3xl md:text-4xl text-primary">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
      <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
      </div>
    </div>
  </section>
);

const services = [
  {
    icon: Building2,
    title: 'Travaux de Construction',
    description: 'Construction de bâtiments résidentiels, commerciaux et industriels avec des standards de qualité élevés.',
  },
  {
    icon: HardHat,
    title: 'Démolition de Bâtiments',
    description: 'Services de démolition sécurisés et efficaces pour tous types de structures.',
  },
  {
    icon: Mountain,
    title: 'Terrassement',
    description: 'Préparation et nivellement de terrains pour vos projets de construction.',
  },
  {
    icon: Building2,
    title: 'Excavation & Sous-terrains',
    description: 'Travaux d\'excavation de fouilles et création de structures souterraines.',
  },
  {
    icon: Truck,
    title: 'Location de Camions',
    description: 'Flotte de camions disponible à la location pour vos besoins de transport.',
  },
  {
    icon: Mountain,
    title: 'Fourniture de Matériaux',
    description: 'Gravier basalte 3/8, 8/16 et sable de qualité pour tous vos chantiers.',
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-card relative overflow-hidden">
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm tracking-wider uppercase">Ce Que Nous Faisons</span>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2">NOS SERVICES</h2>
        <div className="w-24 h-1 bg-accent-gradient mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="group bg-secondary/50 border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gradient transition-all duration-300">
              <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="apropos" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">À Propos</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2 mb-6">
            L'EXCELLENCE
            <span className="text-gradient block">DEPUIS DES ANNÉES</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            MBC est une entreprise spécialisée dans les travaux de construction et de génie civil. 
            Notre expertise couvre l'ensemble des métiers du BTP, de la démolition à la construction, 
            en passant par le terrassement et l'excavation.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Nous mettons à disposition de nos clients une flotte de camions et une large gamme 
            de matériaux de qualité supérieure, notamment du gravier basalte et du sable.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Qualité Garantie', desc: 'Matériaux certifiés' },
              { title: 'Équipe Experte', desc: 'Professionnels qualifiés' },
              { title: 'Délais Respectés', desc: 'Livraison ponctuelle' },
              { title: 'Prix Compétitifs', desc: 'Devis transparents' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square bg-secondary rounded-2xl overflow-hidden border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-24 h-24 bg-accent-gradient rounded-2xl flex items-center justify-center mb-6 shadow-glow">
                <HardHat className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="font-display text-5xl text-foreground mb-2">MBC</h3>
              <p className="text-muted-foreground">Construction & Travaux Publics</p>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl border border-primary/20 animate-float" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-xl border border-primary/20 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-24 bg-card relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold text-sm tracking-wider uppercase">Contactez-Nous</span>
        <h2 className="font-display text-4xl md:text-6xl text-foreground mt-2">PARLONS DE VOTRE PROJET</h2>
        <div className="w-24 h-1 bg-accent-gradient mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Phone, label: 'Téléphone', value: '+XX XXX XXX XXX' },
            { icon: Mail, label: 'Email', value: 'contact@mbc-construction.com' },
            { icon: MapPin, label: 'Adresse', value: 'Votre Ville, Pays' },
          ].map((contact) => (
            <div key={contact.label} className="bg-secondary/50 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <contact.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-muted-foreground text-sm mb-1">{contact.label}</div>
              <div className="text-foreground font-medium">{contact.value}</div>
            </div>
          ))}
        </div>

        <div className="bg-secondary/50 border border-border rounded-2xl p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nom Complet</label>
                <input 
                  type="text" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Service Souhaité</label>
              <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                <option value="">Sélectionnez un service</option>
                <option value="construction">Travaux de Construction</option>
                <option value="demolition">Démolition</option>
                <option value="terrassement">Terrassement</option>
                <option value="excavation">Excavation</option>
                <option value="location">Location de Camions</option>
                <option value="materiaux">Fourniture de Matériaux</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Décrivez votre projet..."
              />
            </div>
            <Button variant="hero" size="xl" className="w-full">
              Envoyer la Demande
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
            <HardHat className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl tracking-wider text-foreground">MBC</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center">
          © 2024 MBC Construction. Tous droits réservés.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Mentions Légales
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
            Politique de Confidentialité
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
