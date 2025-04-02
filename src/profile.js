import { isPathName, onDocReady } from "./objects/_window.js";

onDocReady(function() {
    if (isPathName("profile")) {
        const journalEntries = [
            {
                title: "Progress on Humanoid Robot Development",
                entry: `Today, I focused on improving the humanoid robot's facial features. I successfully applied the first layer of artificial skin on the mannequin face. It's still in the early stages, but the texture and flexibility seem promising. I also tested the Pi Cam 2 again, trying to optimize the eye's vision for a more realistic appearance. I'm considering adding a depth sensor to give the robot better spatial awareness.
                In parallel, I continued experimenting with the BCI setup. The signal clarity has improved, but I need to refine the algorithm for better control of the 6-DOF robotic arm. It's been a bit tricky to get smooth and responsive movements, but I think I'm getting closer.
                I also had a breakthrough idea for the AI video call avatar. If I can get the right balance between realism and processing speed, this could be a game-changer. Tomorrow, I plan to integrate the video call avatar with the app, keeping the integration simple at first.
                Overall, today was a productive day, but there's still a lot to tackle moving forward.`,
                date: "Mar 21, 2024"
            },
            {
                title: "AI Video Call Avatar Integration",
                entry: `Today, I worked on integrating the AI video call avatar with the app. I encountered some challenges related to balancing processing speed and visual quality. The avatar looks promising, but I need to optimize the rendering. Additionally, I worked on speech recognition for real-time interaction. There are still some bugs, but it's coming together.
                I hope to refine the avatar's appearance tomorrow and test it with users. I think this could be the breakthrough I've been waiting for.`,
                date: "Mar 22, 2024"
            },
            {
                title: "Testing New Sensors for Spatial Awareness",
                entry: `I spent the day testing a new set of sensors to improve the robot's spatial awareness. The depth sensor was the main focus, as I integrated it into the humanoid robot's system. The results are promising, and it seems to help the robot better understand its environment. There are still some calibration issues, but I'm optimistic that it will significantly improve the robot's ability to navigate and interact with the surroundings.`,
                date: "Mar 23, 2024"
            },
            {
                title: "Speech Recognition Enhancements",
                entry: `Today, I focused on improving the speech recognition system for the AI video call avatar. The system is now more responsive, and I fine-tuned the algorithms for better accuracy in recognizing commands and conversational speech. However, I noticed some latency in real-time conversations, which I plan to address in the next few days. It feels like the project is getting closer to being ready for user testing.`,
                date: "Mar 24, 2024"
            },
            {
                title: "Improving Humanoid Robot's Hand Dexterity",
                entry: `I started testing new methods for improving the humanoid robot's hand dexterity. The current fishing line setup for the fingers is working, but the hands still struggle with grasping objects with more precision. I'm planning to incorporate small servos into the fingers for better control and movement. This will allow the robot to manipulate objects more effectively, which is crucial for tasks like eating or handling tools.`,
                date: "Mar 25, 2024"
            },
            {
                title: "Testing AI Avatar's Emotional Response",
                entry: `Today, I began experimenting with adding emotional responses to the AI video call avatar. I integrated a system that detects the tone of voice and adjusts the avatar's expressions accordingly. The reactions are subtle, but they make the avatar feel more alive and interactive. There are still some areas to improve, like ensuring the expressions match the context, but it's definitely a step forward.`,
                date: "Mar 26, 2024"
            },
            {
                title: "Refining Facial Recognition for Robot",
                entry: `I worked on refining the humanoid robot's facial recognition system. The current setup works, but it sometimes misidentifies objects or faces in cluttered environments. By adjusting the parameters and training it on a more diverse dataset, I'm confident that the accuracy will improve. The next step is testing it in more real-world scenarios to check its robustness.`,
                date: "Mar 27, 2024"
            },
            {
                title: "Brain-Computer Interface Progress",
                entry: `Today, I made significant progress with the brain-computer interface (BCI) system. I tested new algorithms for better signal clarity, and the results were quite promising. The BCI is starting to show more precise control over the 6-DOF robotic arm. I'm planning to integrate the BCI with the humanoid robot tomorrow to test its effectiveness in real-time interactions.`,
                date: "Mar 28, 2024"
            },
            {
                title: "Hydrogen Fuel Cell Integration",
                entry: `Today, I began the integration of hydrogen fuel cells into the humanoid robot. This is a crucial step toward making the robot more energy-efficient. I worked on the basic setup and made sure the fuel cells could convert hydrogen into usable energy. There are still some safety checks and optimizations to be made, but it's promising so far.`,
                date: "Mar 29, 2024"
            },
            {
                title: "Improving Robot's Audio System",
                entry: `I spent the day working on enhancing the humanoid robot's audio system. The speakers were not loud enough, and the microphone's sensitivity was too low. I replaced both components with more powerful versions and tweaked the software to improve sound quality. The changes make the robot much better at understanding and responding to voice commands.`,
                date: "Mar 30, 2024"
            },
            {
                title: "Testing Real-time Robot Interactions",
                entry: `Today, I tested the humanoid robot's ability to interact with real-world objects in real-time. I used a combination of the AI avatar, the robot's sensors, and its hand dexterity to perform tasks like picking up objects and responding to voice commands. The results were encouraging, but the robot still needs work on its decision-making capabilities for complex tasks.`,
                date: "Mar 31, 2024"
            },
            {
                title: "Refining Robot's Walking Algorithm",
                entry: `I began refining the humanoid robot's walking algorithm today. The robot's current walking pattern is efficient but still lacks stability in uneven terrain. I adjusted the gait and added some sensor-based feedback to help the robot stay balanced. It's still a work in progress, but the improvements are noticeable.`,
                date: "Apr 1, 2024"
            },
            {
                title: "Fine-tuning AI Avatar for User Feedback",
                entry: `I spent the day fine-tuning the AI avatar based on user feedback. I focused on making the avatar more natural in conversation by adjusting its response time and expression transitions. It's still a bit robotic, but the feedback was positive, and I'm excited to continue improving it. My goal is to make it indistinguishable from a human interaction.`,
                date: "Apr 2, 2024"
            }
        ];
        
        function journalEntriesElements(journal) {
            // Create the main wrapper div for the journal entry
            const journalDiv = document.createElement("div");
            journalDiv.classList.add("p-1", "bg-light", "rounded", "eachJournalContainer", "my-3");
            journalDiv.style = "cursor: pointer;";
        
            // Create the title div and label
            const titleDiv = document.createElement("div");
            titleDiv.classList.add("title", "m-2");
            const titleLabel = document.createElement("label");
            titleLabel.id = "journalTitle";
            titleLabel.textContent = journal.title;  // Setting the title text
            titleDiv.appendChild(titleLabel);
        
            // Create the entry div and label
            const entryDiv = document.createElement("div");
            entryDiv.classList.add("entry", "text-muted", "m-2");
            const entryLabel = document.createElement("label");
            entryLabel.textContent = journal.entry;  // Setting the entry text
            entryDiv.appendChild(entryLabel);
        
            // Create the date div with labels
            const dateDiv = document.createElement("div");
            dateDiv.classList.add("col-12", "d-flex", "justify-content-between", "date", "text-muted", "m-2", "mt-4");
            const dateLabel = document.createElement("label");
            dateLabel.id = "journalDate";
            dateLabel.textContent = journal.date;  // Setting the date text
            const svgLabel = document.createElement("label");
            svgLabel.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
            `;
            dateDiv.appendChild(dateLabel);
            dateDiv.appendChild(svgLabel);
              
            // Append all created elements to the main journal div
            journalDiv.appendChild(titleDiv);
            journalDiv.appendChild(entryDiv);
            journalDiv.appendChild(dateDiv);
        
            return journalDiv;
        }
    
        journalEntries.forEach((journal) => {
            document.getElementById("favJournalContainer").appendChild(journalEntriesElements(journal));
        });
        
        journalEntries.forEach((journal) => {
            document.getElementById("recentJournalContainer").appendChild(journalEntriesElements(journal));
        });
    }
});
