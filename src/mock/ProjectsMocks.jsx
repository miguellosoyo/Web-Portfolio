//Image Projects
import p_quimikal from "../assets/img/imgProjects/p_quimikal.jpg";
import p_discounts from "../assets/img/imgProjects/p_discountscitys.jpg";
import p_bimcapacitacion from "../assets/img/imgProjects/p_bimcapacitacion.jpg";
import p_sampleForm from "../assets/img/imgProjects/p_sample_form.jpg";
import p_sampleOffice from "../assets/img/imgProjects/p_office_registration.png";
import p_agnesDonation from "../assets/img/imgProjects/p_casa_hogar.jpg";
import p_budgetApp from "../assets/img/imgProjects/p_budget_app.png";
import p_tiktaktoe from "../assets/img/imgProjects/p_tic_tac_toe.png";
import p_wheatherApp from "../assets/img/imgProjects/p_weather_app.jpg";
import p_presentation from "../assets/img/imgProjects/p_presentation.jpg";
import p_apiMovies from "../assets/img/imgProjects/p_apimovies.jpg";
import p_searchGif from "../assets/img/imgProjects/p_SearchGif.jpg";

const projects = [
  {
    id: 1,
    type: "profesional",
    title: "Quimikal Academy",
    url: "https://quimikal.com/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'React', icon: "bxl-react" },
    ],
    imgProject: p_quimikal,
    lenguage: "Español / Spanish",
  },
  {
    id: 2,
    type: "profesional",
    title: "BIMCapacitacion",
    url: "https://bimcapacitacion.com/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'Django' ,icon:"bxl-django" },
    ],
    imgProject: p_bimcapacitacion,
    lenguage: "Español / Spanish",
  },
  {
    id: 3,
    type: "profesional",
    title: "Discounts Citys",
    url: "https://discountscitydemo.herokuapp.com/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'Django' ,icon:"bxl-django" },
    ],
    imgProject: p_discounts,
    lenguage: "Ingles / English",
  },
  {
    id: 4,
    type: "samples",
    title: "Responsive Contact Form",
    url: "https://juliosantacruz.dev/sample_form/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
    ],
    imgProject: p_sampleForm,
    lenguage: "Spanish / Español",
  },
  {
    id: 5,
    type: "samples",
    title: "Office Register",
    url: "https://a-coworking.herokuapp.com/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'Django' ,icon:"bxl-django" },
    ],
    imgProject: p_sampleOffice,
    lenguage: "Spanish / Español",
  },
  {
    id: 6,
    type: "samples",
    title: "Agnes Donation Web",
    url: "https://hogar-agneslester.herokuapp.com/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'Django' ,icon:"bxl-django" },
    ],
    imgProject: p_agnesDonation,
    lenguage: "Spanish / Español",
  },
  {
    id: 7,
    type: "react",
    title: "Budget App",
    url: "https://juliosantacruz.github.io/react-budget-app/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'React', icon: "bxl-react" },
    ],
    imgProject: p_budgetApp,
    lenguage: "English / Ingles",
  },
  {
    id: 8,
    type: "react",
    title: "Tic Tac Toe App",
    url: "https://juliosantacruz.github.io/TicTacToe/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'React', icon: "bxl-react" },
    ],
    imgProject: p_tiktaktoe,
    lenguage: "English / Ingles",
  },
  {
    id: 9,
    type: "react",
    title: "Wheater App",
    url: "https://juliosantacruz.github.io/weather-page/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'React', icon: "bxl-react" },
    ],
    imgProject: p_wheatherApp,
    lenguage: "English / Ingles",
  },
  {
    id: 10,
    type: "react",
    title: "Search GIF! App",
    url: "https://juliosantacruz.github.io/search_Gif/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'React', icon: "bxl-react" },
    ],
    imgProject: p_searchGif,
    lenguage: "Spanish / Español",
  },
  {
    id: 11,
    type: "react",
    title: "API Movies",
    url: "https://juliosantacruz.github.io/api-movies/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'React', icon: "bxl-react" },
    ],
    imgProject: p_apiMovies,
    lenguage: "Spanish / Español",
  },
  {
    id: 12,
    type: "react",
    title: "Presentation Page",
    url: "https://juliosantacruz.github.io/react-fetch-exercise/",
    stack: [
      { name:'HTML' ,icon:"bxl-html5" },
      { name:'CSS' ,icon:"bxl-css3" },
      { name:'JS' ,icon:"bxl-javascript" },
      { name:'React', icon: "bxl-react" },
    ],
    imgProject: p_presentation,
    lenguage: "Spanish / Español",
  },
];

export default projects;
