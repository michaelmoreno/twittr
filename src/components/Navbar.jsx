import twitter from '../imgs/013-twitter-1.svg';

const Navbar = () => (
  <section>
    <nav>
      <img src={twitter} alt="Test"/>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Explore</a></li>
        <li><a href="">Notifications</a></li>
        <li><a href="">Messages</a></li>
        <li><a href="">Bookmarks</a></li>
        <li><a href="">Lists</a></li>
        <li><a href="">Profile</a></li>
        <li><a href="">More</a></li>
      </ul>
      <button>Tweet</button>
    </nav>
  </section>
)

export default Navbar