document.getElementById("username").addEventListener("input", (e) => {
  let username = e.target.value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users/" + username, true);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      let githibData = `
            <div class="card">
                <div class="card-header">${data.name}</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-3 col-lg-2">
							<img src="${data.avatar_url}" class="rounded float-left" alt="..." style="width: 100%;">
							<a href="${data.html_url}" class="btn btn-primary mt-2" style="display: block; width: 100%;" target="_blank">Visit Profile</a>
							</div>
							<div class="col-md-10 col-lg-10">
							<span class="badge bg-primary">Public Repos : ${data.public_repos}</span>
							<span class="badge bg-success">Public Gists : ${data.public_gists}</span>
							<span class="badge bg-secondary">Followers : ${data.followers}</span>
							<span class="badge bg-info">Following : ${data.following}</span>
							<ul class="list-group mt-2">
								<li class="list-group-item d-flex justify-content-between align-items-center">Company : ${data.company}</li>
								<li class="list-group-item d-flex justify-content-between align-items-center">Website/Blog : ${data.blog}</li>
								<li class="list-group-item d-flex justify-content-between align-items-center">Eamil : ${data.email}</li>
								<li class="list-group-item d-flex justify-content-between align-items-center">Location : ${data.location}</li>
								<li class="list-group-item d-flex justify-content-between align-items-center">Member Since : ${data.created_at}</li>
							</ul>
						</div>
					</div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <ul class="list-group mt-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center">Short Bio : ${data.bio}</li>
                    </ul>
                </div>
            </div>
            `;
      document.getElementById("output").innerHTML = githibData;
    }
  };
  xhr.send();
});
