import React from 'react';
import ReactDOM from 'react-dom';
import { 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import HiMom from '../../src/components/Hi-Mom';
import {expect} from 'chai';
describe('Hi-Mom', () => {
    it('should render "Hi-Mom"', () => {
        const component = renderIntoDocument(<HiMom/>);
        const hiMomHeader = scryRenderedDOMComponentsWithTag(component, 'h1');
        //console.log(hiMomHeader); 
        expect(hiMomHeader.length).to.eql(1);

    });
});
