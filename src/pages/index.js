import React from "react";
import Root from "../components/sassy";
import * as indexStyles from '../components/index.module.sass'
import Vl from "../components/vl";
import {Link} from "gatsby";
import Card from "../components/card";

function CategoryBlock({name, children}) {
  return (
    <div className={indexStyles.categoryBlock}>
      <p style={{margin: '10px 0', fontSize: '16pt', letterSpacing: '1px'}}>{name}</p>
      {children}
    </div>
  )
}

function GithubRepo({path, title, children}) {
  return (
    <div style={{paddingTop: '8px'}}>
      <h4 style={{margin: '4px 0', letterSpacing: '1px'}}>
        <Link to={`https://github.com/${path}`}>
          {title}
        </Link>
      </h4>
      <p style={{maxWidth: '20vw', margin: '0', fontSize: '11pt'}}>
        {children}
      </p>
    </div>
  )
}

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

function TimelineBlock({title, year, children}) {
  return (
    <div className={indexStyles.timelineBlock}>
      <div style={{textAlign: "right", flex: '1', width: '40vw'}}>
        <div style={{paddingRight: '10px'}}>
          <h2 style={{letterSpacing: '1px'}}>{title}</h2>
          <h3 className={indexStyles.date}>{year}</h3>
        </div>
      </div>
      <div style={{flex: '1', width: '40vw'}}>
        <Vl>
          {children}
        </Vl>
      </div>
    </div>
  )
}

export default function IndexPage({data}) {
  return (
    <Root>
      <header style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: '88vh'
      }}>
        <h1 style={{textAlign: "center", alignSelf: "center"}} className={indexStyles.welcomeTitle}>K. Postek</h1>
        <p style={{margin: '4px'}} className={indexStyles.someSmartPhrase}>Small developer, big dreamer</p>
        <p style={{margin: '4px'}}>Full stack, Python, JS/TS, React, Docker, MongoDB, Swift</p>
        <hr className={indexStyles.titleHrLine}/>
        <div className={indexStyles.categoryBlockRoot}>
          <Card>
            <p>test</p>
          </Card>
          <CategoryBlock name={'contact'}>
            <p style={{margin: 0, paddingTop: '12px'}}>
              <Link to={'mailto:krystian@postek.eu'}>
                krystian@postek.eu
              </Link>
            </p>
            <p>
              <Link to={'https://t.me/kpostekk'}>
                telegram @kpostekk
              </Link>
            </p>
          </CategoryBlock>
        </div>
      </header>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <p style={{opacity: 0}} className={indexStyles.appearAnimation}>scroll down</p>
        <h1 style={{fontWeight: 300, marginTop: 0}}>My timeline</h1>
        <TimelineBlock title={'career begin'} year={'may, june 2021'}>
          <p>High School Graduation</p>
          <p>Job as reverse engineer at <a href={'https://texts.com/'}>Texts</a></p>
        </TimelineBlock>
        <TimelineBlock title={'college'} year={'october-present 2021'}>
          <p>Student of IT at <a href={'https://www.pja.edu.pl/en/'}>PJAIT</a></p>
        </TimelineBlock>
        <h2 style={{fontStyle: 'italic', fontWeight: 300, margin: 0, letterSpacing: '1px'}}>future plans</h2>
        <TimelineBlock title={'college graduation'} year={'2025'}>
          <p>Graduating with software engineering degree</p>
        </TimelineBlock>
      </div>
      <div style={{padding: '10px'}}>
        <p style={{textAlign: 'center', padding: 0, fontSize: '9pt', letterSpacing: '1px'}}>Powered by Gatsby</p>
      </div>
    </Root>
  )
}
