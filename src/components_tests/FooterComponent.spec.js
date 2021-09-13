
import React from 'react';
import renderer from 'react-test-renderer';
import FooterComponent from '../components/FooterComponent';

describe('FooterComponent', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<FooterComponent></FooterComponent>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
