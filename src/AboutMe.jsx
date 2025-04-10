import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full bg-gradient-to-br from-slate-800 to-slate-900">
      <Link
        to="/home"
        className="self-center px-4 py-2 m-4 text-sm font-bold text-white transition-transform duration-200 bg-center bg-cover rounded-full hover:scale-95 md:px-10 md:py-3 md:text-lg font-figtree"
        style={{ backgroundImage: 'url("../images/Tab.png")' }}
      >
        Go Back
      </Link>

      <div className="max-w-4xl px-4 py-6 text-white md:px-10">
        <img
          src="/images/event.jpg"
          alt="Event on April 9"
          className="w-full mb-6 rounded-2xl shadow-lg object-cover"
        />
        <p className="text-lg md:text-xl leading-relaxed">
          Hello! My name is Lalit Kumar Yadav, a student of Class 9 at
          Government High School, Bhatti. I come from the village of Nayagaon in
          Tehsil Itarsi, District Narmadapuram. I study in a Hindi medium
          school.
          <br />
          <br />
          My interest in technology began early, when i got introduced with
          Coding in July 2024. My father, who works in a computer-related
          private service and holds a PGDCA, introduced me to the basics of
          Visual Basic and VB.NET. This sparked my curiosity and led me to
          explore applications like Word, Excel, PowerPoint, and Photoshop. Over
          time, I developed confidence in using these tools and began exploring
          how software and hardware work together.
          <br />
          <br />A turning point came in July when our school principal
          introduced us to <strong>Team CodeYogi</strong>—an initiative launched
          by SDM IAS <strong>Mr. T. Prateek Rao</strong> to empower students
          from rural backgrounds with digital skills. Through this platform,
          I’ve learned HTML, CSS, JavaScript, Tailwind CSS, and React. I
          regularly practice coding on my mobile and PC, and have completed over
          100 levels of a Telegram-based course.
          <br />
          <br />
          <span className="block px-4 py-3 my-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm shadow-md">
            On <strong>April 9</strong>, I had a memorable opportunity where my
            project was showcased in front of respected guests, including{" "}
            <strong>CodeYogi co-founder Rakesh Sehgal</strong> and{" "}
            <strong>SDM sir, Mr. T. Prateek Rao</strong>. The event brought
            together top-performing students and school principals to celebrate
            their achievements. The words of encouragement and appreciation I
            received that day gave me a deep sense of motivation and pride. It
            felt like a small step towards something much bigger.
          </span>
          I aspire to become a software engineer, with dreams of building
          impactful digital solutions in both software and web development.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
