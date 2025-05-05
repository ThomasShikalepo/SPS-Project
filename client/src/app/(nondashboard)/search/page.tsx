"use client"

import Loading from '@/components/Loading';
import { useGetCoursesQuery } from '@/state/api';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import CourseCardSearch from '@/components/CourseCardSearch';
import SelectedCourse from './SelectedCourse';

const Search = () => {
    const searchParams = useSearchParams();
    //identifying the id
    const id = searchParams.get("id");
    const {data: courses, isLoading, isError} = useGetCoursesQuery({});
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const router = useRouter();


    useEffect(() => {
if (courses){
    if(id){
        //if id exist grab the course and find the course id we have and see if it is equal to id in search params
        const course = courses.find((c) => c.courseId === id);
        setSelectedCourse(course || courses[0]);
    }
    else {
        //set the selected course to be the first value in the list of array
setSelectedCourse(courses[0]);
    }
    }
}, [courses, id]);

if(isLoading) return <Loading />;
if (isError || !courses) return <div> Failed to fetch  course</div>;

const handleCourseSelect  =(course: Course) => {
    setSelectedCourse(course);
    router.push(`/search?id=${course.courseId}`);
};

const handleEnrollNow = (courseId: string) =>{
  //triggered when someone clicks enroll now
  router.push(`/checkout?step=1&id=${courseId}&showSignUp=false`)
};

  return( 
  <motion.div
  initial={{ opacity: 0 }}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  className="search"
  >
    <h1 className="search__title">List of available courses</h1>
    <h2 className="search__subtitle">{courses.length} courses available</h2>
    <div className="search__content">
    <motion.div
    initial={{y:40, opacity: 0}}
    animate={{y:0 , opacity:1}}
     //determine when it gets animated, and since its a list every course gets delayed 0.2 seconds
    transition ={{duration: 0.5, delay: 0.2}}
  className="search__courses-grid"
  
    >
      {/*the course and passing in thethe course info we grabed from the course*/}
     {courses.map((course) => (
    <CourseCardSearch
    key={course.courseId}
      course={course}
      isSelected ={selectedCourse?.courseId === course.courseId}
      onClick={() => handleCourseSelect(course)}
      />
      ))}
    </motion.div>

    {selectedCourse && (
        <motion.div
        initial={{y:40, opacity: 0}}
        animate={{y:0 , opacity:1}}
         //determine when it gets animated, and since its a list every course gets delayed 0.2 seconds
        transition ={{duration: 0.5, delay: 0.5}}
      className="search__selected-course"
  >
<SelectedCourse
course={selectedCourse}
handleEnrollNow={handleEnrollNow}
/>
  </motion.div>      
    )}
    </div>
  </motion.div>
  );
  
};

export default Search