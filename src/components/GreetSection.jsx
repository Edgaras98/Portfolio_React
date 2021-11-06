import React from "react";
import Typewriter from "typewriter-effect";

function GreetSection() {
  return (
    <>
      <section className="greet-section" id="Main">
        <div className="typewriter">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<strong>Hello,</strong> I am a Junior Full-Stack <strong><span style="color: #0a3fa3;">Developer!</span></strong>`
                )
                .start();
            }}
          />
        </div>
      </section>
    </>
  );
}

export default GreetSection;
