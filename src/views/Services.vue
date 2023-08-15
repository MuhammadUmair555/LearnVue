<template>
  <div class="page-container">
    <div class="page-content">
      <div class="hasData">
        <button class="temp-button" @click="toggle = !toggle">
          Click here
        </button>
        <Transition name="slide-fade">
          <h1 v-show="toggle">Services Page</h1>
        </Transition>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nisi
          rem ad iure, quis consequuntur cumque assumenda totam, ducimus fugiat
          sapiente ipsam adipisci quasi esse architecto officiis dignissimos?
          Enim, nam! sit amet consectetur adipisicing elit. Aliquid, nisi rem ad
          iure, quis consequuntur cumque assumenda totam, ducimus fugiat
          sapiente ipsam adipisci quasi esse architecto officiis dignissimos?
          Enim, nam!
        </p>
      </div>
    </div>
    <div class="no-data-message">
      <h1>No Data Found</h1>
    </div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="/src/assets/images/img1.jpg" alt="" width="100" />
        </div>
        <div class="swiper-slide">
          <img src="/src/assets/images/img2.jpg" alt="" width="100" />
        </div>
        <div class="swiper-slide">
          <img src="/src/assets/images/img3.jpg" alt="" width="100" />
        </div>
        <div class="swiper-slide">
          <img src="/src/assets/images/img4.jpg" alt="" width="100" />
        </div>
        <div class="swiper-slide">
          <img src="/src/assets/images/img1.jpg" alt="" width="100" />
        </div>
        <div class="swiper-slide">
          <img src="/src/assets/images/img2.jpg" alt="" width="100" />
        </div>
        <div class="swiper-slide">
          <img src="/src/assets/images/img3.jpg" alt="" width="100" />
        </div>
        <div class="swiper-slide">
          <img src="/src/assets/images/img4.jpg" alt="" width="100" />
        </div>
        <!-- Add more slides as needed -->
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>
<script>
import { Swiper, Pagination, Navigation } from "swiper";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";
// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
Swiper.use([Pagination, Navigation]);

export default {
  mounted() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      slidesPerView: 1,
      grabCursor: true,
      freeMode: false,
      loop: true,
      mousewheel: false,
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        757: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      },
      // Other Swiper options...
    });
  },
};
</script>
<style>
.swiper-container {
  width: calc(100vw - 23vw);
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 1rem;
  width: 6rem;

  color: #fff;
  /* background: red !important; */
}
.swiper-pagination {
  position: relative;
}
.swiper-slide img {
  width: 100%;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet::before,
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet,
[class^="swiper-button-"] {
  transition: all 0.3s ease;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.swiper-container {
  /* width: 100%;
  height: 18vw; */
  transition: opacity 0.6s ease;
}
.swiper-container.swiper-container-coverflow {
  padding: 1% 0;
}
.swiper-container.loading {
  opacity: 0;
  visibility: hidden;
}
.swiper-container:hover .swiper-button-prev,
.swiper-container:hover .swiper-button-next {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
  color: #fff !important;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  margin-right: 0;
}
.swiper-slide .entity-img {
  display: none;
}
.swiper-slide .content {
  position: absolute;
  top: 40%;
  left: 0;
  width: 66%;
  padding-left: 5%;
  color: #fff;
}
.swiper-slide .content .title {
  font-size: 1.7em;
  font-weight: bold;
  margin-bottom: 30px;
}
.swiper-slide .content .caption {
  display: block;
  font-size: 12px;
  line-height: 1.4;
}

[class^="swiper-button-"] {
  width: 44px;
  opacity: 0;
  visibility: hidden;
}

.swiper-button-prev {
  transform: translateX(50px);
}

.swiper-button-next {
  transform: translateX(-50px);
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 9px;
  position: relative;
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 0.4;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  transform: translate(-50%, -50%);
  border: 0px solid #fff;
  border-radius: 50%;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet:hover,
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
  opacity: 1;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet.swiper-pagination-bullet-active::before {
  border-width: 1px;
}
@media screen and (max-width: 1600px) {
  .swiper-container {
    width: calc(100vw - 27vw);
} 
}
@media (max-width: 1180px) {
  .swiper-slide .content .title {
    font-size: 25px;
  }
  .swiper-slide .content .caption {
    font-size: 12px;
  }
  .swiper-container {
    width: calc(100vw - 33vw);
}
}
@media (max-width: 1023px) {
  /* .swiper-container {
    height: 40vw;
  } */
  .swiper-container.swiper-container-coverflow {
    padding-top: 0;
  }
  .swiper-slide{
    padding: 0 10px 30px 0;
  }
}
@media screen and (max-width: 991px){
  .swiper-container {
  width: unset;
  margin: auto;
}
} 

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 25px !important;
}
</style>