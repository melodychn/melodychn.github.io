(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(50)},28:function(e,t,a){},29:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/IMG_1385.54b59e39.jpeg"},40:function(e,t,a){e.exports=a.p+"static/media/scrolldown.32efe70e.png"},41:function(e,t,a){e.exports=a.p+"static/media/LAHacks1.71a1a69f.png"},42:function(e,t,a){e.exports=a.p+"static/media/LAHacks2.74303c04.png"},43:function(e,t,a){e.exports=a.p+"static/media/LAHacks.3933ebea.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/ideaHacksGroup.3850500f.JPG"},45:function(e,t,a){e.exports=a.p+"static/media/resumewebsite.238aeaee.pdf"},46:function(e,t,a){e.exports=a.p+"static/media/chexplain2.4ac1f766.gif"},47:function(e,t,a){e.exports=a.p+"static/media/bruinracing.d41d5598.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/ieee.7480fd40.gif"},49:function(e,t,a){e.exports=a.p+"static/media/mouse1.9de18b70.jpg"},50:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(10),c=a.n(r),i=a(2),m=a(3),o=a(5),s=a(4),u=a(6),E=(a(28),a(29),a(7)),d=a(8),h=a(0),b=a(13),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={onExp:!1,onProj:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=n.a.createElement("ul",{className:"explist"},n.a.createElement("li",{className:"navitem"}," ",n.a.createElement(E.Link,{activeClass:"active",to:"proj1",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){e.setState({onProj:!0})}},"- ResistorReader")),n.a.createElement("li",{className:"navitem"}," ",n.a.createElement(E.Link,{activeClass:"active",to:"proj2",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){e.setState({onProj:!0})}},"- SmartLock"))),a=n.a.createElement("ul",{className:"explist"},n.a.createElement("li",{className:"navitem"}," ",n.a.createElement(E.Link,{activeClass:"active",to:"exp_1",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){e.setState({onExp:!0})}},"- UCLA HCI Research")),n.a.createElement("li",{className:"navitem"}," ",n.a.createElement(E.Link,{activeClass:"active",to:"exp_2",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){e.setState({onExp:!0})}},"- Bruin Racing")),n.a.createElement("li",{className:"navitem"},n.a.createElement(E.Link,{activeClass:"active",to:"exp_3",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){e.setState({onExp:!0})}},"- IEEE OPS")));return n.a.createElement("header",null,n.a.createElement("div",{className:"logo"},n.a.createElement(E.Link,{activeClass:"active",to:"homePage",spy:!0,smooth:!0,offset:0,duration:500},"Melody Chen")),n.a.createElement("div",{className:"navbar"},n.a.createElement("ul",{className:"navitems"},n.a.createElement("li",{className:"navitems"},n.a.createElement(E.Link,{activeClass:"active",to:"aboutme",spy:!0,smooth:!0,offset:0,duration:500},"About Me")),n.a.createElement("li",{className:"navitems"},n.a.createElement(E.Link,{activeClass:"active",to:"exp",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){e.setState({onExp:!0})},onSetInactive:function(){e.setState({onExp:!1})}},"Experiences"),this.state.onExp&&a),n.a.createElement("li",{className:"navitems"},n.a.createElement(E.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){e.setState({onProj:!0})},onSetInactive:function(){e.setState({onProj:!1})}},"Projects"),this.state.onProj&&t))),n.a.createElement("div",{className:"LogoSets"},n.a.createElement(h.b.Provider,{value:{color:"white",size:"2.8vw"}},n.a.createElement("div",null,n.a.createElement("a",{href:"https://github.com/melodychn",target:"_blank"},n.a.createElement(d.a,null)),"\xa0",n.a.createElement("a",{href:"https://www.linkedin.com/in/melody-chen-179732144/",target:"_blank"},n.a.createElement(d.b,null)),"\xa0",n.a.createElement("a",{href:"mailto:melodyc1205@ucla.edu",target:"_blank"},n.a.createElement(b.a,null))))))}}]),t}(l.Component),f=(l.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e)))._onMouseMove=function(e){var t=a.refs.titleContainer.clientWidth,l=a.refs.titleContainer.clientHeight,n=e.nativeEvent.offsetX/t*100,r=e.nativeEvent.offsetY/l*100;a.setState({x:n,y:r})},a.state={x:0,y:0},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t={"--maskX":e.x,"--maskY":e.y};return n.a.createElement("div",{className:"Homepage",id:"homePage"},n.a.createElement("div",{className:"Photo"},n.a.createElement("img",{src:a(39)})),n.a.createElement("div",{className:"titleContainer",onMouseMove:this._onMouseMove,ref:"titleContainer",style:t},n.a.createElement("div",{className:"titleWrapper"},n.a.createElement("h1",null,"Computer Engineering UCLA '22"))),n.a.createElement("h2",null," \u2014\u2002 Software Engineer building a better world.\u2002\u2014"),n.a.createElement("div",{className:"LogoSets2"},n.a.createElement(h.b.Provider,{value:{color:"white",size:"3.2vw"}},n.a.createElement("div",null,n.a.createElement("a",{href:"https://github.com/melodychn",target:"_blank"},n.a.createElement(d.a,null)),"\xa0\xa0\xa0\xa0\xa0",n.a.createElement("a",{href:"https://www.linkedin.com/in/melody-chen-179732144/",target:"_blank"},n.a.createElement(d.b,null)),"\xa0\xa0\xa0\xa0\xa0",n.a.createElement("a",{href:"mailto:melodyc1205@ucla.edu",target:"_blank"},n.a.createElement(b.a,null))))),n.a.createElement("div",{className:"Arrow"},n.a.createElement(E.Link,{activeClass:"active",to:"aboutme",spy:!0,smooth:!0,offset:0,duration:500},n.a.createElement("img",{src:a(40),height:"50"}))))}}]),t}(l.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid",id:"projects"},n.a.createElement("h1",null,"\u2014\u2002projects\u2002\u2014"),n.a.createElement("h2",{id:"proj1"}," ResistorReader (LA Hacks 2019)"),n.a.createElement("div",{className:"image"},"\u2002\u2002\u2002",n.a.createElement("img",{src:a(41)}),"\u2002\u2002",n.a.createElement("img",{src:a(42)})),n.a.createElement("div",{className:"explan"},n.a.createElement("p",null,"Project done in collaboration with Carleton Z., Joshua L., Grace Z., and Ryan T."),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/melodychn/ResistorReader",target:"_blank"},"Link to Github Repo")),n.a.createElement("p",null,n.a.createElement("em",null,"Inspiration:")," As electrical and computer engineers, our team inevitably plays around often with circuits. A large part of circuit building consists of selecting the proper resistor for specific applications by looking at its color bands. Our team member Ryan is directly impacted because he is color blind. We wanted to mitigate the annoyance of constantly squinting to see the color bands on the resistor and pulling up a resistance chart each time to identify the resistance, using computer vision."),n.a.createElement("p",null,n.a.createElement("em",null,"What it does:")," Our Resistor Reader identifies the color of the bands and the order in which they occur on 4 band resistors. It plots which colors have been detected on the console, and returns the correct resistance in Ohms."),n.a.createElement("p",null,n.a.createElement("em",null,"How we built it:")," Using Python, numpy, scipy, and matplotlib we build a computer vision program to read the resistance of a resistor."),n.a.createElement("p",null,n.a.createElement("em",null,"My Contribution:")," Refined color identification algorithm by integrating Clarifai API into our algorithm to help us identify background color of resistor in order to differentiate non-critical color bars from critical bars.  ")),n.a.createElement("div",{className:"descrp1"},"Resistor image is first cropped and then pixels from each column are averaged to obtain only color bars.  Then, we distinguish each color bar from the background color identified. Color bars are then categorized in to possible resistor bar colors (shown on the right). We then calculate the number of bars from each color to obtain the resistence of the resistor image."),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"image2"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("img",{src:a(43)})),n.a.createElement("div",{className:"divider2"}),n.a.createElement("div",{className:"divider3"}),n.a.createElement("h2",{className:"smartlock",id:"proj2"}," SmartLock (IdeaHacks 2019)"),n.a.createElement("iframe",{src:"https://player.vimeo.com/video/352337351",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),n.a.createElement("img",{className:"group2",src:a(44)}),n.a.createElement("div",{className:"explan2"},n.a.createElement("p",null,"Project done in collaboration with Isabel D., John D., Joshua L., and Grace Z."),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/jamqd/SmartLock",target:"_blank"},"Link to Github Repo")),n.a.createElement("p",null,n.a.createElement("em",null,"Inspiration: "),"The theme to IdeaHacks this year is Travel. We decided to build a SmartLock to improve on existing lock systems. Our goal is to integrate facial recognition into existing lock systems, so just the owner and selected faces, will have access to what the lock is protecting."),n.a.createElement("p",null,n.a.createElement("em",null,"Features: "),n.a.createElement("ul",null,n.a.createElement("li",null,"Register multiple faces into the lock, and these faces will be able to lock and unlock the lock at anytime. "),n.a.createElement("li",null,"In lock mode, the lock notifies the owner if anyone tries to unlock/move the lock through text notification."))),n.a.createElement("p",null,n.a.createElement("em",null,"Implementation: "),n.a.createElement("ul",null,n.a.createElement("li",null,"For the hardware, we used solenoid lock, Raspberry Pi, Pi Camera, and Gyroscope.  The components were connected through breadboards, jumper wires, resistors..etc."),n.a.createElement("li",null,"In Python, we used the Raspberry Pi to control the above components.  The facial recognition was implemented with Microsoft Azure API.  Text alert was supported by the Twilio API.")))),n.a.createElement("div",{className:"others"},n.a.createElement("p",null," More projects will be updated soon! For now please visit ",n.a.createElement("a",{href:"https://github.com/melodychn",target:"_blank"},"my github")," for my other projects.")))}}]),t}(l.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={arrowClicked:!1,arrowClicked2:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"aboutMe",id:"aboutme"},n.a.createElement("h1",null,"\u2014\u2002a brief introduction\u2002\u2014"),n.a.createElement("div",{className:"divider4"}),n.a.createElement("div",{className:"aboutme1"},n.a.createElement("p",null,"Hello! I am Melody Chen, a rising second-year computer engineering student at UCLA.  Beyond my studies, I am passionate about ",n.a.createElement("em",null,"artificial intelligence"),", especially its applications in ",n.a.createElement("em",null,"software development"),". This summer, I am a ",n.a.createElement("em",null,"NSF REU research intern")," at the ",n.a.createElement("em",null,"Human Computer Interaction Research Group @ UCLA"),", working on ",n.a.createElement("em",null,"Explainable AI")," projects under ",n.a.createElement("a",{href:"https://xiangchen.me/",target:"_blank"},"Professor Anthony Chen"),"."),n.a.createElement("div",{className:"divider5"}),n.a.createElement("p",null,"Currently I am seeking",n.a.createElement("em",null," internships for the summer of 2020"),", so please feel free to reach me by ",n.a.createElement("a",{href:"mailto:melodyc1205@ucla.edu",target:"_blank"},"email")," or any of ",n.a.createElement("a",{href:"https://www.linkedin.com/in/melody-chen-179732144/",target:"_blank"},"my social links.")),n.a.createElement("div",{className:"divider5"}),n.a.createElement("h5",null,n.a.createElement("a",{href:a(45),target:"_blank"},"MyResume.pdf"))),n.a.createElement("h4",null,"\u2014\u2002skillsets\u2002\u2014"),n.a.createElement("div",{className:"ProgLang"},n.a.createElement("h2",null,"Programming Languages"),n.a.createElement("ul",null,n.a.createElement("li",null,"-\u2002C/C++"),n.a.createElement("li",null,"-\u2002Java"),n.a.createElement("li",null,"-\u2002Python")),n.a.createElement("ul",{className:"list2"},n.a.createElement("li",null,"-\u2002JavaScript"),n.a.createElement("li",null,"-\u2002HTML"),n.a.createElement("li",null,"-\u2002CSS"))),n.a.createElement("div",{className:"Frame"},n.a.createElement("h2",null,"Frameworks/tools"),n.a.createElement("ul",null,n.a.createElement("li",null,"-\u2002React"),n.a.createElement("li",null,"-\u2002Linux"),n.a.createElement("li",null,"-\u2002Git"))),n.a.createElement("div",{className:"Hardware"},n.a.createElement("h2",null,"Hardware"),n.a.createElement("ul",null,n.a.createElement("li",null,"-\u2002Raspberry Pi"),n.a.createElement("li",null,"-\u2002Arduino"),n.a.createElement("li",null,"-\u2002Soldering"))))}}]),t}(l.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={arrowClicked:!1,arrowClicked2:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"experience",id:"exp"},n.a.createElement("h1",{className:"exptitle",id:"exp_1"},"\u2014\u2002experiences\u2002\u2014"),n.a.createElement("h3",null,"Summer 2019 (Current) \u2002\u2014\u2002 NSF REU Intern @ UCLA HCI Research"),n.a.createElement("div",{className:"divider5"}),n.a.createElement("div",{className:"divider5"}),n.a.createElement("div",{className:"divider5"}),n.a.createElement("div",{className:"exp1"},n.a.createElement("img",{className:"chexImage",src:a(46)})),n.a.createElement("div",{className:"Descrp"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),"v1.0 of Chexplain built with ",n.a.createElement("em",null,"JavaScript (React.js)"),", ",n.a.createElement("em",null,"Firebase")," for image upload, sass for styling."),n.a.createElement("div",{className:"explan"},n.a.createElement("p",null,"Description: Working with PhD Candidate Yao Xie on her latest XAI project",n.a.createElement("em",null," Chexplain"),", to be submitted to ",n.a.createElement("em",null,"ACM CHI 2020"),". Chexplain is envisioned to be a ",n.a.createElement("em",null,"diagnostic system")," for Chest X-ray Images. The novelty of the system is its ability to be ",n.a.createElement("em",null,"understandable")," by users of non-computational background, mainly general physicians, through the use of ",n.a.createElement("em",null,"saliency mapping")," to generate annotations directly on images and ",n.a.createElement("em",null,"interactive data presentation"),"."),n.a.createElement("p",null,"Accomplishments: Built the ",n.a.createElement("em",null,"frontend prototype")," shown on the left used to present to physicians and radiologists during co-design sessions."),n.a.createElement("p",null,"What I am Working On: Researching and ",n.a.createElement("em",null,"implementing saliency mapping")," to existing CheXpert Model.")),n.a.createElement("div",{className:"divider2"}),n.a.createElement("div",{className:"exp2"},n.a.createElement("div",{className:"divider3"}),n.a.createElement("h3",{id:"exp_2"},"2018 - 2019 School Year\u2002\u2014\u2002 Data Acquisition @ Bruin Racing Super Mileage Vehicle"),n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:a(47)}))),n.a.createElement("div",{className:"Descrp2"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),"Electrical system of the SMV 2019 Electric Vehicle. Shown on the mid-left of the system is the DAQ System I worked on."),n.a.createElement("div",{className:"explan2"},n.a.createElement("p",null,"Description: Part of ",n.a.createElement("a",{href:"https://www.bruinracing.com/smv/",target:"_blank"},"UCLA Bruin Racing"),"'s ",n.a.createElement("em",null,"Super Mileage Electric Vehicle Team"),". Worked on fully electric vehicle that attended the ",n.a.createElement("a",{href:"https://www.shell.com/make-the-future/shell-ecomarathon/americas.html",target:"_blank"},"Shell Eco Marathon 2019"),". Part of the Data Acquisition Team focused on using the Arduino and different sensors to acquire data."),n.a.createElement("p",null,"Accomplishments:"),n.a.createElement("p",{className:"smallerP"},"- Wrote ",n.a.createElement("em",null,"C code")," with the Arduino for the ",n.a.createElement("em",null,"temperature and hall effect sensors")," to acquire crucial data to increase efficiency of electric vehicle."),n.a.createElement("p",{className:"smallerP"},"- Assist in the development of a ",n.a.createElement("em",null,"Joulmeter system")," using Arduino, voltage divider, current shunt, and amplifier.")),n.a.createElement("div",{className:"divider2"}),n.a.createElement("div",{className:"exp2",id:"exp_3"},n.a.createElement("div",{className:"divider3"}),n.a.createElement("h3",null,"2018 - 2019 School Year\u2002\u2014\u2002 IEEE Open Project Space"),n.a.createElement("div",{className:"image2"},n.a.createElement("img",{src:a(48)}),n.a.createElement("img",{src:a(49)}))),n.a.createElement("div",{className:"Descrp3"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),'Year-end capstone project where my team built the "rodent" shown to successfully navigate through a difficult part of the maze above.'),n.a.createElement("div",{className:"explan2"},n.a.createElement("p",null,"Description: Part of ",n.a.createElement("a",{href:"http://ieeebruins.org/",target:"_blank"},"UCLA IEEE"),"(Institute of Electrical and Electronics Engineers)'s ",n.a.createElement("em",null,"Open Project Space")," Program. Selected to participate in a year-long program designed to provide ",n.a.createElement("em",null,"hands-on foundational knowledge")," in the field of tech and hardware."),n.a.createElement("p",null,"Accomplishments:"),n.a.createElement("p",{className:"smallerP"},"- Learned various ",n.a.createElement("em",null,"electrical engineering skills"),", such as soldering, breadboarding, and ",n.a.createElement("em",null,"PCB Design"),"."),n.a.createElement("p",{className:"smallerP"},"- Built curcuit that has ability to ",n.a.createElement("em",null,"sense the distance")," of any object by using ",n.a.createElement("em",null,"infrared diodes")," to send out infrared light, and ",n.a.createElement("em",null,"phototransistors")," to receive the IR light."),n.a.createElement("p",{className:"smallerP"},"- Implemented Red Light, Green Light Game using two microcontrollers that transmits data to each other through",n.a.createElement("em",null," serial communications link"),"."),n.a.createElement("p",{className:"smallerP"},'- Built a "rodent" that successfully ',n.a.createElement("em",null,"navigates through maze")," with self-designed PCB (IR Sensors, capacitors, resistors), the Arduino, Motor Driver, and ",n.a.createElement("em",null,"PD control loop"),".")))}}]),t}(l.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,null),n.a.createElement(p,null),n.a.createElement(g,null),n.a.createElement(y,null),n.a.createElement(v,null))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.a3f1b52a.chunk.js.map