const Header: React.FC = () => (
  <>
    <style jsx>{`
      .logo {
        height: 60px;
        margin-bottom: -10px;
      }
    `}</style>
    <div className="has-text-right">
      <a href="/">
        <img src="/static/logo.png" className="logo" />
      </a>
      <p className="heading">Experience the extraordinary</p>
    </div>

    <hr />
  </>
);

export default Header;
