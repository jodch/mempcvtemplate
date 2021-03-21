import styles from "./projects.module.scss";
import { useState } from "react";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

import projectsjson from "./projects.json";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [displayProjects, setDisplayProjects] = useState(projectsjson);

  return (
    <div id="projects" className={styles.projectscont}>
      <div className={styles.titlerow}>
        <div className={styles.titlecomp}>
          <div className={styles.blueline + " pro-line"} />
          <p className="pro-title">
            Projects <br /> as developer
          </p>
        </div>
        <div className={styles.outline + " pro-outline"} />

        <div className={styles.redcircle + " pro-redcircle"} />
      </div>
      {/* PROYECT cards */}
      <div className={styles.projectrow}>
        <Swiper
        grabCursor={true}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={5}
          breakpoints={{
            640: {
              width:640,
              slidesPerView: 1.2,
              centeredSlides: true,
            },
            768: {
              width:768,
              slidesPerView: 2,
              centeredSlides: true,
            },
            1100: {
              width:1100,
              slidesPerView: 3,
              centeredSlides: true
            },
          }}
        >
          {displayProjects.map((project, key) => {
            return (
              <SwiperSlide key={key} style={{ margin: "0 0 30px 0" }}>
                <ProjectCard project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div id="skills"></div>
    </div>
  );
}
