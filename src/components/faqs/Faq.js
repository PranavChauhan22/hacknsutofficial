import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from "@react-hook/window-size";
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import "./Faq.css"

export default function Faq() {
    const onlyWidth = useWindowWidth();
    return (
        <Accordion style={{width:(300<onlyWidth-500)?onlyWidth-500:300,margin:"auto",marginTop:"20px",marginBottom:"40px"}}>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                        What is HackNSUT?
                    
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                HackNSUT is a fraternity of programmers, developers and hackers aimed primarily at addressing real life problems, brainstorming innovative ideas and implementing the ingenious solutions into working prototypes.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    What if I don’t know how to code?
                    
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                Not a problem! It’s entirely irrelevant what your experience is going into a hackathon, it’s more about your interest in technology. IEEE NSUT is passionate about making their hackathons very welcoming and beginner-friendly.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                        Do I need a team?
                    
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                While you do have the option of working alone, HackNSUT is a team event so working with others is encouraged. There are a few ways to find teammates: You can pick your team from people you already know, post in our meetup group to other members, find a team member via DevPost, meet them at a pre-hackathon info sessions, or at the kickoff party.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

How much does it cost?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                        
FREE. Free for participants.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

Will there be prizes?
                    
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                        Yes, everyone would be recognized for their efforts.

                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}