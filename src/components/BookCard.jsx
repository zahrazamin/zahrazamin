"use client";

import { useEffect, useRef, useState } from "react";
import { PageFlip } from "page-flip";

const styles = `
  /* ── Perspective container ── */
  .bc-cover-wrap {
    width: 100%;
    max-width: 260px;
    aspect-ratio: 280 / 380;
    perspective: 1000px;
  }

  /* ── Book wrapper — flat by default, tilts on hover ── */
  .bc-book {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  .bc-book:hover {
    transform: translateY(-7px) rotateY(-5deg);
  }

  /* ── Cover face ── */
  .bc-cover {
    position: absolute;
    inset: 0;
    background: #71404B;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0,0,0,0.10);
  }

  /* ── Spine ── */
  .bc-spine {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 100%;
    background: #532C34;
    box-shadow: inset -3px 0 6px rgba(0,0,0,0.25);
    pointer-events: none;
    z-index: 2;
  }

  /* ── Inner content ── */
  .bc-inner {
    position: relative;
    z-index: 1;
    padding: 22px 18px 18px 28px;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  /* "Hi!" */
  .bc-headline {
    font-size: 32px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.0;
    letter-spacing: -0.3px;
    margin: 0 0 4px 0;
    font-family: inherit;
    flex-shrink: 0;
  }

  /* Subtitle */
  .bc-subtext {
    font-size: 13px;
    color: #ffffff;
    line-height: 1.45;
    margin: 0 0 10px 0;
    font-family: inherit;
    font-weight: 600;
    flex-shrink: 0;
    white-space: nowrap;
  }

  /* "Open the book" */
  .bc-click-hint {
    font-size: 11px;
    color: rgba(255,255,255,0.52);
    margin: 0 0 16px 0;
    font-family: inherit;
    font-weight: 400;
    flex-shrink: 0;
  }

  /* ── Photo box ── */
  .bc-photo {
    flex: 1;
    border-radius: 12px;
    overflow: hidden;
    background: #F5EDE0;
    min-height: 0;
  }
  .bc-photo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }

  /* ── Overlay ── */
  .bc-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.7);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: bcFadeIn 0.28s ease forwards;
  }
  @keyframes bcFadeIn {
    to { opacity: 1; }
  }

  /* ── Popup container ── */
  .bc-popup {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 12px;
  }

  /* ── Page-flip wrapper ── */
  .bc-flipbook-wrap {
    width: 800px;
    height: 540px;
    position: relative;
    flex-shrink: 0;
  }
  @media (max-width: 680px) {
    .bc-flipbook-wrap {
      width: calc(100vw - 80px);
      height: calc((100vw - 80px) * 0.675);
    }
  }

  /* ── Close button ── */
  .bc-close {
    position: absolute;
    top: -40px;
    right: 0;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.25);
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    transition: background 0.2s;
  }
  .bc-close:hover { background: rgba(255,255,255,0.22); }

  /* ── Nav arrows ── */
  .bc-nav {
    background: none;
    border: 2px solid #4A6FD4;
    color: #4A6FD4;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.2s, color 0.2s;
    z-index: 10;
  }
  .bc-nav:hover { background: #4A6FD4; color: #fff; }

  /* ── Pages ── */
  .bc-page {
    width: 300px;
    height: 400px;
    background: #FAF7F2;
    box-sizing: border-box;
    padding: 36px 28px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    font-family: inherit;
  }
  .bc-page-cover {
    background: #4A9B9F;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .bc-page-back {
    background: #4A9B9F;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .bc-page h2 {
    font-size: 22px;
    font-weight: 700;
    color: #1A1A1A;
    margin: 0 0 12px 0;
    letter-spacing: -0.3px;
  }
  .bc-page p {
    font-size: 13px;
    color: #6B6B6B;
    line-height: 1.75;
    margin: 0 0 10px 0;
  }
  .bc-page-cover h1 {
    font-size: 48px;
    font-weight: 800;
    color: #fff;
    line-height: 1.05;
    margin: 0 0 8px 0;
  }
  .bc-page-cover p {
    font-size: 14px;
    color: rgba(255,255,255,0.75);
    margin: 0;
  }
  .bc-page-cover hr {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.35);
    width: 60px;
    margin: 12px auto 14px;
  }
  .bc-img-placeholder {
    width: 100%;
    height: 80px;
    background: #E5DFD8;
    border-radius: 8px;
    margin-top: 10px;
  }
  .bc-timeline {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 4px;
  }
  .bc-tl-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
  .bc-tl-year {
    font-size: 11px;
    font-weight: 700;
    color: #4A9B9F;
    min-width: 36px;
    padding-top: 2px;
    letter-spacing: 0.04em;
  }
  .bc-tl-text {
    font-size: 13px;
    color: #1A1A1A;
    line-height: 1.5;
  }
  .bc-quote {
    font-size: 15px;
    font-style: italic;
    color: #4A9B9F;
    line-height: 1.6;
    margin: 0 0 14px 0;
    border-left: 2px solid #4A9B9F;
    padding-left: 12px;
  }
  .bc-page-back h3 {
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 10px 0;
  }
  .bc-page-back p {
    font-size: 12px;
    color: rgba(255,255,255,0.7);
    margin: 0;
  }
`;

export default function BookCard() {
  const [open, setOpen] = useState(false);
  const flipRef = useRef(null);
  const pageFlipRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      const el = flipRef.current;
      if (!el) return;

      const containerWidth = el.parentElement?.offsetWidth || 600;
      const pageW = Math.round(containerWidth / 2);
      const pageH = Math.round(pageW * 1.333);

      pageFlipRef.current = new PageFlip(el, {
        width: pageW,
        height: pageH,
        size: "fixed",
        minWidth: 120,
        maxWidth: 300,
        minHeight: 160,
        maxHeight: 400,
        showCover: true,
        mobileScrollSupport: false,
        usePortrait: false,
        autoSize: false,
        flippingTime: 700,
        startPage: 1,
      });
      pageFlipRef.current.loadFromHTML(el.querySelectorAll(".bc-page"));
    }, 60);

    return () => {
      clearTimeout(timer);
      if (pageFlipRef.current) {
        try { pageFlipRef.current.destroy(); } catch (_) {}
        pageFlipRef.current = null;
      }
    };
  }, [open]);

  const prev = () => pageFlipRef.current?.flipPrev();
  const next = () => pageFlipRef.current?.flipNext();

  return (
    <>
      <style>{styles}</style>

      {/* ── Book cover ── */}
      <div className="bc-cover-wrap">
        <div className="bc-book" onClick={() => setOpen(true)}>
          <div className="bc-cover">
            <div className="bc-spine" />
            <div className="bc-inner">
              <h2 className="bc-headline">Hi!</h2>
              <p className="bc-subtext">Want to know me more?</p>
              <p className="bc-click-hint">Open the book</p>
              <div className="bc-photo">
                <img src="/avatar.jpg" alt="Zahra" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Popup ── */}
      {open && (
        <div className="bc-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="bc-popup">
            <button className="bc-nav" onClick={prev} aria-label="Previous page">
              ‹
            </button>

            <div style={{ position: "relative" }}>
              <button className="bc-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
              <div className="bc-flipbook-wrap" ref={flipRef}>
                {/* Page 1 — Cover */}
                <div className="bc-page bc-page-cover">
                  <h1>Zahra</h1>
                  <hr />
                  <p>UX Designer</p>
                </div>

                {/* Page 2 — Who I Am */}
                <div className="bc-page">
                  <h2>Who I Am</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                    ut enim ad minim veniam.
                  </p>
                  <div className="bc-img-placeholder" />
                </div>

                {/* Page 3 — My Journey */}
                <div className="bc-page">
                  <h2>My Journey</h2>
                  <div className="bc-timeline">
                    <div className="bc-tl-item">
                      <span className="bc-tl-year">2019</span>
                      <span className="bc-tl-text">Started designing for enterprise clients in Dhaka.</span>
                    </div>
                    <div className="bc-tl-item">
                      <span className="bc-tl-year">2021</span>
                      <span className="bc-tl-text">Led UX for a flagship ERP mobile product.</span>
                    </div>
                    <div className="bc-tl-item">
                      <span className="bc-tl-year">2025</span>
                      <span className="bc-tl-text">Teaching design while building complex SaaS products.</span>
                    </div>
                  </div>
                </div>

                {/* Page 4 — What I Believe */}
                <div className="bc-page">
                  <h2>What I Believe</h2>
                  <p className="bc-quote">
                    "Design only works when it fits a specific human,<br />
                    in a specific context."
                  </p>
                  <p>
                    Constraints are the real brief. Technology, budget, environment,
                    and psychology all belong in the design process.
                  </p>
                  <p>
                    If you can't explain a decision simply, you probably don't
                    understand it well enough yet.
                  </p>
                </div>

                {/* Page 5 — Back cover */}
                <div className="bc-page bc-page-back">
                  <h3>Let's work together</h3>
                  <p>zahrazamin360@gmail.com</p>
                </div>
              </div>
            </div>

            <button className="bc-nav" onClick={next} aria-label="Next page">
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
