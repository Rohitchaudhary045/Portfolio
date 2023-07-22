const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Hello, I'm Rohit Chaudhary, a highly motivated Bachelor of Computer Science and Technology (Cyber Security and Forensics) student at GLA University. I am excited to continue leveraging my skills and experience to help organizations stay ahead of potential cyber threats and protect their valuable assets.Furthermore, I possess strong problem-solving and communication skills, developed through my experience of working in a team. I am proficient in English and have good communication skills. When I'm not studying or working, I enjoy playing Capture The Flag and managing events. ",
  skills:
    "Ethical Hacking | Penetration Testing | Red Teaming | Offensive Testing | Osint | Digital Forensics | AWS 101 | Reverse Engineering | Docker ",
  education:
    "High School, SPS International Academy, Kosi-kalan, 2017 <br> Intermediate, Tagore International School, Sikar, 2019 <br> Bachelor of Computer Science and Technology (Cyber Security and Forensics), GLA University, Mathura, 2024",
  experience:'<span class="code"> Internship Experience </span><br> Security Researcher | Bug Hunter on the Various Platforms - Present<br> ',
  certifications: 
    "AZ-900- Microsoft Azure | Dark Web Investigation- CSI Linux | EC-Council Ethical Hacking Essentials | Scrum Foundation- CertiProf | Consultant Virtual Exp.- Forage ",
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/rohit-chaudhary-045/' class='success link'>Linkedin</a>, <a href='mailto:rohitcoc245@gmail.com' class='success link'>Email</a>"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
