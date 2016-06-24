import React from 'react';
import ReactDOM from 'react-dom';
import { 
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';

import VendingMachine from '../../src/components/vending-machine';

let expectedProps;

describe('When Vending Machine component is rendered:', () => {
    it('should render everything inside of a container div', () => {
        const component = renderIntoDocument(<VendingMachine/>);
        const divContainer = scryRenderedDOMComponentsWithTag(component, 'div');
        expect(divContainer.length).to.eql(1);
    });
});


