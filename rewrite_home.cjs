const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Change App to Home
content = content.replace('function App() {', 'function Home({ t, navigate }) {');

// Remove states
content = content.replace("const [lang, setLang] = useState('en');\n  const [activeSection, setActiveSection] = useState('home');\n  const t = translations[lang];", "");

// Remove top banner and nav
const mainSplit = content.split('<main className="single-page-content">');
if (mainSplit.length === 2) {
    const topPart = mainSplit[0];
    const mainAndBottom = mainSplit[1];

    const returnStart = topPart.lastIndexOf('return (');
    const newTop = topPart.substring(0, returnStart) + 'return (\n    <div className="single-page-content">\n';

    const footerSplit = mainAndBottom.split('</main>');
    const mainContent = footerSplit[0];
    const newBottom = '    </div>\n  );\n}\n\nexport default Home;';

    let finalHome = newTop + mainContent + newBottom;

    // Remove scroll listeners
    finalHome = finalHome.replace(/\/\/ Scroll listener.*?\n    \};\n\n    window\.addEventListener.*?\n  \}, \[\]\);\n/s, '');
    finalHome = finalHome.replace(/\/\/ Smooth scroll.*?\n  \};\n/s, '');

    // Fix imports
    finalHome = finalHome.replace("import { translations } from './translations';\nimport './App.css';\n", "");
    finalHome = finalHome.replace("export default App;", "export default Home;");

    // Update scrollToSection to use navigate
    finalHome = finalHome.replace(/scrollToSection\('complaint'\)/g, "navigate('/#complaint')");
    finalHome = finalHome.replace(/scrollToSection\('contact'\)/g, "navigate('/#contact')");
    finalHome = finalHome.replace(/scrollToSection\('about'\)/g, "navigate('/#about')");

    fs.writeFileSync('src/pages/Home.jsx', finalHome);
    console.log("Rewrite successful");
} else {
    console.error("Could not find main className split");
}
