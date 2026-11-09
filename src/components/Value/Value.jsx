import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import data from "../../utils/accordion";
import { useState } from "react";

function Value() {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./assets/value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Valur</span>
          <span className="primaryText">Value We Give to you</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <CustomAccordionItem key={i} item={item} uuid={i} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function CustomAccordionItem({ item, uuid }) {
  const [className, setClassName] = useState("collapsed");

  return (
    <AccordionItem className={`accordionItem ${className}`} uuid={uuid}>
      <AccordionItemHeading>
        <AccordionItemButton className="flexCenter accordionButton">
          <AccordionItemState>
            {({ expanded }) => {
              if (expanded && className !== "expanded") {
                setClassName("expanded");
              } else if (!expanded && className !== "collapsed") {
                setClassName("collapsed");
              }
              return null;
            }}
          </AccordionItemState>

          <div className="flexCenter icon">{item.icon}</div>
          <span className="primaryText">{item.heading}</span>
          <div className="flexCenter icon">
            <MdOutlineArrowDropDown size={20} />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className="secondaryText">{item.detail}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
}

export default Value;
