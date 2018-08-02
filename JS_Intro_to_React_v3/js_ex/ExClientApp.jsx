const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'my-first-element' },
    ce(MyTitle, { title: 'One', color: 'Yellow' }),
    ce(MyTitle, { title: 'Two', color: 'Red' }),
    ce(MyTitle, { title: 'Three', color: 'Green' }),
    ce(MyTitle, { title: 'Four', color: 'Blue' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
