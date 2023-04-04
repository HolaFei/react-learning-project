export default function Layout() {
  return (
    <div className="page-layout">
      <nav>
        <ul>
          <li>
            <a href="/main">main</a>
          </li>
          <li>
            <a href="/page1">page1</a>
          </li>
          <li>
            <a href="/page2">page2</a>
          </li>
          <li>
            <a href="/page3">page3</a>
          </li>
        </ul>
      </nav>
      <div className="content">content</div>
    </div>
  );
}