import { NavLink } from 'react-router-dom';
import './Footer.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? 'footer_link footer-active' : 'footer_link'}`;

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer_list">
        <li className="footer_item">
          <NavLink
            to="/news"
            className={getLinkClass}
          >
            <div className="icon-area">
              <img
                src="data:image/png;base64,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"
                alt="news"
                className="icon"
              />
            </div>
          </NavLink>
        </li>

        <li className="footer_item">
          <NavLink
            to="/profile/2"
            className={getLinkClass}
          >
            <div className="icon-area">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD8/vz///+pqqkwMTCztLO+wL7Mzsz5+/lfYF/v8e/2+PabnJuCg4L6/PpJSknn6eeIiYgfHx/X2ddaW1oNDQ2io6KQkZDJy8kmJyYWFhY3Nzc9PT1CQ0KVlpVOT05+f364ubjg4uBrbGssLCx1dnVViRvRAAAE+0lEQVR4nO2di3qqMAyAIchE0HnBed+8be//ikfk6EBBaZualOV/gv5fCr2lqecJgiAIgiAIgiAITNh89t9uCTfD4Qd1w1CYHMMUahilYY+6fabMu8nJxK8hs4xnc+pG6jNYPLArWPrzCXVTtRiMnutdLd8+qZurzDhu7Jc7LqhbrMZ6oeR3dvTH1K1WYJ6o+p0d0w11wxsymen4ZYpRh7rtjfiINQWznjqjbn0DDAQzRwcUjQQdUJwYCvJXDEwFT4pLaolH6P5FS4Y+Y8VPBMGT4p7ao553DMGT4he1SB1vKCHMFIfUKtXg9NGzYZfapRq0EJ4Ut9QyVXTwBH2eaynEEPL8Er8xBVl+iagh5BjEDa4gw+npHNnQB2qjW0bohgNqpTJbbEEfUmqnMn10Qz/htWnTxTcEVkcaS6RVRcmQ1YeIOWO7GrIa9JetN0QfDX1us+/QgqHPar/GiiFwGi7EUAzFkB4xFEMxpEcMxVAM6RFDMRRDesRQDP+o4Xvbd6Lav5vIa0dYDMVQDOlp/9lT+88PxVAMxZAeMdQyfKO2KmLFcEptVWRlfBmowpBVTpS3aL1h6/Pa/oAhxpWuG5I1tVSJKX4G7YHaqUwP33BE7XQDfp43t3IZB3TDHbXSDbvW30bA/hAZXiTFNjxSC92BnCbMrpN6yEHktXT6D+rEjdmULWeIeYeU2ZWgHLOSHzeGfWqbSsZ4hgm1SzXtv62OWHGAa+WvHyRDtiE0rr5zNeRb9QsniBBTe9TzgWPIN4QoJYZYh9DzvhHukrKckv6CcKAPvCvvmR/oMw+h5+2Nq5lxymarxNCQfQg9LzWsucc+hN7KyNCBEBr+Tpn/SHM6BmOiEyE0CiLwOm+qY6JfoTWgbntDdLczeM9IS2geRLFeVJQ5ahnySl1/gtaODc9SgjXo1DbjV7/sIQNlRZ7b3A9QP8VwqY9mrBULzzszFP6iln/C8Mj3OUol3JgVZ2uIwrgP39SN1aOxolNjfZHGezZsT2IeMNkGC5VeOloEW3ee0+nsxocYGjwTVFTM3kU6jH+o296E/sFXtCtaJocv1iP/Joz05EqaUch0s6a3b/7A0zPL0Z5dtskqe78KMRfjJBlyeneuF2LqXSVTJjcuVv0UXe8i6fdX1Hretp9Y8ssl4y7tv3XYtamXO0KXrjz7OLLulztGNJtwcwt3nWol49fntc/VXv8zVny144v6Z9nxhX11rPX4H4Jk8hrHV35/d47xzrrf1Orw91wRLI+PLxj/GjjaGx8Z+GXYc+yz8MsAK3ngs4iLXwZE2Oc4X2zidwFQb7P3DNOA7AAp1kZAz9b6zxTAcZxy9ctA2AfYcvbLAFiYbAMsA1Y/0GrgPdDN9pumRDNsVSDR66sB8/5ZBNSzAJYu+WUAKPXViQvf3y0QBY1Pr8aOxe8CNEwbO6KXR3gdMGpwBXzvaABz4GlSx5BwiwIHiB8uHt0OYM6jMK5ZLiHUgagmO6fnyBTmOZBUrjn4bFKYU7nNYeGdTUruFVsmeK/YOsFbxSV1c2xQrB6ycnCi/RwoVHwzvhbJk99FI2LJDl5c1xrUDbFILvjV1hBeUnMxawOx45yba+MtXzacr2w6vyJ8CKzb+yPNgRClWAdjIBBD1xFD9xFD9xFD9xFD9xFD9xFD9xFD9xFD9xFD9/kThtkV3jYTVqdlCIIgCIIgCIIgCGX+AQLXdRAYR9x5AAAAAElFTkSuQmCC"
                alt="profile"
                className="icon"
              />
            </div>
          </NavLink>
        </li>

        <li className="footer_item">
          <NavLink
            to="/messages"
            className={getLinkClass}
          >
            <div className="icon-area">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TWUyFGiDsHEkj3E8e4FUz5sa3kCr6OnoJw&usqp=CAU"
                alt="messages"
                className="icon"
              />
            </div>
          </NavLink>
        </li>

        <li className="footer_item">
          <NavLink
            to="/people"
            className={getLinkClass}
          >
            <div className="icon-area">
              <img
                src="https://i.pinimg.com/564x/92/58/30/92583023ceb0dd720a062ed7bbc38af5.jpg"
                alt="people"
                className="icon"
              />
            </div>
          </NavLink>
        </li>

        <li className="footer_item">
          <NavLink
            to="/services"
            className={getLinkClass}
          >
            <div className="icon-area">
              <img
                src="https://assets.stickpng.com/images/588a64e0d06f6719692a2d10.png"
                alt="people"
                className="icon"
              />
            </div>
          </NavLink>
        </li>
      </ul>
    </footer>
  );
}
