import React from "react";
import { WebView } from "react-native";

const WIDTH = 440;
const HEIGHT = 520;

const GoalIcon = props => (
  <WebView
    style={{
      width: WIDTH,
      height: HEIGHT,
      backgroundColor: "transparent"
    }}
    source={{
      html: `
        <?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <!-- Created by Denis Kluchnikov -->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 440 520">
          <style>
            @keyframes c-img-goal5_t { 0% { transform: translate(392px,260px) scale(1,1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 16.6666% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 20% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 23.3333% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 26.6666% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 30% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 33.3333% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 36.6666% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 40% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 43.3333% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 46.6666% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 50% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 53.3333% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 56.6666% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 60% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 63.3333% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 66.6666% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 70% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 73.3333% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 76.6666% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 80% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 83.3333% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 86.6666% { transform: translate(392px,260px) scale(1,1.1) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 90% { transform: translate(392px,260px) scale(1,1.2) translate(-392px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(392px,260px) scale(1,1) translate(-392px,-260px); } }
            @keyframes c-img-goal5_o { 0% { opacity: 0; } 18.75% { opacity: 1; } 81.25% { opacity: 1; } 100% { opacity: 0; } }
            @keyframes c-img-goal4_t { 0% { transform: translate(48px,260px) scale(1,1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 16.6666% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 20% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 23.3333% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 26.6666% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 30% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 33.3333% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 36.6666% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 40% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 43.3333% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 46.6666% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 50% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 53.3333% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 56.6666% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 60% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 63.3333% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 66.6666% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 70% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 73.3333% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 76.6666% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 80% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 83.3333% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 86.6666% { transform: translate(48px,260px) scale(1,1.1) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 90% { transform: translate(48px,260px) scale(1,1.2) translate(-48px,-260px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(48px,260px) scale(1,1) translate(-48px,-260px); } }
            @keyframes c-img-goal4_o { 0% { opacity: 0; } 18.75% { opacity: 1; } 81.25% { opacity: 1; } 100% { opacity: 0; } }
            @keyframes c-img-goal-1_t { 0% { transform: translate(223.493px,259.2px) rotate(45deg) scale(0,0) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 16.6666% { transform: translate(223.493px,259.2px) rotate(0deg) scale(1.2,1.2) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 26.6666% { transform: translate(223.493px,259.2px) rotate(-5deg) scale(1,1) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 36.6666% { transform: translate(223.493px,259.2px) rotate(5deg) scale(1.2,1.2) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 46.6666% { transform: translate(223.493px,259.2px) rotate(-10deg) scale(1,1) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 56.6666% { transform: translate(223.493px,259.2px) rotate(10deg) scale(1.2,1.2) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 66.6666% { transform: translate(223.493px,259.2px) rotate(-5deg) scale(1,1) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 76.6666% { transform: translate(223.493px,259.2px) rotate(5deg) scale(1.2,1.2) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 86.6666% { transform: translate(223.493px,259.2px) rotate(0deg) scale(1.2,1.2) translate(-89.803px,-23.612px); animation-timing-function: cubic-bezier(0.42,0,0.58,1); } 100% { transform: translate(223.493px,259.2px) rotate(-45deg) scale(0,0) translate(-89.803px,-23.612px); } }
            @keyframes c-img-goal-1_o { 0% { opacity: 0; } 16.6667% { opacity: 1; } 86.6667% { opacity: 1; } 100% { opacity: 0; } }
          </style>
          <title>center-img-goal</title>
          <desc>Created with Sketch.</desc>
          <path id="c-img-goal5" fill="#235CFF" d="M392,260L220,432L220,200L332,200Z" stroke="none" stroke-width="1" fill-rule="evenodd" opacity="0" transform="translate(392,260) translate(-392,-260)" style="animation: c-img-goal5_t 1s linear 0.3s both, c-img-goal5_o 1.6s linear both;"/>
          <path id="c-img-goal4" fill="#FF234A" d="M48,260L220,88L220,320L108,320Z" stroke="none" stroke-width="1" fill-rule="evenodd" opacity="0" transform="translate(48,260) translate(-48,-260)" style="animation: c-img-goal4_t 1s linear 0.3s both, c-img-goal4_o 1.6s linear both;"/>
          <g id="c-img-goal-1" opacity="0" transform="translate(223.493,259.2) rotate(45) scale(0,0) translate(-89.803,-23.612)" style="animation: c-img-goal-1_t 1s linear 0.3s both, c-img-goal-1_o 1s linear 0.3s both;">
              <path id="c-img-goal3" d="M143.63,275.483C147.522,278.859,152.797,280.812,158.788,280.812C166.154,280.812,172.128,278.086,176.42,274.548L176.42,258.278L178.42,258.278L178.42,276.548C174.128,280.086,168.154,282.812,160.788,282.812C153.697,282.812,147.609,280.076,143.63,275.483ZM174.805,244.772C175.571,245.305,176.31,245.883,177.028,246.504L170.416,254.45C167.516,252.014,164.616,250.622,160.614,250.622C154.756,250.622,150.232,255.552,150.232,261.874C150.232,264.64,151.048,267.075,152.475,268.966C149.834,266.976,148.232,263.75,148.232,259.874C148.232,253.552,152.756,248.622,158.614,248.622C162.616,248.622,165.516,250.014,168.416,252.45L174.805,244.772ZM165.748,266.514L159.744,266.514L159.744,264.514L165.748,264.514L165.748,266.514ZM190.381,275.487C194.191,278.808,199.297,280.812,205.1,280.812C217.628,280.812,227.024,271.358,227.024,259.7C227.024,254.401,225.144,249.596,221.935,245.913C226.35,249.762,229.024,255.38,229.024,261.7C229.024,273.358,219.628,282.812,207.1,282.812C200.21,282.812,194.303,279.988,190.381,275.487ZM199.121,268.657C200.784,269.912,202.859,270.662,205.216,270.662C211.422,270.662,215.54,265.674,215.54,259.7C215.54,257.114,214.715,254.676,213.26,252.758C215.938,254.778,217.54,258.096,217.54,261.7C217.54,267.674,213.422,272.662,207.216,272.662C203.789,272.662,200.956,271.076,199.121,268.657ZM231.869,280L240.856,280L243.756,272.75L259.416,272.75L260.232,274.75L245.756,274.75L242.856,282L231.024,282L231.869,280ZM257.999,241.11L259.154,241.11L276.438,282L264.374,282L263.558,280L274.438,280L257.999,241.11ZM249.856,263.992L256.168,263.992L253.032,255.991L253.644,254.45L258.168,265.992L249.062,265.992L249.856,263.992ZM282.382,280L311.296,280L311.296,272.14L313.296,272.14L313.296,282L282.382,282L282.382,280ZM291.634,241.4L293.634,241.4L293.634,270.14L291.634,270.14L291.634,241.4Z" fill="#FFFFFF" stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-133.69,-235.588)"/>
              <path id="c-img-goal2" d="M155.788,277.812C143.144,277.812,133.69,269.112,133.69,256.7C133.69,244.868,142.97,235.588,155.556,235.588C162.69,235.588,167.736,237.792,172.028,241.504L165.416,249.45C162.516,247.014,159.616,245.622,155.614,245.622C149.756,245.622,145.232,250.552,145.232,256.874C145.232,263.428,149.814,268.126,156.252,268.126C158.978,268.126,161.066,267.546,162.748,266.444L162.748,261.514L154.744,261.514L154.744,253.278L173.42,253.278L173.42,271.548C169.128,275.086,163.154,277.812,155.788,277.812ZM202.1,277.812C189.572,277.812,180.292,268.474,180.292,256.7C180.292,245.042,189.688,235.588,202.216,235.588C214.744,235.588,224.024,244.926,224.024,256.7C224.024,268.358,214.628,277.812,202.1,277.812ZM202.216,267.662C208.422,267.662,212.54,262.674,212.54,256.7C212.54,250.842,208.306,245.738,202.1,245.738C195.952,245.738,191.834,250.726,191.834,256.7C191.834,262.558,196.068,267.662,202.216,267.662ZM226.024,277L243.308,236.11L254.154,236.11L271.438,277L259.374,277L256.416,269.75L240.756,269.75L237.856,277L226.024,277ZM244.062,260.992L253.168,260.992L248.644,249.45L244.062,260.992ZM277.382,277L277.382,236.4L288.634,236.4L288.634,267.14L308.296,267.14L308.296,277L277.382,277Z" fill="#FFFFFF" stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-133.69,-235.588)"/>
          </g>
        </svg>
      `
    }}
  />
);

export default GoalIcon;