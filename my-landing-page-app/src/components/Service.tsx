import React from 'react';

const Service: React.FC = () => {
  return (
    <div className="service-section">
      <h1 className="text-2xl font-bold">Our Services</h1>
      <p className="mt-4">
        We offer a variety of services to meet your needs. Our team is dedicated to providing high-quality solutions tailored to your requirements.
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>Consulting</li>
        <li>Development</li>
        <li>Design</li>
        <li>Support</li>
      </ul>
    </div>
  );
};

export default Service;