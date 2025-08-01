"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Car, 
  Leaf, 
  Wrench, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  Clock,
  Shield,
  Users,
  ArrowRight,
  Menu,
  X,
  Play,
  Award,
  Zap,
  Heart,
  TrendingUp,
  Calendar,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Target,
  Lightbulb
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Simular progreso de carga
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const heroImages = [
    {
      url: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Servicios Profesionales",
      description: "Calidad garantizada en cada servicio"
    },
    {
      url: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Lavado",
      description: "Tu auto siempre impecable"
    },
    {
      url: "https://images.pexels.com/photos/1400375/pexels-photo-1400375.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Jardines Perfectos",
      description: "Espacios verdes bien cuidados"
    }
  ];

  const serviceGallery = [
    "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1400375/pexels-photo-1400375.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const stats = [
    { number: "500+", label: "Clientes Satisfechos", icon: Users },
    { number: "2000+", label: "Servicios Realizados", icon: CheckCircle },
    { number: "98%", label: "Satisfacción Cliente", icon: Star },
    { number: "24/7", label: "Disponibilidad", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-6xl mx-auto px-4 z-50">
        <div className="bg-cyan-50/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-100">
          <div className="flex justify-between items-center h-16 px-6">
            <div className="flex items-center space-x-3">
              <div >
                <Image
                src="/logo.png"
                width="100"
                height="100"
                alt="Logo"
              />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {['inicio', 'servicios', 'galeria', 'testimonios', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="px-4 py-2 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-300 capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 p-4">
              <div className="flex flex-col space-y-2">
                {['inicio', 'servicios', 'galeria', 'testimonios', 'contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left px-4 py-3 text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-lg transition-all duration-300 capitalize font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-teal-900/20 to-cyan-900/20 z-10"></div>
        
        {/* Background Carousel */}
        <Carousel className="absolute inset-0 w-full h-full">
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-screen">
                  <Image 
                    src={image.url}
                    alt={image.title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-8 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="right-8 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-cyan-500/20 text-cyan-100 border-cyan-500/30 hover:bg-cyan-500/30 backdrop-blur-sm">
                    <Award className="w-4 h-4 mr-1" />
                    Servicios Certificados
                  </Badge>
                  <Badge className="bg-teal-500/20 text-teal-100 border-teal-500/30 hover:bg-teal-500/30 backdrop-blur-sm">
                    <Shield className="w-4 h-4 mr-1" />
                    100% Confiable
                  </Badge>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Tu hogar en las
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400">
                    mejores manos
                  </span>
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                  Transformamos tu fraccionamiento con servicios de conserjería. 
                  Lavado de autos, jardinería profesional y mantenimiento integral, 
                  todo con la calidad que mereces.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('servicios')} 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Descubrir Servicios
                </Button>
                <Button 
                  onClick={() => scrollToSection('contacto')} 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30  hover:bg-white hover:text-gray-900 backdrop-blur-sm transition-all duration-300"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Contactar Ahora
                </Button>
              </div>

              {/* Progress Indicator
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Cargando experiencia premium</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2 bg-white/20" />
              </div> */}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-800 mb-4">
              <Target className="w-4 h-4 mr-1" />
              Servicios
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experiencia completa para tu
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> comunidad</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada servicio está diseñado con atención al detalle y compromiso con la excelencia
            </p>
          </div>

          <Tabs defaultValue="lavado" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100 p-1 rounded-2xl">
              <TabsTrigger value="lavado" className="flex items-center space-x-2 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg">
                <Car className="w-5 h-5" />
                <span className="hidden sm:inline">Lavado de Autos</span>
                <span className="sm:hidden">Lavado</span>
              </TabsTrigger>
              <TabsTrigger value="jardineria" className="flex items-center space-x-2 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg">
                <Leaf className="w-5 h-5" />
                <span className="hidden sm:inline">Jardinería</span>
                <span className="sm:hidden">Jardín</span>
              </TabsTrigger>
              <TabsTrigger value="generales" className="flex items-center space-x-2 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg">
                <Wrench className="w-5 h-5" />
                <span className="hidden sm:inline">Servicios Generales</span>
                <span className="sm:hidden">General</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lavado" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Car className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Lavado de Autos</h3>
                      <p className="text-lg text-gray-600">Tu vehículo siempre impecable, sin salir de casa</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Ofrecemos un servicio profesional de lavado de autos directamente en tu fraccionamiento. 
                    Nuestro equipo utiliza productos de alta calidad y técnicas responsables con el medio ambiente 
                    para dejar tu auto reluciente por dentro y por fuera.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-cyan-50 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-cyan-600" />
                      <span className="font-medium text-gray-800">Productos</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl">
                      <Leaf className="w-6 h-6 text-green-600" />
                      <span className="font-medium text-gray-800">Eco-Friendly</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-xl">
                      <Clock className="w-6 h-6 text-purple-600" />
                      <span className="font-medium text-gray-800">Servicio Rápido</span>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl">
                      <Shield className="w-6 h-6 text-orange-600" />
                      <span className="font-medium text-gray-800">100% Seguro</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-cyan-100 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                    width={600}
                    height={600} 
                      src="https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Lavado de autos profesional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600">30min</div>
                      <div className="text-sm text-gray-600">Tiempo promedio</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="jardineria" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Jardinería</h3>
                      <p className="text-lg text-gray-600">Áreas verdes cuidadas con detalle y dedicación</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Mantenemos los jardines y zonas comunes de tu fraccionamiento en óptimas condiciones. 
                    Realizamos poda, riego, fertilización y control de plagas, asegurando espacios limpios, 
                    seguros y agradables para todos los vecinos.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="poda">
                      <AccordionTrigger className="text-left">Poda y Mantenimiento</AccordionTrigger>
                      <AccordionContent>
                        Realizamos podas técnicas que respetan el crecimiento natural de las plantas, 
                        manteniendo la estética y salud de tu jardín.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="riego">
                      <AccordionTrigger className="text-left">Sistema de Riego</AccordionTrigger>
                      <AccordionContent>
                        Instalamos y mantenemos sistemas de riego eficientes que optimizan el uso del agua 
                        y garantizan la hidratación adecuada de todas las plantas.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="control">
                      <AccordionTrigger className="text-left">Control de Plagas</AccordionTrigger>
                      <AccordionContent>
                        Utilizamos métodos seguros y efectivos para el control de plagas, 
                        protegiendo tanto las plantas como el medio ambiente.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-cyan-100 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      width={600}
                      height={600} 
                      src="https://images.pexels.com/photos/1400375/pexels-photo-1400375.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Servicios de jardinería profesional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-8 h-8 text-green-600" />
                      <div>
                        <div className="font-bold text-gray-900">Eco-Friendly</div>
                        <div className="text-sm text-gray-600">100% Natural</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="generales" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <Wrench className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">Servicios Generales</h3>
                      <p className="text-lg text-gray-600">Soluciones rápidas para el día a día</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Desde reparaciones menores hasta mantenimiento preventivo, nuestro equipo de conserjería 
                    está capacitado para atender las necesidades básicas de tu comunidad. Atendemos reportes, 
                    apoyamos en tareas de limpieza, electricidad, pintura y más.
                  </p>

                  <div className="space-y-4">
                    {[
                      { service: "Reparaciones Menores", progress: 95 },
                      { service: "Mantenimiento Preventivo", progress: 88 },
                      { service: "Electricidad Básica", progress: 92 },
                      { service: "Pintura y Acabados", progress: 90 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span>{item.service}</span>
                          <span>{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      width={600}
                      height={600} 
                      src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Servicios generales de mantenimiento"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-8 h-8 text-orange-600" />
                      <div>
                        <div className="font-bold text-gray-900">Respuesta Rápida</div>
                        <div className="text-sm text-gray-600">24/7 Disponible</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section with Carousel */}
      <section id="galeria" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-800 mb-4">
              <Lightbulb className="w-4 h-4 mr-1" />
              Nuestro Trabajo
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Resultados que
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"> hablan por sí solos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada proyecto refleja nuestro compromiso con la excelencia y atención al detalle
            </p>
          </div>

          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {serviceGallery.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-square overflow-hidden">
                      <Image 
                        src={image}
                        width={600}
                        height={600}
                        alt={`Trabajo realizado ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white shadow-xl border-0 hover:bg-gray-50" />
            <CarouselNext className="right-4 bg-white shadow-xl border-0 hover:bg-gray-50" />
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 bg-gradient-to-br from-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-cyan-100 text-cyan-800 mb-4">
              <MessageSquare className="w-4 h-4 mr-1" />
              Testimonios
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Historias de
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600"> éxito</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La confianza de nuestros vecinos es nuestro mayor logro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María Carmen Rodríguez",
                role: "Misión Real Castilla",
                image: "MC",
                rating: 5,
                text: "El servicio de lavado de autos es excepcional. Mi vehículo siempre queda impecable y el equipo es extremadamente profesional. La comodidad de tenerlo en casa no tiene precio.",
                gradient: "from-pink-400 to-rose-600"
              },
              {
                name: "José Antonio López",
                role: "Las Quintas Residencial",
                image: "JL",
                rating: 5,
                text: "Los jardines de nuestro fraccionamiento han transformado completamente su apariencia. Su trabajo de jardinería es meticuloso y los resultados son evidentes en cada rincón verde.",
                gradient: "from-cyan-400 to-indigo-600"
              },
              {
                name: "Ana Sofía Martínez",
                role: "Torre Angeles",
                image: "AM",
                rating: 5,
                text: "Los servicios generales son increíblemente completos y confiables. Cualquier problema de mantenimiento lo resuelven rápidamente y con la mejor calidad. Totalmente recomendados.",
                gradient: "from-cyan-400 to-teal-600"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{testimonial.image}</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-white/10 text-white border-white/20 mb-4">
              <Phone className="w-4 h-4 mr-1" />
              Contacto
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"> transformar</span>
              <br />tu comunidad?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contáctanos hoy y descubre cómo podemos elevar la calidad de vida en tu fraccionamiento
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-16 items-start">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Phone,
                    title: "Teléfono",
                    info: "+52 (555) 123-4567",
                    description: "Disponible 24/7",
                    gradient: "from-green-400 to-cyan-500"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "contacto@vecinoscomprometidos.com",
                    description: "Respuesta en 2 horas",
                    gradient: "from-cyan-400 to-cyan-500"
                  },
                  {
                    icon: MapPin,
                    title: "Ubicación",
                    info: "Durango",
                    description: "Ciudad de Durango, México",
                    gradient: "from-orange-400 to-red-500"
                  },
                  {
                    icon: Calendar,
                    title: "Horarios",
                    info: "Lun - Dom",
                    description: "7:00 AM - 8:00 PM",
                    gradient: "from-purple-400 to-pink-500"
                  }
                ].map((contact, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                          <contact.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{contact.title}</h3>
                          <p className="text-gray-300 mb-1">{contact.info}</p>
                          <p className="text-sm text-gray-400">{contact.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator className="bg-white/20" />

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">¿Por qué elegirnos?</h3>
                <div className="space-y-3">
                  {[
                    "Más de 500 clientes satisfechos",
                    "Equipo profesional certificado",
                    "Productos eco-friendly",
                    "Garantía de satisfacción 100%",
                    "Disponibilidad 24/7 para emergencias"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white flex items-center">
                  <Sparkles className="w-8 h-8 mr-3 text-cyan-400" />
                  Solicita tu Cotización
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Completa el formulario y recibe una propuesta personalizada en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                        placeholder="Tu número de teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Correo electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Servicio de interés *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="" className="text-gray-900">Selecciona un servicio</option>
                      <option value="lavado-autos" className="text-gray-900">🚗 Lavado de Autos</option>
                      <option value="jardineria" className="text-gray-900">🌿 Jardinería</option>
                      <option value="servicios-generales" className="text-gray-900">🛠️ Servicios Generales</option>
                      <option value="todos" className="text-gray-900">✨ Todos los Servicios</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje adicional
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      placeholder="Cuéntanos más detalles sobre lo que necesitas..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <TrendingUp className="mr-2 w-6 h-6" />
                    Solicitar Cotización Gratuita
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div>
                <Image
                src="/logo.png"
                width="100"
                height="100"
                alt="Logo"
              />
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                Transformamos comunidades con servicios de conserjería. 
                Comprometidos con la excelencia, la confianza y la satisfacción de nuestros vecinos.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Phone, href: "tel:+525551234567" },
                  { icon: Mail, href: "mailto:contacto@vecinoscomprometidos.com" },
                  { icon: MapPin, href: "#" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-cyan-400">Servicios</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "🚗 Lavado de Autos",
                  "🌿 Jardinería Profesional", 
                  "🛠️ Servicios Generales",
                  "🏠 Mantenimiento Integral",
                  "⚡ Servicios de Emergencia"
                ].map((service, index) => (
                  <li key={index} className="hover:text-cyan-400 transition-colors cursor-pointer">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-teal-400">Contacto Rápido</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+52 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>contacto@conserjeria.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Durango</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>24/7 Disponible</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/20 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2020 Administración Residencial. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Política de Privacidad</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Términos de Servicio</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Aviso Legal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}