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

      <section className="px-4 py-5 mb-8 md:px-20">
        <h2 className="text-xl font-semibold text-blue-600">About Me</h2>
        <p className="mt-2">
          <strong>Hi, I'm Lalit Kumar Yadav,</strong> a student in{" "}
          <strong>9th grade</strong> at{" "}
          <strong>Govt. High School Bhatti.</strong>
        </p>

        <h3 className="mt-4 text-lg font-semibold text-gray-700">
          My Journey into Coding
        </h3>
        <p className="mt-2 text-justify">
          My coding journey started when I was 12 years old, experimenting with{" "}
          <strong>Visual Basic</strong>. Although I didn’t master it, it sparked
          my curiosity for programming.
        </p>
        <p className="mt-2 text-justify">
          In <strong>September</strong>, I participated in the{" "}
          <strong>TCS Rural IT Quiz</strong> and became the{" "}
          <strong>Runner-up</strong> in the Regional Finals at the National
          Level, which motivated me to explore technology further.
        </p>
        <h2 className="text-xl font-semibold text-blue-600">
          How I’m Learning Coding
        </h2>
        <p className="mt-2 text-justify">
          A few months ago, our SDM launched an initiative called{" "}
          <strong>"Coding for All"</strong>, where graduates from{" "}
          <strong>IIT Delhi</strong> introduced us to web development. This
          program has been a transformative experience for me.
        </p>
        <p className="mt-2">So far, I’ve learned:</p>
        <ul className="mt-2 ml-6 text-gray-700 list-disc">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Git & GitHub</li>
          <li>Deployment on Netlify</li>
        </ul>
        <p className="mt-2">
          The course is ongoing, and I'm excited to keep learning and building
          projects like this! If you're interested in learning coding, you can
          join the program at <span> </span>
          <a
            href="https://www.codeyogi.io"
            target="_blank"
            className="underline text-lightwhite"
          >
            www.codeyogi.io
          </a>
          .
        </p>
      </section>

      <footer className="w-full py-4 text-white bg-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Join{" "}
            <strong>
              <a href="https://codeyogi.io" target="_blank">
                Codeyogi
              </a>
            </strong>{" "}
            today to start your coding journey!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AboutMe;
