import React from 'react';
import ReactDOM from 'react-dom';
import { 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import HiMom from '../../src/components/Hi-Mom';
import {expect} from 'chai';
describe('When Hi-Mom component is rendered:', () => {
    it('should render "Hi-Mom" component with h1 heading w/ "Hi Mom!"', () => {


        const component = renderIntoDocument(
            <HiMom 
                className='hi-mom'
                text='Hi Mom!'
            />
        );
        const hiMomHeader = scryRenderedDOMComponentsWithTag(component, 'h1');

        let  [h1] = hiMomHeader; 

        expect(hiMomHeader.length).to.eql(1);
        expect(h1.className).to.eql('hi-mom');
        expect(h1.textContent).to.eql('Hi Mom!');
    });
});
