import { useState } from "react";
import Card from "./Card";

function Cards({courses, category}){

    const [likedIcons, setlikedIcons] = useState([]);

    //this will return array of all courses
    let cardsArr = [];
    
        const allcards = () => {
            if(category === "All"){
                let allCourses = [];
                Object.values(courses).forEach((courseCategory) => {
                    courseCategory.forEach((courseData) =>{
                        allCourses.push(courseData);
                    })
                })
                return allCourses
            }
            else{
                return courses[category];
            }
        }

    return(
        <div className="cards">
            {allcards().map( (course) => {
                return (
                    <div>
                        <Card key={course.id} course = {course} likedIcons={likedIcons} setlikedIcons={setlikedIcons}/>
                    </div>
                )
            })}
        </div>
    );
}

export default Cards 