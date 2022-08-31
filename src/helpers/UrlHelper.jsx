const basePosterURL = "https://www.themoviedb.org/t/p/w370_and_h556_multi_faces/";
const base_img_path = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
let posterURL;
let profilURL;

export function urlMovieMaker(path, className) {
    if (path) {
        posterURL = `${basePosterURL}${path}`;
    } else {
        posterURL = "../img/body/question-mark.png";
        className = `${className} undefinedImg`;
    }
    return { posterURL, className };
}

export function urlActorMaker(path) {
    if (path) {
        profilURL = `${base_img_path}${path}`;
    } else {
        profilURL = "../img/body/question.png";
    }
    return profilURL;
}

export function urlMakerModal(path) {
    if (path) {
        posterURL = `${process.env.CARD_IMG_BASE_URL}${path}`;
    } else {
        posterURL = "../img/body/question-mark.png";
    }
    return posterURL;
}

export function urlWeb(text) {
    let url = text.split(' ')
    url = url.join("-")
    return url;
}