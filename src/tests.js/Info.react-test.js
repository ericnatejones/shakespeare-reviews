import React from 'react';
import Link from '../Reviews/Info';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Info page={
      author: "Alexzander Armstrong"
      body: "All the world's a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts."
      id: "9783110055856"
      publish_date: "2016-08-31T23:25:47.642684Z"
      rating: 0.6
    }></Info>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
