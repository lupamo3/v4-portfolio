import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    // Programming Languages
    'Python',
    'JavaScript (ES6+)',
    'TypeScript',
    'C#',
    'Scala',
    'PHP',
    'Rust',

    // Web Technologies
    'React',
    'Angular',
    'Node.js',
    'Django',
    'Flask',
    'Next.js',

    // Cloud & DevOps
    'AWS (Lambda, Step Functions, EMR, EKS)',
    'Azure',
    'Terraform',
    'Docker',
    'Kubernetes',
    'CI/CD',

    // Data & Analytics
    'ETL',
    'Snowflake',
    'Apache Superset',
    'Power BI',
    'Apache Hadoop',
    'Jupyter Notebooks',

    // Databases
    'MongoDB',
    'MySQL',
    'Redis',
    'Apache Cassandra',

    // Additional Tools
    'Git',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Norbert Lupamo Anjichi. I'm a results-driven Software &amp; Data
              Engineer with 7+ years of experience crafting robust, scalable solutions across
              full-stack development, cloud architecture, and data engineering.
            </p>

            <p>
              Throughout my career, I've had the privilege of working at innovative organizations
              like{' '}
              <a href="https://scrums.com/" target="_blank" rel="noreferrer">
                Scrums.com
              </a>
              {' , '}
              <a href="https://www.wastegroup.co.za/" target="_blank" rel="noreferrer">
                Waste Group
              </a>
              {', '}
              <a href="https://theverygroup.com/" target="_blank" rel="noreferrer">
                The Very Group
              </a>{' '}
              <a href="https://arifu.com/" target="_blank" rel="noreferrer">
                Arifu
              </a>{' '}
              to name a few. Whether leading cross-functional teams or integrating AI-driven
              solutions, my focus is on optimizing cloud infrastructures and streamlining data
              pipelines across AWS and Azure.
            </p>

            <p>
              I thrive on building digital experiences that not only reduce deployment times but
              also deliver high-availability systems designed for real-world impact.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
