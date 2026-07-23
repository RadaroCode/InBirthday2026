let current = 0;

const dialogues = [
    "สวัสดีค้าบบบบ",
    "อ๋าา นี่คือสุดสวยของจื๋อนี่เอง",
    "ก็นะต้องขอโชว์บางอย่างก่อนที่จะเข้าเรื่อง",
    "ลองมาทบทวนกันดีกว่าา ว่าตั้งแต่เราคุยกันมามีอะไรเกิดขึ้นบ้าง"
];

const pictures = [
    "images/hi.jpg",
    "images/radaro4.png",
    "images/radaro1.png",
    "images/radaro2.png"
];

function nextDialogue() {
    current++;

    if (current < dialogues.length) {
        document.getElementById("dialogue").textContent = dialogues[current];
        document.getElementById("photo").src = pictures[current];
    } else {
        window.location.href = "index2.html";
    }
}
