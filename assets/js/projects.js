$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/discord.png',
            link: 'https://github.com/Austinia/DiscorditemsearchBot',
            title: 'FFXIV search Bot',
            demo: 'https://koreanbots.dev/bots/856084843313758218',
            technologies: ['Node.js', 'Javascript'],
            description: "외부 API를 이용해 디스코드 채널 내에서 게임 캐릭터를 검색할 수 있는 서비스",
            categories: ['BackEnd']
        },
        {
          image: 'assets/images/xwitter.png',
          link: 'https://github.com/Austinia/xwitter',
          title: 'Twitter Clone Coding',
          demo: 'https://austinia.github.io/xwitter',
          technologies: ['Javascript', 'React', 'Firebase'],
          description: "파이어베이스의 이메일 회원가입, 구글 아이디와 트위터 아이디로 회원가입 기능과 트윗 기능 구현",
          categories: ['FrontEnd']
      },
      {
        image: 'assets/images/cyberandum.png',
        link: 'https://github.com/Austinia/Cyberandum',
        title: 'Cyberandum, Custom Homepage',
        demo: 'https://austinia.github.io/Cyberandum/',
        technologies: ['Javascript', 'HTML', 'CSS'],
        description: "JS로 커스텀 브라우저 홈페이지 제작, Local Storage를 이용한 로그인 기능, 시계와 Todo-list 구현",
        categories: ['FrontEnd']
    },
    {
      image: 'assets/images/entire.png',
      link: 'https://github.com/Capstone-2022-15/CapstoneProject/tree/dbcrud',
      title: '캡스톤 디자인 실습, 제주대학교 학과 게시판',
      demo: false,
      technologies: ['Node.js', 'Docker', 'AWS', 'MySQL'],
      description: "REST API와 Express를 이용한 Node.js 서버, MySQL 서버와 Flask 서버를 Docker Image로 빌드해 AWS EC2에 배포",
      categories: ['BackEnd']
  },
    //https://github.com/Capstone-2022-15/CapstoneProject/tree/dbcrud
        // {
        //     image: 'assets/images/mobile-landscape.jpg',
        //     link: 'https://github.com/abhn/Wall-E',
        //     title: 'Wall-E',
        //     demo: 'http://wall-e-jekyll.github.io/',
        //     technologies: ['Semantic UI', 'Jekyll'],
        //     description: "A modern Jekyll theme with grid frontpage, beautiful typography, mobile responsive, made with Semantic UI.",
        //     categories: ['featured', 'webdev']
        // },
        // {
        //     image: 'assets/images/collage.jpg',
        //     link: 'https://github.com/abhn/Marvel',
        //     title: 'Marvel',
        //     demo: false,
        //     technologies: ['Android', 'OpenCV'],
        //     description: "Attendance marking tool that uses face recognition for marking attendance and firebase for tracking and analytics.",
        //     categories: ['featured', 'native']
        // },
        // {
        //     image: 'assets/images/mpw.jpg',
        //     link: 'https://github.com/abhn/mpw',
        //     title: 'Master Password',
        //     demo: 'https://www.nagekar.com/mpw',
        //     technologies: ['Semantic UI', 'CSS3'],
        //     description: "Master Password is an ingenious password solution that makes your passwords truly impossible to lose.",
        //     categories: ['featured', 'security']
        // },
        // {
        //     image: 'assets/images/social-share-count.jpeg',
        //     link: 'https://github.com/abhn/Social-Share-Counts',
        //     title: 'Social Share Count',
        //     demo: false,
        //     technologies: ['Python'],
        //     description: "Ever wondered how many times a URL has been shared on popular social networks?",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/data-destroyer.png',
        //     link: 'https://github.com/abhn/data-destroyer-gui',
        //     title: 'Data Destroyer',
        //     demo: false,
        //     technologies: ['C++', 'Qt'],
        //     description: "Native GUI wrapper for GNU coreutils tool 'dd'",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/raspberry-pi-monitor.png',
        //     link: 'https://github.com/abhn/RPi-Status-Monitor',
        //     title: 'Raspberry Pi Monitor',
        //     demo: false,
        //     technologies: ['python', 'flask'],
        //     description: "Web based status monitor/smart mirror, displays system stats, weather and more.",
        //     categories: ['webdev', 'diy']
        // },
        // {
        //     image: 'assets/images/s3scan.png',
        //     link: 'https://github.com/abhn/S3Scan',
        //     title: 'S3Scan',
        //     demo: false,
        //     technologies: ['python'],
        //     description: "Automate crawling of a website and find publicly open S3 buckets for takeover.",
        //     categories: ['native', 'security']
        // },
        // {
        //     image: 'assets/images/elementary.png',
        //     link: 'https://github.com/abhn/Elementary',
        //     title: 'Elementary',
        //     demo: 'https://elementary-jekyll.github.io/',
        //     technologies: ['Jekyll', 'CSS3'],
        //     description: "Elementary is a zero Javascript and minimal CSS ultra lightweight Jekyll theme for those of you who love simplicity.",
        //     categories: ['webdev']
        // },
        // {
        //     image: 'assets/images/soot-spirits.png',
        //     link: 'https://github.com/abhn/Soot-Spirits',
        //     title: 'Soot Spirits',
        //     demo: 'https://sootspirits.github.io',
        //     technologies: ['Jekyll', 'CSS3'],
        //     description: "A simple responsive two column Jekyll theme. Great for personal blog and basic portfolio website.",
        //     categories: ['webdev']
        // },
        // {
        //     image: 'assets/images/python-chat.png',
        //     link: 'https://www.nagekar.com/2014/12/lan-group-messenger-in-python.html',
        //     title: 'Terminal Group Chat',
        //     demo: false,
        //     technologies: ['Python', 'Sockets'],
        //     description: "Simple terminal group chat based on native sockets using Python.",
        //     categories: ['native']
        // },
        // {
        //     image: 'assets/images/old-lcd.jpg',
        //     link: 'https://www.nagekar.com/2018/05/reusing-old-laptop-lcd-panel.html',
        //     title: 'Reusing Old LCD Panel',
        //     demo: false,
        //     technologies: ['DIY'],
        //     description: "Reusing a dead laptop's LCD panel as a secondary monitor.",
        //     categories: ['diy']
        // },
        // {
        //     image: 'assets/images/nextcloud-enc.png',
        //     link: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
        //     title: 'Encrypted Self-Hosted Cloud',
        //     demo: false,
        //     technologies: ['NextCloud', 'GnuPG'],
        //     description: "Self hosted encrypted cloud setup with Nextcloud and GnuPG.",
        //     categories: ['diy', 'security']
        // },
        // {
        //     image: 'assets/images/google-cloud-backup.png',
        //     link: 'https://www.nagekar.com/2018/05/encrypted-backup-with-duplicity.html',
        //     title: 'Encrypted Backups - Google Cloud',
        //     demo: false,
        //     technologies: ['NextCloud', 'Duplicity'],
        //     description: "Create automated encrypted incremental backups of data. Sync everything securely to Google Cloud.",
        //     categories: ['diy', 'security']
        // },
        // {
        //     image: 'assets/images/pi-cloud.jpg',
        //     link: 'https://www.nagekar.com/2016/01/how-to-private-local-cloud-using-raspberrypi.html',
        //     title: 'Local Cloud - Raspberry Pi',
        //     demo: false,
        //     technologies: ['FTP', 'DIY'],
        //     description: "Host a local cloud server with a Raspberry Pi and a spare hard disk. Access data instantaneously on any device on the network.",
        //     categories: ['diy']
        // },
        // {
        //     image: 'assets/images/koalamate.png',
        //     link: 'https://github.com/abhn/koalamate',
        //     title: 'Koalamate',
        //     demo: false,
        //     technologies: ['Electron', 'Javascript'],
        //     description: "A cross-platform desktop application that serves as a Wolfram Alpha query place and notes taker.",
        //     categories: ['native']
        // },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<br><a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}