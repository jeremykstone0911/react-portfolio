import React from "react";

export default function PortfolioBlock() {
  return (
    <section class="container bg-light">
      <div class="row m-3 title">
        <h4>View Some of My Projects:</h4>
      </div>
      <div class="row">
        <ul class="links">
          <li>
            <a
              href="https://jeremykstone0911.github.io/Note_Taker/"
              alt="GitHub link"
              target="_blank"
            >
              Note Taker
            </a>
          </li>
          <li>
            <a
              href="https://shrouded-fjord-52818.herokuapp.com/%20deployed%20to%20Heroku"
              target="_blank"
            >
              Fitness Tracker
            </a>
          </li>
          <li>
            <a
              href="https://jeremykstone0911.github.io/Project1/"
              target="_blank"
            >
              All The Music You Missed (A Group Project)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jeremykstone0911/weekend-warrior"
              target="_blank"
            >
              Weekend Warriors (A Group Project)
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
