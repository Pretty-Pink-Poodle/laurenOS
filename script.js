const desktopIcons =
    document.querySelectorAll(
        ".desktop-icon"
    );

const windows =
    document.querySelectorAll(
        ".window"
    );

const closeButtons =
    document.querySelectorAll(
        ".window-close"
    );

const minimizeButtons =
    document.querySelectorAll(
        ".window-minimize"
    );

const clock =
    document.getElementById(
        "clock"
    );

const startButton =
    document.getElementById(
        "startButton"
    );

const startMenu =
    document.getElementById(
        "startMenu"
    );

const startMenuItems =
    document.querySelectorAll(
        ".start-menu-item[data-window]"
    );

const systemAboutButtons =
    document.querySelectorAll(
        ".system-about-button[data-window]"
    );

const shutdownButton =
    document.getElementById(
        "shutdownButton"
    );

const terminalButton =
    document.getElementById(
        "terminalButton"
    );

const terminalWindow =
    document.getElementById(
        "terminalWindow"
    );

const terminalInput =
    document.getElementById(
        "terminalInput"
    );

const terminalOutput =
    document.getElementById(
        "terminalOutput"
    );

const taskbarWindows =
    document.getElementById(
        "taskbarWindows"
    );

const themeButtons =
    document.querySelectorAll(
        ".theme-button"
    );

const copyEmailButton =
    document.getElementById(
        "copyEmailButton"
    );


// =============================
// PROJECT EXPLORER
// =============================

const projectFiles =
    document.querySelectorAll(
        ".project-file"
    );

const projectDetailIcon =
    document.getElementById(
        "projectDetailIcon"
    );

const projectDetailTitle =
    document.getElementById(
        "projectDetailTitle"
    );

const projectDetailSubtitle =
    document.getElementById(
        "projectDetailSubtitle"
    );

const projectDetailStatus =
    document.getElementById(
        "projectDetailStatus"
    );

const projectDetailType =
    document.getElementById(
        "projectDetailType"
    );

const projectDetailDescription =
    document.getElementById(
        "projectDetailDescription"
    );

const projectTechTags =
    document.getElementById(
        "projectTechTags"
    );

const projectFeatureList =
    document.getElementById(
        "projectFeatureList"
    );

const projectLearningText =
    document.getElementById(
        "projectLearningText"
    );

const projectActions =
    document.getElementById(
        "projectActions"
    );


const projectData = {

    ticketflow: {

        icon: "🛠️",

        title: "TicketFlow",

        subtitle:
            "IT Service Desk Dashboard",

        status:
            "● deployed",

        type:
            "Web Application",

        description:
            "An interactive service desk dashboard modeled after real IT support workflows. TicketFlow allows users to create, assign, search, filter, update, and persist support tickets directly in the browser.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "DOM",
            "localStorage"
        ],

        features: [
            "Create support tickets with automatic ticket IDs",
            "Assign technicians to active tickets",
            "Move tickets through Open, In Progress, and Resolved workflows",
            "Search and filter tickets by multiple criteria",
            "Automatically update dashboard statistics",
            "Persist ticket data and changes using localStorage"
        ],

        learning:
            "This project helped me connect my real-world IT support experience with front-end development. I practiced managing application state, rendering changing data, building workflow logic, and creating an interface based on processes I already understood from service desk work.",

        live:
            "https://pretty-pink-poodle.github.io/ticketflow/",

        repo:
            "https://github.com/Pretty-Pink-Poodle/ticketflow"
    },


    weather: {

        icon: "🌤️",

        title:
            "Y2K Weather App",

        subtitle:
            "Interactive Weather Dashboard",

        status:
            "● deployed",

        type:
            "API Application",

        description:
            "A responsive weather application with a playful Y2K interface. Users can search cities, view current weather conditions and five-day forecasts, switch temperature units, and see the interface adapt to current conditions.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "REST API",
            "JSON",
            "Open-Meteo"
        ],

        features: [
            "City-based weather search",
            "Current conditions and five-day forecast",
            "Fahrenheit and Celsius conversion",
            "Dynamic weather icons and visual themes",
            "Keyboard search using the Enter key",
            "Asynchronous API requests using fetch()"
        ],

        learning:
            "This was my first major project centered around external data. I learned how to work with asynchronous JavaScript, parse JSON responses, connect multiple API endpoints, handle user input, and dynamically update the DOM based on live information.",

        live:
            "https://pretty-pink-poodle.github.io/weather-app/",

        repo:
            "https://github.com/Pretty-Pink-Poodle/weather-app"
    },


    laurenos: {

        icon:
            "💿",

        title:
            "laurenOS",

        subtitle:
            "Retro Desktop Portfolio",

        status:
            "● currently running",

        type:
            "Interactive Portfolio",

        description:
            "The portfolio you're using right now. laurenOS turns a traditional developer portfolio into an interactive retro desktop environment with draggable windows, taskbar behavior, persistent themes, notifications, a terminal, a music player, and project exploration.",

        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "DOM",
            "localStorage",
            "HTML Audio"
        ],

        features: [
            "Draggable desktop windows with active z-index handling",
            "Minimize, restore, close, and taskbar window controls",
            "Persistent Pink Dream, Office Blue, and Night Mode themes",
            "Interactive command-line terminal",
            "Desktop notification center and welcome messages",
            "Functional music player with playlist and controls",
            "Boot sequence and faux operating-system interface",
            "Interactive Project Explorer",
            "Employment Records experience window",
            "Credential Manager for certifications",
            "Resume Viewer with downloadable PDF",
            "Interactive Contact app",
            "About laurenOS system information dialog"
        ],

        learning:
            "laurenOS has pushed me to think about a web application as a complete system instead of a collection of isolated components. I've worked with reusable window behavior, state management, persistent preferences, dynamic rendering, event handling, and coordinating several interactive features without breaking existing functionality.",

        live:
            "https://pretty-pink-poodle.github.io/laurenOS/",

        repo:
            "https://github.com/Pretty-Pink-Poodle/laurenOS"
    }

};


function renderProject(
    projectKey
) {

    const project =
        projectData[
            projectKey
        ];


    if (!project) {
        return;
    }


    projectDetailIcon.textContent =
        project.icon;


    projectDetailTitle.textContent =
        project.title;


    projectDetailSubtitle.textContent =
        project.subtitle;


    projectDetailStatus.textContent =
        project.status;


    projectDetailType.textContent =
        project.type;


    projectDetailDescription.textContent =
        project.description;


    projectLearningText.textContent =
        project.learning;


    projectTechTags.innerHTML =
        "";


    project.tech.forEach(
        function (technology) {

            const tag =
                document.createElement(
                    "span"
                );


            tag.classList.add(
                "tech-tag"
            );


            tag.textContent =
                technology;


            projectTechTags.appendChild(
                tag
            );
        }
    );


    projectFeatureList.innerHTML =
        "";


    project.features.forEach(
        function (feature) {

            const item =
                document.createElement(
                    "li"
                );


            item.textContent =
                feature;


            projectFeatureList.appendChild(
                item
            );
        }
    );


    projectActions.innerHTML =
        "";


    if (
        project.live
    ) {

        const liveButton =
            document.createElement(
                "a"
            );


        liveButton.classList.add(
            "project-action-button"
        );


        liveButton.href =
            project.live;


        liveButton.target =
            "_blank";


        liveButton.rel =
            "noopener noreferrer";


        liveButton.textContent =
            "🌐 Open Live Demo";


        projectActions.appendChild(
            liveButton
        );
    }


    if (
        project.repo
    ) {

        const repoButton =
            document.createElement(
                "a"
            );


        repoButton.classList.add(
            "project-action-button",
            "secondary"
        );


        repoButton.href =
            project.repo;


        repoButton.target =
            "_blank";


        repoButton.rel =
            "noopener noreferrer";


        repoButton.textContent =
            "💻 View Source";


        projectActions.appendChild(
            repoButton
        );
    }


    projectFiles.forEach(
        function (file) {

            file.classList.toggle(
                "active",
                file.dataset.project ===
                    projectKey
            );
        }
    );
}


projectFiles.forEach(
    function (file) {

        file.addEventListener(
            "click",
            function () {

                renderProject(
                    file.dataset.project
                );
            }
        );
    }
);


renderProject(
    "ticketflow"
);


// =============================
// NOTIFICATIONS
// =============================

const notificationButton =
    document.getElementById(
        "notificationButton"
    );

const notificationBadge =
    document.getElementById(
        "notificationBadge"
    );

const notificationCenter =
    document.getElementById(
        "notificationCenter"
    );

const notificationList =
    document.getElementById(
        "notificationList"
    );

const clearNotificationsButton =
    document.getElementById(
        "clearNotificationsButton"
    );

const desktopToast =
    document.getElementById(
        "desktopToast"
    );

const toastIcon =
    document.getElementById(
        "toastIcon"
    );

const toastTitle =
    document.getElementById(
        "toastTitle"
    );

const toastMessage =
    document.getElementById(
        "toastMessage"
    );

const toastClose =
    document.getElementById(
        "toastClose"
    );


let notifications = [];

let unreadNotifications = 0;

let toastTimer;


function addNotification(
    title,
    message,
    icon = "🔔",
    showToast = true
) {

    const notification = {

        title: title,

        message: message,

        icon: icon,

        time:
            new Date()
                .toLocaleTimeString(
                    [],
                    {
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                )
    };


    notifications.unshift(
        notification
    );


    unreadNotifications++;


    renderNotifications();

    updateNotificationBadge();


    if (
        showToast
    ) {

        showDesktopToast(
            notification
        );
    }
}


function renderNotifications() {

    notificationList.innerHTML =
        "";


    if (
        notifications.length ===
        0
    ) {

        notificationList.innerHTML =
            "<p>no notifications ♡</p>";

        return;
    }


    notifications.forEach(
        function (notification) {

            const card =
                document.createElement(
                    "div"
                );


            card.classList.add(
                "notification-card"
            );


            card.innerHTML = `
                <div>
                    ${notification.icon}
                </div>

                <div>

                    <strong>
                        ${notification.title}
                    </strong>

                    <p>
                        ${notification.message}
                    </p>

                    <small>
                        ${notification.time}
                    </small>

                </div>
            `;


            notificationList.appendChild(
                card
            );
        }
    );
}


function updateNotificationBadge() {

    if (
        unreadNotifications <= 0
    ) {

        notificationBadge.classList.add(
            "hidden"
        );

        return;
    }


    notificationBadge.classList.remove(
        "hidden"
    );


    notificationBadge.textContent =
        unreadNotifications;
}


function showDesktopToast(
    notification
) {

    clearTimeout(
        toastTimer
    );


    toastIcon.textContent =
        notification.icon;


    toastTitle.textContent =
        notification.title;


    toastMessage.textContent =
        notification.message;


    desktopToast.classList.add(
        "show"
    );


    toastTimer =
        setTimeout(
            function () {

                desktopToast.classList.remove(
                    "show"
                );

            },
            5000
        );
}


toastClose.addEventListener(
    "click",
    function () {

        desktopToast.classList.remove(
            "show"
        );
    }
);


notificationButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        notificationCenter.classList.toggle(
            "hidden"
        );


        unreadNotifications =
            0;


        updateNotificationBadge();
    }
);


clearNotificationsButton.addEventListener(
    "click",
    function () {

        notifications =
            [];


        unreadNotifications =
            0;


        renderNotifications();

        updateNotificationBadge();
    }
);


// =============================
// CONTACT
// =============================

if (
    copyEmailButton
) {

    copyEmailButton.addEventListener(
        "click",
        async function () {

            const email =
                "Lauren.a.surles@outlook.com";


            try {

                await navigator.clipboard.writeText(
                    email
                );


                copyEmailButton.textContent =
                    "✓ Copied!";


                addNotification(
                    "email copied ♡",
                    "Lauren.a.surles@outlook.com was copied to your clipboard.",
                    "📋"
                );


                setTimeout(
                    function () {

                        copyEmailButton.textContent =
                            "📋 Copy Email";

                    },
                    1800
                );

            } catch (error) {

                addNotification(
                    "copy failed",
                    "Your browser blocked clipboard access. You can still select the email manually.",
                    "⚠️"
                );
            }
        }
    );
}


// =============================
// THEMES
// =============================

function getThemeLabel(
    themeName
) {

    if (
        themeName === "blue"
    ) {

        return "Office Blue";
    }


    if (
        themeName === "night"
    ) {

        return "Night Mode";
    }


    return "Pink Dream";
}


function applyTheme(
    themeName,
    notify = false
) {

    document.body.classList.remove(
        "theme-blue",
        "theme-night"
    );


    if (
        themeName === "blue"
    ) {

        document.body.classList.add(
            "theme-blue"
        );

    } else if (
        themeName === "night"
    ) {

        document.body.classList.add(
            "theme-night"
        );
    }


    themeButtons.forEach(
        function (button) {

            button.classList.toggle(
                "active-theme",
                button.dataset.theme ===
                    themeName
            );
        }
    );


    localStorage.setItem(
        "laurenOS-theme",
        themeName
    );


    if (
        notify
    ) {

        addNotification(
            "theme updated ♡",
            `${getThemeLabel(themeName)} is now active.`,
            "🎨"
        );
    }
}


applyTheme(
    localStorage.getItem(
        "laurenOS-theme"
    ) || "pink"
);


themeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                applyTheme(
                    button.dataset.theme,
                    true
                );


                startMenu.classList.add(
                    "hidden"
                );
            }
        );
    }
);


// =============================
// WINDOWS
// =============================

let highestZIndex =
    10;


function openWindow(
    windowElement
) {

    if (
        !windowElement
    ) {

        return;
    }


    windowElement.classList.remove(
        "hidden"
    );


    windowElement.dataset.minimized =
        "false";


    bringToFront(
        windowElement
    );


    addTaskbarButton(
        windowElement
    );
}


function closeWindow(
    windowElement
) {

    windowElement.classList.add(
        "hidden"
    );


    windowElement.dataset.minimized =
        "false";


    removeTaskbarButton(
        windowElement
    );
}


function minimizeWindow(
    windowElement
) {

    windowElement.classList.add(
        "hidden"
    );


    windowElement.dataset.minimized =
        "true";


    updateActiveTaskbarButton(
        null
    );
}


function bringToFront(
    windowElement
) {

    highestZIndex++;


    windowElement.style.zIndex =
        highestZIndex;


    updateActiveTaskbarButton(
        windowElement.id
    );
}


function addTaskbarButton(
    windowElement
) {

    let button =
        document.querySelector(
            `.taskbar-window-button[data-window="${windowElement.id}"]`
        );


    if (
        !button
    ) {

        button =
            document.createElement(
                "button"
            );


        button.classList.add(
            "taskbar-window-button"
        );


        button.dataset.window =
            windowElement.id;


        button.textContent =
            windowElement.dataset.title;


        taskbarWindows.appendChild(
            button
        );


        button.addEventListener(
            "click",
            function () {

                if (
                    windowElement.classList.contains(
                        "hidden"
                    )
                ) {

                    windowElement.classList.remove(
                        "hidden"
                    );


                    windowElement.dataset.minimized =
                        "false";


                    bringToFront(
                        windowElement
                    );

                } else if (
                    button.classList.contains(
                        "active"
                    )
                ) {

                    minimizeWindow(
                        windowElement
                    );

                } else {

                    bringToFront(
                        windowElement
                    );
                }
            }
        );
    }


    updateActiveTaskbarButton(
        windowElement.id
    );
}


function removeTaskbarButton(
    windowElement
) {

    const button =
        document.querySelector(
            `.taskbar-window-button[data-window="${windowElement.id}"]`
        );


    if (
        button
    ) {

        button.remove();
    }
}


function updateActiveTaskbarButton(
    windowId
) {

    document
        .querySelectorAll(
            ".taskbar-window-button"
        )
        .forEach(
            function (button) {

                button.classList.toggle(
                    "active",
                    button.dataset.window ===
                        windowId
                );
            }
        );
}


desktopIcons.forEach(
    function (icon) {

        icon.addEventListener(
            "click",
            function () {

                openWindow(
                    document.getElementById(
                        icon.dataset.window
                    )
                );
            }
        );
    }
);


startMenuItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                openWindow(
                    document.getElementById(
                        item.dataset.window
                    )
                );


                startMenu.classList.add(
                    "hidden"
                );
            }
        );
    }
);


systemAboutButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                openWindow(
                    document.getElementById(
                        button.dataset.window
                    )
                );
            }
        );
    }
);


closeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                closeWindow(
                    button.closest(
                        ".window"
                    )
                );
            }
        );
    }
);


minimizeButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                minimizeWindow(
                    button.closest(
                        ".window"
                    )
                );
            }
        );
    }
);


windows.forEach(
    function (windowElement) {

        const titleBar =
            windowElement.querySelector(
                ".window-titlebar"
            );


        let dragging =
            false;


        let offsetX =
            0;


        let offsetY =
            0;


        titleBar.addEventListener(
            "mousedown",
            function (event) {

                if (
                    event.target.closest(
                        ".window-controls"
                    )
                ) {

                    return;
                }


                dragging =
                    true;


                bringToFront(
                    windowElement
                );


                offsetX =
                    event.clientX -
                    windowElement.offsetLeft;


                offsetY =
                    event.clientY -
                    windowElement.offsetTop;
            }
        );


        document.addEventListener(
            "mousemove",
            function (event) {

                if (
                    !dragging
                ) {

                    return;
                }


                windowElement.style.left =
                    `${event.clientX - offsetX}px`;


                windowElement.style.top =
                    `${event.clientY - offsetY}px`;
            }
        );


        document.addEventListener(
            "mouseup",
            function () {

                dragging =
                    false;
            }
        );
    }
);


// =============================
// START MENU
// =============================

startButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        notificationCenter.classList.add(
            "hidden"
        );


        startMenu.classList.toggle(
            "hidden"
        );
    }
);


document.addEventListener(
    "click",
    function () {

        startMenu.classList.add(
            "hidden"
        );


        notificationCenter.classList.add(
            "hidden"
        );
    }
);


startMenu.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();
    }
);


notificationCenter.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();
    }
);


// =============================
// TERMINAL
// =============================

terminalButton.addEventListener(
    "click",
    function () {

        openWindow(
            terminalWindow
        );


        terminalInput.focus();
    }
);


terminalInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !== "Enter"
        ) {

            return;
        }


        const command =
            terminalInput.value
                .trim()
                .toLowerCase();


        addTerminalLine(
            `C:\\Lauren> ${command}`
        );


        if (
            command === "help"
        ) {

            addTerminalLine(
                "commands: help, about, aboutos, version, projects, experience, certs, resume, contact, skills, system, music, theme, notify, clear"
            );

        } else if (
            command === "projects"
        ) {

            openWindow(
                document.getElementById(
                    "projectsWindow"
                )
            );


            addTerminalLine(
                "opening Project Explorer..."
            );

        } else if (
            command === "experience"
        ) {

            openWindow(
                document.getElementById(
                    "experienceWindow"
                )
            );


            addTerminalLine(
                "opening Employment Records..."
            );

        } else if (
            command === "certs"
        ) {

            openWindow(
                document.getElementById(
                    "certificationsWindow"
                )
            );


            addTerminalLine(
                "opening Credential Manager..."
            );

        } else if (
            command === "resume"
        ) {

            openWindow(
                document.getElementById(
                    "resumeWindow"
                )
            );


            addTerminalLine(
                "opening Resume Viewer..."
            );

        } else if (
            command === "contact"
        ) {

            openWindow(
                document.getElementById(
                    "contactWindow"
                )
            );


            addTerminalLine(
                "opening Lauren Messenger..."
            );

        } else if (
            command === "aboutos"
        ) {

            openWindow(
                document.getElementById(
                    "aboutOsWindow"
                )
            );


            addTerminalLine(
                "opening About laurenOS..."
            );

        } else if (
            command === "version"
        ) {

            addTerminalLine(
                "laurenOS v1.7 — interactive portfolio build"
            );


            addTerminalLine(
                "HTML + CSS + JavaScript | deployed with GitHub Pages"
            );

        } else if (
            command === "system"
        ) {

            openWindow(
                document.getElementById(
                    "skillsWindow"
                )
            );


            addTerminalLine(
                "opening My Computer..."
            );

        } else if (
            command === "music"
        ) {

            openWindow(
                document.getElementById(
                    "musicWindow"
                )
            );


            addTerminalLine(
                "opening Music Player..."
            );

        } else if (
            command === "notify"
        ) {

            addNotification(
                "terminal.exe",
                "test notification received successfully ♡",
                "💻"
            );

        } else if (
            command === "theme"
        ) {

            addTerminalLine(
                `current theme: ${
                    getThemeLabel(
                        localStorage.getItem(
                            "laurenOS-theme"
                        ) || "pink"
                    )
                }`
            );

        } else if (
            command === "about"
        ) {

            addTerminalLine(
                "Lauren Surles — computer science student, IT graduate, and creative technologist."
            );

        } else if (
            command === "skills"
        ) {

            addTerminalLine(
                "Python | JavaScript | HTML | CSS | REST APIs | JSON | Git | GitHub | ServiceNow | JIRA | Microsoft 365"
            );

        } else if (
            command === "clear"
        ) {

            terminalOutput.innerHTML =
                "";

        } else if (
            command !== ""
        ) {

            addTerminalLine(
                `'${command}' is not recognized.`
            );
        }


        terminalInput.value =
            "";
    }
);


function addTerminalLine(
    text
) {

    const line =
        document.createElement(
            "p"
        );


    line.textContent =
        text;


    terminalOutput.appendChild(
        line
    );


    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}


// =============================
// CLOCK
// =============================

function updateClock() {

    clock.textContent =
        new Date()
            .toLocaleTimeString(
                [],
                {
                    hour:
                        "2-digit",

                    minute:
                        "2-digit"
                }
            );
}


updateClock();


setInterval(
    updateClock,
    1000
);


// =============================
// MUSIC
// =============================

const audio =
    new Audio();


const tracks = [

    {
        title:
            "Pink Startup",

        artist:
            "LaurenOS Radio",

        emoji:
            "💖",

        src:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
        title:
            "Soft Launch",

        artist:
            "Retro Systems",

        emoji:
            "🌸",

        src:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },

    {
        title:
            "Dream in Pastel",

        artist:
            "Desktop Nights",

        emoji:
            "✨",

        src:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }

];


const albumArt =
    document.getElementById(
        "albumArt"
    );

const musicTitle =
    document.getElementById(
        "musicTitle"
    );

const musicArtist =
    document.getElementById(
        "musicArtist"
    );

const nowPlayingStatus =
    document.getElementById(
        "nowPlayingStatus"
    );

const playPauseButton =
    document.getElementById(
        "playPauseButton"
    );

const prevTrackButton =
    document.getElementById(
        "prevTrackButton"
    );

const nextTrackButton =
    document.getElementById(
        "nextTrackButton"
    );

const musicProgress =
    document.getElementById(
        "musicProgress"
    );

const currentTimeDisplay =
    document.getElementById(
        "currentTime"
    );

const durationDisplay =
    document.getElementById(
        "duration"
    );

const volumeSlider =
    document.getElementById(
        "volumeSlider"
    );

const playlistItems =
    document.getElementById(
        "playlistItems"
    );


let currentTrackIndex =
    0;


function loadTrack(
    index
) {

    currentTrackIndex =
        index;


    const track =
        tracks[index];


    audio.src =
        track.src;


    albumArt.textContent =
        track.emoji;


    musicTitle.textContent =
        track.title;


    musicArtist.textContent =
        track.artist;


    renderPlaylist();
}


function renderPlaylist() {

    playlistItems.innerHTML =
        "";


    tracks.forEach(
        function (
            track,
            index
        ) {

            const button =
                document.createElement(
                    "button"
                );


            button.classList.add(
                "playlist-item"
            );


            if (
                index ===
                currentTrackIndex
            ) {

                button.classList.add(
                    "active"
                );
            }


            button.innerHTML =
                `<span>${track.title}</span>
                 <span>${track.emoji}</span>`;


            button.addEventListener(
                "click",
                function () {

                    loadTrack(
                        index
                    );


                    audio.play();
                }
            );


            playlistItems.appendChild(
                button
            );
        }
    );
}


playPauseButton.addEventListener(
    "click",
    function () {

        if (
            audio.paused
        ) {

            audio.play();

        } else {

            audio.pause();
        }
    }
);


prevTrackButton.addEventListener(
    "click",
    function () {

        currentTrackIndex =
            (
                currentTrackIndex -
                1 +
                tracks.length
            ) %
            tracks.length;


        loadTrack(
            currentTrackIndex
        );


        audio.play();
    }
);


nextTrackButton.addEventListener(
    "click",
    function () {

        currentTrackIndex =
            (
                currentTrackIndex +
                1
            ) %
            tracks.length;


        loadTrack(
            currentTrackIndex
        );


        audio.play();
    }
);


audio.addEventListener(
    "ended",
    function () {

        currentTrackIndex =
            (
                currentTrackIndex +
                1
            ) %
            tracks.length;


        loadTrack(
            currentTrackIndex
        );


        audio.play();
    }
);


audio.addEventListener(
    "play",
    function () {

        playPauseButton.textContent =
            "❚❚";


        nowPlayingStatus.textContent =
            "now playing ♡";
    }
);


audio.addEventListener(
    "pause",
    function () {

        playPauseButton.textContent =
            "▶";


        nowPlayingStatus.textContent =
            "paused ♡";
    }
);


audio.addEventListener(
    "timeupdate",
    function () {

        musicProgress.max =
            audio.duration || 0;


        musicProgress.value =
            audio.currentTime;


        currentTimeDisplay.textContent =
            formatTime(
                audio.currentTime
            );


        durationDisplay.textContent =
            formatTime(
                audio.duration
            );
    }
);


musicProgress.addEventListener(
    "input",
    function () {

        audio.currentTime =
            musicProgress.value;
    }
);


volumeSlider.addEventListener(
    "input",
    function () {

        audio.volume =
            volumeSlider.value;
    }
);


audio.volume =
    volumeSlider.value;


function formatTime(
    seconds
) {

    if (
        !Number.isFinite(
            seconds
        )
    ) {

        return "0:00";
    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const secs =
        Math.floor(
            seconds % 60
        )
            .toString()
            .padStart(
                2,
                "0"
            );


    return `${minutes}:${secs}`;
}


loadTrack(0);


// =============================
// SHUTDOWN
// =============================

shutdownButton.addEventListener(
    "click",
    function () {

        document.body.innerHTML = `
            <div style="
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #111;
                color: white;
                font-family: monospace;
                font-size: 24px;
                text-align: center;
                padding: 30px;
            ">
                it's now safe to turn off your computer ♡
            </div>
        `;
    }
);


// =============================
// STARTUP NOTIFICATIONS
// =============================

renderNotifications();


setTimeout(
    function () {

        const returningUser =
            localStorage.getItem(
                "laurenOS-visited"
            );


        if (
            returningUser
        ) {

            addNotification(
                "welcome back ♡",
                "laurenOS v1.7 is ready. your desktop preferences were restored.",
                "💖"
            );

        } else {

            addNotification(
                "welcome to laurenOS ♡",
                "click around, open some windows, and make yourself at home.",
                "🌸"
            );


            localStorage.setItem(
                "laurenOS-visited",
                "true"
            );
        }


        setTimeout(
            function () {

                addNotification(
                    "system tip",
                    "open Terminal and type 'help' to discover available commands.",
                    "💻",
                    false
                );

            },
            700
        );


        setTimeout(
            function () {

                addNotification(
                    "portfolio loaded",
                    "Projects, experience, credentials, resume, contact tools, and system information are ready.",
                    "📁",
                    false
                );

            },
            1000
        );

    },
    3000
);