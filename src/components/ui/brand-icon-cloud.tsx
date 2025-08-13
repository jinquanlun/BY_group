import { Cloud } from "react-icon-cloud";
import type { ICloud } from "react-icon-cloud";

// Local brand SVGs (import as URLs via Vite)
import cocaCola from "../../../svglogo/coca-cola-2021.svg";
import pepsi from "../../../svglogo/pepsi.svg";
import nike from "../../../svglogo/nike-4-2.svg";
import mcdonalds from "../../../svglogo/mcdonalds-7.svg";
import starbucks from "../../../svglogo/starbucks-coffee.svg";
import costco from "../../../svglogo/costco-wholesale.svg";
import volkswagen from "../../../svglogo/volkswagen-10.svg";
import haier from "../../../svglogo/haier-logo.svg";
import hilton from "../../../svglogo/hilton-international.svg";
import philips from "../../../svglogo/philips.svg";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 24,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.03,
    minSpeed: 0.015,
  },
};

const brands = [
  cocaCola,
  pepsi,
  nike,
  mcdonalds,
  starbucks,
  costco,
  volkswagen,
  haier,
  hilton,
  philips,
];

export function BrandIconCloud() {
  return (
    // @ts-ignore - library types are permissive about children
    <Cloud {...cloudProps}>
      {brands.map((src, idx) => (
        <a
          key={idx}
          href="#"
          onClick={(e) => e.preventDefault()}
          title=""
          aria-label="brand"
        >
          <img
            src={src}
            alt="brand logo"
            width={64}
            height={64}
            style={{ objectFit: "contain" }}
          />
        </a>
      ))}
    </Cloud>
  );
}


