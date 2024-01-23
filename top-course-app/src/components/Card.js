import {FcLikePlaceholder, FcLike} from 'react-icons/fc'
import React from 'react';
import { toast } from 'react-toastify';

function Card({course, likedIcons, setlikedIcons}){
    console.log(course);

    function likeHandler(){
        //like hai
        if(likedIcons.includes(course.id)){
            setlikedIcons( (prev) => prev.filter( (cid)=>(cid !== course.id)))
            toast.warning("Like removed")
        }
        //like nahi hai
        else{
            if(likedIcons.length == 0){
                setlikedIcons([course.id])
            }
            else{
                setlikedIcons( (prev) => [...prev, course.id]);
            }
            toast.success("Like Successfully")
        }
    }

    return (
        <div className='card'>
            <div className='poster'>
                <img src={course.image.url} alt={course.image.alt}/>
            </div>
            <button className='like' onClick={likeHandler}>
            {
                likedIcons.includes(course.id) ? (<FcLike/>) : (<FcLikePlaceholder/>)
            }
            </button>
            <div className='topic-dev'>
                <h3 className='topic'>
                    {course.title}
                </h3>
            </div>
            <div className='desc-div'>
                <h4 className='desc'>
                {
                    course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
                }
                </h4>
            </div>        
        </div>
    )
}
export default Card;