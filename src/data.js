import javascriptImg from "./assets/java-script.png";
import pythonImg from "./assets/python.png";
import goImg from "./assets/golang.796x1024.png";
import javaImg from "./assets/java.png";

export const LANGUAGES = [
    {
        image: javascriptImg,
        title: "JavaScript",
        description:
            "JavaScript is a high-level programming language that is one of the core technologies of the World Wide Web.",
    },
    {
        image: pythonImg,
        title: "Python",
        description:
            "Python is one of the most popular programming languages today and is easy for beginners to learn because of its readability.",
    },
    {
        image: goImg,
        title: "Go",
        description:
            "Go was developed by Google in 2007 for APIs and web applications.Widely used, particular for Google applications.",
    },
    {
        image: javaImg,
        title: "Java",
        description:
            "Java is also used on the backend of several popular websites, including Google, Amazon, Twitter, and YouTube.",
    },
];

export const EXAMPLES = {
    javascript: {
        title: "Javascript",
        description: "JavaScript can change HTML content.",
        code: `
<html>
    <body>
        <h2>What Can JavaScript Do?</h2> 
        <p id="demo">JavaScript can change HTML content.</p>
        <button type="button" 
        onclick='document.getElementById("demo").innerHTML = 
        "Hello JavaScript!"'>Click Me!</button>
    </body>
</html>`,
    },
    python: {
        title: "Python",
        description:
            "Python relies on indentation to define scope in the code.",
        code: `
    a = 33
    b = 200

    if b > a:
        print("b is greater than a")
        `,
    },
    go: {
        title: "Go",
        description:
            "Go is a popular programming language & is used to create computer programs.",
        code: `
    package main
    import ("fmt")

    func main() {
        fmt.Println("Hello World!")
    }`,
    },
    java: {
        title: "Java",
        description:
            "Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
        code: `
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World");
            }
        }`,
    },
};
