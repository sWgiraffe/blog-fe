import * as React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import style from './style.less';

function About() {
  return (
    <div>about</div>
  );
}

function NoMatch() {
  return (
    <div>no match</div>
  );
}

const NavbarItems = [
  { path: 'home', text: '首页' },
  { path: 'fe', text: '前端' },
  { path: 'be', text: '后端' },
  { path: 'other', text: '杂谈' },
  { path: 'about', text: '关于作者' },
];

class Frame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className={style.header}>
          <div className={style.container}>
            <ul className={style.navbar}>
              {
                NavbarItems.map(item => 
                  <li>
                    <NavLink to={item.path}>
                      {item.text}
                    </NavLink>
                  </li>
                )
              }
            </ul>
          </div>
        </header>
        <section className={style.content}>
          <section className={style.main}>
            <Switch>
              <Route path='/about' component={About} />
              <Route component={NoMatch}/>
            </Switch>
          </section>
          <section className={style.sidebar}>
            <h1>sidebar</h1>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Frame;