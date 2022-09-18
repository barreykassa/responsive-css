import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <div className="border">
      <p className="title">Register</p>
      <div className="contact">
        <input className="contact item" type="text" />
        <input className="contact item" type="password" />
        <button className="contact item">submit</button>
      </div>
    </div>
  );
}
