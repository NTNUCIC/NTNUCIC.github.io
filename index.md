---
---

## 相關連結

- [Facebook Group](https://www.facebook.com/groups/ntnucic)
- [Facebook Fans Page](https://www.facebook.com/NTNUCIC)
- [GitHub](https://github.com/ntnucic/)
- [Slides](http://ntnucic.github.io/104/)

<h2 id="fb_title">
  <a href="https://www.facebook.com/groups/ntnucic/">臺師大資訊研究社公開版</a>
</h2>

<ul id="fb_posts">
</ul>

<script>
  fetch('https://graph.facebook.com/575629159242410/feed?access_token=1764433087110919|P5Iz7NORruUb8OA2M1m5Wn7_waw').then(function(response) {
    return response.json();
  }).then( (posts) => {
  console.log(posts);
    var content = "", msg;
    posts.data.forEach( (post) => {
      if (post.message) {
        msg = post.message;
        msg = msg.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }

      content += `
        <li>
          <img src="https://graph.facebook.com/${post.from.id}/picture?width=60&height=60" alt="${post.from.name}" class="avatar" />
          <div class="user_name">${post.from.name}</div>
          <p class="content">`;

          var before = false;

          if(msg) {
            content += `<a href="https://facebook.com/${post.id} ">${msg}</a>`
            before = true;
          }
          if(post.link) {
            content += before?"<br>":"[Share]";
            content += `<a href="${post.link}" class="link">${post.name?post.name:""}</a>`
            before = true;
          }
          if(post.picture) {
            content += before?"<br>":"";
            content += `<img src="${post.picture}" alt="" class="share_img" />`
          }

          content += `</p>
        </li>
        `;
    });
    return content;
  })
  .catch(function(err) {
    return "<p>請點選標題連結以觀看社團貼文！</p>";
  }).then(function (content) {
    document.getElementById('fb_posts').innerHTML += content;
  });
</script>
