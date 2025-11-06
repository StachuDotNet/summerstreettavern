const PoolTournament = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-white">
              Weekly Pool Tournament
            </h1>
            <h2 className="subtitle is-4 has-text-white">
              Every Wednesday at 7:00 PM
            </h2>
          </div>
        </div>
      </section>

      {/* Pool Table Image */}
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <figure className="image">
                <img src={import.meta.env.BASE_URL + "images/pool-table.jpg"} alt="Pool table at Summer Street Tavern" style={{borderRadius: '8px'}} />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Info */}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <div className="content">
                <h2 className="title is-3">King of Pubs Pool Tournament</h2>
                <p className="is-size-5">
                  Summer Street Tavern hosts a weekly pool tournament organized by{' '}
                  <a
                    href="https://www.facebook.com/people/King-of-Pubs/61556131903735/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="has-text-orange"
                  >
                    King of Pubs
                  </a>
                  . King of Pubs runs weekly tournaments at great pubs across NH, ME, and VT,
                  and donates money to David's House.
                </p>

                <div className="box mt-5">
                  <h3 className="title is-5">Tournament Details</h3>
                  <div className="content">
                    <ul>
                      <li><strong>When:</strong> Every Wednesday at 7:00 PM</li>
                      <li><strong>Entry Fee:</strong> $13</li>
                      <li><strong>Format:</strong> 8-Ball Singles</li>
                      <li><strong>Registration:</strong> Starts at 6:30 PM</li>
                      <li><strong>Skill Level:</strong> All abilities welcome</li>
                      <li><strong>Equipment:</strong> Quality pool tables and cues provided</li>
                      <li><strong>Bar:</strong> Full bar available throughout the tournament</li>
                    </ul>
                  </div>
                </div>

                <div className="notification is-info mt-4">
                  <p>
                    <strong>Note:</strong> Schedules may change. Call us at (802) 622-0055 or check our
                    Facebook page for weekly updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="column is-5">
              <div className="box">
                <h3 className="title is-5">Quick Info</h3>
                <div className="content">
                  <p>
                    <strong>Day:</strong> Wednesday<br />
                    <strong>Time:</strong> 7:00 PM<br />
                    <strong>Entry Fee:</strong> $13<br />
                    <strong>Check-in:</strong> 6:30 PM<br/>
                    <strong>Prize:</strong> Cash prize pool
                  </p>
                </div>
                <a
                  href="tel:8026220055"
                  className="button is-primary is-fullwidth mb-3"
                >
                  Call (802) 622-0055
                </a>
                <a
                  href="https://www.facebook.com/people/King-of-Pubs/61556131903735/"
                  className="button is-link is-fullwidth mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  King of Pubs Facebook
                </a>
                <a
                  href="https://www.facebook.com/p/Summer-Street-Tavern-61571219378964/"
                  className="button is-dark is-fullwidth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our Facebook Page
                </a>
              </div>

              <div className="box mt-4">
                <h4 className="title is-6">House Rules</h4>
                <div className="content is-small">
                  <ul>
                    <li>Respect all players and staff</li>
                    <li>No coaching during matches</li>
                    <li>Standard 8-ball rules apply</li>
                    <li>Tournament director's decision is final</li>
                    <li>Have fun and play fair</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PoolTournament;
