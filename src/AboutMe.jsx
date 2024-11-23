import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-full">
      <Link
        to="/home"
        className="self-center px-2 py-2 m-1 text-sm font-extrabold text-center bg-center bg-cover rounded-full md:px-20 md:m-5 md:text-xl justify-self-center font-figtree text-backblack min-w-60 max-w-96"
        style={{ backgroundImage: 'url("../images/Tab.png")' }}
      >
        Go Back
      </Link>
      <p className="p-3 text-xl md:p-10">
        My name is Lalit Kumar Yadav I am studying in class 9th. My school name
        is Govt. High School Bhatti. I belong to a rural area and in my class I
        study in Hindi medium my subjects are Hindi, English, Sanskrit,
        Mathematics, Social Science, and Science. I live in Village Nayagaon
        Teshil Itarsi District Narmadapuram My family has 09 members
        grandfather, grandmother, Uncle, aunty, and my brother and sister. My
        father works in a private service his work is related to computer. He
        works in Word and Excel. He has done PGDCA.  My mother is a housewife.
        In the beginning, my father taught me about coding in Visual Basic. From
        there, I got interested in coding and also observed how computer
        applications work. Then  I learned that they all work in a system:
        software and hardware. This sparked my curiosity and interest in
        learning more about coding. At the end of July, our school Principal,
        sir, introduced us to the Team Code Yogi initiative for students from
        rural areas. Our SDM, IAS    Mr. T. Prateek Rao sir, started the
        initiative. Apart from this, in September, I participated in an Rural IT
        Rural Quiz organized at Bhopal and got an II position. I have learned
        HTML, CSS, JavaScript, Tailwind CSS, and React.  From Codeyogi. At home,
        I work on my mobile and PC I have completed 50 levels of the telegram
        course and 25 lectures of the advanced playlist. Future Plan: I want to
        be a software engineer. And to work in the software development and web
        development field.
      </p>
    </div>
  );
}

export default AboutMe;
