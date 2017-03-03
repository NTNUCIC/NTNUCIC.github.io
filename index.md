---
---

## 相關連結

- [Facebook Group](https://www.facebook.com/groups/ntnucic)
- [Facebook Fans Page](https://www.facebook.com/NTNUCIC)
- [GitHub](https://github.com/ntnucic/)
- [Slides](http://www.ntnucic.club/Courses/)

<h2 id="fb_title">
  <a href="https://www.facebook.com/ntnucic/">臺師大資訊研究社粉專</a>
</h2>

<ul id="fb_posts">
</ul>

<script>
  fetch('https://graph.facebook.com/NTNUCIC/feed?access_token=1767756620111473|jyBfjNiktbQfB5vjEXTTz_zCFzs').then(function(response) {
    return response.json();
  }).then( (posts) => {
    var content = "";
    posts.data.forEach( (post) => {
      if (post.message) {
        var msg = post.message
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
        var post_id = post.id.split("_")[1];
        content += `
          <li>
            <a href="http://facebook.com/NTNUCIC/posts/${post_id}">
              <p>
                <img src="/images/loud.svg" alt="" width="40" height="40">
                ${msg}
              </p>
            </a>
          </li>`;
      }
    });
    return content;
  })
  .catch(function(err) {
    return "<p>請點選標題連結以觀看社團貼文！</p>";
  }).then(function (content) {
    document.getElementById('fb_posts').innerHTML += content;
  });
</script>
