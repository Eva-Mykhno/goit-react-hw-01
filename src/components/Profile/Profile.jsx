import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <img className={s.image} src={image} alt={name} />
        <p className={s.name}>{name}</p>
        <p className={s.text}>{tag}</p>
        <p className={s.text}>{location}</p>
      </div>

      <ul className={s.media}>
        <li className={s.card}>
          <span className={s.titleCard}>Followers</span>
          <span className={s.number}>{stats.followers}</span>
        </li>
        <li className={s.card}>
          <span className={s.titleCard}>Views</span>
          <span className={s.number}>{stats.views}</span>
        </li>
        <li className={s.card}>
          <span className={s.titleCard}>Likes</span>
          <span className={s.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
