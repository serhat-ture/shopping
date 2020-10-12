import React from "react";
import contactUs from "../image/contactUs.jpg";

function Contact() {
  return (
    <div>
      <h1 className="font-bold text-2xl">
        {" "}
        Contact our Support and Sales team
      </h1>
      <img
        src={contactUs}
        width={800}
        height={400}
        alignItems="center"
        alt="contactUs"
        className="center"
      />
      <br></br>

      <div>
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button
            type="submit "
            className="bg-blue-500 text-center text-white  p-3  w-full  "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
