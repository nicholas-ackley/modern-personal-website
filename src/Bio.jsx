import React from 'react'
import './Bio.css'
import piano from './images/teacher.png'
import backround from './images/vertical.png'
import White from './images/steinway.png'
import Teacher from './images/gallery4.jpg'
const Bio = () =>
    {

        return(
            <>
            <div className='bio-box'>
                <div className="description"><p><b><i>The University of Texas at Dallas</i>...</b></p>
                    <div className="description2"><p><b>Classical Musician</b></p></div>
                </div>
            <div className="name">Nicholas Ackley
                <div className="pianist">
                    Pianist
                </div>
                    <div className="outline-container">
                        <img src={piano}></img>
                    </div>
                <div className="backdrop"></div>
            </div>
            <div className="border"></div>
                {/* <div className="teacher-container"> */}
                    {/* <img src={Teacher}></img> */}
            {/* </div> */}
                <div className="competition-info">
                    <div className="black-box-info1"></div>
                        <div className="competition-title"><h1>Masterly <br/>Performer<br/>Of Classical Music</h1>
                            <div className="text-box"><p>
                            As an accomplished classical musician with over thirteen years of dedicated solo study, I have developed a profound mastery and an extensive repertoire spanning numerous classical 
                            genres. My journey in music has been marked by participation in various prestigious competitions, where I have honed my skills and deepened my interpretative understanding of complex
                            compositions. Additionally, my experience playing with a renowned orchestra has not only enriched my performance capabilities but also allowed me to collaborate with other talented
                            musicians, creating deeply resonant and finely tuned performances that communicate the nuances of classical music to diverse audiences. This blend of solo study, competitive
                            excellence, and orchestral collaboration defines my musical career and continues to fuel my passion for classical music.</p></div>
                            </div>
                        </div>
                    <div className="competition-info1">
                        <div className="competition-title1"><h1>Comeptitive <br/>Performer<br/></h1>
                            <div className="text-box1"><p>
                            My musical journey, spanning over 13 years, has been profoundly shaped by my dedication to classical piano and percussion. Participating in piano competitions has been a foundational aspect of my musical development, offering not just a stage to showcase my skills but also opportunities to tackle technically demanding pieces that refine both my abilities and stage presence. These experiences have taught me the importance of resilience and thorough preparation, enabling me to deliver confident and polished performances under pressure.
In addition to my piano expertise, I have also invested over six years in mastering percussion, playing in both an orchestra and a marching band. This experience has enhanced my understanding of rhythmic structures, ensemble dynamics, and leadership further enriching my musical skill set. My senior year in High School, I held a leader ship position teaching incoming freshman or underclassmen our procedures as a prestigious music program. My versatility in these two distinct musical areas demonstrates not only technical proficiency but also a deep appreciation and understanding of music as a comprehensive discipline.

</p></div>
                            </div>
                        </div>
                    <div className="competition-info2">
                        <div className="competition-title2"><h1>Dallas <br/>Asiam American <br/> Youth Orchestra</h1>
                            <div className="text-box2"><p>
                                As the lead pianist for a distinguished youth orchestra, I've had the enriching experience of performing alongside a talented ensemble, 
                                mastering complex musical pieces that challenged both my technical skills and artistic expression. This role not only honed my ability to collaborate
                                 effectively with fellow musicians, it also deepened my appreciation for the nuances of group dynamics and the importance of every role within an 
                                 ensemble. Through regular, disciplined practice sessions, I developed a rigorous work ethic and a commitment to consistency, both essential traits
                                  for achieving musical excellence. Additionally, teaching younger musicians about music not only broadened my communicative skills but also 
                                  reinforced my understanding of musical theory and performance techniques, ensuring that I could pass on valuable knowledge to the next generation 
                                  of performers. This multifaceted involvement with the youth orchestra has been a cornerstone of my musical career, providing both professional
                                   growth and personal satisfaction.</p></div>
                            </div>
                        </div>
                    </div>
            <img className='white'src={White}></img>
    

      
            
            </>
        )
    }
    export default Bio