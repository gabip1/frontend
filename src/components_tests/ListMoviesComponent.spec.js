import React from 'react';
import renderer from 'react-test-renderer';
import ListMoviesComponent from '../components/ListMoviesComponent';
import { render } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import MoviesService from '../services/MoviesService';


describe('ListMoviesComponent', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<ListMoviesComponent></ListMoviesComponent>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
