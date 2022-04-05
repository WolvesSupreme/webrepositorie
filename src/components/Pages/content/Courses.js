import React from "react";
import courseImg from "../../../assets/course.png";

const Courses = () => {
  const [Browse] = React.useState({
    title: "Browse Our Top Courses",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit nec cras himenaeos vehicula rhoncus dis dictumst praesent, cubilia habitasse vitae eros magna suscipit proin turpis dapibus tortor mi vel felis torquent.",
  });
  return (
    <section id="courses">
      <div className="contenido course-row">
        <article className="course-left-col">
          <div className="course-text">
            <h3 className="course-text-title">
              {Browse.title} <br />
            </h3>
            <p>{Browse.text}</p>

            <article className="course-btn">
              <button className="common-btn">View All Courses</button>
            </article>
          </div>
        </article>

        <article className="course-right-col">
          <img src={courseImg} alt="" />
        </article>
      </div>
    </section>
  );
};

export default Courses;
