const WhoAndOurMission = () => {
  return (
      <>
       <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 mb-6">
        <strong>Awaz-e-Haq Foundation</strong> is a non-profit organization dedicated to creating a brighter and more equitable future by focusing on{' '}
        <strong>education, agriculture, and poverty alleviation</strong>. Founded with a vision to empower communities, we strive to bridge the gaps in society through sustainable initiatives and grassroots-level impact.
      </p>

      {/* Mission */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
      <p className="text-gray-600 mb-6">
        To foster a world where every individual has <strong>access to quality education</strong>, <strong>thriving agricultural opportunities</strong>, and the resources needed to <strong>break free from poverty</strong>.
      </p>

      {/* Focus Areas */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Focus Areas</h2>
      <ul className="list-none space-y-3 mb-6">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔️</span>
          <p>
            <strong>📚 Education:</strong> Empowering children and adults through accessible, inclusive, and quality education programs.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔️</span>
          <p>
            <strong>🌾 Agriculture:</strong> Supporting farmers with modern techniques, resources, and training to enhance productivity and sustainability.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">✔️</span>
          <p>
            <strong>🤝 Poverty Alleviation:</strong> Implementing targeted programs to improve livelihoods, provide skill-based training, and create economic opportunities.
          </p>
        </li>
      </ul>

      {/* Vision */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Vision</h2>
      <p className="text-gray-600 italic mb-6">
        To build <strong>self-sustaining communities</strong> where education flourishes, agriculture prospers, and poverty becomes a thing of the past.
      </p>

      {/* Why Choose Us */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Why Choose Awaz-e-Haq?</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Transparent and accountable practices</li>
        <li>Community-driven initiatives</li>
        <li>Long-lasting impact through sustainable solutions</li>
      </ul>

      <p className="text-gray-600">
        At <strong>Awaz-e-Haq Foundation</strong>, every voice matters, and every effort counts. Together, we are building a better tomorrow—one step at a time.
      </p>
    </div>
    </>
    
  )
}

export default WhoAndOurMission