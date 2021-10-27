const LinksSocialMedia = {
  github: 'Dabi20Nil',
  youtube: 'UCT06VgZaU_ZgztBYHQ33fsA',
  facebook: 'nilson.schafer',
  instagram: 'nylschafer_94',
  twitter: 'NilSchafer94'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getInfoGitHubProfiles() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userLogin.textContent = data.login
      userGit.href = data.html_url
      userBio.textContent = data.bio
    })
}

getInfoGitHubProfiles()
