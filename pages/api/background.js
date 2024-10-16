const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'SSLC',
                degree: 'CGM.HR.SEC.SCHOOL, Korikadavu',
                detail: "Completed sslc",
                year: '2013-2014'
            },
            {
                id: 1,
                title: 'HSC',
                degree: 'GOVERNMENT.HR.SEC.SCHOOL, Keeranur',
                detail: "Completed hsc",
                year: '2015-2016'
            },
            {
                id: 2,
                title: 'BE Computer Science And Engineering',
                degree: 'University College Of Engineering - Dindigul',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
                year: '2016-2020'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Kalyani Motors Pvt Ltd',
                role: 'Frontend Developer',
                url: 'https://jmm.ltd/',
                desc: 'I have built and maintained reusable, accessible, and performant React.js and Next.js components while collaborating with designers and developers to implement features and resolve issues. I write clean, maintainable code and work with cross-functional teams to deliver new features. My continuous learning helps me stay updated on best practices and trends. I improved user engagement by 20% and reduced bounce rates by 15% through UX optimizations. Additionally, I developed responsive websites that increased user clicks by 25% and customer purchases by 33%, and optimized page load times by 10%, integrating secure payment gateways for smooth transactions.',
                year: '08/2022 - Present',
                location: 'Bangalore, India'
            },
            {
                id: 2,
                title: 'Fuient Techonology',
                role: 'Web Developer',
                url: 'no website',
                desc: 'I developed and launched two custom, responsive WordPress websites, increasing user engagement by 40% and reducing bounce rates by 25%. By streamlining development processes, I improved efficiency by 10% and minimized downtime. I optimized content management systems with advanced features, reducing management time by 30% and boosting performance by 20%. I resolved critical client issues, reducing support requests by 40% and ensuring seamless user experiences. Additionally, I customized WordPress themes and plugins to meet specific client needs, enhancing site functionality by 15%. My efforts resulted in more efficient, high-performing websites tailored to client requirements.',
                year: '08/2021 - 07/2022',
                location: 'Coimbatore, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
