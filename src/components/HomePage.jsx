import React from 'react';
import { Link } from 'react-router';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getRecentTripWithPhotos, getTravelStats } from '../data/travelData';
import { getLanguages, getSkills } from '../utils/SkillData';

const photosBaseUrl = (import.meta.env.VITE_TRAVEL_PHOTOS_BASE_URL || '').replace(/\/$/, '');
const PREVIEW_PHOTO_COUNT = 3;
const HEADLINE_SKILL_COUNT = 4;

/** Skills with the highest current rating (latest data point), most recently used first on ties. */
function getHeadlineSkills() {
  return [...getLanguages(), ...getSkills()]
    .map(({ id, color, data }) => ({ id, color, latest: data[data.length - 1] }))
    .sort((a, b) => b.latest.y - a.latest.y || b.latest.x.localeCompare(a.latest.x))
    .slice(0, HEADLINE_SKILL_COUNT);
}

export function HomePage() {
  const recentTrip = getRecentTripWithPhotos();
  const stats = getTravelStats();
  const skills = getHeadlineSkills();

  return (
    <main className="home">
      <header className="home-intro">
        <div className="container">
          <img
            className="home-avatar"
            src="/avatar.jpg"
            alt="Brad Moran"
            width="112"
            height="112"
          />
          <h1 className="home-name">Brad Moran</h1>
          <p className="home-tagline">
            I'm a Full Stack Engineer focused on building software startups.
          </p>
          <p className="home-tagline home-tagline--sub">
            This is my hobby site: mostly a map of where I've traveled, plus my resume.
          </p>
          <div className="home-links">
            <a href="https://www.github.com/bsmoran620" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/brad-moran-se" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
          </div>
        </div>
      </header>

      <div className="container home-body">
        {recentTrip && photosBaseUrl ? (
          <section className="home-recent-trip" aria-labelledby="home-recent-trip-heading">
            <div className="home-section-header">
              <h2 id="home-recent-trip-heading" className="home-section-title">
                Recent trip
              </h2>
              <Link to="/projects/my-travel" className="home-section-link">
                See all trips →
              </Link>
            </div>
            <h3 className="home-trip-title">{recentTrip.title}</h3>
            {recentTrip.dateRange ? (
              <p className="home-trip-dates">{recentTrip.dateRange}</p>
            ) : null}
            {recentTrip.summary ? <p>{recentTrip.summary}</p> : null}
            <div className="home-trip-photos">
              {recentTrip.photoIds.slice(0, PREVIEW_PHOTO_COUNT).map((name, i) => (
                <img
                  key={name}
                  src={`${photosBaseUrl}/${encodeURIComponent(recentTrip.tripId)}/${encodeURIComponent(name)}`}
                  alt={`${recentTrip.title} — photo ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </section>
        ) : null}

        <div className="home-cards">
          <Link to="/projects/my-travel" className="home-card">
            <h2 className="home-card-title">My Travel</h2>
            <p className="home-card-stats">
              <strong>{stats.trips}</strong> trips · <strong>{stats.countries}</strong>{' '}
              countries &amp; territories · <strong>{stats.places}</strong> places pinned
            </p>
            <p>An interactive map of everywhere I've been, with photos from each trip.</p>
            <span className="home-card-cta">Explore the map →</span>
          </Link>
          <Link to="/resume" className="home-card">
            <h2 className="home-card-title">Resume</h2>
            <div className="home-card-skills">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="badge"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.id}
                </span>
              ))}
            </div>
            <p>Charts of how my skills have changed over time, plus the projects behind them.</p>
            <span className="home-card-cta">View resume →</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
