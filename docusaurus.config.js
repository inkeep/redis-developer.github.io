const path = require('path');

module.exports = {
  title: 'The Home of Redis Developers',
  tagline:
    'Learn all the best practices to get up and running with Redis in no time. Get started and discover the power of Redis, whether on your local machines or in the cloud.',
  url: 'https://developer.redis.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redis-developer', // Usually your GitHub org/user name.
  projectName: 'redis-developer', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    authors: {
      simon: {
        name: 'Simon Prickett',
        link: 'https://simonprickett.dev',
        title: 'Principal Developer Advocate at Redis',
        image: 'profile_pic_simon_prickett.jpg',
      },
      suze: {
        name: 'Suze Shardlow',
        link: 'https://suze.dev',
        title: 'Developer Community Manager at Redis',
        image: 'profile_pic_suze_shardlow.jpg',
      },
      ajeet: {
        name: 'Ajeet Raina',
        link: 'https://twitter.com/ajeetsraina',
        title: 'Former Developer Growth Manager at Redis',
        image: 'profile_pic_ajeet_raina.jpg',
      },
      talon: {
        name: 'Talon Miller',
        link: 'https://www.linkedin.com/in/talon-miller-005054109/',
        title: 'Technical Product Marketing Manager at Redis',
        image: 'profile_pic_talon_miller.jpg',
      },
      alex: {
        name: 'Alex Mikhalev',
        link: 'https://www.linkedin.com/in/alexmikhalev',
        title: 'AI/ML Architect at Nationwide Building Society',
        image: 'profile_pic_alex_mikhalev.jpg',
      },
      will: {
        name: 'Will Johnston',
        link: 'https://twitter.com/wjohnsto',
        title: 'Developer Growth Manager at Redis',
        image: 'profile_pic_will_johnston.jpg',
      },
      prasan: {
        name: 'Prasan Kumar',
        link: 'https://www.linkedin.com/in/prasankumar93/',
        title: 'Technical Solutions Developer at Redis',
        image: 'profile_pic_prasan_kumar.jpg',
      },
      ryan: {
        name: 'Ryan Gray',
        link: 'https://www.linkedin.com/in/ryan-t-gray/',
        title: 'Technical Consultant at Portainer.io',
        image: 'profile_pic_ryan_gray.jpg',
      },
      rahul: {
        name: 'Rahul Chauhan',
        link: 'https://www.linkedin.com/in/rchauhan2/',
        title: 'Corporate Solution Architect at Redis',
        image: 'profile_pic_rahul_chauhan.jpg',
      },
      julian: {
        name: 'Julian Mateu',
        link: 'https://www.linkedin.com/in/julian-mateu',
        title: 'Sr. Backend Software Engineer at Globality, Inc.',
        image: 'profile_pic_julian_mateu.jpg',
      },
      andrew: {
        name: 'Andrew Brookins',
        link: 'https://andrewbrookins.com/',
        title: 'Former Curriculum Software Engineer at Redis',
        image: 'profile_pic_andrew_brookins.jpg',
      },
      manuel: {
        name: 'Manuel Aguirre',
        link: 'https://github.com/manuelaguirre',
        title: 'Backend Engineer at Baseline Spain',
        image: 'profile_pic_manuel_aguirre.jpg',
      },
      guyroyse: {
        name: 'Guy Royse',
        link: 'http://guy.dev',
        title: 'Senior Developer Advocate at Redis',
        image: 'profile_pic_guy_royse.jpg',
      },
      christian: {
        name: 'Christian Mague',
        link: 'https://www.linkedin.com/in/chris-mague-35b1624/',
        title: 'Former Principal Field Engineer at Redis',
        image: 'profile_pic_christian_mague.jpg',
      },
      karan: {
        name: 'Karan Singh',
        link: 'https://www.linkedin.com/in/karansingh7',
        title: 'Senior Principal Architect & Developer Evangelist at Red Hat',
        image: 'profile_pic_karan_singh.png',
      },
      sumit: {
        name: 'Sumit Shatwara',
        link: 'https://www.linkedin.com/in/sumitshatwara',
        title: 'Solution Architect at Redis',
        image: 'profile_pic_sumit_shatwara.jpeg',
      },
      matthew: {
        name: 'Matthew Royal',
        link: 'https://www.linkedin.com/in/royalmatthew/',
        title: 'Consulting Engineer at Redis',
        image: 'profile_pic_matthew_royal.jpg',
      },
      steve: {
        name: 'Steve Lorello',
        link: 'https://twitter.com/slorello',
        title: 'Senior Field Engineer at Redis',
        image: 'profile_pic_steve_lorello.jpg',
      },
      bsb: {
        name: 'Brian Sam-Bodden',
        link: 'https://twitter.com/bsbodden',
        title: 'Developer Advocate at Redis',
        image: 'profile_pic_brian_sam-bodden.jpeg',
      },
      justin: {
        name: 'Justin Castilla',
        link: 'http://www.justincastilla.com',
        title: 'Senior Developer Advocate at Redis',
        image: 'profile_pic_justin_castilla.jpg',
      },
      kurt: {
        name: 'Kurt Moeller',
        title: 'Technical Enablement Manager, US at Redis',
        image: 'profile_pic_kurt_moeller.png',
      },
      elena: {
        name: 'Elena Kolevska',
        link: 'https://twitter.com/elena_kolevska',
        title: 'Technical Enablement Manager, EMEA at Redis',
        image: 'profile_pic_elena_kolevska.jpg',
      },
      jyotsna: {
        name: 'Jyotsna Gupta',
        title: 'Redis Insider',
        image: 'profile_pic_jyotsna_gupta.jpeg',
      },
      moiz: {
        name: 'Moiz Kapasi',
        title: 'Redis Insider',
        image: 'profile_pic_moiz_kapasi.jpeg',
      },
      michael: {
        name: 'Michael Owolabi',
        link: 'https://www.linkedin.com/in/imichaelowolabi/',
        title: 'Redis Insider',
        image: 'profile_pic_michael_owolabi.jpeg',
      },
      stevan: {
        name: 'Stevan Thomas',
        title: 'Redis Insider',
        image: 'profile_pic_stevan_thomas.png',
      },
      sachin: {
        name: 'Sachin Kottarathodi',
        title: 'Staff Software Engineer at Walmart Global Tech India',
        image: 'profile_pic_sachin_kottarathodi.jpg',
      },
      tug: {
        name: 'Tugdual Grall',
        title: 'Former Technical Marketing Manager at Redis',
        image: 'profile_pic_tugdual_grall.png',
      }
    },
  },
  themes: ["@inkeep/docusaurus/chatButton"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/redis-hero-image.jpg',
      // ...
      googleTagManager: {
        trackingID: 'GTM-W8Z6BLQ',
      },
      prism: {
        additionalLanguages: [
          'csharp',
          'php',
          'ruby',
          'java',
          'rust',
          'elixir',
          'groovy',
          'sql',
          'typescript'
        ],
      },

      navbar: {
        style: 'dark',
        title: null,
        logo: {
          alt: 'Redis Developer Hub logo',
          src: 'img/logo-1.png',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            to: '/howtos/quick-start',
            activeBasePath: 'docs',
            label: 'Get started',
            position: 'right',
          },
          {
            href: 'https://launchpad.redis.com',
            label: 'Redis Launchpad',
            position: 'right',
          },
          {
            href: 'https://redis.com/try-free/',
            label: 'Try Free',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Redis logo',
          src: 'img/redis_logo_red_white_rgb.svg',
          href: 'https://redis.com/',
        },
        links: [
          {
            title: 'Get Started',
            items: [
              {
                label: 'Develop',
                to: '/develop/',
              },
              {
                label: 'Best Practices',
                href: 'https://redis.com/redis-best-practices/introduction/',
              },
              // {
              //   label: 'Tutorials',
              //   to: '#',
              // },
              // {
              //   label: 'Samples & Demos',
              //   to: '#',
              // },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Community',
                href: 'https://redis.com/community/',
              },
              {
                label: 'Redis University',
                href: 'https://university.redis.com',
              },
              {
                label: 'Redis Commands',
                href: 'https://redis.io/commands',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/search?q=redis',
              },
              //   label: 'Use Cases',
              //   href: 'https://redis.com/solutions',
              // },
            ],
          },
        ],
        copyright: `Copyright: © ${new Date().getFullYear()} Redis. All rights reserved. Redis and the cube logo are registered trademarks of Redis Ltd.`,
      },
      colorMode: {
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,
      },
      announcementBar: {
        id: 'redis-7-2-release', // Any value that will identify this message.
        content:
          '<div class="announcement-bar"><a href="https://redis.com/blog/introducing-redis-7-2/" target="_blank" rel="noopener"><span>Announcing Redis 7.2 and Enhanced Vector DB</span> <span style="margin-left:1rem">Learn more</span> <span style="margin-left:0.25rem">→</span></a></div>',
        backgroundColor: 'rgb(210, 215, 254)', // Defaults to `#fff`.
        textColor: 'rgb(22 31 49)', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },
      inkeepConfig: {
        stylesheetUrls: ['/css/inkeep-overrides.css'],
        baseSettings: {
          apiKey: "50ff1d0d4aee5d0c126f1b93783e5e7cbfb3ef78b02668fe",
          integrationId: "clphge5p80000s601798rdk5u",
          organizationId: "org_X8EzgCzOiGEfmtXf",
          primaryBrandColor: "#DC382C",
          organizationDisplayName: "Redis",
          theme: {
            tokens: {
              fonts: {
                heading: "var(--ifm-font-family-base)",
                body: "var(--ifm-font-family-base)",
              },
            },
          }
        },
        modalSettings: {
        },
        searchSettings: {
        },
        aiChatSettings: {
          botAvatarSrcUrl: "/img/redis-logo.png",
          quickQuestions: [
            'How to implement an IP based rate limiter?',
            'In python, how to write lua scripts?',
            'How to setup client side caching?',
          ],
          getHelpCallToActions: [
            {
              icon: { builtIn: 'FaDiscord' },
              name: 'Discord Community',
              url: 'https://discord.gg/redis',
            },
            {
              icon: { builtIn: 'IoHelpBuoyOutline' },
              name: 'Get help (Enterprise)',
              url: 'https://app.redislabs.com/#/login?return_to=https%3A%2F%2Fsupport.redis.com%2Fhc%2Fen-us',
            },
          ],
        },
      }
    }),
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/redis-developer/redis-developer/edit/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/lp/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    path.resolve(__dirname, 'plugins', 'gtm'),
  ]
};
