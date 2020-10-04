import React, { useState } from "react";
import Content from "../../components/Content.jsx";
import Navigation from "../../components/Navigation.jsx";
import LessonCard from "../education/lessonCard.jsx";
import { lessons } from 'assets/data/mockup_lessons';
import Education from "../education/education.jsx";
import Hero from "../../components/Hero.jsx";
import hero1 from '../../components/img/hero1.jpg';
import CategoryCard from "../../components/CategoryCard";
import Footer from "../../components/footer/footer.jsx";
import "../../components/style.css";

function Home(){
    const [data, setData] = useState(lessons);
       
    
  return (
      <div>
          {/* <p>token (for test): {window.token}</p> */}
          <Navigation />
          <Hero img={hero1} text="Manage your business smarter"/>
          <div className="container">
            
            <div className="row">
                <Content header="This Week's Learning Status" content=""/>
                <Content header="Your favorite courses"/>
                <Content header="Your favorite courses"/>
            </div>
            <div className="row">
                <div className="col">
                    <Education />
                </div>
            </div>
            <div className="row">
                <CategoryCard text="IT" />
                <CategoryCard text="Finance" />
                <CategoryCard text="Marketing" />
                <CategoryCard text="Market Research" />
                <CategoryCard text="Customer Service" />
                <CategoryCard text="Design" />
                <CategoryCard text="Operations" />
                <CategoryCard text="Accounting" />
            </div>
            <div className="row">
                <div className="col banner-container">
                    {/* <div class="banner-text-container"> */}
                        <h2 className="banner-text h2-white">Banner</h2>
                    {/* </div> */}
                </div>
            </div>
               
            
          </div>
      </div>
    );
}

export default Home;