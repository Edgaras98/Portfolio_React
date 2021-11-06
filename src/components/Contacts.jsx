import React from "react";

function Contacts() {
  return (
    <section className="contacts" id="Contacts">
      <div className="contacts-wrap">
        <h2>Contacts</h2>
        <div className="contact-div">
          <i class="fas fa-phone" style={{ fontSize: "3rem" }}></i>
          <p>+37063903379</p>
        </div>
        <div className="contact-div">
          <i class="fas fa-envelope-open-text" style={{ fontSize: "3rem" }}></i>
          <p>edgarasstepanovas14@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
