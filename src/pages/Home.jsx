export default function Home() {
  return (
    <div className="container">
      <h1>Chats 'R'Us</h1>
      <p>Work communication made easy</p>
      <button>Get Started</button>
      <div className="features-wrapper">
        <div className="feature">
          <img src="/images/chat-min.png" alt="" className="imagesLP" />
          <h3 className="card-title">Real Time Chat</h3>
        </div>
        <div className="feature">
          <img src="/images/password.jpg" alt="" className="imagesLP" />
          <h3 className="card-title">Protected Password</h3>
        </div>
        <div className="feature">
          <img src="/images/coming-soon.jpg" alt="" className="imagesLP" />
          <h3 className="card-title">More coming soon</h3>
        </div>
      </div>
    </div>
  );
}
