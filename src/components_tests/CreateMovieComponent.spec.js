
import React from 'react';
import renderer from 'react-test-renderer';
import CreateMovieComponent from '../components/CreateMovieComponent';
import { render } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';
import MoviesService from '../services/MoviesService';

jest.mock('../services/MoviesService')
configure({adapter: new Adapter()});


describe('CreateMovieController', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<CreateMovieComponent></CreateMovieComponent>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

    describe('saveMovie', ()=> {
        it('calls service to save provided movie object', () =>{
            let MockedState = {
                title: "La la land",
                director: "Damien Chazele",
                genre: "Musical"
            }
            MoviesService.createMovie = jest.fn(() => new Promise((res, rej) => {}));

            const saveMovieComponent = mount(<CreateMovieComponent></CreateMovieComponent>);
            saveMovieComponent.setState(MockedState);

            const buttonToClick = saveMovieComponent.find(".btn-success").simulate('click');
            expect(MoviesService.createMovie).toHaveBeenCalled();
        })
    })
})
