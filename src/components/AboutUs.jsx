function AboutUs() {
  return (
    <div className="about-container flex    max-w-screen-lg mx-auto py-5  pt-10 md:px-0">
      {/* Content Section */}
      <div className="content w-3/4">
        <h1 className="text-4xl font-bold mb-4">CEO Message</h1>
        <p className="text-lg mb-6 justify-around">
          Awaz-e-Haq Foundation is a non-profit organization dedicated to creating a brighter and more equitable future by focusing on education, agriculture, and poverty alleviation. Founded with a vision to empower communities, we strive to bridge the gaps in society through sustainable initiatives and grassroots-level impact.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          To foster a world where every individual has access to quality education, thriving agricultural opportunities, and the resources needed to break free from poverty.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Focus Areas</h2>
        <ul className="text-lg list-disc pl-6 mb-6">
          <li>📚 <strong>Education:</strong> Empowering children and adults through accessible, inclusive, and quality education programs.</li>
          <li>🌾 <strong>Agriculture:</strong> Supporting farmers with modern techniques, resources, and training to enhance productivity and sustainability.</li>
          <li>🤝 <strong>Poverty Alleviation:</strong> Implementing targeted programs to improve livelihoods, provide skill-based training, and create economic opportunities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg mb-6">
          To build self-sustaining communities where education flourishes, agriculture prospers, and poverty becomes a thing of the past.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Awaz-e-Haq?</h2>
        <ul className="text-lg list-disc pl-6">
          <li>Transparent and accountable practices</li>
          <li>Community-driven initiatives</li>
          <li>Long-lasting impact through sustainable solutions</li>
        </ul>

        <p className="text-lg mt-6">
          At Awaz-e-Haq Foundation, every voice matters, and every effort counts. Together, we are building a better tomorrow—one step at a time.
        </p>
      </div>

      {/* CEO Image Section */}
      <div className="ceo-image w-1/4 flex justify-end">
        
        <img
        src="\public\images\s5.jpg" 
          alt="CEO"
          className="rounded-full border-4 border-gray-300 shadow-xl w-48 h-48 object-cover object-top"
        />
      </div>
    </div>
  );
}

export default AboutUs;
