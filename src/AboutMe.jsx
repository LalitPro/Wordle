import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full">
      <Link
        to="/home"
        className="self-center px-2 py-2 m-1 text-sm font-extrabold text-center duration-150 bg-center bg-cover rounded-full hover:scale-90 md:px-20 md:m-5 md:text-xl justify-self-center font-figtree text-backblack min-w-60 max-w-96"
        style={{ backgroundImage: 'url("../images/Tab.png")' }}
      >
        Go Back
      </Link>
      <p className="p-3 text-xl md:p-10">
        My name is Lalit Kumar Yadav. I am studying in Class 9 at Govt. High
        School Bhatti. I belong to a rural area and study in a Hindi medium
        school. My subjects are Hindi, English, Sanskrit, Mathematics, Social
        Science, and Science. I live in Village Nayagaon, Tehsil Itarsi,
        District Narmadapuram. My family has nine members: my grandfather,
        grandmother, uncle, aunt, my brother, my sister, and me. My father works
        in a private service related to computers. He is proficient in Word and
        Excel and has completed a PGDCA. My mother is a housewife. I was
        introduced to computers in 2018 when a computer was brought to our home,
        and I was around 8 years old. My father initially taught me basic
        programming concepts in Visual Basic and VB.NET at a surface level,
        sparking my curiosity about how computer applications work. Having a
        computer at home, I explored software like Word, Excel, PowerPoint, and
        Photoshop, gaining confidence in using these tools. Over time, I
        developed skills in image editing and began understanding how software
        and hardware systems interact, further deepening my interest in coding
        and technology. At the end of July 2024, our school Principal, sir,
        introduced us to the Team Code Yogi initiative, which focuses on
        empowering students from rural areas. This initiative was started by SDM
        IAS Mr. T. Prateek Rao. In September, I participated in a Rural IT Quiz
        organized in Bhopal and secured the second position. Through the Code
        Yogi program, I have learned HTML, CSS, JavaScript, Tailwind CSS, and
        React. At home, I practice on my mobile and PC. I have completed 100
        levels of the Coding Course.
        <br/>
        Future Plan: I aspire to become a software engineer and work in the fields of
        software development and web development
 </p>
    </div>
  );
}

export default AboutMe;
