import React from 'react';

const services = [
  { title: "Web Designer", desc: "I create visually appealing and user-friendly websites..." },
  { title: "Graphic Designer", desc: "I design creative graphics, logos, social media visuals..." },
  { title: "Ghostwriter", desc: "I craft high-quality written content on behalf of clients..." },
  { title: "Freelancer", desc: "I offer professional services across design and writing..." },
  { title: "Author", desc: "I write original books and literary works..." },
  { title: "Poet", desc: "I express emotions and experiences through poetry..." },
  { title: "Novelist", desc: "I develop compelling fictional stories and novels..." },
  { title: "Story Writer", desc: "I create short stories and narratives for various mediums..." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-[#121212] text-center">
      <h2 className="text-3xl text-accent font-bold mb-2">My Services</h2>
      <p className="text-gray-400 mb-10">What I Do</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-accent text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;