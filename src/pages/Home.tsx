import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              🍻 Summer Street Tavern 🍻
            </h1>
            <h2 className="subtitle is-3 has-text-white" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
              Barre's Best Place to Hang Out!
            </h2>
            <div className="fun-banner" style={{display: 'inline-block', maxWidth: '600px'}}>
              Come as you are. Great drinks. Great music. Great times!
            </div>
            <div className="buttons is-centered mt-5">
              <Link to="/events" className="button is-primary is-large">
                🎵 See What's Happening
              </Link>
              <a href="tel:8026220055" className="button is-light is-large">
                📞 Give Us a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-5" style={{color: '#c92a2a'}}>Check Out Our Space!</h2>
          <div className="image-gallery">
            <img src="/images/bar-interior.jpg" alt="Bar interior with karaoke" />
            <img src="/images/interior-sports.jpg" alt="Sports on big screen" />
            <img src="/images/brews-brothers.jpg" alt="Brew's Brothers band" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h2 className="title is-2" style={{color: '#c92a2a'}}>Your Local Hangout Spot</h2>
              <p className="content is-size-5" style={{color: '#212529'}}>
                Summer Street Tavern is where Barre comes to have a good time!
                Whether you're catching the game, singing your heart out at karaoke,
                competing in our pool tournaments, or just grabbing a cold one with friends -
                we've got the vibe you're looking for.
              </p>
              <p className="content is-size-5" style={{color: '#212529'}}>
                <strong>Sports on the big screen?</strong> ✅<br/>
                <strong>Live music & karaoke?</strong> ✅<br/>
                <strong>Pool tables?</strong> ✅<br/>
                <strong>Cold drinks?</strong> ✅✅✅
              </p>
              <p className="content is-size-4 has-text-weight-bold" style={{color: '#c92a2a'}}>
                Sip Happens, Drink Responsibly! 🍺
              </p>
            </div>
            <div className="column is-6">
              <div className="special-card">
                <h3 className="title is-4">📍 Find Us Here</h3>
                <div className="content">
                  <p className="is-size-5">
                    <strong>30 Summer Street</strong><br />
                    Barre, VT 05641
                  </p>
                  <p className="is-size-5">
                    📞 <strong>(802) 622-0055</strong><br />
                    ✉️ <strong>Summerstreettavern@gmail.com</strong>
                  </p>
                  <hr style={{backgroundColor: 'rgba(255,255,255,0.3)'}} />
                  <p className="is-size-6">
                    ✓ Free Parking<br />
                    ✓ Free WiFi<br />
                    ✓ Wheelchair Accessible<br />
                    ✓ Pet Friendly<br />
                    ✓ Cards Welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Specials */}
      <section className="section">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-5" style={{color: '#c92a2a'}}>🎉 Weekly Specials!</h2>
          <div className="columns">
            <div className="column is-6">
              <div className="box event-card" style={{height: '100%'}}>
                <div className="content has-text-centered">
                  <img src="/images/wine-wednesday.jpg" alt="Wine Down Wednesday" style={{width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px'}} />
                  <h3 className="title is-4 mt-4" style={{color: '#c92a2a'}}>Wine Down Wednesday!</h3>
                  <p className="is-size-5">
                    <strong>$5 Any Glass of Wine</strong><br/>
                    <strong>$5 Hemp/THC Seltzer</strong><br/>
                    <strong>$5 Pink Whitney Shots</strong>
                  </p>
                  <p className="is-size-6 has-text-grey">Plus more specials - ask your bartender!</p>
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="box event-card" style={{height: '100%'}}>
                <div className="content has-text-centered">
                  <img src="/images/kandy-beer.jpg" alt="Kandy Beer" style={{width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px'}} />
                  <h3 className="title is-4 mt-4" style={{color: '#c92a2a'}}>Live Music!</h3>
                  <p className="is-size-5">
                    We host awesome local musicians like <strong>Kandy Beer</strong> every week!
                  </p>
                  <Link to="/events" className="button is-primary mt-3">
                    See Music Schedule
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Got */}
      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-2 has-text-centered mb-6" style={{color: '#c92a2a'}}>What We Got Going On</h2>
          <div className="columns is-multiline">
            <div className="column is-3">
              <div className="box has-text-centered event-card">
                <p className="is-size-1">🎸</p>
                <h3 className="title is-5 mt-3" style={{color: '#c92a2a'}}>Live Music</h3>
                <p>Local bands like Brew's Brothers bring the house down!</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="box has-text-centered event-card">
                <p className="is-size-1">🎤</p>
                <h3 className="title is-5 mt-3" style={{color: '#c92a2a'}}>Karaoke Nights</h3>
                <p>Unleash your inner rockstar - everyone's a star here!</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="box has-text-centered event-card">
                <p className="is-size-1">🎱</p>
                <h3 className="title is-5 mt-3" style={{color: '#c92a2a'}}>Pool Tournaments</h3>
                <p>Weekly tournaments with cash prizes!</p>
              </div>
            </div>
            <div className="column is-3">
              <div className="box has-text-centered event-card">
                <p className="is-size-1">📺</p>
                <h3 className="title is-5 mt-3" style={{color: '#c92a2a'}}>Sports on Big Screens</h3>
                <p>Catch all the games on our huge TVs!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="special-card has-text-centered">
            <h2 className="title is-2">Ready for a Good Time?</h2>
            <p className="subtitle is-4 mb-5">
              Come on down - first round's calling your name! 🍻
            </p>
            <div className="buttons is-centered">
              <Link to="/events" className="button is-light is-large">
                🎵 Check Out Events
              </Link>
              <a href="tel:8026220055" className="button is-dark is-large">
                📞 Call (802) 622-0055
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
