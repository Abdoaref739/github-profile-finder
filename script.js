var searchButton = document.getElementById("search-button");
var resultsDiv = document.getElementById("results-div");
    var profileAvatar = document.getElementById("profile-avatar");
    var github_username_field = document.getElementById("github-username");
    var dateOfCreation = document.getElementById("date-of-creation");
    let followers = document.getElementById("followers");
    let following = document.getElementById("following");
    var followersNumber = document.getElementById("followers-number");
    var followingNumber = document.getElementById("following-number");
    profileAvatar.style.display = "none";
    followers.style.display = "none";
    following.style.display = "none";
searchButton.addEventListener("click", () =>{
    getData();
})

function getData(){
    var searchField = document.getElementById("search-field").value;
    let reposNumber = document.getElementById("repos-number");
    resultsDiv.style.display = "block";
    profileAvatar.style.display = "block";
    followers.style.display = "block";
    following.style.display = "block";
    var github_username = searchField;
    console.log(github_username)
    let results = fetch(`https://api.github.com/users/${github_username}`).then(res => res.json()).then(data =>{
    console.log(data); 
    profileAvatar.src = data.avatar_url;
    github_username_field.innerHTML = `${data.login} (${data.name})`;
    dateOfCreation.innerHTML = `created at: ${(data.created_at)}`;
    followersNumber.innerHTML = data.followers;
    followingNumber.innerHTML = data.following;
    reposNumber.innerHTML = `${data.public_repos} repos created!`;
    });
    console.log(results);
}
