const expertise = [
    {
        id: 0,
        title: 'React.js',
        desc: "I have extensive experience in building and maintaining scalable, responsive web applications using React.js. My expertise includes creating reusable components, state management, API integration, and performance optimization. By leveraging React.js, I deliver dynamic, interactive, and user-friendly interfaces tailored to client needs.",
    },
    {
        id: 1,
        title: 'Next.js',
        desc: "With Next.js, I specialize in building server-side rendered and static web applications optimized for SEO and performance. My skills include routing, API development, and server-side rendering (SSR). I use Next.js to create fast, scalable, and SEO-friendly web solutions that deliver optimal user experiences.",
    },
    {
        id: 2,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
