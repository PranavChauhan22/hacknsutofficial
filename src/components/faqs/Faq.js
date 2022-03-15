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

                    What will I get by attending HackNSUT'22? 
                    
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                A 24-hour hackathon with amazing problem statements with a lot of fun and experience with the team. Prizes for winners, and refreshments and participation certificates for all.
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    Are there any specific requirements to participate?
                    
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                If you are an undergraduate student who loves to code, you sure can participate in the Hackathon. No prior experience required.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>
                    Will Participants receive Certificates?
                    
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                Yes, participation certificates will be provided to all the participants.
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    Am I eligible for HackNSUT'22?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                        
                We welcome all undergraduate students, regardless of their stream, branch or college, to take part in HackNSUT'22. Teammates can be of different colleges but must be undergraduates.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    Is there any registration fees to attend HackNSUT'22?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                No registration fee, it's completely FREE! Just bring your learning gadgets along.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    Can the team members be from different colleges?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                Yes, Inter-college teaming is allowed. But college details in the form will be of the team leader only.  Also your team size can vary from 1 to 4.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    Is this hackathon online or offline?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                HackNSUT is a 24-hour offline continuous competition with free food during the stay. Sleeping arrangements will be done for those who need a short nap in between.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    How should we prepare for the hackathon on campus?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                Allowed materials will be pen, pencil, geometry box, notebooks, snacks, laptops, chargers, mobile phones , graphic tablets, headphones, VR headsets, airpods etc.. Refer to our website to see rules and guidelines.

                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    What I am not allowed to carry during Hackathon?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                You not allowed to carry any sharp object, any printed material , ETF (Exchange-Traded Fund), alcoholic beverages, any narcotic substances, cigarettes,  etc.


                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem style={{marginTop:"20px"}}>
                <AccordionItemHeading>
                    <AccordionItemButton style={{backgroundColor:"#7935ff",color:"white",borderTopLeftRadius:"20px"}}>

                    How do I form a team?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={{backgroundColor:"white",color:"#7935ff",borderBottomLeftRadius:"20px"}}>
                Team can be formed between undergraduate students from same or different University/college.

                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}