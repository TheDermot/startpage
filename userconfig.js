// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  temperature: {
    location: "Yonkers", // Set your city here
    scale: "C", // "C" for Celsius or "F" for Fahrenheit
  },
  tabs: [
    {
      name: "",
      background_url: `src/img/banners/cbg-7.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/1/#inbox",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
            {
              name: "classroom",
              url: "https://classroom.google.com/u/1/",
              icon: "books",
              icon_color: palette.green,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-text",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "x",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.sky,
            },
            {
              name: "discord",
              url: "https://discord.com/channels/@me",
              icon: "brand-discord",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "github",
              url: "https://github.com/TheDermot",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "devdocs",
              url: "https://devdocs.io",
              icon: "code",
              icon_color: palette.blue,
            },
            {
              name: "hacker-news",
              url: "https://news.ycombinator.com",
              icon: "news",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com/u/ashish0kumar/",
              icon: "brand-leetcode",
              icon_color: palette.yellow,
            },
            {
              name: "odin",
              url: "https://www.theodinproject.com/dashboard",
              icon: "bell-school",
              icon_color: palette.red,
            },
            {
              name: "udemy",
              url: "https://www.udemy.com/home/my-courses/learning/",
              icon: "certificate",
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.teal,
            },
            {
              name: "deepseek",
              url: "https://chat.deepseek.com/",
              icon: "robot",
              icon_color: palette.peach,
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
