import React from 'react';
import ReactDOM from 'react-dom';
import { 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import HiMom from '../../src/components/Hi-Mom';
import {expect} from 'chai';

let expectedProps;

describe('When Hello World component is rendered:', () => {
    it('should render "Hello World" component with h1 heading w/ "Hi Mom!"', () => {

        expectedProps = {
            className: 'hi-mom',
            text : 'Hello World!!!!'
        };



        let {className, text} = expectedProps;
        const component = renderIntoDocument(
            <HiMom 
                className={className}
                text={text}
            />
        );
        const hiMomHeader = scryRenderedDOMComponentsWithTag(component, 'h1');

        let  [h1] = hiMomHeader; 

        expect(hiMomHeader.length).to.eql(1);
        expect(h1.className).to.eql(className);
        expect(h1.textContent).to.eql(text);
    });
});
