export default function Profile({ url, names, tags, locations, followers, views, likes }) {
  return (
    <div class="profile">
      <div class="description">
        <img src={url} alt="Аватар пользователя" class="avatar" />
        <p class="name">{names}</p>
        <p class="tag">{tags}</p>
        <p class="location">{locations}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">{followers}</span>
          <span class="quantity">100</span>
        </li>
        <li>
          <span class="label">{views}</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">{likes}</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}
