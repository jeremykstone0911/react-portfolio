import React from "react";

export default function ContactCard() {
  return (
    <section class="container bg-light">
      <div class="row m-3 title">
        <h4>View My:</h4>
      </div>
      <div class="row">
        <ul class="links">
          <li>
            <a
              href="https://github.com/jeremykstone0911"
              alt="GitHub link"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/jeremy-stone-bb34a0126"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://stackexchange.com/users/19261482/jeremy-stone"
              target="_blank"
            >
              Stack Overflow
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
