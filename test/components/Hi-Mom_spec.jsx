import React from 'react';
import ReactDOM from 'react-dom';
import { 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import HiMom from '../../src/components/Hi-Mom';
import {expect} from 'chai';

let expectedProps;

describe('When Hi-Mom component is rendered:', () => {
    it('should render "Hi-Mom" component with h1 heading w/ "Hi Mom!"', () => {

        expectedProps = {
            className: 'hi-mom',
            text : 'Hi Mom!'
        };

        const component = renderIntoDocument(
            <HiMom 
                className={expectedProps.className}
                text={expectedProps.text}
            />
        );
        const hiMomHeader = scryRenderedDOMComponentsWithTag(component, 'h1');

        let  [h1] = hiMomHeader; 

        expect(hiMomHeader.length).to.eql(1);
        expect(h1.className).to.eql(expectedProps.className);
        expect(h1.textContent).to.eql(expectedProps.text);
    });
});
