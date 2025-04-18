import React from "react";
import { motion } from "framer-motion";

const { section: MotionSection, div: MotionDiv } = motion;

const MapSection = () => {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-amber-50"
    >
      <MotionDiv className="max-w-screen-xl mx-auto space-y-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900">Find Us Here</h2>
        <p className="text-blue-700 font-medium">
          Visit our office at the location below
        </p>

        {/* Google Map Embed */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15257.483025497115!2d74.2296709!3d17.054507999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743715035393!5m2!1sen!2sin" 
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[400px] md:h-[500px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </MotionDiv>
    </MotionSection>
  );
};

export default MapSection;
