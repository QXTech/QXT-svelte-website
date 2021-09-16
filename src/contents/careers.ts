import type { Career } from "../types/career.type";

export const perks = [
  {
    title: "😎 6 weeks paid time off",
  },
  {
    title: "🏕 Fully remote & flexible",
  },
  {
    title: "💸 Competitive salary",
  },
  {
    title: "😊 Mental health stipend",
  },
  {
    title: "📚 Educational budget",
  },
  {
    title: "💻 Premium equipment",
  },
  {
    title: "💪 Monthly health stipend",
  },
];

export const careers: Career[] = [
  {
    title: "Software Engineer",
    intro: `You are just starting out as a software engineer, and are super motivated and curious. This might be for you.`,
    paragraphs: `We are a highly motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. In this fashion, we present at international conferences and collaborate openly around the globe.
  We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
    lists: [
      {
        title: "As part of the team you will ...",
        items: [
          "Directly impact users. Gitpod has little fat to trim and changes directly affect users. We always have our users in mind and focus on making Gitpod work for them, not some abstract potential future requirement.",
          'Be a "jack of all trades, master of some". As a small team we favour generalists. You might work on React code, or dive into the backend. There is loads of room to find your passion and see everything that makes the platform tick.',
          "Solve technical problems. Be it on the backend where we live right on the edge of what Kubernetes, containers and Linux can do; or on the frontend where we deeply care about performance and quality across browsers and platforms. Gitpod is not your typical Kubernetes web app and provides very unique problems you`d be unlikely to come across elsewhere.",
          "Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom.",
          "Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.",
        ],
      },
      {
        title: "What we need",
        items: [
          "You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don`t dictate.",
          "You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based developer environments streamline how software is written today.",
          'You enjoy working across the front- and backend. We hardly ever have a task that is clear cut along fontend/backend lines. If React is your thing, you should feel comfortable enough to have a look at the server. If Kubernetes is your thing, you should still feel comfortable enough to make that change on the dashboard. You do not think "not my department", but welcome the opportunity to venture out of your comfort zone.',
          'You have experience shipping code in production. Your code is mostly ready for prime time, and you know how to test it. You understand the difference between "making something work" and "making something work reliably". You have read other people`s code, know how to make yourself at home and understand that code is read way more often than it`s written. You understand that every new dependency comes at a cost, as do lines of code.',
          "You are product minded. You enjoy using what you`ve helped build, and still pay attention to things that feel off. You can empathize with other users and understand how they might see things differently, or that messaging that`s completely clear to you might be unintelligible to others. You are eager to understand why things are not working for others and quickly act when unexpected things happen.",
          "You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.",
        ],
      },
      {
        title: "Our stack:",
        items: [
          "Gitpod is a distributed application running on Kubernetes. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.",
          "Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.",
        ],
      },
      {
        title: "We're about balance",
        items: perks.map((perk) => perk.title),
      },
    ],
    textAfterTheLists: "",
    rendered: false,
    date: "2021-01-26T14:00:00.000Z",
  },
  {
    title: "Senior Software Engineer (Frontend)",
    intro: `When it comes to code, we’re looking to work with experienced people who can pick a problem and solve it. For us, it’s both how it works and how it looks.`,
    paragraphs: `We are a highly motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and led many popular open-source projects, and contribute to many others. In this fashion, we present at international conferences and collaborate openly around the globe.
  We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
    lists: [
      {
        title: "As part of the team you will ...",
        items: [
          "Directly impact users. Gitpod has little fat to trim and changes directly affect users. We always have our users in mind and focus on making Gitpod work for them, not some abstract potential future requirement.",
          "Be a 'jack of all trades, master of some'. We don't expect you to have a background in everything we use. However, there is loads of room to grow and see everything that makes the platform tick.",
          "Solve hard technical problems. On the frontend, we deeply care about performance and quality across browsers and platforms. Gitpod is not your typical Kubernetes web app and provides very unique problems you`d be unlikely to come across elsewhere.",
          "Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom.",
          "Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.",
        ],
      },
      {
        title: "What we need",
        items: [
          "You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don`t dictate.",
          "You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based developer environments streamline how software is written today.",
          "You have strong JavaScript fundamentals. Besides knowing Array methods and how to format numbers and dates with localization in mind, you also write semantic HTML5. You have in-depth knowledge of a modern web framework (React and/or Svelte preferred, but Vue, Angular, etc. are ok too). You care about or are interested in a11y and performance. You know what happens from the time you hit Enter in a browser's URL bar until you see the website rendered on the screen.",
          "You care about design. You have experience building and advocating for reusable and accessible components as well as passion for beautiful user interfaces and great user experiences. We use Tailwind CSS and if you are already familiar with it, do let us know.",
          'You have experience shipping code to production. Your code is ready for prime time, and you don`t expect others to test it thoroughly for you. You understand the difference between "making something work" and "making something work reliably". You have read other people`s code, know how to make yourself at home and understand that code is read way more often than it`s written. You understand that every new dependency comes at a cost, as do lines of code.',
          "You are product minded. You enjoy using what you`ve helped build, and still pay attention to things that feel off. You can empathize with other users and understand how they might see things differently, or that messaging that`s completely clear to you might be unintelligible to others. You are eager to understand why things are not working for others and quickly act when unexpected things happen.",
          "You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.",
        ],
      },
      {
        title: "Our stack:",
        items: [
          "Gitpod is a distributed application running on Kubernetes. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.",
          "Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.",
        ],
      },
      {
        title: "We're about balance",
        items: perks.map((perk) => perk.title),
      },
    ],
    textAfterTheLists: "",
    rendered: false,
    date: "2021-01-26T14:00:00.000Z",
  },
  {
    title: "Senior Software Engineer (Full-Stack)",
    intro: `We at Gitpod build tools that require a view across the stack.`,
    paragraphs: `We are a highly motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others. In this fashion, we present at international conferences and collaborate openly around the globe.
  We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
    lists: [
      {
        title: "As part of the team you will ...",
        items: [
          "Directly impact users. Gitpod has little fat to trim and changes directly affect users. We always have our users in mind and focus on making Gitpod work for them, not some abstract potential future requirement.",
          'Be a "jack of all trades, master of some". As a small team we favour generalists. You might work on React code, dive deeply into Kubernetes or read the Linux sources. There is loads of room to find your passion and see everything that makes the platform tick.',
          "Solve hard technical problems. Be it on the backend where we live right on the edge of what Kubernetes, containers and Linux can do; or on the frontend where we deeply care about performance and quality across browsers and platforms. Gitpod is not your typical Kubernetes web app and provides very unique problems you`d be unlikely to come across elsewhere.",
          "Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom.",
          "Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.",
        ],
      },
      {
        title: "What we need",
        items: [
          "You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don`t dictate.",
          "You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based developer environments streamline how software is written today.",
          'You enjoy working across the front- and backend. We hardly ever have a task that is clear cut along fontend/backend lines. If React is your thing, you should feel comfortable enough to have a look at the server. If Kubernetes is your thing, you should still feel comfortable enough to make that change on the dashboard. You do not think "not my department", but welcome the opportunity to venture out of your comfort zone.',
          "You enjoy building distributed systems. That means understanding their idiosyncrasies, and wallowing in the fact that anyone elses computer can break yours. You don`t blindly follow trends, but have a keen eye for stable and pragmatic solutions. You have developed and interacted with distributed systems in the real world, have seen them fail and fixed them.",
          'You have experience shipping code in production. Your code is ready for prime time, and you don`t expect others to test it thoroughly for you. You understand the difference between "making something work" and "making something work reliably". You have read other people`s code, know how to make yourself at home and understand that code is read way more often than it`s written. You understand that every new dependency comes at a cost, as do lines of code.',
          "You are product minded. You enjoy using what you`ve helped build, and still pay attention to things that feel off. You can empathize with other users and understand how they might see things differently, or that messaging that`s completely clear to you might be unintelligible to others. You are eager to understand why things are not working for others and quickly act when unexpected things happen.",
          "You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.",
        ],
      },
      {
        title: "Our stack:",
        items: [
          "Gitpod is a distributed application running on Kubernetes. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.",
          "Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.",
        ],
      },
      {
        title: "We're about balance",
        items: perks.map((perk) => perk.title),
      },
    ],
    textAfterTheLists: "",
    rendered: false,
    date: "2021-01-26T14:00:00.000Z",
  },
  {
    title: "Senior Kubernetes Engineer",
    intro: `We want to run Gitpod workspaces in self-managed Kubernetes clusters to benefit from the latest and greatest advancements from the open source community. We want your help to create, automate and operate such clusters.`,
    paragraphs: `We are a highly-motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others.
  We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
    lists: [
      {
        title: "As part of the team you will ...",
        items: [
          "Create Kubernetes Clusters. You will use the latest and greatest Linux kernels, containerd and K8s versions. You will automate the process of creating the cluster and ensure that it is perfectly suited to run Gitpod`s dev environments. The clusters will run on a public cloud.",
          "Help Gitpod being a good K8s app. You know the best practices for running an app in Kubernetes and you will help to implement these best practices in Gitpod or help the team to follow the best practices. Resilience during incidents and deployment as well as security are of particular interest.",
          "Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom.",
          "Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.",
        ],
      },
      {
        title: "What we need",
        items: [
          "You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don't dictate.",
          "You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based developer environments streamline how software is written today.",
          "You embrace Open Source. You follow relevant open-source projects, maybe you contributed, maybe you know the maintainers. Gitpod itself is open-source and built on open-source projects, such as Kubernetes, Helm, Terraform, Grafana, Prometheus and many more. Knowledge about such projects will help you work on Gitpod and knowledge about Open Source will help you make Gitpod a better Open Source project.",
          "You are pragmatic. You understand that doing the right thing gives you momentum while doing a thing perfectly can cost a lot of time.",
          "You are a curious deep diver. You know that humans and documentation often do not have an answer. That is when you dive. You read code, issues, explore metrics, traces, logs or conduct experiments. When you surface, you know the answer and the team will love you.",
          "You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.",
        ],
      },
      {
        title: "Our stack:",
        items: [
          "Gitpod is an open source Kubernetes application. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.",
          "Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.",
          "We run gitpod.io on Google Cloud Platform. There we use GKE, Buckets, BigQuery and more. We may expand to other cloud providers. We make Gitpod self-hosted available for vanilla Kubernetes, AWS, and more platforms in the future.",
          "We describe infrastructure using Helm and Terraform. We maintain a single helm chart to install Gitpod on Kubernetes. To create the cluster and other infrastructure around it, we use Terraform scripts.",
        ],
      },
      {
        title: "We're about balance",
        items: perks.map((perk) => perk.title),
      },
    ],
    textAfterTheLists: "",
    rendered: false,
    date: "2021-01-26T14:00:00.000Z",
  },
  {
    title: "Senior Container Runtime Engineer",
    intro: `At its core Gitpod provisions, secures and orchestrates containers. We deploy the latest open-source container technology working at the intersection of Linux and cloud native technologies. We want your help to run, secure and advance our container runtime.`,
    paragraphs: `We are a highly-motivated, fully-remote team, organized in a flat hierarchy, and led by technical founders. We love open-source, have started and lead many popular open-source projects, and contribute to many others.
  We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community, and are not sure if you should apply, please get in touch.`,
    lists: [
      {
        title: "As part of the team you will ...",
        items: [
          "Shape the latest container-tech and Linux. You will use the latest and greatest Linux kernels, containerd and K8s versions. OCI, Linux namespaces, runc, containerd should excite you. As well as this [talk](https://www.youtube.com/watch?v=l4I2TVAnBuw). eBPF knowledge is a plus.",
          "Help Gitpod being a good K8s app. You know the best practices for running an app in Kubernetes and you will help to translate those best practices to the lower leves and help the team to follow the best practices of the community. Strong appreciation of container security is of particular interest.",
          "Co-own the product and work self-directed. We work with a very flat hierarchy, organizing our tasks in iterations with a lot of freedom.",
          "Work with the community and in the open. Our DNA is deeply rooted in open source and we are building Gitpod in public. We expect the same from you.",
        ],
      },
      {
        title: "What we need",
        items: [
          "You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don't dictate.",
          "You care for our mission. Developers architect our future. Gitpod democratises software development by making it more accessible to all developers.  Ready-to-code, cloud-based development environments streamline how software is written today.",
          "You embrace Open Source. You follow relevant open-source projects, maybe you contributed, maybe you know the maintainers. Gitpod itself is open-source and built on open-source projects, such as Kubernetes, Helm, Terraform, Grafana, Prometheus and many more. Knowledge about such projects will help you work on Gitpod and knowledge about Open Source will help you make Gitpod a better Open Source project.",
          "You are pragmatic. You understand that doing the right thing gives you momentum while doing a thing perfectly can cost a lot of time.",
          "You are a curious deep diver. You know that humans and documentation often do not have an answer. That is when you dive. You read code, issues, explore metrics, traces, logs or conduct experiments. When you surface, you know the answer and the team will love you.",
          "You are a good communicator. We work remote, our users are remote too. You value writing and express yourself concisely. You may hold strong opinions, but you are not ideological. You communicate thoughtfully, always assume others speak in good faith, aim to understand opposing perspectives and compromise when needed.",
        ],
      },
      {
        title: "Our stack:",
        items: [
          "Gitpod is an open source Kubernetes application. Services are written in Go and TypeScript (Node.JS), while all things frontend are React and TypeScript. We communicate using gRPC, RabbitMQ and JSON-RPC. We develop Gitpod in Gitpod, build using leeway and werft and automatically deploy preview environments for every branch.",
          "Browser-based productivity tools for the rest. Gitpod for development, GitHub for issue tracking and as git hoster, Slack for comms, Figma for design, Notion as our virtual HQ, Pitch for slides, Loom for screencasts and a few others.",
          "We run gitpod.io on Google Cloud Platform. There we use GKE, Buckets, BigQuery and more. We may expand to other cloud providers. We make Gitpod self-hosted available for vanilla Kubernetes, AWS, GKE and more platforms in the future.",
          "We describe infrastructure using Helm and Terraform. We maintain a single helm chart to install Gitpod on Kubernetes. To create the cluster and other infrastructure around it, we use Terraform scripts.",
        ],
      },
      {
        title: "We're about balance",
        items: perks.map((perk) => perk.title),
      },
    ],
    textAfterTheLists: "",
    rendered: false,
    date: "2021-01-26T14:00:00.000Z",
  },
  {
    title: "Working Student - Finance",
    intro: `You are a "jack of all trades, master of some" student with a background in business, finance or data science and want to work 10h to 20h a week? With daily challenging tasks, we'll show you what it's like to operate a high-growth venture.`,
    paragraphs: `We are a highly-motivated, fully-remote team which is organised in a flat hierarchy and led by our technical founders. We love open-source, have started and led many popular open-source projects, and contribute to many others. We celebrate diversity and strive for an equal, inclusive, empathetic and welcoming environment. Bringing diversity to the team is a big plus. If you are part of a marginalised community and are not sure if you should apply, please get in touch.`,
    lists: [
      {
        title: "",
        items: [
          "⚙️ Application Process. simply send your CV to career@gitpod.io and let's get in touch!",
        ],
      },
      {
        title: "",
        items: ["🗓️  Starting date: asap"],
      },
      {
        title: "",
        items: [""],
      },
      {
        title: "As part of the team you will ...",
        items: [
          "Co-own strategic initiatives. Our flat hierarchy gives you the opportunity to create real value and to realise a steep learning by delegating responsibility to you and holding you accountable for deliverables. ",
          "Learn about the financial side of a SaaS business. The adoption of SaaS will continue to grow rapidly rendering an in-depth understanding of this business model's financial workings all the more relevant. You'll learn the ins and outs of our specific business but also the operational implications of SaaS more broadly.",
          "Contribute to our reporting. Reporting to management and investors represents a core responsibility of our team. You will participate in our continuous efforts to uphold reporting accuracy and advance our standards.",
          "Improve daily Gitpod operations. Become part of our team's aspiration to be an internal service provider everyone loves and apply your theoretical knowledge of finance, controlling and accounting. Add automation layers to increase operational and financial efficiency where you see leverage.",
          "Report directly to the Head of Finance & Ops. We'll make sure you'll get an appropriate learning experience by reporting directly to Gitpod's Head of Finance & Ops.",
        ],
      },
      {
        title: "You will be a great fit if...",
        items: [
          "You love numbers. From day one on, you'll compile and analyse large amounts of data and should hence be well versed in algebraic mathematics and feel comfortable around obtaining, validating and processing data - whether in statistical modelling software or spreadsheets.",
          "You have strong written and verbal communication skills. You'll have the opportunity to present your work (analyses / models / processes) to members of the leadership team and  should hence be comfortable switching back and forth between English and German. We're building Gitpod on Notion where you'll document and showcase your achievements.",
          "You thrive on working independently and exhibit attention for detail. You'll be encouraged to prioritise your work and to follow the 'Managers of one' principle in our quest to achieving company objectives. Additionally, you'll maintain and rigorously ensure accuracy when dealing with numbers to ensure confidence in the work created.",
          "You share our values. We are developer-led and aim for a frictionless experience when interacting with our product, our company and our brand: no hurdles, no BS, no unnecessary extra steps. We are open minded, inclusive, transparent and curious. We always remain students of the game, not masters of the game. We have opinions, but are not opinionated. We integrate, don't dictate.",
          "Curious about automating processes. A common byproduct of our analysis work is identifying potential areas for automation - whether in expense recognition, payment processing or another area. You don't need to be an automation wizard but should be excited about leveraging software / tools to achieve higher degrees of automation.",
        ],
      },
      {
        title: "We're about balance",
        items: perks.map((perk) => perk.title),
      },
    ],
    textAfterTheLists: "",
    rendered: false,
    date: "2021-09-16T14:00:00.000Z",
  },
];
