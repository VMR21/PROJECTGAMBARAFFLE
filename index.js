<!DOCTYPE html>
<html lang="en">

<head>
    <title>ProjectGamba | Weekly Raffle</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Participate in the exclusive Weekly Raffle on Rainbet for code ProjectGamba!">
    <meta property="og:image"
        content="https://ws.bma.gg/api/screenshot?url=https%3A%2F%2FErnTmz.gg%2Fleaderboard%2Froobet&w=1280&h=720&z=1&d=0&f=false&darkMode=false">
    <link rel="icon" type="image/jpg" href="/assets/logo1.png">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <link rel="stylesheet" type="text/css" href="/css/lb.css">
    <link rel="stylesheet" type="text/css" href="/css/vendor.css">
    <link rel="stylesheet" type="text/css" href="/css/toast.css">
    <style>
        /* Your existing custom styles go here */
        .warning-message {
            width: 90%;
            max-width: 500px;
            margin: 10px auto;
            background-color: rgba(255, 0, 0, 0.1);
            border: 2px solid #ff4444;
            border-radius: 4px;
            padding: 15px;
            color: #ff4444;
            font-weight: bold;
            text-align: center;
            box-sizing: border-box;
        }

        @media screen and (max-width: 768px) {
            .warning-message {
                width: 95%;
                padding: 12px;
                font-size: 14px;
                margin: 10px auto;
            }
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.7);
            opacity: 0;
            transition: opacity 0.5s ease;
        }

        .modal.show {
            opacity: 1;
        }

        .modal-content {
            background: linear-gradient(135deg, #1f2937, #111827);
            margin: 10% auto;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            width: 80%;
            max-width: 600px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            transform: translateY(-20px);
            transition: transform 0.5s ease;
            position: relative;
        }

        .modal.show .modal-content {
            transform: translateY(0);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 15px;
            margin-bottom: 15px;
        }

        .modal-title {
            font-size: 24px;
            font-weight: 700;
            color: #fff;
            margin: 0;
        }

        .close {
            color: #aaa;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.2s ease;
        }

        .close:hover {
            color: #fff;
        }

        .modal-body {
            color: #d1d5db;
            font-size: 16px;
            line-height: 1.6;
        }

        .modal-body li {
            margin-bottom: 10px;
            text-align: left;
        }

        .modal-body ul {
            padding-left: 20px;
        }

        .prev-lb-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgb(39, 117, 202);
            color: #000;
            padding: 12px 24px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 15px rgba(39, 117, 202, 0.2);
            position: relative;
            overflow: hidden;
        }

        .prev-lb-btn:hover {
            transform: translateY(-2px) scale(1.02);
            background: rgb(39, 117, 202);
            box-shadow: 0 6px 20px rgba(39, 117, 202, 0.4);
            border-color: rgba(255, 255, 255, 0.4);
            text-decoration: none;
            color: black;
        }

        .prev-lb-btn:active {
            transform: translateY(0) scale(0.98);
        }

        .prev-lb-btn svg {
            width: 18px;
            height: 18px;
            transition: transform 0.2s ease;
        }

        @keyframes float {
            0% {
                transform: translateY(0px) scaleX(1) rotate(20deg);
            }

            50% {
                transform: translateY(-10px) scaleX(1) rotate(20deg);
            }

            100% {
                transform: translateY(0px) scaleX(1) rotate(20deg);
            }
        }

        @keyframes floatLeft {
            0% {
                transform: translateY(0px) scaleX(-1) rotate(20deg);
            }

            50% {
                transform: translateY(-10px) scaleX(-1) rotate(20deg);
            }

            100% {
                transform: translateY(0px) scaleX(-1) rotate(20deg);
            }
        }

        .coin-container {
            position: relative;
            height: 0;
            margin: 0;
        }

        .coin-left,
        .coin-right {
            position: absolute;
            height: 100px;
            width: auto;
            opacity: 0.7;
            top: -50px;
        }

        .coin-left {
            left: 22%;
            animation: floatLeft 3s ease-in-out infinite;
        }

        .coin-right {
            right: 25%;
            animation: float 3s ease-in-out infinite;
        }

        @media screen and (max-width: 768px) {
            .coin-container {
                display: none;
            }
        }

        /* Updated countdown style for raffle */
        #countdown {
            font-size: 3rem;
            font-weight: 800;
            color: #ffffff;
            text-shadow: 0 0 10px #00eaff, 0 0 20px #00eaff, 0 0 40px #00eaff;
            text-align: center;
            width: 100%;
        }

        @media (max-width: 768px) {
            #countdown {
                font-size: 2rem;
            }
        }

        /* Styling for the raffle elements */
        .raffle-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 800px;
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            background-color: #1a202c;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            color: #e2e8f0;
        }

        .raffle-container h1,
        .raffle-container p {
            color: #fff;
            text-align: center;
        }

        .raffle-search-section {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 25px;
            width: 100%;
        }

        .raffle-input-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        @media (min-width: 640px) {
            .raffle-input-group {
                flex-direction: row;
            }
        }

        .raffle-input-group input {
            flex-grow: 1;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid #4a5568;
            background-color: #2d3748;
            color: #e2e8f0;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s;
        }

        .raffle-input-group input::placeholder {
            color: #a0aec0;
        }

        .raffle-input-group input:focus {
            border-color: #4299e1;
        }

        .raffle-input-group button {
            padding: 12px 20px;
            border-radius: 8px;
            background-color: #4299e1;
            color: white;
            font-weight: bold;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s;
            flex-shrink: 0;
        }

        .raffle-input-group button:hover {
            background-color: #3182ce;
        }

        #results {
            background-color: #2d3748;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            font-size: 1rem;
            font-weight: bold;
            color: #e2e8f0;
            min-height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            width: 100%;
        }

        #ticketContainer {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-top: 20px;
            background-color: #2d3748;
            padding: 20px;
            border-radius: 12px;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
            width: 100%;
        }

        #ticketContainer>div {
            padding: 10px;
            border: 1px solid #4a5568;
            border-radius: 8px;
            background: #4a5568;
            min-width: 100px;
            color: #e2e8f0;
            font-size: 0.9rem;
            font-weight: 600;
            text-align: center;
            flex-basis: calc(20% - 10px);
            box-sizing: border-box;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.1s ease-in-out;
        }

        #ticketContainer>div:hover {
            transform: translateY(-2px);
            background: #5a67d8;
        }

        #loadMore {
            margin-top: 25px;
            padding: 12px 30px;
            background-color: #4299e1;
            color: white;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s;
        }

        #loadMore:hover {
            background-color: #3182ce;
        }
    </style>
</head>

<body>
    <div id="toast">
        <span id="message"></span>
    </div>
    <div id="rulesModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Raffle Rules</h2>
                <span class="close">×</span>
            </div>
            <div class="modal-body">
                <p>Here are the rules for the Weekly Raffle:</p>
                <ul>
                    <li>Every $100 wagered on Rainbet using **Code ProjectGamba** earns you 1 ticket.</li>
                    <li>Tickets are updated live as you wager.</li>
                    <li>The raffle runs from **Saturday 2:00 PM UTC** until **Friday 23:59:59 UTC** every week.</li>
                    <li>The winner will be announced shortly after the cutoff time.</li>
                    <li>Ensure you are playing on Rainbet with **Code ProjectGamba** for your wagers to count!</li>
                </ul>
            </div>
        </div>
    </div>
    <canvas id="particleCanvas"></canvas>
    <div class="glow-container">
        <div class="left-glow"></div>
        <div class="right-glow"></div>
    </div>
    <object type="image/png" data="/assets/left-rainbet.png" id="leftsvg" height="100%">
    </object>
    <object type="image/png" data="/assets/right-rainbet.png" id="rightsvg" height="100%">
    </object>
    <header>
        <nav>
            <div class="logo-title">
                <img src="/assets/logo1.png" alt="Site logo" class="logo">
                <h1 class="title">ProjectGamba</h1>
            </div>
            <ul class="nav-links">
                <li><a href="/">HOME</a></li>
            </ul>
        </nav>
    </header>
    <div class="toggle-images" style="margin-top: 50px;">
        <img class="game-image roobet-image" id="roobetImage" src="/assets/rainbet.png"
            style="cursor: pointer;opacity: 1;" onclick="window.location.href='/leaderboard/rainbet'">
    </div>
    <br>

    <div data-v-1d580398="" data-v-e4097664="" id="appContent" class="raffle-container">
        <h1 class="text-4xl font-extrabold mb-2 text-center" style="color: #ffffff;">
            🎟️ Weekly Raffle - ProjectGamba
        </h1>
        <p class="text-lg text-center mb-6" style="color: #a0aec0;">
            Every $100 wager gets you 1 ticket. Updated live.
        </p>

        <div id="countdown" class="text-2xl font-semibold mb-8 p-4 bg-gray-800 rounded-lg shadow-md">
            Loading countdown...
        </div>

        <div class="raffle-search-section">
            <div class="raffle-input-group">
                <input type="text" id="searchUser" placeholder="Search by username...">
                <button onclick="searchByUser()">Find Tickets</button>
            </div>

            <div class="raffle-input-group">
                <input type="number" id="searchTicket" placeholder="Search by ticket number...">
                <button onclick="searchByTicket()">Find User</button>
            </div>
        </div>

        <div id="results" class="results-display">
            Search results will appear here.
        </div>

        <div id="ticketContainer"></div>
        <button id="loadMore" onclick="loadMore()">Load More</button>
    </div>

    <div data-v-5867ad71="" class="row inner-footer">
        <div data-v-5867ad71="" class="col-5">
            <div data-v-5867ad71="" class="content">
                <div data-v-5867ad71="" class="company"></div><br data-v-5867ad71=""><span data-v-5867ad71=""
                    class="copyright">ProjectGamba<br data-v-5867ad71=""> All Right Reserved 2025.</span>
            </div>
        </div>

        <div data-v-5867ad71="" class="col">
            <span data-v-5867ad71="" class="title">Info</span>
            <a data-v-5867ad71="" href="/" class=""><span data-v-5867ad71="" class="subtitle">Terms of
                    Service</span></a>
            <a data-v-5867ad71="" href="/" class=""><span data-v-5867ad71="" class="subtitle">Privacy
                    Policy</span></a>
        </div>
        <style>
            .footer-socials {
                display: flex;
                flex-direction: column;
                gap: 14px;
                margin-top: 10px;
            }

            .footer-socials a.social {
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
                color: white;
                font-weight: bold;
                font-size: 14px;
                transition: transform 0.2s;
            }

            .footer-socials a.social:hover {
                transform: translateX(4px);
            }

            .footer-socials .social-img {
                width: 22px;
                height: 22px;
                object-fit: contain;
            }
        </style>

        <div class="col">
            <span class="title">Socials</span>
            <div class="footer-socials">
                <a href="https://kick.com/ProjectGamba" target="_blank" class="social">
                    <img src="/assets/kick.png" alt="Kick Logo" class="social-img">
                    <span>Kick</span>
                </a>
                <a href="https://x.com/ProjectGamba" target="_blank" class="social">
                    <img src="/assets/x.png" alt="X Logo" class="social-img">
                    <span>X</span>
                </a>
                <a href="https://youtube.com/@ProjectGamba" target="_blank" class="social">
                    <img src="/assets/youtube.png" alt="YouTube Logo" class="social-img">
                    <span>YouTube</span>
                </a>
                <a href="https://discord.com/invite/kq6Sc3AwX4" target="_blank" class="social">
                    <img src="/assets/discord.png" alt="Discord Logo" class="social-img">
                    <span>Discord</span>
                </a>
            </div>
        </div>

        <div data-v-5867ad71="" class="col">
            <span data-v-5867ad71="" class="title">BeGambleAware.com</span>
            <span data-v-5867ad71="" class="subtitle" style="font-size: 9px;">Responsible Gambling Advisory: While
                gambling can be entertaining,
                it's crucial to be aware of the associated risks. Exercise self-control,
                set limits, and seek support if needed. Enjoy the excitement responsibly
                and prioritize your well-being.</span>
        </div>
    </div>

    <!-- Removed Cloudflare analytics script as it was causing an 'Invalid URL' error.
         This script is external to the core raffle functionality. -->
    <!--
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"
        xintegrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ=="
        data-cf-beacon='{"rayId":"93f624c93c488202","version":"2025.4.0-1-g37f21b1","r":1,"token":"6a289e34095c4e319f5a765107c772ad","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}}}'
        crossorigin="anonymous"></script>
    -->

    <script>
        // Modal script (Leaderboard Rules renamed to Raffle Rules)
        var modal = document.getElementById("rulesModal");
        var btn = document.getElementById("rulesButton");
        var span = document.getElementsByClassName("close")[0];

        // Check if elements exist before assigning events
        if (btn) {
            btn.onclick = function () {
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                setTimeout(() => {
                    modal.classList.add("show");
                }, 10);
            }
        } else {
            console.warn("Element with ID 'rulesButton' not found. Modal button might not work.");
        }

        if (span) {
            span.onclick = closeModal;
        } else {
            console.warn("Element with class 'close' for modal not found. Modal close might not work.");
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                closeModal();
            }
        }

        function closeModal() {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }, 500);
        }

        // Raffle Specific JavaScript (integrated and adapted)
        const API = 'https://projectgambaraffle.onrender.com/raffle/tickets'; // Raffle API
        let tickets = []; // Array to store all fetched tickets
        let currentIndex = 0; // Tracks the current index for displaying tickets
        const step = 10; // Number of tickets to display per load

        /**
         * Fetches tickets from the API and initializes the display.
         */
        async function fetchTickets() {
            try {
                const res = await fetch(API);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                tickets = await res.json();
                // Sort tickets by ticket number to ensure consistent display
                tickets.sort((a, b) => a.ticket - b.ticket);
                displayTickets(); // Display the initial set of tickets
            } catch (error) {
                console.error("Failed to fetch tickets:", error);
                const resultsDiv = document.getElementById('results');
                if (resultsDiv) { // Ensure resultsDiv exists before trying to update it
                    resultsDiv.textContent = "Error loading tickets. Please try again later.";
                }
            }
        }

        /**
         * Displays a batch of tickets in the ticketContainer.
         */
        function displayTickets() {
            const container = document.getElementById('ticketContainer');
            const loadMoreButton = document.getElementById('loadMore');

            if (!container) {
                console.error("Element with ID 'ticketContainer' not found.");
                return;
            }

            const slice = tickets.slice(currentIndex, currentIndex + step);

            if (slice.length === 0 && currentIndex === 0) {
                container.innerHTML = '<p class="text-gray-500 text-center w-full">No tickets available yet.</p>';
                if (loadMoreButton) loadMoreButton.style.display = 'none';
                return;
            }

            slice.forEach(t => {
                const div = document.createElement('div');
                div.style = 'padding: 10px; border: 1px solid #4a5568; border-radius: 8px; background: #4a5568; min-width: 100px; color: #e2e8f0; font-size: 0.9rem; font-weight: 600; text-align: center; flex-basis: calc(20% - 10px); box-sizing: border-box; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: transform 0.1s ease-in-out;';
                div.textContent = `#${t.ticket} - ${t.username}`;
                container.appendChild(div);
            });
            currentIndex += step;

            if (loadMoreButton) {
                if (currentIndex >= tickets.length) {
                    loadMoreButton.style.display = 'none';
                } else {
                    loadMoreButton.style.display = 'block';
                }
            }
        }

        /**
         * Loads more tickets when the "Load More" button is clicked.
         */
        function loadMore() {
            displayTickets();
        }

        /**
         * Searches for tickets by username and displays the corresponding ticket numbers.
         */
        function searchByUser() {
            const searchUser = document.getElementById('searchUser');
            const resultsDiv = document.getElementById('results');
            if (!searchUser || !resultsDiv) return; // Add checks

            const name = searchUser.value.trim();
            if (!name) {
                resultsDiv.textContent = 'Please enter a username to search.';
                return;
            }
            const results = tickets.filter(t => t.username.toLowerCase() === name.toLowerCase());
            const output = results.map(t => `#${t.ticket}`).join(', ');
            resultsDiv.textContent = output ? `Tickets for "${name}": ${output}` : `No tickets found for "${name}".`;
        }

        /**
         * Searches for a username by ticket number and displays the username.
         */
        function searchByTicket() {
            const searchTicket = document.getElementById('searchTicket');
            const resultsDiv = document.getElementById('results');
            if (!searchTicket || !resultsDiv) return; // Add checks

            const ticketInput = searchTicket.value;
            if (!ticketInput) {
                resultsDiv.textContent = 'Please enter a ticket number to search.';
                return;
            }
            const ticket = parseInt(ticketInput);
            if (isNaN(ticket)) {
                resultsDiv.textContent = 'Invalid ticket number. Please enter a valid number.';
                return;
            }
            const result = tickets.find(t => t.ticket === ticket);
            resultsDiv.textContent = result ? `Ticket #${ticket} belongs to: ${result.username}` : `Ticket #${ticket} not found.`;
        }

        /**
         * Updates the countdown timer for the weekly raffle.
         * The raffle period runs from Saturday 2 PM UTC to Friday 23:59:59 UTC.
         */
        function updateCountdown() {
            const now = new Date();
            const nowUtc = new Date(now.toUTCString());

            let targetFridayCutoff = new Date(Date.UTC(nowUtc.getUTCFullYear(), nowUtc.getUTCMonth(), nowUtc.getUTCDate(), 23, 59, 59, 999));
            let daysUntilFriday = (5 - nowUtc.getUTCDay() + 7) % 7;

            targetFridayCutoff.setUTCDate(nowUtc.getUTCDate() + daysUntilFriday);

            if (nowUtc.getTime() > targetFridayCutoff.getTime()) {
                targetFridayCutoff.setUTCDate(targetFridayCutoff.getUTCDate() + 7);
            }

            let currentRaffleStartTime = new Date(targetFridayCutoff);
            currentRaffleStartTime.setUTCHours(14, 0, 0, 0);
            currentRaffleStartTime.setUTCDate(currentRaffleStartTime.getUTCDate() - ((currentRaffleStartTime.getUTCDay() + 7 - 6) % 7));

            const countdownElement = document.getElementById('countdown');
            if (!countdownElement) return; // Check if countdown element exists

            if (nowUtc.getTime() < currentRaffleStartTime.getTime()) {
                countdownElement.textContent = "Raffle closed. Next raffle starts Saturday 2 PM UTC.";
            } else {
                const diff = targetFridayCutoff.getTime() - nowUtc.getTime();

                if (diff <= 0) {
                    countdownElement.textContent = "Raffle closed. Next raffle starts Saturday 2 PM UTC.";
                } else {
                    const d = Math.floor(diff / 86400000);
                    const h = Math.floor((diff % 86400000) / 3600000);
                    const m = Math.floor((diff % 3600000) / 60000);
                    const s = Math.floor((diff % 60000) / 1000);
                    countdownElement.textContent = `Time until cutoff: ${d}d ${h}h ${m}m ${s}s (Friday 23:59 UTC)`;
                }
            }
        }

        // Initialize countdown and fetch tickets when the page loads
        setInterval(updateCountdown, 1000);
        updateCountdown();
        fetchTickets();

        // Load external JS files after your main script.
        // If these files contain functions that your custom script relies on *before* DOMContentLoaded,
        // you might need to adjust. Otherwise, this placement is standard.
    </script>
    <script src="/js/app.js"></script>
    <script src="/js/particles.js"></script>
    <script src="/js/toast.js"></script>

</body>

</html>
