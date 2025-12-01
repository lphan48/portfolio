import './ProjectsStyles.css'
import codescout from '../assets/codescout.png'
import maze from '../assets/maze.png'
import wellnessJournal from '../assets/wellnessjournal.png'
import { useState } from "react";

export default function Projects() {
  return (
    <div className='project-container' id="projects">
      <h1 className='header'>Projects</h1>
      <div className="header-accent-projects"></div>
    <section className='project-content'>
        <CodeScoutBox />
        <div className='project-blurb'>
            <div className='project-title'>
                CodeScout
            </div>
            <div className='project-title'>
                stack overflow clone
            </div>
            <div className='project-description'>
                A Stack Overflow clone with Q&A, gamified profiles, real-time messaging, and comment moderation. Built with React.js and MongoDB. Hosted on Render.
            </div>
            <a
                className="project-link"
                href="https://cs4530-f24-108.onrender.com/" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="project-link-text">LIVE APP</span>
            </a>
            <a
                className="project-link"
                href="https://github.com/neu-cs4530/fall24-project-fall24-team-project-group-108" 
                target="_blank"
                rel="noopener noreferrer"
                style={{width: '8vw', marginTop: '0.5rem'}}
            >
                <span className="project-link-text">REPO</span>
            </a>
        </div>
    </section>
    <section className='project-content' style={{ marginLeft: '8rem' }} >
        <div className='project-blurb' style={{ marginLeft: '0', marginRight: '-8rem' }}>
            <div className='project-title'>
                Wellness Journal
            </div>
            <div className='project-title'>
                Fitness & Mood Logger
            </div>
            <div className='project-description'>
                A CLI, multi-user Python program that stores daily mental and physical health data using CRUD operations of an 8-table SQL database.
            </div>
            <a
                className="project-link"
                href="https://github.com/lphan48/WellnessJournal" 
                target="_blank"
                rel="noopener noreferrer"
                style={{width: '8vw', marginTop: '0.5rem'}}
            >
                <span className="project-link-text">REPO</span>
            </a>
        </div>
        <WellnessJournalBox />

    </section>
    <section className='project-content'>
        <MazeBox />
        <div className='project-blurb'>
            <div className='project-title'>
                Maze Game
            </div>
            <div className='project-title'>
                Randomized Maze Generator & Solver
            </div>
            <div className='project-description'>
              A Java program that utilizes Kruskal's algorithm to randomly generate mazes. Allows users to solve the maze manually or visualize solving through DFS or BFS.
            </div>
            <a
                className="project-link"
                href="https://github.com/lphan48/MazeGame" 
                target="_blank"
                rel="noopener noreferrer"
                style={{width: '8vw', marginTop: '0.5rem'}}
            >
                <span className="project-link-text">REPO</span>
            </a>
        </div>
    </section>
    </div>
  )
}


function CodeScoutBox() {

  return (
    <div
      className='codescout-box'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
          <img className="codescout-pic" src={codescout} alt="codescoutPic" />
        </div>
    </div>
  );
}

function MazeBox() {

  return (
    <div
      className='codescout-box'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
          <img className="codescout-pic" src={maze} alt="mazePic" />
        </div>
    </div>
  );
}

function WellnessJournalBox() {

  return (
    <div
      className='codescout-box'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ paddingBottom: '0', paddingLeft: '7rem', paddingRight: '7rem', paddingTop: '7rem'}}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}}>
          <img className="codescout-pic" src={wellnessJournal} alt="journalpic" style={{ width: '50vw'}}/>
        </div>
    </div>
  );
}
