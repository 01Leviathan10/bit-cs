import RepoThings from "./repoThings";
import UserThings from "./userThings";

const repoThings = new RepoThings();
const userThings = new UserThings();

// change this in order to use different data service
let thingsService = userThings;
//let thingsService = repoThings;

thingsService.getThings((things) => {
    things.forEach((thing) => {
        let avatarurl = thing.getAvatarUrl();
        let name = thing.getName();
    
        $('body').append(`${name}<img class="" src="${avatarurl}">`);
    });
});




