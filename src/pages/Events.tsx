import { useState } from 'react';
import type { Event } from '../types';

const Events = () => {
  // Sample events data - developers can easily edit this
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: "Brew's Brothers Live",
      date: '2025-11-20',
      time: '6:00 PM',
      description:
        "They're back! Grab your crew, snag a table, and let's kick off the night right. Come as you are. Great drinks. Great music.",
      type: 'music',
    },
    {
      id: '2',
      title: 'Karaoke Night',
      date: '2025-11-21',
      time: '8:00 PM',
      description:
        'Show off your singing skills! Our karaoke nights are always a blast. Sign up when you arrive and take the stage!',
      type: 'karaoke',
    },
    {
      id: '3',
      title: 'Weekly Pool Tournament',
      date: '2025-11-22',
      time: '7:00 PM',
      description:
        'Join us for our weekly pool tournament. All skill levels welcome. Cash prizes for winners!',
      type: 'tournament',
    },
    // Add more events here as needed
  ]);

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'music':
        return 'fa-music';
      case 'karaoke':
        return 'fa-microphone';
      case 'tournament':
        return 'fa-trophy';
      case 'special':
        return 'fa-star';
      default:
        return 'fa-calendar';
    }
  };

  const getEventColor = (type: Event['type']) => {
    switch (type) {
      case 'music':
        return 'is-info';
      case 'karaoke':
        return 'is-success';
      case 'tournament':
        return 'is-warning';
      case 'special':
        return 'is-danger';
      default:
        return 'is-primary';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              🎉 Events & Music 🎉
            </h1>
            <h2 className="subtitle is-3 has-text-white" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
              Where the Party's At!
            </h2>
            <p className="is-size-5 has-text-white mt-3">
              Live Music • Karaoke • Pool Tournaments • Good Times!
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <h2 className="title is-3 has-text-centered mb-5">Upcoming Events</h2>

          <div className="columns is-multiline">
            {events.map((event) => (
              <div key={event.id} className="column is-4">
                <div className={`card event-card`}>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <span
                          className={`icon is-large has-text-${
                            getEventColor(event.type).split('-')[1]
                          }`}
                        >
                          <i className={`fas ${getEventIcon(event.type)} fa-2x`}></i>
                        </span>
                      </div>
                      <div className="media-content">
                        <p className="title is-5">{event.title}</p>
                        <p className="subtitle is-6">{formatDate(event.date)}</p>
                      </div>
                    </div>

                    <div className="content">
                      <p className="has-text-weight-bold">
                        <span className="icon">
                          <i className="fas fa-clock"></i>
                        </span>
                        {event.time}
                      </p>
                      <p>{event.description}</p>
                      <span className={`tag ${getEventColor(event.type)} mt-3`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="notification is-warning mt-5">
            <p className="has-text-centered has-text-weight-bold">
              Event schedules are subject to change. For the most up-to-date information,
              follow us on Facebook or give us a call at (802) 622-0055!
            </p>
          </div>
        </div>
      </section>

      {/* Regular Events */}
      <section className="section has-background-light">
        <div className="container">
          <h2 className="title is-2 has-text-centered has-text-orange mb-5">What Happens Here Every Week!</h2>

          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="box has-text-centered event-card">
                <p className="is-size-1">🎸</p>
                <h3 className="title is-4 mt-3 has-text-orange">Live Music</h3>
                <p className="subtitle is-6">Check our Facebook!</p>
                <p>
                  Local bands crush it here every week! From rock to country,
                  we got the tunes that make you move. 🎵
                </p>
              </div>
            </div>

            <div className="column is-4">
              <div className="box has-text-centered event-card">
                <p className="is-size-1">🎤</p>
                <h3 className="title is-4 mt-3 has-text-orange">Karaoke Nights</h3>
                <p className="subtitle is-6">Be the Star!</p>
                <p>
                  No judgment zone! Whether you can sing or just have fun trying,
                  everyone's welcome on our stage! 🌟
                </p>
              </div>
            </div>

            <div className="column is-4">
              <div className="box has-text-centered event-card">
                <p className="is-size-1">🎱</p>
                <h3 className="title is-4 mt-3 has-text-orange">Pool Tournaments</h3>
                <p className="subtitle is-6">Every Week!</p>
                <p>
                  Think you got skills? Prove it! Cash prizes, bragging rights,
                  and good times guaranteed! 💰
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artist Section */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <img src="/summerstreettavern/images/brews-brothers.jpg" alt="Brew's Brothers Band" style={{width: '100%', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)'}} />
            </div>
            <div className="column is-7">
              <div className="special-card">
                <h2 className="title is-2">🎸 Brew's Brothers 🎸</h2>
                <p className="content is-size-5">
                  These guys are LEGENDS! The Brew's Brothers pack the house every time
                  they play. If you haven't seen them live, you're missing out!
                </p>
                <p className="is-size-5">
                  <strong>Genre:</strong> Rock • Classic Hits • Party Anthems
                </p>
                <p className="is-size-5 mt-3">
                  <strong>Vibes:</strong> High energy, sing-alongs, and good times!
                  These dudes know how to put on a show. 🔥
                </p>
                <a
                  href="https://www.facebook.com/p/Summer-Street-Tavern-61571219378964/"
                  className="button is-light is-large mt-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📅 See Their Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section has-background-light">
        <div className="container">
          <div className="special-card has-text-centered">
            <h2 className="title is-2">Don't Miss Out! 🎉</h2>
            <p className="subtitle is-4 mb-5">
              Follow us on Facebook to stay in the loop - we're always adding new events!
            </p>
            <div className="buttons is-centered">
              <a
                href="https://www.facebook.com/p/Summer-Street-Tavern-61571219378964/"
                className="button is-light is-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                👍 Follow on Facebook
              </a>
              <a href="tel:8026220055" className="button is-dark is-large">
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Submission Note */}
      <section className="section">
        <div className="container">
          <div className="box event-card">
            <div className="content has-text-centered">
              <h3 className="title is-4 has-text-orange">🎤 Want to Play Here?</h3>
              <p className="is-size-5">
                We're always on the lookout for awesome musicians and entertainers!
                Got a band? Solo act? Unique talent? Let's talk!
              </p>
              <p className="mt-3">
                📧 <a href="mailto:Summerstreettavern@gmail.com" className="has-text-orange has-text-weight-bold">
                  Summerstreettavern@gmail.com
                </a><br/>
                📞 <strong>(802) 622-0055</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
