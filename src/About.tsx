import React from 'react';

const About: React.FC = () => {
  return (
    <section className="container mx-auto max-w-5xl">
<div className="flex flex-col md:flex-row items-start gap-8">
<div className="md:w-1/2">
          <h2 id="about" className="text-3xl font-bold mb-4">Ben Gross</h2>
          <h3 className="text-xl font-semibold mb-6 text-center md:text-left">UX • Digital Asset Creation • Design</h3>
          <div className="mb-4">
            <p className="mb-2"><i className="fas fa-envelope mr-2"></i><a href="mailto:ben.c.gross@gmail.com" className="text-blue-600 hover:text-blue-800">ben.c.gross@gmail.com</a></p>
            <p><i className="fas fa-phone mr-2"></i>908-892-2514</p>
          </div>
          <p className="mb-4">Hiya, nice to meet. I&apos;m a UXer and Digital Designer in the Princeton, NJ area. I got my start in architecture and am fascinated by all of the unique spaces around us. If you&apos;re ever in the area, I&apos;ll give you an exclusive tour of the coolest nooks, sunken gardens, wavy hallways, and meandering paths I&apos;ve found!</p>
          <p>Professionally I&apos;ve shifted from 3D modeling and game design to UX. It&apos;s felt natural to care for a person&apos;s experience in the digital world as an architect does in the physical. My strengths span the end-to-end creation of a product — early-on iterative ideation, thorough usability study to prove assumptions, advanced prototyping to get a sense before heavy investment, design system specs for development, and the creation of final assets like animations, data visualizations, and illustrations.</p>
        </div>
        <div className="md:w-1/2 flex items-center justify-center md:pt-16">
  <img 
    className="rounded-full object-cover mx-auto" 
    src="img/bengross-square.jpg" 
    alt="Image of Ben Gross being licked by a wolf." 
  />
</div>
      </div>
    </section>
  );
};

export default About;