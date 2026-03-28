function generateExcuse() {
    const excuses = [
        "No puedo ir a la escuela porque tengo un resfriado.",
        "Me duele la cabeza y no puedo concentrarme.",
        "Tengo una cita médica y no puedo asistir a clase.",
        "Me siento mal y necesito descansar.",
        "Tengo que ayudar a un familiar con un problema urgente."
    ];
    const randomIndex = Math.floor(Math.random() * excuses.length);
    return excuses[randomIndex];
}
document.querySelector(".generate-button").addEventListener("click", () => {
    const excuse = generateExcuse();
    document.getElementById("excuse").innerText = excuse;
});