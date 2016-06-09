import React from 'react';
import ReactDOM from 'react-dom';
import { 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import HiMom from '../../src/components/Hi-Mom';
import {expect} from 'chai';
describe('When Hi-Mom component is rendered:', () => {
    it('should render "Hi-Mom" component with h1 heading', () => {
        const component = renderIntoDocument(<HiMom/>);
        const hiMomHeader = scryRenderedDOMComponentsWithTag(component, 'h1');
        expect(hiMomHeader.length).to.eql(1);
    });
});
