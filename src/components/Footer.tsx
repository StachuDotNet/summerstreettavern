const Footer = () => {
  return (
    <footer className="footer has-background-dark has-text-light">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h3 className="title is-5 has-text-gold">Summer Street Tavern</h3>
            <p className="subtitle is-6 has-text-light">
              Your neighborhood bar in Barre, Vermont
            </p>
            <p className="has-text-light">
              Sip Happens, Drink Responsibly!
            </p>
          </div>

          <div className="column is-4">
            <h4 className="title is-6 has-text-gold">Location & Hours</h4>
            <p className="has-text-light">
              30 Summer Street<br />
              Barre, VT 05641
            </p>
            <p className="has-text-light mt-3">
              <strong className="has-text-gold">Phone:</strong> (802) 622-0055<br />
              <strong className="has-text-gold">Email:</strong> Summerstreettavern@gmail.com
            </p>
          </div>

          <div className="column is-4">
            <h4 className="title is-6 has-text-gold">Connect With Us</h4>
            <p className="has-text-light">
              Follow us on Facebook for the latest events, specials, and updates!
            </p>
            <div className="mt-3">
              <a
                href="https://www.facebook.com/p/Summer-Street-Tavern-61571219378964/"
                className="button is-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="content has-text-centered mt-5">
          <p className="has-text-light">
            &copy; {new Date().getFullYear()} Summer Street Tavern. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
