"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

import { Coffee } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/6612575/pexels-photo-6612575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up view of a professional espresso machine with syrup bottles in a coffee shop setting."},
  {"id":"feature-1","url":"https://images.pexels.com/photos/2159128/pexels-photo-2159128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Barista using syphon method to prepare coffee in a café setting. Indoors with coffee equipment."},
  {"id":"feature-2","url":"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A detailed view of aromatic roasted Arabica coffee beans, highlighting texture and brown color."},
  {"id":"feature-3","url":"https://images.pexels.com/photos/34271405/pexels-photo-34271405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"coffee brewing - Photo by Pew Nguyen"},
  {"id":"team-1","url":"https://images.pexels.com/photos/32416013/pexels-photo-32416013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A barista wearing a blue hat operates a coffee machine in a stylish Yokosuka café setting."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young woman in uniform smiling while standing at counter desk in  cafe"},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/6826026/pexels-photo-6826026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Charming collection of antique kitchenware and decor on display indoors, exuding vintage elegance."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/12935085/pexels-photo-12935085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A smiling cashier handing a paper bag to a customer over the counter in a cozy cafe setting."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/6826026/pexels-photo-6826026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Charming collection of antique kitchenware and decor on display indoors, exuding vintage elegance."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{name:'Home', id:'home'}, {name:'Menu', id:'menu'}, {name:'About Us', id:'about-us'}, {name:'Contact', id:'contact'}]}
          brandName="CoffeeShop"
          buttonText="Order Now"
          buttonVariant="hover-magnetic"
        />
      </div>
      <div id="hero" data-section="hero" className={"scroll-mt-24 "+ ("")}> 
        <div className={"mx-auto px-4 md:px-6 "+ ("")}> 
          <HeroSplit
            title="Experience the Best Coffee"
            description="Dive into the world of exquisite flavors and aromas with our freshly brewed coffee."
            imageSrc={(assetMap.find(a => a.id === "hero-image")?.url) ?? "/public/images/placeholder.webp"}
            buttons={[{text: "Explore Menu", href: "menu"}, {text: "Visit Us", href: "contact"}]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className={"scroll-mt-24 "+ ("")}> 
        <div className={"mx-auto px-4 md:px-6 "+ ("")}> 
          <SplitAbout
            title="About Us"
            description="Our commitment to quality and service has been the driving force behind our success."
            bulletPoints={[{title: "Quality Beans", description: "Selected from the best plantations around the globe.", icon: Coffee}, {title: "Expert Baristas", description: "Trained to deliver the perfect cup every time."}]}
            imageSrc={(assetMap.find(a => a.id === "feature-1")?.url) ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className={"scroll-mt-24 "+ ("")}> 
        <div className={"mx-auto px-4 md:px-6 "+ ("")}> 
          <TestimonialCardOne
            title="Our Customers Love Us"
            description="Real feedback from our beloved customers"
            testimonials={[
              {id: "1", name: "Emma Brown", role: "Writer", company: "Coffee Lovers", rating: 5, imageSrc: (assetMap.find(a => a.id === "testimonial-1")?.url) ?? "/public/images/placeholder.webp"},
              {id: "2", name: "Liam Smith", role: "Chef", company: "Gourmet Delights", rating: 5, imageSrc: (assetMap.find(a => a.id === "testimonial-2")?.url) ?? "/public/images/placeholder.webp"},
              {id: "3", name: "Sophia Johnson", role: "Photographer", company: "PhotoMagic", rating: 5, imageSrc: (assetMap.find(a => a.id === "testimonial-3")?.url) ?? "/public/images/placeholder.webp"},
              {id: "4", name: "Oliver Williams", role: "Designer", company: "Canvas Creations", rating: 5, imageSrc: (assetMap.find(a => a.id === "testimonial-4")?.url) ?? "/public/images/placeholder.webp"}
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className={"scroll-mt-24 "+ ("")}> 
        <div className={"mx-auto px-4 md:px-6 "+ ("")}> 
          <ContactSplit
            tag="Newsletter"
            title="Stay Connected"
            description="Join our mailing list for updates on special offers and events."
            imageSrc={(assetMap.find(a => a.id === "feature-2")?.url) ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className={"scroll-mt-24 "+ ("")}> 
        <div className={"mx-auto px-4 md:px-6 "+ ("")}> 
          <FooterLogoEmphasis
            columns={[
              {items: [{label: "Menu", href: "menu"}]},
              {items: [{label: "Contact Us", href: "contact"}]}
            ]}
            logoText="CoffeeShop"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
