import React from "react";
import { Link } from "react-router-dom";

function Credits() {
  return (
    <div className="relative flex flex-col items-center justify-center min-w-full min-h-full">
      <Link
        to="/home"
        className="absolute top-0 right-0 self-center px-2 py-2 m-1 text-sm font-extrabold text-center bg-center bg-cover rounded-full md:px-20 md:m-5 md:text-xl justify-self-center font-figtree text-backblack min-w-60 max-w-96"
        style={{ backgroundImage: 'url("../images/Tab.png")' }}
      >
        Go Back
      </Link>
      <header class="bg-blue-600 w-full text-white py-4">
        <div class="container mx-auto text-center">
          <h1 class="text-xl md:text-2xl m-5 font-bold">
            Wordle - A React Practice Project
          </h1>
          <p class="text-xs md:text-sm">Created by Lalit Yadav</p>
        </div>
      </header>

      <main class="container mx-auto px-4 py-6">
        <section class="mb-8">
          <h2 class="text-xl font-semibold text-blue-600">Project Overview</h2>
          <p class="mt-2 text-justify">
            This Wordle game is a fun and interactive project developed entirely
            in <strong>React</strong>. The concept is simple yet engaging:
            players must guess a randomly selected five-letter word from a
            predefined array. It's a great way to practice coding and enhance
            problem-solving skills!
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold text-blue-600">About Me</h2>
          <p class="mt-2">
            <strong>Hi, I'm Lalit Kumar Yadav,</strong> a student in{" "}
            <strong>9th grade</strong> at{" "}
            <strong>Govt. High School Bhatti.</strong>
          </p>

          <h3 class="mt-4 text-lg font-semibold text-gray-700">
            My Journey into Coding
          </h3>
          <p class="mt-2 text-justify">
            My coding journey started when I was 12 years old, experimenting
            with <strong>Visual Basic</strong>. Although I didn’t master it, it
            sparked my curiosity for programming.
          </p>
          <p class="mt-2 text-justify">
            In <strong>September</strong>, I participated in the{" "}
            <strong>TCS Rural IT Quiz</strong> and became the{" "}
            <strong>Runner-up</strong> in the Regional Finals at the National
            Level, which motivated me to explore technology further.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-blue-600">
            How I’m Learning Coding
          </h2>
          <p class="mt-2 text-justify">
            A few months ago, our SDM launched an initiative called{" "}
            <strong>"Coding for All"</strong>, where graduates from{" "}
            <strong>IIT Delhi</strong> introduced us to web development. This
            program has been a transformative experience for me.
          </p>
          <p class="mt-2">So far, I’ve learned:</p>
          <ul class="list-disc ml-6 mt-2 text-gray-700">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Git & GitHub</li>
            <li>Deployment on Netlify</li>
          </ul>
          <p class="mt-2">
            The course is ongoing, and I'm excited to keep learning and building
            projects like this! If you're interested in learning coding, you can
            join the program at <span> </span>
            <a
              href="https://www.codeyogi.io"
              target="_blank"
              class="text-blue-500 underline"
            >
              www.codeyogi.io
            </a>
            .
          </p>
        </section>
      </main>

      <footer class="bg-gray-800 w-full text-white py-4">
        <div class="container mx-auto text-center">
          <p class="text-sm">
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

export default Credits;
