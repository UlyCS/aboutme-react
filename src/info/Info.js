import self from "../img/self.png"
import fb from "../img/fb.png"
import git from "../img/git.png"
import google from "../img/google.png"
import ig from "../img/ig.png"
import linkedin from "../img/linkedin.png"





export let colors = ["rgb(92, 171, 240)", "rgb(148, 255, 189)"];


export const info = {
    firstName: "John Ulysses ",
    lastName: "Paruginog",

    position: "a Computer Science Major",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '📖',
            text: 'A student having 3 years currently in CompSci at Gordon College.'
        },
        {
            emoji: '👨‍💻',
            text: 'With a huge passsion in video games and technology.'
        },
        {
            emoji: "💻",
            text: "I aspire to be a Developer."
        }
        // {
        //     emoji: "📧",
        //     text: "johnulysses89@gmail.com"
        // }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        // {
        //     link: "https://instagram.com",
        //     icon: 'fa fa-instagram',
        //     label: 'instagram'
        // },
        // {
        //     link: "https://github.com",
        //     icon: "fa fa-github",
        //     label: 'github'
        // },
        // {
        //     link: "https://linkedin.com",
        //     icon: "fa fa-linkedin",
        //     label: 'linkedin'
        // },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }

    ],
    bio: "Hello! I'm John Ulysses Paruginog. You can call me Uly or Ulysses. I'm a Computer Science student in Gordon College. It's my goal to be a globally competitive Developer. Which kind of developer specifically is unclear at the moment as I'm stil trying to figure that out.",
    skills:
        {
            programming: ['Javascript', 'React', 'Github', 'HTML5', 'CSS3','PHP'],
            exposedTo: ['NodeJS', 'Python', 'Java','C#', 'C/C++','Figma'],
            microsoftoffices: ['Word','PowerPoint','Access','Excel'],
            adobe: ['Photoshop', 'Illustrator', 'Lightroom', 'Premiere Pro']
        }
    ,
    hobbies: [
        {
            label: 'Anime',
            emoji: '⛩️'
        },
        {
            label: 'Manga/Manhwa',
            emoji: '📖'
        },
        {
            label: 'Photography',
            emoji: '📷'
        },
        {
            label: 'Video Games',
            emoji: '🕹️'
        },
        {
            label: 'Jogging',
            emoji: '🏃‍♂️'
        }

    ],
    portfolio: [ 
        {
            title: "Facebook",
            live: "https://www.facebook.com/UlyChin/",  
            image: fb
        },
        {
            title: "LinkedIn",
            live: "https://www.linkedin.com/in/john-ulysses-paruginog-3944411b7",
            image: linkedin
            
        },
        {
            title: "Google",
            live: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnpqWvgCPcJNgdsRtFXHkRGMHVMsFcHwkVGlkfknLVBLTkWVSXqHZmhsMrlHkpvsqfjSnF",
            image: google
        },
        {
            title: "Instagram",
            live: "https://www.instagram.com/ulychinpo/",
            image: ig
        },
        {
            title: "Github",
            live: "https://github.com/UlyCS",
            image: git
        }
    ]
}