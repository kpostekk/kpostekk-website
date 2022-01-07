import React from "react";
import Root from "../components/sassy";
import * as indexStyles from '../components/index.module.sass'
import Vl from "../components/vl";

function CategoryBlock({name}) {
  return (
    <div className={indexStyles.categoryBlock}>
      <p style={{margin: '10px 0'}}>{name}</p>
      <p style={{opacity: 0.5, margin: '5px 0', letterSpacing: '-0.5px'}}>{name}</p>
      <p style={{opacity: 0.2, margin: '2px 0', letterSpacing: '-1px'}}>{name}</p>
    </div>
  )
}

function TimelineBlock({title, year, children}) {
  return (
    <div className={indexStyles.timelineBlock}>
      <div style={{textAlign: "right", flex: '1', width: '40vw'}}>
        <div style={{paddingRight: '10px'}}>
          <h2>{title}</h2>
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

export default function indexPage () {
  return (
    <Root>
      <div style={{display: "flex", flexDirection: "column",  alignItems: "center", justifyContent: "center", height: '88vh'}}>
        <h1 style={{textAlign: "center", alignSelf: "center"}} className={indexStyles.welcomeTitle}>K. Postek</h1>
        <p className={indexStyles.someSmartPhrase}>Small developer, big dreamer</p>
        <hr className={indexStyles.titleHrLine}/>
        <div className={indexStyles.categoryBlockRoot}>
          <CategoryBlock name={'blog'}/>
          <CategoryBlock name={'projects'}/>
          <CategoryBlock name={'prototypes'}/>
          <CategoryBlock name={'contact'}/>
        </div>
      </div>
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
        <h2 style={{fontStyle: 'italic', fontWeight: 300}}>future plans</h2>
        <TimelineBlock title={'college graduation'} year={'2025'}>
          <p>Graduating with software engineering degree</p>
        </TimelineBlock>
      </div>
    </Root>
  )
}
