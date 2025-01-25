import ollama from "../../src/assets/article/ollama.webp"
import medium from "../../src/assets/article/medium.png"
import nodejsImage from "../../src/assets/article/nodejs.webp"
import pyhtonImage from "../../src/assets/article/python.webp"

export const contentSample = [
    {
        id: 1,
        tag: "AI",
        src: ollama,
        title:"Creating Your Own Custom AI on Your Laptop, and It’s Open Source",
        desc: "In this article, we’ll dive deep into Ollama and how it can help you bring your dream AI to life. From installation, and exploring the awesome features it offers, to tips and tricks to make your AI even smarter",
        icon:medium,
        linkUrl:"https://medium.com/@pray.arsian24/ollama-the-best-solution-for-creating-your-own-custom-ai-on-your-laptop-and-its-open-source-be5d10a28fa5"
    },
    {
        id: 2,
        tag: "Node.js",
        src: nodejsImage,
        title:"Understanding What Node.js and NPM Are? ",
        desc: "Node.Js is a platform built on Chrome’s JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
        icon: medium,
        linkUrl:"https://medium.com/@pray.arsian24/mengenal-apa-itu-node-js-dan-npm-8b42a939caf8"
    },
    {
        id: 3,
        tag: "Python",
        src: pyhtonImage,
        title:"Getting to Know the Python Language",
        desc: "Python is an interpreted programming language that runs on various operating systems and can be used to create both desktop and web applications. Python is claimed to combine capabilities and functionality with very clear syntax, and it comes with a large and comprehensive standard library.",
        icon:medium,
        linkUrl:"https://medium.com/@pray.arsian24/berkenalan-dengan-phyton-ec9e73d2773d"
    }

]

export const tagArticleSample = [
    {
        id:1,
        tag:"ALL"
    },
    {
        id:2,
        tag:"Node.js"
    },
    {
        id:3,
        tag:"Ollama"
    },
    {
        id:4,
        tag:"Python"
    },
]