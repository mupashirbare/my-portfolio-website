import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mubashirbarre12@gmail.com',
      href: 'mailto:mubashirbarre12@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mogadishu, Somalia',
      href: 'https://maps.google.com/?q=Mogadishu,Somalia',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+252 61 691 7540',
      href: 'tel:+252616917540',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/mupashirbare',
      color: 'hover:text-gray-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/252616917540',
      color: 'hover:text-green-600',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Icon size={20} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground group-hover:text-accent transition-colors">
                        {info.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    required
                    className="bg-background border-border focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    required
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent to-accent-glow hover:from-accent-glow hover:to-accent text-accent-foreground font-semibold py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;