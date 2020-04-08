import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div id = "page-about">
                <section id="2">
                    <div className="pagePadding">
                        {/* <h1 style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "72px", textAlign: "center"}}>functional appealing modular</h1> */}
                        <p style={{ fontFamily: "Montserrat", fontWeight: "200", fontSize: "21px", textAlign: "center", marginTop:"64px", lineHeight: "29px"}}>
                            Three words to sum up my approach to tackling challenges.
                            Functional - taking the optimised route to (20 words summary)
                        </p>
                        <p style={{ fontFamily: "Montserrat", fontWeight: "200", fontSize: "21px", textAlign: "center", marginTop: "32px", lineHeight: "29px"}}> 
                            Manchmal muss man Dinge einfach anders machen als die anderen.
                            Doch gerade in dem sehr traditionellen Tapeziergewerbe
                            war das eine ziemliche Herausforderung. Mein Ziel ist es,
                            dieses alte Handwerk wiederzubeleben und ihm neues Leben einzuhauchen,
                            genauso wie ich es bei jedem meiner Möbelstücke mache – mit viel Detailverliebtheit,
                            Leidenschaft und dem Anspruch, immer das Beste rauszuholen.
                            Ich bin vielleicht nicht die klassischen Wege gegangen,
                            doch das war schon gut so, denn sonst wäre ich nicht da,
                            wo ich jetzt bin. Und meine Möbel würden nicht so aussehen,
                            wie sie jetzt aussehen. Ewig schön, (80 words Bio) 
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;