import stageImg from "../assets/images/stage.png";
import sem6Img from "../assets/images/weekview.png"
import sem6Vid from "../assets/videos/weekplanner.mp4"
import fullVid from "../assets/videos/fullStack.mp4"


export const projects = [
    {
        id: 1,
        title: "Huiswerk weekplanner",
        description: "Tijdens het project 'Semester 6' heb ik samengewerkt met een groep leerlingen van andere opleidingen. We hebben vanuit school gewerkt aan een maatschappelijk vraagstuk binnen het thema ‘Digitale Sociale Innovatie. Hierin hebben we de focus gelegd op laaggeletterde ouders met kinderen op de basisschool in Rotterdam-Zuid. We ontdekte dat laaggeletterde ouders een gevoel van schaamte ervaren en zich daardoor terugtrekken. Hierdoor verloopt de communicatie met de basisschool vaak stroef en zijn ze minder betrokken bij schoolzaken. We wilde dus de communicatie tussen de ouders en de scholen toegankelijker maken zonder schaamte en taalbarrière.\n" +
            " We hebben hiervoor een digitale kalender ontwikkeld die een visuele en interactieve weergave geeft van het huiswerk en toetsen.\n" +
            "De kalender, dient als hulpmiddel waarbij ouders kunnen aangeven of het huiswerk is gemaakt of niet. Hierbij wilden we, met behulp van uitlegvideo’s, de ouders ook stimuleren om de kinderen te helpen.\n" +
            "\n" +
            "Ik heb hiervoor de Standby-modus en de weekview gemaakt. Voor de front end hebben we HTML/CSS en JavaScript gebruikt. Voor de back end gebruikten we Python. \n ",
        video: sem6Vid,
        image: sem6Img,
        link: 'https://github.com/Karinaax/InnoVision',
        skills: ["HTML", "CSS", "JavaScript", "Python"],
    },
    {
        id: 2,
        title: "Digitale maquette",
        description: "Tijdens mijn meeloopstage in het derde jaar heb ik bij ASRR gewerkt aan een digitale 3D-maquette maker. Het was de bedoeling dat bouwbedrijven hierin dan bijvoorbeeld nieuwe wijken in konden ontwerpen. Het project had al een basis, maar ik was verantwoordelijk voor het uitbreiden van de functionaliteiten. Zo heb ik onder andere een model van een straat gemaakt, waarbij de gebruiker kon kiezen voor varianten mét of zonder fietspad en stoep. Ook heb ik gewerkt aan de zonposities, zodat de gebruiker de stand van de zon kan aanpassen op basis van tijd. Dit was onder andere belangrijk vanwege de invloed van de zon op zonnepanelen.  \n" +
            "Ik werkte met React en TypeScript, en maakte gebruik van React Three Fiber om 3D-scenes declaratief te bouwen in de browser. Hierbij gebruikte ik ook helpers zoals React-Three Drei voor kant en klare componenten, post processing effecten en Leva voor realtime controls en debugging.\n",
        image: stageImg,
        link: 'https://github.com/figoria/sandwiches-react-frontend',
        skills: ["React", "TypeScript", "React-Three-Fiber"],
    },
    {
        id: 3,
        title: "Full Stack Development",
        description: "Tijdens het tweede jaar volgde ik het vak Full Stack Web Development, waarin ik leerde hoe je een volledige webapplicatie opzet van backend tot frontend. Voor de backend bouwde ik een RESTful webservice met Node.js, Express en MongoDB. Ik werkte hiervoor op een Ubuntu-server die ik vanuit school kreeg, waarop ik zelf moest inloggen, tools installeren en de projectstructuur beheren.\n" +
            "Daarnaast ontwikkelde ik een frontend applicatie in React die via de Fetch API communiceerde met mijn backend. Hierbij implementeerde ik frontend routing, CRUD-operaties en werkte ik met belangrijke webconcepten zoals CORS en JSON Web Tokens voor beveiliging. \n" +
            "Ik heb een applicatie gemaakt waar mensen broodjes in Rotterdam kunnen reviewen. Je kan je eigen toevoegen, aanpassen en verwijderen. De opdracht draaide vooral om de functionaliteiten, dus in de styling heeft niet heel veel tijd gezeten.\n",
        video: fullVid,
        skills: ["React", "Tailwind CSS", "Express", "MongoDB"],
    },
];
