interface ITeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  email: string;
}

export const teamData: ITeamMember[] = [
  {
    name: 'Jaco Buys',
    position: 'Director',
    description: 'Jaco\'s dedication to mechanical designs and client relationships defines his role in consulting MEP. His calm demeanour complements a proactive leadership style, where he leads by example in exploration and innovation. With experience across diverse industries, Jaco embraces challenges with determination. Rather than waiting, he seizes opportunities, embodying excellence as an executor. Jaco achieved Professional Engineer status before 30 and has contributed to notable projects across Africa. His blend of expertise, dedication, and ingenuity shapes our consulting MEP endeavours.',
    image: '/static/images/pages/about/team/jaco.jpg',
    email: 'jaco@engpr.com',
  },
  {
    name: 'Paul van Staden',
    position: 'Director',
    description: 'Paul\'s genuine passion for buildings, architecture, and engineering led him to MEP consultancy. His deep understanding of MEP trades fosters trust and collaboration among team members and clients. \n  With a welcoming demeanour and patient teaching style, Paul empowers individuals to assess their progress while guiding the collective journey with clarity and determination.\n Surrounded by capable collaborators, Paul ensures our consultancy moves forward purposefully and with quiet resolve.',
    image: '/static/images/pages/about/team/paul.jpg',
    email: 'paul@engpr.com',
  },
  {
    name: 'Matthys',
    position: 'Associate Director',
    description: 'Matthys discovered his passion for construction and MEP during his mechanical engineering studies. He thrives on seeing projects evolve and approaches problem-solving with fairness and impartiality. As second in command, he ensures smooth communication and workflow, earning praise for his determination and honesty. Matthys embodies integrity and dedication, fundamental to our consultancy\'s success.',
    image: '/static/images/pages/about/team/matthys.jpg',
    email: 'matthys@engpr.com'
  }
]