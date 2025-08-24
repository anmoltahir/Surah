//whatever dropdow list user click you get a value number save that value number and display the entire div with that id
// Logic: Dropdown value → Find div with same ID → Show it

const dropdown = document.querySelector(".dropDown");
const surah = document.getElementById("surah");
const showBtn = document.getElementById("showBtn");

showBtn.addEventListener("click", surahSwitch);


function surahSwitch(){

    switch(dropdown.value){
        case "114": surah.innerText = " An-Nas: I seek refuge in the Lord of mankind, The Master, the God of mankind, From the evil whispers in the hearts, From both jinn and human beings.";
        break;

        case "113":
            surah.innerText = " Al-Falaq: I seek refuge in Allah, the Lord of daybreak, From the harm of what He created, From the darkness when it spreads, From those who harm with envy, And from evil forces that try to corrupt.";
        break;

        case "112":
            surah.innerText = "Al-Ikhlas: Allah is One, the Eternal. He has no children, nor was He born. Nothing is equal to Him.";
        break;

        case "111":
            surah.innerText = "Al-Masad: A warning about Abu Lahab, His wealth and power will not save him. He and his wife will face the Fire, Teaching that true worth is faith and deeds, not wealth.";
        break;

        case "110":
            surah.innerText = "An-Nasr: When Allahs help and victory comes, And people enter Islam in crowds, Glorify your Lord with praise, And seek His forgiveness.";
        break;

        case "109":
            surah.innerText = "Al-Kafirun: A declaration of faith: To the disbelievers, “I do not worship what you worship.” You have your way, and I have mine.";
        break;

        case "108":
            surah.innerText = "Al-Kawthar: Allah gave the Prophet abundant blessings. So pray and sacrifice for Him alone. The enemies of truth will be cut off.";
        break;

        case "107":
            surah.innerText = "Al-Ma'un: Woe to those who deny the Day of Judgment, Who neglect prayer, Show off in worship, And withhold even the smallest kindness.";
        break;

        case "106":
            surah.innerText = "Quraysh: Reminds Quraysh of Allahs favors: Safe journeys in winter and summer, Provision and security. So they should worship the Lord of the Kaʿbah.";
        break;

        case "105":
            surah.innerText = "Al-Fil: A reminder of Allahs protection: How He destroyed the army of the elephant, Sent birds with stones, And made them like eaten straw.";
        break;

        case "104":
            surah.innerText = "Al-Humazah: Woe to the one who mocks and slanders, And piles up wealth thinking it makes him eternal. He will be thrown into the crushing Fire.";
        break;

        case "103":
            surah.innerText = "Al-'Asr: By time, Humanity is in loss, Except those who believe, do good, encourage truth, and patience.";
        break;

        case "102":
            surah.innerText = "At-Takathur: The race for more wealth distracts people, Until they reach the graves. They will see the truth on the Day of Judgment, And be asked about their blessings.";
        break;

        case "101":
            surah.innerText = "Al-Qari'ah: The Striking Calamity. On that Day, people will be scattered like moths, Mountains like fluffed wool. The scale of deeds will decide fate: Heavy with good → Paradise, Light → the blazing Fire.";
        break;

        case "100":
            surah.innerText = "Al-'Adiyat: By the galloping horses that charge at dawn, Human beings are ungrateful to their Lord. They love wealth strongly, But on the Day of Judgment, secrets will be revealed.";
        break;

        case "99":
            surah.innerText = "Az-Zalzalah: When the earth is shaken with its quake, And throws out its burdens, People will ask, “What is happening?” Every deed, big or small, will be shown.";
        break;

        default:
            surah.innerText = "Please pick a Surah.";
    }
}