import React from "react";

const page = () => {
  return (
    <div className="flex w-ful h-full items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594658.404015343!2d81.48371278987283!3d28.376724381000514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2snp!4v1700031263226!5m2!1sen!2snp"
        width={600}
        height={450}
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default page;
