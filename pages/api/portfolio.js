const portfolio = [
    {
        id: 0,
        projectName: "Simon-Game",
        url: "https://rajeshsimongames.netlify.app/",
        image: "projects/simion_game.png",
        projectDetail: "The Simon game is the exciting electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order.",
        technologiesUsed: [
            {
                tech: "Html"
            },
            {
                tech: "Css"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "JQuery"
            },
        ]
    },
    {
        id: 0,
        projectName: "Keepar-Site",
        url: "https://keeparsite.netlify.app/",
        image: "projects/Keepar.png",
        projectDetail: "Keep makes it easy to organise your notes and find what you're looking for even faster. Quickly filter notes by colour, label or attributes such as lists with images, audio notes with reminders or shared notes. Or pin important notes to the top of your list.",
        technologiesUsed: [
            {
                tech: "Html"
            },
            {
                tech: "Css"
            },
            {
                tech: "ReactJS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Gmail_layout",
        url: "https://gmail-layout.netlify.app/",
        image: "projects/gmail-layout.png",
        projectDetail: "Introduce a dedicated toolbar and intelligent assistant for quick resume access, seamless cloud integration, and an intuitive preview system, optimizing the user experience.",
        technologiesUsed: [
            {
                tech: "Html"
            },
            {
                tech: "Css"
            },
            {
                tech: "Material ui"
            },
            {
                tech: "ReactJS"
            },
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
