import React from "react";
import Root from "../components/sassy";
import * as indexStyles from "../components/index.module.sass";
import * as cardStyles from "../components/card.module.sass";
import Vl from "../components/vl";
// import { Link } from "gatsby";
import Card from "../components/card";

/* export const query = graphql`
  query MyQuery {
    allCosmicjsNotes(limit: 3) {
      edges {
        node {
          created_at
          title
          metadata {
            summary
          }
        }
      }
    }
  }`
*/

function TimelineBlock({ title, year, children }) {
  return (
    <div className={indexStyles.timelineBlock}>
      <div style={{ textAlign: "right", flex: "1", width: "40vw" }}>
        <div style={{ paddingRight: "10px" }}>
          <h2 style={{ letterSpacing: "1px" }}>{title}</h2>
          <h3 className={indexStyles.date}>{year}</h3>
        </div>
      </div>
      <div style={{ flex: "1", width: "40vw" }}>
        <Vl>{children}</Vl>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <Root>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "88vh",
          textAlign: "center",
        }}
      >
        <h1
          style={{ textAlign: "center", alignSelf: "center" }}
          className={indexStyles.welcomeTitle}
        >
          K. Postek
        </h1>
        <p style={{ margin: "4px" }} className={indexStyles.someSmartPhrase}>
          Small developer, big dreamer
        </p>
        <p style={{ margin: "4px" }}>
          Full stack, Python, JS/TS, React, Docker, MongoDB, Swift
        </p>
        <hr className={indexStyles.titleHrLine} />
        {/* <div className={indexStyles.categoryBlockRoot}></div> */}
        <div className={cardStyles.cardContainer}>
          <Card title={"github"}>
            <p>
              <span>git checkout </span>
              <a href="https://github.com/kpostekk">perosnal</a>
              <span> / </span>
              <a href="https://github.com/pjatk21">uni</a>
              <span> projects</span>
            </p>
          </Card>
          <Card title={"telegram"}>
            <p>
              <a href="https://t.me/kpostekk">dm me</a>
            </p>
          </Card>
          <Card title={"linked in"}>
            <p>
              <a href="https://www.linkedin.com/in/kpostekk/">recruit me</a>
            </p>
          </Card>
        </div>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ opacity: 0 }} className={indexStyles.appearAnimation}>
          scroll down
        </p>
        <h1 style={{ fontWeight: 300, marginTop: 0 }}>My timeline</h1>
        <TimelineBlock title={"career begin"} year={"may, june 2021"}>
          <p>High School Graduation</p>
          <p>First job as reverse engineer</p>
        </TimelineBlock>
        <TimelineBlock title={"college"} year={"october-present 2021"}>
          <p>
            Student of IT at <a href={"https://www.pja.edu.pl/en/"}>PJAIT</a>
          </p>
        </TimelineBlock>
        <h2
          style={{
            fontStyle: "italic",
            fontWeight: 300,
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          future plans
        </h2>
        <TimelineBlock title={"college graduation"} year={"2025"}>
          <p>Graduating with software engineering degree</p>
        </TimelineBlock>
      </div>
      <div style={{ padding: "10px" }}>
        <p
          style={{
            textAlign: "center",
            padding: 0,
            fontSize: "9pt",
            letterSpacing: "1px",
          }}
        >
          Powered by Gatsby
        </p>
      </div>
    </Root>
  );
}
