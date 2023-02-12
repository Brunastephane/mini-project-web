import { Avatar, Chip, Container, Grid, Typography } from "@mui/material";
import React from "react";

const skills = [
  "ReactJS",
  "NodeJS",
  "TypeScript",
  "TypeORM",
  "MySQL",
  "SQL",
  "PostgreSQL",
  ".Net Core",
  "C#",
  "Entity Framework",
  "Power Platform",
  "HTML 5",
  "CSS 3",
  "RPA",
];

function Main() {
  return (
    <Container>
      <Grid container spacing={0} mt="15px">
        <Grid item xs={9} sx={{ mt: "30px" }}>
          <Typography variant="h3">Bruna Stephane da Silva</Typography>
          <Typography variant="h5" sx={{ mb: "15px" }}>
            Software Developer
          </Typography>
          {skills.map((skill) => (
            <Chip label={skill} sx={{ mr: "4px", mt: "5px" }} />
          ))}
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src={process.env.PUBLIC_URL + "/imgperfil.jpg"}
            sx={{ width: "250px", height: "250px" }}
          />
        </Grid>
      </Grid>

      <h4>
        Who <span>I am</span>{" "}
      </h4>
      <p>
        I'm Brazilian and I have been living in Manchester since 2019. I have
        four years of experience Developing Applications, Continuous Improvement
        and Process Analysis. I've worked with VB, C#, .Net, SQL, Power Platform
        and Power BI, RPA(Automation Anywhere, Uipath), Sharepoint, HTML5, CSS,
        JavaScript. I also have experience with Agile methodologies(Scrum) and
        Six Sigma, Lean, 5S, Problem Solving. What I like most about my work is
        working with problem solving, architecture and creating solutions that
        will facilitate the end user's daily life.
      </p>

      <hr />

      <h4>
        My <span>Career Story</span>
      </h4>
      <p>
        I started my career with IT in 2016, at Cargill working with application
        development in VB and VBA using MS Access as database for a small
        accounting team and my role there was to understand the process that the
        team did, design the solutions, develop the applications and test them.
      </p>
      <p>
        After 6 months the team's management became interested in the work I was
        doing and expanded it so that I could start meeting other supervisor
        within the same accounting tower. That's when I saw the need to start
        working with more robust databases like Microsoft SQL and more robust
        programing language like C#. As I worked in a Shared Services Center
        that was expanding, the continuous improvement team was also growing and
        was asking for a list of my projects, so in 2017 I was promoted to
        Perfomance Analyst and started doing projects for all of Cargill in
        Brazil.
      </p>
      <p>
        That same year, Cargill start working with robots and the Shared
        Services Center in Brazil was chosen to be the pilot. One of my projects
        done in VBA was chosen for this type of automation and I was one of the
        developers chosen to start working with RPA and I develop different
        types of bots across Cargill.
      </p>
      <p>
        In March 2019, I was invited to participate in a selection process for a
        project to implement RPA at Algar Tech, a large South American
        technology company and saw a good opportunity for growth. Where we were
        responsible for creating the company's first robots and defining tools
        and best practices
      </p>
    </Container>
  );
}

export default Main;