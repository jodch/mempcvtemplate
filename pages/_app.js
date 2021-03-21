import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Rellax from "rellax";
import { useEffect } from "react";
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
function MyApp({ Component, pageProps }) {

  // Animations are done using rellax library
  // https://dixonandmoe.com/rellax/
  
  useEffect(()=>{
    if (typeof window != undefined){
      //about rellax 
      new Rellax(".title", { // <---- Via class name
        speed: -1,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".circletop", { // <---- Via class name
        speed: -5,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".circle", { // <---- Via class name
        speed: 1,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });

      //formation rellax 
      new Rellax(".form-dots", {
        // <---- Via class name
        speed: 3,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".form-exptitle", {
        // <---- Via class name
        speed: 15,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".form-expcont", {
        // <---- Via class name
        speed: -3.5,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".form-textcol", {
        // <---- Via class name
        speed: -2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });

      //projects rellax
      new Rellax(".pro-redcircle", {
        // <---- Via class name
        speed: -1,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".pro-outline", {
        // <---- Via class name
        speed: 1.5,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".pro-title", {
        // <---- Via class name
        speed: -2,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".pro-line", {
        // <---- Via class name
        speed: -1,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      //skills rellax
      new Rellax(".sk-redcircle", {
        // <---- Via class name
        speed: 3,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".sk-line", {
        // <---- Via class name
        speed: 1.5,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".sk-title", {
        // <---- Via class name
        speed: -1,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".sk-subtitle", {
        // <---- Via class name
        speed: 3,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".sk-text", {
        // <---- Via class name
        speed: -1,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });

      new Rellax(".sk-ball2", {
        // <---- Via class name
        speed: 3,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
      new Rellax(".sk-line2", {
        // <---- Via class name
        speed: 1,
        center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });
    }
  })
  return <Component {...pageProps} />
}

export default MyApp
