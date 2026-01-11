alert("JS is coonected!");

const musicdata = {
    happy: {
        title: "😊 Happy Vibes",
        songs: [
            "Sunroof - Nicky Youre",
            "Good as Hell - Lizzo",
            "Walking on Sunshine - Katrina & The Waves",
            "Levitating - Dua Lipa"
        ]
    },
    sad: {
        title: "😞 Sad Hours",
        song: [
            "Another Love - Tom Odell",
            "Fix You - Coldplay",
            "All I Want - Kodaline",
            "Someone Like You - Adele"
        ]
    },
    focused: {
        title: "🎯 Focus Mode",
        songs: [
            "Lo-fi Beats",
            "Interstellar Theme",
            "Weightless - Marconi Union",
            "Chillhop Essentials"
        ]
    },
    angry: {
        title: "😡 Let It Out",
        songs: [
            "Believer - Imagine Dragons",
            "Numb - Linkin Park",
            "Smells Like Teen Spirit - Nirvana",
            "Lose Yourself - Eminem"
        ]
    }
};

function showmusic(mood) {
    const resultDiv = document.getElementById("result");
    const moodData = musicdata[mood];

    let html = `<h3>${moodData.title}</h3><ul>`;

    resultDiv,innerHTML = html;
}