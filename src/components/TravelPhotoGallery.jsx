import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * Centered carousel: large active image, prev/next, thumbnail filmstrip, optional fullscreen.
 */
export function TravelPhotoGallery({ tripId, tripTitle, photoIds }) {
  const photosBaseUrl = useMemo(
    () => (import.meta.env.VITE_TRAVEL_PHOTOS_BASE_URL || '').replace(/\/$/, ''),
    []
  );

  const files = useMemo(() => {
    return Array.isArray(photoIds) ? [...photoIds] : [];
  }, [photoIds]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef(null);
  const thumbRefs = useRef([]);
  const prevTripForScrollRef = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [tripId, files.join('|')]);

  useEffect(() => {
    if (prevTripForScrollRef.current !== tripId) {
      prevTripForScrollRef.current = tripId;
      return;
    }
    thumbRefs.current[activeIndex]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }, [tripId, activeIndex]);

  const urlFor = useCallback(
    (name) =>
      `${photosBaseUrl}/${encodeURIComponent(tripId)}/${encodeURIComponent(name)}`,
    [photosBaseUrl, tripId]
  );

  const go = useCallback(
    (delta) => {
      setActiveIndex((i) => {
        const n = files.length;
        if (n === 0) return 0;
        return Math.min(n - 1, Math.max(0, i + delta));
      });
    },
    [files.length]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
    },
    [go]
  );

  useEffect(() => {
    if (!lightboxOpen) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightboxOpen, go]);

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].screenX - touchStartX.current;
    touchStartX.current = null;
    if (dx > 56) go(-1);
    else if (dx < -56) go(1);
  };

  if (files.length === 0) {
    return null;
  }

  if (!photosBaseUrl) {
    return (
      <div className="my-travel-gallery my-travel-gallery--config">
        <h4 className="my-travel-gallery-title">Photos</h4>
        <p className="my-travel-gallery-hint">
          This trip lists {files.length} photo{files.length === 1 ? '' : 's'}. Set{' '}
          <code className="my-travel-photos-code">VITE_TRAVEL_PHOTOS_BASE_URL</code> to your
          CloudFront URL in <code className="my-travel-photos-code">.env</code>, restart{' '}
          <code className="my-travel-photos-code">npm run dev</code>, and redeploy on Netlify so
          images can load.
        </p>
      </div>
    );
  }

  const current = files[activeIndex];
  const hasMany = files.length > 1;

  return (
    <>
      <div
        className="my-travel-gallery"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${tripTitle} photos`}
        onKeyDown={onKeyDown}
      >
        <h4 className="my-travel-gallery-title">Photos</h4>

        <div className="my-travel-gallery-shell">
          <div
            className="my-travel-gallery-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {hasMany ? (
              <button
                type="button"
                className="my-travel-gallery-nav my-travel-gallery-nav--prev"
                onClick={() => go(-1)}
                disabled={activeIndex <= 0}
                aria-label="Previous photo"
              >
                <span aria-hidden="true">‹</span>
              </button>
            ) : (
              <span className="my-travel-gallery-nav-spacer" aria-hidden="true" />
            )}

            <div className="my-travel-gallery-frame">
              <button
                type="button"
                className="my-travel-gallery-hero-btn"
                onClick={() => setLightboxOpen(true)}
                aria-label={`View photo ${activeIndex + 1} fullscreen`}
              >
                <img
                  className="my-travel-gallery-hero"
                  src={urlFor(current)}
                  alt={`${tripTitle} — photo ${activeIndex + 1}`}
                  draggable={false}
                />
              </button>
              <span className="my-travel-gallery-expand-hint">
                Tap or click to expand
              </span>
            </div>

            {hasMany ? (
              <button
                type="button"
                className="my-travel-gallery-nav my-travel-gallery-nav--next"
                onClick={() => go(1)}
                disabled={activeIndex >= files.length - 1}
                aria-label="Next photo"
              >
                <span aria-hidden="true">›</span>
              </button>
            ) : (
              <span className="my-travel-gallery-nav-spacer" aria-hidden="true" />
            )}
          </div>

          <div className="my-travel-gallery-meta">
            <span className="my-travel-gallery-counter">
              {activeIndex + 1} / {files.length}
            </span>
            <span className="my-travel-gallery-filename" title={current}>
              {current}
            </span>
          </div>

          {hasMany ? (
            <div
              className="my-travel-gallery-thumbs"
              role="tablist"
              aria-label="Photo thumbnails"
            >
              {files.map((name, i) => (
                <button
                  key={`${name}-${i}`}
                  ref={(node) => {
                    thumbRefs.current[i] = node;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Photo ${i + 1}`}
                  className={
                    i === activeIndex
                      ? 'my-travel-gallery-thumb my-travel-gallery-thumb--active'
                      : 'my-travel-gallery-thumb'
                  }
                  onClick={() => setActiveIndex(i)}
                >
                  <img
                    src={urlFor(name)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          ) : null}

          {hasMany ? (
            <p className="my-travel-gallery-keyhint">
              Focus this gallery and use ← → keys, or swipe on the photo.
            </p>
          ) : null}
        </div>
      </div>

      {lightboxOpen && current ? (
        <div
          className="my-travel-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${tripTitle} fullscreen`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="my-travel-lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="my-travel-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {hasMany ? (
              <>
                <button
                  type="button"
                  className="my-travel-lightbox-prev"
                  onClick={() => go(-1)}
                  disabled={activeIndex <= 0}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="my-travel-lightbox-next"
                  onClick={() => go(1)}
                  disabled={activeIndex >= files.length - 1}
                  aria-label="Next photo"
                >
                  ›
                </button>
              </>
            ) : null}
            <img
              className="my-travel-lightbox-img"
              src={urlFor(current)}
              alt={`${tripTitle} — ${activeIndex + 1} of ${files.length}`}
            />
            {hasMany ? (
              <p className="my-travel-lightbox-caption">
                {activeIndex + 1} / {files.length}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
