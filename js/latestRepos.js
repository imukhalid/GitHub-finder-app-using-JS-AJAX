document.getElementById("username").addEventListener("input", (e) => {
  let username = e.target.value;
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.github.com/users/" + username + "/repos?per_page=10",
    true
  );
  xhr.onreadystatechange = function () {
    document.getElementById("reposname").innerHTML = "";
    if (this.readyState == 4 && this.status == 200) {
      const Repodata = JSON.parse(this.responseText);
      for (var i = 0; i < Repodata.length; i++) {
        let reposData = `
            <tr>
                <td style="width: 30%; padding-left: 15px;">${Repodata[i].name}</td>
                <td style="width: 40%; padding-left: 15px;">${Repodata[i].description}</td>
                <td style="width: 20%; padding-left: 15px;">
                    <div>
                        <span class="badge bg-primary">Forks : ${Repodata[i].forks_count}</span>
                        <span class="badge bg-info">Watchers : ${Repodata[i].watchers_count}</span>
                        <span class="badge bg-success">Stars : ${Repodata[i].stargazers_count}</span>
                    </div>
                </td>
                <td style="width: 10%; padding-left: 15px;"><span class="badge bg-light"><a href="${Repodata[i].html_url}" style="text-decoration: none;" target="_blank">Visit Repo</a></span></td> 
            </tr>
        `;
        document.getElementById("reposname").innerHTML += reposData;
      }
    }
  };
  xhr.send();
});
