import {assert} from 'chai';
import {renderComponent} from 'support/rendering';
import GridLayout from 'components/layouts/GridLayout';

describe('GridLayout', () => {

  it('renders default', () => {
    let {props} = renderComponent(GridLayout, {}, ['foo']);
    assert.deepEqual(props, {
      children: ['foo'],
      className: '',
      style: {
        width: '100%',
        display: 'table',
        tableLayout: 'fixed',
        borderSpacing: 16
      }
    });
  });

  it('renders custom className', () => {
    let {props} = renderComponent(GridLayout, {className: 'Test'});
    assert.equal(props.className, 'Test');
  });

  it('renders custom spacing', () => {
    let {props} = renderComponent(GridLayout, {spacing: 8});
    assert.equal(props.style.borderSpacing, 8);
  });
});
